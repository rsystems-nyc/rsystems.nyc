import { NextResponse, type NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

// The production apex is never gated, even if the flag somehow leaked into a
// prod environment. This is the second of two independent safeguards (the
// first being that PREVIEW_AUTH_ENABLED / the OIDC secrets are only ever set
// in .env.local on the dev host, never in Git and never on Vercel).
const PROD_HOSTS = new Set(["rsystems.nyc", "www.rsystems.nyc"]);

export async function proxy(req: NextRequest) {
  // Disabled unless explicitly turned on. Prod never sets this, so the gate
  // (and all Auth.js logic below) is inert there.
  if (process.env.PREVIEW_AUTH_ENABLED !== "true") return NextResponse.next();

  const host = (req.headers.get("host") ?? "").split(":")[0].toLowerCase();
  if (PROD_HOSTS.has(host)) return NextResponse.next();

  // Verify the Auth.js session cookie (HTTPS → __Secure- prefixed).
  const token = await getToken({
    req,
    secret: process.env.AUTH_SECRET,
    secureCookie: true,
  });
  if (token) return NextResponse.next();

  // No valid session — send to the JumpCloud sign-in and come back here after.
  const signInUrl = new URL("/api/auth/signin", req.nextUrl.origin);
  signInUrl.searchParams.set("callbackUrl", req.nextUrl.pathname + req.nextUrl.search);
  return NextResponse.redirect(signInUrl);
}

export const config = {
  // Gate everything except the auth routes themselves, Next internals, and
  // public static assets (favicon/icons/robots/sitemap/assets).
  matcher: [
    "/((?!api/auth|_next/static|_next/image|favicon\\.ico|icon\\.png|apple-icon\\.png|robots\\.txt|sitemap\\.xml|assets/).*)",
  ],
};

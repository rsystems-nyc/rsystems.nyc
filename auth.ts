import NextAuth from "next-auth";

/**
 * Auth.js (NextAuth v5) configured with JumpCloud as a generic OIDC provider.
 *
 * This powers the access gate on the dev host (dev.rsystems.nyc) only. Every
 * value comes from the environment (see .env.example). On Vercel/production
 * none of these are set, and `middleware.ts` never invokes auth there, so this
 * config is completely inert in prod.
 *
 * `trustHost` is required because the dev host is self-hosted behind a reverse
 * proxy — Auth.js needs to trust the forwarded Host to build callback URLs.
 */
export const { handlers, signIn, signOut, auth } = NextAuth({
  trustHost: true,
  providers: [
    {
      id: "jumpcloud",
      name: "JumpCloud",
      type: "oidc",
      issuer: process.env.JUMPCLOUD_ISSUER,
      clientId: process.env.JUMPCLOUD_CLIENT_ID,
      clientSecret: process.env.JUMPCLOUD_CLIENT_SECRET,
      authorization: { params: { scope: "openid profile email" } },
    },
  ],
});

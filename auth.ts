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
      // JumpCloud requires the OAuth `state` parameter; Auth.js defaults to
      // PKCE-only for OIDC and omits it, which JumpCloud rejects with
      // invalid_state. Send state (and the OIDC nonce) explicitly.
      checks: ["pkce", "state", "nonce"],
      // JumpCloud's OIDC client expects credentials in the POST body; Auth.js
      // defaults to HTTP Basic (client_secret_basic) → invalid_client. Match it.
      client: { token_endpoint_auth_method: "client_secret_post" },
      // Auth.js has no bundled JumpCloud logo (its default img 404s). Use the
      // RSystems mark (same asset as the favicon) on the sign-in button.
      style: { logo: "/icon.png", brandColor: "#E8500A" },
    },
  ],
});

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Required: rsystems.nyc proxies to the dev server; without this Next.js blocks HMR and React won't hydrate on mobile
  allowedDevOrigins: ['rsystems.nyc'],
  devIndicators: false,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "macktez.com" },
      { protocol: "https", hostname: "www.macktez.com" },
    ],
  },
};

export default nextConfig;

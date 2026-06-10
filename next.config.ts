import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Required: rsystems.nyc proxies to the dev server; without this Next.js blocks HMR and React won't hydrate on mobile
  allowedDevOrigins: ['rsystems.nyc'],
  async redirects() {
    return [
      { source: '/about/our-work', destination: '/about/track-record', permanent: true },
      { source: '/about/our-work/', destination: '/about/track-record', permanent: true },
      { source: '/about/pulsar-map', destination: '/about/our-story', permanent: true },
      { source: '/about/pulsar-map/', destination: '/about/our-story', permanent: true },
    ];
  },
  devIndicators: false,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "macktez.com" },
      { protocol: "https", hostname: "www.macktez.com" },
      { protocol: "https", hostname: "media.audubon.org" },
      { protocol: "https", hostname: "azure.microsoft.com" },
    ],
  },
};

export default nextConfig;

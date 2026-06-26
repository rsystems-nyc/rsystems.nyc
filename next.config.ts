import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Required: rsystems.nyc proxies to the dev server; without this Next.js blocks HMR and React won't hydrate on mobile
  allowedDevOrigins: ['rsystems.nyc', 'dev.rsystems.nyc'],
  async redirects() {
    return [
      { source: '/about/our-work', destination: '/about/track-record', permanent: true },
      { source: '/about/our-work/', destination: '/about/track-record', permanent: true },
      { source: '/about/pulsar-map', destination: '/about/our-story', permanent: true },
      { source: '/about/pulsar-map/', destination: '/about/our-story', permanent: true },
      { source: '/services/management/workstation', destination: '/services/management/endpoint-management', permanent: true },
      { source: '/services/management/workstation/', destination: '/services/management/endpoint-management', permanent: true },
      { source: '/industries/software-engineering', destination: '/industries/technology-software', permanent: true },
      { source: '/industries/software-engineering/', destination: '/industries/technology-software', permanent: true },
      { source: '/industries/advertising-marketing', destination: '/industries/design-advertising', permanent: true },
      { source: '/industries/advertising-marketing/', destination: '/industries/design-advertising', permanent: true },
    ];
  },
  devIndicators: false,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "macktez.com" },
      { protocol: "https", hostname: "www.macktez.com" },
      { protocol: "https", hostname: "media.audubon.org" },
      { protocol: "https", hostname: "azure.microsoft.com" },
      { protocol: "https", hostname: "upload.wikimedia.org" },
      { protocol: "https", hostname: "community.fs.com" },
    ],
  },
};

export default nextConfig;

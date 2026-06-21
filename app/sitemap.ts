import { MetadataRoute } from "next";
import { servicesData } from "@/app/lib/services-data";
import { caseStudiesData } from "@/app/lib/case-studies-data";
import { articles } from "@/app/resources/university/articles";
import { glossaryTerms } from "@/app/lib/glossary-terms";

const BASE_URL = "https://rsystems.nyc";

const industryRoutes = [
  "/industries",
  "/industries/startups",
  "/industries/video-post-production",
  "/industries/financial-services",
  "/industries/architecture-design",
  "/industries/nonprofits",
  "/industries/event-production",
  "/industries/parks-recreation",
  "/industries/education",
  "/industries/software-engineering",
  "/industries/audio-production",
  "/industries/advertising-marketing",
  "/industries/healthcare",
  "/industries/product-design",
];

const managementRoutes = [
  "/services/management",
  "/services/management/core-suite",
  "/services/management/identity",
  "/services/management/endpoint-management",
  "/services/management/essentials",
  "/services/management/backup",
  "/services/management/network",
  "/services/management/domain",
  "/services/management/server",
  "/services/management/awareness",
  "/services/management/support",
];

const buildoutRoutes = [
  "/services/buildout",
];

const ephemeralRoutes = [
  "/services/ephemeral",
];

const aiRoutes = [
  "/services/ai",
  "/services/ai/ai-enablement",
  "/services/ai/mcp-tooling",
  "/services/ai/agent-governance",
  "/services/ai/audit-accountability",
];

const techConsultingRoutes = [
  "/services/technology-consulting",
  "/services/technology-consulting/strategy",
  "/services/technology-consulting/ai",
  "/services/technology-consulting/cloud",
  "/services/technology-consulting/identity-security",
  "/services/technology-consulting/networking",
  "/services/technology-consulting/compute-storage",
  "/services/technology-consulting/initial-assessment",
  "/services/technology-consulting/network-engineering",
  "/services/technology-consulting/azure-consulting-and-development",
  "/services/technology-consulting/synology-storage-consulting",
  "/services/technology-consulting/dell-poweredge-server-solutions",
  "/services/technology-consulting/vmware-administration-infrastructure-design",
  "/services/technology-consulting/firewall-and-network-security",
  "/services/technology-consulting/password-management",
  "/services/technology-consulting/jumpcloud-consulting",
  "/services/technology-consulting/okta-consulting",
  "/services/technology-consulting/entra-and-intune-consulting",
  "/services/technology-consulting/cloud-storage-and-computing-solutions",
  "/services/technology-consulting/disaster-recovery-plan-development",
  "/services/technology-consulting/cybersecurity-assessment",
  "/services/technology-consulting/wifi-assessment",
  "/services/technology-consulting/fractional-cto",
  "/services/technology-consulting/ai-transformation",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    { url: `${BASE_URL}/services`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/resources`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE_URL}/resources/free-resources`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.75 },
    { url: `${BASE_URL}/resources/university`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.75 },
    { url: `${BASE_URL}/resources/glossary`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.75 },
    { url: `${BASE_URL}/resources/faq`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.75 },
    { url: `${BASE_URL}/pricing`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/about/leadership`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/about/track-record`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/about/our-story`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.6 },
    { url: `${BASE_URL}/our-work`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/case-studies`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/contact`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.7 },
    { url: `${BASE_URL}/careers`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.6 },
  ];

  const managementSitemapRoutes: MetadataRoute.Sitemap = managementRoutes.map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const buildoutSitemapRoutes: MetadataRoute.Sitemap = buildoutRoutes.map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.85,
  }));

  const ephemeralSitemapRoutes: MetadataRoute.Sitemap = ephemeralRoutes.map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.85,
  }));

  const aiSitemapRoutes: MetadataRoute.Sitemap = aiRoutes.map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.85,
  }));

  const techConsultingSitemapRoutes: MetadataRoute.Sitemap = techConsultingRoutes.map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const legacyServiceRoutes: MetadataRoute.Sitemap = servicesData.map((s) => ({
    url: `${BASE_URL}/services/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const caseStudyRoutes: MetadataRoute.Sitemap = caseStudiesData.map((cs) => ({
    url: `${BASE_URL}/case-studies/${cs.slug}`,
    lastModified: new Date(),
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  const industrySitemapRoutes: MetadataRoute.Sitemap = industryRoutes.map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: path === "/industries" ? 0.85 : 0.75,
  }));

  const universitySitemapRoutes: MetadataRoute.Sitemap = articles.map((a) => ({
    url: `${BASE_URL}/resources/university/${a.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const glossarySitemapRoutes: MetadataRoute.Sitemap = glossaryTerms.map((t) => ({
    url: `${BASE_URL}/resources/glossary/${t.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.65,
  }));

  return [
    ...staticRoutes,
    ...buildoutSitemapRoutes,
    ...ephemeralSitemapRoutes,
    ...aiSitemapRoutes,
    ...managementSitemapRoutes,
    ...techConsultingSitemapRoutes,
    ...legacyServiceRoutes,
    ...caseStudyRoutes,
    ...industrySitemapRoutes,
    ...universitySitemapRoutes,
    ...glossarySitemapRoutes,
  ];
}

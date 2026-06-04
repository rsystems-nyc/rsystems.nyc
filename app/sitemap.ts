import { MetadataRoute } from "next";
import { servicesData } from "@/app/lib/services-data";
import { caseStudiesData } from "@/app/lib/case-studies-data";

const BASE_URL = "https://rsystems.nyc";

const managementRoutes = [
  "/services/management",
  "/services/management/core-suite",
  "/services/management/identity",
  "/services/management/workstation",
  "/services/management/essentials",
  "/services/management/backup",
  "/services/management/network",
  "/services/management/domain",
  "/services/management/server",
  "/services/management/awareness",
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
  "/services/technology-consulting/network-infrastructure-design",
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
  "/services/technology-consulting/virtual-cto",
  "/services/technology-consulting/ai-transformation",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    { url: `${BASE_URL}/services`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
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

  return [
    ...staticRoutes,
    ...managementSitemapRoutes,
    ...techConsultingSitemapRoutes,
    ...legacyServiceRoutes,
    ...caseStudyRoutes,
  ];
}

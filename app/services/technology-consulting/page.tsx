import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Technology Consulting | RSystems NYC" },
  description: "Infrastructure architecture, cloud strategy, cybersecurity, identity, networking, and AI — senior-level technology consulting for NYC organizations ready to think bigger.",
  alternates: { canonical: "https://rsystems.nyc/services/technology-consulting/" },
  openGraph: {
    title: "Technology Consulting | RSystems NYC",
    description: "Infrastructure architecture, cloud strategy, cybersecurity, identity, networking, and AI — senior-level technology consulting for NYC organizations ready to think bigger.",
    url: "https://rsystems.nyc/services/technology-consulting/",
  },
  twitter: {
    title: "Technology Consulting | RSystems NYC",
    description: "Infrastructure architecture, cloud strategy, cybersecurity, identity, networking, and AI — senior-level technology consulting for NYC organizations ready to think bigger.",
  },
};

const categories = [
  {
    label: "Strategy & Advisory",
    services: [
      {
        name: "Initial Assessment",
        href: "/services/technology-consulting/initial-assessment",
        tagline: "A structured audit of your current technology and workflows — the foundation of every RSystems engagement.",
      },
      {
        name: "Virtual CTO",
        href: "/services/technology-consulting/virtual-cto",
        tagline: "Fractional CTO/CIO leadership — technology strategy, roadmaps, and C-suite advisory without the full-time overhead.",
      },
      {
        name: "Disaster Recovery Plan Development",
        href: "/services/technology-consulting/disaster-recovery-plan-development",
        tagline: "Structured DRP with RTO/RPO definitions, step-by-step recovery procedures, and tested backup strategies.",
      },
    ],
  },
  {
    label: "AI Transformation",
    services: [
      {
        name: "AI Transformation",
        href: "/services/technology-consulting/ai-transformation",
        tagline: "AI readiness assessments, tooling strategy, workflow automation, and organizational adoption planning.",
      },
    ],
  },
  {
    label: "Cloud",
    services: [
      {
        name: "Azure Consulting & Development",
        href: "/services/technology-consulting/azure-consulting-and-development",
        tagline: "Azure architecture from single virtual servers to multi-region, enterprise-scale deployments.",
      },
      {
        name: "Cloud Storage & Computing Solutions",
        href: "/services/technology-consulting/cloud-storage-and-computing-solutions",
        tagline: "Cloud migration, hybrid storage design, and virtual infrastructure for distributed organizations.",
      },
    ],
  },
  {
    label: "Identity & Security",
    services: [
      {
        name: "Entra & Intune Consulting",
        href: "/services/technology-consulting/entra-and-intune-consulting",
        tagline: "Zero Trust identity and modern device management for hybrid Microsoft 365 environments.",
      },
      {
        name: "Password Management",
        href: "/services/technology-consulting/password-management",
        tagline: "Organizational credential management with shared vaults, SSO integration, and security best practices.",
      },
      {
        name: "Cybersecurity Assessment",
        href: "/services/technology-consulting/cybersecurity-assessment",
        tagline: "NIST-based security assessment with gap analysis and a prioritized remediation roadmap.",
      },
    ],
  },
  {
    label: "Networking",
    services: [
      {
        name: "Network Engineering",
        href: "/services/technology-consulting/network-engineering",
        tagline: "Physical network design and Cisco hardware deployment for reliable, high-performance environments.",
      },
      {
        name: "Network Infrastructure Design",
        href: "/services/technology-consulting/network-infrastructure-design",
        tagline: "Comprehensive review and redesign of your network infrastructure for performance, security, and scalability.",
      },
      {
        name: "Firewall & Network Security",
        href: "/services/technology-consulting/firewall-and-network-security",
        tagline: "SonicWall firewall architecture with high availability, multi-site design, and advanced segmentation.",
      },
      {
        name: "WiFi Assessment",
        href: "/services/technology-consulting/wifi-assessment",
        tagline: "Professional wireless survey with coverage analysis, performance documentation, and recommendations.",
      },
    ],
  },
  {
    label: "Compute & Storage",
    services: [
      {
        name: "Dell PowerEdge Server Solutions",
        href: "/services/technology-consulting/dell-poweredge-server-solutions",
        tagline: "Physical server design and deployment for high-performance computing, large-scale data, and virtualization.",
      },
      {
        name: "Synology Storage Consulting",
        href: "/services/technology-consulting/synology-storage-consulting",
        tagline: "High-performance NAS solutions for creative workflows, virtualization, and disaster recovery.",
      },
      {
        name: "VMware Administration & Infrastructure Design",
        href: "/services/technology-consulting/vmware-administration-infrastructure-design",
        tagline: "VMware optimization, licensing guidance, and infrastructure design in the post-Broadcom landscape.",
      },
    ],
  },
];

export default function TechConsultingIndexPage() {
  return (
    <main className="flex-1">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#0F1117] text-white">
        <div className="hidden sm:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/4 pointer-events-none select-none">
          <Image
            src="/assets/RS_Pulsar_Only_Black.svg"
            alt=""
            width={700}
            height={700}
            className="w-[560px] h-auto opacity-[0.04]"
            aria-hidden="true"
          />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-widest text-white/30 hover:text-white/60 transition-colors mb-10"
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
              <path d="M8 1L3 6L8 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Services
          </Link>
          <p className="text-[11px] font-semibold uppercase tracking-widest text-[#E8500A] mb-5">
            RSystems
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight max-w-3xl">
            Technology Consulting
          </h1>
          <p className="mt-6 text-lg text-white/50 max-w-2xl leading-relaxed">
            Identifying, defining, and solving business challenges with technology —
            across network, cloud, security, identity, and AI.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="bg-[#F4F2EF]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-3">
              <p className="text-[11px] font-semibold uppercase tracking-widest text-[#E8500A] pt-1">
                What It Is
              </p>
            </div>
            <div className="lg:col-span-7 space-y-5">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A1A] tracking-tight leading-snug">
                The core of RSystems for over fifteen years.
              </h2>
              <p className="text-base text-[#1A1A1A]/60 leading-relaxed">
                The heart of RSystems has always been comprehensive consulting for
                organizations of all sizes — identifying, defining, and solving business
                challenges with technology. We help clients develop secure policies and
                best practices that benefit their organizational mission, priorities,
                and budgets.
              </p>
              <p className="text-base text-[#1A1A1A]/60 leading-relaxed">
                Reliable technology is at the core of any organization&apos;s infrastructure.
                Day-to-day operations depend on computers, services, and networks working
                together securely and efficiently. RSystems ensures those systems are
                designed with the scale and rigor your organization actually requires —
                and that operations can scale effectively when needed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Categorized Services */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-24 space-y-14">
          {categories.map((cat) => (
            <div key={cat.label}>
              <p className="text-[10px] font-semibold uppercase tracking-widest text-[#1A1A1A]/35 mb-5">
                {cat.label}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#1A1A1A]/[0.07] border border-[#1A1A1A]/[0.07] rounded-xl overflow-hidden">
                {cat.services.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    className="group relative bg-white p-7 flex flex-col hover:bg-[#F4F2EF] transition-colors"
                  >
                    <span className="absolute top-7 right-7 text-[#1A1A1A]/20 group-hover:text-[#E8500A] transition-colors">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                        <path d="M3 13L13 3M13 3H6M13 3V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <h3 className="text-[15px] font-semibold text-[#1A1A1A] leading-snug pr-6 mb-3 group-hover:text-[#E8500A] transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-sm text-[#1A1A1A]/50 leading-relaxed">
                      {service.tagline}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

    </main>
  );
}

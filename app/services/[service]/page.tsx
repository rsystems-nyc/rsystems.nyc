import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { servicesData } from "@/app/lib/services-data";

type Props = {
  params: Promise<{ service: string }>;
};

type RelatedLink = { href: string; label: string; tagline: string };

const relatedLinks: Record<string, RelatedLink[]> = {
  network: [
    { href: "/services/technology-consulting/network-engineering", label: "Network Engineering", tagline: "Physical network design and Cisco hardware deployment." },
    { href: "/services/technology-consulting/network-infrastructure-design", label: "Network Infrastructure Design", tagline: "Comprehensive review and redesign for performance, security, and scalability." },
    { href: "/services/technology-consulting/firewall-and-network-security", label: "Firewall & Network Security", tagline: "SonicWall architecture with high availability and advanced segmentation." },
    { href: "/services/technology-consulting/wifi-assessment", label: "WiFi Assessment", tagline: "Professional wireless survey with coverage analysis and recommendations." },
  ],
  cloud: [
    { href: "/services/technology-consulting/azure-consulting-and-development", label: "Azure Consulting & Development", tagline: "Azure architecture from single servers to multi-region deployments." },
    { href: "/services/technology-consulting/cloud-storage-and-computing-solutions", label: "Cloud Storage & Computing Solutions", tagline: "Cloud migration, hybrid storage, and virtual infrastructure design." },
    { href: "/services/technology-consulting/disaster-recovery-plan-development", label: "Disaster Recovery Plan Development", tagline: "DRP with RTO/RPO definitions, recovery procedures, and backup strategy." },
  ],
  cybersecurity: [
    { href: "/services/technology-consulting/cybersecurity-assessment", label: "Cybersecurity Assessment", tagline: "NIST-based assessment with gap analysis and remediation roadmap." },
    { href: "/services/technology-consulting/firewall-and-network-security", label: "Firewall & Network Security", tagline: "SonicWall architecture with high availability and advanced segmentation." },
    { href: "/services/technology-consulting/disaster-recovery-plan-development", label: "Disaster Recovery Plan Development", tagline: "DRP with RTO/RPO definitions, recovery procedures, and backup strategy." },
  ],
  identity: [
    { href: "/services/technology-consulting/okta-consulting", label: "Okta Consulting", tagline: "Enterprise SSO federation, SCIM provisioning, and complex app integrations at scale." },
    { href: "/services/technology-consulting/entra-and-intune-consulting", label: "Entra & Intune Consulting", tagline: "Zero Trust identity and modern device management for Microsoft 365." },
    { href: "/services/technology-consulting/password-management", label: "Password Management", tagline: "Organizational credential management with shared vaults and SSO integration." },
    { href: "/services/management/identity", label: "Identity Management", tagline: "Centralized user directory, MFA enforcement, and authentication logging." },
  ],
  infrastructure: [
    { href: "/services/technology-consulting/dell-poweredge-server-solutions", label: "Dell PowerEdge Server Solutions", tagline: "Physical server design and deployment for demanding on-premises workloads." },
    { href: "/services/technology-consulting/synology-storage-consulting", label: "Synology Storage Consulting", tagline: "High-performance NAS for creative workflows, virtualization, and DR." },
    { href: "/services/technology-consulting/vmware-administration-infrastructure-design", label: "VMware Administration & Infrastructure Design", tagline: "VMware optimization and licensing guidance in the post-Broadcom landscape." },
    { href: "/services/technology-consulting/network-infrastructure-design", label: "Network Infrastructure Design", tagline: "Comprehensive review and redesign for performance, security, and scalability." },
    { href: "/services/management/server", label: "Server Management", tagline: "Remote diagnostics, patching, and health monitoring for on-premises servers." },
  ],
  "virtual-cto": [
    { href: "/services/technology-consulting/virtual-cto", label: "Virtual CTO", tagline: "Fractional CTO/CIO leadership — strategy, roadmaps, and C-suite advisory." },
    { href: "/services/technology-consulting/initial-assessment", label: "Initial Assessment", tagline: "A structured audit of your current technology — the foundation of every engagement." },
    { href: "/services/technology-consulting/disaster-recovery-plan-development", label: "Disaster Recovery Plan Development", tagline: "DRP with RTO/RPO definitions, recovery procedures, and backup strategy." },
    { href: "/services/technology-consulting/cybersecurity-assessment", label: "Cybersecurity Assessment", tagline: "NIST-based assessment with gap analysis and remediation roadmap." },
  ],
  ai: [
    { href: "/services/technology-consulting/ai-transformation", label: "AI Transformation", tagline: "AI readiness, tooling strategy, workflow automation, and adoption planning." },
  ],
};

export function generateStaticParams() {
  return servicesData.map((s) => ({ service: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { service: slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: { absolute: `${service.name} | RSystems` },
    description: service.tagline,
    openGraph: {
      title: `${service.name} | RSystems`,
      description: service.tagline,
      url: `https://rsystems.nyc/services/${slug}/`,
    },
    twitter: {
      title: `${service.name} | RSystems`,
      description: service.tagline,
    },
  };
}

export default async function ServicePage({ params }: Props) {
  const { service: slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);
  if (!service) notFound();

  const links = relatedLinks[slug] ?? [];

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
            {service.heroHeadline}
          </h1>
          <p className="mt-6 text-lg text-white/50 max-w-2xl leading-relaxed">
            {service.tagline}
          </p>
        </div>
      </section>

      {/* Challenge */}
      <section className="bg-[#F4F2EF]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-3">
              <p className="text-[11px] font-semibold uppercase tracking-widest text-[#E8500A] pt-1">
                The Challenge
              </p>
            </div>
            <div className="lg:col-span-7 space-y-5">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A1A] tracking-tight leading-snug">
                {service.name}
              </h2>
              {service.challenge.map((para, i) => (
                <p key={i} className="text-base text-[#1A1A1A]/60 leading-relaxed">
                  {para}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-3">
              <p className="text-[11px] font-semibold uppercase tracking-widest text-[#E8500A] pt-1">
                Our Approach
              </p>
            </div>
            <div className="lg:col-span-7 space-y-5">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A1A] tracking-tight leading-snug">
                How RSystems approaches it.
              </h2>
              {service.approach.map((para, i) => (
                <p key={i} className="text-base text-[#1A1A1A]/60 leading-relaxed">
                  {para}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="bg-[#F4F2EF]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
          <p className="text-[11px] font-semibold uppercase tracking-widest text-[#E8500A] mb-4">
            What&apos;s Included
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A1A] tracking-tight mb-12 max-w-xl">
            Key focus areas and deliverables.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-[#1A1A1A]/[0.07] border border-[#1A1A1A]/[0.07] rounded-xl overflow-hidden">
            {service.deliverables.map((item, i) => (
              <div key={i} className="bg-[#F4F2EF] p-7 hover:bg-white transition-colors">
                <p className="text-[11px] font-semibold text-[#E8500A] mb-3 tabular-nums">
                  0{i + 1}
                </p>
                <h3 className="text-[15px] font-semibold text-[#1A1A1A] mb-2 leading-snug">
                  {item.title}
                </h3>
                <p className="text-sm text-[#1A1A1A]/50 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services in this area */}
      {links.length > 0 && (
        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
            <p className="text-[11px] font-semibold uppercase tracking-widest text-[#E8500A] mb-4">
              Services in this area
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A1A] tracking-tight mb-12 max-w-xl">
              Explore specific engagements.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#1A1A1A]/[0.07] border border-[#1A1A1A]/[0.07] rounded-xl overflow-hidden">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group relative bg-white p-7 flex flex-col hover:bg-[#F4F2EF] transition-colors"
                >
                  <span className="absolute top-7 right-7 text-[#1A1A1A]/20 group-hover:text-[#E8500A] transition-colors">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                      <path d="M3 13L13 3M13 3H6M13 3V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <h3 className="text-[15px] font-semibold text-[#1A1A1A] leading-snug pr-6 mb-3 group-hover:text-[#E8500A] transition-colors">
                    {link.label}
                  </h3>
                  <p className="text-sm text-[#1A1A1A]/50 leading-relaxed">
                    {link.tagline}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="bg-[#0F1117] text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <div className="lg:col-span-8">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight leading-snug">
                Ready to talk through your environment?
              </h2>
              <p className="mt-4 text-base text-white/50 leading-relaxed max-w-xl">
                Every engagement starts with a conversation. We&apos;ll ask the right questions, identify the highest-value work, and be direct about what we can and can&apos;t help with.
              </p>
            </div>
            <div className="lg:col-span-4 lg:text-right">
              <Link
                href="/contact"
                className="inline-block text-sm font-medium bg-[#E8500A] text-white px-6 py-3 rounded hover:bg-[#E8500A]/85 transition-colors"
              >
                Let&apos;s Talk
              </Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}

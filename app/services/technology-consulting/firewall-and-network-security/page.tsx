import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "SonicWall Firewall Consulting NYC | RSystems" },
  description: "RSystems designs SonicWall firewall deployments with high availability, multi-site routing, and advanced network segmentation — sized to your environment and managed for the long term.",
  alternates: { canonical: "https://rsystems.nyc/services/technology-consulting/firewall-and-network-security/" },
  openGraph: {
    title: "SonicWall Firewall Consulting NYC | RSystems",
    description: "RSystems designs SonicWall firewall deployments with high availability, multi-site routing, and advanced network segmentation — sized to your environment and managed for the long term.",
    url: "https://rsystems.nyc/services/technology-consulting/firewall-and-network-security/",
  },
  twitter: {
    title: "SonicWall Firewall Consulting NYC | RSystems",
    description: "RSystems designs SonicWall firewall deployments with high availability, multi-site routing, and advanced network segmentation — sized to your environment and managed for the long term.",
  },
};

const capabilities = [
  "VLAN segmentation and guest network isolation",
  "Policy-based routing for multi-WAN and multi-location environments",
  "Site-to-site and SSL VPN configuration",
  "Content filtering for public or guest WiFi environments",
  "Firewall rule documentation and ongoing policy management",
  "High availability active/standby configuration with automatic failover",
  "Remote management and scheduled firmware updates via cloud console",
];

const approach = [
  { step: "01", title: "Assessment", body: "Review your current hardware, configuration, and requirements — including site count, uptime requirements, and budget constraints." },
  { step: "02", title: "Strategic Planning", body: "Hardware selection and architecture design — right-sized for today and scalable for your growth trajectory." },
  { step: "03", title: "Pre-Configuration", body: "SonicWall units configured and tested at RSystems before deployment to minimize on-site time and risk." },
  { step: "04", title: "Implementation", body: "On-site deployment with minimal operational disruption." },
  { step: "05", title: "Documentation", body: "Complete records of firewall rules, routing configuration, and VPN settings." },
  { step: "06", title: "Ongoing Support", body: "Firmware updates, policy adjustments, and manufacturer escalation when needed." },
];

export default function FirewallAndNetworkSecurityPage() {
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
          <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-widest text-white/30 mb-10 flex-wrap">
            <Link href="/services" className="hover:text-white/60 transition-colors">Services</Link>
            <span>/</span>
            <Link href="/services/technology-consulting" className="hover:text-white/60 transition-colors">Technology Consulting</Link>
            <span>/</span>
            <Link href="/services/technology-consulting/networking" className="hover:text-white/60 transition-colors">Networking</Link>
            <span>/</span>
            <span className="text-white/50">Firewall & Network Security</span>
          </div>
          <p className="text-[11px] font-semibold uppercase tracking-widest text-[#FE6305] mb-5">
            Technology Consulting
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight max-w-3xl">
            Firewall & Network Security
          </h1>
          <p className="mt-6 text-lg text-white/50 max-w-2xl leading-relaxed">
            SonicWall firewall architecture with high availability, multi-site design,
            and advanced segmentation — pre-configured before deployment and documented
            for long-term management.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="bg-[#F4F2EF]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-3">
              <p className="text-[11px] font-semibold uppercase tracking-widest text-[#FE6305] pt-1">
                Overview
              </p>
            </div>
            <div className="lg:col-span-7 space-y-5">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A1A] tracking-tight leading-snug">
                The right hardware, properly configured, for your environment.
              </h2>
              <p className="text-base text-[#1A1A1A]/60 leading-relaxed">
                Firewalls are the network&apos;s entry point — controlling inbound and outbound
                traffic across every location. RSystems has standardized on SonicWall
                appliances after evaluating hardware from Cisco, Juniper, and Fortinet,
                selecting them for the right combination of performance, reliability,
                and value at the price points mid-market organizations actually operate in.
              </p>
              <p className="text-base text-[#1A1A1A]/60 leading-relaxed">
                SonicWall&apos;s TZ series suits small to mid-sized offices; the NSA series
                addresses larger environments requiring redundancy features. RSystems
                prefers paired firewall deployments with active/standby configuration
                and continuous synchronization — failover occurs in seconds if the
                primary unit reboots or the WAN link fails.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-3">
              <p className="text-[11px] font-semibold uppercase tracking-widest text-[#FE6305] pt-1">
                Capabilities
              </p>
            </div>
            <div className="lg:col-span-7">
              <ul className="space-y-4">
                {capabilities.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-base text-[#1A1A1A]/70">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#FE6305] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="bg-[#F4F2EF]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
          <p className="text-[11px] font-semibold uppercase tracking-widest text-[#FE6305] mb-4">
            Our Approach
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A1A] tracking-tight mb-12 max-w-xl">
            How RSystems approaches firewall engagements.
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {approach.map((item) => (
              <div key={item.step} className="w-full sm:w-[calc(50%-0.5rem)] border border-[#1A1A1A]/[0.07] rounded-xl bg-[#F4F2EF] p-7 hover:bg-white transition-colors">
                <p className="text-[11px] font-semibold text-[#FE6305] mb-3">{item.step}</p>
                <h3 className="text-[15px] font-semibold text-[#1A1A1A] mb-2 leading-snug">{item.title}</h3>
                <p className="text-sm text-[#1A1A1A]/50 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Callout */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 lg:py-12">
          <Link
            href="/case-studies/redundancy-by-design"
            className="group border-t border-b border-[#1A1A1A]/[0.08] py-8 px-4 sm:px-6 lg:px-8 -mx-4 sm:-mx-6 lg:-mx-8 flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-12 hover:bg-[#F4F2EF] transition-colors"
          >
            <div className="flex-1 min-w-0">
              <p className="text-[11px] font-semibold uppercase tracking-widest text-[#FE6305] mb-2">Case Study</p>
              <h3 className="text-[15px] font-semibold text-[#1A1A1A] mb-2 leading-snug group-hover:text-[#FE6305] transition-colors">See This In Practice</h3>
              <p className="text-sm text-[#1A1A1A]/60 leading-relaxed">This work is documented in our Redundancy by Design case study — a zero-compromise infrastructure covering networking, wireless, compute, and storage, with redundancy as a first-order constraint.</p>
            </div>
            <span className="flex-shrink-0 text-sm font-semibold text-[#FE6305] inline-flex items-center gap-1.5 whitespace-nowrap">
              Read the Case Study
              <span aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">→</span>
            </span>
          </Link>
        </div>
      </section>
    </main>
  );
}

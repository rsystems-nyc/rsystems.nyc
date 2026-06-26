import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Enterprise Network Design & Engineering | RSystems NYC" },
  description: "Switching, routing, firewall, and WiFi infrastructure — designed and engineered for demanding enterprise environments in New York City.",
  alternates: { canonical: "https://rsystems.nyc/services/technology-consulting/networking/" },
  openGraph: {
    title: "Enterprise Network Design & Engineering | RSystems NYC",
    description: "Switching, routing, firewall, and WiFi infrastructure — designed and engineered for demanding enterprise environments in New York City.",
    url: "https://rsystems.nyc/services/technology-consulting/networking/",
  },
  twitter: {
    title: "Enterprise Network Design & Engineering | RSystems NYC",
    description: "Switching, routing, firewall, and WiFi infrastructure — designed and engineered for demanding enterprise environments in New York City.",
  },
};

const services = [
  {
    name: "Network Design & Engineering",
    href: "/services/technology-consulting/network-engineering",
    tagline: "New builds from first principles and remediation of existing environments — Cisco switching, VLAN architecture, redundancy, and complete documentation.",
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
];

const appropriateFor = [
  "Organizations whose network was never formally designed — it grew organically as the organization grew",
  "Teams moving into a new office or undergoing a significant renovation",
  "Organizations experiencing persistent WiFi or connectivity problems that informal fixes haven't resolved",
  "Teams with no network documentation — no topology diagrams, no VLAN schedule, no rack diagrams",
  "Organizations that need to segment guest and internal traffic, or connect and secure multiple locations",
];

const relatedCategories = [
  {
    href: "/services/technology-consulting/compute-storage",
    name: "Compute & Storage",
    description: "Dell PowerEdge, Synology NAS, and VMware for on-premises workloads.",
  },
  {
    href: "/services/technology-consulting/identity-security",
    name: "Identity & Security",
    description: "JumpCloud, Entra, Intune, and NIST-based cybersecurity assessment.",
  },
  {
    href: "/services/technology-consulting/cloud",
    name: "Cloud",
    description: "Azure architecture, cloud migration, and hybrid infrastructure design.",
  },
];

export default function NetworkingPage() {
  return (
    <main className="flex-1">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#0F1117] text-white">
        <div className="hidden sm:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/4 pointer-events-none select-none">
          <Image src="/assets/RS_Pulsar_Only_Black.svg" alt="" width={700} height={700} className="w-[560px] h-auto opacity-[0.04]" aria-hidden="true" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-widest text-white/30 mb-10 flex-wrap">
            <Link href="/services" className="hover:text-white/60 transition-colors">Services</Link>
            <span>/</span>
            <Link href="/services/technology-consulting" className="hover:text-white/60 transition-colors">Technology Consulting</Link>
            <span>/</span>
            <span className="text-white/50">Networking</span>
          </div>
          <p className="text-[11px] font-semibold uppercase tracking-widest text-[#FE6305] mb-5">Technology Consulting</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight max-w-3xl">Networking</h1>
          <p className="mt-6 text-lg text-white/50 max-w-2xl leading-relaxed">
            Switching, routing, firewall, and WiFi infrastructure designed and engineered for demanding enterprise environments.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="bg-[#F4F2EF]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-3">
              <p className="text-[11px] font-semibold uppercase tracking-widest text-[#FE6305] pt-1">Overview</p>
            </div>
            <div className="lg:col-span-7 space-y-5">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A1A] tracking-tight leading-snug">
                The network is the foundation everything else runs on.
              </h2>
              <p className="text-base text-[#1A1A1A]/60 leading-relaxed">
                Every system in your organization — cloud services, file servers, VoIP, identity infrastructure, surveillance, building access — runs over your network. It is the most foundational layer of your infrastructure and the one most often built without a formal design. Networks grow organically as organizations grow, accumulating equipment, undocumented configurations, and unintended vulnerabilities along the way.
              </p>
              <p className="text-base text-[#1A1A1A]/60 leading-relaxed">
                RSystems designs networks from the ground up using Cisco switching equipment and SonicWall firewall hardware — chosen for reliability, management capabilities, and long-term maintainability in enterprise environments. Every engagement produces documentation your team can actually use: topology diagrams, VLAN schedules, rack diagrams, and firewall rule records. Infrastructure without documentation is infrastructure you can&apos;t manage.
              </p>
              <p className="text-base text-[#1A1A1A]/60 leading-relaxed">
                A well-designed network is invisible. It just works, scales cleanly as the organization grows, and gives your team the tools to diagnose and resolve problems without vendor support for routine issues. That standard requires deliberate design decisions from the beginning — not reactive fixes applied to inherited infrastructure over time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Appropriate For */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-3">
              <p className="text-[11px] font-semibold uppercase tracking-widest text-[#FE6305] pt-1">Appropriate For</p>
            </div>
            <div className="lg:col-span-7">
              <ul className="space-y-5">
                {appropriateFor.map((item) => (
                  <li key={item} className="flex items-start gap-4 text-base text-[#1A1A1A]/70 leading-relaxed">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#FE6305] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach + Services */}
      <section className="bg-[#F4F2EF]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-24">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 mb-20">
            <div className="lg:col-span-3">
              <p className="text-[11px] font-semibold uppercase tracking-widest text-[#FE6305] pt-1">Our Approach</p>
            </div>
            <div className="lg:col-span-7">
              <div className="border-l-2 border-[#FE6305] pl-6 space-y-4">
                <p className="text-base text-[#1A1A1A]/70 leading-relaxed">
                  RSystems designs networks with redundancy and documentation as first-order constraints — not afterthoughts. Every engagement produces complete records: topology diagrams, VLAN schedules, rack diagrams, and firewall configurations that your team can use to manage and extend the infrastructure without depending on us for answers to routine questions.
                </p>
                <p className="text-base text-[#1A1A1A]/70 leading-relaxed">
                  We pre-configure all hardware before it arrives at your site, minimizing on-site installation time and the risk of errors under pressure. Our standardization on Cisco switching and SonicWall firewall hardware reflects years of operational experience — these are the platforms that perform reliably in the demanding environments our clients operate in, and that our team can support with direct hands-on expertise.
                </p>
              </div>
            </div>
          </div>

          <p className="text-[11px] font-semibold uppercase tracking-widest text-[#FE6305] mb-8">Services</p>
          <div className="flex flex-wrap justify-center gap-4">
            {services.map((service) => (
              <Link key={service.href} href={service.href} className="group relative flex flex-col w-full md:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.667rem)] border border-[#1A1A1A]/[0.07] rounded-xl bg-[#F4F2EF] p-7 hover:bg-white transition-colors">
                <span className="absolute top-7 right-7 text-[#1A1A1A]/20 group-hover:text-[#FE6305] transition-colors">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 13L13 3M13 3H6M13 3V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </span>
                <h3 className="text-[15px] font-semibold text-[#1A1A1A] leading-snug pr-6 mb-3 group-hover:text-[#FE6305] transition-colors">{service.name}</h3>
                <p className="text-sm text-[#1A1A1A]/50 leading-relaxed">{service.tagline}</p>
              </Link>
            ))}
          </div>

        </div>
      </section>

      {/* Related Categories */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
          <p className="text-[11px] font-semibold uppercase tracking-widest text-[#FE6305] mb-8">Related Practice Areas</p>
          <div className="flex flex-wrap justify-center gap-4">
            {relatedCategories.map((cat) => (
              <Link key={cat.href} href={cat.href} className="group relative flex flex-col w-full sm:w-[calc(33.333%-0.667rem)] border border-[#1A1A1A]/[0.07] rounded-xl bg-white p-6 hover:bg-[#F4F2EF] transition-colors">
                <span className="absolute top-6 right-6 text-[#1A1A1A]/20 group-hover:text-[#FE6305] transition-colors">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 13L13 3M13 3H6M13 3V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </span>
                <h3 className="text-[14px] font-semibold text-[#1A1A1A] pr-6 mb-2 group-hover:text-[#FE6305] transition-colors">{cat.name}</h3>
                <p className="text-sm text-[#1A1A1A]/45 leading-relaxed">{cat.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="bg-[#F4F2EF] border-t border-[#1A1A1A]/[0.06]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-3">
              <p className="text-[11px] font-semibold uppercase tracking-widest text-[#FE6305] pt-1">Case Study</p>
            </div>
            <div className="lg:col-span-7">
              <p className="text-[10px] font-semibold uppercase tracking-widest text-[#1A1A1A]/40 mb-3">Finance &amp; Trading Technology</p>
              <h3 className="text-xl font-bold text-[#1A1A1A] tracking-tight leading-snug mb-2">Built for Scale</h3>
              <p className="text-sm text-[#1A1A1A]/55 leading-relaxed mb-5">
                Purpose-built subnets, Transit Gateway routing, and active/passive FortiGate high availability for a quantitative trading firm whose AWS environment had been inherited from an MSP with the wrong incentives.
              </p>
              <Link href="/case-studies/duality-group" className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-widest text-[#FE6305]/70 hover:text-[#FE6305] transition-colors">
                Read Case Study
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                  <path d="M4 1l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

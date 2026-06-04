import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Cisco Network Engineering & Switching Design | RSystems" },
  description: "RSystems designs and deploys Cisco switching infrastructure — physical network layout, VLAN segmentation, redundancy configuration, and complete documentation.",
  alternates: { canonical: "https://rsystems.nyc/services/technology-consulting/network-engineering/" },
  openGraph: {
    title: "Cisco Network Engineering & Switching Design | RSystems",
    description: "RSystems designs and deploys Cisco switching infrastructure — physical network layout, VLAN segmentation, redundancy configuration, and complete documentation.",
    url: "https://rsystems.nyc/services/technology-consulting/network-engineering/",
  },
  twitter: {
    title: "Cisco Network Engineering & Switching Design | RSystems",
    description: "RSystems designs and deploys Cisco switching infrastructure — physical network layout, VLAN segmentation, redundancy configuration, and complete documentation.",
  },
};

const physicalDesign = [
  "Rack layout and physical cable management",
  "VLAN design and segmentation",
  "Spanning Tree Protocol configuration",
  "10-gigabit and higher uplink optimization",
  "Switch stacking and link aggregation",
  "Network documentation and labeling",
];

const ciscoServices = [
  "Cisco Business series deployment for cost-effective environments",
  "Cisco Catalyst enterprise switch installation and configuration for mission-critical uptime",
  "Redundant power and failover configuration",
  "Remote pre-configuration and shipping",
  "Coordination with local contractors",
  "Cisco licensing and support contract guidance",
];

const approach = [
  { step: "01", title: "Assessment", body: "Evaluate existing infrastructure, identify deficiencies, and understand traffic patterns and organizational requirements." },
  { step: "02", title: "Strategic Planning", body: "Design the architecture — VLAN structure, uplink sizing, hardware selection, and rack layout — before a single cable is touched." },
  { step: "03", title: "Pre-Configuration", body: "Equipment is configured and tested at RSystems before deployment to minimize on-site time and risk." },
  { step: "04", title: "Installation", body: "On-site deployment with minimal operational disruption — typically executed over a single maintenance window." },
  { step: "05", title: "Documentation", body: "Every connection, VLAN, and configuration decision documented so your team can manage and extend the network confidently." },
  { step: "06", title: "Ongoing Support", body: "Post-deployment monitoring, firmware guidance, and RSystems availability for questions as your environment evolves." },
];

export default function NetworkEngineeringPage() {
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
            <span className="text-white/50">Network Engineering</span>
          </div>
          <p className="text-[11px] font-semibold uppercase tracking-widest text-[#E8500A] mb-5">
            Technology Consulting
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight max-w-3xl">
            Network Engineering
          </h1>
          <p className="mt-6 text-lg text-white/50 max-w-2xl leading-relaxed">
            Physical network design and Cisco hardware deployment — designed from
            first principles, pre-configured before it arrives, and documented
            so your team can manage it.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="bg-[#F4F2EF]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-3">
              <p className="text-[11px] font-semibold uppercase tracking-widest text-[#E8500A] pt-1">
                Overview
              </p>
            </div>
            <div className="lg:col-span-7 space-y-5">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A1A] tracking-tight leading-snug">
                Most office networks weren&apos;t designed — they were assembled.
              </h2>
              <p className="text-base text-[#1A1A1A]/60 leading-relaxed">
                Every office network has a switch at its center, and most of them
                are installed the same way: cables run in every direction, configuration
                left at factory defaults, and a rack that nobody can trace. RSystems
                builds networks using Cisco switching equipment for reliability and
                industry-standard operating systems — designed intentionally rather
                than accumulated over time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-widest text-[#E8500A] mb-4">
                Physical Network Design
              </p>
              <ul className="space-y-3">
                {physicalDesign.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-[#1A1A1A]/70">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#E8500A] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-widest text-[#E8500A] mb-4">
                Cisco Hardware & Deployment
              </p>
              <ul className="space-y-3">
                {ciscoServices.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-[#1A1A1A]/70">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#E8500A] flex-shrink-0" />
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
          <p className="text-[11px] font-semibold uppercase tracking-widest text-[#E8500A] mb-4">
            Our Approach
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A1A] tracking-tight mb-12 max-w-xl">
            How RSystems approaches network engineering engagements.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-[#1A1A1A]/[0.07] border border-[#1A1A1A]/[0.07] rounded-xl overflow-hidden">
            {approach.map((item) => (
              <div key={item.step} className="bg-[#F4F2EF] p-7 hover:bg-white transition-colors">
                <p className="text-[11px] font-semibold text-[#E8500A] mb-3">{item.step}</p>
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
          <div className="border-t border-[#1A1A1A]/[0.08] divide-y divide-[#1A1A1A]/[0.06]">
            <div className="py-8 flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-12">
              <div className="flex-1 min-w-0">
                <p className="text-[11px] font-semibold uppercase tracking-widest text-[#E8500A] mb-2">Case Study</p>
                <h3 className="text-[15px] font-semibold text-[#1A1A1A] mb-2 leading-snug">See This In Practice</h3>
                <p className="text-sm text-[#1A1A1A]/60 leading-relaxed">This work is documented in our Redundancy by Design case study — a zero-compromise infrastructure covering networking, wireless, compute, and storage, with redundancy as a first-order constraint.</p>
              </div>
              <a href="https://rsystems.nyc/case-studies/redundancy-by-design" className="flex-shrink-0 text-sm font-semibold text-[#E8500A] hover:text-[#E8500A]/75 transition-colors whitespace-nowrap">
                Read the Case Study →
              </a>
            </div>
            <div className="py-8 flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-12">
              <div className="flex-1 min-w-0">
                <p className="text-[11px] font-semibold uppercase tracking-widest text-[#E8500A] mb-2">Case Study</p>
                <h3 className="text-[15px] font-semibold text-[#1A1A1A] mb-2 leading-snug">Festival-Grade Network Engineering</h3>
                <p className="text-sm text-[#1A1A1A]/60 leading-relaxed">See how RSystems engineered a self-healing temporary network for FoST Fest at Snug Harbor — spanning twelve landmarked buildings, a Great Lawn tent 600 feet from the nearest switch, and thousands of concurrent VR/AR devices.</p>
              </div>
              <a href="https://rsystems.nyc/case-studies/fost-fest" className="flex-shrink-0 text-sm font-semibold text-[#E8500A] hover:text-[#E8500A]/75 transition-colors whitespace-nowrap">
                Read the Case Study →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Related Case Study */}
      <section className="bg-white border-t border-[#1A1A1A]/[0.07]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-16 items-center">
            <div className="lg:col-span-3">
              <p className="text-[11px] font-semibold uppercase tracking-widest text-[#E8500A]">
                Case Study
              </p>
            </div>
            <div className="lg:col-span-7 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <p className="text-base font-semibold text-[#1A1A1A] leading-snug mb-1">
                  The Night $4.6 Million Moved Over Wi-Fi
                </p>
                <p className="text-sm text-[#1A1A1A]/50 leading-relaxed">
                  Event network design for the charity:water Gala at the Metropolitan Museum of Art — traffic-modeled for peak load, tested before the night, invisible on the night.
                </p>
              </div>
              <Link
                href="/case-studies/charity-water-gala"
                className="flex-shrink-0 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-widest text-[#E8500A] hover:text-[#E8500A]/70 transition-colors"
              >
                Read Case Study
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                  <path d="M4 1l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0F1117] text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Let&apos;s talk about your project.
              </h2>
              <p className="mt-3 text-white/50 text-base">
                Schedule a conversation with the RSystems team.
              </p>
            </div>
            <Link
              href="/contact"
              className="flex-shrink-0 inline-block text-sm font-medium bg-[#E8500A] text-white px-6 py-3 rounded hover:bg-[#E8500A]/85 transition-colors"
            >
              Schedule a Conversation
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

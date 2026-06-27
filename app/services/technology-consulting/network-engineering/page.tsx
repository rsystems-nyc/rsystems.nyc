import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import PageEndCTA from "@/app/components/PageEndCTA";

export const metadata: Metadata = {
  title: { absolute: "Network Design & Engineering | RSystems NYC" },
  description:
    "RSystems designs and deploys physical network infrastructure — new builds from first principles and remediation of existing environments. Cisco switching, VLAN architecture, redundancy, and complete documentation.",
  alternates: { canonical: "https://rsystems.nyc/services/technology-consulting/network-engineering/" },
  openGraph: {
    title: "Network Design & Engineering | RSystems NYC",
    description:
      "RSystems designs and deploys physical network infrastructure — new builds from first principles and remediation of existing environments. Cisco switching, VLAN architecture, redundancy, and complete documentation.",
    url: "https://rsystems.nyc/services/technology-consulting/network-engineering/",
  },
  twitter: {
    title: "Network Design & Engineering | RSystems NYC",
    description:
      "RSystems designs and deploys physical network infrastructure — new builds from first principles and remediation of existing environments. Cisco switching, VLAN architecture, redundancy, and complete documentation.",
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
  "Cisco Business series for cost-effective environments",
  "Cisco Catalyst enterprise switching for mission-critical uptime",
  "Redundant power and failover configuration",
  "Remote pre-configuration and shipping",
  "Coordination with local contractors",
  "Cisco licensing and support contract guidance",
];

const whatImproves = [
  "Performance and reliability",
  "Security posture",
  "Redundancy for critical devices",
  "Clarity of path to scale",
  "Organizational productivity",
];

const whatWeDeliver = [
  "Network topology documentation",
  "VLAN schedules",
  "Rack diagrams",
  "Patch schedules",
  "Hardware procurement and configuration",
  "Deployment and cutover management",
];

const approach = [
  {
    step: "01",
    title: "Assessment",
    body: "Evaluate existing infrastructure, identify deficiencies, and understand traffic patterns and organizational requirements.",
  },
  {
    step: "02",
    title: "Strategic Planning",
    body: "Design the architecture — VLAN structure, uplink sizing, hardware selection, and rack layout — before a single cable is touched.",
  },
  {
    step: "03",
    title: "Pre-Configuration",
    body: "Equipment is configured and tested at RSystems before deployment to minimize on-site time and risk.",
  },
  {
    step: "04",
    title: "Installation",
    body: "On-site deployment with minimal operational disruption — typically executed over a single maintenance window.",
  },
  {
    step: "05",
    title: "Documentation",
    body: "Every connection, VLAN, and configuration decision documented so your team can manage and extend the network confidently.",
  },
  {
    step: "06",
    title: "Ongoing Support",
    body: "Post-deployment monitoring, firmware guidance, and RSystems availability for questions as your environment evolves.",
  },
];

const caseStudies = [
  {
    title: "Redundancy by Design",
    body: "Zero-compromise infrastructure covering networking, wireless, compute, and storage — with redundancy as a first-order constraint.",
    href: "/case-studies/redundancy-by-design",
  },
  {
    title: "Untangling the Spaghetti Monster",
    body: "Complete network remediation for a 3D printing company — VLANs rationalized and documented, 10G capacity fully utilized, 400% throughput increase on day one.",
    href: "/case-studies/makerbot-overhaul",
  },
  {
    title: "Festival-Grade Network Engineering",
    body: "A self-healing temporary network for FoST Fest at Snug Harbor — twelve landmarked buildings, a Great Lawn tent 600 feet from the nearest switch, thousands of concurrent devices.",
    href: "/case-studies/fost-fest",
  },
  {
    title: "The Night $4.6 Million Moved Over Wi-Fi",
    body: "Event network design for the charity:water Gala at the Metropolitan Museum of Art — traffic-modeled for peak load, tested before the night, invisible on the night.",
    href: "/case-studies/charity-water-gala",
  },
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
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-widest text-white/30 mb-10 flex-wrap">
            <Link href="/services" className="hover:text-white/60 transition-colors">Services</Link>
            <span>/</span>
            <Link href="/services/technology-consulting" className="hover:text-white/60 transition-colors">Technology Consulting</Link>
            <span>/</span>
            <Link href="/services/technology-consulting/networking" className="hover:text-white/60 transition-colors">Networking</Link>
            <span>/</span>
            <span className="text-white/50">Network Design &amp; Engineering</span>
          </div>
          <p className="text-[11px] font-semibold uppercase tracking-widest text-[#FE6305] mb-5">
            Technology Consulting
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight max-w-3xl">
            Network Design &amp; Engineering
          </h1>
          <p className="mt-6 text-lg text-white/50 max-w-2xl leading-relaxed">
            New builds from first principles and remediation of existing environments — Cisco switching,
            VLAN architecture, redundancy, and documentation that actually reflects what was installed.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="bg-[#F4F2EF]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-3">
              <p className="text-[11px] font-semibold uppercase tracking-widest text-[#FE6305] pt-1">
                Overview
              </p>
            </div>
            <div className="lg:col-span-7 space-y-5">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A1A] tracking-tight leading-snug">
                Most networks weren&apos;t designed — they were assembled. And then they grew haphazardly.
              </h2>
              <p className="text-base text-[#1A1A1A]/60 leading-relaxed">
                Every office network has a switch at its center, and most of them arrived the same way:
                cables run in every direction, configuration left at factory defaults, and a rack nobody
                can trace. Small networks accumulate over time rather than being designed intentionally —
                creating security gaps, performance bottlenecks, and infrastructure that&apos;s difficult
                to support or extend.
              </p>
              <p className="text-base text-[#1A1A1A]/60 leading-relaxed">
                RSystems handles both sides of this problem. For new environments, we design and deploy
                Cisco switching infrastructure from first principles — pre-configured before it ships,
                installed cleanly, documented completely. For existing environments, we review everything
                — hardware, software, configuration, and third-party services — and deliver a comprehensive
                redesign that addresses what&apos;s actually wrong.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Address */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-widest text-[#FE6305] mb-4">
                Physical Network Design
              </p>
              <ul className="space-y-3">
                {physicalDesign.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-[#1A1A1A]/70">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#FE6305] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-widest text-[#FE6305] mb-4">
                Cisco Hardware &amp; Deployment
              </p>
              <ul className="space-y-3">
                {ciscoServices.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-[#1A1A1A]/70">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#FE6305] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* What Improves / What We Deliver */}
      <section className="bg-[#F4F2EF]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-widest text-[#FE6305] mb-4">
                What Improves
              </p>
              <ul className="space-y-3">
                {whatImproves.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-[#1A1A1A]/70">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#FE6305] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-widest text-[#FE6305] mb-4">
                What We Deliver
              </p>
              <ul className="space-y-3">
                {whatWeDeliver.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-[#1A1A1A]/70">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#FE6305] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
          <p className="text-[11px] font-semibold uppercase tracking-widest text-[#FE6305] mb-4">
            Our Approach
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A1A] tracking-tight mb-12 max-w-xl">
            How RSystems approaches network engagements.
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {approach.map((item) => (
              <div key={item.step} className="w-full sm:w-[calc(50%-0.5rem)] border border-[#1A1A1A]/[0.07] rounded-xl bg-white p-7 hover:bg-[#F4F2EF] transition-colors">
                <p className="text-[11px] font-semibold text-[#FE6305] mb-3">{item.step}</p>
                <h3 className="text-[15px] font-semibold text-[#1A1A1A] mb-2 leading-snug">{item.title}</h3>
                <p className="text-sm text-[#1A1A1A]/50 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="bg-[#F4F2EF]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 lg:py-12">
          <div className="border-t border-[#1A1A1A]/[0.08] divide-y divide-[#1A1A1A]/[0.06]">
            {caseStudies.map((cs) => (
              <Link
                key={cs.href}
                href={cs.href}
                className="group flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-12 py-8 px-4 sm:px-6 lg:px-8 -mx-4 sm:-mx-6 lg:-mx-8 rounded-xl hover:bg-white transition-colors"
              >
                <div className="flex-1 min-w-0">
                  <p className="text-[11px] font-semibold uppercase tracking-widest text-[#FE6305] mb-2">Case Study</p>
                  <h3 className="text-[15px] font-semibold text-[#1A1A1A] mb-2 leading-snug group-hover:text-[#FE6305] transition-colors">{cs.title}</h3>
                  <p className="text-sm text-[#1A1A1A]/60 leading-relaxed">{cs.body}</p>
                </div>
                <span className="flex-shrink-0 text-sm font-semibold text-[#FE6305] inline-flex items-center gap-1.5 whitespace-nowrap">
                  Read the Case Study
                  <span aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">→</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
          <PageEndCTA pageKey="/services/technology-consulting/network-engineering" precedingBg="bg-[#F4F2EF]" />
</main>
  );
}

import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import PageEndCTA from "@/app/components/PageEndCTA";

export const metadata: Metadata = {
  title: { absolute: "Fractional CTO & Virtual CIO Services NYC | RSystems" },
  description: "Senior technology leadership without the full-time overhead. RSystems provides fractional CTO and virtual CIO services — strategy, roadmaps, vendor evaluation, and C-suite advisory.",
  alternates: { canonical: "https://rsystems.nyc/services/technology-consulting/fractional-cto/" },
  openGraph: {
    title: "Fractional CTO & Virtual CIO Services NYC | RSystems",
    description: "Senior technology leadership without the full-time overhead. RSystems provides fractional CTO and virtual CIO services — strategy, roadmaps, vendor evaluation, and C-suite advisory.",
    url: "https://rsystems.nyc/services/technology-consulting/fractional-cto/",
  },
  twitter: {
    title: "Fractional CTO & Virtual CIO Services NYC | RSystems",
    description: "Senior technology leadership without the full-time overhead. RSystems provides fractional CTO and virtual CIO services — strategy, roadmaps, vendor evaluation, and C-suite advisory.",
  },
};

const responsibilities = [
  "Make technology recommendations that align with overall business goals",
  "Identify emerging technologies and assess their potential impact on your organization",
  "Develop technology roadmaps with clear resource prioritization",
  "Implement cybersecurity protocols and disaster recovery planning",
  "Provide IT advocacy within leadership",
  "Represent the organization with stakeholders and investors",
  "Offer compliance and cybersecurity guidance",
  "Select and evaluate tools, services, and IT platforms",
];

const establishedOrgValue = [
  "Specialized expertise complementing your existing IT staff",
  "Objective assessments without internal political constraints",
  "Technology implementation support and strategic oversight",
  "Knowledge transfer to internal teams",
  "Senior technical perspective in leadership conversations",
];

const engagements = [
  "Technology roadmap development",
  "Disaster recovery planning",
  "Cybersecurity assessment and remediation oversight",
  "Network design and infrastructure strategy",
  "Vendor evaluation and contract review",
  "Incident analysis and post-mortem review",
];

export default function VirtualCTOPage() {
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
            <Link href="/services/technology-consulting/strategy" className="hover:text-white/60 transition-colors">Strategy & Advisory</Link>
            <span>/</span>
            <span className="text-white/50">Fractional CTO</span>
          </div>
          <p className="text-[11px] font-semibold uppercase tracking-widest text-[#FE6305] mb-5">
            Technology Consulting
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight max-w-3xl">
            Fractional CTO
          </h1>
          <p className="mt-6 text-lg text-white/50 max-w-2xl leading-relaxed">
            Fractional CTO and CIO leadership — technology strategy, roadmaps, and
            C-suite advisory for organizations that need senior technical judgment
            without the overhead of a full-time executive hire.
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
                Senior technical leadership, engaged at the level you need.
              </h2>
              <p className="text-base text-[#1A1A1A]/60 leading-relaxed">
                Many organizations cannot afford or don&apos;t require a dedicated full-time
                CTO or CIO, yet still need technology oversight, strategic planning, and
                security management at a senior level. RSystems provides fractional CTO and
                CIO services to fill that gap — drawing on direct technical experience
                across infrastructure, security, cloud, and identity.
              </p>
              <p className="text-base text-[#1A1A1A]/60 leading-relaxed">
                For organizations with existing IT staff or an MSP partner, RSystems
                complements rather than replaces — providing the strategic layer and
                senior technical perspective that internal operations teams typically
                don&apos;t have the bandwidth or positioning to deliver.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* vCTO Responsibilities */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-widest text-[#FE6305] mb-4">
                Fractional CTO Responsibilities
              </p>
              <ul className="space-y-3">
                {responsibilities.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-[#1A1A1A]/70">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#FE6305] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-widest text-[#FE6305] mb-4">
                Value for Established Organizations
              </p>
              <ul className="space-y-3">
                {establishedOrgValue.map((item) => (
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

      {/* Engagement Options */}
      <section className="bg-[#F4F2EF]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-3">
              <p className="text-[11px] font-semibold uppercase tracking-widest text-[#FE6305] pt-1">
                How It Works
              </p>
            </div>
            <div className="lg:col-span-7 space-y-6">
              <p className="text-base text-[#1A1A1A]/60 leading-relaxed">
                Services scale based on organizational needs, offered through ongoing
                monthly engagements or project-based work. Common engagements include:
              </p>
              <ul className="space-y-3">
                {engagements.map((item) => (
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
          <PageEndCTA pageKey="/services/technology-consulting/fractional-cto" precedingBg="bg-[#F4F2EF]" />
</main>
  );
}

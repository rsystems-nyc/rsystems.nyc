import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Network Infrastructure Design & Redesign | RSystems NYC" },
  description: "RSystems reviews your current network infrastructure and delivers a comprehensive redesign for improved performance, security, redundancy, and scalability.",
  alternates: { canonical: "https://rsystems.nyc/services/technology-consulting/network-infrastructure-design/" },
  openGraph: {
    title: "Network Infrastructure Design & Redesign | RSystems NYC",
    description: "RSystems reviews your current network infrastructure and delivers a comprehensive redesign for improved performance, security, redundancy, and scalability.",
    url: "https://rsystems.nyc/services/technology-consulting/network-infrastructure-design/",
  },
  twitter: {
    title: "Network Infrastructure Design & Redesign | RSystems NYC",
    description: "RSystems reviews your current network infrastructure and delivers a comprehensive redesign for improved performance, security, redundancy, and scalability.",
  },
};

const benefits = [
  "Improved performance and reliability",
  "Enhanced security posture",
  "Redundancy for critical devices",
  "A clear plan for scalability",
  "Increased organizational productivity",
];

const deliverables = [
  "Network topology documentation",
  "VLAN schedules",
  "Rack diagrams",
  "Patch schedules",
  "Hardware procurement and configuration",
  "Deployment and cutover management",
];

export default function NetworkInfrastructureDesignPage() {
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
            <span className="text-white/50">Network Infrastructure Design</span>
          </div>
          <p className="text-[11px] font-semibold uppercase tracking-widest text-[#E8500A] mb-5">
            Technology Consulting
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight max-w-3xl">
            Network Infrastructure Design
          </h1>
          <p className="mt-6 text-lg text-white/50 max-w-2xl leading-relaxed">
            Comprehensive review and redesign of your network infrastructure —
            addressing performance gaps, security exposure, and scalability
            limitations before they constrain your organization.
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
                Small networks grow haphazardly. That has consequences.
              </h2>
              <p className="text-base text-[#1A1A1A]/60 leading-relaxed">
                Small office networks often grow haphazardly, leading to security
                gaps, inefficiencies, and complications with administration and
                ongoing support. Since modern office operations depend on wireless
                access points, switches, and routers, an inefficient or underperforming
                network has broad, negative implications for your entire organization.
              </p>
              <p className="text-base text-[#1A1A1A]/60 leading-relaxed">
                RSystems provides comprehensive network design by reviewing all aspects
                of your current infrastructure — hardware, software, and third-party
                services — while considering your needs, timeline, and budget. We handle
                procurement, configuration, testing, deployment, and complete documentation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits & Deliverables */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-widest text-[#E8500A] mb-4">
                What Improves
              </p>
              <ul className="space-y-3">
                {benefits.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-[#1A1A1A]/70">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#E8500A] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-widest text-[#E8500A] mb-4">
                What We Deliver
              </p>
              <ul className="space-y-3">
                {deliverables.map((item) => (
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
                  Untangling the Spaghetti Monster
                </p>
                <p className="text-sm text-[#1A1A1A]/50 leading-relaxed">
                  Complete network remediation for a 3D printing company — VLAN assignments rationalized and documented, 10G capacity fully utilized, 400% throughput increase on day one.
                </p>
              </div>
              <Link
                href="/case-studies/makerbot-overhaul"
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

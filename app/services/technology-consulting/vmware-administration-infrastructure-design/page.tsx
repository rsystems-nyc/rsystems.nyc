import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "VMware Consulting & Infrastructure Design | RSystems" },
  description: "RSystems helps organizations get the most from VMware — ongoing administration, performance optimization, hardware design, and licensing guidance in the post-Broadcom landscape.",
  alternates: { canonical: "https://rsystems.nyc/services/technology-consulting/vmware-administration-infrastructure-design/" },
  openGraph: {
    title: "VMware Consulting & Infrastructure Design | RSystems",
    description: "RSystems helps organizations get the most from VMware — ongoing administration, performance optimization, hardware design, and licensing guidance in the post-Broadcom landscape.",
    url: "https://rsystems.nyc/services/technology-consulting/vmware-administration-infrastructure-design/",
  },
  twitter: {
    title: "VMware Consulting & Infrastructure Design | RSystems",
    description: "RSystems helps organizations get the most from VMware — ongoing administration, performance optimization, hardware design, and licensing guidance in the post-Broadcom landscape.",
  },
};

const services = [
  "Ongoing VMware administration and monitoring",
  "Performance optimization and infrastructure design",
  "Hardware procurement and configuration",
  "Broadcom licensing consultation and cost analysis",
  "Disaster recovery planning and Azure Site Recovery integration",
  "Migration assessments — evaluating alternatives where costs have changed significantly",
];

export default function VMwarePage() {
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
            <Link href="/services/technology-consulting/compute-storage" className="hover:text-white/60 transition-colors">Compute & Storage</Link>
            <span>/</span>
            <span className="text-white/50">VMware Administration & Infrastructure Design</span>
          </div>
          <p className="text-[11px] font-semibold uppercase tracking-widest text-[#E8500A] mb-5">
            Technology Consulting
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight max-w-3xl">
            VMware Administration & Infrastructure Design
          </h1>
          <p className="mt-6 text-lg text-white/50 max-w-2xl leading-relaxed">
            You already have VMware. RSystems knows how to get the most out of it —
            and how to navigate the Broadcom licensing landscape your organization
            is now managing.
          </p>
        </div>
      </section>

      {/* What VMware Does */}
      <section className="bg-[#F4F2EF]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-3">
              <p className="text-[11px] font-semibold uppercase tracking-widest text-[#E8500A] pt-1">
                Context
              </p>
            </div>
            <div className="lg:col-span-7 space-y-5">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A1A] tracking-tight leading-snug">
                What VMware does — and why the landscape has changed.
              </h2>
              <p className="text-base text-[#1A1A1A]/60 leading-relaxed">
                VMware consolidates multiple operating systems onto powerful servers,
                improving hardware efficiency and simplifying management. For organizations
                running on-premises infrastructure, it remains the dominant platform
                for server virtualization — providing flexibility, redundancy, and
                the ability to run workloads that can&apos;t easily move to cloud.
              </p>
              <p className="text-base text-[#1A1A1A]/60 leading-relaxed">
                Following Broadcom&apos;s 2023 acquisition of VMware, organizations
                face significantly altered pricing models. Some have seen tenfold
                cost increases on annual subscriptions that previously operated on
                perpetual licenses. Understanding what you actually need — and what
                you&apos;re actually paying for — requires someone with hands-on
                experience in the current licensing environment.
              </p>
              <p className="text-base text-[#1A1A1A]/60 leading-relaxed">
                RSystems operates VMware environments internally using Dell PowerEdge
                hardware, Synology storage, and Cisco networking — across multiple
                client industries. Our guidance on licensing, architecture, and
                alternatives comes from direct operational experience, not vendor
                relationships.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-3">
              <p className="text-[11px] font-semibold uppercase tracking-widest text-[#E8500A] pt-1">
                How We Can Help
              </p>
            </div>
            <div className="lg:col-span-7">
              <ul className="space-y-4">
                {services.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-base text-[#1A1A1A]/70">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#E8500A] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
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
              <p className="text-[11px] font-semibold uppercase tracking-widest text-[#E8500A] mb-2">Case Study</p>
              <h3 className="text-[15px] font-semibold text-[#1A1A1A] mb-2 leading-snug group-hover:text-[#E8500A] transition-colors">See This In Practice</h3>
              <p className="text-sm text-[#1A1A1A]/60 leading-relaxed">This work is documented in our Redundancy by Design case study — a zero-compromise infrastructure covering networking, wireless, compute, and storage, with redundancy as a first-order constraint.</p>
            </div>
            <span className="flex-shrink-0 text-sm font-semibold text-[#E8500A] inline-flex items-center gap-1.5 whitespace-nowrap">
              Read the Case Study
              <span aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">→</span>
            </span>
          </Link>
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
                  40 VMs rebuilt on a properly architected VMware foundation — after months embedded inside a 3D printing company learning infrastructure no one had ever documented.
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
    </main>
  );
}

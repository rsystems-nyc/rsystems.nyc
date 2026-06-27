import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import PageEndCTA from "@/app/components/PageEndCTA";

export const metadata: Metadata = {
  title: { absolute: "Cloud Storage & Hybrid Infrastructure Consulting | RSystems" },
  description: "RSystems assists organizations with cloud migration, hybrid storage design, and virtual infrastructure — evaluating options aligned to operational needs and budget.",
  alternates: { canonical: "https://rsystems.nyc/services/technology-consulting/cloud-storage-and-computing-solutions/" },
  openGraph: {
    title: "Cloud Storage & Hybrid Infrastructure Consulting | RSystems",
    description: "RSystems assists organizations with cloud migration, hybrid storage design, and virtual infrastructure — evaluating options aligned to operational needs and budget.",
    url: "https://rsystems.nyc/services/technology-consulting/cloud-storage-and-computing-solutions/",
  },
  twitter: {
    title: "Cloud Storage & Hybrid Infrastructure Consulting | RSystems",
    description: "RSystems assists organizations with cloud migration, hybrid storage design, and virtual infrastructure — evaluating options aligned to operational needs and budget.",
  },
};

const offerings = [
  "Data migrations from on-premises servers to cloud or hybrid storage (Google Drive, Dropbox, SharePoint)",
  "Virtual firewall construction for secure cloud network environments via Azure and Amazon",
  "FileMaker application performance enhancement through virtual Windows server migration",
  "Cross-platform expansion for macOS organizations requiring Windows or Linux virtualization",
  "Hybrid storage design — matching workloads to the right combination of on-premises and cloud",
];

const benefits = [
  "Improved security through managed, updated cloud infrastructure",
  "Workflow optimization — eliminating the friction of on-premises maintenance",
  "Increased redundancy and geographic resilience",
  "Capital-to-operational expense conversion, reducing physical infrastructure overhead",
];

export default function CloudStorageComputingPage() {
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
            <Link href="/services/technology-consulting/cloud" className="hover:text-white/60 transition-colors">Cloud</Link>
            <span>/</span>
            <span className="text-white/50">Cloud Storage & Computing Solutions</span>
          </div>
          <p className="text-[11px] font-semibold uppercase tracking-widest text-[#FE6305] mb-5">
            Technology Consulting
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight max-w-3xl">
            Cloud Storage & Computing Solutions
          </h1>
          <p className="mt-6 text-lg text-white/50 max-w-2xl leading-relaxed">
            Cloud migration, hybrid storage design, and virtual infrastructure —
            evaluated against your actual organizational needs, not a default
            cloud-first assumption.
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
                Cloud migration done with intention, not urgency.
              </h2>
              <p className="text-base text-[#1A1A1A]/60 leading-relaxed">
                As established workplaces have transformed into distributed organizations
                and cloud services from trusted providers have matured, migrating data,
                backups, and applications to the cloud has become commonplace. RSystems
                has assisted organizations with cloud evaluations and migrations across
                a wide range of requirements — always aligned to organizational needs
                and budgets rather than vendor preferences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services & Benefits */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-widest text-[#FE6305] mb-4">
                What We Do
              </p>
              <ul className="space-y-3">
                {offerings.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-[#1A1A1A]/70">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#FE6305] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-widest text-[#FE6305] mb-4">
                Why Organizations Move
              </p>
              <ul className="space-y-3">
                {benefits.map((item) => (
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
          <PageEndCTA pageKey="/services/technology-consulting/cloud-storage-and-computing-solutions" precedingBg="bg-white" />
</main>
  );
}

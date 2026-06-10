import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Azure Consulting & Architecture | RSystems NYC" },
  description: "RSystems Azure consulting spans single server migrations to multi-region enterprise deployments — Virtual Desktop, Site Recovery, hub-and-spoke WAN, and domain controller design.",
  alternates: { canonical: "https://rsystems.nyc/services/technology-consulting/azure-consulting-and-development/" },
  openGraph: {
    title: "Azure Consulting & Architecture | RSystems NYC",
    description: "RSystems Azure consulting spans single server migrations to multi-region enterprise deployments — Virtual Desktop, Site Recovery, hub-and-spoke WAN, and domain controller design.",
    url: "https://rsystems.nyc/services/technology-consulting/azure-consulting-and-development/",
  },
  twitter: {
    title: "Azure Consulting & Architecture | RSystems NYC",
    description: "RSystems Azure consulting spans single server migrations to multi-region enterprise deployments — Virtual Desktop, Site Recovery, hub-and-spoke WAN, and domain controller design.",
  },
};

const examples = [
  "Single virtual machines migrated from on-premises environments",
  "Multi-region domain controllers for geographic redundancy",
  "Azure Virtual Desktop for Windows application access on Mac systems",
  "Distributed hub-and-spoke network infrastructure via Azure Virtual WAN",
  "Azure Site Recovery for failover and disaster recovery",
];

const approach = [
  { step: "01", title: "Initial Assessment", body: "Evaluate your current environment, workloads, and security requirements to understand what belongs in Azure and what doesn't." },
  { step: "02", title: "Strategic Planning", body: "Architectural design tailored to your specific workloads — with cost modeling before you commit to any configuration." },
  { step: "03", title: "Testing", body: "Performance and cost validation before full deployment — so there are no surprises after the migration." },
  { step: "04", title: "Implementation", body: "Collaborative deployment with minimal disruption to ongoing operations." },
  { step: "05", title: "Documentation", body: "Complete records of all configuration decisions for ongoing management." },
  { step: "06", title: "Ongoing Support", body: "Continued optimization guidance as your Azure environment evolves and Azure's services change." },
];

export default function AzureConsultingPage() {
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
            <Link href="/services/technology-consulting/cloud" className="hover:text-white/60 transition-colors">Cloud</Link>
            <span>/</span>
            <span className="text-white/50">Azure Consulting & Development</span>
          </div>
          <p className="text-[11px] font-semibold uppercase tracking-widest text-[#E8500A] mb-5">
            Technology Consulting
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight max-w-3xl">
            Azure Consulting & Development
          </h1>
          <p className="mt-6 text-lg text-white/50 max-w-2xl leading-relaxed">
            Azure architecture from single virtual servers to multi-region,
            enterprise-scale deployments — designed around your workloads,
            not a migration checklist.
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
                Azure solutions tailored to your actual requirements.
              </h2>
              <p className="text-base text-[#1A1A1A]/60 leading-relaxed">
                RSystems provides guidance on Azure cloud options with tailored
                solutions ranging from simple virtual servers to intricate multi-region
                setups. We have hands-on experience deploying virtual machines, domain
                controllers, Azure Virtual Desktop, hub-and-spoke network infrastructure,
                and disaster recovery systems — and we model costs before you commit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Examples */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-3">
              <p className="text-[11px] font-semibold uppercase tracking-widest text-[#E8500A] pt-1">
                What We Build
              </p>
            </div>
            <div className="lg:col-span-7">
              <h2 className="text-2xl font-bold text-[#1A1A1A] tracking-tight mb-8">
                Azure deployments RSystems has delivered.
              </h2>
              <ul className="space-y-4">
                {examples.map((item) => (
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

      {/* Approach */}
      <section className="bg-[#F4F2EF]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
          <p className="text-[11px] font-semibold uppercase tracking-widest text-[#E8500A] mb-4">
            Our Approach
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A1A] tracking-tight mb-12 max-w-xl">
            How RSystems approaches Azure engagements.
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

      {/* Related Case Studies */}
      <section className="bg-white border-t border-[#1A1A1A]/[0.07]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-16 items-start">
            <div className="lg:col-span-3">
              <p className="text-[11px] font-semibold uppercase tracking-widest text-[#E8500A]">
                Case Studies
              </p>
            </div>
            <div className="lg:col-span-7 flex flex-col gap-8">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <p className="text-base font-semibold text-[#1A1A1A] leading-snug mb-1">
                    Replacing a 10-Year-Old Data Center — Without Replacing the Hardware
                  </p>
                  <p className="text-sm text-[#1A1A1A]/50 leading-relaxed">
                    Multi-region Azure infrastructure, disaster recovery, and Terraform automation for the National Audubon Society — DR requirements met at a fraction of a hardware refresh.
                  </p>
                </div>
                <Link
                  href="/case-studies/audubon-azure"
                  className="flex-shrink-0 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-widest text-[#E8500A] hover:text-[#E8500A]/70 transition-colors"
                >
                  Read Case Study
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                    <path d="M4 1l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>
              <div className="border-t border-[#1A1A1A]/[0.07] pt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <p className="text-base font-semibold text-[#1A1A1A] leading-snug mb-1">
                    A GPU in Azure, a Mac on Every Desk
                  </p>
                  <p className="text-sm text-[#1A1A1A]/50 leading-relaxed">
                    GPU-accelerated Azure Virtual Desktop for a Mac-only architecture firm — Bluebeam and Revit at full speed, Entra ID-native identity, full Terraform IaC, no Windows hardware on premises.
                  </p>
                </div>
                <Link
                  href="/case-studies/windows-tools-for-a-mac-design-firm"
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
        </div>
      </section>
    </main>
  );
}

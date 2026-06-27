import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import PageEndCTA from "@/app/components/PageEndCTA";

export const metadata: Metadata = {
  title: { absolute: "Disaster Recovery Plan Development | RSystems NYC" },
  description: "RSystems develops comprehensive disaster recovery plans with RTO/RPO definitions, step-by-step procedures, and backup recommendations your team can actually execute.",
  alternates: { canonical: "https://rsystems.nyc/services/technology-consulting/disaster-recovery-plan-development/" },
  openGraph: {
    title: "Disaster Recovery Plan Development | RSystems NYC",
    description: "RSystems develops comprehensive disaster recovery plans with RTO/RPO definitions, step-by-step procedures, and backup recommendations your team can actually execute.",
    url: "https://rsystems.nyc/services/technology-consulting/disaster-recovery-plan-development/",
  },
  twitter: {
    title: "Disaster Recovery Plan Development | RSystems NYC",
    description: "RSystems develops comprehensive disaster recovery plans with RTO/RPO definitions, step-by-step procedures, and backup recommendations your team can actually execute.",
  },
};

const drpScope = [
  "Detecting an outage",
  "Investigating the outage",
  "Declaring the start of the disaster recovery process",
  "Recovering data and systems",
  "Declaring the process complete",
  "Restoring original data and systems",
  "Evaluating the disaster recovery process",
];

const rsystemsHelp = [
  "Identify critical systems and data essential to operations",
  "Establish Recovery Time Objectives (RTO) and Recovery Point Objectives (RPO)",
  "Develop and draft a comprehensive plan with step-by-step procedures for data recovery",
  "Recommend backup and redundancy solutions aligned to your RTO and RPO requirements",
  "Test and refine the plan for ongoing viability",
];

const outcomes = [
  "Reduced downtime when incidents occur",
  "Improved data security and recoverability",
  "A tested plan your team can actually execute under pressure",
];

export default function DisasterRecoveryPage() {
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
            <span className="text-white/50">Disaster Recovery Plan Development</span>
          </div>
          <p className="text-[11px] font-semibold uppercase tracking-widest text-[#FE6305] mb-5">
            Technology Consulting
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight max-w-3xl">
            Disaster Recovery Plan Development
          </h1>
          <p className="mt-6 text-lg text-white/50 max-w-2xl leading-relaxed">
            A structured DRP with RTO and RPO definitions, step-by-step recovery
            procedures, and backup recommendations — prepared before you need it.
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
                A plan you can execute under pressure.
              </h2>
              <p className="text-base text-[#1A1A1A]/60 leading-relaxed">
                RSystems assists organizations in developing Disaster Recovery Plans
                to prepare for IT disruptions — natural disasters, service failures,
                user error, and security breaches. A DRP addresses the specific actions
                to take and the people responsible at each stage of an incident, from
                detection through recovery and post-incident evaluation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DRP Scope & RSystems Contribution */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-widest text-[#FE6305] mb-4">
                What a DRP Addresses
              </p>
              <ul className="space-y-3">
                {drpScope.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-[#1A1A1A]/70">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#FE6305] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-widest text-[#FE6305] mb-4">
                How RSystems Helps
              </p>
              <ul className="space-y-3">
                {rsystemsHelp.map((item) => (
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

      {/* Outcomes */}
      <section className="bg-[#F4F2EF]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-3">
              <p className="text-[11px] font-semibold uppercase tracking-widest text-[#FE6305] pt-1">
                Outcomes
              </p>
            </div>
            <div className="lg:col-span-7">
              <ul className="space-y-4">
                {outcomes.map((item) => (
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

          <PageEndCTA pageKey="/services/technology-consulting/disaster-recovery-plan-development" precedingBg="bg-white" />
</main>
  );
}

import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import PageEndCTA from "@/app/components/PageEndCTA";

export const metadata: Metadata = {
  title: { absolute: "Cybersecurity Assessment & Gap Analysis | RSystems NYC" },
  description: "RSystems conducts NIST-based cybersecurity assessments — reviewing policies, access controls, and security posture, then delivering a gap analysis and prioritized remediation roadmap.",
  alternates: { canonical: "https://rsystems.nyc/services/technology-consulting/cybersecurity-assessment/" },
  openGraph: {
    title: "Cybersecurity Assessment & Gap Analysis | RSystems NYC",
    description: "RSystems conducts NIST-based cybersecurity assessments — reviewing policies, access controls, and security posture, then delivering a gap analysis and prioritized remediation roadmap.",
    url: "https://rsystems.nyc/services/technology-consulting/cybersecurity-assessment/",
  },
  twitter: {
    title: "Cybersecurity Assessment & Gap Analysis | RSystems NYC",
    description: "RSystems conducts NIST-based cybersecurity assessments — reviewing policies, access controls, and security posture, then delivering a gap analysis and prioritized remediation roadmap.",
  },
};

const consequences = [
  "Loss of critical business data or information",
  "Reduced organizational productivity",
  "Diminished revenue and business disruption",
  "Damaged client and customer confidence",
  "Legal and regulatory exposure",
];

const processItems = [
  "Review questionnaire responses and identify follow-up items",
  "Conduct one-on-one clarification sessions with key stakeholders",
  "Analyze responses against the NIST Cybersecurity Framework",
  "Generate a cybersecurity readiness report",
  "Provide prioritized remediation recommendations",
];

export default function CybersecurityAssessmentPage() {
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
            <Link href="/services/technology-consulting/identity-security" className="hover:text-white/60 transition-colors">Identity & Security</Link>
            <span>/</span>
            <span className="text-white/50">Cybersecurity Assessment</span>
          </div>
          <p className="text-[11px] font-semibold uppercase tracking-widest text-[#FE6305] mb-5">
            Technology Consulting
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight max-w-3xl">
            Cybersecurity Assessment
          </h1>
          <p className="mt-6 text-lg text-white/50 max-w-2xl leading-relaxed">
            NIST-based security assessment with gap analysis and a prioritized
            remediation roadmap — built on your actual environment, not a
            generic checklist.
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
                Find your gaps before someone else does.
              </h2>
              <p className="text-base text-[#1A1A1A]/60 leading-relaxed">
                Organizations increasingly depend on technology — which amplifies risk.
                Data breaches and ransomware attacks can harm financial standing, legal
                compliance, and organizational reputation. Effective security policy
                requires balancing cost and operational convenience, with decisions
                based on organizational factors and a clear baseline understanding of
                where exposure actually exists.
              </p>
              <p className="text-base text-[#1A1A1A]/60 leading-relaxed">
                RSystems uses the National Institute of Standards and Technology (NIST)
                Cybersecurity Framework as the foundation for every assessment — adapted
                to your specific environment, risk profile, and operational reality.
                The process begins with a self-guided questionnaire, followed by RSystems
                review, clarification sessions, and gap analysis.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Consequences & Process */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-widest text-[#FE6305] mb-4">
                What&apos;s at Stake
              </p>
              <ul className="space-y-3">
                {consequences.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-[#1A1A1A]/70">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#FE6305] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-widest text-[#FE6305] mb-4">
                Assessment Process
              </p>
              <ul className="space-y-3">
                {processItems.map((item) => (
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
          <PageEndCTA pageKey="/services/technology-consulting/cybersecurity-assessment" precedingBg="bg-white" />
</main>
  );
}

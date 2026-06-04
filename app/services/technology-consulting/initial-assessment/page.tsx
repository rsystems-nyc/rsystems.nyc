import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "IT Assessment & Technology Audit | RSystems NYC" },
  description: "RSystems conducts a structured audit of your technology, workflows, and documentation — producing a strategic roadmap and the clarity your organization needs to move forward.",
  alternates: { canonical: "https://rsystems.nyc/services/technology-consulting/initial-assessment/" },
  openGraph: {
    title: "IT Assessment & Technology Audit | RSystems NYC",
    description: "RSystems conducts a structured audit of your technology, workflows, and documentation — producing a strategic roadmap and the clarity your organization needs to move forward.",
    url: "https://rsystems.nyc/services/technology-consulting/initial-assessment/",
  },
  twitter: {
    title: "IT Assessment & Technology Audit | RSystems NYC",
    description: "RSystems conducts a structured audit of your technology, workflows, and documentation — producing a strategic roadmap and the clarity your organization needs to move forward.",
  },
};

const assessmentItems = [
  "Verify or create records of key assets (hardware, software, personnel)",
  "Verify credentials — domain ownership, admin access to online services, admin access to workstations and servers",
  "Review all on-premises and cloud-based services (file sharing, database, directory, communications)",
  "Review existing network topology documentation",
  "Review existing security policies",
  "Review existing backup policies",
  "Review existing IT budget",
  "Identify and prioritize pain points, frustrations, and ongoing needs",
  "Create basic client support documentation (overview, network overview, network topology)",
  "Create appropriate initial recommendations",
];

export default function InitialAssessmentPage() {
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
            <Link href="/services/technology-consulting/strategy" className="hover:text-white/60 transition-colors">Strategy & Advisory</Link>
            <span>/</span>
            <span className="text-white/50">Initial Assessment</span>
          </div>
          <p className="text-[11px] font-semibold uppercase tracking-widest text-[#E8500A] mb-5">
            Technology Consulting
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight max-w-3xl">
            Initial Assessment
          </h1>
          <p className="mt-6 text-lg text-white/50 max-w-2xl leading-relaxed">
            A structured audit of your current technology and workflows — the
            foundation of every RSystems engagement and the prerequisite for
            an accurate strategic roadmap.
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
                You can&apos;t build a roadmap from assumptions.
              </h2>
              <p className="text-base text-[#1A1A1A]/60 leading-relaxed">
                RSystems begins each new client engagement with an audit of the
                client&apos;s current technology and a review of the client&apos;s workflow.
                This ensures we have sufficient information to provide appropriate
                support and guidance — and that the recommendations we make reflect
                your actual environment, not a generic model.
              </p>
              <p className="text-base text-[#1A1A1A]/60 leading-relaxed">
                The assessment typically takes four weeks, contingent on documentation
                quality and staff availability. Urgent problems may adjust the timeline.
                Upon completion, RSystems develops a strategic roadmap to help address
                specific challenges and becomes available for incident support and
                service requests.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Assessment Scope */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-3">
              <p className="text-[11px] font-semibold uppercase tracking-widest text-[#E8500A] pt-1">
                Assessment Scope
              </p>
            </div>
            <div className="lg:col-span-7">
              <h2 className="text-2xl font-bold text-[#1A1A1A] tracking-tight mb-8">
                What the assessment covers.
              </h2>
              <ul className="space-y-4">
                {assessmentItems.map((item) => (
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

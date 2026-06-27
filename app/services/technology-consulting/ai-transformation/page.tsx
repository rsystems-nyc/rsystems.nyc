import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import PageEndCTA from "@/app/components/PageEndCTA";

export const metadata: Metadata = {
  title: { absolute: "AI Transformation Consulting for Enterprises | RSystems NYC" },
  description: "RSystems delivers AI readiness assessments, tooling strategy, workflow automation, and adoption planning — including permissions architecture for agentic deployments.",
  alternates: { canonical: "https://rsystems.nyc/services/technology-consulting/ai-transformation/" },
  openGraph: {
    title: "AI Transformation Consulting for Enterprises | RSystems NYC",
    description: "RSystems delivers AI readiness assessments, tooling strategy, workflow automation, and adoption planning — including permissions architecture for agentic deployments.",
    url: "https://rsystems.nyc/services/technology-consulting/ai-transformation/",
  },
  twitter: {
    title: "AI Transformation Consulting for Enterprises | RSystems NYC",
    description: "RSystems delivers AI readiness assessments, tooling strategy, workflow automation, and adoption planning — including permissions architecture for agentic deployments.",
  },
};

const deliverables = [
  {
    num: "01",
    title: "AI Readiness Assessment",
    body: "An honest evaluation of your organization's current state — workflows, data infrastructure, governance, and team capacity — against what AI adoption actually requires.",
  },
  {
    num: "02",
    title: "Use Case Identification & Prioritization",
    body: "A prioritized map of AI opportunities specific to your organization, ranked by impact and implementation complexity — so you start where it matters.",
  },
  {
    num: "03",
    title: "Tooling Strategy & Vendor Evaluation",
    body: "Independent evaluation of AI platforms and tools matched to your identified use cases — with security, compliance, and total cost of ownership factored in.",
  },
  {
    num: "04",
    title: "Workflow Automation & Adoption Planning",
    body: "Automation design for high-value workflows, plus a structured adoption plan that accounts for change management, training, and governance from day one.",
  },
  {
    num: "05",
    title: "Agentic Access & Permissions Design",
    body: "A structured permissions model for agentic AI deployments — scoping what each system can access, defining delegation and identity boundaries, designing guardrails for high-stakes actions, and establishing audit frameworks that keep agent behavior reviewable and within operational limits.",
  },
];

export default function AITransformationPage() {
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
            <Link href="/services/technology-consulting/ai" className="hover:text-white/60 transition-colors">AI Transformation</Link>
            <span>/</span>
            <span className="text-white/50">AI Transformation</span>
          </div>
          <p className="text-[11px] font-semibold uppercase tracking-widest text-[#FE6305] mb-5">
            Technology Consulting
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight max-w-3xl">
            AI strategy grounded in what your organization can actually execute.
          </h1>
          <p className="mt-6 text-lg text-white/50 max-w-2xl leading-relaxed">
            AI readiness assessments, tooling strategy, workflow automation, and
            organizational adoption planning for teams ready to operationalize AI.
          </p>
        </div>
      </section>

      {/* Challenge */}
      <section className="bg-[#F4F2EF]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-3">
              <p className="text-[11px] font-semibold uppercase tracking-widest text-[#FE6305] pt-1">
                The Challenge
              </p>
            </div>
            <div className="lg:col-span-7 space-y-5">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A1A] tracking-tight leading-snug">
                AI Transformation
              </h2>
              <p className="text-base text-[#1A1A1A]/60 leading-relaxed">
                Every organization is under pressure to have an AI strategy. Most don&apos;t
                have a clear picture of where AI creates genuine value versus where it adds
                cost and complexity. The risk isn&apos;t moving too slowly — it&apos;s committing to
                tools and workflows before you understand the operational implications.
              </p>
              <p className="text-base text-[#1A1A1A]/60 leading-relaxed">
                Poorly adopted AI creates new overhead rather than reducing it. Models
                hallucinate in high-stakes workflows. Teams adopt consumer tools without
                governance. The organization ends up with fragmented AI usage and no
                coherent strategy.
              </p>
              <p className="text-base text-[#1A1A1A]/60 leading-relaxed">
                The deeper challenge is structural. As AI moves from assistive to agentic —
                from answering questions to taking actions — the access model that governs
                those actions becomes a critical security consideration. An agent with write
                access to your systems, APIs, or data can operate at machine speed with no
                built-in instinct for what it shouldn&apos;t touch. Most organizations haven&apos;t
                designed permission structures for AI agents. Most haven&apos;t thought about
                what least-privilege means for a system that doesn&apos;t have a job title.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-3">
              <p className="text-[11px] font-semibold uppercase tracking-widest text-[#FE6305] pt-1">
                Our Approach
              </p>
            </div>
            <div className="lg:col-span-7 space-y-5">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A1A] tracking-tight leading-snug">
                How RSystems approaches it.
              </h2>
              <p className="text-base text-[#1A1A1A]/60 leading-relaxed">
                We start with a readiness assessment: your current workflows, your data
                environment, your team&apos;s capacity to adopt new tooling, and your governance
                posture. From there, we identify the highest-value use cases — the specific
                processes where AI reduces meaningful friction — and build a phased adoption plan.
              </p>
              <p className="text-base text-[#1A1A1A]/60 leading-relaxed">
                We&apos;re tool-agnostic, though our deepest hands-on experience is with
                Anthropic&apos;s Claude platform — from API integration to enterprise deployment
                and agentic workflow design. Our job is to find the right fit for your
                organization, not to push a platform. Adoption planning is part of every
                engagement because technology without organizational change rarely sticks.
              </p>
              <p className="text-base text-[#1A1A1A]/60 leading-relaxed">
                For agentic deployments, we design the permissions architecture before the
                system goes live. That means scoping what each agent can access, modeling
                identity and delegation, building approval checkpoints for high-stakes
                actions, and establishing audit trails that make agent behavior reviewable.
                The goal is AI that operates within well-defined guardrails — not because
                it&apos;s told to behave, but because the infrastructure it runs on doesn&apos;t give
                it any other option.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="bg-[#F4F2EF]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
          <p className="text-[11px] font-semibold uppercase tracking-widest text-[#FE6305] mb-4">
            What&apos;s Included
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A1A] tracking-tight mb-12 max-w-xl">
            Key focus areas and deliverables.
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {deliverables.map((item) => (
              <div key={item.num} className="w-full sm:w-[calc(50%-0.5rem)] border border-[#1A1A1A]/[0.07] rounded-xl bg-[#F4F2EF] p-7 hover:bg-white transition-colors">
                <p className="text-[11px] font-semibold text-[#FE6305] mb-3">{item.num}</p>
                <h3 className="text-[15px] font-semibold text-[#1A1A1A] mb-2 leading-snug">{item.title}</h3>
                <p className="text-sm text-[#1A1A1A]/50 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
          <PageEndCTA pageKey="/services/technology-consulting/ai-transformation" precedingBg="bg-[#F4F2EF]" />
</main>
  );
}

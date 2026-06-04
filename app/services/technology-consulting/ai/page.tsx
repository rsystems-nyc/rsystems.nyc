import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "AI Consulting & Transformation Services | RSystems NYC" },
  description: "AI readiness assessments, tooling strategy, workflow automation, and organizational adoption planning for teams ready to operationalize AI at the enterprise level.",
  alternates: { canonical: "https://rsystems.nyc/services/technology-consulting/ai/" },
  openGraph: {
    title: "AI Consulting & Transformation Services | RSystems NYC",
    description: "AI readiness assessments, tooling strategy, workflow automation, and organizational adoption planning for teams ready to operationalize AI at the enterprise level.",
    url: "https://rsystems.nyc/services/technology-consulting/ai/",
  },
  twitter: {
    title: "AI Consulting & Transformation Services | RSystems NYC",
    description: "AI readiness assessments, tooling strategy, workflow automation, and organizational adoption planning for teams ready to operationalize AI at the enterprise level.",
  },
};

const services = [
  {
    name: "AI Enablement",
    href: "/services/technology-consulting/ai-transformation",
    tagline: "AI readiness assessments, tooling strategy, workflow automation, and organizational adoption planning — including permissions architecture for agentic deployments.",
  },
];

const appropriateFor = [
  "Leadership teams asking \"what should we be doing with AI?\" without a clear answer",
  "Organizations that have experimented with AI tools but haven't achieved meaningful productivity gains",
  "Teams concerned about data governance and security implications of AI adoption",
  "Organizations whose competitors are operationalizing AI and need a strategic response",
  "Teams looking to automate workflows but unsure where to start or what tooling to trust",
];

const relatedCategories = [
  {
    href: "/services/technology-consulting/strategy",
    name: "Strategy & Advisory",
    description: "Initial assessments, Virtual CTO, and disaster recovery planning.",
  },
  {
    href: "/services/technology-consulting/cloud",
    name: "Cloud",
    description: "Azure architecture, cloud migration, and hybrid infrastructure design.",
  },
  {
    href: "/services/technology-consulting/identity-security",
    name: "Identity & Security",
    description: "JumpCloud, Entra, Intune, and NIST-based cybersecurity assessment.",
  },
];

export default function AIPage() {
  return (
    <main className="flex-1">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#0F1117] text-white">
        <div className="hidden sm:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/4 pointer-events-none select-none">
          <Image src="/assets/RS_Pulsar_Only_Black.svg" alt="" width={700} height={700} className="w-[560px] h-auto opacity-[0.04]" aria-hidden="true" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-widest text-white/30 mb-10 flex-wrap">
            <Link href="/services" className="hover:text-white/60 transition-colors">Services</Link>
            <span>/</span>
            <Link href="/services/technology-consulting" className="hover:text-white/60 transition-colors">Technology Consulting</Link>
            <span>/</span>
            <span className="text-white/50">AI Enablement</span>
          </div>
          <p className="text-[11px] font-semibold uppercase tracking-widest text-[#E8500A] mb-5">Technology Consulting</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight max-w-3xl">AI Enablement</h1>
          <p className="mt-6 text-lg text-white/50 max-w-2xl leading-relaxed">
            AI readiness assessments, tooling strategy, workflow automation, and organizational adoption planning for teams ready to operationalize AI.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="bg-[#F4F2EF]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-3">
              <p className="text-[11px] font-semibold uppercase tracking-widest text-[#E8500A] pt-1">Overview</p>
            </div>
            <div className="lg:col-span-7 space-y-5">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A1A] tracking-tight leading-snug">
                The gap between AI interest and AI ROI is implementation.
              </h2>
              <p className="text-base text-[#1A1A1A]/60 leading-relaxed">
                Every organization is under pressure to develop an AI strategy. Most don&apos;t have a clear picture of where AI creates genuine value versus where it adds cost and complexity. The risk isn&apos;t moving too slowly — it&apos;s committing to tools and workflows before you understand the operational implications, data governance requirements, and organizational changes that successful AI adoption demands.
              </p>
              <p className="text-base text-[#1A1A1A]/60 leading-relaxed">
                RSystems approaches AI transformation as an infrastructure and workflow problem first. We assess your current environment, identify the highest-value automation opportunities, evaluate tooling against your specific requirements, and build the adoption plan that turns a strategy into an operational capability. Technology without organizational change rarely sticks — we design for both.
              </p>
              <p className="text-base text-[#1A1A1A]/60 leading-relaxed">
                As AI moves from assistive to agentic — from answering questions to taking actions — the access model governing those systems becomes a critical security consideration. Most organizations haven&apos;t thought about what least-privilege means for an AI agent, or how to design permission structures that keep automated systems within operational limits. RSystems addresses this before deployment, not after an incident.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Appropriate For */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-3">
              <p className="text-[11px] font-semibold uppercase tracking-widest text-[#E8500A] pt-1">Appropriate For</p>
            </div>
            <div className="lg:col-span-7">
              <ul className="space-y-5">
                {appropriateFor.map((item) => (
                  <li key={item} className="flex items-start gap-4 text-base text-[#1A1A1A]/70 leading-relaxed">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#E8500A] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach + Services */}
      <section className="bg-[#F4F2EF]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-24">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 mb-20">
            <div className="lg:col-span-3">
              <p className="text-[11px] font-semibold uppercase tracking-widest text-[#E8500A] pt-1">Our Approach</p>
            </div>
            <div className="lg:col-span-7">
              <div className="border-l-2 border-[#E8500A] pl-6 space-y-4">
                <p className="text-base text-[#1A1A1A]/70 leading-relaxed">
                  We assess your current environment, data posture, and workflows before recommending any tooling — the highest-value automation opportunities are almost always found in the details of how your organization actually operates today. RSystems focuses on practical, high-ROI automation rather than theoretical AI strategy, and we&apos;re tool-agnostic, though our deepest hands-on experience is with Anthropic&apos;s Claude platform.
                </p>
                <p className="text-base text-[#1A1A1A]/70 leading-relaxed">
                  For organizations deploying agentic AI systems, we design the permissions architecture before go-live. That means scoping what each agent can access, modeling identity and delegation boundaries, building approval checkpoints for high-stakes actions, and establishing audit trails that make agent behavior reviewable. AI that operates within well-defined infrastructure constraints is fundamentally more secure than AI that relies on behavioral guardrails alone.
                </p>
              </div>
            </div>
          </div>

          <p className="text-[11px] font-semibold uppercase tracking-widest text-[#E8500A] mb-8">Services</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#1A1A1A]/[0.07] border border-[#1A1A1A]/[0.07] rounded-xl overflow-hidden">
            {services.map((service) => (
              <Link key={service.href} href={service.href} className="group relative bg-[#F4F2EF] p-7 flex flex-col hover:bg-white transition-colors">
                <span className="absolute top-7 right-7 text-[#1A1A1A]/20 group-hover:text-[#E8500A] transition-colors">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 13L13 3M13 3H6M13 3V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </span>
                <h3 className="text-[15px] font-semibold text-[#1A1A1A] leading-snug pr-6 mb-3 group-hover:text-[#E8500A] transition-colors">{service.name}</h3>
                <p className="text-sm text-[#1A1A1A]/50 leading-relaxed">{service.tagline}</p>
              </Link>
            ))}
          </div>

        </div>
      </section>

      {/* Related Categories */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
          <p className="text-[11px] font-semibold uppercase tracking-widest text-[#E8500A] mb-8">Related Practice Areas</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-[#1A1A1A]/[0.07] border border-[#1A1A1A]/[0.07] rounded-xl overflow-hidden">
            {relatedCategories.map((cat) => (
              <Link key={cat.href} href={cat.href} className="group relative bg-white p-6 flex flex-col hover:bg-[#F4F2EF] transition-colors">
                <span className="absolute top-6 right-6 text-[#1A1A1A]/20 group-hover:text-[#E8500A] transition-colors">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 13L13 3M13 3H6M13 3V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </span>
                <h3 className="text-[14px] font-semibold text-[#1A1A1A] pr-6 mb-2 group-hover:text-[#E8500A] transition-colors">{cat.name}</h3>
                <p className="text-sm text-[#1A1A1A]/45 leading-relaxed">{cat.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0F1117] text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">Let&apos;s talk about your project.</h2>
              <p className="mt-3 text-white/50 text-base">Schedule a conversation with the RSystems team.</p>
            </div>
            <Link href="/contact" className="flex-shrink-0 inline-block text-sm font-medium bg-[#E8500A] text-white px-6 py-3 rounded hover:bg-[#E8500A]/85 transition-colors">Schedule a Conversation</Link>
          </div>
        </div>
      </section>
    </main>
  );
}

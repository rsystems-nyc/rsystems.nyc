import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "AI & Automation — RSystems NYC" },
  description:
    "AI enablement, MCP tooling, agent identity governance, and audit infrastructure for organizations deploying AI in production.",
  alternates: { canonical: "https://rsystems.nyc/services/ai" },
  openGraph: {
    title: "AI & Automation — RSystems NYC",
    description:
      "AI enablement, MCP tooling, agent identity governance, and audit infrastructure for organizations deploying AI in production.",
    url: "https://rsystems.nyc/services/ai",
  },
  twitter: {
    title: "AI & Automation — RSystems NYC",
    description:
      "AI enablement, MCP tooling, agent identity governance, and audit infrastructure for organizations deploying AI in production.",
  },
};

const services = [
  {
    tag: "AI Enablement",
    body: "The right models, the right tools, the right workflows for your organization. We help teams adopt AI practically — identifying use cases, configuring enterprise accounts, and building habits that stick.",
    href: "/services/ai/ai-enablement",
  },
  {
    tag: "MCP Tooling",
    body: "Any platform with a documented API can become a tool your AI agents use reliably. We build MCP servers that expose the full API surface — not just the subset an official integration provides.",
    href: "/services/ai/mcp-tooling",
  },
  {
    tag: "Agent Governance & PAM",
    body: "Agents need identities, permissions, and blast-radius containment — just like employees. We design access architectures that give agents exactly what they need and nothing more.",
    href: "/services/ai/agent-governance",
  },
  {
    tag: "Audit & Accountability",
    body: "When agents act at scale, you need a complete record of what they did, when, and with what authority. We build centralized audit infrastructure for agentic workflows.",
    href: "/services/ai/audit-accountability",
  },
  {
    tag: "Vibe Coding & Custom Development",
    body: "Custom websites and internal tools built with AI-assisted development — plus the infrastructure foundation that lets your team build and run them. We'll build it, teach it, or build it with you.",
    href: "/services/ai/vibe-coding",
  },
];

export default function AIHubPage() {
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
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-widest text-white/30 hover:text-white/60 transition-colors mb-10"
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
              <path d="M8 1L3 6L8 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Services
          </Link>
          <p className="text-[11px] font-semibold uppercase tracking-widest text-[#E8500A] mb-5">
            Services
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight max-w-3xl">
            AI &amp; Automation
          </h1>
          <p className="mt-6 text-lg text-white/50 max-w-2xl leading-relaxed">
            From your first AI deployment to running agents in production — the
            tooling, governance, and accountability to do it right.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-[#F4F2EF]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-3">
              <p className="text-[11px] font-semibold uppercase tracking-widest text-[#E8500A] pt-1">
                Where We Work
              </p>
            </div>
            <div className="lg:col-span-7 space-y-5">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A1A] tracking-tight leading-snug">
                Built across every stage of AI deployment.
              </h2>
              <p className="text-base text-[#1A1A1A]/60 leading-relaxed">
                Most organizations are somewhere on a spectrum: exploring what AI tools
                their teams should use, building workflows where AI assists with specific
                tasks, or deploying agents that take actions autonomously. Each stage
                requires different infrastructure. We&apos;ve built across all of them —
                and we&apos;ve done it with the models that matter.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service cards */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
          <p className="text-[11px] font-semibold uppercase tracking-widest text-[#E8500A] mb-4">
            Services
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A1A] tracking-tight mb-12 max-w-xl">
            Four disciplines. One governance stack.
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {services.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="w-full md:w-[calc(50%-0.5rem)] border border-[#1A1A1A]/[0.07] rounded-xl group relative bg-white p-8 flex flex-col hover:bg-[#F4F2EF] transition-colors"
              >
                <span className="absolute top-8 right-8 text-[#1A1A1A]/20 group-hover:text-[#E8500A] transition-colors">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M3 13L13 3M13 3H6M13 3V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <h3 className="text-[15px] font-semibold text-[#1A1A1A] leading-snug pr-6 mb-3 group-hover:text-[#E8500A] transition-colors">
                  {service.tag}
                </h3>
                <p className="text-sm text-[#1A1A1A]/50 leading-relaxed">
                  {service.body}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

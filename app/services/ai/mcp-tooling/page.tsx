import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "MCP Tooling — RSystems NYC" },
  description:
    "If a platform has an API, an LLM can use it. We build custom MCP servers that expose the full API surface of any tool in your stack.",
  alternates: { canonical: "https://rsystems.nyc/services/ai/mcp-tooling" },
  openGraph: {
    title: "MCP Tooling — RSystems NYC",
    description:
      "If a platform has an API, an LLM can use it. We build custom MCP servers that expose the full API surface of any tool in your stack.",
    url: "https://rsystems.nyc/services/ai/mcp-tooling",
  },
  twitter: {
    title: "MCP Tooling — RSystems NYC",
    description:
      "If a platform has an API, an LLM can use it. We build custom MCP servers that expose the full API surface of any tool in your stack.",
  },
};

const buildSteps = [
  {
    num: "01",
    name: "API analysis",
    body: "We map the target platform’s API documentation, identifying the endpoints relevant to your use case, the authentication model, rate limits, and operational constraints.",
  },
  {
    num: "02",
    name: "Tool definition",
    body: "Each endpoint becomes a named tool in the MCP server, with typed parameters, validation logic, descriptive documentation, and error handling. The tool descriptions are what the LLM reads to understand what it can do and how.",
  },
  {
    num: "03",
    name: "Deployment",
    body: "The MCP server runs on your infrastructure or ours, available to any MCP-compatible model. Deployment can be local, containerized, or cloud-hosted depending on your security and latency requirements.",
  },
  {
    num: "04",
    name: "Testing and iteration",
    body: "We verify that the model can reliably invoke each tool, interpret responses, handle errors gracefully, and chain multiple tools to complete multi-step tasks. This phase often surfaces gaps in API documentation that we work around before handoff.",
  },
];

export default function MCPToolingPage() {
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
            <Link href="/services/ai" className="hover:text-white/60 transition-colors">AI &amp; Automation</Link>
            <span>/</span>
            <span className="text-white/50">MCP Tooling</span>
          </div>
          <p className="text-[11px] font-semibold uppercase tracking-widest text-[#E8500A] mb-5">
            AI &amp; Automation
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight max-w-3xl">
            MCP Tooling
          </h1>
          <p className="mt-6 text-lg text-white/50 max-w-2xl leading-relaxed">
            If a platform has a documented API and you have a compute host, an LLM
            can use it. The bridge between the two is an MCP server.
          </p>
        </div>
      </section>

      {/* The gap */}
      <section className="bg-[#F4F2EF]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-3">
              <p className="text-[11px] font-semibold uppercase tracking-widest text-[#E8500A] pt-1">
                The Gap
              </p>
            </div>
            <div className="lg:col-span-7 space-y-5">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A1A] tracking-tight leading-snug">
                The gap between official and capable.
              </h2>
              <p className="text-base text-[#1A1A1A]/60 leading-relaxed">
                The Model Context Protocol is a standardized interface that translates
                an AI model&apos;s intentions into API calls. Most platforms that publish
                official MCP servers expose a carefully curated subset of their API —
                the most common use cases, designed for broad accessibility. For general
                workflows, that&apos;s often sufficient. For production automation, it
                usually isn&apos;t.
              </p>
              <p className="text-base text-[#1A1A1A]/60 leading-relaxed">
                JumpCloud publishes an official MCP with roughly a dozen tools. The
                JumpCloud API has hundreds of endpoints — user lifecycle management,
                device policy assignment, RADIUS configuration, group membership, LDAP
                integration, conditional access controls, hardware inventory, and more.
                The official MCP exposes a fraction of that surface.
              </p>
              <p className="text-base text-[#1A1A1A]/60 leading-relaxed">
                We built a custom JumpCloud MCP that exposes the full API. The result:
                Claude can manage an entire JumpCloud tenant through natural language —
                provisioning users, assigning device policies, configuring SSO
                integrations, auditing access, revoking credentials. What previously
                required a skilled administrator working through a UI now executes
                through an agent that understands your intent and acts on it precisely.
              </p>
              <p className="text-base text-[#1A1A1A]/60 leading-relaxed">
                The same principle applies to any platform with a documented API. If it
                can be called programmatically, it can become a tool.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Model compatibility */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-3">
              <p className="text-[11px] font-semibold uppercase tracking-widest text-[#E8500A] pt-1">
                Model Compatibility
              </p>
            </div>
            <div className="lg:col-span-7 space-y-5">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A1A] tracking-tight leading-snug">
                Works across models
              </h2>
              <p className="text-base text-[#1A1A1A]/60 leading-relaxed">
                MCP servers are model-agnostic by design. A server we build works with
                Claude, ChatGPT, Gemini, and any other MCP-compatible model. Our
                development and testing work most extensively with Claude — Anthropic&apos;s
                implementation of MCP is the most mature, and it&apos;s the model where
                we&apos;ve stress-tested complex multi-tool agent workflows furthest. For
                deployments using other models, we validate compatibility explicitly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How we build it */}
      <section className="bg-[#F4F2EF]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
          <p className="text-[11px] font-semibold uppercase tracking-widest text-[#E8500A] mb-4">
            How We Build It
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A1A] tracking-tight mb-12 max-w-xl">
            From API documentation to production tool.
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {buildSteps.map((step) => (
              <div key={step.num} className="w-full sm:w-[calc(50%-0.5rem)] border border-[#1A1A1A]/[0.07] rounded-xl bg-[#F4F2EF] p-7 hover:bg-white transition-colors">
                <p className="text-[11px] font-semibold text-[#E8500A] mb-3">{step.num}</p>
                <h3 className="text-[15px] font-semibold text-[#1A1A1A] mb-2 leading-snug">{step.name}</h3>
                <p className="text-sm text-[#1A1A1A]/50 leading-relaxed">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What you get */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-3">
              <p className="text-[11px] font-semibold uppercase tracking-widest text-[#E8500A] pt-1">
                What You Get
              </p>
            </div>
            <div className="lg:col-span-7 space-y-5">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A1A] tracking-tight leading-snug">
                Any platform. Production-grade.
              </h2>
              <p className="text-base text-[#1A1A1A]/60 leading-relaxed">
                Any platform with a documented REST, GraphQL, or RPC API can become a
                tool your AI agents use reliably. We&apos;ve built custom MCP servers for
                directory services, network monitoring platforms, ticketing systems,
                CRM APIs, financial platforms, and internal tooling.
              </p>
              <p className="text-base text-[#1A1A1A]/60 leading-relaxed">
                Custom MCPs are infrastructure. We treat them that way — documented,
                maintained, and designed for production use rather than demonstration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#F4F2EF]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
          <div className="rounded-xl border border-[#1A1A1A]/[0.07] bg-white p-8 lg:p-12">
            <p className="text-[11px] font-semibold uppercase tracking-widest text-[#E8500A] mb-4">
              Let&apos;s Talk
            </p>
            <h3 className="text-xl sm:text-2xl font-bold text-[#1A1A1A] tracking-tight leading-snug mb-4 max-w-2xl">
              Ready to give your agents access to your full stack?
            </h3>
            <p className="text-base text-[#1A1A1A]/60 leading-relaxed max-w-2xl mb-8">
              Let&apos;s talk about what you need.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-sm font-medium text-[#E8500A] hover:text-[#E8500A]/70 transition-colors"
            >
              Schedule a conversation
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 13L13 3M13 3H6M13 3V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

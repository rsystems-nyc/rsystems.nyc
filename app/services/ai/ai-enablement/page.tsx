import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "AI Enablement — RSystems NYC" },
  description:
    "The right AI models, tools, and workflows for your organization. We help teams adopt AI practically — from first deployment to embedded daily use.",
  alternates: { canonical: "https://rsystems.nyc/services/ai/ai-enablement" },
  openGraph: {
    title: "AI Enablement — RSystems NYC",
    description:
      "The right AI models, tools, and workflows for your organization. We help teams adopt AI practically — from first deployment to embedded daily use.",
    url: "https://rsystems.nyc/services/ai/ai-enablement",
  },
  twitter: {
    title: "AI Enablement — RSystems NYC",
    description:
      "The right AI models, tools, and workflows for your organization. We help teams adopt AI practically — from first deployment to embedded daily use.",
  },
};

const enablementAreas = [
  {
    name: "Enterprise subscription setup",
    body: "Claude for Teams or Enterprise, ChatGPT Team or Enterprise, Google Gemini for Business — each has different licensing models, admin controls, and data handling commitments. We evaluate and configure the right tier for your organization’s size, data requirements, and budget.",
  },
  {
    name: "Identity and access integration",
    body: "Enterprise AI tools should be provisioned through your identity provider like any other business application — SSO, SCIM provisioning, and access tied to your directory. Employees should access AI tools with their work credentials, and access should be revoked automatically when someone leaves.",
  },
  {
    name: "Use case identification",
    body: "The highest-value AI use cases are usually not the most obvious ones. We run structured sessions with teams to identify where AI genuinely saves meaningful time — not tasks where it sounds impressive but tasks where it demonstrably changes the work.",
  },
  {
    name: "Workflow development",
    body: "We build and document AI-assisted workflows for specific team functions: drafting and editing, research, summarization, data analysis, customer communication, internal documentation. These aren’t generic prompts — they’re tested workflows designed around how your team actually works.",
  },
  {
    name: "Training and adoption",
    body: "Tool availability doesn’t produce adoption. We run practical training sessions focused on what makes AI tools more or less useful — how to frame tasks, what to trust and verify, where AI reliably helps versus where it introduces risk.",
  },
];

export default function AIEnablementPage() {
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
            <span className="text-white/50">AI Enablement</span>
          </div>
          <p className="text-[11px] font-semibold uppercase tracking-widest text-[#E8500A] mb-5">
            AI &amp; Automation
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight max-w-3xl">
            AI Enablement
          </h1>
          <p className="mt-6 text-lg text-white/50 max-w-2xl leading-relaxed">
            The question isn&apos;t whether your organization should be using AI. It&apos;s
            which tools, for which tasks, configured and deployed in a way that
            actually gets used.
          </p>
        </div>
      </section>

      {/* Where most organizations start */}
      <section className="bg-[#F4F2EF]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-3">
              <p className="text-[11px] font-semibold uppercase tracking-widest text-[#E8500A] pt-1">
                Where Most Organizations Start
              </p>
            </div>
            <div className="lg:col-span-7 space-y-5">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A1A] tracking-tight leading-snug">
                Formalizing what&apos;s already happening.
              </h2>
              <p className="text-base text-[#1A1A1A]/60 leading-relaxed">
                The most common pattern we see: a handful of staff are using free-tier
                AI tools on personal accounts, the organization hasn&apos;t made a formal
                decision, and there&apos;s a growing gap between what AI-forward employees
                are doing and what the organization officially supports.
              </p>
              <p className="text-base text-[#1A1A1A]/60 leading-relaxed">
                Formalizing that is the starting point. It means evaluating the right
                enterprise AI subscriptions, configuring them correctly, connecting them
                to your identity infrastructure so access is managed through your
                directory, and helping teams understand what these tools actually do well.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The models */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-3">
              <p className="text-[11px] font-semibold uppercase tracking-widest text-[#E8500A] pt-1">
                The Models
              </p>
            </div>
            <div className="lg:col-span-7 space-y-5">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A1A] tracking-tight leading-snug">
                The models we work with
              </h2>
              <p className="text-base text-[#1A1A1A]/60 leading-relaxed">
                We work daily with Claude (Anthropic), ChatGPT (OpenAI), and Gemini
                (Google) across client engagements. Our recommendation on which to use
                is always task-specific — these models have genuinely different strengths,
                and the answer isn&apos;t the same for every use case.
              </p>
              <p className="text-base text-[#1A1A1A]/60 leading-relaxed">
                Our deepest experience is with Anthropic&apos;s Claude. It&apos;s the model we use
                for our own operations, infrastructure development, and client work where
                agentic capability matters. For reasoning-heavy tasks, code generation,
                complex document work, and autonomous agent deployments, Claude is our
                default recommendation — and the model where we&apos;ve pushed the boundaries
                furthest.
              </p>
              <p className="text-base text-[#1A1A1A]/60 leading-relaxed">
                For organizations in the Microsoft ecosystem, Microsoft 365 Copilot&apos;s
                integration with Teams, Outlook, and SharePoint often makes it the right
                choice for specific productivity workflows. For Google Workspace-first
                environments, Gemini&apos;s native integration changes the calculus. We don&apos;t
                have a religious position — we have an honest one.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What we help with */}
      <section className="bg-[#F4F2EF]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
          <p className="text-[11px] font-semibold uppercase tracking-widest text-[#E8500A] mb-4">
            What We Help With
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A1A] tracking-tight mb-12 max-w-xl">
            What enablement looks like in practice.
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {enablementAreas.map((area) => (
              <div key={area.name} className="w-full sm:w-[calc(50%-0.5rem)] border border-[#1A1A1A]/[0.07] rounded-xl bg-[#F4F2EF] p-7 hover:bg-white transition-colors">
                <h3 className="text-[15px] font-semibold text-[#1A1A1A] mb-3 leading-snug">
                  {area.name}
                </h3>
                <p className="text-sm text-[#1A1A1A]/50 leading-relaxed">{area.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Where enablement leads */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-3">
              <p className="text-[11px] font-semibold uppercase tracking-widest text-[#E8500A] pt-1">
                The Progression
              </p>
            </div>
            <div className="lg:col-span-7 space-y-5">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A1A] tracking-tight leading-snug">
                Where enablement leads
              </h2>
              <p className="text-base text-[#1A1A1A]/60 leading-relaxed">
                AI Enablement is the starting point. For organizations that want to go
                further — connecting AI to the platforms they run on, deploying agents
                that take actions autonomously, and governing that access properly — we
                build that infrastructure too.
              </p>
              <p className="text-base text-[#1A1A1A]/60 leading-relaxed">
                The{" "}
                <Link href="/services/ai/mcp-tooling" className="text-[#E8500A] hover:text-[#E8500A]/70 transition-colors">
                  MCP Tooling
                </Link>
                ,{" "}
                <Link href="/services/ai/agent-governance" className="text-[#E8500A] hover:text-[#E8500A]/70 transition-colors">
                  Agent Governance &amp; PAM
                </Link>
                , and{" "}
                <Link href="/services/ai/audit-accountability" className="text-[#E8500A] hover:text-[#E8500A]/70 transition-colors">
                  Audit &amp; Accountability
                </Link>{" "}
                services are the next layer. Most clients start with enablement and
                graduate to one or more of those as their use of AI matures.
              </p>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}

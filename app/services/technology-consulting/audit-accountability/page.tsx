import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import PageEndCTA from "@/app/components/PageEndCTA";

export const metadata: Metadata = {
  title: { absolute: "Audit & Accountability — RSystems NYC" },
  description:
    "When agents act at scale, you need a complete record of what they did, when, and with what authority. We build centralized audit infrastructure for agentic AI workflows.",
  alternates: { canonical: "https://rsystems.nyc/services/technology-consulting/audit-accountability" },
  openGraph: {
    title: "Audit & Accountability — RSystems NYC",
    description:
      "When agents act at scale, you need a complete record of what they did, when, and with what authority. We build centralized audit infrastructure for agentic AI workflows.",
    url: "https://rsystems.nyc/services/technology-consulting/audit-accountability",
  },
  twitter: {
    title: "Audit & Accountability — RSystems NYC",
    description:
      "When agents act at scale, you need a complete record of what they did, when, and with what authority. We build centralized audit infrastructure for agentic AI workflows.",
  },
};

const buildItems = [
  {
    num: "01",
    name: "Centralized routing through an AI gateway",
    body: "Rather than each agent calling tools directly, all MCP traffic routes through a centralized control point that logs every invocation before it reaches the target system. JumpCloud’s AI Gateway is one implementation — every tool call passes through JumpCloud, producing a log entry that records the identity, the tool, the parameters, and the response. The same architecture can be built using Cloudflare, a custom reverse proxy, or purpose-built gateway infrastructure depending on your stack.",
  },
  {
    num: "02",
    name: "Structured log format",
    body: "Raw gateway logs answer what was called but not why or by whose authority. We structure audit data to capture the agent identity, the tool and parameters, the system’s response, the task or workflow context, whether a human reviewed or authorized it, and a timestamp with duration and outcome. This structure makes logs useful for incident investigation, compliance review, and performance monitoring.",
  },
  {
    num: "03",
    name: "SIEM integration",
    body: "Agent audit logs route into your existing security monitoring infrastructure. AI agent activity appears alongside human activity in the same dashboards with the same alerting logic. Unusual patterns — an agent calling a tool it has never used before, a spike in write operations, activity outside a configured execution window — surface through the same detection mechanisms as any other anomalous behavior.",
  },
  {
    num: "04",
    name: "Rollback infrastructure",
    body: "A good audit trail is also a recovery tool. When an agent makes a change that needs to be undone, the log provides the exact sequence of tool calls and their parameters. Reversal is faster and more reliable when you have a precise record of what was changed rather than a general sense of what the agent was doing.",
  },
];

export default function AuditAccountabilityPage() {
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
            <span className="text-white/50">Audit &amp; Accountability</span>
          </div>
          <p className="text-[11px] font-semibold uppercase tracking-widest text-[#FE6305] mb-5">
            AI &amp; Automation
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight max-w-3xl">
            Audit &amp; Accountability
          </h1>
          <p className="mt-6 text-lg text-white/50 max-w-2xl leading-relaxed">
            When an agent makes a change at 3 AM, you need to know what happened —
            which tool it called, what it was given, and what it produced. Before the
            next change, not after the incident.
          </p>
        </div>
      </section>

      {/* The accountability shift */}
      <section className="bg-[#F4F2EF]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-3">
              <p className="text-[11px] font-semibold uppercase tracking-widest text-[#FE6305] pt-1">
                The Accountability Shift
              </p>
            </div>
            <div className="lg:col-span-7 space-y-5">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A1A] tracking-tight leading-snug">
                When AI acts on behalf of humans, attribution matters.
              </h2>
              <p className="text-base text-[#1A1A1A]/60 leading-relaxed">
                The shift from <em>AI assists humans</em> to <em>AI acts on behalf of
                humans</em> changes the accountability model.
              </p>
              <p className="text-base text-[#1A1A1A]/60 leading-relaxed">
                When an agent modifies a record, provisions a user, exports data, or
                submits a form, that action needs to be attributable: to the agent, to
                the identity it used, to the task it was executing, and ultimately to
                the human or workflow that authorized it. Without that trail, you can&apos;t
                answer basic questions after an incident — what happened, when, and who
                is responsible.
              </p>
              <p className="text-base text-[#1A1A1A]/60 leading-relaxed">
                Most organizations have mature audit trails for human actions. Almost
                none have equivalent coverage for agent actions. That gap is the problem
                we close.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How we build it */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
          <p className="text-[11px] font-semibold uppercase tracking-widest text-[#FE6305] mb-4">
            How We Build It
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A1A] tracking-tight mb-12 max-w-xl">
            Four layers of audit infrastructure.
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {buildItems.map((item) => (
              <div key={item.num} className="w-full sm:w-[calc(50%-0.5rem)] border border-[#1A1A1A]/[0.07] rounded-xl bg-white p-7 hover:bg-[#F4F2EF] transition-colors">
                <p className="text-[11px] font-semibold text-[#FE6305] mb-3">{item.num}</p>
                <h3 className="text-[15px] font-semibold text-[#1A1A1A] mb-2 leading-snug">{item.name}</h3>
                <p className="text-sm text-[#1A1A1A]/50 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance */}
      <section className="bg-[#F4F2EF]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-3">
              <p className="text-[11px] font-semibold uppercase tracking-widest text-[#FE6305] pt-1">
                Compliance Posture
              </p>
            </div>
            <div className="lg:col-span-7 space-y-5">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A1A] tracking-tight leading-snug">
                From nice-to-have to prerequisite.
              </h2>
              <p className="text-base text-[#1A1A1A]/60 leading-relaxed">
                For organizations subject to SOC 2, HIPAA, financial services
                regulations, or contractual audit requirements, agent activity logs are
                becoming a prerequisite rather than a nice-to-have.
              </p>
              <p className="text-base text-[#1A1A1A]/60 leading-relaxed">
                An AI agent operating on regulated data is subject to the same governance
                requirements as a human employee operating on that data. The fact that
                it&apos;s automated doesn&apos;t reduce the obligation — in many cases it increases
                it, because the speed and volume of agent actions makes the audit trail
                more consequential, not less.
              </p>
              <p className="text-base text-[#1A1A1A]/60 leading-relaxed">
                We increasingly see audit and compliance questions about AI governance
                in SIG Lite questionnaires and vendor assessments. Organizations that
                have built the infrastructure to answer those questions clearly have a
                meaningful advantage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Part of a complete governance stack */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-3">
              <p className="text-[11px] font-semibold uppercase tracking-widest text-[#FE6305] pt-1">
                The Full Stack
              </p>
            </div>
            <div className="lg:col-span-7 space-y-5">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A1A] tracking-tight leading-snug">
                Part of a complete governance stack
              </h2>
              <p className="text-base text-[#1A1A1A]/60 leading-relaxed">
                Audit &amp; Accountability answers what agents did.{" "}
                <Link href="/services/technology-consulting/agent-governance" className="text-[#FE6305] hover:text-[#FE6305]/70 transition-colors">
                  Agent Governance &amp; PAM
                </Link>{" "}
                answers what they were allowed to do.{" "}
                <Link href="/services/technology-consulting/mcp-tooling" className="text-[#FE6305] hover:text-[#FE6305]/70 transition-colors">
                  MCP Tooling
                </Link>{" "}
                answers what they could reach. Together they form the governance layer
                that makes agentic AI deployments defensible — not just technically
                capable, but accountable.
              </p>
              <p className="text-base text-[#1A1A1A]/60 leading-relaxed">
                We design and implement all three, together or individually, depending
                on where you are in your deployment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* A note on models */}
      <section className="bg-[#F4F2EF]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-3">
              <p className="text-[11px] font-semibold uppercase tracking-widest text-[#FE6305] pt-1">
                A Note on Models
              </p>
            </div>
            <div className="lg:col-span-7">
              <div className="border-l-2 border-[#FE6305] pl-6 space-y-4">
                <p className="text-base text-[#1A1A1A]/70 leading-relaxed">
                  We&apos;ve built audit infrastructure for Claude, ChatGPT, and Gemini-based
                  agent deployments. The audit architecture is model-agnostic — the
                  gateway logs tool calls regardless of which model issued them. Our most
                  extensive work has been with Claude, including using Anthropic&apos;s own
                  JumpCloud AI Gateway integration as the audit backbone for MCP-based
                  workflows. Where you start matters less than having the trail in place
                  before you scale.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Work */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
          <Link
            href="/case-studies/operationalizing-ai"
            className="group block rounded-xl border border-[#1A1A1A]/[0.07] bg-[#F4F2EF] hover:bg-white hover:border-[#FE6305]/20 p-7 lg:p-8 transition-colors"
          >
            <p className="text-[11px] font-semibold uppercase tracking-widest text-[#FE6305] mb-3">
              Case Study
            </p>
            <h3 className="text-xl sm:text-2xl font-bold text-[#1A1A1A] tracking-tight leading-snug mb-3 group-hover:text-[#FE6305] transition-colors max-w-2xl">
              Operationalizing AI Across Every Department
            </h3>
            <p className="text-base text-[#1A1A1A]/60 leading-relaxed mb-6 max-w-2xl">
              How RSystems deployed Claude across the business — agents provisioned as managed
              JumpCloud identities with least-privilege access, custom OAuth-backed MCP servers,
              and full audit governance through the JumpCloud AI Gateway.
            </p>
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#FE6305]">
              Read the case study
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">
                <path d="M3 13L13 3M13 3H6M13 3V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </Link>
        </div>
      </section>

          <PageEndCTA pageKey="/services/technology-consulting/audit-accountability" precedingBg="bg-white" />
</main>
  );
}

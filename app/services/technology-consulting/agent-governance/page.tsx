import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Agent Governance & PAM — RSystems NYC" },
  description:
    "AI agents need identities, permissions, and blast-radius containment — just like employees. We design access architectures that give agents exactly what they need and nothing more.",
  alternates: { canonical: "https://rsystems.nyc/services/technology-consulting/agent-governance" },
  openGraph: {
    title: "Agent Governance & PAM — RSystems NYC",
    description:
      "AI agents need identities, permissions, and blast-radius containment — just like employees. We design access architectures that give agents exactly what they need and nothing more.",
    url: "https://rsystems.nyc/services/technology-consulting/agent-governance",
  },
  twitter: {
    title: "Agent Governance & PAM — RSystems NYC",
    description:
      "AI agents need identities, permissions, and blast-radius containment — just like employees. We design access architectures that give agents exactly what they need and nothing more.",
  },
};

export default function AgentGovernancePage() {
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
            <span className="text-white/50">Agent Governance &amp; PAM</span>
          </div>
          <p className="text-[11px] font-semibold uppercase tracking-widest text-[#FE6305] mb-5">
            AI &amp; Automation
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight max-w-3xl">
            Agent Governance &amp; PAM
          </h1>
          <p className="mt-6 text-lg text-white/50 max-w-2xl leading-relaxed">
            An agent with overly broad permissions can accidentally delete data,
            initiate payments, or make configuration changes that are hard to undo.
            Governing agent access is the discipline of designing permissions that
            prevent that.
          </p>
        </div>
      </section>

      {/* The blast radius problem */}
      <section className="bg-[#F4F2EF]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-3">
              <p className="text-[11px] font-semibold uppercase tracking-widest text-[#FE6305] pt-1">
                The Problem
              </p>
            </div>
            <div className="lg:col-span-7 space-y-5">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A1A] tracking-tight leading-snug">
                The blast radius problem.
              </h2>
              <p className="text-base text-[#1A1A1A]/60 leading-relaxed">
                When a human makes a mistake, the damage is bounded by what they had
                access to. The same is true for agents — but agents operate faster, at
                higher volume, and without the hesitation that sometimes stops a human
                from clicking confirm.
              </p>
              <p className="text-base text-[#1A1A1A]/60 leading-relaxed">
                Broad permissions amplify mistakes. An agent with write access to your
                entire infrastructure can accidentally modify it. An agent with write
                access to exactly one import endpoint in your accounting software can do
                exactly one thing: import. That constraint isn&apos;t a limitation — it&apos;s
                the design.
              </p>
              <p className="text-base text-[#1A1A1A]/60 leading-relaxed">
                The same least-privilege principles that govern human Privileged Access
                Management apply to agents. What&apos;s different is that most organizations
                have never had to think about identity architecture for non-human actors.
                We have.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How we approach it */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-3">
              <p className="text-[11px] font-semibold uppercase tracking-widest text-[#FE6305] pt-1">
                Our Approach
              </p>
            </div>
            <div className="lg:col-span-7 space-y-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A1A] tracking-tight leading-snug">
                How we approach it
              </h2>

              <div className="space-y-2">
                <h3 className="text-[15px] font-semibold text-[#1A1A1A] leading-snug">
                  Purpose-built agent identities
                </h3>
                <p className="text-base text-[#1A1A1A]/60 leading-relaxed">
                  Each agent gets its own identity — a dedicated service account or
                  managed identity in your directory, separate from human accounts, with
                  its own authentication credentials, access controls, and audit trail.
                  When something goes wrong, you know immediately which agent acted and
                  what it had access to.
                </p>
                <p className="text-base text-[#1A1A1A]/60 leading-relaxed">
                  This matters more than it sounds. An agent authenticating as a human&apos;s
                  account inherits that human&apos;s full permission set and produces no
                  distinguishable audit record. An agent with its own identity is
                  traceable, revocable, and scoped. We provision these identities in
                  JumpCloud, Microsoft Entra ID, Okta, or whichever directory you run.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-[15px] font-semibold text-[#1A1A1A] leading-snug">
                  Permissions designed from the task outward
                </h3>
                <p className="text-base text-[#1A1A1A]/60 leading-relaxed">
                  We start with three questions: What data does this agent need to read?
                  What systems does it need to write to? What actions should it never be
                  able to take, regardless of what it&apos;s instructed to do?
                </p>
                <p className="text-base text-[#1A1A1A]/60 leading-relaxed">
                  The answers define the permission set, which is enforced at the
                  identity and API level — not just in the agent&apos;s system prompt. A
                  permission that doesn&apos;t exist in the API layer cannot be exercised by
                  any model, no matter how it&apos;s prompted. That&apos;s a meaningful security
                  guarantee that prompt-level guardrails alone cannot provide.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-[15px] font-semibold text-[#1A1A1A] leading-snug">
                  Write access minimization
                </h3>
                <p className="text-base text-[#1A1A1A]/60 leading-relaxed">
                  Read access is granted broadly where needed. Write access is granted
                  narrowly and specifically. For most automation tasks, an agent that
                  reads from ten systems and writes to one is safer, more auditable, and
                  easier to reason about than one with broad write access and good
                  intentions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* In practice */}
      <section className="bg-[#F4F2EF]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-3">
              <p className="text-[11px] font-semibold uppercase tracking-widest text-[#FE6305] pt-1">
                In Practice
              </p>
            </div>
            <div className="lg:col-span-7 space-y-5">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A1A] tracking-tight leading-snug">
                Finance automation agent
              </h2>
              <p className="text-base text-[#1A1A1A]/60 leading-relaxed">
                A finance team needed to automate monthly reconciliation: collect
                transaction data from two banking providers and a payment processor,
                normalize it, and import it into their accounting platform.
              </p>
              <div className="rounded-xl border border-[#1A1A1A]/[0.07] bg-white p-6 space-y-3">
                <p className="text-[11px] font-semibold uppercase tracking-widest text-[#1A1A1A]/40 mb-3">
                  The agent&apos;s identity was granted
                </p>
                <ul className="space-y-2.5">
                  {[
                    "Read-only API credentials to each financial data source. No payment initiation. No account modification. Read only.",
                    "Write access to exactly one endpoint in the accounting software: the transaction import endpoint. Not the payment endpoint. Not account settings. The import endpoint only.",
                    "No access to HR systems, infrastructure, or anything outside its defined scope.",
                    "Execution on a dedicated host with no network route to internal systems beyond the APIs in its scope.",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-[#FE6305] flex-shrink-0" />
                      <p className="text-sm text-[#1A1A1A]/60 leading-relaxed">{item}</p>
                    </li>
                  ))}
                </ul>
              </div>
              <p className="text-base text-[#1A1A1A]/60 leading-relaxed">
                The agent completes reconciliation in minutes instead of hours. The risk
                of it accidentally initiating a payment, modifying historical records,
                or accessing data outside its scope is not mitigated by guidelines — it
                is structurally impossible given what it was issued.
              </p>
              <p className="text-base text-[#1A1A1A]/70 font-medium leading-relaxed">
                That&apos;s the standard we design to.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Model notes */}
      <section className="bg-white">
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
                  Agent governance principles apply regardless of which model powers
                  the agent. We&apos;ve implemented agent identity architectures for Claude,
                  ChatGPT, and Gemini deployments. Claude is the model we have the
                  deepest experience with for agentic use cases — Anthropic&apos;s work on AI
                  safety and its model&apos;s behavior under ambiguous instructions makes it
                  the model we most commonly recommend when agents are taking real-world
                  actions. That said, the identity and permission infrastructure we build
                  is model-agnostic.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Work */}
      <section className="bg-[#F4F2EF]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
          <Link
            href="/case-studies/operationalizing-ai"
            className="group block rounded-xl border border-[#1A1A1A]/[0.07] bg-white hover:border-[#FE6305]/20 p-7 lg:p-8 transition-colors"
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

    </main>
  );
}

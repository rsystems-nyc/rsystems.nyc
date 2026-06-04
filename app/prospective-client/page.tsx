import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work With Us — RSystems",
  description:
    "RSystems works with a specific type of organization. Before scheduling a conversation, here's what you should know about how we engage — and whether we're the right fit.",
};

const rightFitIndicators = [
  {
    title: "You have IT coverage, but not strategic direction",
    description:
      "You have an internal IT team or MSP managing day-to-day operations. What's missing is a senior technical voice that can translate business goals into infrastructure decisions.",
  },
  {
    title: "Leadership is involved in technology decisions",
    description:
      "Your CFO, COO, or CEO is asking hard questions about IT investment and not getting clear answers. You need someone who can engage at that level — not just execute tickets.",
  },
  {
    title: "You're planning a significant infrastructure initiative",
    description:
      "A cloud migration, datacenter consolidation, security overhaul, or network redesign is on the roadmap. The work requires senior expertise your current team doesn't have in-house.",
  },
  {
    title: "You're based in New York City",
    description:
      "Our clients are NYC-based or have a meaningful New York presence. We engage in person where it matters — board meetings, site assessments, leadership discussions.",
  },
];

const steps = [
  {
    label: "Initial Conversation",
    duration: "30 minutes",
    description:
      "A direct conversation with Reilly Scull, founder of RSystems. We'll discuss your organization's current infrastructure, where your team is stretched, and what you're trying to accomplish in the next 12 to 24 months. No sales team, no discovery handoff.",
  },
  {
    label: "Initial Assessment",
    duration: "If there's alignment",
    description:
      "If the initial conversation surfaces a clear need, we conduct a structured assessment of your environment — mapping what exists, identifying gaps, and establishing a baseline for strategic recommendations.",
  },
  {
    label: "Scope & Proposal",
    duration: "Following the assessment",
    description:
      "We define the engagement clearly: objectives, deliverables, timeline, and investment. No ambiguity about what we're doing, what you're getting, or what it costs.",
  },
  {
    label: "Engagement Begins",
    duration: "Senior-led from day one",
    description:
      "Every engagement is led personally by Reilly. You're not handed off to a project manager or junior consultant. The expertise you evaluated is the expertise you get.",
  },
];

const notAFit = [
  "Tier 1 helpdesk or end-user support",
  "Day-to-day managed services or break/fix work",
  "Onboarding individual new hires (we build the systems; your team runs them)",
  "Engagements driven by a vendor or platform your leadership has already decided on",
];

export default function ProspectiveClientPage() {
  return (
    <main className="flex-1">

      {/* Hero */}
      <section className="bg-[#0F1117] text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <p className="text-[11px] font-semibold uppercase tracking-widest text-[#E8500A] mb-5">
            RSystems &nbsp;·&nbsp; New York City
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight max-w-3xl">
            Is RSystems the right fit for your organization?
          </h1>
          <p className="mt-6 text-lg text-white/50 max-w-2xl leading-relaxed">
            We work with a specific type of organization. Before scheduling a
            conversation, here&apos;s what you should know about how we engage —
            and whether we&apos;re likely to be the right partner.
          </p>
        </div>
      </section>

      {/* Who We Work With */}
      <section className="bg-[#F4F2EF]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 mb-14">
            <div className="lg:col-span-3">
              <p className="text-[11px] font-semibold uppercase tracking-widest text-[#E8500A] pt-1">
                The Right Fit
              </p>
            </div>
            <div className="lg:col-span-7 space-y-5">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A1A] tracking-tight leading-snug">
                We work best with organizations tackling high-impact infrastructure projects.
              </h2>
              <p className="text-base text-[#1A1A1A]/60 leading-relaxed">
                <span className="font-semibold text-[#1A1A1A]">For established organizations:</span>{" "}
                If you have a capable internal IT team handling day-to-day operations,
                we partner with you on the strategic work: datacenter architecture, cloud
                migrations, security and compliance frameworks, M&amp;A integration, and
                infrastructure budgeting.
              </p>
              <p className="text-base text-[#1A1A1A]/60 leading-relaxed">
                <span className="font-semibold text-[#1A1A1A]">For growing companies:</span>{" "}
                If you&apos;re scaling but don&apos;t yet have internal IT depth, we help you
                build a solid foundation from day one. The infrastructure decisions you
                make now — SSO, device management, networking, cloud architecture,
                automation — will shape your operations for years.
              </p>
              <p className="text-base text-[#1A1A1A]/60 leading-relaxed">
                <span className="font-semibold text-[#1A1A1A]">For smaller teams:</span>{" "}
                If you&apos;re too small to hire dedicated IT staff but serious about
                infrastructure, we can implement foundational systems and train your
                team to maintain them, or connect you with trusted partners for ongoing support.
              </p>
              <p className="text-base text-[#1A1A1A]/60 leading-relaxed">
                If you recognize your organization in any of the following, we&apos;re
                likely worth talking to.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-[#1A1A1A]/[0.07] border border-[#1A1A1A]/[0.07] rounded-xl overflow-hidden">
            {rightFitIndicators.map((item, i) => (
              <div key={i} className="bg-[#F4F2EF] p-7 hover:bg-white transition-colors">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-0.5 w-5 h-5 rounded-full bg-[#E8500A]/10 flex items-center justify-center">
                    <svg width="10" height="8" viewBox="0 0 10 8" fill="none" aria-hidden="true">
                      <path d="M1 4L3.5 6.5L9 1" stroke="#E8500A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-[15px] font-semibold text-[#1A1A1A] leading-snug mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-[#1A1A1A]/50 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Don't Do */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-3">
              <p className="text-[11px] font-semibold uppercase tracking-widest text-[#E8500A] pt-1">
                Setting Expectations
              </p>
            </div>
            <div className="lg:col-span-7 space-y-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A1A] tracking-tight leading-snug">
                Some things RSystems isn&apos;t the right fit for.
              </h2>
              <p className="text-base text-[#1A1A1A]/60 leading-relaxed">
                Being clear about what we don&apos;t do is part of how we deliver value
                to the organizations we do work with. We don&apos;t spread thin across
                every type of engagement — and that focus is why the work we do is
                done well.
              </p>
              <ul className="space-y-3">
                {notAFit.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-1 w-4 h-4 rounded-full border border-[#1A1A1A]/15 flex items-center justify-center">
                      <svg width="8" height="8" viewBox="0 0 8 8" fill="none" aria-hidden="true">
                        <path d="M2 2L6 6M6 2L2 6" stroke="#1A1A1A" strokeOpacity="0.3" strokeWidth="1.25" strokeLinecap="round" />
                      </svg>
                    </div>
                    <span className="text-base text-[#1A1A1A]/60 leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="text-base text-[#1A1A1A]/60 leading-relaxed">
                If what you&apos;re looking for is on that list, we&apos;re happy to point
                you toward a firm that&apos;s a better fit. If it&apos;s not — keep reading.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-[#F4F2EF]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
          <div className="mb-14">
            <p className="text-[11px] font-semibold uppercase tracking-widest text-[#E8500A] mb-4">
              How It Works
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A1A] tracking-tight max-w-xl">
              What to expect from the first conversation to a working engagement.
            </h2>
          </div>

          <div className="space-y-px bg-[#1A1A1A]/[0.07] border border-[#1A1A1A]/[0.07] rounded-xl overflow-hidden">
            {steps.map((step, i) => (
              <div key={i} className="bg-[#F4F2EF] p-7 hover:bg-white transition-colors grid grid-cols-1 sm:grid-cols-12 gap-4 sm:gap-8">
                <div className="sm:col-span-1">
                  <span className="text-[13px] font-semibold text-[#E8500A] tabular-nums">
                    0{i + 1}
                  </span>
                </div>
                <div className="sm:col-span-3">
                  <p className="text-[15px] font-semibold text-[#1A1A1A] leading-snug">
                    {step.label}
                  </p>
                  <p className="text-xs text-[#1A1A1A]/35 mt-1 font-medium uppercase tracking-wider">
                    {step.duration}
                  </p>
                </div>
                <div className="sm:col-span-8">
                  <p className="text-sm text-[#1A1A1A]/55 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-3">
              <p className="text-[11px] font-semibold uppercase tracking-widest text-[#E8500A] pt-1">
                Investment
              </p>
            </div>
            <div className="lg:col-span-7 space-y-5">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A1A] tracking-tight leading-snug">
                What to budget for.
              </h2>
              <p className="text-base text-[#1A1A1A]/60 leading-relaxed">
                Engagements typically start at <span className="text-[#1A1A1A] font-semibold">$5,000</span>.
                The scope and duration depend on the initiative — a focused infrastructure
                project looks different from an ongoing fractional CTO engagement, and
                both are scoped accordingly.
              </p>
              <p className="text-base text-[#1A1A1A]/60 leading-relaxed">
                Project-based work is available for well-defined initiatives with clear
                deliverables. Advisory and strategy engagements are typically structured
                on a monthly retainer, with a minimum three-month commitment to ensure
                the work is done properly rather than rushed.
              </p>
              <p className="text-base text-[#1A1A1A]/60 leading-relaxed">
                We don&apos;t quote a number before we understand what you need. The initial
                conversation is free. If there&apos;s alignment, the assessment and proposal
                will give you a clear picture of the investment before you commit to
                anything.
              </p>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}

import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact — RSystems NYC",
  description:
    "RSystems works with a specific type of organization. Before scheduling a conversation, here's what you should know about how we engage — and whether we're the right fit.",
  alternates: { canonical: "https://rsystems.nyc/contact" },
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
    title: "You have a meaningful presence in New York City, or you're comfortable working remotely.",
    description:
      "Our clients are often NYC-based, but we work with organizations anywhere. All engagements are conducted on New York City time — remote collaboration is seamless, and in-person is available when it matters.",
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
  "Lowest-bid, commodity IT where price is the only consideration",
  "Purely transactional break/fix with no ongoing relationship",
  "Organizations unwilling to invest the time and budget that good infrastructure requires",
];

export default function ContactPage() {
  return (
    <main className="flex-1">

      {/* Hero */}
      <section className="bg-[#0F1117] text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <p className="text-[11px] font-semibold uppercase tracking-widest text-[#FE6305] mb-5">
            RSystems &nbsp;·&nbsp; New York City
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight">
            Let&apos;s talk.
          </h1>
          <p className="mt-6 text-lg text-white/50 max-w-xl leading-relaxed">
            Schedule a 30-minute conversation. We&apos;ll discuss where your organization
            is, where it needs to go, and whether RSystems is the right fit to get you there.
          </p>
        </div>
      </section>

      {/* Section 1 — The Right Fit */}
      <section className="bg-[#F4F2EF]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 mb-14">
            <div className="lg:col-span-3">
              <p className="text-[11px] font-semibold uppercase tracking-widest text-[#FE6305] pt-1">
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
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {rightFitIndicators.map((item, i) => (
              <div key={i} className="w-full sm:w-[calc(50%-0.5rem)] border border-[#1A1A1A]/[0.07] rounded-xl bg-[#F4F2EF] p-7 hover:bg-white transition-colors">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-0.5 w-5 h-5 rounded-full bg-[#FE6305]/10 flex items-center justify-center">
                    <svg width="10" height="8" viewBox="0 0 10 8" fill="none" aria-hidden="true">
                      <path d="M1 4L3.5 6.5L9 1" stroke="#FE6305" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
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

      {/* Section 2 — Setting Expectations */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-3">
              <p className="text-[11px] font-semibold uppercase tracking-widest text-[#FE6305] pt-1">
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

      {/* Section 3 — How It Works */}
      <section className="bg-[#F4F2EF]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
          <div className="mb-14">
            <p className="text-[11px] font-semibold uppercase tracking-widest text-[#FE6305] mb-4">
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
                  <span className="text-[13px] font-semibold text-[#FE6305] tabular-nums">
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

      {/* Section 4 — Investment */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-3">
              <p className="text-[11px] font-semibold uppercase tracking-widest text-[#FE6305] pt-1">
                Investment
              </p>
            </div>
            <div className="lg:col-span-7 space-y-5">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A1A] tracking-tight leading-snug">
                What to budget for.
              </h2>
              <p className="text-base text-[#1A1A1A]/60 leading-relaxed">
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

      {/* Section 5 — Booking */}
      <section className="bg-[#F4F2EF]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 lg:py-16">

          <div className="max-w-2xl mb-12">
            <p className="text-[11px] font-semibold uppercase tracking-widest text-[#FE6305] mb-5">
              Schedule a Conversation
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A1A] tracking-tight leading-snug mb-6">
              This is a direct conversation — no sales team, no discovery call handoff.
            </h2>
            <p className="text-base text-[#1A1A1A]/60 leading-relaxed">
              You&apos;ll speak with Reilly Scull, founder of RSystems, who leads every
              engagement personally. Come prepared to talk about your organization&apos;s
              current infrastructure, where your team is stretched, and what you&apos;re
              trying to accomplish in the next 12 to 24 months. We&apos;ll tell you honestly
              whether we&apos;re the right fit.
            </p>
          </div>

          {/* Callouts */}
          <div className="flex flex-col sm:flex-row gap-6 mb-12">
            <div className="flex gap-3 items-start">
              <div className="mt-0.5 flex-shrink-0 w-8 h-8 rounded-full bg-[#FE6305]/10 flex items-center justify-center">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <circle cx="7" cy="7" r="6" stroke="#FE6305" strokeWidth="1.25" />
                  <path d="M7 4v3.5l2 1.5" stroke="#FE6305" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-semibold text-[#1A1A1A]">30 minutes</p>
                <p className="text-sm text-[#1A1A1A]/50 mt-0.5">Focused and efficient</p>
              </div>
            </div>

            <div className="flex gap-3 items-start">
              <div className="mt-0.5 flex-shrink-0 w-8 h-8 rounded-full bg-[#FE6305]/10 flex items-center justify-center">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M2 4.5C2 3.67 2.67 3 3.5 3h7C11.33 3 12 3.67 12 4.5v5c0 .83-.67 1.5-1.5 1.5h-7C2.67 11 2 10.33 2 9.5v-5Z" stroke="#FE6305" strokeWidth="1.25" />
                  <path d="M2 5.5l5 3 5-3" stroke="#FE6305" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-semibold text-[#1A1A1A]">Video or phone</p>
                <p className="text-sm text-[#1A1A1A]/50 mt-0.5">Confirmation sent immediately</p>
              </div>
            </div>

            <div className="flex gap-3 items-start">
              <div className="mt-0.5 flex-shrink-0 w-8 h-8 rounded-full bg-[#FE6305]/10 flex items-center justify-center">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M7 1.5C4.51 1.5 2.5 3.51 2.5 6c0 3.18 4.5 6.5 4.5 6.5s4.5-3.32 4.5-6.5c0-2.49-2.01-4.5-4.5-4.5Z" stroke="#FE6305" strokeWidth="1.25" />
                  <circle cx="7" cy="6" r="1.25" stroke="#FE6305" strokeWidth="1.25" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-semibold text-[#1A1A1A]">New York City</p>
                <p className="text-sm text-[#1A1A1A]/50 mt-0.5">In-person available for NYC clients</p>
              </div>
            </div>
          </div>

          {/* Calendar embed */}
          <div className="w-full max-w-[700px] mx-auto">
            <div className="bg-white rounded-xl border border-[#1A1A1A]/[0.07] overflow-hidden shadow-sm">
              <iframe
                src="https://calendar.google.com/calendar/appointments/AcZssZ2xNQpbkd6I9lnMHUgvdFvUmEYvZSIXYuYjvNs=?gv=true"
                style={{ border: 0 }}
                width="100%"
                height="480"
                title="Schedule a conversation with RSystems"
              />
            </div>
          </div>

        </div>
      </section>

      {/* Current clients */}
      <section className="bg-white border-t border-[#1A1A1A]/[0.08]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 text-center">
          <p className="text-sm text-[#1A1A1A]/50 mb-4">
            Already an RSystems client looking for support?
          </p>
          <Link
            href="/support"
            className="inline-flex items-center gap-2 text-sm font-semibold bg-[#FE6305] text-white px-6 py-2.5 rounded hover:bg-[#FE6305]/85 transition-colors"
          >
            Visit the Support page
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
              <path d="M4 1l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </section>

    </main>
  );
}

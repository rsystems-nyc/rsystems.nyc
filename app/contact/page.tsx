import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — RSystems",
  description:
    "Schedule a conversation with RSystems — Executive IT Leadership & Consulting in New York City.",
};

export default function ContactPage() {
  return (
    <main className="flex-1">

      {/* Hero */}
      <section className="bg-[#0F1117] text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <p className="text-[11px] font-semibold uppercase tracking-widest text-[#E8500A] mb-5">
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

      {/* Booking section */}
      <section className="bg-[#F4F2EF]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-24">

          {/* Intro */}
          <div className="max-w-2xl mb-12">
            <p className="text-[11px] font-semibold uppercase tracking-widest text-[#E8500A] mb-5">
              What to expect
            </p>
            <p className="text-base text-[#1A1A1A]/60 leading-relaxed mb-4">
              This is a direct conversation — no sales team, no discovery call
              handoff. You&apos;ll speak with Reilly Scull, founder of RSystems, who
              leads every engagement personally.
            </p>
            <p className="text-base text-[#1A1A1A]/60 leading-relaxed">
              Come prepared to talk about your organization&apos;s current infrastructure,
              where your team is stretched, and what you&apos;re trying to accomplish in
              the next 12 to 24 months. We&apos;ll tell you honestly whether we&apos;re the
              right fit.
            </p>
          </div>

          {/* Callouts */}
          <div className="flex flex-col sm:flex-row gap-6 mb-12">
            <div className="flex gap-3 items-start">
              <div className="mt-0.5 flex-shrink-0 w-8 h-8 rounded-full bg-[#E8500A]/10 flex items-center justify-center">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <circle cx="7" cy="7" r="6" stroke="#E8500A" strokeWidth="1.25" />
                  <path d="M7 4v3.5l2 1.5" stroke="#E8500A" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-semibold text-[#1A1A1A]">30 minutes</p>
                <p className="text-sm text-[#1A1A1A]/50 mt-0.5">Focused and efficient</p>
              </div>
            </div>

            <div className="flex gap-3 items-start">
              <div className="mt-0.5 flex-shrink-0 w-8 h-8 rounded-full bg-[#E8500A]/10 flex items-center justify-center">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M2 4.5C2 3.67 2.67 3 3.5 3h7C11.33 3 12 3.67 12 4.5v5c0 .83-.67 1.5-1.5 1.5h-7C2.67 11 2 10.33 2 9.5v-5Z" stroke="#E8500A" strokeWidth="1.25" />
                  <path d="M2 5.5l5 3 5-3" stroke="#E8500A" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-semibold text-[#1A1A1A]">Video or phone</p>
                <p className="text-sm text-[#1A1A1A]/50 mt-0.5">Confirmation sent immediately</p>
              </div>
            </div>

            <div className="flex gap-3 items-start">
              <div className="mt-0.5 flex-shrink-0 w-8 h-8 rounded-full bg-[#E8500A]/10 flex items-center justify-center">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M7 1.5C4.51 1.5 2.5 3.51 2.5 6c0 3.18 4.5 6.5 4.5 6.5s4.5-3.32 4.5-6.5c0-2.49-2.01-4.5-4.5-4.5Z" stroke="#E8500A" strokeWidth="1.25" />
                  <circle cx="7" cy="6" r="1.25" stroke="#E8500A" strokeWidth="1.25" />
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
            <p className="mt-5 text-sm text-[#1A1A1A]/40 leading-relaxed">
              Engagements typically start at $5,000.
            </p>
          </div>

        </div>
      </section>

    </main>
  );
}

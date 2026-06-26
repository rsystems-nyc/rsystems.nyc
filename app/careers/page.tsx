import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers — RSystems",
  alternates: { canonical: "https://rsystems.nyc/careers" },
  description:
    "RSystems is a New York City IT consultancy. We hire experienced engineers and strategists who operate at the top of their field.",
};

const qualities = [
  "You have deep, demonstrable expertise in at least one domain — networking, compute, storage, security, cloud, or identity — and working knowledge across several others.",
  "You can hold a conversation with a CTO and a network engineer in the same afternoon and command credibility in both rooms.",
  "You've designed systems that have to work, not just systems that work in a demo.",
  "You diagnose before you prescribe. You don't recommend tools because they're popular.",
  "You're comfortable owning a recommendation end to end — from architecture through implementation.",
  "You write clearly. You think in systems. You default to documentation.",
  "You've outgrown environments that reward volume over quality.",
];

export default function CareersPage() {
  return (
    <main className="flex-1">

      {/* Hero */}
      <section className="bg-[#0F1117] text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <p className="text-[11px] font-semibold uppercase tracking-widest text-[#FE6305] mb-5">
            Careers
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight max-w-3xl">
            We Hire Engineers, Not Titles.
          </h1>
          <p className="mt-6 text-lg text-white/50 max-w-2xl leading-relaxed">
            RSystems is a small team doing consequential work. We&apos;re not always
            hiring — but we&apos;re always interested in people who set the standard.
          </p>
        </div>
      </section>

      {/* About RSystems */}
      <section className="bg-[#F4F2EF]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-3">
              <p className="text-[11px] font-semibold uppercase tracking-widest text-[#FE6305] pt-1">
                About RSystems
              </p>
            </div>
            <div className="lg:col-span-7 space-y-5">
              <p className="text-base text-[#1A1A1A]/60 leading-relaxed">
                RSystems is an executive-level IT consultancy based in New York City. We
                design and operate infrastructure for organizations that can&apos;t afford to
                get it wrong — complex environments, high stakes, no hand-holding. We
                advise at the strategic level and operate at the technical level; our team
                needs to be credible at both.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About You */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-3">
              <p className="text-[11px] font-semibold uppercase tracking-widest text-[#FE6305] pt-1">
                About You
              </p>
            </div>
            <div className="lg:col-span-7">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A1A] tracking-tight leading-snug mb-8">
                The standard we hold ourselves to.
              </h2>
              <ul className="space-y-5">
                {qualities.map((quality, i) => (
                  <li key={i} className="flex gap-4">
                    <span
                      className="mt-[9px] flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#FE6305]"
                      aria-hidden="true"
                    />
                    <p className="text-base text-[#1A1A1A]/60 leading-relaxed">{quality}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* What Working Here Looks Like */}
      <section className="bg-[#F4F2EF]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-3">
              <p className="text-[11px] font-semibold uppercase tracking-widest text-[#FE6305] pt-1">
                What Working Here Looks Like
              </p>
            </div>
            <div className="lg:col-span-7 space-y-5">
              <p className="text-base text-[#1A1A1A]/60 leading-relaxed">
                You&apos;ll work on infrastructure that matters — for organizations where
                downtime has real consequences and where technical decisions have strategic
                implications. You&apos;ll work alongside people who hold themselves to a high
                standard and expect the same from you. The team is small by design;
                there&apos;s no room for passengers.
              </p>
              <p className="text-base text-[#1A1A1A]/60 leading-relaxed">
                The work is technically deep and genuinely varied. One engagement might be
                a full infrastructure audit and remediation roadmap; the next, a
                ground-up datacenter design or a cloud migration with real compliance
                stakes. You own your recommendations from first conversation through
                implementation. No handoffs to a delivery team. No gap between what was
                scoped and what gets built.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-3">
              <p className="text-[11px] font-semibold uppercase tracking-widest text-[#FE6305] pt-1">
                Open Positions
              </p>
            </div>
            <div className="lg:col-span-7">
              <p className="text-base text-[#1A1A1A]/40 leading-relaxed">
                We have no open positions at this time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Speculative Applications */}
      <section className="bg-[#0F1117] text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-3">
              <p className="text-[11px] font-semibold uppercase tracking-widest text-[#FE6305] pt-1">
                Not Seeing a Fit?
              </p>
            </div>
            <div className="lg:col-span-7 space-y-5">
              <p className="text-base text-white/60 leading-relaxed">
                If you&apos;re at a point in your career where you&apos;ve earned the right to be
                selective about where you work next, we&apos;d still like to hear from you.
                Send a note to{" "}
                <a
                  href="mailto:careers@rsystems.nyc"
                  className="text-white underline underline-offset-2 hover:text-[#FE6305] transition-colors"
                >
                  careers@rsystems.nyc
                </a>{" "}
                — no resume required, just tell us what you do and what you&apos;re looking
                for.
              </p>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}

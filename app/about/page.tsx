import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About RSystems NYC | Executive IT Leadership & Consulting",
  alternates: { canonical: "https://rsystems.nyc/about" },
  description:
    "RSystems is a New York City-based executive IT leadership and consulting firm — providing technology strategy, infrastructure architecture, and senior-level managed services for organizations that need deep expertise without a full-time hire.",
  openGraph: {
    title: "About RSystems NYC | Executive IT Leadership & Consulting",
    description:
      "RSystems is a New York City-based executive IT leadership and consulting firm — providing technology strategy, infrastructure architecture, and senior-level managed services for organizations that need deep expertise without a full-time hire.",
    url: "https://rsystems.nyc/about/",
  },
  twitter: {
    title: "About RSystems NYC | Executive IT Leadership & Consulting",
    description:
      "RSystems is a New York City-based executive IT leadership and consulting firm — providing technology strategy, infrastructure architecture, and senior-level managed services for organizations that need deep expertise without a full-time hire.",
  },
};

const reasons = [
  {
    title: "Depth over breadth",
    description:
      "15+ years focused exclusively on infrastructure strategy and executive-level IT consulting. We don't spread across every technology trend — we go deep where it matters.",
  },
  {
    title: "Executive-level engagement",
    description:
      "Every engagement is led by a senior practitioner. You get direct access to the expertise you're paying for — not a project manager routing questions to someone else.",
  },
  {
    title: "Infrastructure as a strategic asset",
    description:
      "We think about your infrastructure the way your CFO thinks about capital — as something that should perform, scale, and support the business, not just function.",
  },
  {
    title: "Partnership, not replacement",
    description:
      "We work alongside your internal team or MSP, not around them. The goal is to make your existing organization more capable, not to create dependency on an outside firm.",
  },
];

export default function AboutPage() {
  return (
    <main className="flex-1">

      {/* Hero */}
      <section className="bg-[#0F1117] text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <p className="text-[11px] font-semibold uppercase tracking-widest text-[#FE6305] mb-5">
            RSystems &nbsp;·&nbsp; New York City &nbsp;·&nbsp; Est. 2025
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight max-w-3xl">
            Senior infrastructure expertise, without the overhead.
          </h1>
          <p className="mt-6 text-lg text-white/50 max-w-2xl leading-relaxed">
            RSystems is a specialized IT strategy firm that engages at the executive level —
            building the infrastructure strategies, architectures, and roadmaps that
            ambitious organizations need to compete.
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="bg-[#F4F2EF]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-3">
              <p className="text-[11px] font-semibold uppercase tracking-widest text-[#FE6305] pt-1">
                Who We Are
              </p>
            </div>
            <div className="lg:col-span-7 space-y-5">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A1A] tracking-tight leading-snug">
                A focused firm, not a generalist shop.
              </h2>
              <p className="text-base text-[#1A1A1A]/60 leading-relaxed">
                RSystems was founded in New York City with a clear focus: provide
                the kind of senior technical leadership that growing and established
                organizations need but rarely find.
              </p>
              <p className="text-base text-[#1A1A1A]/60 leading-relaxed">
                We engage at the C-suite level — working directly with CFOs, COOs, CTOs,
                and CIOs to define technology strategy, design infrastructure that performs
                under real operational demands, and build the roadmaps their teams can
                actually execute. In many engagements, RSystems serves as a fractional
                CTO or CISO: providing the senior technical leadership the organization
                needs without the overhead of a full-time hire.
              </p>
              <p className="text-base text-[#1A1A1A]/60 leading-relaxed">
                We also provide ongoing managed services for organizations that need
                senior-level platform administration and back-end infrastructure
                management on a retainer basis — identity platforms, cloud infrastructure,
                server and storage administration, and security tooling. And day-to-day
                end-user support — from routine help desk requests to the complex issues
                that warrant a senior practitioner — is handled through our Managed Support
                retainer, at the level each request calls for.
              </p>
              <p className="text-base text-[#1A1A1A]/60 leading-relaxed">
                We work best with organizations tackling high-impact infrastructure
                projects — the kind that deliver lasting value and require deep experience
                to execute well. For established organizations, we partner on strategic
                work alongside your existing IT team. For growing companies, we help build
                a solid foundation from day one.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-3">
              <p className="text-[11px] font-semibold uppercase tracking-widest text-[#FE6305] pt-1">
                Our Approach
              </p>
            </div>
            <div className="lg:col-span-7 space-y-5">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A1A] tracking-tight leading-snug">
                Strategic partnership — not a vendor relationship.
              </h2>
              <p className="text-base text-[#1A1A1A]/60 leading-relaxed">
                Every RSystems engagement starts at the strategy level. We take the time
                to understand your business — how it operates, where it&apos;s going, and what
                your infrastructure needs to support both. Technology decisions follow
                business decisions, not the other way around.
              </p>
              <p className="text-base text-[#1A1A1A]/60 leading-relaxed">
                We handle the work that requires senior technical expertise: architecture,
                design, and the infrastructure decisions that will define how your
                organization operates for years. We build the onboarding systems, security
                frameworks, and migration paths. Your internal team or MSP partner runs
                them day to day.
              </p>
              <p className="text-base text-[#1A1A1A]/60 leading-relaxed">
                That division of responsibility isn&apos;t a limitation — it&apos;s the model. We
                work alongside your existing team, not around them. The goal is to make
                your organization more capable, not to create a dependency on an outside
                firm for work that should stay in-house.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why RSystems */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
          <p className="text-[11px] font-semibold uppercase tracking-widest text-[#FE6305] mb-4">
            Why RSystems
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A1A] tracking-tight mb-12 max-w-xl">
            Why a focused specialist outperforms a large firm for strategy work.
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {reasons.map((reason, i) => (
              <div key={i} className="w-full sm:w-[calc(50%-0.5rem)] border border-[#1A1A1A]/[0.07] rounded-xl bg-white p-7 hover:bg-[#F4F2EF] transition-colors">
                <p className="text-[11px] font-semibold text-[#FE6305] mb-3 tabular-nums">
                  0{i + 1}
                </p>
                <h3 className="text-[15px] font-semibold text-[#1A1A1A] mb-2 leading-snug">
                  {reason.title}
                </h3>
                <p className="text-sm text-[#1A1A1A]/50 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}

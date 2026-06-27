import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import PageEndCTA from "@/app/components/PageEndCTA";

export const metadata: Metadata = {
  title: { absolute: "Managed Support — Hands-On Help for the Day-to-Day | RSystems" },
  description:
    "On-demand, hands-on IT support for the everyday — helpdesk requests, employee and device onboarding, and the unstructured work that keeps a team running. Day-to-day end-user support handled at the right level — from routine tickets to senior engineers.",
  alternates: { canonical: "https://rsystems.nyc/services/management/support/" },
  openGraph: {
    title: "Managed Support — Hands-On Help for the Day-to-Day | RSystems",
    description:
      "On-demand, hands-on IT support for the everyday — helpdesk requests, employee and device onboarding, and the unstructured work that keeps a team running. Day-to-day end-user support handled at the right level — from routine tickets to senior engineers.",
    url: "https://rsystems.nyc/services/management/support/",
  },
  twitter: {
    title: "Managed Support — Hands-On Help for the Day-to-Day | RSystems",
    description:
      "On-demand, hands-on IT support for the everyday — helpdesk requests, employee and device onboarding, and the unstructured work that keeps a team running. Day-to-day end-user support handled at the right level — from routine tickets to senior engineers.",
  },
};

const covered = [
  "Helpdesk requests and incident response — the break/fix work that gets people unblocked",
  "Employee onboarding and offboarding — accounts, access, and device provisioning",
  "Device setup, configuration, and everyday troubleshooting",
  "Password, login, and access assistance",
  "Onsite help when something can't be resolved remotely",
  "A dedicated portal to submit, track, and document requests",
  "Regular check-ins with a technical account manager",
];

const teamLevels = [
  { label: "Technicians", body: "handle the routine and the repetitive." },
  {
    label: "Systems engineers",
    body: "take on the trickier configurations and the work that needs real context about your environment.",
  },
  {
    label: "Senior practitioners",
    body: "the people who built those systems — step in when a problem reaches into architecture, security, or the parts of your infrastructure that don't fail gracefully.",
  },
];

export default function ManagedSupportPage() {
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
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-widest text-white/30 mb-10 flex-wrap">
            <Link href="/services" className="hover:text-white/60 transition-colors">Services</Link>
            <span>/</span>
            <Link href="/services/management" className="hover:text-white/60 transition-colors">Managed Services</Link>
            <span>/</span>
            <span className="text-white/50">Managed Support</span>
          </div>
          <p className="text-[11px] font-semibold uppercase tracking-widest text-[#FE6305] mb-5">
            Managed Services
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight max-w-3xl">
            Managed Support
          </h1>
          <p className="mt-6 text-lg text-white/50 max-w-2xl leading-relaxed">
            Hands-on help with the everyday — helpdesk requests, onboarding, device
            setup, and the unstructured work that keeps a team running. Every issue
            handled by the level of our team it actually calls for, from routine tickets
            to the genuinely hard problems.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="bg-[#F4F2EF]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-3">
              <p className="text-[11px] font-semibold uppercase tracking-widest text-[#FE6305] pt-1">
                Overview
              </p>
            </div>
            <div className="lg:col-span-7 space-y-5">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A1A] tracking-tight leading-snug">
                Day-to-day support, handled at the right level.
              </h2>
              <p className="text-base text-[#1A1A1A]/60 leading-relaxed">
                Every organization has a steady stream of smaller, unstructured requests —
                a new hire to set up, a laptop to configure, a login that stopped working,
                an application misbehaving. Managed Support covers that work on a predictable
                monthly retainer, and it pairs naturally with our managed services. For most
                clients, it&apos;s simply part of the relationship.
              </p>
              <p className="text-base text-[#1A1A1A]/60 leading-relaxed">
                What sets it apart is who picks up the request. Routine tickets go to the
                people best suited to them, so you&apos;re never paying senior rates to reset
                a password. And when something turns out to be hard, the senior engineers
                already on your account step in — the people who design infrastructure for a
                living, not a tier-1 queue.
              </p>
              <div className="border-l-2 border-[#FE6305] pl-6 py-1">
                <p className="text-base text-[#1A1A1A]/70 leading-relaxed">
                  For most clients, our team is exactly the way to cover this work, with
                  every level of our bench available on each request. If your routine volume
                  ever grows enough to justify a dedicated in-house hire, that can be the
                  better path for the simplest tickets, and we&apos;ll help you build toward
                  it. Either way, we&apos;ll tell you which fits.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Access to the Full Team */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-3">
              <p className="text-[11px] font-semibold uppercase tracking-widest text-[#FE6305] pt-1">
                The Full Team
              </p>
            </div>
            <div className="lg:col-span-7 space-y-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A1A] tracking-tight leading-snug">
                Access to the full team.
              </h2>
              <p className="text-base text-[#1A1A1A]/60 leading-relaxed">
                Managed Support connects your team to every level of ours.
              </p>
              <ul className="space-y-4">
                {teamLevels.map((t) => (
                  <li key={t.label} className="flex items-start gap-3">
                    <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-[#FE6305] flex-shrink-0" />
                    <p className="text-base text-[#1A1A1A]/60 leading-relaxed">
                      <span className="font-semibold text-[#1A1A1A]">{t.label}</span>
                      {" — "}
                      {t.body}
                    </p>
                  </li>
                ))}
              </ul>
              <p className="text-base text-[#1A1A1A]/60 leading-relaxed">
                Each issue reaches the person suited to it, which keeps everyday support
                efficient — and means nothing stalls for lack of expertise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What's Covered */}
      <section className="bg-[#F4F2EF]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-3">
              <p className="text-[11px] font-semibold uppercase tracking-widest text-[#FE6305] pt-1">
                What&apos;s Covered
              </p>
            </div>
            <div className="lg:col-span-7 space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-[#1A1A1A] tracking-tight mb-6">
                  What Managed Support handles.
                </h2>
                <ul className="space-y-3">
                  {covered.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-base text-[#1A1A1A]/70">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#FE6305] flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-3">
              <p className="text-[11px] font-semibold uppercase tracking-widest text-[#FE6305] pt-1">
                How It Works
              </p>
            </div>
            <div className="lg:col-span-7 space-y-5">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A1A] tracking-tight leading-snug">
                Predictable support, on a retainer.
              </h2>
              <p className="text-base text-[#1A1A1A]/60 leading-relaxed">
                Managed Support is billed as a consistent monthly retainer, reviewed with
                you each quarter so the budget stays matched to what you actually use — no
                surprises, no runaway invoices.
              </p>
              <p className="text-base text-[#1A1A1A]/60 leading-relaxed">
                It covers incidents and routine requests. Larger work — new systems,
                installations, and enhancements — is scoped and priced separately as a
                fixed-fee project, which keeps your support budget lean and the bigger
                initiatives properly planned. After-hours and emergency response are
                arranged separately as well.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="bg-[#F4F2EF]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-3">
              <p className="text-[11px] font-semibold uppercase tracking-widest text-[#FE6305] pt-1">
                What to Expect
              </p>
            </div>
            <div className="lg:col-span-7 space-y-8">
              <div>
                <h3 className="text-lg font-bold text-[#1A1A1A] mb-3">Getting Started</h3>
                <p className="text-base text-[#1A1A1A]/60 leading-relaxed">
                  Your request portal is configured, up to two portal administrators are
                  trained, and we document your environment — assets, accounts, and the
                  details we need to support your team quickly.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#1A1A1A] mb-3">Ongoing Support</h3>
                <p className="text-base text-[#1A1A1A]/60 leading-relaxed">
                  Day-to-day incident response and request handling, onboarding and
                  offboarding support, device troubleshooting, and regular account-manager
                  check-ins to review volume, spot patterns, and keep the engagement
                  right-sized.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
          <PageEndCTA pageKey="/services/management/support" precedingBg="bg-[#F4F2EF]" />
</main>
  );
}

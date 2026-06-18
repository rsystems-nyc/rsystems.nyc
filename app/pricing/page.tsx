import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Pricing & How We Work | RSystems NYC" },
  description:
    "How RSystems structures and prices engagements — fixed-fee projects, managed support retainers, and managed services subscriptions — with transparent per-unit pricing and a recommendation process built to keep your costs lean.",
  alternates: { canonical: "https://rsystems.nyc/pricing/" },
  openGraph: {
    title: "Pricing & How We Work | RSystems NYC",
    description:
      "How RSystems structures and prices engagements — fixed-fee projects, managed support retainers, and managed services subscriptions — with transparent per-unit pricing and a recommendation process built to keep your costs lean.",
    url: "https://rsystems.nyc/pricing/",
  },
  twitter: {
    title: "Pricing & How We Work | RSystems NYC",
    description:
      "How RSystems structures and prices engagements — fixed-fee projects, managed support retainers, and managed services subscriptions — with transparent per-unit pricing and a recommendation process built to keep your costs lean.",
  },
};

const engagementModels = [
  {
    heading: "Fixed-Fee Projects",
    body: "For discrete, definable work, we strongly prefer a fixed fee against a fixed scope. You know the cost before we begin, and we carry the risk of execution. Most of our project work is structured this way.",
  },
  {
    heading: "Managed Support (Retainer)",
    body: "For open-ended work that can't be neatly defined in advance, we use a monthly retainer. It's ideal for established relationships, where we understand your environment well enough to forecast and budget accurately.",
  },
  {
    heading: "Managed Services (Subscription)",
    body: "Our ongoing platform and infrastructure administration is billed as a flat monthly subscription, priced per unit — per identity, per endpoint, per site, and so on. Predictable, and scaled to what you actually run.",
  },
  {
    heading: "Hourly",
    body: "We generally don't structure engagements hourly — it misaligns our incentives with yours. But for certain situations, where neither a fixed scope nor a retainer is the right fit, we do work on an hourly basis.",
  },
];

const aLaCarteRows = [
  { service: "Identity Management",     price: "$30",  unit: "per identity" },
  { service: "Endpoint Management",  price: "$35",  unit: "per endpoint" },
  { service: "Network Management",      price: "$300", unit: "per site" },
  { service: "Security & Domain",       price: "$400", unit: "per domain" },
  { service: "Server Management",       price: "$350", unit: "per server" },
  { service: "Backup Management",       price: "$12",  unit: "per user" },
  { service: "Cybersecurity Awareness", price: "$5",   unit: "per identity" },
];

const setupRows = [
  { service: "Identity Management",    range: "~$2,500+" },
  { service: "Endpoint Management", range: "~$2,500+" },
  { service: "Network Management",     range: "~$2,000+" },
  { service: "Security & Domain",      range: "~$4,500+" },
  { service: "Server Management",      range: "~$2,000+" },
  { service: "Backup Management",      range: "~$500+" },
  { service: "Core Suite onboarding",  range: "~$15,000+" },
];

export default function PricingPage() {
  return (
    <main className="flex-1">

      {/* ── Section 1: Hero ─────────────────────────────────────────── */}
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
          <p className="text-[11px] font-semibold uppercase tracking-widest text-[#E8500A] mb-5">
            RSystems
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight max-w-3xl">
            Pricing built to keep your bills lean.
          </h1>
          <p className="mt-6 text-lg text-white/50 max-w-2xl leading-relaxed">
            We&apos;re transparent about how we price and how we work. Our goal isn&apos;t to
            maximize a monthly invoice — it&apos;s to give you sound infrastructure and
            honest advice, structured so you&apos;re never paying for more than you need.
          </p>
        </div>
      </section>

      {/* ── Section 2: Engagement models ────────────────────────────── */}
      <section className="bg-[#F4F2EF]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
          <p className="text-[11px] font-semibold uppercase tracking-widest text-[#E8500A] mb-3">
            How we work
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A1A] tracking-tight leading-snug max-w-xl mb-4">
            Four ways we structure an engagement.
          </h2>
          <p className="text-base text-[#1A1A1A]/60 leading-relaxed max-w-2xl mb-12">
            Most of our work falls into one of a few models. We choose the one that fits
            the work — and wherever possible, we steer toward the structure that keeps
            your costs predictable and contained.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#1A1A1A]/[0.07] border border-[#1A1A1A]/[0.07] rounded-xl overflow-hidden mb-8">
            {engagementModels.map((model) => (
              <div key={model.heading} className="bg-[#F4F2EF] p-7 hover:bg-white transition-colors">
                <h3 className="text-[15px] font-semibold text-[#1A1A1A] leading-snug mb-3">
                  {model.heading}
                </h3>
                <p className="text-sm text-[#1A1A1A]/50 leading-relaxed">
                  {model.body}
                </p>
              </div>
            ))}
          </div>

          {/* "Keep it lean" callout */}
          <div className="border border-[#E8500A]/25 rounded-xl p-7 bg-white">
            <p className="text-sm text-[#1A1A1A]/70 leading-relaxed">
              <span className="font-semibold text-[#1A1A1A]">Our guiding principle:</span>{" "}
              whenever a piece of work can be defined as a project, we pull it out and
              price it as a fixed-fee project — and we reserve the managed support
              retainer for the genuinely undefinable. We&apos;ve found clients are happiest
              when their bills are lowest, and that means actively keeping the retainer
              lean and turning to fixed-scope work wherever we can.
            </p>
          </div>
        </div>
      </section>

      {/* ── Section 3: Initial Assessment ───────────────────────────── */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-3">
              <p className="text-[11px] font-semibold uppercase tracking-widest text-[#E8500A] pt-1">
                Where we start
              </p>
            </div>
            <div className="lg:col-span-7 space-y-5">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A1A] tracking-tight leading-snug">
                Nearly every new relationship begins with an assessment.
              </h2>
              <p className="text-base text-[#1A1A1A]/60 leading-relaxed">
                Before we take on ongoing support or define specific projects, we start
                by getting to know your environment. An initial assessment is an audit
                of your current technology and a review of how your team actually works —
                enough for us to support your business well and make recommendations worth
                acting on.
              </p>
              <p className="text-base text-[#1A1A1A]/60 leading-relaxed">
                A typical assessment covers verifying or creating records of your key
                assets, confirming access and credentials, reviewing your on-premises and
                cloud services, network, security and backup posture, and identifying the
                pain points that matter most. We usually complete one within about four
                weeks, depending on the state of your documentation and the availability
                of your team.
              </p>
              {/* Pricing emphasis */}
              <div className="border-l-2 border-[#E8500A] pl-6 py-1">
                <p className="text-base text-[#1A1A1A]/70 leading-relaxed">
                  An assessment runs between{" "}
                  <span className="font-semibold text-[#1A1A1A]">$3,000 and $5,000</span>{" "}
                  — and candidly, we usually lose money on it. That&apos;s deliberate. We
                  treat the assessment as an investment in the relationship: if we take the
                  time to truly understand your environment and your company up front, we
                  can give you great advice and build a productive relationship for years
                  to come.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 4: Recommendation examples ──────────────────────── */}
      <section className="bg-[#F4F2EF]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 mb-14">
            <div className="lg:col-span-3">
              <p className="text-[11px] font-semibold uppercase tracking-widest text-[#E8500A] pt-1">
                How we propose work
              </p>
            </div>
            <div className="lg:col-span-7 space-y-5">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A1A] tracking-tight leading-snug">
                Every project starts with a Recommendation.
              </h2>
              <p className="text-base text-[#1A1A1A]/60 leading-relaxed">
                When we propose a piece of work, we don&apos;t send a one-line quote. We
                send a Recommendation — a fully considered scope that reflects real
                research into your context, goals, and constraints. Each one lays out what
                we propose to do, why, and how we&apos;ll implement it; what it will cost in
                equipment, labor, and licenses; how long we expect it to take; and anything
                we&apos;ll need from you to succeed.
              </p>
              <p className="text-base text-[#1A1A1A]/60 leading-relaxed">
                The result is a proposal you can evaluate and approve with confidence —
                no surprises, no hidden assumptions. Here are three representative
                examples, lightly anonymized.
              </p>
            </div>
          </div>

          {/* Document cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

            {/* Example 1 */}
            <div className="bg-white border border-[#1A1A1A]/10 rounded-xl p-7 flex flex-col gap-5">
              <h3 className="text-[13px] font-semibold text-[#E8500A] uppercase tracking-widest">
                Example: Firewall Replacement
              </h3>
              <p className="text-sm text-[#1A1A1A]/60 leading-relaxed">
                To address the client&apos;s need to replace aging firewalls, RSystems
                recommends the following solution.
              </p>
              <hr className="border-[#1A1A1A]/10" />
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-widest text-[#1A1A1A]/40 mb-3">Scope</p>
                <ul className="space-y-1.5">
                  {[
                    "Purchase and configure a new high-availability firewall pair",
                    "Migrate existing rules, routing, and VPN configuration",
                    "Cut over with minimal downtime and verify failover",
                    "Decommission and dispose of the old equipment",
                  ].map((item) => (
                    <li key={item} className="flex gap-2 text-sm text-[#1A1A1A]/60 leading-relaxed">
                      <span className="mt-[7px] h-1 w-1 rounded-full bg-[#1A1A1A]/30 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <hr className="border-[#1A1A1A]/10" />
              <div className="space-y-2 font-mono text-sm">
                <div className="flex justify-between text-[#1A1A1A]/60">
                  <span>Expenses</span><span>$4,200</span>
                </div>
                <p className="text-xs text-[#1A1A1A]/40 -mt-1">Firewall pair, licensing, and security subscriptions</p>
                <div className="flex justify-between text-[#1A1A1A]/60 pt-1">
                  <span>Flat Fee</span><span>$3,500</span>
                </div>
                <p className="text-xs text-[#1A1A1A]/40 -mt-1">Configuration, migration, cutover, and project management</p>
                <hr className="border-[#1A1A1A]/10 my-2" />
                <div className="flex justify-between text-[#1A1A1A]/60">
                  <span>Subtotal</span><span>$7,700</span>
                </div>
                <div className="flex justify-between text-[#1A1A1A]/40">
                  <span>Sales tax</span><span>$0</span>
                </div>
                <div className="flex justify-between font-semibold text-[#1A1A1A] pt-1">
                  <span>Total</span><span>$7,700</span>
                </div>
              </div>
              <hr className="border-[#1A1A1A]/10" />
              <p className="text-xs text-[#1A1A1A]/40 leading-relaxed">
                Expected completion within 4 weeks of approval, provided all
                requirements are met.
              </p>
            </div>

            {/* Example 2 */}
            <div className="bg-white border border-[#1A1A1A]/10 rounded-xl p-7 flex flex-col gap-5">
              <h3 className="text-[13px] font-semibold text-[#E8500A] uppercase tracking-widest">
                Example: Office Wireless Upgrade
              </h3>
              <p className="text-sm text-[#1A1A1A]/60 leading-relaxed">
                To address the client&apos;s need to improve wireless coverage across the
                office, RSystems recommends the following solution.
              </p>
              <hr className="border-[#1A1A1A]/10" />
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-widest text-[#1A1A1A]/40 mb-3">Scope</p>
                <ul className="space-y-1.5">
                  {[
                    "Conduct a wireless site survey to determine access point placement and count",
                    "Purchase access points, mounts, and PoE switching",
                    "Install, configure, and tune coverage to the survey",
                    "Validate performance across the full space",
                  ].map((item) => (
                    <li key={item} className="flex gap-2 text-sm text-[#1A1A1A]/60 leading-relaxed">
                      <span className="mt-[7px] h-1 w-1 rounded-full bg-[#1A1A1A]/30 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <hr className="border-[#1A1A1A]/10" />
              <div className="space-y-2 font-mono text-sm">
                <div className="flex justify-between text-[#1A1A1A]/60">
                  <span>Expenses</span><span>$3,600</span>
                </div>
                <p className="text-xs text-[#1A1A1A]/40 -mt-1">Access points, mounts, and switching hardware</p>
                <div className="flex justify-between text-[#1A1A1A]/60 pt-1">
                  <span>Flat Fee</span><span>$4,000</span>
                </div>
                <p className="text-xs text-[#1A1A1A]/40 -mt-1">Site survey, installation, configuration, and tuning</p>
                <hr className="border-[#1A1A1A]/10 my-2" />
                <div className="flex justify-between text-[#1A1A1A]/60">
                  <span>Subtotal</span><span>$7,600</span>
                </div>
                <div className="flex justify-between text-[#1A1A1A]/40">
                  <span>Sales tax</span><span>$0</span>
                </div>
                <div className="flex justify-between font-semibold text-[#1A1A1A] pt-1">
                  <span>Total</span><span>$7,600</span>
                </div>
              </div>
              <hr className="border-[#1A1A1A]/10" />
              <p className="text-xs text-[#1A1A1A]/40 leading-relaxed">
                Expected completion within 4 weeks of approval, provided all
                requirements are met.
              </p>
            </div>

            {/* Example 3 */}
            <div className="bg-white border border-[#1A1A1A]/10 rounded-xl p-7 flex flex-col gap-5">
              <h3 className="text-[13px] font-semibold text-[#E8500A] uppercase tracking-widest">
                Example: Initial Assessment
              </h3>
              <p className="text-sm text-[#1A1A1A]/60 leading-relaxed">
                Before taking on ongoing support and defining specific projects, RSystems
                starts with an audit of your current technology and a review of your
                workflow, so we have what we need to support your business and make
                appropriate recommendations.
              </p>
              <hr className="border-[#1A1A1A]/10" />
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-widest text-[#1A1A1A]/40 mb-3">Scope</p>
                <ul className="space-y-1.5">
                  {[
                    "Verify or create records of key assets (hardware, software, personnel)",
                    "Verify credentials and administrative access",
                    "Review on-premises and cloud services",
                    "Review network topology, security, and backup posture",
                    "Review the current IT budget",
                    "Identify and prioritize pain points and ongoing needs",
                    "Produce initial recommendations",
                  ].map((item) => (
                    <li key={item} className="flex gap-2 text-sm text-[#1A1A1A]/60 leading-relaxed">
                      <span className="mt-[7px] h-1 w-1 rounded-full bg-[#1A1A1A]/30 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <hr className="border-[#1A1A1A]/10" />
              <div className="space-y-2 font-mono text-sm">
                <div className="flex justify-between text-[#1A1A1A]/60">
                  <span>Startup Fee</span><span>$3,000</span>
                </div>
                <div className="flex justify-between text-[#1A1A1A]/40">
                  <span>Sales tax</span><span>$0</span>
                </div>
                <hr className="border-[#1A1A1A]/10 my-2" />
                <div className="flex justify-between font-semibold text-[#1A1A1A]">
                  <span>Total</span><span>$3,000</span>
                </div>
              </div>
              <hr className="border-[#1A1A1A]/10" />
              <p className="text-xs text-[#1A1A1A]/40 leading-relaxed">
                Typically completed within 4 weeks. We ask for the availability of key
                staff for a few meetings and an on-site visit, and timely access to asset
                lists and credentials.
              </p>
            </div>

          </div>

          <p className="mt-6 text-xs text-[#1A1A1A]/40 italic">
            Figures shown are illustrative and rounded. Every recommendation is priced
            to the specifics of your environment.
          </p>
        </div>
      </section>

      {/* ── Section 5: Managed services pricing ─────────────────────── */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
          <p className="text-[11px] font-semibold uppercase tracking-widest text-[#E8500A] mb-3">
            Managed services
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A1A] tracking-tight leading-snug max-w-xl mb-4">
            Transparent, per-unit pricing.
          </h2>
          <p className="text-base text-[#1A1A1A]/60 leading-relaxed max-w-2xl mb-12">
            Our managed services are billed monthly, priced per unit so you only pay for
            what you run. Services can be taken à la carte, but most clients are best
            served by one of our two packages.
          </p>

          {/* À la carte table */}
          <div className="overflow-x-auto rounded-xl border border-[#1A1A1A]/[0.07] mb-3">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#F4F2EF] border-b border-[#1A1A1A]/[0.07]">
                  <th className="text-left px-6 py-3 text-[11px] font-semibold uppercase tracking-widest text-[#1A1A1A]/40">
                    Service
                  </th>
                  <th className="text-right px-6 py-3 text-[11px] font-semibold uppercase tracking-widest text-[#1A1A1A]/40">
                    Monthly Price
                  </th>
                  <th className="text-left px-6 py-3 text-[11px] font-semibold uppercase tracking-widest text-[#1A1A1A]/40">
                    Unit
                  </th>
                </tr>
              </thead>
              <tbody>
                {aLaCarteRows.map((row, i) => (
                  <tr
                    key={row.service}
                    className={`border-b border-[#1A1A1A]/[0.05] ${i % 2 === 0 ? "bg-white" : "bg-[#F4F2EF]/40"}`}
                  >
                    <td className="px-6 py-4 font-medium text-[#1A1A1A]">{row.service}</td>
                    <td className="px-6 py-4 text-right font-mono font-semibold text-[#1A1A1A]">{row.price}</td>
                    <td className="px-6 py-4 text-[#1A1A1A]/50">{row.unit}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-[#1A1A1A]/40 italic mb-14">
            Minimums apply to some services. Server pricing shown is for standard
            (Synology) instances; Windows and specialized servers are priced individually.
          </p>

          {/* Package cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Essentials */}
            <div className="border border-[#1A1A1A]/10 rounded-xl p-8 bg-[#F4F2EF] flex flex-col gap-4">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-widest text-[#1A1A1A]/40 mb-1">
                  Package
                </p>
                <h3 className="text-xl font-bold text-[#1A1A1A]">Essentials</h3>
                <p className="text-sm text-[#1A1A1A]/50 mt-1">
                  The minimum entry point for managed services.
                </p>
              </div>
              <div>
                <p className="text-2xl font-bold text-[#1A1A1A] tracking-tight">
                  $50<span className="font-normal text-[#1A1A1A]/50"> / identity / month</span>
                </p>
                <p className="text-xs text-[#1A1A1A]/40 mt-1">
                  Minimum 5 identities.
                </p>
              </div>
              <p className="text-sm text-[#1A1A1A]/60 leading-relaxed">
                A streamlined bundle covering the essentials of managed infrastructure.
                The right starting point for smaller teams, and very often paired with a
                Managed Support retainer.
              </p>
            </div>

            {/* Core Suite — recommended */}
            <div className="border-2 border-[#E8500A] rounded-xl p-8 bg-white flex flex-col gap-4 relative">
              <div className="absolute -top-3 left-6">
                <span className="bg-[#E8500A] text-white text-[10px] font-semibold uppercase tracking-widest px-3 py-1 rounded-full">
                  Most common
                </span>
              </div>
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-widest text-[#1A1A1A]/40 mb-1">
                  Package
                </p>
                <h3 className="text-xl font-bold text-[#1A1A1A]">Core Suite</h3>
                <p className="text-sm text-[#1A1A1A]/50 mt-1">
                  The right fit for most organizations.
                </p>
              </div>
              <div>
                <p className="text-2xl font-bold text-[#1A1A1A] tracking-tight">
                  $500<span className="font-normal text-[#1A1A1A]/50"> base</span>
                  <span className="font-normal text-[#1A1A1A]/50"> + </span>$75<span className="font-normal text-[#1A1A1A]/50"> / identity / month</span>
                </p>
                <p className="text-xs text-[#1A1A1A]/40 mt-1">
                  Minimum 10 identities.
                </p>
              </div>
              <p className="text-sm text-[#1A1A1A]/60 leading-relaxed">
                Our most complete package — domain and network management plus per-identity
                identity, endpoint, and backup management, bundled at a lower rate than
                à la carte. For most clients, Core Suite paired with Managed Support is
                exactly the right fit.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ── Section 6: Managed Support retainer explainer ───────────── */}
      <section className="bg-[#F4F2EF]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-3">
              <p className="text-[11px] font-semibold uppercase tracking-widest text-[#E8500A] pt-1">
                Managed support
              </p>
            </div>
            <div className="lg:col-span-7 space-y-5">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A1A] tracking-tight leading-snug">
                How retainers work.
              </h2>
              <p className="text-base text-[#1A1A1A]/60 leading-relaxed">
                Managed Support is a monthly retainer for the open-ended work that
                doesn&apos;t fit neatly into a defined project — the questions, changes, and
                judgment calls that come up in the course of running an organization&apos;s
                technology.
              </p>
              <p className="text-base text-[#1A1A1A]/60 leading-relaxed">
                Retainers work best in established relationships. Once we&apos;ve worked
                together for six months to a year or more, we understand your average burn
                rate well enough to forecast annual usage and amortize it evenly across
                the year. Some months run high and others run low, but you&apos;re always
                working from a known, defined budget.
              </p>
              <p className="text-base text-[#1A1A1A]/60 leading-relaxed">
                For brand-new clients, we use our experience to make an educated starting
                estimate. We then track utilization closely with you over the first few
                months and adjust quarterly, so your budget stays commensurate with your
                actual usage — never drifting away from what you need.
              </p>
              <p className="text-base text-[#1A1A1A]/60 leading-relaxed">
                And because we actively pull defined work out into fixed-fee projects, we
                keep the retainer itself as lean as possible. The retainer covers the
                genuinely undefinable; everything else gets scoped and priced on its own.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 7: Setup costs & what affects pricing ───────────── */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
          <p className="text-[11px] font-semibold uppercase tracking-widest text-[#E8500A] mb-3">
            Getting started
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A1A] tracking-tight leading-snug max-w-xl mb-4">
            Setup costs and the things that move them.
          </h2>
          <p className="text-base text-[#1A1A1A]/60 leading-relaxed max-w-2xl mb-12">
            Onboarding a new environment involves up-front setup work that varies from
            client to client. The figures below are ballpark ranges to help you plan —
            not rigid quotes. Every environment is a little different, and your actual
            recommendation will reflect yours.
          </p>

          {/* Setup costs table */}
          <div className="overflow-x-auto rounded-xl border border-[#1A1A1A]/[0.07] mb-3">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#F4F2EF] border-b border-[#1A1A1A]/[0.07]">
                  <th className="text-left px-6 py-3 text-[11px] font-semibold uppercase tracking-widest text-[#1A1A1A]/40">
                    Service
                  </th>
                  <th className="text-right px-6 py-3 text-[11px] font-semibold uppercase tracking-widest text-[#1A1A1A]/40">
                    Typical Setup
                  </th>
                </tr>
              </thead>
              <tbody>
                {setupRows.map((row, i) => (
                  <tr
                    key={row.service}
                    className={`border-b border-[#1A1A1A]/[0.05] ${i % 2 === 0 ? "bg-white" : "bg-[#F4F2EF]/40"}`}
                  >
                    <td className="px-6 py-4 font-medium text-[#1A1A1A]">{row.service}</td>
                    <td className="px-6 py-4 text-right font-mono text-[#1A1A1A]/70">{row.range}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-[#1A1A1A]/40 italic mb-14">
            Setup costs scale with the size and complexity of your environment and are
            confirmed in your recommendation.
          </p>

          {/* What can lower pricing */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#1A1A1A]/[0.07] border border-[#1A1A1A]/[0.07] rounded-xl overflow-hidden">
            <div className="bg-white p-7">
              <h3 className="text-[15px] font-semibold text-[#1A1A1A] mb-3">Larger environments</h3>
              <p className="text-sm text-[#1A1A1A]/50 leading-relaxed">
                Organizations of 100+ employees often benefit from economies of scale,
                which can bring per-unit pricing down.
              </p>
            </div>
            <div className="bg-white p-7">
              <h3 className="text-[15px] font-semibold text-[#1A1A1A] mb-3">Co-managed environments</h3>
              <p className="text-sm text-[#1A1A1A]/50 leading-relaxed">
                When we work alongside your internal IT team and share responsibilities,
                our scope is smaller — and there&apos;s often room for reduced pricing to match.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 8: CTA ───────────────────────────────────────────── */}
      <section className="bg-[#0F1117] text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
          <div className="max-w-2xl">
            <h2 className="text-2xl sm:text-3xl font-bold leading-snug tracking-tight mb-4">
              Let&apos;s find the right fit.
            </h2>
            <p className="text-base text-white/50 leading-relaxed mb-8">
              Tell us about your environment and what you&apos;re trying to accomplish. We&apos;ll
              start with an honest conversation about how to structure the work — and what
              it should cost.
            </p>
            <Link
              href="/contact"
              className="inline-block text-sm font-medium bg-[#E8500A] text-white px-6 py-3 rounded hover:bg-[#E8500A]/85 transition-colors"
            >
              Start a Conversation
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}

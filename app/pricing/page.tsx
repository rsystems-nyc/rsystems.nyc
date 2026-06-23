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
    href: "#recommendations",
    linkLabel: "See how we propose work",
  },
  {
    heading: "Managed Services (Subscription)",
    body: "Our ongoing platform and infrastructure administration is billed as a flat monthly subscription, priced per unit — per identity, per endpoint, per site, and so on. Predictable, and scaled to what you actually run.",
    href: "#managed-services",
    linkLabel: "See per-unit pricing",
  },
  {
    heading: "Managed Support (Retainer)",
    body: "For open-ended work that can't be neatly defined in advance, we use a monthly retainer. It's ideal for established relationships, where we understand your environment well enough to forecast and budget accurately.",
    href: "#managed-support",
    linkLabel: "How retainers work",
  },
  {
    heading: "Hourly",
    body: "We generally don't structure engagements hourly — it misaligns our incentives with yours. But for the occasional piece of work that fits neither a fixed scope nor a retainer, we do work on an hourly basis.",
    href: "#hourly",
    linkLabel: "When hourly fits",
  },
];

const aLaCarteRows = [
  { service: "Identity Management",     price: "$30",  unit: "per identity", href: "/services/management/identity" },
  { service: "Endpoint Management",  price: "$35",  unit: "per endpoint", href: "/services/management/endpoint-management" },
  { service: "Network Management",      price: "$300", unit: "per site", href: "/services/management/network" },
  { service: "Security & Domain",       price: "$400", unit: "per domain", href: "/services/management/domain" },
  { service: "Server Management",       price: "$350", unit: "per server", href: "/services/management/server" },
  { service: "Backup Management",       price: "$12",  unit: "per user", href: "/services/management/backup" },
  { service: "Cybersecurity Awareness", price: "$5",   unit: "per identity", href: "/services/management/awareness" },
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

const recExamples = [
  {
    title: "Example: Initial Assessment",
    summary: "$3,266.25 · ~4 weeks",
    intro:
      "Before taking on ongoing support or defining specific projects, RSystems begins with an assessment — an audit of your current technology and a review of how your team works.",
    background:
      "Nearly every new relationship starts here. We need enough understanding of your environment and your workflow to support the business well and make recommendations worth acting on.",
    approach:
      "A structured review across your assets, access, services, network, security, and backup posture — conducted through a few working sessions and an on-site visit — culminating in a prioritized set of initial recommendations.",
    assumptions: [
      "Roughly one primary office with a typical small-business environment.",
      "Existing documentation and credentials can be made available during the engagement.",
      "No emergency remediation is required mid-assessment; urgent issues, if found, may extend the timeline.",
    ],
    scope: [
      "Verify or create records of key assets (hardware, software, personnel)",
      "Verify credentials and administrative access (domain, services, workstations, servers)",
      "Review on-premises and cloud services (file sharing, database, directory, communications)",
      "Review network topology, security policies, and backup policies",
      "Review the current IT budget",
      "Identify and prioritize pain points and ongoing needs",
      "Produce initial recommendations",
    ],
    requirements: [
      "Availability of key staff for 2–3 meetings and an on-site visit",
      "Timely production of asset lists and credentials",
    ],
    expenses: null,
    expensesNote: "An assessment is labor only — there is no equipment.",
    laborFee: "$3,000",
    expensesTotal: null,
    subtotal: "$3,000",
    tax: "$266.25",
    total: "$3,266.25",
    timeline:
      "Typically completed within ~4 weeks, depending on the state of your documentation and the availability of your team.",
  },
  {
    title: "Example: Firewall Replacement (High Availability)",
    summary: "$29,396.25 · ~4 weeks",
    intro:
      "To address a client's aging, end-of-life firewalls, RSystems recommends replacing them with a high-availability pair of current-generation SonicWall NSa-series firewalls.",
    background:
      "The existing firewalls are reaching end of life and will no longer be supported by the manufacturer. Because no major network changes are expected over the life of the new hardware, we recommend the longest available (5-year) license to lower total cost of ownership.",
    approach:
      "Deploy a SonicWall NSa-series firewall in a high-availability pair, integrate it with the existing Cisco switching, migrate the configuration, and cut over during a maintenance window — with failover verified before completion.",
    assumptions: [
      "The existing network architecture and Cisco switching remain in place.",
      "A single internet circuit; no ISP changes are in scope.",
      "A maintenance window is available for cutover, during which the network will be briefly down.",
    ],
    scope: [
      "Coordinate purchase and delivery of new firewalls and licenses",
      "Configure the SonicWall HA pair and integrate with the Cisco switches",
      "Migrate rules, routing, and VPN configuration",
      "Manage cutover from old to new firewalls and verify failover",
      "Dispose of old equipment",
    ],
    requirements: [
      "Availability of key staff and timely access to the space",
      "Prompt delivery of credentials and authorizations",
      "A 4-hour maintenance window (network down during cutover)",
    ],
    expenses: [
      { label: "SonicWall NSa-series firewall (primary)", amount: "$4,700" },
      { label: "SonicWall NSa-series firewall (HA unit)", amount: "$3,500" },
      { label: "5-year 24×7 support & security subscription", amount: "$5,600" },
      { label: "SSL-VPN license pack", amount: "$600" },
      { label: "E-waste disposal & transportation", amount: "$100" },
    ],
    expensesNote: null,
    laborFee: "$12,500",
    expensesTotal: "$14,500",
    subtotal: "$27,000",
    tax: "$2,396.25",
    total: "$29,396.25",
    timeline:
      "Expected completion within ~4 weeks of approval, provided all requirements are met. Practical firewall lifetime is ~5–7 years; pricing includes 5 years of licensing.",
  },
  {
    title: "Example: New Office Network Buildout",
    summary: "$91,563.88 · ~12 weeks",
    intro:
      "To address a growing ~60-person company's need for a complete network in a new office, RSystems recommends a high-performance, scalable infrastructure built around SonicWall, Cisco, and Juniper Mist.",
    background:
      "The company is relocating and needs a full network built around its 5 Gbps internet connection — supporting heavy video conferencing, large file transfers, and reliable Wi-Fi across the entire floor.",
    approach:
      "A scalable design built on a SonicWall NSa-series high-availability firewall, Cisco Catalyst switching, and Juniper Mist Wi-Fi 7 access points — designed and pre-configured in the RSystems office, then installed and validated on site with a post-installation wireless survey.",
    assumptions: [
      "Base building provides the 5 Gbps circuit and demarcation; structured cabling is in place or scoped separately.",
      "Approximately 60 users on a single floor.",
      "Standard office power and a suitable IDF / rack location are available.",
    ],
    scope: [
      "Design the network solution",
      "Procure all equipment",
      "Pre-configure the network in the RSystems office",
      "Install equipment and access points on site",
      "Test Wi-Fi and network connectivity",
      "Perform a post-installation wireless survey",
    ],
    requirements: [
      "Availability of key staff and timely access to the space",
    ],
    expenses: [
      { label: "SonicWall NSa-series firewall + HA unit", amount: "$8,200" },
      { label: "5-year 24×7 support & security subscription", amount: "$5,600" },
      { label: "Cisco 10G DMZ switch", amount: "$700" },
      { label: "Cisco Catalyst access switches (×2)", amount: "$14,000" },
      { label: "Juniper Mist Wi-Fi 7 access points (×6, 5-yr licensing)", amount: "$15,600" },
    ],
    expensesNote: null,
    laborFee: "$40,000",
    expensesTotal: "$44,100",
    subtotal: "$84,100",
    tax: "$7,463.88",
    total: "$91,563.88",
    timeline:
      "Expected completion within ~12 weeks of approval, provided all requirements are met.",
  },
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

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {engagementModels.map((model) => (
              <a
                key={model.heading}
                href={model.href}
                className="w-full md:w-[calc(50%-0.5rem)] border border-[#1A1A1A]/[0.07] rounded-xl group bg-[#F4F2EF] p-7 hover:bg-white transition-colors block"
              >
                <h3 className="text-[15px] font-semibold text-[#1A1A1A] leading-snug mb-3">
                  {model.heading}
                </h3>
                <p className="text-sm text-[#1A1A1A]/50 leading-relaxed">
                  {model.body}
                </p>
                <p className="mt-4 text-[13px] font-semibold text-[#1A1A1A] group-hover:text-[#E8500A] transition-colors inline-flex items-center gap-1.5">
                  {model.linkLabel}
                  <span aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">→</span>
                </p>
              </a>
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
      <section id="recommendations" className="scroll-mt-24 sm:scroll-mt-32 bg-[#F4F2EF]">
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
                examples, lightly anonymized — from a first-step assessment to a full
                office buildout.
              </p>
            </div>
          </div>

          {/* Document cards — full-width, stacked */}
          <div className="max-w-4xl mx-auto space-y-8">
            {recExamples.map((ex, i) => (
              <details
                key={ex.title}
                open={i === 0}
                className="group bg-white border border-[#1A1A1A]/10 rounded-xl open:shadow-sm"
              >
                {/* Header — always visible; click to expand the full document */}
                <summary className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 cursor-pointer list-none [&::-webkit-details-marker]:hidden p-8 sm:p-10">
                  <h3 className="text-[13px] font-semibold text-[#E8500A] uppercase tracking-widest">
                    {ex.title}
                  </h3>
                  <span className="flex items-center gap-3 font-mono text-xs text-[#1A1A1A]/40">
                    <span className="font-sans text-[11px] uppercase tracking-wider text-[#1A1A1A]/40 opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-open:hidden">
                      Click to expand
                    </span>
                    {ex.summary}
                    <svg
                      className="h-3.5 w-3.5 text-[#1A1A1A]/30 transition group-hover:text-[#E8500A] group-open:rotate-180"
                      viewBox="0 0 20 20"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      aria-hidden="true"
                    >
                      <path d="M5 7.5 10 12.5 15 7.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </summary>

                <div className="px-8 sm:px-10 pb-8 sm:pb-10 flex flex-col gap-6">
                  <p className="text-sm text-[#1A1A1A]/70 leading-relaxed">{ex.intro}</p>

                  {/* Background */}
                  <div className="space-y-1.5">
                    <p className="text-[11px] font-semibold uppercase tracking-widest text-[#1A1A1A]/40">Background</p>
                    <p className="text-sm text-[#1A1A1A]/60 leading-relaxed">{ex.background}</p>
                  </div>

                  {/* Approach */}
                  <div className="space-y-1.5">
                    <p className="text-[11px] font-semibold uppercase tracking-widest text-[#1A1A1A]/40">Approach</p>
                    <p className="text-sm text-[#1A1A1A]/60 leading-relaxed">{ex.approach}</p>
                  </div>

                  <hr className="border-[#1A1A1A]/10" />

                  {/* Assumptions / Scope / Requirements */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    {[
                      { label: "Assumptions", items: ex.assumptions },
                      { label: "Scope", items: ex.scope },
                      { label: "Requirements", items: ex.requirements },
                    ].map((col) => (
                      <div key={col.label}>
                        <p className="text-[11px] font-semibold uppercase tracking-widest text-[#1A1A1A]/40 mb-3">{col.label}</p>
                        <ul className="space-y-1.5">
                          {col.items.map((item) => (
                            <li key={item} className="flex gap-2 text-sm text-[#1A1A1A]/60 leading-relaxed">
                              <span className="mt-[7px] h-1 w-1 rounded-full bg-[#1A1A1A]/30 flex-shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>

                  <hr className="border-[#1A1A1A]/10" />

                  {/* Cost panel: Expenses | Labor */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {/* Expenses */}
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-widest text-[#1A1A1A]/40 mb-3">Expenses</p>
                      {ex.expenses ? (
                        <div className="space-y-1.5 font-mono text-sm">
                          {ex.expenses.map((e) => (
                            <div key={e.label} className="flex justify-between gap-3 text-[#1A1A1A]/60">
                              <span className="font-sans">{e.label}</span>
                              <span className="flex-shrink-0">{e.amount}</span>
                            </div>
                          ))}
                          {ex.expensesTotal && (
                            <>
                              <hr className="border-[#1A1A1A]/10 my-2" />
                              <div className="flex justify-between text-[#1A1A1A]/60">
                                <span className="font-sans">Equipment subtotal</span>
                                <span>{ex.expensesTotal}</span>
                              </div>
                            </>
                          )}
                        </div>
                      ) : (
                        <p className="text-sm text-[#1A1A1A]/50 leading-relaxed italic">{ex.expensesNote}</p>
                      )}
                    </div>

                    {/* Labor */}
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-widest text-[#1A1A1A]/40 mb-3">Labor</p>
                      <div className="flex justify-between gap-3 font-mono text-sm text-[#1A1A1A]/60">
                        <span className="font-sans">Flat fee — design, configuration, installation &amp; project management</span>
                        <span className="flex-shrink-0">{ex.laborFee}</span>
                      </div>
                    </div>
                  </div>

                  {/* Totals */}
                  <div className="font-mono text-sm space-y-2 w-full sm:max-w-xs sm:ml-auto">
                    <div className="flex justify-between text-[#1A1A1A]/60">
                      <span>Subtotal</span><span>{ex.subtotal}</span>
                    </div>
                    <div className="flex justify-between text-[#1A1A1A]/40">
                      <span>Sales tax</span><span>{ex.tax}</span>
                    </div>
                    <hr className="border-[#1A1A1A]/10 my-1" />
                    <div className="flex justify-between font-semibold text-[#1A1A1A]">
                      <span>Total</span><span>{ex.total}</span>
                    </div>
                  </div>

                  <hr className="border-[#1A1A1A]/10" />

                  <p className="text-xs text-[#1A1A1A]/40 leading-relaxed">{ex.timeline}</p>
                </div>
              </details>
            ))}
          </div>

          <p className="mt-8 max-w-4xl mx-auto text-xs text-[#1A1A1A]/40 italic">
            Figures shown are illustrative and rounded. Every recommendation is priced
            to the specifics of your environment.
          </p>
        </div>
      </section>

      {/* ── Section 5: Managed services pricing ─────────────────────── */}
      <section id="managed-services" className="scroll-mt-24 sm:scroll-mt-32 bg-white">
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
                    className={`group border-b border-[#1A1A1A]/[0.05] transition-colors hover:bg-[#E8500A]/[0.05] ${i % 2 === 0 ? "bg-white" : "bg-[#F4F2EF]/40"}`}
                  >
                    <td className="px-6 py-4 font-medium">
                      <Link
                        href={row.href}
                        className="inline-flex items-center gap-1.5 text-[#1A1A1A] hover:text-[#E8500A] transition-colors"
                      >
                        {row.service}
                        <span aria-hidden="true" className="text-[#E8500A] opacity-0 -translate-x-1 transition-all group-hover:opacity-100 group-hover:translate-x-0">→</span>
                      </Link>
                    </td>
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
            <Link
              href="/services/management/essentials"
              className="group border border-[#1A1A1A]/10 rounded-xl p-8 bg-[#F4F2EF] flex flex-col gap-4 transition-all duration-200 hover:-translate-y-1 hover:border-[#E8500A]/40 hover:bg-white hover:shadow-lg"
            >
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
              <p className="mt-auto text-[13px] font-semibold text-[#E8500A] inline-flex items-center gap-1.5">
                Explore Essentials
                <span aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">→</span>
              </p>
            </Link>

            {/* Core Suite — recommended */}
            <Link
              href="/services/management/core-suite"
              className="group border-2 border-[#E8500A] rounded-xl p-8 bg-white flex flex-col gap-4 relative transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_18px_40px_-10px_rgba(232,80,10,0.45)]"
            >
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
              <p className="mt-auto text-[13px] font-semibold text-[#E8500A] inline-flex items-center gap-1.5">
                Explore Core Suite
                <span aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">→</span>
              </p>
            </Link>

          </div>
        </div>
      </section>

      {/* ── Section 6: Managed Support retainer explainer ───────────── */}
      <section id="managed-support" className="scroll-mt-24 sm:scroll-mt-32 bg-[#F4F2EF]">
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
              <p className="pt-1">
                <Link
                  href="/services/management/support"
                  className="group text-[13px] font-semibold text-[#E8500A] inline-flex items-center gap-1.5"
                >
                  Learn about Managed Support
                  <span aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">→</span>
                </Link>
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
          <div className="flex flex-wrap justify-center gap-4">
            <div className="w-full md:w-[calc(50%-0.5rem)] border border-[#1A1A1A]/[0.07] rounded-xl bg-white p-7">
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

      {/* ── Section 7b: Hourly ──────────────────────────────────────── */}
      <section id="hourly" className="scroll-mt-24 sm:scroll-mt-32 bg-[#F4F2EF]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-3">
              <p className="text-[11px] font-semibold uppercase tracking-widest text-[#E8500A] pt-1">
                Hourly
              </p>
            </div>
            <div className="lg:col-span-7 space-y-5">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A1A] tracking-tight leading-snug">
                When hourly is the right fit.
              </h2>
              <p className="text-base text-[#1A1A1A]/60 leading-relaxed">
                We generally don&apos;t bill hourly — it misaligns our incentives with yours,
                and we&apos;d rather carry the risk of a fixed scope. But for the occasional
                piece of work that fits neither a fixed scope nor a retainer, we do work by
                the hour.
              </p>
              <p className="text-base text-[#1A1A1A]/60 leading-relaxed">
                Rates aren&apos;t fixed — they run anywhere from{" "}
                <span className="font-semibold text-[#1A1A1A]">$150 to $500 an hour</span>, on
                a sliding scale set by the role and the work. Hands-on installation — running
                cable or mounting displays in a conference room — sits at the low end; senior
                advisory, like joining a board meeting as your fractional CTO, sits at the top.
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

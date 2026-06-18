import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Ephemeral Infrastructure — Event, Festival & Temporary IT | RSystems NYC" },
  description:
    "RSystems designs, deploys, and tears down production-grade infrastructure on any timeline — networks, compute, cloud, and Wi-Fi for galas, festivals, productions, pop-ups, and temporary offices.",
  alternates: { canonical: "https://rsystems.nyc/services/ephemeral/" },
  openGraph: {
    title: "Ephemeral Infrastructure — Event, Festival & Temporary IT | RSystems NYC",
    description:
      "RSystems designs, deploys, and tears down production-grade infrastructure on any timeline — networks, compute, cloud, and Wi-Fi for galas, festivals, productions, pop-ups, and temporary offices.",
    url: "https://rsystems.nyc/services/ephemeral/",
  },
  twitter: {
    title: "Ephemeral Infrastructure — Event, Festival & Temporary IT | RSystems NYC",
    description:
      "RSystems designs, deploys, and tears down production-grade infrastructure on any timeline — networks, compute, cloud, and Wi-Fi for galas, festivals, productions, pop-ups, and temporary offices.",
  },
};

const subServices = [
  {
    id: "event-network",
    title: "Event Network Design & Deployment",
    body: "Reliable, secure networks for galas, fundraisers, conferences, and corporate events — including the payment and registration systems that can't fail at the moment they're needed most. Designed for the venue, deployed on schedule, staffed on site.",
  },
  {
    id: "festival",
    title: "Festival & Large-Venue Connectivity",
    body: "High-density, multi-zone connectivity across large outdoor and indoor venues — point-to-point links, distributed Wi-Fi, and the backbone to tie a whole campus together. Engineered for crowds, weather, and distance.",
  },
  {
    id: "temporary-office",
    title: "Temporary Office Infrastructure",
    body: "Swing space during a renovation, an interim headquarters, a project office with a known end date — full network, Wi-Fi, and cloud connectivity stood up fast and removed cleanly when the lease is up.",
  },
  {
    id: "production",
    title: "Production & Broadcast Support",
    body: "Networks for film, television, and live production — secure, high-throughput, and built around the realities of a set or a control room. There for the shoot, gone after the wrap.",
  },
  {
    id: "deploy-teardown",
    title: "Design, Deploy & Teardown",
    body: "The full lifecycle as a single capability: rapid design, fast deployment, on-site support during the event, and a clean, accountable teardown with full asset recovery. Built up and struck down with the same discipline.",
  },
];

const caseStudies = [
  {
    href: "/case-studies/charity-water-gala",
    title: "The Night $4.6 Million Moved Over Wi-Fi",
    description: "Gala network where failure was not an option.",
  },
  {
    href: "/case-studies/fost-fest",
    title: "A Festival Campus, Fully Connected",
    description: "Festival-grade network engineering at Snug Harbor.",
  },
];

export default function EphemeralPage() {
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
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-widest text-white/30 hover:text-white/60 transition-colors mb-10"
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
              <path d="M8 1L3 6L8 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Services
          </Link>
          <p className="text-[11px] font-semibold uppercase tracking-widest text-[#E8500A] mb-5">
            RSystems
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight max-w-3xl">
            Infrastructure that shows up, performs, and disappears.
          </h1>
          <p className="mt-6 text-lg text-white/50 max-w-2xl leading-relaxed">
            Some environments only exist for a night, a weekend, or a season — and they
            still need infrastructure that doesn&apos;t blink. We design, deploy, and tear down
            complete networks, compute, and Wi-Fi on whatever timeline the moment demands.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-[#F4F2EF]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-3">
              <p className="text-[11px] font-semibold uppercase tracking-widest text-[#E8500A] pt-1">
                Ephemeral Infrastructure
              </p>
            </div>
            <div className="lg:col-span-7 space-y-5">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A1A] tracking-tight leading-snug">
                Production-grade, built to be temporary.
              </h2>
              <p className="text-base text-[#1A1A1A]/60 leading-relaxed">
                A gala that moves millions over Wi-Fi in a single evening. A festival campus
                connected across acres of open ground. A production that needs a network for
                six weeks and then never again. These aren&apos;t lesser versions of permanent
                infrastructure — they demand the same rigor, compressed into a fraction of the
                time, with a clean teardown built into the plan. We&apos;ve done it under deadline
                pressure, in tents, in landmark buildings, and on waterfront piers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sub-service cards */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#1A1A1A]/[0.07] border border-[#1A1A1A]/[0.07] rounded-xl overflow-hidden">
            {subServices.map((service) => (
              <Link
                key={service.id}
                id={service.id}
                href={`/services/${service.id}`}
                className="group relative bg-white p-7 flex flex-col hover:bg-[#F4F2EF] transition-colors"
              >
                <span className="absolute top-7 right-7 text-[#1A1A1A]/20 group-hover:text-[#E8500A] transition-colors">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M3 13L13 3M13 3H6M13 3V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <h3 className="text-[15px] font-semibold text-[#1A1A1A] leading-snug pr-6 mb-3 group-hover:text-[#E8500A] transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-[#1A1A1A]/50 leading-relaxed">
                  {service.body}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Case studies */}
      <section className="bg-[#F4F2EF]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
          <div className="mb-10">
            <p className="text-[11px] font-semibold uppercase tracking-widest text-[#E8500A] mb-3">
              Proof
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A1A] tracking-tight leading-snug">
              Deployed under pressure.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {caseStudies.map((cs) => (
              <Link
                key={cs.href}
                href={cs.href}
                className="group relative flex flex-col p-7 border border-[#808080]/30 rounded-xl bg-[#F4F2EF] hover:bg-white transition-colors"
              >
                <span className="absolute top-7 right-7 text-[#1A1A1A]/20 group-hover:text-[#E8500A] transition-colors">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M3 13L13 3M13 3H6M13 3V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <h3 className="text-[15px] font-semibold text-[#1A1A1A] leading-snug pr-6 mb-2 group-hover:text-[#E8500A] transition-colors">
                  {cs.title}
                </h3>
                <p className="text-sm text-[#1A1A1A]/50 leading-relaxed">
                  {cs.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0F1117] text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
          <div className="max-w-2xl">
            <h2 className="text-2xl sm:text-3xl font-bold leading-snug tracking-tight mb-4">
              Have a date on the calendar?
            </h2>
            <p className="text-base text-white/50 leading-relaxed mb-8">
              Tell us the venue, the timeline, and what has to work. We&apos;ll design the
              infrastructure, deploy it, run it on the day, and take it all back down.
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

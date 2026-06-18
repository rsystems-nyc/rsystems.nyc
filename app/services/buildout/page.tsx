import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Buildout & Installation — Structured Cabling, Server Rooms, AV & Audio | RSystems NYC" },
  description:
    "RSystems handles the physical build: structured cabling and low-voltage, server room and rack buildout, wireless and network installation, security and access control, conference and presentation spaces, and audio systems from Sonos to reference-grade hi-fi.",
  alternates: { canonical: "https://rsystems.nyc/services/buildout/" },
  openGraph: {
    title: "Buildout & Installation — Structured Cabling, Server Rooms, AV & Audio | RSystems NYC",
    description:
      "RSystems handles the physical build: structured cabling and low-voltage, server room and rack buildout, wireless and network installation, security and access control, conference and presentation spaces, and audio systems from Sonos to reference-grade hi-fi.",
    url: "https://rsystems.nyc/services/buildout/",
  },
  twitter: {
    title: "Buildout & Installation — Structured Cabling, Server Rooms, AV & Audio | RSystems NYC",
    description:
      "RSystems handles the physical build: structured cabling and low-voltage, server room and rack buildout, wireless and network installation, security and access control, conference and presentation spaces, and audio systems from Sonos to reference-grade hi-fi.",
  },
};

const subServices = [
  {
    id: "structured-cabling",
    title: "Structured Cabling & Low-Voltage",
    body: "Cat6/6A copper and fiber backbone, patch panels, keystone termination, and cable management — pulled to spec, labeled at both ends, and documented. The foundation everything else rides on.",
  },
  {
    id: "server-room",
    title: "Server Room & Rack Buildout",
    body: "Racks, PDUs, UPS, cooling, and cable management built for airflow, redundancy, and serviceability. From a single network closet to a full server room, assembled and validated before anything goes live.",
  },
  {
    id: "wireless-installation",
    title: "Wireless & Network Installation",
    body: "Access point placement driven by site survey, switch installation and configuration, and live network standup. Coverage and capacity engineered for the space, not guessed at.",
  },
  {
    id: "security-access",
    title: "Security & Access Control",
    body: "IP camera systems, door access control, and alarm integration — installed on the network, segmented properly, and managed alongside the rest of your infrastructure.",
  },
  {
    id: "conference-rooms",
    title: "Conference Rooms & Presentation Spaces",
    body: "Displays, video conferencing, microphones, and control systems for meeting rooms, boardrooms, all-hands spaces, and town halls — engineered so the technology disappears and the meeting just works.",
  },
  {
    id: "audio-systems",
    title: "Audio Systems",
    body: "Sound done properly, at any tier. Multi-room Sonos for easy, flexible coverage — or a reference-grade system built around McIntosh amplification and audiophile loudspeakers when the room deserves it. Designed, installed, and tuned to the space.",
  },
];

const caseStudies = [
  {
    href: "/case-studies/redundancy-by-design",
    title: "Zero Downtime Since Deployment",
    description: "Enterprise infrastructure for a leading NYC architecture firm.",
  },
  {
    href: "/case-studies/little-island",
    title: "Built from the Waterline Up",
    description: "Infrastructure for one of NYC's most ambitious public spaces.",
  },
];

export default function BuildoutPage() {
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
            The physical build behind a network that works.
          </h1>
          <p className="mt-6 text-lg text-white/50 max-w-2xl leading-relaxed">
            Design tells you what to build. Buildout is putting it in the ground, in the
            rack, and in the walls — structured cabling, server rooms, wireless, security,
            presentation spaces, and audio, installed to a standard that holds up for years.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-[#F4F2EF]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-3">
              <p className="text-[11px] font-semibold uppercase tracking-widest text-[#E8500A] pt-1">
                Buildout &amp; Installation
              </p>
            </div>
            <div className="lg:col-span-7 space-y-5">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A1A] tracking-tight leading-snug">
                Where the design becomes real infrastructure.
              </h2>
              <p className="text-base text-[#1A1A1A]/60 leading-relaxed">
                A strong architecture is only as good as the installation that delivers it.
                Cabling pulled to spec and labeled at both ends. Racks built for airflow and
                serviceability. Access points placed by survey, not by guess. We handle the
                hands-on work — often as the build phase following a Technology Consulting
                engagement, sometimes as a standalone project for a new space or a fit-out.
                When the build is done, you can hand it to your team, to our Managed Services
                practice, or keep us on call.
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
              Built to last.
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
              Planning a build or a move?
            </h2>
            <p className="text-base text-white/50 leading-relaxed mb-8">
              Whether it&apos;s a new office, a server room, or a full fit-out, we can design
              it, build it, and hand it over working.
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

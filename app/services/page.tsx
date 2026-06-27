import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "IT Consulting Services — Strategy, Infrastructure & AI | RSystems NYC" },
  description: "RSystems delivers executive-level IT strategy across four practice areas: Technology Consulting, Buildout & Installation, Managed Services, and Ephemeral Infrastructure — spanning every layer of your environment from strategy through teardown.",
  alternates: { canonical: "https://rsystems.nyc/services/" },
  openGraph: {
    title: "IT Consulting Services — Strategy, Infrastructure & AI | RSystems NYC",
    description: "RSystems delivers executive-level IT strategy across four practice areas: Technology Consulting, Buildout & Installation, Managed Services, and Ephemeral Infrastructure — spanning every layer of your environment from strategy through teardown.",
    url: "https://rsystems.nyc/services/",
  },
  twitter: {
    title: "IT Consulting Services — Strategy, Infrastructure & AI | RSystems NYC",
    description: "RSystems delivers executive-level IT strategy across four practice areas: Technology Consulting, Buildout & Installation, Managed Services, and Ephemeral Infrastructure — spanning every layer of your environment from strategy through teardown.",
  },
};

const consultingCategories = [
  {
    href: "/services/technology-consulting/strategy/",
    name: "Strategy & Advisory",
    description:
      "Initial assessments, fractional CTO engagements, and disaster recovery planning — the strategic foundation every organization needs before making major technology decisions.",
  },
  {
    href: "/services/technology-consulting/ai/",
    name: "AI & Automation",
    description:
      "AI readiness assessments, tooling strategy, workflow automation, and organizational adoption planning for teams ready to operationalize AI.",
  },
  {
    href: "/services/technology-consulting/cloud/",
    name: "Cloud",
    description:
      "Azure architecture, cloud storage strategy, and hybrid infrastructure design — connecting your cloud environment to your business goals with minimal disruption.",
  },
  {
    href: "/services/technology-consulting/identity-security/",
    name: "Identity & Security",
    description:
      "Entra, Intune, and password management implementations alongside NIST-based cybersecurity assessments — so your organization is resilient before an incident, not after.",
  },
  {
    href: "/services/technology-consulting/networking/",
    name: "Networking",
    description:
      "Switching, routing, firewall, and WiFi infrastructure designed and engineered for demanding enterprise environments.",
  },
  {
    href: "/services/technology-consulting/compute-storage/",
    name: "Compute & Storage",
    description:
      "Dell PowerEdge, Synology, and VMware — on-premises server and storage infrastructure designed for high availability, virtualization, and demanding workloads.",
  },
];

export default function ServicesPage() {
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
          <p className="text-[11px] font-semibold uppercase tracking-widest text-[#FE6305] mb-5">
            RSystems
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight max-w-3xl">
            Senior technical expertise across every layer of your stack.
          </h1>
          <p className="mt-6 text-lg text-white/50 max-w-2xl leading-relaxed">
            Four practice areas — technology consulting, physical buildout,
            ongoing management, and rapid deployment for temporary
            environments — spanning every layer of your infrastructure, from
            strategy through teardown.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="bg-[#F4F2EF]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
          <div className="mb-12">
            <p className="text-[11px] font-semibold uppercase tracking-widest text-[#FE6305] mb-3">
              Technology Consulting
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A1A] tracking-tight leading-snug max-w-lg">
              Project-based engagements across six practice areas.
            </h2>
            <p className="mt-3 text-base text-[#1A1A1A]/60 max-w-xl leading-relaxed">
              Identifying, defining, and solving business challenges with technology —
              scoped as standalone projects or as the architecture phase before ongoing management.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#1A1A1A]/[0.07] border border-[#1A1A1A]/[0.07] rounded-xl overflow-hidden">
            <Link
              href="/services/technology-consulting"
              className="group relative col-span-1 md:col-span-2 lg:col-span-3 bg-[#F4F2EF] px-7 py-4 flex items-center justify-between hover:bg-white transition-colors border-b border-[#1A1A1A]/[0.07]"
            >
              <span className="text-[11px] font-semibold uppercase tracking-widest text-[#FE6305]">
                Technology Consulting
              </span>
              <span className="text-[#1A1A1A]/20 group-hover:text-[#FE6305] transition-colors">
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M3 13L13 3M13 3H6M13 3V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </Link>
            {consultingCategories.map((cat) => (
              <Link
                key={cat.href}
                href={cat.href}
                className="group relative bg-[#F4F2EF] p-7 flex flex-col hover:bg-white transition-colors"
              >
                <span className="absolute top-7 right-7 text-[#1A1A1A]/20 group-hover:text-[#FE6305] transition-colors">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M3 13L13 3M13 3H6M13 3V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <h3 className="text-[15px] font-semibold text-[#1A1A1A] leading-snug pr-6 mb-3 group-hover:text-[#FE6305] transition-colors">
                  {cat.name}
                </h3>
                <p className="text-sm text-[#1A1A1A]/50 leading-relaxed">
                  {cat.description}
                </p>
              </Link>
            ))}
          </div>

          <Link
            href="/services/management/"
            className="group mt-4 relative flex flex-col p-7 border border-[#808080]/30 rounded-xl bg-[#F4F2EF] hover:bg-white transition-colors"
          >
            <span className="absolute top-7 right-7 text-[#1A1A1A]/20 group-hover:text-[#FE6305] transition-colors">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 13L13 3M13 3H6M13 3V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <h3 className="text-[15px] font-semibold text-[#1A1A1A] leading-snug pr-6 mb-3 group-hover:text-[#FE6305] transition-colors">
              Managed Services
            </h3>
            <p className="text-sm text-[#1A1A1A]/50 leading-relaxed max-w-2xl">
              Ongoing back-end infrastructure administration — identity, workstations, servers, network, backup, and domain management on flexible monthly terms, with day-to-day help desk and user support available through Managed Support.
            </p>
          </Link>

          <Link
            href="/services/buildout"
            className="group mt-4 relative flex flex-col p-7 border border-[#808080]/30 rounded-xl bg-[#F4F2EF] hover:bg-white transition-colors"
          >
            <span className="absolute top-7 right-7 text-[#1A1A1A]/20 group-hover:text-[#FE6305] transition-colors">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 13L13 3M13 3H6M13 3V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <h3 className="text-[15px] font-semibold text-[#1A1A1A] leading-snug pr-6 mb-3 group-hover:text-[#FE6305] transition-colors">
              Buildout &amp; Installation
            </h3>
            <p className="text-sm text-[#1A1A1A]/50 leading-relaxed max-w-2xl">
              Physical infrastructure, installed right. Structured cabling, server rooms, wireless, security and access control, conference and presentation spaces, and audio systems — from multi-room Sonos to reference-grade hi-fi. The hands-on build that turns a design into working infrastructure.
            </p>
          </Link>

          <Link
            href="/services/ephemeral"
            className="group mt-4 relative flex flex-col p-7 border border-[#808080]/30 rounded-xl bg-[#F4F2EF] hover:bg-white transition-colors"
          >
            <span className="absolute top-7 right-7 text-[#1A1A1A]/20 group-hover:text-[#FE6305] transition-colors">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 13L13 3M13 3H6M13 3V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <h3 className="text-[15px] font-semibold text-[#1A1A1A] leading-snug pr-6 mb-3 group-hover:text-[#FE6305] transition-colors">
              Ephemeral Infrastructure
            </h3>
            <p className="text-sm text-[#1A1A1A]/50 leading-relaxed max-w-2xl">
              Production-grade infrastructure on any timeline — designed, deployed, and removed just as fast. Networks, compute, cloud, and Wi-Fi for galas, festivals, productions, pop-ups, and temporary offices. Built to perform under pressure, then torn down clean.
            </p>
          </Link>
        </div>
      </section>

      {/* How services work together */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-3">
              <p className="text-[11px] font-semibold uppercase tracking-widest text-[#FE6305] pt-1">
                How it works
              </p>
            </div>
            <div className="lg:col-span-7 space-y-5">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A1A] tracking-tight leading-snug">
                Most engagements span more than one area.
              </h2>
              <p className="text-base text-[#1A1A1A]/60 leading-relaxed">
                Infrastructure, identity, security, and cloud are not independent decisions.
                A cloud migration shapes your identity architecture. A network redesign
                informs your security posture. An onboarding workflow depends on your
                device management platform. We approach each engagement with that
                interconnection in mind.
              </p>
              <p className="text-base text-[#1A1A1A]/60 leading-relaxed">
                Many clients engage RSystems on a single focused initiative and expand
                the scope as the relationship develops. Others bring us in as a fractional
                CTO or CISO from the start, which naturally surfaces the full picture.
                Either way, the goal is the same: infrastructure strategy that holds
                together across every layer of your environment.
              </p>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}

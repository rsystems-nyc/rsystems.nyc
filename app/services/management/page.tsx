import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Managed IT Infrastructure Administration | RSystems NYC" },
  description: "Back-end infrastructure administration for NYC organizations — identity, workstations, servers, network, backup, and domain management. No help desk. No tier 1.",
  alternates: { canonical: "https://rsystems.nyc/services/management/" },
  openGraph: {
    title: "Managed IT Infrastructure Administration | RSystems NYC",
    description: "Back-end infrastructure administration for NYC organizations — identity, workstations, servers, network, backup, and domain management. No help desk. No tier 1.",
    url: "https://rsystems.nyc/services/management/",
  },
  twitter: {
    title: "Managed IT Infrastructure Administration | RSystems NYC",
    description: "Back-end infrastructure administration for NYC organizations — identity, workstations, servers, network, backup, and domain management. No help desk. No tier 1.",
  },
};

const services = [
  {
    name: "Core Suite",
    href: "/services/management/core-suite",
    tagline:
      "The complete RSystems Management bundle — all services in one subscription.",
  },
  {
    name: "Identity Management",
    href: "/services/management/identity",
    tagline:
      "Centralized user directory, MFA enforcement, and authentication logging across all platforms.",
  },
  {
    name: "Workstation Management",
    href: "/services/management/workstation",
    tagline:
      "Automated patching, antivirus, asset management, and security policy enforcement across your fleet.",
  },
  {
    name: "Management Essentials",
    href: "/services/management/essentials",
    tagline:
      "Foundation IT management combining identity, workstations, and integrated ticket management.",
  },
  {
    name: "Backup Management",
    href: "/services/management/backup",
    tagline:
      "Automated monitoring and integrity verification for Google Workspace and Microsoft 365 backups.",
  },
  {
    name: "Network Management",
    href: "/services/management/network",
    tagline:
      "Continuous infrastructure monitoring with uptime tracking, connectivity logs, and firmware awareness.",
  },
  {
    name: "Domain Management",
    href: "/services/management/domain",
    tagline:
      "Domain registration, DNS administration, and email authentication protocol management.",
  },
  {
    name: "Server Management",
    href: "/services/management/server",
    tagline:
      "Remote diagnostics, security patching, backup supervision, and health monitoring for on-premises servers.",
  },
  {
    name: "Cybersecurity Awareness Management",
    href: "/services/management/awareness",
    tagline:
      "Security training resources, policy templates, and staff acknowledgment workflows.",
  },
];

export default function ManagementIndexPage() {
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
            Managed infrastructure administration — without the help desk.
          </h1>
          <p className="mt-6 text-lg text-white/50 max-w-2xl leading-relaxed">
            RSystems Management provides ongoing back-end administration of your
            technology infrastructure — identity, devices, servers, network,
            backup, and domain — on flexible monthly terms.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="bg-[#F4F2EF]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-3">
              <p className="text-[11px] font-semibold uppercase tracking-widest text-[#E8500A] pt-1">
                What It Is
              </p>
            </div>
            <div className="lg:col-span-7 space-y-5">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A1A] tracking-tight leading-snug">
                We monitor, patch, and maintain the systems that keep your organization running.
              </h2>
              <p className="text-base text-[#1A1A1A]/60 leading-relaxed">
                RSystems Management uses a carefully chosen collection of software
                tools to proactively administer your technology infrastructure —
                identity, devices, servers, network, backup, and domain — on
                flexible monthly terms. We bundle services and pool management time
                across clients to offer solutions at competitive rates, with costs
                that scale with your organization.
              </p>
              <p className="text-base text-[#1A1A1A]/60 leading-relaxed">
                We don&apos;t run a help desk. We don&apos;t do tier 1. If you need
                user-facing support alongside back-end administration, we can
                recommend trusted partners. What we do is keep your infrastructure
                healthy, secure, and well-documented at the senior level — so your
                team can focus on the work that matters.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
          <p className="text-[11px] font-semibold uppercase tracking-widest text-[#E8500A] mb-4">
            Services
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A1A] tracking-tight mb-12 max-w-xl">
            What&apos;s included in RSystems Management.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#1A1A1A]/[0.07] border border-[#1A1A1A]/[0.07] rounded-xl overflow-hidden">
            {services.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="group relative bg-white p-7 flex flex-col hover:bg-[#F4F2EF] transition-colors"
              >
                <span className="absolute top-7 right-7 text-[#1A1A1A]/20 group-hover:text-[#E8500A] transition-colors">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M3 13L13 3M13 3H6M13 3V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <h3 className="text-[15px] font-semibold text-[#1A1A1A] leading-snug pr-6 mb-3 group-hover:text-[#E8500A] transition-colors">
                  {service.name}
                </h3>
                <p className="text-sm text-[#1A1A1A]/50 leading-relaxed">
                  {service.tagline}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0F1117] text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Let&apos;s talk about your infrastructure.
              </h2>
              <p className="mt-3 text-white/50 text-base">
                Schedule a conversation with the RSystems team.
              </p>
            </div>
            <Link
              href="/contact"
              className="flex-shrink-0 inline-block text-sm font-medium bg-[#E8500A] text-white px-6 py-3 rounded hover:bg-[#E8500A]/85 transition-colors"
            >
              Schedule a Conversation
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

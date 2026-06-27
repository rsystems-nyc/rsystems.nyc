import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Managed Services | RSystems NYC" },
  description:
    "RSystems provides senior-level managed services for organizations that need ongoing platform administration and back-end infrastructure management — identity platforms, cloud infrastructure, endpoint management, and security tooling, without the help desk overhead.",
  alternates: { canonical: "https://rsystems.nyc/services/management/" },
  openGraph: {
    title: "Managed Services | RSystems NYC",
    description:
      "RSystems provides senior-level managed services for organizations that need ongoing platform administration and back-end infrastructure management — identity platforms, cloud infrastructure, endpoint management, and security tooling, without the help desk overhead.",
    url: "https://rsystems.nyc/services/management/",
  },
  twitter: {
    title: "Managed Services | RSystems NYC",
    description:
      "RSystems provides senior-level managed services for organizations that need ongoing platform administration and back-end infrastructure management — identity platforms, cloud infrastructure, endpoint management, and security tooling, without the help desk overhead.",
  },
};

const managedAreas = [
  {
    label: "Identity and directory platforms",
    description: "Entra ID, JumpCloud, Okta, Google Workspace, Microsoft 365",
  },
  {
    label: "Cloud infrastructure",
    description:
      "AWS, Azure, GCP — ongoing administration, cost optimization, and security posture management",
  },
  {
    label: "Server and storage infrastructure",
    description:
      "On-premises and hybrid environments, VMware, Hyper-V, SAN and NAS storage",
  },
  {
    label: "Endpoint management",
    description:
      "Intune, Autopilot, JumpCloud MDM, device policy, and fleet health",
  },
  {
    label: "Security tooling",
    description:
      "Defender, firewall administration, patch management, backup and recovery oversight",
  },
  {
    label: "Network infrastructure",
    description:
      "Switches, firewalls, wireless — SonicWall, Fortinet, Cisco, Ruckus, Mist",
  },
];

const bundles = [
  {
    slug: "essentials",
    title: "Management Essentials",
    body: "The foundational layer: identity and endpoint management, MFA enforcement, and back-end infrastructure for smaller teams.",
  },
  {
    slug: "core-suite",
    title: "Core Suite",
    body: "All five management services in one subscription — identity, endpoint, backup, domain, and network — with consolidated billing.",
  },
];

const services = [
  {
    slug: "identity",
    title: "Identity Management",
    body: "Managed JumpCloud directory administration — MFA, SSO, and authentication logging. Back-end only, no user-facing support.",
  },
  {
    slug: "endpoint-management",
    title: "Endpoint Management",
    body: "Automated patching, antivirus, asset tracking, and security-policy enforcement across your device fleet.",
  },
  {
    slug: "network",
    title: "Network Management",
    body: "Continuous infrastructure monitoring, uptime tracking, and health verification — remote and back-end.",
  },
  {
    slug: "server",
    title: "Server Management",
    body: "Remote monitoring, security patching, health alerts, and backup verification for on-premises and cloud servers.",
  },
  {
    slug: "backup",
    title: "Backup Management",
    body: "Backup monitoring, integrity verification, and cloud backup management for Microsoft 365 and Google Workspace.",
  },
  {
    slug: "domain",
    title: "Domain Management",
    body: "Domain and DNS administration — registration, DNS, and SPF, DKIM, and DMARC — set up right and maintained.",
  },
  {
    slug: "awareness",
    title: "Cybersecurity Awareness",
    body: "Security awareness training, policy templates, and staff acknowledgment workflows on an annual subscription.",
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
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-widest text-white/30 hover:text-white/60 transition-colors mb-10"
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
              <path d="M8 1L3 6L8 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Services
          </Link>
          <p className="text-[11px] font-semibold uppercase tracking-widest text-[#FE6305] mb-5">
            Managed Services
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight max-w-3xl">
            Senior-level managed services for complex infrastructure environments.
          </h1>
          <p className="mt-6 text-lg text-white/50 max-w-2xl leading-relaxed">
            RSystems provides ongoing managed services for organizations that need
            senior-level platform administration and back-end infrastructure management
            on a retainer basis. We handle the work that requires genuine expertise —
            identity platforms, cloud infrastructure, server and storage administration,
            security tooling, and the day-to-day oversight of complex environments —
            so your leadership team isn&apos;t carrying that operational burden alone.
          </p>
        </div>
      </section>

      {/* What We Manage */}
      <section className="bg-[#F4F2EF]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-3">
              <p className="text-[11px] font-semibold uppercase tracking-widest text-[#FE6305] pt-1">
                What We Manage
              </p>
            </div>
            <div className="lg:col-span-7 space-y-5">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A1A] tracking-tight leading-snug">
                Identity, cloud, servers, endpoints, security, and network.
              </h2>
              <ul className="space-y-4 pt-1">
                {managedAreas.map((area) => (
                  <li key={area.label} className="flex items-start gap-3">
                    <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-[#FE6305] flex-shrink-0" />
                    <p className="text-base text-[#1A1A1A]/60 leading-relaxed">
                      <span className="font-semibold text-[#1A1A1A]">{area.label}</span>
                      {" — "}
                      {area.description}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Explore the services */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
          <div className="mb-10">
            <p className="text-[11px] font-semibold uppercase tracking-widest text-[#FE6305] mb-3">
              The Services
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A1A] tracking-tight leading-snug">
              Explore each service.
            </h2>
          </div>
          {/* Zone 1 — Bundles */}
          <div className="mb-12">
            <p className="text-[11px] font-semibold uppercase tracking-widest text-[#1A1A1A]/40 mb-4">
              Bundles
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {bundles.map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/management/${s.slug}`}
                  className="group relative flex flex-col w-full md:w-[calc(50%-0.5rem)] border border-[#1A1A1A]/[0.07] rounded-xl bg-white p-7 hover:bg-[#F4F2EF] transition-colors"
                >
                  <span className="absolute top-7 right-7 text-[#1A1A1A]/20 group-hover:text-[#FE6305] transition-colors">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                      <path d="M3 13L13 3M13 3H6M13 3V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <h3 className="text-[15px] font-semibold text-[#1A1A1A] leading-snug pr-6 mb-3 group-hover:text-[#FE6305] transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-sm text-[#1A1A1A]/50 leading-relaxed">
                    {s.body}
                  </p>
                </Link>
              ))}
            </div>
          </div>

          {/* Zone 2 — Individual services */}
          <div className="mb-12">
            <p className="text-[11px] font-semibold uppercase tracking-widest text-[#1A1A1A]/40 mb-4">
              Individual Services
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {services.map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/management/${s.slug}`}
                  className="group relative flex flex-col w-full md:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.667rem)] border border-[#1A1A1A]/[0.07] rounded-xl bg-white p-7 hover:bg-[#F4F2EF] transition-colors"
                >
                  <span className="absolute top-7 right-7 text-[#1A1A1A]/20 group-hover:text-[#FE6305] transition-colors">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                      <path d="M3 13L13 3M13 3H6M13 3V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <h3 className="text-[15px] font-semibold text-[#1A1A1A] leading-snug pr-6 mb-3 group-hover:text-[#FE6305] transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-sm text-[#1A1A1A]/50 leading-relaxed">
                    {s.body}
                  </p>
                </Link>
              ))}
            </div>
          </div>

          {/* Zone 3 — Managed Support, full width */}
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-widest text-[#1A1A1A]/40 mb-4">
              Support
            </p>
            <Link
              href="/services/management/support"
              className="group relative block border border-[#1A1A1A]/[0.07] rounded-xl bg-white p-7 hover:bg-[#F4F2EF] transition-colors"
            >
              <span className="absolute top-7 right-7 text-[#1A1A1A]/20 group-hover:text-[#FE6305] transition-colors">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M3 13L13 3M13 3H6M13 3V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <h3 className="text-[15px] font-semibold text-[#1A1A1A] leading-snug pr-6 mb-3 group-hover:text-[#FE6305] transition-colors">
                Managed Support
              </h3>
              <p className="text-sm text-[#1A1A1A]/50 leading-relaxed max-w-3xl">
                Hands-on, day-to-day help — helpdesk, onboarding, and device support — with
                access to every level of our team.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* How We Work Best */}
      <section className="bg-[#F4F2EF]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-3">
              <p className="text-[11px] font-semibold uppercase tracking-widest text-[#FE6305] pt-1">
                How We Work Best
              </p>
            </div>
            <div className="lg:col-span-7 space-y-5">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A1A] tracking-tight leading-snug">
                Senior technical oversight and back-end platform management.
              </h2>
              <p className="text-base text-[#1A1A1A]/60 leading-relaxed">
                We&apos;re the right partner for organizations that need senior technical
                oversight and back-end platform management — the work that genuinely calls
                for a senior practitioner.
              </p>
              <p className="text-base text-[#1A1A1A]/60 leading-relaxed">
                Keeping a team running day to day is a different kind of work. For
                high-volume, routine help desk, many organizations are best served by a
                dedicated in-house hire close to their team — and when the volume justifies
                that role, we&apos;ll help you hire and onboard that person well. For everyone
                else, our Managed Support retainer covers the day-to-day directly, with the
                level of our team each request calls for.
              </p>
              <p className="text-base text-[#1A1A1A]/60 leading-relaxed">
                It&apos;s not a hard rule either way, and we&apos;ll always tell you which fits.
              </p>
              <p className="pt-1">
                <Link
                  href="/services/management/support"
                  className="group text-[13px] font-semibold text-[#FE6305] inline-flex items-center gap-1.5"
                >
                  Learn about Managed Support
                  <span aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">→</span>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}

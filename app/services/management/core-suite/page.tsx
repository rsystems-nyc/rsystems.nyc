import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Core IT Management Suite for NYC Organizations | RSystems" },
  description: "Identity, workstation, backup, domain, and network management in a single monthly subscription — senior back-end IT administration for New York City organizations.",
  alternates: { canonical: "https://rsystems.nyc/services/management/core-suite/" },
  openGraph: {
    title: "Core IT Management Suite for NYC Organizations | RSystems",
    description: "Identity, workstation, backup, domain, and network management in a single monthly subscription — senior back-end IT administration for New York City organizations.",
    url: "https://rsystems.nyc/services/management/core-suite/",
  },
  twitter: {
    title: "Core IT Management Suite for NYC Organizations | RSystems",
    description: "Identity, workstation, backup, domain, and network management in a single monthly subscription — senior back-end IT administration for New York City organizations.",
  },
};

const bundledServices = [
  "Identity Management",
  "Workstation Management",
  "Backup Management",
  "Domain Management",
  "Network Management",
];

const baseLicense = [
  "Domain Management License (1 domain)",
  "Network Management License (1 location)",
  "Password Management SCIM Bridge",
];

const perIdentityLicense = [
  "Identity Management License",
  "Workstation Management License",
  "Backup Management License",
];

export default function CoreSuitePage() {
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
          <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-widest text-white/30 mb-10 flex-wrap">
            <Link href="/services" className="hover:text-white/60 transition-colors">Services</Link>
            <span>/</span>
            <Link href="/services/management" className="hover:text-white/60 transition-colors">RSystems Management</Link>
            <span>/</span>
            <span className="text-white/50">Core Suite</span>
          </div>
          <p className="text-[11px] font-semibold uppercase tracking-widest text-[#E8500A] mb-5">
            RSystems Management
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight max-w-3xl">
            Core Suite
          </h1>
          <p className="mt-6 text-lg text-white/50 max-w-2xl leading-relaxed">
            The complete RSystems Management bundle — all five management services
            in a single subscription with consolidated billing.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="bg-[#F4F2EF]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-3">
              <p className="text-[11px] font-semibold uppercase tracking-widest text-[#E8500A] pt-1">
                Overview
              </p>
            </div>
            <div className="lg:col-span-7 space-y-5">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A1A] tracking-tight leading-snug">
                When holistic improvement is the goal.
              </h2>
              <p className="text-base text-[#1A1A1A]/60 leading-relaxed">
                When holistic improvements to a client&apos;s IT infrastructure, digital
                security, and organizational systems are desired, we recommend
                enrolling in the RSystems Management Core Suite. The Core Suite
                bundles all RSystems Management services into a single subscription
                with a base organizational fee plus per-identity pricing.
              </p>
              <p className="text-base text-[#1A1A1A]/60 leading-relaxed">
                An &ldquo;Identity&rdquo; is any single sign-on (SSO) account with a username
                and password — tied to a user or a service account. Service accounts
                support back-end administration without individual user association.
                Individual services are available separately, though bundling reduces
                cost and simplifies billing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bundled Services */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-3">
              <p className="text-[11px] font-semibold uppercase tracking-widest text-[#E8500A] pt-1">
                Included Services
              </p>
            </div>
            <div className="lg:col-span-7 space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-[#1A1A1A] tracking-tight mb-6">
                  What&apos;s in the Core Suite.
                </h2>
                <ul className="space-y-3">
                  {bundledServices.map((s) => (
                    <li key={s} className="flex items-start gap-3 text-base text-[#1A1A1A]/70">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#E8500A] flex-shrink-0" />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Licensing */}
      <section className="bg-[#F4F2EF]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
          <p className="text-[11px] font-semibold uppercase tracking-widest text-[#E8500A] mb-4">
            Licensing Structure
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A1A] tracking-tight mb-12 max-w-xl">
            Base and per-identity pricing.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-[#1A1A1A]/[0.07] border border-[#1A1A1A]/[0.07] rounded-xl overflow-hidden">
            <div className="bg-[#F4F2EF] p-7">
              <p className="text-[11px] font-semibold text-[#E8500A] mb-3 uppercase tracking-widest">
                Base License
              </p>
              <h3 className="text-[15px] font-semibold text-[#1A1A1A] mb-4 leading-snug">
                Organizational tier
              </h3>
              <ul className="space-y-2.5">
                {baseLicense.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-[#1A1A1A]/60">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#E8500A] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-[#F4F2EF] p-7">
              <p className="text-[11px] font-semibold text-[#E8500A] mb-3 uppercase tracking-widest">
                Per-Identity License
              </p>
              <h3 className="text-[15px] font-semibold text-[#1A1A1A] mb-4 leading-snug">
                Per SSO account
              </h3>
              <ul className="space-y-2.5">
                {perIdentityLicense.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-[#1A1A1A]/60">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#E8500A] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Setup & Monthly */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-3">
              <p className="text-[11px] font-semibold uppercase tracking-widest text-[#E8500A] pt-1">
                What to Expect
              </p>
            </div>
            <div className="lg:col-span-7 space-y-8">
              <div>
                <h3 className="text-lg font-bold text-[#1A1A1A] mb-3">Initial Setup</h3>
                <p className="text-base text-[#1A1A1A]/60 leading-relaxed">
                  Deployment of all management services included in the Core Suite — agents
                  installed, systems configured, automated alerts set, and team assigned
                  for active monitoring and management.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#1A1A1A] mb-3">Ongoing Monthly Services</h3>
                <p className="text-base text-[#1A1A1A]/60 leading-relaxed">
                  Back-end administration of all included services — monitoring, patching,
                  identity platform management, backup verification, network health checks,
                  domain renewals, and DNS maintenance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0F1117] text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Let&apos;s talk about your project.
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

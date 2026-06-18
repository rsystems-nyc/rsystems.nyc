import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Managed Identity Administration (JumpCloud) | RSystems" },
  description: "Managed JumpCloud directory administration — MFA enforcement, SSO, and authentication logging for NYC organizations. Back-end only, no user-facing support.",
  alternates: { canonical: "https://rsystems.nyc/services/management/identity/" },
  openGraph: {
    title: "Managed Identity Administration (JumpCloud) | RSystems",
    description: "Managed JumpCloud directory administration — MFA enforcement, SSO, and authentication logging for NYC organizations. Back-end only, no user-facing support.",
    url: "https://rsystems.nyc/services/management/identity/",
  },
  twitter: {
    title: "Managed Identity Administration (JumpCloud) | RSystems",
    description: "Managed JumpCloud directory administration — MFA enforcement, SSO, and authentication logging for NYC organizations. Back-end only, no user-facing support.",
  },
};

const setupItems = [
  "JumpCloud backend configuration with Google and Microsoft bindings",
  "User account creation or importation",
  "Workstation binding to JumpCloud",
  "Multi-factor authentication configuration",
  "Additional cloud service binding as required",
];

const monthlyItems = [
  "Advanced authentication event logging",
  "Workstation usage insights",
  "JumpCloud system administration",
  "Centralized administration of integrated external services",
  "Two-factor authentication enforcement for systems beyond Microsoft and Google platforms",
  "Local account management for Mac and Windows computers",
];


export default function IdentityManagementPage() {
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
            <Link href="/services/management" className="hover:text-white/60 transition-colors">Managed Services</Link>
            <span>/</span>
            <span className="text-white/50">Identity Management</span>
          </div>
          <p className="text-[11px] font-semibold uppercase tracking-widest text-[#E8500A] mb-5">
            Managed Services
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight max-w-3xl">
            Identity Management
          </h1>
          <p className="mt-6 text-lg text-white/50 max-w-2xl leading-relaxed">
            Centralized user directory, MFA enforcement, and authentication event
            logging across Mac, Windows, and cloud services.
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
                One identity, consistently enforced.
              </h2>
              <p className="text-base text-[#1A1A1A]/60 leading-relaxed">
                RSystems Identity Management simplifies and tightens security by
                allowing staff to use the same credentials for their local computers
                and a range of critical web services. This reduces password management
                burden while centralizing access controls and authentication logging
                across your environment.
              </p>
              <p className="text-base text-[#1A1A1A]/60 leading-relaxed">
                RSystems can design and implement automated onboarding pipelines,
                but does not perform the hands-on onboarding and offboarding work.
                Identity Management covers the back-end directory, authentication
                infrastructure, and event logging your team relies on.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Included */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-widest text-[#E8500A] mb-4">
                Initial Setup
              </p>
              <ul className="space-y-3">
                {setupItems.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-[#1A1A1A]/70">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#E8500A] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-widest text-[#E8500A] mb-4">
                Ongoing Monthly Services
              </p>
              <ul className="space-y-3">
                {monthlyItems.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-[#1A1A1A]/70">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#E8500A] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}

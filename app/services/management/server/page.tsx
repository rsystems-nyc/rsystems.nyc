import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Managed Server Administration NYC | RSystems" },
  description: "Remote server monitoring, security patching, automated health alerts, and backup verification for on-premises and cloud-hosted servers. Back-end only.",
  alternates: { canonical: "https://rsystems.nyc/services/management/server/" },
  openGraph: {
    title: "Managed Server Administration NYC | RSystems",
    description: "Remote server monitoring, security patching, automated health alerts, and backup verification for on-premises and cloud-hosted servers. Back-end only.",
    url: "https://rsystems.nyc/services/management/server/",
  },
  twitter: {
    title: "Managed Server Administration NYC | RSystems",
    description: "Remote server monitoring, security patching, automated health alerts, and backup verification for on-premises and cloud-hosted servers. Back-end only.",
  },
};

const setupItems = [
  "Install and configure an agent for automatic data collection and reporting",
  "Configure automated alerts",
  "Assign team for active monitoring and management",
  "Configure processes for automated alerting data",
];

const monthlyItems = [
  "Remote access for diagnostics and repairs",
  "Automatic monitoring of server uptime, including internet connectivity",
  "Advanced warning of drive failure alerts and other critical issues",
  "Remote software patching (security and incremental OS only)",
  "Basic backup management to local or cloud destinations",
  "Periodic manual verification of automated alerts and device health",
];


export default function ServerManagementPage() {
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
            <span className="text-white/50">Server Management</span>
          </div>
          <p className="text-[11px] font-semibold uppercase tracking-widest text-[#FE6305] mb-5">
            Managed Services
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight max-w-3xl">
            Server Management
          </h1>
          <p className="mt-6 text-lg text-white/50 max-w-2xl leading-relaxed">
            Remote diagnostics, security patching, backup supervision, and health
            monitoring for on-premises and cloud-hosted servers — continuous
            coverage without the on-site overhead.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="bg-[#F4F2EF]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-3">
              <p className="text-[11px] font-semibold uppercase tracking-widest text-[#FE6305] pt-1">
                Overview
              </p>
            </div>
            <div className="lg:col-span-7 space-y-5">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A1A] tracking-tight leading-snug">
                Active oversight for your on-premises and cloud-hosted servers.
              </h2>
              <p className="text-base text-[#1A1A1A]/60 leading-relaxed">
                Server Management includes automated monitoring of system health,
                installation of security patches and routine maintenance, as well
                as RSystems time to supervise and administer local and offsite backups.
                The service combines continuous automated monitoring with periodic
                manual verification to confirm systems are functioning as expected.
                The subscription covers remote back-end administration — hardware
                repairs, physical equipment costs, and major OS version upgrades
                are scoped and priced as separate project engagements.
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
              <p className="text-[11px] font-semibold uppercase tracking-widest text-[#FE6305] mb-4">
                Initial Setup
              </p>
              <ul className="space-y-3">
                {setupItems.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-[#1A1A1A]/70">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#FE6305] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-widest text-[#FE6305] mb-4">
                Ongoing Monthly Services
              </p>
              <ul className="space-y-3">
                {monthlyItems.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-[#1A1A1A]/70">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#FE6305] flex-shrink-0" />
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

import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Managed Cloud Backup for M365 & Google Workspace | RSystems" },
  description: "Automated backup monitoring, integrity verification, and cloud backup management for Microsoft 365 and Google Workspace. NYC organizations only.",
  alternates: { canonical: "https://rsystems.nyc/services/management/backup/" },
  openGraph: {
    title: "Managed Cloud Backup for M365 & Google Workspace | RSystems",
    description: "Automated backup monitoring, integrity verification, and cloud backup management for Microsoft 365 and Google Workspace. NYC organizations only.",
    url: "https://rsystems.nyc/services/management/backup/",
  },
  twitter: {
    title: "Managed Cloud Backup for M365 & Google Workspace | RSystems",
    description: "Automated backup monitoring, integrity verification, and cloud backup management for Microsoft 365 and Google Workspace. NYC organizations only.",
  },
};

const setupItems = [
  "Initial configuration of back-end backup systems",
  "Configuration of automated alerts",
];

const monthlyItems = [
  "Google Workspace and Microsoft 365 backup monitoring",
  "Automatic monitoring and periodic manual verification of backup integrity",
  "Automated alert response and issue identification",
];

const excluded = [
  "Data recovery expenses",
  "Hardware failures, malfunctions, or replacements",
  "Third-party vendor or manufacturer support fees",
  "Out-of-warranty equipment remediation costs",
  "Spare parts, replacement equipment, cables, adapters, and power cords",
];

export default function BackupManagementPage() {
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
            <span className="text-white/50">Backup Management</span>
          </div>
          <p className="text-[11px] font-semibold uppercase tracking-widest text-[#E8500A] mb-5">
            RSystems Management
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight max-w-3xl">
            Backup Management
          </h1>
          <p className="mt-6 text-lg text-white/50 max-w-2xl leading-relaxed">
            Automated monitoring and integrity verification for Google Workspace
            and Microsoft 365 backups — catching issues before they become disasters.
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
                Backups that are actually monitored.
              </h2>
              <p className="text-base text-[#1A1A1A]/60 leading-relaxed">
                Backup Management monitors the status of your backups and identifies
                potential issues before they cause disruption. The service combines
                continuous automated monitoring with scheduled manual verification
                to confirm that automated tools are functioning correctly — not just
                running, but actually producing reliable backups.
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

      {/* Excluded */}
      <section className="bg-[#F4F2EF]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-3">
              <p className="text-[11px] font-semibold uppercase tracking-widest text-[#E8500A] pt-1">
                Separately Billed
              </p>
            </div>
            <div className="lg:col-span-7">
              <h2 className="text-xl font-bold text-[#1A1A1A] tracking-tight mb-6">
                Not included in the monthly fee.
              </h2>
              <ul className="space-y-3">
                {excluded.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-[#1A1A1A]/60">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#1A1A1A]/20 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
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

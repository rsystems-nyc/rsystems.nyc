import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "IT Management Essentials — Identity & Infrastructure | RSystems" },
  description: "The foundational layer of managed IT administration — identity, workstation security, and back-end infrastructure management for New York City organizations.",
  alternates: { canonical: "https://rsystems.nyc/services/management/essentials/" },
  openGraph: {
    title: "IT Management Essentials — Identity & Infrastructure | RSystems",
    description: "The foundational layer of managed IT administration — identity, workstation security, and back-end infrastructure management for New York City organizations.",
    url: "https://rsystems.nyc/services/management/essentials/",
  },
  twitter: {
    title: "IT Management Essentials — Identity & Infrastructure | RSystems",
    description: "The foundational layer of managed IT administration — identity, workstation security, and back-end infrastructure management for New York City organizations.",
  },
};

const setupItems = [
  "Management tool installation and configuration",
  "Automated alert configuration",
  "Identity management setup with single email provider federation",
  "Workstation-to-identity binding",
  "Multi-factor authentication enforcement",
  "Custom portal configuration",
];

const monthlyItems = [
  "Automated software patching (security and OS updates only)",
  "Antivirus and malware management",
  "Asset tracking and documentation",
  "Remote device lock and wipe (macOS)",
  "Security policy enforcement",
  "Authentication event logging",
  "Usage analytics",
  "Identity platform administration",
  "Integrated support ticket management",
];

const includedServices = [
  { label: "Identity Management", href: "/services/management/identity" },
  { label: "Endpoint Management", href: "/services/management/endpoint-management" },
];

export default function EssentialsPage() {
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
            <span className="text-white/50">Management Essentials</span>
          </div>
          <p className="text-[11px] font-semibold uppercase tracking-widest text-[#E8500A] mb-5">
            Managed Services
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight max-w-3xl">
            Management Essentials
          </h1>
          <p className="mt-6 text-lg text-white/50 max-w-2xl leading-relaxed">
            Foundation IT management — identity, workstation security, MFA
            enforcement, and integrated ticket management in a single subscription.
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
                The infrastructure controls every organization needs.
              </h2>
              <p className="text-base text-[#1A1A1A]/60 leading-relaxed">
                Management Essentials delivers foundational IT management capabilities
                designed to streamline core infrastructure functions. It establishes
                security frameworks for user identity verification and workstation
                protection, restricts access to sensitive organizational data, and
                enables SSO across commonly used business applications including email,
                cloud storage, communication platforms, and credential management tools.
              </p>
              <p className="text-base text-[#1A1A1A]/60 leading-relaxed">
                RSystems can design and implement automated onboarding pipelines; the
                hands-on onboarding, offboarding, and day-to-day help desk work is handled
                through our Managed Support retainer. Management Essentials itself covers
                the back-end identity and workstation infrastructure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Included */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
          {/* Included services — named, linked to their pages */}
          <div className="mb-14">
            <p className="text-[11px] font-semibold uppercase tracking-widest text-[#E8500A] mb-4">
              Included Services
            </p>
            <h2 className="text-2xl font-bold text-[#1A1A1A] tracking-tight mb-6 max-w-xl">
              What&apos;s in Management Essentials.
            </h2>
            <ul className="space-y-3 max-w-md">
              {includedServices.map((s) => (
                <li key={s.label} className="flex items-start gap-3 text-base text-[#1A1A1A]/70">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#E8500A] flex-shrink-0" />
                  <Link href={s.href} className="group inline-flex items-center gap-1.5 hover:text-[#E8500A] transition-colors">
                    {s.label}
                    <span aria-hidden="true" className="text-[#E8500A] opacity-0 -translate-x-1 transition-all group-hover:opacity-100 group-hover:translate-x-0">→</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

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

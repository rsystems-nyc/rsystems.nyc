import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Managed DNS & Domain Administration NYC | RSystems" },
  description: "Managed domain and DNS administration — registration, DNS management, SPF, DKIM, and DMARC configuration for NYC organizations. Set up right and maintained long-term.",
  alternates: { canonical: "https://rsystems.nyc/services/management/domain/" },
  openGraph: {
    title: "Managed DNS & Domain Administration NYC | RSystems",
    description: "Managed domain and DNS administration — registration, DNS management, SPF, DKIM, and DMARC configuration for NYC organizations. Set up right and maintained long-term.",
    url: "https://rsystems.nyc/services/management/domain/",
  },
  twitter: {
    title: "Managed DNS & Domain Administration NYC | RSystems",
    description: "Managed domain and DNS administration — registration, DNS management, SPF, DKIM, and DMARC configuration for NYC organizations. Set up right and maintained long-term.",
  },
};

const setupItems = [
  "Domain registration migration to Hover",
  "DNS management setup through AWS",
  "SPF, DKIM, and DMARC configuration (single domain)",
];

const monthlyItems = [
  "Domain renewal management",
  "DNS modifications and developer coordination",
  "Email deliverability monitoring with DMARC policy adjustments",
];


export default function DomainManagementPage() {
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
            <span className="text-white/50">Domain Management</span>
          </div>
          <p className="text-[11px] font-semibold uppercase tracking-widest text-[#FE6305] mb-5">
            Managed Services
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight max-w-3xl">
            Domain Management
          </h1>
          <p className="mt-6 text-lg text-white/50 max-w-2xl leading-relaxed">
            Domain registration, DNS administration, and email authentication protocol
            management — the infrastructure layer that protects your domain and ensures
            email deliverability.
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
                Thoughtful administration of your domain and email security.
              </h2>
              <p className="text-base text-[#1A1A1A]/60 leading-relaxed">
                Domain Management provides thoughtful administration and industry-standard
                domain and DNS-based tools to strengthen your email and web security.
                The service establishes secure domain registration and DNS configuration,
                then deploys email authentication protocols — SPF, DKIM, and DMARC —
                to protect your domain from spoofing and improve deliverability.
                The subscription covers a single primary domain; additional domains
                can be added as needed.
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

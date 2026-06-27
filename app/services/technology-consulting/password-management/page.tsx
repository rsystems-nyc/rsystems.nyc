import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import PageEndCTA from "@/app/components/PageEndCTA";

export const metadata: Metadata = {
  title: { absolute: "Enterprise Password Management Consulting | RSystems" },
  description: "RSystems implements organizational password management with shared vaults, SSO integration, and security best practices — so every person in your organization can manage credentials securely.",
  alternates: { canonical: "https://rsystems.nyc/services/technology-consulting/password-management/" },
  openGraph: {
    title: "Enterprise Password Management Consulting | RSystems",
    description: "RSystems implements organizational password management with shared vaults, SSO integration, and security best practices — so every person in your organization can manage credentials securely.",
    url: "https://rsystems.nyc/services/technology-consulting/password-management/",
  },
  twitter: {
    title: "Enterprise Password Management Consulting | RSystems",
    description: "RSystems implements organizational password management with shared vaults, SSO integration, and security best practices — so every person in your organization can manage credentials securely.",
  },
};

const benefits = [
  "Secure storage and retrieval of private credentials",
  "Shared vaults accessible to selected colleagues — executive vaults, departmental credentials, shared service accounts",
  "Security best practices promoted consistently across your organization",
  "Integration with single sign-on (SSO) for streamlined access management — including JumpCloud and Entra",
  "Consistent offboarding — revoking access at SSO level removes platform access automatically",
];

export default function PasswordManagementPage() {
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
            <Link href="/services/technology-consulting" className="hover:text-white/60 transition-colors">Technology Consulting</Link>
            <span>/</span>
            <Link href="/services/technology-consulting/identity-security" className="hover:text-white/60 transition-colors">Identity & Security</Link>
            <span>/</span>
            <span className="text-white/50">Password Management</span>
          </div>
          <p className="text-[11px] font-semibold uppercase tracking-widest text-[#FE6305] mb-5">
            Technology Consulting
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight max-w-3xl">
            Password Management
          </h1>
          <p className="mt-6 text-lg text-white/50 max-w-2xl leading-relaxed">
            Organizational credential management with structured vaults, SSO
            integration, and security best practices enforced consistently
            across every role.
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
                Security requires that everyone have the right tools.
              </h2>
              <p className="text-base text-[#1A1A1A]/60 leading-relaxed">
                Organizational security requires that everyone in your organization
                have the tools for securely managing strong, unique credentials for
                every service they access. A password management solution provides
                secure, protected virtual vaults to store and organize passwords,
                usernames, multi-factor authentication codes, and other sensitive
                information.
              </p>
              <p className="text-base text-[#1A1A1A]/60 leading-relaxed">
                Organizations establish multiple vaults shared with unique sets of
                users — executive vaults, marketing team social media credentials,
                financial vaults for accountants, and shared service account credentials.
                RSystems implements the platform, configures vault structure, and
                integrates with your existing identity infrastructure — whether that&apos;s
                JumpCloud, Entra, or another SSO provider.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-3">
              <p className="text-[11px] font-semibold uppercase tracking-widest text-[#FE6305] pt-1">
                What It Delivers
              </p>
            </div>
            <div className="lg:col-span-7">
              <ul className="space-y-4">
                {benefits.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-base text-[#1A1A1A]/70">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#FE6305] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
          <PageEndCTA pageKey="/services/technology-consulting/password-management" precedingBg="bg-white" />
</main>
  );
}

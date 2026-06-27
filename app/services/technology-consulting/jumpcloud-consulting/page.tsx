import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import PageEndCTA from "@/app/components/PageEndCTA";

export const metadata: Metadata = {
  title: { absolute: "JumpCloud Consulting & Implementation | RSystems NYC" },
  description: "RSystems is a top-tier JumpCloud partner — designing, building, and optimizing JumpCloud environments from greenfield deployments to complex enterprise integrations.",
  alternates: { canonical: "https://rsystems.nyc/services/technology-consulting/jumpcloud-consulting/" },
  openGraph: {
    title: "JumpCloud Consulting & Implementation | RSystems NYC",
    description: "RSystems is a top-tier JumpCloud partner — designing, building, and optimizing JumpCloud environments from greenfield deployments to complex enterprise integrations.",
    url: "https://rsystems.nyc/services/technology-consulting/jumpcloud-consulting/",
  },
  twitter: {
    title: "JumpCloud Consulting & Implementation | RSystems NYC",
    description: "RSystems is a top-tier JumpCloud partner — designing, building, and optimizing JumpCloud environments from greenfield deployments to complex enterprise integrations.",
  },
};

const services = [
  {
    name: "Greenfield Deployments",
    body: "Building a JumpCloud environment from scratch — directory design, device enrollment, SSO federation, MFA enforcement, and policy configuration. We stand up environments that are secure and operationally clean from day one.",
  },
  {
    name: "Migrations",
    body: "Moving from Active Directory, Google Workspace, Okta, or Microsoft Entra to JumpCloud. We handle identity migration, group policy translation, SSO refederation, and device re-enrollment without disrupting your team.",
  },
  {
    name: "Tenant Remediation",
    body: "Inheriting a JumpCloud environment that's grown organically and never been properly configured? We audit, clean, and harden existing tenants — rationalizing groups, enforcing policies, and closing the gaps that accumulate over time.",
  },
  {
    name: "SSO & Integration Build-Outs",
    body: "JumpCloud connects to nearly every SaaS tool your team uses. We map, configure, and test SSO integrations across your application stack — Microsoft 365, Google Workspace, AWS, Zoom, Slack, 1Password, and dozens more.",
  },
  {
    name: "BYOD & MDM",
    body: "Enrolling and managing employee-owned devices without overreach. We design MDM policies that enforce security baselines on BYOD without invading personal data — a balance most organizations get wrong.",
  },
  {
    name: "Device Trust",
    body: "Conditional access based on device compliance state. We configure JumpCloud Device Trust so that only managed, policy-compliant devices can authenticate to your critical applications — a key component of a Zero Trust architecture.",
  },
  {
    name: "Passwordless Authentication",
    body: "Deploying JumpCloud's passwordless authentication stack — passkeys, push MFA, and certificate-based auth — to reduce credential exposure and improve the user experience without trading security for convenience.",
  },
  {
    name: "Ongoing Administration",
    body: "JumpCloud environments require ongoing maintenance — integrations change, new tools get added, users come and go. We provide ongoing consulting support for tenants that need expert-level administration without a full-time hire.",
  },
];

export default function JumpCloudConsultingPage() {
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
          <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-widest text-white/30 mb-10 flex-wrap">
            <Link href="/services" className="hover:text-white/60 transition-colors">Services</Link>
            <span>/</span>
            <Link href="/services/technology-consulting" className="hover:text-white/60 transition-colors">Technology Consulting</Link>
            <span>/</span>
            <Link href="/services/technology-consulting/identity-security" className="hover:text-white/60 transition-colors">Identity & Security</Link>
            <span>/</span>
            <span className="text-white/50">JumpCloud Consulting</span>
          </div>
          <p className="text-[11px] font-semibold uppercase tracking-widest text-[#FE6305] mb-5">
            Technology Consulting
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight max-w-3xl">
            JumpCloud. Done Right.
          </h1>
          <p className="mt-6 text-lg text-white/50 max-w-2xl leading-relaxed">
            RSystems has deep, hands-on JumpCloud expertise built across dozens of
            environments — from initial deployments to complex tenant remediations,
            enterprise integrations, and advanced security configurations most
            consultants won&apos;t touch.
          </p>
        </div>
      </section>

      {/* Why JumpCloud */}
      <section className="bg-[#F4F2EF]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-3">
              <p className="text-[11px] font-semibold uppercase tracking-widest text-[#FE6305] pt-1">
                Why JumpCloud
              </p>
            </div>
            <div className="lg:col-span-7 space-y-5">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A1A] tracking-tight leading-snug">
                One platform for directory, MDM, SSO, and device trust.
              </h2>
              <p className="text-base text-[#1A1A1A]/60 leading-relaxed">
                JumpCloud is the platform of choice for organizations that need unified
                identity, device management, and security without the complexity or cost
                of assembling Microsoft&apos;s full stack. It handles directory services, MDM,
                SSO, MFA, RADIUS, LDAP, and device trust in a single platform — making it
                particularly well-suited for hybrid environments, fast-growing teams, and
                organizations where simplicity and operational leverage matter.
              </p>
              <p className="text-base text-[#1A1A1A]/60 leading-relaxed">
                That breadth is also where most implementations fall short. JumpCloud is
                capable, but capability requires configuration. Getting MFA enforcement,
                SSO federation, MDM policy, and device trust to work together cleanly —
                across Mac, Windows, and Linux, across cloud and on-premises resources —
                takes an implementation partner who knows the platform deeply and has done
                it at scale.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
          <p className="text-[11px] font-semibold uppercase tracking-widest text-[#FE6305] mb-4">
            What We Do
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A1A] tracking-tight mb-12 max-w-xl">
            Full-Spectrum JumpCloud Consulting
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {services.map((service) => (
              <div key={service.name} className="w-full sm:w-[calc(50%-0.5rem)] lg:w-[calc(25%-0.75rem)] border border-[#1A1A1A]/[0.07] rounded-xl bg-white p-7 hover:bg-[#F4F2EF] transition-colors">
                <h3 className="text-[15px] font-semibold text-[#1A1A1A] mb-3 leading-snug">
                  {service.name}
                </h3>
                <p className="text-sm text-[#1A1A1A]/50 leading-relaxed">{service.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Microsoft Integrations */}
      <section className="bg-[#F4F2EF]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-3">
              <p className="text-[11px] font-semibold uppercase tracking-widest text-[#FE6305] pt-1">
                Microsoft Integration
              </p>
            </div>
            <div className="lg:col-span-7 space-y-5">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A1A] tracking-tight leading-snug">
                Deep Microsoft Integration Experience
              </h2>
              <p className="text-base text-[#1A1A1A]/60 leading-relaxed">
                Many organizations use JumpCloud alongside Microsoft 365, and getting the
                two platforms to work together cleanly is where most implementations fall
                short. RSystems has extensive experience federating JumpCloud with Entra
                ID, configuring Conditional Access policies that span both platforms,
                managing hybrid device enrollment across JAMF, JumpCloud, and Intune in
                the same environment, and handling the edge cases that only surface at
                scale.
              </p>
              <p className="text-base text-[#1A1A1A]/60 leading-relaxed">
                We understand both platforms deeply — which means we know when JumpCloud
                is the right answer, when Entra is the right answer, and how to make them
                coexist when the answer is both.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Callout */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
          <Link
            href="/case-studies/directory-modernization"
            className="group block rounded-xl border border-[#1A1A1A]/[0.07] bg-[#F4F2EF] hover:bg-white hover:border-[#FE6305]/20 p-8 lg:p-12 transition-colors"
          >
            <p className="text-[11px] font-semibold uppercase tracking-widest text-[#FE6305] mb-4">
              Case Study
            </p>
            <h3 className="text-xl sm:text-2xl font-bold text-[#1A1A1A] tracking-tight leading-snug mb-4 max-w-2xl group-hover:text-[#FE6305] transition-colors">
              See This In Practice
            </h3>
            <p className="text-base text-[#1A1A1A]/60 leading-relaxed max-w-2xl mb-8">
              Our identity and device management work for a growing law firm
              shows what a complete JumpCloud deployment looks like in a real environment
              — from initial assessment through SSO federation, MDM rollout, endpoint
              security, and password management.
            </p>
            <span className="inline-flex items-center gap-2 text-sm font-medium text-[#FE6305]">
              Read the Case Study
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">
                <path d="M3 13L13 3M13 3H6M13 3V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </Link>
        </div>
      </section>

      {/* Our Approach */}
      <section className="bg-[#F4F2EF]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-3">
              <p className="text-[11px] font-semibold uppercase tracking-widest text-[#FE6305] pt-1">
                Our Approach
              </p>
            </div>
            <div className="lg:col-span-7">
              <div className="border-l-2 border-[#FE6305] pl-6 space-y-4">
                <p className="text-base text-[#1A1A1A]/70 leading-relaxed">
                  We don&apos;t just turn on features — we design environments with intent.
                  Every JumpCloud implementation RSystems delivers is documented, tested,
                  and handed off with your team understanding how it works and why it&apos;s
                  configured the way it is.
                </p>
                <p className="text-base text-[#1A1A1A]/70 leading-relaxed">
                  We&apos;ve cleaned up enough poorly configured tenants to know what corners
                  not to cut.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

          <PageEndCTA pageKey="/services/technology-consulting/jumpcloud-consulting" precedingBg="bg-[#F4F2EF]" />
</main>
  );
}

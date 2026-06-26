import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Identity Security Consulting — SSO, MDM & Device Trust | RSystems" },
  description: "SSO, MDM, device trust, and conditional access across JumpCloud, Entra, and Okta. RSystems designs identity environments for organizations that need it done right.",
  alternates: { canonical: "https://rsystems.nyc/services/technology-consulting/identity-security/" },
  openGraph: {
    title: "Identity Security Consulting — SSO, MDM & Device Trust | RSystems",
    description: "SSO, MDM, device trust, and conditional access across JumpCloud, Entra, and Okta. RSystems designs identity environments for organizations that need it done right.",
    url: "https://rsystems.nyc/services/technology-consulting/identity-security/",
  },
  twitter: {
    title: "Identity Security Consulting — SSO, MDM & Device Trust | RSystems",
    description: "SSO, MDM, device trust, and conditional access across JumpCloud, Entra, and Okta. RSystems designs identity environments for organizations that need it done right.",
  },
};

const services = [
  {
    name: "JumpCloud Consulting",
    href: "/services/technology-consulting/jumpcloud-consulting",
    tagline: "Full-spectrum JumpCloud deployments, migrations, tenant remediations, and enterprise integrations.",
  },
  {
    name: "Entra & Intune Consulting",
    href: "/services/technology-consulting/entra-and-intune-consulting",
    tagline: "Zero Trust identity and modern device management for hybrid Microsoft 365 environments.",
  },
  {
    name: "Okta Consulting",
    href: "/services/technology-consulting/okta-consulting",
    tagline: "Enterprise SSO federation, SCIM provisioning, Workflows automation, and complex app integrations at scale.",
  },
  {
    name: "Password Management",
    href: "/services/technology-consulting/password-management",
    tagline: "Organizational credential management with shared vaults, SSO integration, and security best practices.",
  },
  {
    name: "Cybersecurity Assessment",
    href: "/services/technology-consulting/cybersecurity-assessment",
    tagline: "NIST-based security assessment with gap analysis and a prioritized remediation roadmap.",
  },
];

const appropriateFor = [
  "Organizations managing user accounts manually across disconnected systems without a centralized identity platform",
  "Teams where employee offboarding is inconsistent — access revocation is manual, slow, or incomplete",
  "Organizations that have turned on SSO or MFA but haven't enforced device trust or conditional access policies",
  "Organizations with an existing Okta, JumpCloud, or Entra environment that has grown without a coherent design",
  "Teams where a security audit or incident has exposed gaps in access control or identity governance",
];

const relatedCategories = [
  {
    href: "/services/technology-consulting/strategy",
    name: "Strategy & Advisory",
    description: "Initial assessments, Fractional CTO, and disaster recovery planning.",
  },
  {
    href: "/services/technology-consulting/cloud",
    name: "Cloud",
    description: "Azure architecture, cloud migration, and hybrid infrastructure design.",
  },
  {
    href: "/services/technology-consulting/networking",
    name: "Networking",
    description: "Switching, firewall, and WiFi infrastructure design and deployment.",
  },
];

export default function IdentitySecurityPage() {
  return (
    <main className="flex-1">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#0F1117] text-white">
        <div className="hidden sm:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/4 pointer-events-none select-none">
          <Image src="/assets/RS_Pulsar_Only_Black.svg" alt="" width={700} height={700} className="w-[560px] h-auto opacity-[0.04]" aria-hidden="true" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-widest text-white/30 mb-10 flex-wrap">
            <Link href="/services" className="hover:text-white/60 transition-colors">Services</Link>
            <span>/</span>
            <Link href="/services/technology-consulting" className="hover:text-white/60 transition-colors">Technology Consulting</Link>
            <span>/</span>
            <span className="text-white/50">Identity & Security</span>
          </div>
          <p className="text-[11px] font-semibold uppercase tracking-widest text-[#FE6305] mb-5">Technology Consulting</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight max-w-3xl">Identity Done Right.</h1>
          <p className="mt-6 text-lg text-white/50 max-w-2xl leading-relaxed">
            SSO, MDM, device trust, and conditional access — implemented across JumpCloud, Entra, and Okta for organizations that need identity infrastructure that actually holds.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="bg-[#F4F2EF]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-3">
              <p className="text-[11px] font-semibold uppercase tracking-widest text-[#FE6305] pt-1">Overview</p>
            </div>
            <div className="lg:col-span-7 space-y-5">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A1A] tracking-tight leading-snug">
                The control plane for everything your organization touches.
              </h2>
              <p className="text-base text-[#1A1A1A]/60 leading-relaxed">
                Who can access what, from where, and on what device is the question identity infrastructure exists to answer — and most organizations can&apos;t answer it cleanly. RSystems implements SSO, MDM, device trust, and conditional access across JumpCloud, Entra, and Okta, depending on what your environment actually requires. Not the platform a vendor is pushing this quarter — the right platform for your stack.
              </p>
              <p className="text-base text-[#1A1A1A]/60 leading-relaxed">
                In a hybrid workplace, network perimeters no longer provide meaningful protection. Identity is the perimeter — and getting it right means more than turning on MFA. It means conditional access policies that enforce device compliance before granting access, MDM that extends security controls to every managed endpoint, and SSO that eliminates credential sprawl without trading usability for security.
              </p>
              <p className="text-base text-[#1A1A1A]/60 leading-relaxed">
                We combine deep platform expertise with a structured approach: every implementation is designed, documented, and tested — not provisioned and handed off. Our cybersecurity assessments, based on the NIST framework, connect directly to implementation priorities so the work that follows is grounded in what your environment specifically needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Appropriate For */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-3">
              <p className="text-[11px] font-semibold uppercase tracking-widest text-[#FE6305] pt-1">Appropriate For</p>
            </div>
            <div className="lg:col-span-7">
              <ul className="space-y-5">
                {appropriateFor.map((item) => (
                  <li key={item} className="flex items-start gap-4 text-base text-[#1A1A1A]/70 leading-relaxed">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#FE6305] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach + Services */}
      <section className="bg-[#F4F2EF]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-24">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 mb-20">
            <div className="lg:col-span-3">
              <p className="text-[11px] font-semibold uppercase tracking-widest text-[#FE6305] pt-1">Our Approach</p>
            </div>
            <div className="lg:col-span-7">
              <div className="border-l-2 border-[#FE6305] pl-6 space-y-4">
                <p className="text-base text-[#1A1A1A]/70 leading-relaxed">
                  We don&apos;t pick a platform and fit every organization into it. We assess what your environment requires — existing directory, device mix, application stack, compliance posture — and implement the identity infrastructure that serves those requirements. JumpCloud, Entra, Okta, or a combination: the platform is a means, not the outcome.
                </p>
                <p className="text-base text-[#1A1A1A]/70 leading-relaxed">
                  Every engagement is documented and tested. Policies are configured with intent — not default settings left in place. Offboarding workflows, conditional access rules, and device trust policies are designed as a system, not assembled as individual features. What we deliver, your team can operate.
                </p>
              </div>
            </div>
          </div>

          <p className="text-[11px] font-semibold uppercase tracking-widest text-[#FE6305] mb-8">Services</p>
          <div className="flex flex-wrap justify-center gap-4">
            {services.map((service) => (
              <Link key={service.href} href={service.href} className="group relative flex flex-col w-full md:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.667rem)] border border-[#1A1A1A]/[0.07] rounded-xl bg-[#F4F2EF] p-7 hover:bg-white transition-colors">
                <span className="absolute top-7 right-7 text-[#1A1A1A]/20 group-hover:text-[#FE6305] transition-colors">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 13L13 3M13 3H6M13 3V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </span>
                <h3 className="text-[15px] font-semibold text-[#1A1A1A] leading-snug pr-6 mb-3 group-hover:text-[#FE6305] transition-colors">{service.name}</h3>
                <p className="text-sm text-[#1A1A1A]/50 leading-relaxed">{service.tagline}</p>
              </Link>
            ))}
          </div>

        </div>
      </section>

      {/* Related Categories */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
          <p className="text-[11px] font-semibold uppercase tracking-widest text-[#FE6305] mb-8">Related Practice Areas</p>
          <div className="flex flex-wrap justify-center gap-4">
            {relatedCategories.map((cat) => (
              <Link key={cat.href} href={cat.href} className="group relative flex flex-col w-full sm:w-[calc(33.333%-0.667rem)] border border-[#1A1A1A]/[0.07] rounded-xl bg-white p-6 hover:bg-[#F4F2EF] transition-colors">
                <span className="absolute top-6 right-6 text-[#1A1A1A]/20 group-hover:text-[#FE6305] transition-colors">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 13L13 3M13 3H6M13 3V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </span>
                <h3 className="text-[14px] font-semibold text-[#1A1A1A] pr-6 mb-2 group-hover:text-[#FE6305] transition-colors">{cat.name}</h3>
                <p className="text-sm text-[#1A1A1A]/45 leading-relaxed">{cat.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="bg-[#F4F2EF] border-t border-[#1A1A1A]/[0.06]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-3">
              <p className="text-[11px] font-semibold uppercase tracking-widest text-[#FE6305] pt-1">Case Study</p>
            </div>
            <div className="lg:col-span-7">
              <p className="text-[10px] font-semibold uppercase tracking-widest text-[#1A1A1A]/40 mb-3">Healthcare &amp; Nonprofit</p>
              <h3 className="text-xl font-bold text-[#1A1A1A] tracking-tight leading-snug mb-2">Automating Device Management with Intune</h3>
              <p className="text-sm text-[#1A1A1A]/55 leading-relaxed mb-5">
                A zero-touch Windows Autopilot and Intune provisioning pipeline for Easterseals New Jersey — a 45-location healthcare nonprofit with 775 endpoints — deploying security baselines, application packages, and Wi-Fi credentials across the full fleet.
              </p>
              <Link href="/case-studies/easterseals-nj-intune" className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-widest text-[#FE6305]/70 hover:text-[#FE6305] transition-colors">
                Read Case Study
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                  <path d="M4 1l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

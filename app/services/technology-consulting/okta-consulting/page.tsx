import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Okta Consulting for Enterprise SSO & SCIM | RSystems" },
  description: "RSystems designs and implements Okta environments for scale — enterprise SSO federation, SCIM provisioning, Workflows automation, and complex multi-application integrations.",
  alternates: { canonical: "https://rsystems.nyc/services/technology-consulting/okta-consulting/" },
  openGraph: {
    title: "Okta Consulting for Enterprise SSO & SCIM | RSystems",
    description: "RSystems designs and implements Okta environments for scale — enterprise SSO federation, SCIM provisioning, Workflows automation, and complex multi-application integrations.",
    url: "https://rsystems.nyc/services/technology-consulting/okta-consulting/",
  },
  twitter: {
    title: "Okta Consulting for Enterprise SSO & SCIM | RSystems",
    description: "RSystems designs and implements Okta environments for scale — enterprise SSO federation, SCIM provisioning, Workflows automation, and complex multi-application integrations.",
  },
};

const services = [
  {
    name: "Enterprise SSO Federation",
    body: "Connecting Okta to your entire application stack — SAML, OIDC, and proprietary integrations across cloud and on-premises applications. We map, configure, and test every integration, including the edge cases that most implementations leave broken.",
  },
  {
    name: "SCIM Provisioning & Lifecycle Management",
    body: "Automated provisioning and deprovisioning across every integrated application — user creation, group assignment, attribute mapping, and access revocation tied to your HR system or directory. The foundation of a defensible offboarding process.",
  },
  {
    name: "Okta Workflows Automation",
    body: "Building automation layers on top of your identity infrastructure — onboarding sequences, approval flows, conditional provisioning logic, and integrations that connect Okta to systems outside the standard catalog without custom development.",
  },
  {
    name: "Greenfield Deployments",
    body: "Designing and standing up Okta from scratch — org structure, authorization server configuration, group design, application catalog buildout, and policy architecture. We build environments that scale with your organization, not ones that need to be rebuilt when you grow.",
  },
  {
    name: "Migrations",
    body: "Moving from Active Directory, Ping, Azure AD, or a legacy IdP to Okta. We handle identity migration, group translation, SSO refederation, and cutover sequencing without disrupting the users or applications that depend on the existing environment.",
  },
  {
    name: "M&A & Multi-Tenant Architecture",
    body: "Identity infrastructure for organizations navigating mergers, acquisitions, or complex multi-entity structures. We design Okta environments that can federate across tenants, consolidate acquired orgs, and enforce consistent policy without flattening organizational boundaries that need to stay distinct.",
  },
  {
    name: "Device Trust & Okta FastPass",
    body: "Conditional access based on device compliance state — Okta FastPass, certificate-based authentication, and device assurance policies that restrict access to managed, policy-compliant endpoints. A required component of any serious Zero Trust posture.",
  },
  {
    name: "Ongoing Administration",
    body: "Okta environments require active maintenance — applications change, groups drift, policies need tuning, and new integrations surface regularly. We provide ongoing expert-level administration for organizations that need more than a helpdesk ticket when something breaks.",
  },
];

export default function OktaConsultingPage() {
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
            <span className="text-white/50">Okta Consulting</span>
          </div>
          <p className="text-[11px] font-semibold uppercase tracking-widest text-[#E8500A] mb-5">
            Technology Consulting
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight max-w-3xl">
            Okta. Built for Scale.
          </h1>
          <p className="mt-6 text-lg text-white/50 max-w-2xl leading-relaxed">
            RSystems implements Okta environments designed around the complexity they need to
            handle — enterprise app integrations, automated provisioning flows, and identity
            architecture that holds up when your application stack has hundreds of entries and
            your workforce spans multiple entities.
          </p>
        </div>
      </section>

      {/* Why Okta */}
      <section className="bg-[#F4F2EF]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-3">
              <p className="text-[11px] font-semibold uppercase tracking-widest text-[#E8500A] pt-1">
                Why Okta
              </p>
            </div>
            <div className="lg:col-span-7 space-y-5">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A1A] tracking-tight leading-snug">
                Purpose-built for enterprise-scale identity.
              </h2>
              <p className="text-base text-[#1A1A1A]/60 leading-relaxed">
                Okta is the platform of choice for organizations with large, complex application
                environments — hundreds of SaaS integrations, multiple identity sources, automated
                provisioning requirements, and compliance obligations that demand an auditable record
                of who had access to what and when. Its application catalog, SCIM support, and
                Workflows engine are built specifically for this problem set at this scale.
              </p>
              <p className="text-base text-[#1A1A1A]/60 leading-relaxed">
                That depth is also where most Okta environments fall short. The platform is capable
                of automating the entire user lifecycle — from hire to offboard — across every
                connected application. Most organizations use a fraction of that capability because
                provisioning flows are complex to design, integrations require configuration expertise,
                and the policy architecture that makes it all defensible is rarely obvious from the
                documentation. Getting it right requires an implementation partner who has done it
                before, across varied environments, at scale.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
          <p className="text-[11px] font-semibold uppercase tracking-widest text-[#E8500A] mb-4">
            What We Do
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A1A] tracking-tight mb-12 max-w-xl">
            Full-Spectrum Okta Consulting
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#1A1A1A]/[0.07] border border-[#1A1A1A]/[0.07] rounded-xl overflow-hidden">
            {services.map((service) => (
              <div key={service.name} className="bg-white p-7 hover:bg-[#F4F2EF] transition-colors">
                <h3 className="text-[15px] font-semibold text-[#1A1A1A] mb-3 leading-snug">
                  {service.name}
                </h3>
                <p className="text-sm text-[#1A1A1A]/50 leading-relaxed">{service.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* App Integration at Scale */}
      <section className="bg-[#F4F2EF]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-3">
              <p className="text-[11px] font-semibold uppercase tracking-widest text-[#E8500A] pt-1">
                App Integration
              </p>
            </div>
            <div className="lg:col-span-7 space-y-5">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A1A] tracking-tight leading-snug">
                Where most Okta environments break down.
              </h2>
              <p className="text-base text-[#1A1A1A]/60 leading-relaxed">
                Okta&apos;s application catalog covers thousands of integrations, but coverage and
                correct configuration are different things. Attribute mapping, group-based entitlement
                logic, SCIM schema alignment, and the sequencing of provisioning events are where
                implementations diverge from the documentation — and where access gaps and offboarding
                failures originate.
              </p>
              <p className="text-base text-[#1A1A1A]/60 leading-relaxed">
                RSystems has built and validated integrations across the full range: productivity
                suites, HR platforms, cloud infrastructure, security tooling, and line-of-business
                applications that require custom SAML or OIDC configuration. For applications outside
                the standard catalog, we build and test custom connectors using Okta Workflows and
                the Okta API — no application left on a manual provisioning process.
              </p>
              <p className="text-base text-[#1A1A1A]/60 leading-relaxed">
                The measure of a well-integrated Okta environment is what happens when someone leaves
                the organization on a Friday afternoon. Every application deprovisioned automatically,
                every session terminated, every access record documented — without a checklist, without
                manual intervention, without gaps.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-3">
              <p className="text-[11px] font-semibold uppercase tracking-widest text-[#E8500A] pt-1">
                Our Approach
              </p>
            </div>
            <div className="lg:col-span-7">
              <div className="border-l-2 border-[#E8500A] pl-6 space-y-4">
                <p className="text-base text-[#1A1A1A]/70 leading-relaxed">
                  We design provisioning flows before we configure them. That means mapping your
                  identity sources, application entitlement logic, group structure, and lifecycle
                  events on paper before any policy gets written — so the implementation reflects a
                  deliberate design rather than a series of individual decisions made in the admin console.
                </p>
                <p className="text-base text-[#1A1A1A]/70 leading-relaxed">
                  Every engagement is documented and tested against real scenarios: new hire, role
                  change, leave of absence, termination. If the environment can&apos;t handle those
                  cleanly, it isn&apos;t done.
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
                Let&apos;s talk about your Okta environment.
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

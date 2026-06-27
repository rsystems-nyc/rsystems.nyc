import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import PageEndCTA from "@/app/components/PageEndCTA";

export const metadata: Metadata = {
  title: { absolute: "Entra ID & Intune Consulting | RSystems" },
  description: "RSystems implements Microsoft Entra ID and Intune for hybrid organizations — Zero Trust identity, modern device management, conditional access, and Autopilot enrollment.",
  alternates: { canonical: "https://rsystems.nyc/services/technology-consulting/entra-and-intune-consulting/" },
  openGraph: {
    title: "Entra ID & Intune Consulting | RSystems",
    description: "RSystems implements Microsoft Entra ID and Intune for hybrid organizations — Zero Trust identity, modern device management, conditional access, and Autopilot enrollment.",
    url: "https://rsystems.nyc/services/technology-consulting/entra-and-intune-consulting/",
  },
  twitter: {
    title: "Entra ID & Intune Consulting | RSystems",
    description: "RSystems implements Microsoft Entra ID and Intune for hybrid organizations — Zero Trust identity, modern device management, conditional access, and Autopilot enrollment.",
  },
};

const identityServices = [
  "Identity security assessment and strategic roadmap",
  "Zero Trust implementation and conditional access policy design",
  "Advanced multi-factor authentication enforcement",
  "Restricting administrative rights to appropriate accounts",
  "Migration from on-premises to cloud-native or hybrid deployments",
];

const deviceServices = [
  "Device enrollment and configuration management",
  "Autopilot zero-touch auto-enrollment",
  "Application deployment strategies",
  "Security policy and compliance policy implementation",
  "Conditional access policy development",
  "Platform SSO for Mac and Windows",
];

const approach = [
  { step: "01", title: "Initial Assessment", body: "Environmental and security analysis — understanding where you are relative to Zero Trust and what the gaps actually are." },
  { step: "02", title: "Strategic Planning", body: "Customized implementation plan aligned with your business objectives and your team's operational capacity." },
  { step: "03", title: "Testing & Optimization", body: "Solution validation across workstations before broad rollout — so configuration is right before it reaches the whole fleet." },
  { step: "04", title: "Implementation", body: "Expert configuration with minimal disruption to ongoing operations." },
  { step: "05", title: "Documentation", body: "Knowledge transfer to your internal team so they can manage and extend what we build." },
  { step: "06", title: "Ongoing Support", body: "Continued assistance and optimization as Microsoft's platform evolves." },
];

export default function EntraIntuneConsultingPage() {
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
            <span className="text-white/50">Entra & Intune Consulting</span>
          </div>
          <p className="text-[11px] font-semibold uppercase tracking-widest text-[#FE6305] mb-5">
            Technology Consulting
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight max-w-3xl">
            Entra & Intune Consulting
          </h1>
          <p className="mt-6 text-lg text-white/50 max-w-2xl leading-relaxed">
            Zero Trust identity and modern device management for hybrid Microsoft 365
            environments — beyond defaults, built for the way your organization actually operates.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="bg-[#F4F2EF]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-3">
              <p className="text-[11px] font-semibold uppercase tracking-widest text-[#FE6305] pt-1">
                Overview
              </p>
            </div>
            <div className="lg:col-span-7 space-y-5">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A1A] tracking-tight leading-snug">
                Most Microsoft 365 environments run Entra on near-default settings.
              </h2>
              <p className="text-base text-[#1A1A1A]/60 leading-relaxed">
                In today&apos;s hybrid workplace, managing identities and devices securely
                is more critical than ever. All Microsoft 365 subscribers use Entra, but
                most organizations haven&apos;t moved beyond the defaults — conditional access
                isn&apos;t configured, MFA isn&apos;t enforced consistently, and device compliance
                is largely on the honor system. That&apos;s significant exposure for any
                organization handling sensitive data or subject to regulatory requirements.
              </p>
              <p className="text-base text-[#1A1A1A]/60 leading-relaxed">
                RSystems helps organizations move beyond defaults to implement Zero Trust
                principles — and deploys Intune for device management that actually
                enforces the policies it claims to.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-widest text-[#FE6305] mb-4">
                Identity & Directory Management
              </p>
              <ul className="space-y-3">
                {identityServices.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-[#1A1A1A]/70">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#FE6305] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-widest text-[#FE6305] mb-4">
                Modern Device Management
              </p>
              <ul className="space-y-3">
                {deviceServices.map((item) => (
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

      {/* Approach */}
      <section className="bg-[#F4F2EF]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
          <p className="text-[11px] font-semibold uppercase tracking-widest text-[#FE6305] mb-4">
            Our Approach
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A1A] tracking-tight mb-12 max-w-xl">
            How RSystems approaches Entra and Intune engagements.
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {approach.map((item) => (
              <div key={item.step} className="w-full sm:w-[calc(50%-0.5rem)] border border-[#1A1A1A]/[0.07] rounded-xl bg-[#F4F2EF] p-7 hover:bg-white transition-colors">
                <p className="text-[11px] font-semibold text-[#FE6305] mb-3">{item.step}</p>
                <h3 className="text-[15px] font-semibold text-[#1A1A1A] mb-2 leading-snug">{item.title}</h3>
                <p className="text-sm text-[#1A1A1A]/50 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

          <PageEndCTA pageKey="/services/technology-consulting/entra-and-intune-consulting" precedingBg="bg-[#F4F2EF]" />
</main>
  );
}

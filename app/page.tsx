import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "https://rsystems.nyc/" },
};

const platforms: { name: string; logo: string; url: string; label?: string; imgStyle?: React.CSSProperties }[] = [
  // Row 1 — Top
  { name: "Azure", logo: "/assets/platforms/azure.svg", url: "https://azure.microsoft.com" },
  { name: "Google Workspace", logo: "/assets/platforms/googleworkspace.svg", url: "https://workspace.google.com" },
  { name: "VMware", logo: "/assets/platforms/vmware.svg", url: "https://vmware.com" },
  { name: "JumpCloud", logo: "/assets/platforms/jumpcloud.svg", url: "https://jumpcloud.com", imgStyle: { transform: "scale(1.2)" } },
  { name: "Cisco", logo: "/assets/platforms/cisco.svg", url: "https://cisco.com" },
  { name: "Apple", logo: "/assets/platforms/apple.svg", url: "https://apple.com" },
  { name: "Anthropic", logo: "/assets/platforms/anthropic.svg", url: "https://anthropic.com" },
  // Row 2 — Middle
  { name: "AWS", logo: "/assets/platforms/aws.svg", url: "https://aws.amazon.com" },
  { name: "Office 365", logo: "/assets/platforms/m365.svg", url: "https://microsoft.com/microsoft-365", imgStyle: { transform: "scale(1.25)", filter: "grayscale(1) brightness(0.75)" } },
  { name: "Dell", logo: "/assets/platforms/dell.svg", url: "https://dell.com", imgStyle: { transform: "scale(1.25)" } },
  { name: "Microsoft Entra", logo: "/assets/platforms/entra.svg", url: "https://microsoft.com/security/business/microsoft-entra" },
  { name: "SonicWall", logo: "/assets/platforms/sonicwall.svg", url: "https://sonicwall.com" },
  { name: "Microsoft", logo: "/assets/platforms/microsoft.svg", url: "https://microsoft.com" },
  { name: "OpenAI", logo: "/assets/platforms/openai.svg", url: "https://openai.com" },
  // Row 3 — Bottom
  { name: "Terraform", logo: "/assets/platforms/terraform.svg", url: "https://terraform.io" },
  { name: "1Password", logo: "/assets/platforms/1password.svg", url: "https://1password.com" },
  { name: "HPE", logo: "/assets/platforms/hpe.svg", url: "https://hpe.com" },
  { name: "Okta", logo: "/assets/platforms/okta.svg", url: "https://okta.com" },
  { name: "Juniper", logo: "/assets/platforms/juniper.svg", url: "https://juniper.net" },
  { name: "Synology", logo: "/assets/platforms/synology.svg", url: "https://synology.com" },
  { name: "Gemini", logo: "/assets/platforms/gemini.svg", url: "https://gemini.google.com" },
];

const consultingCategories = [
  {
    href: "/services/technology-consulting/strategy/",
    name: "Strategy & Advisory",
    description:
      "Initial assessments, fractional CTO engagements, and disaster recovery planning — the strategic foundation every organization needs before making major technology decisions.",
  },
  {
    href: "/services/technology-consulting/ai/",
    name: "AI Enablement",
    description:
      "AI readiness assessments, tooling strategy, workflow automation, and organizational adoption planning for teams ready to operationalize AI.",
  },
  {
    href: "/services/technology-consulting/cloud/",
    name: "Cloud",
    description:
      "Azure architecture, cloud storage strategy, and hybrid infrastructure design — connecting your cloud environment to your business goals with minimal disruption.",
  },
  {
    href: "/services/technology-consulting/identity-security/",
    name: "Identity & Security",
    description:
      "SSO, MDM, device trust, and conditional access — implemented across JumpCloud, Entra, and Okta for organizations that need identity done right.",
  },
  {
    href: "/services/technology-consulting/networking/",
    name: "Networking",
    description:
      "Switching, routing, firewall, and WiFi infrastructure designed and engineered for demanding enterprise environments.",
  },
  {
    href: "/services/technology-consulting/compute-storage/",
    name: "Compute & Storage",
    description:
      "Dell PowerEdge, Synology, and VMware — on-premises server and storage infrastructure designed for high availability, virtualization, and demanding workloads.",
  },
];

export default function Home() {
  return (
    <main className="flex-1">

      {/* Hero */}
      <section className="relative min-h-[calc(100vh-9rem)] flex items-start overflow-hidden">
        <div className="hidden sm:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-[20%] pointer-events-none select-none">
          <Image
            src="/assets/RS_Pulsar_Only_Black.svg"
            alt=""
            width={800}
            height={800}
            className="w-[560px] lg:w-[800px] h-auto opacity-[0.04]"
            aria-hidden="true"
          />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-4 pb-12">
          <p className="text-[11px] font-semibold uppercase tracking-widest text-[#E8500A] mb-8">
            Executive IT Leadership &amp; Consulting<br />Bridging the boardroom and the server room.
          </p>
          <h1 className="text-5xl sm:text-6xl lg:text-[4.5rem] font-bold text-[#1A1A1A] leading-[1.05] tracking-tight max-w-4xl">
            Your technology should be a competitive advantage.
          </h1>
          <p className="mt-7 text-lg sm:text-xl text-[#1A1A1A]/55 max-w-2xl leading-relaxed">
            We work alongside your leadership team to build the infrastructure strategy,
            architecture, and roadmap your organization needs — without the overhead of
            a full-time executive hire.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              href="/contact"
              className="inline-block text-sm font-medium bg-[#E8500A] text-white px-6 py-3 rounded hover:bg-[#E8500A]/85 transition-colors"
            >
              Schedule a Conversation
            </Link>
            <Link
              href="/services"
              className="inline-block text-sm font-medium border border-[#1A1A1A]/20 text-[#1A1A1A]/70 px-6 py-3 rounded hover:border-[#1A1A1A]/35 hover:text-[#1A1A1A] transition-colors"
            >
              Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-12 lg:pt-16 pb-6 lg:pb-8">
        <div className="mb-14">
          <p className="text-[11px] font-semibold uppercase tracking-widest text-[#E8500A] mb-4">
            What We Do
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1A1A1A] tracking-tight max-w-xl">
            Senior technical expertise across every layer of your stack.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#1A1A1A]/[0.07] border border-[#1A1A1A]/[0.07] rounded-xl overflow-hidden">
          {consultingCategories.map((cat) => (
            <Link
              key={cat.href}
              href={cat.href}
              className="group relative bg-[#F4F2EF] p-7 flex flex-col hover:bg-white transition-colors"
            >
              <span className="absolute top-7 right-7 text-[#1A1A1A]/20 group-hover:text-[#E8500A] transition-colors">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M3 13L13 3M13 3H6M13 3V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <h3 className="text-[15px] font-semibold text-[#1A1A1A] leading-snug pr-6 mb-3 group-hover:text-[#E8500A] transition-colors">
                {cat.name}
              </h3>
              <p className="text-sm text-[#1A1A1A]/50 leading-relaxed">
                {cat.description}
              </p>
            </Link>
          ))}
        </div>

        <Link
          href="/services/management/"
          className="group mt-4 relative flex flex-col p-7 border border-[#808080]/30 rounded-xl bg-[#F4F2EF] hover:bg-white transition-colors"
        >
          <span className="absolute top-7 right-7 text-[#1A1A1A]/20 group-hover:text-[#E8500A] transition-colors">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 13L13 3M13 3H6M13 3V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
          <h3 className="text-[15px] font-semibold text-[#1A1A1A] leading-snug pr-6 mb-3 group-hover:text-[#E8500A] transition-colors">
            Managed Services
          </h3>
          <p className="text-sm text-[#1A1A1A]/50 leading-relaxed max-w-2xl">
            Ongoing back-end infrastructure administration — identity, workstations, servers, network, backup, and domain management on flexible monthly terms. No help desk. No tier 1.
          </p>
        </Link>
      </section>

      {/* Industries teaser */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-10 lg:pb-12">
        <div className="border border-[#1A1A1A]/[0.07] rounded-xl p-6 lg:p-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-[#F4F2EF]">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-widest text-[#E8500A] mb-1">
              Who We Serve
            </p>
            <p className="text-base font-semibold text-[#1A1A1A]">
              Deep familiarity across 13 verticals — from quantitative trading and post-production to nonprofits, healthcare, and event production.
            </p>
          </div>
          <Link
            href="/industries"
            className="flex-shrink-0 inline-flex items-center gap-2 text-sm font-medium text-[#E8500A] hover:text-[#E8500A]/75 transition-colors"
          >
            Explore industry expertise
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 13L13 3M13 3H6M13 3V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Technology Platforms */}
      <section className="border-t border-[#1A1A1A]/[0.07] pt-10 pb-10 lg:pt-12 lg:pb-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-14 text-center">
            <p className="text-[11px] font-semibold uppercase tracking-widest text-[#E8500A] mb-4">
              Platforms
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A1A] tracking-tight">
              Technology &amp; Platforms We Work With
            </h2>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-7 gap-x-6 gap-y-10 items-center justify-items-center">
            {platforms.map((platform) => (
              <a
                key={platform.name}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                title={platform.name}
                className="group flex flex-col items-center gap-2"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={platform.logo}
                  alt={platform.name}
                  className="grayscale opacity-40 group-hover:opacity-65 transition-opacity"
                  style={{ width: "110px", height: "40px", objectFit: "contain", ...platform.imgStyle }}
                />
                {platform.label && (
                  <span className="text-[10px] font-semibold uppercase tracking-widest text-[#1A1A1A]/40 group-hover:text-[#1A1A1A]/60 transition-colors">
                    {platform.label}
                  </span>
                )}
              </a>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}

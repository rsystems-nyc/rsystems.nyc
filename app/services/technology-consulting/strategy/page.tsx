import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "IT Strategy & Advisory | RSystems NYC" },
  description: "Initial IT assessments, fractional CTO engagements, and disaster recovery planning — the strategic foundation every organization needs before major technology decisions.",
  alternates: { canonical: "https://rsystems.nyc/services/technology-consulting/strategy/" },
  openGraph: {
    title: "IT Strategy & Advisory | RSystems NYC",
    description: "Initial IT assessments, fractional CTO engagements, and disaster recovery planning — the strategic foundation every organization needs before major technology decisions.",
    url: "https://rsystems.nyc/services/technology-consulting/strategy/",
  },
  twitter: {
    title: "IT Strategy & Advisory | RSystems NYC",
    description: "Initial IT assessments, fractional CTO engagements, and disaster recovery planning — the strategic foundation every organization needs before major technology decisions.",
  },
};

const services = [
  {
    name: "Initial Assessment",
    href: "/services/technology-consulting/initial-assessment",
    tagline: "A structured audit of your current technology and workflows — the foundation of every RSystems engagement.",
  },
  {
    name: "Fractional CTO",
    href: "/services/technology-consulting/fractional-cto",
    tagline: "Fractional CTO/CIO leadership — technology strategy, roadmaps, and C-suite advisory without the full-time overhead.",
  },
  {
    name: "Disaster Recovery Plan Development",
    href: "/services/technology-consulting/disaster-recovery-plan-development",
    tagline: "Structured DRP with RTO/RPO definitions, step-by-step recovery procedures, and tested backup strategies.",
  },
];

const appropriateFor = [
  "Organizations making significant infrastructure investments without a clear strategic framework",
  "Organizations that lack senior technical leadership at the C-suite level",
  "Teams that have never formally assessed their technology environment against best practices",
  "Organizations preparing for rapid growth, a merger, or an acquisition",
  "Leadership dealing with gaps in resilience planning exposed by a cybersecurity incident or near-miss",
];

const relatedCategories = [
  {
    href: "/services/technology-consulting/cloud",
    name: "Cloud",
    description: "Azure architecture, cloud migration, and hybrid infrastructure design.",
  },
  {
    href: "/services/technology-consulting/identity-security",
    name: "Identity & Security",
    description: "JumpCloud, Entra, Intune, and NIST-based cybersecurity assessment.",
  },
  {
    href: "/services/technology-consulting/networking",
    name: "Networking",
    description: "Switching, firewall, and WiFi infrastructure design and deployment.",
  },
];

export default function StrategyAdvisoryPage() {
  return (
    <main className="flex-1">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#0F1117] text-white">
        <div className="hidden sm:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/4 pointer-events-none select-none">
          <Image src="/assets/RS_Pulsar_Only_Black.svg" alt="" width={700} height={700} className="w-[560px] h-auto opacity-[0.04]" aria-hidden="true" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-widest text-white/30 mb-10 flex-wrap">
            <Link href="/services" className="hover:text-white/60 transition-colors">Services</Link>
            <span>/</span>
            <Link href="/services/technology-consulting" className="hover:text-white/60 transition-colors">Technology Consulting</Link>
            <span>/</span>
            <span className="text-white/50">Strategy & Advisory</span>
          </div>
          <p className="text-[11px] font-semibold uppercase tracking-widest text-[#FE6305] mb-5">Technology Consulting</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight max-w-3xl">Strategy & Advisory</h1>
          <p className="mt-6 text-lg text-white/50 max-w-2xl leading-relaxed">
            The strategic foundation every organization needs before making major technology decisions — assessments, fractional executive leadership, and resilience planning.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="bg-[#F4F2EF]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-3">
              <p className="text-[11px] font-semibold uppercase tracking-widest text-[#FE6305] pt-1">Overview</p>
            </div>
            <div className="lg:col-span-7 space-y-5">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A1A] tracking-tight leading-snug">
                Strategy comes before investment.
              </h2>
              <p className="text-base text-[#1A1A1A]/60 leading-relaxed">
                Before any major infrastructure decision — a new datacenter, a cloud migration, a security overhaul — organizations need a clear picture of where they are and where they&apos;re going. Without that foundation, even technically sound implementations produce misaligned outcomes. The tools get deployed, but the problems don&apos;t get solved.
              </p>
              <p className="text-base text-[#1A1A1A]/60 leading-relaxed">
                Strategy &amp; Advisory engagements are typically the entry point for new RSystems clients. We assess before we recommend. The Initial Assessment gives us the full picture of your current environment — hardware, software, credentials, policies, and pain points. From there, RSystems can identify what&apos;s working, what&apos;s at risk, and what&apos;s worth investing in. The result is a strategic roadmap grounded in your actual environment, not a generic model.
              </p>
              <p className="text-base text-[#1A1A1A]/60 leading-relaxed">
                For organizations that need ongoing strategic leadership, RSystems provides fractional CTO and CISO services — a senior technical partner who can represent technology at the C-suite level, develop multi-year roadmaps, and make decisions alongside your leadership team. The engagement scales to what the organization actually needs, without the overhead or commitment of a full-time executive hire.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Appropriate For */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
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
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 lg:py-16">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 mb-20">
            <div className="lg:col-span-3">
              <p className="text-[11px] font-semibold uppercase tracking-widest text-[#FE6305] pt-1">Our Approach</p>
            </div>
            <div className="lg:col-span-7">
              <div className="border-l-2 border-[#FE6305] pl-6 space-y-4">
                <p className="text-base text-[#1A1A1A]/70 leading-relaxed">
                  RSystems starts every engagement with a structured assessment — we don&apos;t recommend solutions before we understand the environment. The Initial Assessment produces a full picture of your hardware, software, credentials, policies, and active pain points. From there, recommendations are grounded in what your organization actually needs, not a generic roadmap applied from the outside.
                </p>
                <p className="text-base text-[#1A1A1A]/70 leading-relaxed">
                  For organizations that need ongoing strategic leadership, our Fractional CTO engagements provide C-suite level technical judgment without the cost or organizational weight of a full-time executive hire. We develop technology roadmaps, represent technology in leadership conversations, and serve as the strategic layer above your internal IT team or MSP partner — available as the engagement requires.
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
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
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
    </main>
  );
}

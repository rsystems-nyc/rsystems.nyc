import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Professional WiFi Assessment & Survey NYC | RSystems" },
  description: "RSystems conducts on-site WiFi assessments — coverage surveys, performance documentation, equipment review, and data-backed recommendations for enterprise environments.",
  alternates: { canonical: "https://rsystems.nyc/services/technology-consulting/wifi-assessment/" },
  openGraph: {
    title: "Professional WiFi Assessment & Survey NYC | RSystems",
    description: "RSystems conducts on-site WiFi assessments — coverage surveys, performance documentation, equipment review, and data-backed recommendations for enterprise environments.",
    url: "https://rsystems.nyc/services/technology-consulting/wifi-assessment/",
  },
  twitter: {
    title: "Professional WiFi Assessment & Survey NYC | RSystems",
    description: "RSystems conducts on-site WiFi assessments — coverage surveys, performance documentation, equipment review, and data-backed recommendations for enterprise environments.",
  },
};

const scopeItems = [
  "Review existing network topology documentation",
  "Perform a comprehensive WiFi coverage survey on site",
  "Evaluate access point placement and signal coverage",
  "Identify obstructions, interference sources, and disruptive building materials",
  "Review system configuration and channel utilization",
  "Document anecdotal reports related to network reliability",
  "Deliver a report with data, diagnosis, and prioritized recommendations",
];

export default function WiFiAssessmentPage() {
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
            <Link href="/services/technology-consulting/networking" className="hover:text-white/60 transition-colors">Networking</Link>
            <span>/</span>
            <span className="text-white/50">WiFi Assessment</span>
          </div>
          <p className="text-[11px] font-semibold uppercase tracking-widest text-[#FE6305] mb-5">
            Technology Consulting
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight max-w-3xl">
            WiFi Assessment
          </h1>
          <p className="mt-6 text-lg text-white/50 max-w-2xl leading-relaxed">
            A professional wireless evaluation — coverage survey, performance
            documentation, and a report with data-backed recommendations for
            improving reliability and eliminating dead zones.
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
                Connectivity problems rank among the top employee complaints.
              </h2>
              <p className="text-base text-[#1A1A1A]/60 leading-relaxed">
                A strong, fast, reliable wireless network is essential for any business.
                Poor WiFi performance frustrates staff, reduces productivity, and creates
                unnecessary operational friction. A professional assessment documents
                performance metrics and examines equipment and environmental factors
                affecting network strength — providing the data needed to make informed
                decisions rather than guesses about access point placement and configuration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Assessment Scope */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-3">
              <p className="text-[11px] font-semibold uppercase tracking-widest text-[#FE6305] pt-1">
                Assessment Scope
              </p>
            </div>
            <div className="lg:col-span-7">
              <ul className="space-y-4">
                {scopeItems.map((item) => (
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

      {/* Case Study Callout */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 lg:py-12">
          <div className="border-t border-[#1A1A1A]/[0.08] divide-y divide-[#1A1A1A]/[0.06]">
            <Link
              href="/case-studies/redundancy-by-design"
              className="group flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-12 py-8 px-4 sm:px-6 lg:px-8 -mx-4 sm:-mx-6 lg:-mx-8 rounded-xl hover:bg-[#F4F2EF] transition-colors"
            >
              <div className="flex-1 min-w-0">
                <p className="text-[11px] font-semibold uppercase tracking-widest text-[#FE6305] mb-2">Case Study</p>
                <h3 className="text-[15px] font-semibold text-[#1A1A1A] mb-2 leading-snug group-hover:text-[#FE6305] transition-colors">See This In Practice</h3>
                <p className="text-sm text-[#1A1A1A]/60 leading-relaxed">This work is documented in our Redundancy by Design case study — a zero-compromise infrastructure covering networking, wireless, compute, and storage, with redundancy as a first-order constraint.</p>
              </div>
              <span className="flex-shrink-0 text-sm font-semibold text-[#FE6305] inline-flex items-center gap-1.5 whitespace-nowrap">
                Read the Case Study
                <span aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">→</span>
              </span>
            </Link>
            <Link
              href="/case-studies/fost-fest"
              className="group flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-12 py-8 px-4 sm:px-6 lg:px-8 -mx-4 sm:-mx-6 lg:-mx-8 rounded-xl hover:bg-[#F4F2EF] transition-colors"
            >
              <div className="flex-1 min-w-0">
                <p className="text-[11px] font-semibold uppercase tracking-widest text-[#FE6305] mb-2">Case Study</p>
                <h3 className="text-[15px] font-semibold text-[#1A1A1A] mb-2 leading-snug group-hover:text-[#FE6305] transition-colors">Wireless Under Festival Load</h3>
                <p className="text-sm text-[#1A1A1A]/60 leading-relaxed">See how RSystems deployed and coordinated Ruckus enterprise wireless for FoST Fest — designed for overlapping coverage, managed by a local controller, and stress-tested when a thousand devices hit a single auditorium at once.</p>
              </div>
              <span className="flex-shrink-0 text-sm font-semibold text-[#FE6305] inline-flex items-center gap-1.5 whitespace-nowrap">
                Read the Case Study
                <span aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">→</span>
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Related Case Study */}
      <section className="bg-white border-t border-[#1A1A1A]/[0.07]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-16 items-center">
            <div className="lg:col-span-3">
              <p className="text-[11px] font-semibold uppercase tracking-widest text-[#FE6305]">
                Case Study
              </p>
            </div>
            <div className="lg:col-span-7 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <p className="text-base font-semibold text-[#1A1A1A] leading-snug mb-1">
                  The Night $4.6 Million Moved Over Wi-Fi
                </p>
                <p className="text-sm text-[#1A1A1A]/50 leading-relaxed">
                  High-density Ruckus wireless for the charity:water Gala at the Metropolitan Museum of Art — 500 devices, zero issues, $4.59 million raised.
                </p>
              </div>
              <Link
                href="/case-studies/charity-water-gala"
                className="flex-shrink-0 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-widest text-[#FE6305] hover:text-[#FE6305]/70 transition-colors"
              >
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

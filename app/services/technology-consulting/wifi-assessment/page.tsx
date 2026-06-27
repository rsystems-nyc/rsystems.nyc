import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import PageEndCTA from "@/app/components/PageEndCTA";

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
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
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
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
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
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
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


          <PageEndCTA pageKey="/services/technology-consulting/wifi-assessment" precedingBg="bg-white" />
</main>
  );
}

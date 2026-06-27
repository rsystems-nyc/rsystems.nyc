import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { industriesData } from "@/app/lib/industries-data";

export const metadata: Metadata = {
  title: { absolute: "Industry Expertise | RSystems NYC" },
  alternates: { canonical: "https://rsystems.nyc/industries" },
  description:
    "RSystems brings deep technical familiarity to verticals with unique infrastructure challenges — from post-production and quantitative trading to nonprofits, healthcare, education, and event production.",
  openGraph: {
    title: "Industry Expertise | RSystems NYC",
    description:
      "RSystems brings deep technical familiarity to verticals with unique infrastructure challenges — from post-production and quantitative trading to nonprofits, healthcare, education, and event production.",
    type: "website",
    url: "https://rsystems.nyc/industries",
  },
  twitter: {
    card: "summary_large_image",
    title: "Industry Expertise | RSystems NYC",
    description:
      "RSystems brings deep technical familiarity to verticals with unique infrastructure challenges — from post-production and quantitative trading to nonprofits, healthcare, education, and event production.",
  },
};

const indexSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "RSystems",
  url: "https://rsystems.nyc/industries",
  description:
    "RSystems brings senior technical experience to organizations across verticals that need a partner who already understands the territory.",
  areaServed: { "@type": "City", name: "New York City" },
  knowsAbout: industriesData.map((i) => i.cardName),
};

export default function IndustriesIndexPage() {
  return (
    <main className="flex-1">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(indexSchema) }}
      />

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
          <p className="text-[11px] font-semibold uppercase tracking-widest text-[#FE6305] mb-5">
            Who We Serve
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight max-w-3xl">
            Industry Expertise
          </h1>
          <p className="mt-4 text-lg text-white/50 max-w-2xl leading-relaxed">
            Deep familiarity with the verticals we serve most
          </p>
        </div>
      </section>

      {/* Lead */}
      <section className="bg-[#F4F2EF]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-3">
              <p className="text-[11px] font-semibold uppercase tracking-widest text-[#FE6305] pt-1">
                Our Approach
              </p>
            </div>
            <div className="lg:col-span-7 space-y-5">
              <p className="text-base text-[#1A1A1A]/70 leading-relaxed">
                Every industry has its own infrastructure logic — the software that runs it, the compliance frameworks that govern it, and the workflows that can&apos;t afford to break. RSystems brings senior technical experience to organizations that need a partner who already understands the territory.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Grid */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
          <div className="flex flex-wrap justify-center gap-4">
            {industriesData.map((industry) => (
              <Link
                key={industry.slug}
                href={`/industries/${industry.slug}`}
                className="group relative flex flex-col w-full md:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.667rem)] border border-[#1A1A1A]/[0.07] rounded-xl bg-white p-7 hover:bg-[#F4F2EF] transition-colors"
              >
                <span className="absolute top-7 right-7 text-[#1A1A1A]/20 group-hover:text-[#FE6305] transition-colors">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path
                      d="M3 13L13 3M13 3H6M13 3V10"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <h2 className="text-[15px] font-semibold text-[#1A1A1A] leading-snug pr-6 mb-3 group-hover:text-[#FE6305] transition-colors">
                  {industry.cardName}
                </h2>
                <p className="text-sm text-[#1A1A1A]/50 leading-relaxed">
                  {industry.cardDescriptor}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0F1117]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-3">
              <p className="text-[11px] font-semibold uppercase tracking-widest text-[#FE6305] pt-1">
                Get Started
              </p>
            </div>
            <div className="lg:col-span-7 space-y-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-snug">
                Don&apos;t see your industry?
              </h2>
              <p className="text-base text-white/60 leading-relaxed">
                These are the verticals we serve most often — but the infrastructure challenges organizations face tend to overlap regardless of sector. If your environment is demanding, regulated, or unusually complex, we&apos;d like to hear about it.
              </p>
              <Link
                href="/contact"
                className="inline-block text-sm font-medium bg-[#FE6305] text-white px-6 py-3 rounded hover:bg-[#FE6305]/85 transition-colors"
              >
                Schedule a Conversation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

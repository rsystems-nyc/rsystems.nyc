import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { industriesData } from "@/app/lib/industries-data";
import { caseStudiesData } from "@/app/lib/case-studies-data";

export const metadata: Metadata = {
  title: { absolute: "Our Work — RSystems NYC" },
  description:
    "Fifteen years of infrastructure engagements across demanding verticals. Case studies and industry expertise from RSystems.",
  alternates: { canonical: "https://rsystems.nyc/our-work" },
  openGraph: {
    title: "Our Work — RSystems NYC",
    description:
      "Fifteen years of infrastructure engagements across demanding verticals. Case studies and industry expertise from RSystems.",
    url: "https://rsystems.nyc/our-work",
  },
  twitter: {
    title: "Our Work — RSystems NYC",
    description:
      "Fifteen years of infrastructure engagements across demanding verticals. Case studies and industry expertise from RSystems.",
  },
};

const sections = [
  {
    title: "Industries",
    body: "RSystems has developed deep familiarity with verticals that have distinctive infrastructure demands — post-production, quantitative finance, nonprofits, live events, education, and healthcare. That context shapes every engagement.",
    href: "/industries",
    tag: `${industriesData.length} industries`,
    cta: "View Industries",
  },
  {
    title: "Case Studies",
    body: "Documented engagements from the field — each representing a distinct infrastructure challenge, a clear technical approach, and a measurable outcome. From campus-wide wireless to enterprise identity migrations.",
    href: "/case-studies",
    tag: `${caseStudiesData.length} case studies`,
    cta: "Browse Case Studies",
  },
  {
    title: "Clients",
    body: "A selection of the organizations we've worked with over fifteen years — across finance, media, the arts, nonprofits, healthcare, and more — from early-stage startups to multinational companies.",
    href: "/our-work/clients",
    tag: "Selected clients",
    cta: "View Clients",
  },
];

export default function OurWorkPage() {
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
          <p className="text-[11px] font-semibold uppercase tracking-widest text-[#FE6305] mb-5">
            RSystems
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight max-w-3xl">
            Fifteen years of infrastructure that holds.
          </h1>
          <p className="mt-6 text-lg text-white/50 max-w-2xl leading-relaxed">
            We work across demanding environments — post-production, finance, nonprofits, live events, healthcare. What the clients have in common is executive-level technical expectations and infrastructure that has to perform.
          </p>
        </div>
      </section>

      {/* Sections */}
      <section className="bg-[#F4F2EF]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
          <div className="flex flex-wrap justify-center gap-6">
            {sections.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="group relative w-full md:w-[calc(50%-0.75rem)] bg-white border border-[#1A1A1A]/[0.07] rounded-xl p-8 flex flex-col hover:shadow-md transition-shadow"
              >
                <span className="absolute top-8 right-8 text-[#1A1A1A]/20 group-hover:text-[#FE6305] transition-colors">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M3 13L13 3M13 3H6M13 3V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <span className="inline-block text-[10px] font-semibold uppercase tracking-widest text-[#FE6305] mb-4">
                  {s.tag}
                </span>
                <h2 className="text-xl font-bold text-[#1A1A1A] mb-3 group-hover:text-[#FE6305] transition-colors pr-6">
                  {s.title}
                </h2>
                <p className="text-sm text-[#1A1A1A]/55 leading-relaxed mb-6 flex-1">
                  {s.body}
                </p>
                <span className="text-sm font-semibold text-[#FE6305] group-hover:underline">
                  {s.cta} →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0F1117] text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
          <div className="max-w-2xl">
            <p className="text-[11px] font-semibold uppercase tracking-widest text-[#FE6305] mb-5">
              Work With Us
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold leading-tight tracking-tight mb-6">
              Ready to talk through your environment?
            </h2>
            <p className="text-base text-white/50 leading-relaxed mb-8">
              Engagements start with a conversation about where you are and where you're trying to get. No pitch deck — just a senior technical perspective on your situation.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-[#FE6305] text-white text-sm font-semibold px-6 py-3 rounded hover:bg-[#FE6305]/85 transition-colors"
            >
              Schedule a Conversation
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}

import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { industriesData } from "@/app/lib/industries-data";
import JsonLd from "@/app/components/JsonLd";
import { breadcrumbSchema } from "@/app/lib/seo";

const SITE_URL = "https://rsystems.nyc";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return industriesData.map((industry) => ({ slug: industry.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const industry = industriesData.find((i) => i.slug === slug);
  if (!industry) return {};
  return {
    title: { absolute: industry.seoTitle },
    description: industry.seoDescription,
    alternates: { canonical: `${SITE_URL}/industries/${slug}` },
    openGraph: {
      title: industry.seoTitle,
      description: industry.seoDescription,
      type: "website",
      url: `${SITE_URL}/industries/${slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: industry.seoTitle,
      description: industry.seoDescription,
    },
  };
}

export default async function IndustryPage({ params }: Props) {
  const { slug } = await params;
  const industry = industriesData.find((i) => i.slug === slug);
  if (!industry) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "RSystems",
    url: `${SITE_URL}/industries/${slug}`,
    description: industry.seoDescription,
    areaServed: { "@type": "City", name: "New York City" },
    telephone: "+1-917-765-4968",
    address: {
      "@type": "PostalAddress",
      streetAddress: "395 S End Ave",
      addressLocality: "New York",
      addressRegion: "NY",
      postalCode: "10280",
      addressCountry: "US",
    },
    knowsAbout: industry.jsonLdKnowsAbout,
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      telephone: "+1-917-765-4968",
      url: `${SITE_URL}/contact`,
    },
  };

  const publishedRelatedWork = industry.relatedWork?.filter((rw) => !rw.placeholder) ?? [];
  const placeholderRelatedWork = industry.relatedWork?.filter((rw) => rw.placeholder) ?? [];

  const breadcrumbs = breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Industries", path: "/industries" },
    { name: industry.cardName, path: `/industries/${slug}` },
  ]);

  return (
    <main className="flex-1">
      <JsonLd data={breadcrumbs} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
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
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <Link
            href="/industries"
            className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-widest text-white/30 hover:text-white/60 transition-colors mb-10"
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
              <path
                d="M8 1L3 6L8 11"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Industry Expertise
          </Link>
          <p className="text-[11px] font-semibold uppercase tracking-widest text-[#FE6305] mb-5">
            Who We Serve
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight max-w-3xl">
            {industry.headline}
          </h1>
          <p className="mt-4 text-lg text-white/50 max-w-2xl leading-relaxed">
            {industry.subtitle}
          </p>
        </div>
      </section>

      {/* Lead */}
      <section className="bg-[#F4F2EF]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-3">
              <p className="text-[11px] font-semibold uppercase tracking-widest text-[#FE6305] pt-1">
                Overview
              </p>
            </div>
            <div className="lg:col-span-7">
              <p className="text-base text-[#1A1A1A]/70 leading-relaxed">
                {industry.lead}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      {industry.sections.map((section, i) => (
        <section
          key={i}
          className={i % 2 === 0 ? "bg-white" : "bg-[#F4F2EF]"}
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
              <div className="lg:col-span-3">
                <p className="text-[11px] font-semibold uppercase tracking-widest text-[#FE6305] pt-1">
                  {section.eyebrow}
                </p>
              </div>
              <div className="lg:col-span-7 space-y-5">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A1A] tracking-tight leading-snug">
                  {section.heading}
                </h2>
                {section.paragraphs.map((para, j) => (
                  <p key={j} className="text-base text-[#1A1A1A]/60 leading-relaxed">
                    {para}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* What We Bring */}
      <section className={industry.sections.length % 2 === 0 ? "bg-white" : "bg-[#F4F2EF]"}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-3">
              <p className="text-[11px] font-semibold uppercase tracking-widest text-[#FE6305] pt-1">
                What We Bring
              </p>
            </div>
            <div className="lg:col-span-7">
              <ul className="space-y-5">
                {industry.whatWeBring.map((item, i) => (
                  <li key={i} className="flex items-start gap-4 text-base text-[#1A1A1A]/70 leading-relaxed">
                    <span className="mt-[0.45rem] w-1.5 h-1.5 rounded-full bg-[#FE6305] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Platforms & Tools */}
      <section className={industry.sections.length % 2 !== 0 ? "bg-white" : "bg-[#F4F2EF]"}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-3">
              <p className="text-[11px] font-semibold uppercase tracking-widest text-[#FE6305] pt-1">
                Platforms &amp; Tools We Know
              </p>
            </div>
            <div className="lg:col-span-7">
              <p className="text-base text-[#1A1A1A]/60 leading-relaxed">
                {industry.platforms.join(" · ")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Work */}
      {(publishedRelatedWork.length > 0 || placeholderRelatedWork.length > 0) && (
        <section className="bg-[#F4F2EF]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
              <div className="lg:col-span-3">
                <p className="text-[11px] font-semibold uppercase tracking-widest text-[#FE6305] pt-1">
                  Related Work
                </p>
              </div>
              <div className="lg:col-span-7 space-y-4">
                {publishedRelatedWork.map((rw) => (
                  <Link
                    key={rw.href}
                    href={rw.href}
                    className="group flex items-center gap-3 text-base font-medium text-[#1A1A1A] hover:text-[#FE6305] transition-colors"
                  >
                    <span className="text-[#FE6305] group-hover:translate-x-0.5 transition-transform">→</span>
                    {rw.label}
                  </Link>
                ))}
                {/* Placeholder links — published when case study goes live */}
                {placeholderRelatedWork.map((rw) => (
                  <span
                    key={rw.href}
                    className="flex items-center gap-3 text-base font-medium text-[#1A1A1A]/30 cursor-default"
                    aria-disabled="true"
                  >
                    <span className="text-[#FE6305]/30">→</span>
                    {rw.label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

    </main>
  );
}

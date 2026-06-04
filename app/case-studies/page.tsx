import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { caseStudiesData } from "@/app/lib/case-studies-data";

export const metadata: Metadata = {
  title: "Case Studies — RSystems",
  description:
    "Infrastructure, network, and identity engagements across architecture, media, culture, manufacturing, and enterprise — from RSystems.",
};

export default function CaseStudiesPage() {
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
          <p className="text-[11px] font-semibold uppercase tracking-widest text-[#E8500A] mb-5">
            RSystems
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight max-w-3xl">
            Case Studies
          </h1>
          <p className="mt-6 text-lg text-white/50 max-w-2xl leading-relaxed">
            Infrastructure, network, and identity work across architecture, media,
            culture, manufacturing, and enterprise — delivered at a level most firms
            don&apos;t offer.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="bg-[#F4F2EF]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {caseStudiesData.map((cs) => (
              <Link
                key={cs.slug}
                href={`/case-studies/${cs.slug}`}
                className="group flex flex-col bg-white rounded-xl overflow-hidden border border-[#1A1A1A]/[0.07] hover:border-[#E8500A]/20 transition-colors"
              >
                {cs.featuredImagePair ? (
                  <div className="relative w-full overflow-hidden grid grid-cols-2 gap-px bg-[#1A1A1A]" style={{ aspectRatio: "16/9" }}>
                    <div className="relative overflow-hidden">
                      <Image
                        src={cs.featuredImagePair.before.src}
                        alt={cs.featuredImagePair.before.alt}
                        fill
                        className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
                      />
                      <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-black/60 to-transparent" />
                      <span className="absolute bottom-2 left-3 text-[10px] font-semibold uppercase tracking-widest text-white">Before</span>
                    </div>
                    <div className="relative overflow-hidden">
                      <Image
                        src={cs.featuredImagePair.after.src}
                        alt={cs.featuredImagePair.after.alt}
                        fill
                        className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
                      />
                      <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-black/60 to-transparent" />
                      <span className="absolute bottom-2 left-3 text-[10px] font-semibold uppercase tracking-widest text-white">After</span>
                    </div>
                  </div>
                ) : cs.featuredImage ? (
                  <div className="relative w-full overflow-hidden" style={{ aspectRatio: "16/9" }}>
                    <Image
                      src={cs.featuredImage.src}
                      alt={cs.featuredImage.alt}
                      fill
                      className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
                    />
                  </div>
                ) : null}
                <div className="flex flex-col flex-1 p-7">
                  <p className="text-[10px] font-semibold uppercase tracking-widest text-[#E8500A] mb-3">
                    {cs.industry}
                  </p>
                  <h2 className="text-xl font-bold text-[#1A1A1A] tracking-tight leading-snug mb-1 group-hover:text-[#E8500A] transition-colors">
                    {cs.title}
                  </h2>
                  <p className="text-[13px] text-[#1A1A1A]/40 mb-4">{cs.client}</p>
                  <p className="text-sm text-[#1A1A1A]/55 leading-relaxed mb-5 flex-1">
                    {cs.summary}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {cs.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] text-[#1A1A1A]/40 border border-[#1A1A1A]/10 px-2.5 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-widest text-[#E8500A]/60 group-hover:text-[#E8500A] transition-colors">
                    Read Case Study
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                      <path
                        d="M4 1l5 5-5 5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}

"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { caseStudiesData } from "@/app/lib/case-studies-data";

const TAG_ORDER = [
  "Networking",
  "Cloud & Infrastructure",
  "Identity",
  "Security",
  "MDM",
  "Microsoft",
];

function getAllTags(): string[] {
  const used = new Set(caseStudiesData.flatMap((cs) => cs.tags));
  return [
    ...TAG_ORDER.filter((t) => used.has(t)),
    ...[...used].filter((t) => !TAG_ORDER.includes(t)),
  ];
}

export default function CaseStudiesFilter() {
  const tags = getAllTags();
  const [active, setActive] = useState<string>("All");

  const filtered =
    active === "All"
      ? caseStudiesData
      : caseStudiesData.filter((cs) => cs.tags.includes(active));

  return (
    <section className="bg-[#F4F2EF]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 lg:py-16">

        {/* Filter pills */}
        <div className="flex flex-wrap gap-2 mb-10">
          {["All", ...tags].map((tag) => (
            <button
              key={tag}
              onClick={() => setActive(tag)}
              className={`px-4 py-1.5 rounded-full text-[11px] font-semibold uppercase tracking-widest border transition-colors ${
                active === tag
                  ? "bg-[#FE6305] text-white border-[#FE6305]"
                  : "bg-[#F4F2EF] text-[#1A1A1A] border-[#1A1A1A]/20 hover:border-[#FE6305]/40"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {filtered.map((cs) => (
            <Link
              key={cs.slug}
              href={`/case-studies/${cs.slug}`}
              className="group flex flex-col bg-white rounded-xl overflow-hidden border border-[#1A1A1A]/[0.07] hover:border-[#FE6305]/20 transition-colors"
            >
              {cs.featuredImagePair ? (
                <div
                  className="relative w-full overflow-hidden grid grid-cols-2 gap-px bg-[#1A1A1A]"
                  style={{ aspectRatio: "16/9" }}
                >
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
                    style={{ objectPosition: cs.featuredImage.position }}
                  />
                </div>
              ) : null}

              <div className="flex flex-col flex-1 p-7">
                <p className="text-[10px] font-semibold uppercase tracking-widest text-[#FE6305] mb-3">
                  {cs.industry}
                </p>
                <h2 className="text-xl font-bold text-[#1A1A1A] tracking-tight leading-snug mb-1 group-hover:text-[#FE6305] transition-colors">
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
                      className={`text-[11px] border px-2.5 py-1 rounded-full transition-colors ${
                        tag === active && active !== "All"
                          ? "text-[#FE6305] border-[#FE6305]/30 bg-[#FE6305]/[0.06]"
                          : "text-[#1A1A1A]/40 border-[#1A1A1A]/10"
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-widest text-[#FE6305]/60 group-hover:text-[#FE6305] transition-colors">
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
  );
}

"use client";

import { useState } from "react";
import Link from "next/link";
import { articles } from "./articles";

function categoryClass(_category: string): string {
  return "text-[#E8500A]";
}

const CATEGORY_ORDER = [
  "AI",
  "Networking",
  "Cabling",
  "DNS",
  "Identity",
  "Security",
  "Cloud & Infrastructure",
  "Microsoft",
  "Apple",
  "Google",
  "MDM",
];

function getCategories(): string[] {
  const used = new Set(articles.flatMap((a) => a.categories));
  // Known categories in canonical order, then any unknowns appended
  return [
    ...CATEGORY_ORDER.filter((c) => used.has(c)),
    ...[...used].filter((c) => !CATEGORY_ORDER.includes(c)),
  ];
}

export default function UniversityFilter() {
  const categories = getCategories();
  const [active, setActive] = useState<string>("All");

  const filtered =
    active === "All" ? articles : articles.filter((a) => a.categories.includes(active));

  return (
    <section className="bg-[#F4F2EF]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-24">

        {/* Category filter pills */}
        <div className="flex flex-wrap gap-2 mb-10">
          {["All", ...categories].map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-1.5 rounded-full text-[11px] font-semibold uppercase tracking-widest border transition-colors ${
                active === cat
                  ? "bg-[#E8500A] text-white border-[#E8500A]"
                  : "bg-[#F4F2EF] text-[#1A1A1A] border-[#1A1A1A]/20 hover:border-[#E8500A]/40"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Article grid */}
        <div className="flex flex-wrap justify-center gap-8 lg:gap-10">
          {filtered.map((article) => (
            <Link
              key={article.slug}
              href={`/resources/university/${article.slug}`}
              className="group flex flex-col w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.667rem)] bg-white rounded-xl overflow-hidden border border-[#1A1A1A]/[0.07] hover:border-[#E8500A]/20 transition-colors p-7"
            >
              <p className={`text-[10px] font-semibold uppercase tracking-widest mb-3 ${categoryClass(article.categories[0])}`}>
                {article.categories.join(" · ")}
              </p>
              <h2 className="text-lg font-bold text-[#1A1A1A] tracking-tight leading-snug mb-3 group-hover:text-[#E8500A] transition-colors flex-1">
                {article.title}
              </h2>
              <p className="text-sm text-[#1A1A1A]/55 leading-relaxed mb-6">
                {article.description}
              </p>
              <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-widest text-[#E8500A]/60 group-hover:text-[#E8500A] transition-colors">
                Read Article
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
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}

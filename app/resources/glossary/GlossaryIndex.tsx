"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { glossaryTerms } from "@/app/lib/glossary-terms";

const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

const CATEGORIES_ORDER = [
  "Networking",
  "Security",
  "Identity",
  "Cabling",
  "Hardware",
  "Power",
  "WiFi",
  "Cloud & Infrastructure",
  "Development",
  "Virtualization",
  "Microsoft",
  "Apple",
  "Google",
  "MDM",
];

export default function GlossaryIndex() {
  const [activeLetter, setActiveLetter] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [search, setSearch] = useState("");

  const lettersWithTerms = useMemo(() => {
    const set = new Set<string>();
    glossaryTerms.forEach((t) => set.add(t.term[0].toUpperCase()));
    return set;
  }, []);

  const hasNumericTerms = useMemo(
    () => glossaryTerms.some((t) => /^\d/.test(t.term)),
    []
  );

  const categories = useMemo(() => {
    const used = new Set<string>();
    glossaryTerms.forEach((t) => t.categories.forEach((c) => used.add(c)));
    return CATEGORIES_ORDER.filter((c) => used.has(c));
  }, []);

  const filtered = useMemo(() => {
    let terms = [...glossaryTerms];
    if (search.trim()) {
      const q = search.trim().toLowerCase();
      terms = terms.filter(
        (t) =>
          t.term.toLowerCase().includes(q) ||
          t.aka?.some((a) => a.toLowerCase().includes(q)) ||
          t.categories.some((c) => c.toLowerCase().includes(q)) ||
          t.shortDef.toLowerCase().includes(q)
      );
    } else {
      if (activeLetter === "#") {
        terms = terms.filter((t) => /^\d/.test(t.term));
      } else if (activeLetter) {
        terms = terms.filter((t) => t.term[0].toUpperCase() === activeLetter);
      }
      if (activeCategory) {
        terms = terms.filter((t) => t.categories.includes(activeCategory));
      }
    }
    return [...terms].sort((a, b) => a.term.localeCompare(b.term));
  }, [search, activeLetter, activeCategory]);

  const pillBase =
    "px-4 py-1.5 rounded-full text-[11px] font-semibold uppercase tracking-widest border transition-colors";
  const pillBaseAZ =
    "px-2 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wide border transition-colors";
  const pillActive = "bg-[#E8500A] text-white border-[#E8500A]";
  const pillInactive =
    "bg-[#F4F2EF] text-[#1A1A1A] border-[#1A1A1A]/20 hover:border-[#E8500A]/40";

  return (
    <div>
      {/* Search */}
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search terms…"
        className="w-full border border-[#1A1A1A]/20 rounded-xl px-4 py-2.5 text-sm bg-white focus:outline-none focus:border-[#E8500A]/40 mb-6"
      />

      {/* A-Z strip */}
      <div className="flex flex-nowrap gap-0.5 mb-6 w-full">
        <button
          onClick={() => setActiveLetter(null)}
          className={`${pillBaseAZ} flex-1 text-center ${activeLetter === null && !search ? pillActive : pillInactive}`}
        >
          All
        </button>
        <button
          onClick={() => setActiveLetter(activeLetter === "#" ? null : "#")}
          disabled={!hasNumericTerms}
          className={`${pillBaseAZ} flex-1 text-center ${
            activeLetter === "#"
              ? pillActive
              : hasNumericTerms
              ? pillInactive
              : "bg-[#F4F2EF] text-[#1A1A1A]/30 border-[#1A1A1A]/10 cursor-default"
          }`}
        >
          #
        </button>
        {ALPHABET.map((letter) => {
          const has = lettersWithTerms.has(letter);
          const isActive = activeLetter === letter;
          return (
            <button
              key={letter}
              disabled={!has}
              onClick={() => {
                if (!has) return;
                setActiveLetter(isActive ? null : letter);
              }}
              className={`${pillBaseAZ} flex-1 text-center ${
                isActive
                  ? pillActive
                  : has
                  ? pillInactive
                  : "bg-[#F4F2EF] text-[#1A1A1A]/30 border-[#1A1A1A]/10 cursor-default"
              }`}
            >
              {letter}
            </button>
          );
        })}
      </div>

      {/* Category filter pills */}
      <div className="flex flex-wrap gap-2 mb-8">
        <button
          onClick={() => setActiveCategory(null)}
          className={`${pillBase} ${activeCategory === null ? pillActive : pillInactive}`}
        >
          All
        </button>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(activeCategory === cat ? null : cat)}
            className={`${pillBase} ${activeCategory === cat ? pillActive : pillInactive}`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Result count */}
      <p className="text-sm text-[#1A1A1A]/40 mb-6">
        Showing {filtered.length} term{filtered.length !== 1 ? "s" : ""}
      </p>

      {/* Cards */}
      {filtered.length === 0 ? (
        <p className="text-center text-[#1A1A1A]/40 py-16 text-sm">
          No terms match — try a different letter or category.
        </p>
      ) : (
        <div className="flex flex-wrap justify-center gap-6">
          {filtered.map((term) => (
            <Link
              key={term.slug}
              href={`/resources/glossary/${term.slug}`}
              className="group flex flex-col w-full md:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] bg-white rounded-xl border border-[#1A1A1A]/[0.07] hover:border-[#E8500A]/20 transition-colors p-7"
            >
              <p className="text-[10px] font-semibold uppercase tracking-widest text-[#E8500A] mb-2">
                {term.categories[0]}
              </p>
              <h2 className="text-base font-bold text-[#1A1A1A] leading-snug mb-1 group-hover:text-[#E8500A] transition-colors">
                {term.term}
              </h2>
              {term.aka && term.aka.length > 0 && (
                <p className="text-xs text-[#1A1A1A]/40 mb-2">{term.aka.join(", ")}</p>
              )}
              <p className="text-sm text-[#1A1A1A]/55 leading-relaxed flex-1 mb-4 line-clamp-2">
                {term.shortDef}
              </p>
              <div className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-widest text-[#E8500A]/60 group-hover:text-[#E8500A] transition-colors mt-auto">
                Read definition
                <svg width="10" height="10" viewBox="0 0 12 12" fill="none" aria-hidden="true">
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
      )}
    </div>
  );
}

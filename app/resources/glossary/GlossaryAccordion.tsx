"use client";

import { useState, useEffect } from "react";
import type { GlossarySection } from "./glossary-data";

export default function GlossaryAccordion({ data }: { data: GlossarySection[] }) {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (!hash) return;
    for (const section of data) {
      for (let i = 0; i < section.entries.length; i++) {
        if (section.entries[i].id === hash) {
          const key = `${section.section}-${i}`;
          setOpenItems({ [key]: true });
          requestAnimationFrame(() => {
            document.getElementById(hash)?.scrollIntoView({ behavior: "smooth", block: "start" });
          });
          return;
        }
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function toggle(key: string) {
    setOpenItems((prev) => ({ ...prev, [key]: !prev[key] }));
  }

  return (
    <div className="space-y-12">
      {data.map((section) => (
        <div key={section.section}>
          <h2 className="text-xl font-bold text-[#1A1A1A] tracking-tight mb-5">
            {section.section}
          </h2>
          <div className="space-y-2">
            {section.entries.map((entry, i) => {
              const key = `${section.section}-${i}`;
              const isOpen = !!openItems[key];
              return (
                <div
                  key={key}
                  id={entry.id}
                  className="scroll-mt-20 sm:scroll-mt-32 bg-white rounded-xl border border-[#1A1A1A]/[0.07] overflow-hidden"
                >
                  <button
                    type="button"
                    className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                    onClick={() => toggle(key)}
                    aria-expanded={isOpen}
                  >
                    <span className="text-[15px] font-semibold text-[#1A1A1A] leading-snug">
                      {entry.term}
                    </span>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 10 10"
                      fill="none"
                      aria-hidden="true"
                      className="flex-shrink-0 text-[#E8500A]"
                      style={{
                        transform: isOpen ? "rotate(180deg)" : undefined,
                        transition: "transform 0.2s",
                      }}
                    >
                      <path
                        d="M2 3.5L5 6.5L8 3.5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6">
                      <div className="h-px bg-[#1A1A1A]/[0.06] mb-5" />
                      <div className="space-y-3">
                        {entry.body.split("\n\n").filter(Boolean).map((block, bi) => (
                          <p key={bi} className="text-sm text-[#1A1A1A]/60 leading-relaxed">
                            {block}
                          </p>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}

"use client";

import { useState } from "react";
import type { FAQCategory } from "./faq-data";

export default function FAQAccordion({ data }: { data: FAQCategory[] }) {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

  function toggle(key: string) {
    setOpenItems((prev) => ({ ...prev, [key]: !prev[key] }));
  }

  if (data.length === 0) {
    return (
      <div className="bg-white rounded-xl border border-[#1A1A1A]/[0.07] p-8">
        <p className="text-sm text-[#1A1A1A]/40">Content coming soon — run Prompt 2</p>
      </div>
    );
  }

  return (
    <div className="space-y-12">
      {data.map((cat) => (
        <div key={cat.category}>
          <h2 className="text-xl font-bold text-[#1A1A1A] tracking-tight mb-5">
            {cat.category}
          </h2>
          <div className="space-y-2">
            {cat.items.map((item, i) => {
              const key = `${cat.category}-${i}`;
              const isOpen = !!openItems[key];
              return (
                <div
                  key={key}
                  className="bg-white rounded-xl border border-[#1A1A1A]/[0.07] overflow-hidden"
                >
                  <button
                    type="button"
                    className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                    onClick={() => toggle(key)}
                    aria-expanded={isOpen}
                  >
                    <span className="text-[15px] font-semibold text-[#1A1A1A] leading-snug">
                      {item.question}
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
                        {item.answer.split('\n\n').filter(Boolean).map((block, bi) => (
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

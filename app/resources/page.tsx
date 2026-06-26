import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { articles } from "./university/articles";
import { resources as freeResources } from "./free-resources/page";
import { glossaryTerms } from "@/app/lib/glossary-terms";

export const metadata: Metadata = {
  title: "Resources — RSystems NYC",
  description:
    "Free tools, deep dives, and answers to the questions we hear most often. Practical knowledge from years of implementation work.",
  alternates: { canonical: "https://rsystems.nyc/resources" },
};

const sections = [
  {
    title: "IT Foundations",
    body: "The decisions that are cheap to get right early and expensive to fix later. Naming conventions, password managers, device management, email authentication, and more — with pointers to the detail when you need it.",
    href: "/resources/foundations",
    tag: "Start here",
    cta: "Read the Guide",
  },
  {
    title: "RSystems University",
    body: "Deep dives on the concepts we explain most often to clients — networking, identity, DNS, cloud, security, and more.",
    href: "/resources/university",
    tag: `${articles.length} articles`,
    cta: "Read Articles",
  },
  {
    title: "Free Resources",
    body: "No-cost tools and programs every organization should know about — from free identity tiers to nonprofit technology programs.",
    href: "/resources/free-resources",
    tag: `${freeResources.length} resources`,
    cta: "Browse Resources",
  },
  {
    title: "Glossary",
    body: "Plain-language definitions of the terms that come up most often — organized by topic, not alphabet.",
    href: "/resources/glossary",
    tag: `${glossaryTerms.length} terms`,
    cta: "Browse Glossary",
  },
];

export default function ResourcesPage() {
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
            Resources
          </h1>
          <p className="mt-6 text-lg text-white/50 max-w-2xl leading-relaxed">
            Free tools, deep dives, and answers to the questions we answer most often.
          </p>
        </div>
      </section>

      {/* Card grid */}
      <section className="bg-[#F4F2EF]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
          <div className="flex flex-wrap justify-center gap-8 lg:gap-10">
            {sections.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="group flex flex-col w-full md:w-[calc(33.333%-1.333rem)] lg:w-[calc(33.333%-1.667rem)] bg-white rounded-xl overflow-hidden border border-[#1A1A1A]/[0.07] hover:border-[#FE6305]/20 transition-colors p-7"
              >
                <p className="text-[10px] font-semibold uppercase tracking-widest text-[#FE6305] mb-3">
                  {s.tag}
                </p>
                <h2 className="text-xl font-bold text-[#1A1A1A] tracking-tight leading-snug mb-3 group-hover:text-[#FE6305] transition-colors">
                  {s.title}
                </h2>
                <p className="text-sm text-[#1A1A1A]/55 leading-relaxed flex-1 mb-6">
                  {s.body}
                </p>
                <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-widest text-[#FE6305]/60 group-hover:text-[#FE6305] transition-colors">
                  {s.cta}
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

    </main>
  );
}

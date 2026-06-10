import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { articles } from "./articles";

function categoryClass(category: string): string {
  switch (category) {
    case "Networking":
      return "text-blue-500";
    case "Cabling":
      return "text-[#1A1A1A]/40";
    default:
      return "text-[#E8500A]";
  }
}

export const metadata: Metadata = {
  title: "RSystems University — RSystems NYC",
  description: "Deep dives on the technology concepts we explain most often to clients.",
  alternates: { canonical: "https://rsystems.nyc/resources/university" },
};

export default function UniversityPage() {
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
            Resources
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight max-w-3xl">
            RSystems University
          </h1>
          <p className="mt-6 text-lg text-white/50 max-w-2xl leading-relaxed">
            Deep dives on the concepts we explain most often. No jargon, no filler — just what you
            need to know to make better technology decisions.
          </p>
        </div>
      </section>

      {/* Article grid */}
      <section className="bg-[#F4F2EF]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {articles.map((article) => (
              <Link
                key={article.slug}
                href={`/resources/university/${article.slug}`}
                className="group flex flex-col bg-white rounded-xl overflow-hidden border border-[#1A1A1A]/[0.07] hover:border-[#E8500A]/20 transition-colors p-7"
              >
                <p className={`text-[10px] font-semibold uppercase tracking-widest mb-3 ${categoryClass(article.category)}`}>
                  {article.category}
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

    </main>
  );
}

import Image from "next/image";
import type { Metadata } from "next";
import CaseStudiesFilter from "./CaseStudiesFilter";

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

      <CaseStudiesFilter />

    </main>
  );
}

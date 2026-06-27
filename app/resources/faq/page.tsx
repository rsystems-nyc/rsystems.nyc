import Image from "next/image";
import type { Metadata } from "next";
import { FAQData } from "./faq-data";
import FAQAccordion from "./FAQAccordion";

export const metadata: Metadata = {
  title: "FAQ — RSystems NYC",
  description: "Direct answers to the questions that come up in almost every engagement.",
  alternates: { canonical: "https://rsystems.nyc/resources/faq" },
};

export default function FAQPage() {
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
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <p className="text-[11px] font-semibold uppercase tracking-widest text-[#FE6305] mb-5">
            Resources
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight max-w-3xl">
            FAQ
          </h1>
          <p className="mt-6 text-lg text-white/50 max-w-2xl leading-relaxed">
            The questions we answer most often, answered directly.
          </p>
        </div>
      </section>

      {/* Accordion */}
      <section className="bg-[#F4F2EF]">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
          <FAQAccordion data={FAQData} />
        </div>
      </section>

    </main>
  );
}

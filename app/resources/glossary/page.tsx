import Image from "next/image";
import type { Metadata } from "next";
import GlossaryIndex from "./GlossaryIndex";
import JsonLd from "@/app/components/JsonLd";
import { SITE_URL, breadcrumbSchema } from "@/app/lib/seo";
import { glossaryTerms } from "@/app/lib/glossary-terms";

export const metadata: Metadata = {
  title: "Glossary — RSystems NYC",
  description: "Plain-language definitions for the terms that come up most often — browse by letter or filter by topic.",
  alternates: { canonical: "https://rsystems.nyc/resources/glossary" },
};

const definedTermSetSchema = {
  "@context": "https://schema.org",
  "@type": "DefinedTermSet",
  "@id": `${SITE_URL}/resources/glossary`,
  name: "RSystems IT Glossary",
  url: `${SITE_URL}/resources/glossary`,
  description:
    "Plain-language definitions of the infrastructure, networking, security, and cloud terms that come up most often in enterprise IT.",
  hasDefinedTerm: glossaryTerms.map((t) => ({
    "@type": "DefinedTerm",
    name: t.term,
    description: t.shortDef,
    termCode: t.slug,
    url: `${SITE_URL}/resources/glossary/${t.slug}`,
  })),
};

const breadcrumbs = breadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "Resources", path: "/resources" },
  { name: "Glossary", path: "/resources/glossary" },
]);

export default function GlossaryPage() {
  return (
    <main className="flex-1">
      <JsonLd data={[definedTermSetSchema, breadcrumbs]} />

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
            Glossary
          </h1>
          <p className="mt-6 text-lg text-white/50 max-w-2xl leading-relaxed">
            Plain-language definitions for the terms that come up most often —
            browse by letter or filter by topic.
          </p>
        </div>
      </section>

      {/* Index */}
      <section className="bg-[#F4F2EF]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
          <GlossaryIndex />
        </div>
      </section>

    </main>
  );
}

import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { glossaryTerms } from "@/app/lib/glossary-terms";
import { renderMarkdown } from "@/app/lib/renderMarkdown";
import JsonLd from "@/app/components/JsonLd";
import { SITE_URL, breadcrumbSchema } from "@/app/lib/seo";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return glossaryTerms.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const term = glossaryTerms.find((t) => t.slug === slug);
  if (!term) return {};
  return {
    title: `${term.term} — RSystems Glossary`,
    description: term.shortDef,
    alternates: { canonical: `https://rsystems.nyc/resources/glossary/${slug}` },
    openGraph: {
      title: term.term,
      description: term.shortDef,
      type: "article",
      url: `https://rsystems.nyc/resources/glossary/${slug}`,
    },
  };
}

function getRelated(term: (typeof glossaryTerms)[number]) {
  const explicit = term.related
    ?.map((s) => glossaryTerms.find((t) => t.slug === s))
    .filter(Boolean) as typeof glossaryTerms;

  if (explicit && explicit.length > 0) return explicit.slice(0, 4);

  const sameCategory = glossaryTerms.filter(
    (t) => t.slug !== term.slug && t.categories.some((c) => term.categories.includes(c))
  );
  return sameCategory.slice(0, 4);
}

export default async function GlossaryTermPage({ params }: Props) {
  const { slug } = await params;
  const term = glossaryTerms.find((t) => t.slug === slug);
  if (!term) notFound();

  const related = getRelated(term);

  const definedTermSchema = {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    name: term.term,
    ...(term.aka && term.aka.length > 0 && { alternateName: term.aka }),
    description: term.shortDef,
    termCode: term.slug,
    url: `${SITE_URL}/resources/glossary/${term.slug}`,
    inDefinedTermSet: {
      "@type": "DefinedTermSet",
      "@id": `${SITE_URL}/resources/glossary`,
      name: "RSystems IT Glossary",
      url: `${SITE_URL}/resources/glossary`,
    },
  };

  const breadcrumbs = breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Resources", path: "/resources" },
    { name: "Glossary", path: "/resources/glossary" },
    { name: term.term, path: `/resources/glossary/${term.slug}` },
  ]);

  return (
    <main className="flex-1 bg-[#F4F2EF]">
      <JsonLd data={[definedTermSchema, breadcrumbs]} />

      {/* Back link */}
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 pt-10 pb-0">
        <Link
          href="/resources/glossary"
          className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-widest text-[#FE6305]/60 hover:text-[#FE6305] transition-colors"
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
            <path
              d="M8 1L3 6l5 5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Back to Glossary
        </Link>
      </div>

      {/* Term header */}
      <article className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-10">
          <p className="text-[11px] font-semibold uppercase tracking-widest text-[#FE6305] mb-4">
            {term.categories.join(" · ")}
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A1A] leading-[1.1] tracking-tight">
            {term.term}
          </h1>
          {term.aka && term.aka.length > 0 && (
            <p className="mt-2 text-sm text-[#1A1A1A]/40">
              Also known as: {term.aka.join(", ")}
            </p>
          )}
          <p className="mt-6 text-lg text-[#1A1A1A]/70 leading-relaxed max-w-2xl">
            {term.shortDef}
          </p>
        </header>

        {/* Divider */}
        <div className="h-px bg-[#1A1A1A]/[0.08] mb-10" />

        {/* Full content */}
        {term.content ? (
          <div
            className="prose-article"
            dangerouslySetInnerHTML={{ __html: renderMarkdown(term.content) }}
          />
        ) : (
          <p className="text-sm text-[#1A1A1A]/35 italic">Full definition coming soon.</p>
        )}
      </article>

      {/* Related terms */}
      {related.length > 0 && (
        <section className="border-t border-[#1A1A1A]/[0.08] bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
            <p className="text-[11px] font-semibold uppercase tracking-widest text-[#FE6305] mb-8">
              Related Terms
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {related.map((rel) => (
                <Link
                  key={rel.slug}
                  href={`/resources/glossary/${rel.slug}`}
                  className="group flex flex-col bg-[#F4F2EF] rounded-xl overflow-hidden border border-[#1A1A1A]/[0.07] hover:border-[#FE6305]/20 transition-colors p-6"
                >
                  <p className="text-[10px] font-semibold uppercase tracking-widest text-[#FE6305] mb-2">
                    {rel.categories[0]}
                  </p>
                  <h3 className="text-base font-bold text-[#1A1A1A] leading-snug mb-3 group-hover:text-[#FE6305] transition-colors flex-1">
                    {rel.term}
                  </h3>
                  <p className="text-xs text-[#1A1A1A]/50 leading-relaxed mb-4 line-clamp-3">
                    {rel.shortDef.slice(0, 100)}{rel.shortDef.length > 100 ? "…" : ""}
                  </p>
                  <div className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-widest text-[#FE6305]/60 group-hover:text-[#FE6305] transition-colors">
                    Read
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
          </div>
        </section>
      )}

    </main>
  );
}

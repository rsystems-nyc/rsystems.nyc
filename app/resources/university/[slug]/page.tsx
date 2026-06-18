import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { articles } from "../articles";
import { caseStudiesData } from "@/app/lib/case-studies-data";
import { renderMarkdown } from "@/app/lib/renderMarkdown";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) return {};
  return {
    title: `${article.title} — RSystems University`,
    description: article.description,
    alternates: { canonical: `https://rsystems.nyc/resources/university/${slug}` },
    openGraph: {
      title: article.title,
      description: article.description,
      type: "article",
      url: `https://rsystems.nyc/resources/university/${slug}`,
    },
  };
}

function getRelated(article: (typeof articles)[number]) {
  const explicit = article.related
    ?.map((s) => articles.find((a) => a.slug === s))
    .filter(Boolean) as typeof articles;

  if (explicit && explicit.length >= 3) return explicit.slice(0, 3);

  const sameCategory = articles.filter(
    (a) => a.slug !== article.slug && a.categories.some((c) => article.categories.includes(c))
  );
  const others = articles.filter(
    (a) => a.slug !== article.slug && !a.categories.some((c) => article.categories.includes(c))
  );
  const pool = [...sameCategory, ...others];
  return pool.slice(0, 3);
}

export default async function UniversityArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) notFound();

  const related = getRelated(article);

  const relatedCaseStudies = article.relatedCaseStudies
    ?.map((s) => caseStudiesData.find((cs) => cs.slug === s))
    .filter(Boolean) as typeof caseStudiesData;

  return (
    <main className="flex-1 bg-[#F4F2EF]">

      {/* Back link */}
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 pt-10 pb-0">
        <Link
          href="/resources/university"
          className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-widest text-[#E8500A]/60 hover:text-[#E8500A] transition-colors"
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
          Back to University
        </Link>
      </div>

      {/* Article header */}
      <article className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-10">
          <p className="text-[11px] font-semibold uppercase tracking-widest text-[#E8500A] mb-4">
            {article.categories.join(" · ")}
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A1A] leading-[1.1] tracking-tight">
            {article.title}
          </h1>
          <p className="mt-4 text-lg text-[#1A1A1A]/50 leading-relaxed max-w-2xl">
            {article.description}
          </p>
        </header>

        {/* Divider */}
        <div className="h-px bg-[#1A1A1A]/[0.08] mb-10" />

        {/* Article body */}
        {article.content ? (
          <div
            className="prose-article"
            dangerouslySetInnerHTML={{ __html: renderMarkdown(article.content) }}
          />
        ) : (
          <p className="text-sm text-[#1A1A1A]/35 italic">Full article coming soon.</p>
        )}
      </article>

      {/* See it in practice */}
      {relatedCaseStudies && relatedCaseStudies.length > 0 && (
        <section className="border-t border-[#1A1A1A]/[0.08] bg-[#F4F2EF]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
            <p className="text-[11px] font-semibold uppercase tracking-widest text-[#E8500A] mb-8">
              See It In Practice
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedCaseStudies.map((cs) => (
                <Link
                  key={cs.slug}
                  href={`/case-studies/${cs.slug}`}
                  className="group flex flex-col bg-white rounded-xl border border-[#1A1A1A]/[0.07] hover:border-[#E8500A]/20 transition-colors p-6"
                >
                  <p className="text-[10px] font-semibold uppercase tracking-widest text-[#E8500A] mb-2">
                    {cs.industry}
                  </p>
                  <h3 className="text-base font-bold text-[#1A1A1A] leading-snug mb-1 group-hover:text-[#E8500A] transition-colors">
                    {cs.title}
                  </h3>
                  <p className="text-[12px] text-[#1A1A1A]/40 mb-3">{cs.client}</p>
                  <p className="text-sm text-[#1A1A1A]/55 leading-relaxed flex-1 mb-4">
                    {cs.summary}
                  </p>
                  <div className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-widest text-[#E8500A]/60 group-hover:text-[#E8500A] transition-colors">
                    Read Case Study
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

      {/* Related articles */}
      {related.length > 0 && (
        <section className="border-t border-[#1A1A1A]/[0.08] bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
            <p className="text-[11px] font-semibold uppercase tracking-widest text-[#E8500A] mb-8">
              Related Articles
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {related.map((rel) => (
                <Link
                  key={rel.slug}
                  href={`/resources/university/${rel.slug}`}
                  className="group flex flex-col bg-[#F4F2EF] rounded-xl overflow-hidden border border-[#1A1A1A]/[0.07] hover:border-[#E8500A]/20 transition-colors p-6"
                >
                  <p className="text-[10px] font-semibold uppercase tracking-widest text-[#E8500A] mb-2">
                    {rel.categories[0]}
                  </p>
                  <h3 className="text-base font-bold text-[#1A1A1A] leading-snug mb-3 group-hover:text-[#E8500A] transition-colors flex-1">
                    {rel.title}
                  </h3>
                  <div className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-widest text-[#E8500A]/60 group-hover:text-[#E8500A] transition-colors">
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

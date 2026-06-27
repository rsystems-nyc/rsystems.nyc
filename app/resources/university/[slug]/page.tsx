import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { articles } from "../articles";
import { caseStudiesData } from "@/app/lib/case-studies-data";
import { renderMarkdown } from "@/app/lib/renderMarkdown";
import JsonLd from "@/app/components/JsonLd";
import PageEndCTA from "@/app/components/PageEndCTA";
import { SITE_URL, breadcrumbSchema } from "@/app/lib/seo";

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

  const relatedArticleLinks = related.map((rel) => ({
    href: `/resources/university/${rel.slug}`,
    label: rel.title,
  }));
  const relatedCaseStudyLinks = (relatedCaseStudies ?? []).map((cs) => ({
    href: `/case-studies/${cs.slug}`,
    label: cs.title,
  }));

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: article.title,
    description: article.description,
    url: `${SITE_URL}/resources/university/${article.slug}`,
    mainEntityOfPage: `${SITE_URL}/resources/university/${article.slug}`,
    about: article.categories,
    author: { "@type": "Organization", name: "RSystems", url: SITE_URL },
    publisher: {
      "@type": "Organization",
      name: "RSystems",
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/assets/RS_Systems_Pulsar_Logo.svg`,
      },
    },
  };

  const breadcrumbs = breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Resources", path: "/resources" },
    { name: "University", path: "/resources/university" },
    { name: article.title, path: `/resources/university/${article.slug}` },
  ]);

  return (
    <main className="flex-1 bg-[#F4F2EF]">
      <JsonLd data={[articleSchema, breadcrumbs]} />

      {/* Back link */}
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 pt-10 pb-0">
        <Link
          href="/resources/university"
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
          Back to University
        </Link>
      </div>

      {/* Article header */}
      <article className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-10">
          <p className="text-[11px] font-semibold uppercase tracking-widest text-[#FE6305] mb-4">
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

      <PageEndCTA
        pageKey={`university:${slug}`}
        precedingBg="bg-[#F4F2EF]"
        universityLinks={relatedArticleLinks}
        caseStudyLinks={relatedCaseStudyLinks}
      />

    </main>
  );
}

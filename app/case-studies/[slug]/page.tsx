import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { caseStudiesData, type Block } from "@/app/lib/case-studies-data";
import JsonLd from "@/app/components/JsonLd";
import { breadcrumbSchema } from "@/app/lib/seo";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return caseStudiesData.map((cs) => ({ slug: cs.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const cs = caseStudiesData.find((c) => c.slug === slug);
  if (!cs) return {};
  const title = cs.seoTitle ? { absolute: cs.seoTitle } : cs.title;
  const description = cs.seoDescription ?? cs.summary;
  const ogTitle = cs.seoTitle ?? cs.title;
  return {
    title,
    description,
    ...(cs.canonicalPath && {
      alternates: { canonical: `https://rsystems.nyc${cs.canonicalPath}` },
    }),
    openGraph: {
      title: ogTitle,
      description,
      type: "article",
      ...(cs.canonicalPath && { url: `https://rsystems.nyc${cs.canonicalPath}` }),
      ...((cs.ogImage ?? cs.featuredImage) && {
        images: [{ url: cs.ogImage ?? cs.featuredImage!.src, alt: cs.featuredImage?.alt ?? "" }],
      }),
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description,
      ...((cs.ogImage ?? cs.featuredImage) && { images: [cs.ogImage ?? cs.featuredImage!.src] }),
    },
  };
}

function RenderBlock({ block, index }: { block: Block; index: number }) {
  switch (block.type) {
    case "p":
      return (
        <p key={index} className="text-base text-[#1A1A1A]/60 leading-relaxed">
          {block.text}
        </p>
      );

    case "h3":
      return (
        <h3 key={index} className="text-[15px] font-semibold text-[#1A1A1A] mt-4 mb-1">
          {block.text}
        </h3>
      );

    case "ul":
      return (
        <ul key={index} className="space-y-3">
          {block.items.map((item, j) => (
            <li key={j} className="flex items-start gap-3 text-base text-[#1A1A1A]/60 leading-relaxed">
              <span className="mt-[0.45rem] w-1.5 h-1.5 rounded-full bg-[#E8500A] flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      );

    case "quote":
      return (
        <blockquote key={index} className="border-l-2 border-[#E8500A] pl-5 my-2">
          <p className="text-lg text-[#1A1A1A]/75 italic leading-relaxed">
            &ldquo;{block.text}&rdquo;
          </p>
          {block.attribution && (
            <cite className="mt-2 block text-sm text-[#1A1A1A]/40 not-italic">
              — {block.attribution}
            </cite>
          )}
        </blockquote>
      );

    case "img": {
      const isSvg = block.src.endsWith(".svg");
      const isSmall = block.size === "small";
      return (
        <figure key={index} className={`my-4${isSmall ? " max-w-[34rem] mx-auto" : ""}`}>
          <div className={`relative overflow-hidden${isSmall ? " w-full" : " w-full"}${isSvg ? "" : " rounded-lg bg-[#F4F2EF]"}`}>
            <Image
              src={block.src}
              alt={block.alt}
              width={isSvg ? 1560 : 1200}
              height={isSvg ? 1140 : 800}
              className="w-full h-auto"
              unoptimized={isSvg}
            />
          </div>
          {block.caption && (
            <figcaption className="mt-2 text-sm text-[#1A1A1A]/40 text-center">
              {block.caption}
            </figcaption>
          )}
        </figure>
      );
    }

    case "specs":
      return (
        <div key={index} className="space-y-8 my-2">
          {block.groups.map((group, j) => (
            <div key={j}>
              {group.title && (
                <p className="text-[11px] font-semibold uppercase tracking-widest text-[#E8500A] mb-4">
                  {group.title}
                </p>
              )}
              <dl className="space-y-3">
                {group.items.map(([label, value], k) => (
                  <div key={k} className="grid grid-cols-5 gap-4 text-sm border-b border-[#1A1A1A]/[0.06] pb-3">
                    <dt className="col-span-2 text-[#1A1A1A]/40 font-medium leading-relaxed">
                      {label}
                    </dt>
                    <dd className="col-span-3 text-[#1A1A1A]/70 leading-relaxed">{value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          ))}
        </div>
      );

    case "img-pair":
      return (
        <div key={index} className="my-4 grid grid-cols-2 gap-4">
          {block.images.map((img, j) => (
            <figure key={j}>
              <div className="relative overflow-hidden rounded-lg bg-[#F4F2EF]">
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={800}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
              {img.caption && (
                <figcaption className="mt-2 text-sm text-[#1A1A1A]/40 text-center">
                  {img.caption}
                </figcaption>
              )}
            </figure>
          ))}
        </div>
      );

    case "placeholder":
      return (
        <div
          key={index}
          className="my-4 w-full aspect-[16/9] rounded-lg bg-[#1A1A1A]/[0.05] border-2 border-dashed border-[#1A1A1A]/20 flex items-center justify-center"
        >
          <p className="text-sm text-[#1A1A1A]/40 font-medium text-center px-4">{block.label}</p>
        </div>
      );

    default:
      return null;
  }
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const cs = caseStudiesData.find((c) => c.slug === slug);
  if (!cs) notFound();

  const breadcrumbs = breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Case Studies", path: "/case-studies" },
    { name: cs.title, path: cs.canonicalPath ?? `/case-studies/${slug}` },
  ]);

  return (
    <main className="flex-1">
      <JsonLd data={breadcrumbs} />
      {cs.jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(cs.jsonLd) }}
        />
      )}

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
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-widest text-white/30 hover:text-white/60 transition-colors mb-10"
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
              <path
                d="M8 1L3 6L8 11"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Case Studies
          </Link>
          <p className="text-[11px] font-semibold uppercase tracking-widest text-[#E8500A] mb-5">
            {cs.industry}
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight max-w-3xl">
            {cs.title}
          </h1>
          <p className="mt-4 text-lg text-white/50 max-w-2xl leading-relaxed">
            {cs.subtitle}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <span className="text-xs font-medium text-white/40 border border-white/10 px-3 py-1.5 rounded-full">
              {cs.client}
            </span>
            {cs.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-medium text-[#E8500A]/70 border border-[#E8500A]/20 px-3 py-1.5 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Featured image — single */}
      {cs.featuredImage && !cs.featuredImagePair && (
        <div className="bg-[#0F1117]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-0">
            <div className="w-full overflow-hidden rounded-t-xl">
              <Image
                src={cs.featuredImage.src}
                alt={cs.featuredImage.alt}
                width={1400}
                height={700}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>
      )}

      {/* Featured image — before/after pair */}
      {cs.featuredImagePair && (
        <div className="bg-[#0F1117]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-0">
            <div className="w-full overflow-hidden rounded-t-xl grid grid-cols-1 sm:grid-cols-2 gap-px bg-[#1A1A1A]">
              <div className="relative aspect-[4/3] sm:aspect-square overflow-hidden">
                <Image
                  src={cs.featuredImagePair.before.src}
                  alt={cs.featuredImagePair.before.alt}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/60 to-transparent" />
                <span className="absolute bottom-3 left-4 text-[11px] font-semibold uppercase tracking-widest text-white">
                  Before
                </span>
              </div>
              <div className="relative aspect-[4/3] sm:aspect-square overflow-hidden">
                <Image
                  src={cs.featuredImagePair.after.src}
                  alt={cs.featuredImagePair.after.alt}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/60 to-transparent" />
                <span className="absolute bottom-3 left-4 text-[11px] font-semibold uppercase tracking-widest text-white">
                  After
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Content sections */}
      {cs.sections.map((section, i) => (
        <section key={i} className={section.bg ?? (i % 2 === 0 ? "bg-[#F4F2EF]" : "bg-white")}>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
              <div className="lg:col-span-3">
                <p className="text-[11px] font-semibold uppercase tracking-widest text-[#E8500A] pt-1">
                  {section.label}
                </p>
              </div>
              <div className="lg:col-span-7 space-y-5">
                {section.heading && (
                  <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A1A] tracking-tight leading-snug">
                    {section.heading}
                  </h2>
                )}
                {section.blocks.map((block, j) => (
                  <RenderBlock key={j} block={block} index={j} />
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Results */}
      <section className="bg-[#0F1117]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-3">
              <p className="text-[11px] font-semibold uppercase tracking-widest text-[#E8500A] pt-1">
                Outcomes
              </p>
            </div>
            <div className="lg:col-span-7">
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-snug mb-10">
                What we delivered.
              </h2>
              <ul className="space-y-5">
                {cs.results.map((result, i) => (
                  <li key={i} className="flex items-start gap-4 text-base text-white/60 leading-relaxed">
                    <span className="mt-[0.45rem] w-1.5 h-1.5 rounded-full bg-[#E8500A] flex-shrink-0" />
                    {result}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Closing image */}
      {cs.closingImage && (
        <section className="bg-[#F4F2EF]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
            <div className="relative overflow-hidden w-full rounded-lg">
              <Image
                src={cs.closingImage.src}
                alt={cs.closingImage.alt}
                width={1200}
                height={800}
                className="w-full h-auto"
              />
            </div>
          </div>
        </section>
      )}

      {/* Press citation */}
      {cs.pressCitation && (
        <section className="bg-[#F4F2EF] border-t border-[#1A1A1A]/[0.07]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              <div className="lg:col-start-4 lg:col-span-7">
                <a
                  href={cs.pressCitation.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#1A1A1A]/40 hover:text-[#1A1A1A]/70 transition-colors underline underline-offset-2 decoration-[#1A1A1A]/20"
                >
                  {cs.pressCitation.label}
                </a>
              </div>
            </div>
          </div>
        </section>
      )}

    </main>
  );
}

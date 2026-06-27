import Link from "next/link";
import { getPageCta, type CtaLink } from "@/app/lib/page-cta";

// The standard end-of-page zone: a boxed CTA followed by a "Related" block of
// slim cross-link buttons, in the order relevant service -> University ->
// Case Study -> related Case Study. Background alternates from the section
// above it (passed as precedingBg); the CTA card + slim buttons fill with the
// opposite tone so they read against the zone.

const ALL_GROUPS = ["service", "university", "case", "related"] as const;
type Group = (typeof ALL_GROUPS)[number];

function zoneFor(precedingBg: string): string {
  if (precedingBg.includes("F4F2EF")) return "bg-white";
  if (precedingBg === "bg-white") return "bg-[#F4F2EF]";
  // dark hero/outcome (#0F1117) or a gradient -> a light zone
  return "bg-white";
}

function Arrow() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      aria-hidden="true"
      className="transition-transform group-hover:translate-x-0.5"
    >
      <path d="M4 1l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function LinkButton({ link, action, fill }: { link: CtaLink; action: string; fill: string }) {
  return (
    <Link
      href={link.href}
      className={`group flex items-center justify-between gap-4 rounded-lg border border-[#1A1A1A]/[0.07] ${fill} px-5 py-2.5 hover:border-[#FE6305]/40 transition-colors`}
    >
      <span className="text-sm font-semibold text-[#1A1A1A] leading-snug">{link.label}</span>
      <span className="flex-shrink-0 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-widest text-[#FE6305] group-hover:text-[#FE6305]/75 transition-colors">
        {action}
        <Arrow />
      </span>
    </Link>
  );
}

export default function PageEndCTA({
  pageKey,
  precedingBg,
  groups = [...ALL_GROUPS],
  universityLinks,
  caseStudyLinks,
}: {
  pageKey: string;
  precedingBg: string;
  groups?: string[];
  // Optional render-time overrides (e.g. university pages derive their related
  // articles + case studies from articles.ts rather than the static map).
  universityLinks?: CtaLink[];
  caseStudyLinks?: CtaLink[];
}) {
  const data = getPageCta(pageKey);
  if (!data) return null;

  const zone = zoneFor(precedingBg);
  const fill = zone === "bg-white" ? "bg-[#F4F2EF]" : "bg-white";
  const on = (g: Group) => groups.includes(g);

  const uni = universityLinks ?? data.universityLinks;
  const cases = caseStudyLinks ?? data.caseStudyLinks;

  const blocks = [
    on("service") && data.serviceLinks.length
      ? { blurb: data.serviceBlurb, links: data.serviceLinks, action: "View Service" }
      : null,
    on("university") && uni.length
      ? { blurb: data.uniBlurb, links: uni, action: "Read Article" }
      : null,
    on("case") && cases.length
      ? { blurb: data.caseBlurb, links: cases, action: "Read Case Study" }
      : null,
    on("related") && data.relatedCaseStudyLinks.length
      ? { blurb: data.relatedCaseBlurb, links: data.relatedCaseStudyLinks, action: "Read Case Study" }
      : null,
  ].filter(Boolean) as { blurb: string; links: CtaLink[]; action: string }[];

  const { cta } = data;

  return (
    <>
      {/* CTA */}
      <section className={`${zone} border-t border-[#1A1A1A]/[0.07]`}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
          <div
            className={`relative overflow-hidden rounded-2xl border-[1.5px] border-[#FE6305] ${fill} px-8 py-6 sm:px-12 lg:px-14`}
          >
            <div className="max-w-2xl">
              <p className="text-[11px] font-semibold uppercase tracking-widest text-[#FE6305] mb-2.5">
                {cta.eyebrow}
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A1A] tracking-tight leading-snug mb-2.5">
                {cta.heading}
              </h2>
              <p className="text-base text-[#1A1A1A]/60 leading-relaxed mb-4 max-w-xl">{cta.body}</p>
              <Link
                href="/contact"
                className="inline-block bg-[#FE6305] text-white text-sm font-semibold px-6 py-2.5 rounded hover:bg-[#FE6305]/85 transition-colors"
              >
                {cta.button}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related */}
      {blocks.length > 0 && (
        <section className={zone}>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-14 lg:pb-16">
            <p className="text-[11px] font-semibold uppercase tracking-widest text-[#FE6305] mb-4">Related</p>
            {blocks.map((block, i) => (
              <div key={i}>
                {block.blurb ? (
                  <p
                    className={`text-base text-[#1A1A1A]/70 leading-relaxed mb-3${i > 0 ? " mt-5" : ""}`}
                  >
                    {block.blurb}
                  </p>
                ) : null}
                <div className="space-y-2">
                  {block.links.map((l) => (
                    <LinkButton key={l.href} link={l} action={block.action} fill={fill} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </>
  );
}

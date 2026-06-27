import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import JsonLd from "@/app/components/JsonLd";
import { breadcrumbSchema } from "@/app/lib/seo";
import PageEndCTA from "@/app/components/PageEndCTA";

export const metadata: Metadata = {
  title: { absolute: "Vibe Coding & Custom Development | RSystems NYC" },
  description:
    "RSystems builds custom websites and internal software tools with AI-assisted development — or helps your team do it themselves. We'll build it for you, teach you to do it well, or collaborate — and set up the infrastructure foundation that makes vibe coding work.",
  alternates: { canonical: "https://rsystems.nyc/services/technology-consulting/vibe-coding" },
  openGraph: {
    title: "Vibe Coding & Custom Development | RSystems NYC",
    description:
      "RSystems builds custom websites and internal software tools with AI-assisted development — or helps your team do it themselves. We'll build it for you, teach you to do it well, or collaborate — and set up the infrastructure foundation that makes vibe coding work.",
    url: "https://rsystems.nyc/services/technology-consulting/vibe-coding",
  },
  twitter: {
    title: "Vibe Coding & Custom Development | RSystems NYC",
    description:
      "RSystems builds custom websites and internal software tools with AI-assisted development — or helps your team do it themselves. We'll build it for you, teach you to do it well, or collaborate — and set up the infrastructure foundation that makes vibe coding work.",
  },
};

const sections: { eyebrow: string; heading?: string; paragraphs: string[] }[] = [
  {
    eyebrow: "Overview",
    paragraphs: [
      "AI-assisted development has changed what's possible for custom software. Websites and internal tools that used to require an agency engagement and a five-figure budget can now be built in a fraction of the time. But the tools alone aren't the whole story — doing this well takes real technical fundamentals: the infrastructure has to be set up correctly, the architecture has to be sound, and someone has to know when the AI has taken a wrong turn. That's where we come in.",
    ],
  },
  {
    eyebrow: "What We Build",
    heading: "Custom websites and internal tools",
    paragraphs: [
      "We build custom websites and web applications — marketing sites, structured content platforms, and the kind of polished, performant front-ends that represent a business well. We also build internal software tools: the dashboards, trackers, integrations, and workflow tools that teams need but that never quite justify a full development contract. With AI-assisted development, those tools become practical to build and maintain.",
    ],
  },
  {
    eyebrow: "How We Work",
    heading: "AI-assisted development, professionally grounded",
    paragraphs: [
      "We use modern AI development tools — the same ones reshaping how software gets built — paired with the infrastructure discipline of a senior IT practice. That means proper source control, secure authentication, continuous deployment pipelines, sound DNS and TLS, and identity management that lets your team actually run what we build. The AI accelerates the work; the fundamentals make it production-grade.",
    ],
  },
  {
    eyebrow: "Three Ways to Work Together",
    heading: "We'll do it, teach it, or build it with you",
    paragraphs: [
      "Vibe coding done well depends on getting the foundation right — and we can meet you wherever you are. We'll build it for you, delivering a finished website or tool. We'll teach you and your team to do it well yourselves, setting up the environment and the fundamentals and showing you how to work effectively. Or we'll collaborate — working alongside your team to build together while building the skills to continue on your own.",
      "For teams that want to vibe code themselves, the hard part usually isn't the AI — it's everything underneath it. We can stand up the foundation that makes it work: the development environment, source control, secure authentication, deployment pipelines, and the identity and access setup that lets your whole team participate safely. Get that right, and AI-assisted development becomes a genuine capability instead of a frustrating experiment.",
    ],
  },
  {
    eyebrow: "Why It Matters",
    heading: "Agency-grade results, without agency overhead",
    paragraphs: [
      "The result is custom software delivered faster and more affordably than a traditional build — without sacrificing quality or leaving you dependent on an outside firm for every future change. We can build environments your own team can manage day to day, through interfaces as simple as a chat window. You get the result, and you keep the keys.",
    ],
  },
];

const offerings = [
  "Custom website design and development (Next.js, modern frameworks)",
  "Internal tools, dashboards, and workflow applications",
  "Infrastructure to enable your team to vibe code: dev environments, source control, CI/CD, hosting, DNS, TLS",
  "Identity and SSO integration so your team can manage what gets built",
  "Training and enablement — teaching your team to do it well",
  "Collaborative builds that transfer skills as we go",
  "Ongoing iteration and content support",
];

const breadcrumbs = breadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "AI & Automation", path: "/services/ai" },
  { name: "Vibe Coding & Custom Development", path: "/services/technology-consulting/vibe-coding" },
]);

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Vibe Coding & Custom Development",
  serviceType: "Custom software and website development",
  description:
    "Custom websites and internal software tools built with AI-assisted development, backed by senior technical expertise. RSystems builds it for you, teaches your team to do it well, or collaborates — and stands up the infrastructure foundation that makes vibe coding production-grade.",
  provider: {
    "@type": "Organization",
    name: "RSystems NYC",
    url: "https://rsystems.nyc",
  },
  areaServed: { "@type": "City", name: "New York City" },
  url: "https://rsystems.nyc/services/technology-consulting/vibe-coding",
};

export default function VibeCodingPage() {
  return (
    <main className="flex-1">
      <JsonLd data={[breadcrumbs, serviceSchema]} />

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
          <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-widest text-white/30 mb-10 flex-wrap">
            <Link href="/services" className="hover:text-white/60 transition-colors">Services</Link>
            <span>/</span>
            <Link href="/services/ai" className="hover:text-white/60 transition-colors">AI &amp; Automation</Link>
            <span>/</span>
            <span className="text-white/50">Vibe Coding &amp; Custom Development</span>
          </div>
          <p className="text-[11px] font-semibold uppercase tracking-widest text-[#FE6305] mb-5">
            AI &amp; Automation
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight max-w-3xl">
            Vibe Coding &amp; Custom Development
          </h1>
          <p className="mt-6 text-lg text-white/50 max-w-2xl leading-relaxed">
            Custom websites and internal software tools, built faster and more affordably with
            AI-assisted development — backed by senior technical expertise.
          </p>
        </div>
      </section>

      {/* Prose sections */}
      {sections.map((section, i) => (
        <section key={section.eyebrow} className={i % 2 === 0 ? "bg-[#F4F2EF]" : "bg-white"}>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
              <div className="lg:col-span-3">
                <p className="text-[11px] font-semibold uppercase tracking-widest text-[#FE6305] pt-1">
                  {section.eyebrow}
                </p>
              </div>
              <div className="lg:col-span-7 space-y-5">
                {section.heading && (
                  <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A1A] tracking-tight leading-snug">
                    {section.heading}
                  </h2>
                )}
                {section.paragraphs.map((p, j) => (
                  <p key={j} className="text-base text-[#1A1A1A]/60 leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* What We Offer */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
          <p className="text-[11px] font-semibold uppercase tracking-widest text-[#FE6305] mb-8">
            What We Offer
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-3.5">
            {offerings.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-[#1A1A1A]/70 leading-relaxed">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#FE6305] flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Related Work */}
      <section className="bg-[#F4F2EF]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
          <Link
            href="/case-studies/vibe-coding-done-right"
            className="group block rounded-xl border border-[#1A1A1A]/[0.07] bg-white hover:border-[#FE6305]/20 p-7 lg:p-8 transition-colors"
          >
            <p className="text-[11px] font-semibold uppercase tracking-widest text-[#FE6305] mb-3">
              Case Study
            </p>
            <h3 className="text-xl sm:text-2xl font-bold text-[#1A1A1A] tracking-tight leading-snug mb-3 group-hover:text-[#FE6305] transition-colors max-w-2xl">
              Vibe Coding, Done Right
            </h3>
            <p className="text-base text-[#1A1A1A]/60 leading-relaxed mb-6 max-w-2xl">
              How rsystems.nyc was designed, built, and is maintained with AI-assisted development —
              and what it actually takes to do it well.
            </p>
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#FE6305]">
              Read the case study: how we built this site
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">
                <path d="M3 13L13 3M13 3H6M13 3V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </Link>
        </div>
      </section>

          <PageEndCTA pageKey="/services/technology-consulting/vibe-coding" precedingBg="bg-[#F4F2EF]" />
</main>
  );
}

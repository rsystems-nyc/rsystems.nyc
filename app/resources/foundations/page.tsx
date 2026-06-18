import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { foundationsContent } from "./content";

export const metadata: Metadata = {
  title: "IT Foundations: What to Get Right Before It Gets Expensive — RSystems NYC",
  description:
    "The decisions that are cheap to get right early and expensive to fix later. The short version of the advice we give founders and operators most often.",
  alternates: { canonical: "https://rsystems.nyc/resources/foundations" },
};

// ─── Markdown → HTML renderer ────────────────────────────────────────────────

function escHtml(s: string): string {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function inlineFmt(s: string): string {
  return escHtml(s)
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/`([^`]+)`/g, "<code>$1</code>")
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_, text, href) =>
      /^https?:\/\//.test(href)
        ? `<a href="${href}" target="_blank" rel="noopener noreferrer">${text}</a>`
        : `<a href="${href}">${text}</a>`
    )
    .replace(/\*([^*\n]+)\*/g, "<em>$1</em>");
}

function parseListBlock(lines: string[]): string {
  const ordered = /^\d+\./.test(lines[0]);
  const tag = ordered ? "ol" : "ul";
  const items: string[] = [];
  let cur = "";
  for (const line of lines) {
    if (/^(-|\d+\.)\s/.test(line)) {
      if (cur) items.push(cur);
      cur = line.replace(/^(-|\d+\.)\s/, "");
    } else {
      cur += " " + line.trim();
    }
  }
  if (cur) items.push(cur);
  return `<${tag}>${items.map((i) => `<li>${inlineFmt(i.trim())}</li>`).join("")}</${tag}>`;
}

function renderBlock(block: string): string {
  if (block.startsWith("## ")) return `<h2>${inlineFmt(block.slice(3).trim())}</h2>`;
  if (block.startsWith("### ")) return `<h3>${inlineFmt(block.slice(4).trim())}</h3>`;

  const lines = block.split("\n");
  const fi = lines.findIndex((l) => /^(-|\d+\.)\s/.test(l));
  if (fi === -1) return `<p>${inlineFmt(block.replace(/\n/g, " ").trim())}</p>`;

  const pre = lines.slice(0, fi);
  const lst = lines.slice(fi);
  const listHtml = parseListBlock(lst);
  if (!pre.length) return listHtml;
  return `<p>${inlineFmt(pre.join(" ").trim())}</p>${listHtml}`;
}

function renderMarkdown(md: string): string {
  if (!md) return "";
  return md
    .split(/\n\n+/)
    .map((b) => b.trim())
    .filter(Boolean)
    .map((b) => renderBlock(b))
    .join("\n");
}

// ─────────────────────────────────────────────────────────────────────────────

export default function FoundationsPage() {
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
            IT Foundations: What to Get Right Before It Gets Expensive
          </h1>
          <p className="mt-6 text-lg text-white/50 max-w-2xl leading-relaxed">
            The decisions that are cheap to get right early and expensive to fix later. None of this
            is exotic, and almost none of it costs much when you do it from the start. The cost
            shows up years down the road, when undoing a shortcut means migrating every account,
            re-enrolling every device, or unwinding a permission structure nobody fully understands
            anymore. This is the short version of the advice we give founders and operators most
            often — and where to go on this site when you want the detail.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="bg-[#F4F2EF]">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
          <div
            className="prose-article"
            dangerouslySetInnerHTML={{ __html: renderMarkdown(foundationsContent) }}
          />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0F1117] text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-24 text-center">
          <p className="text-[11px] font-semibold uppercase tracking-widest text-[#E8500A] mb-5">
            Ready to build it right
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6 max-w-2xl mx-auto">
            Start with a conversation
          </h2>
          <p className="text-white/50 max-w-xl mx-auto mb-10 leading-relaxed">
            We work with organizations that are ready to do the foundation work properly. If that
            sounds like you, let&apos;s talk.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#E8500A] text-white text-[13px] font-semibold uppercase tracking-widest px-8 py-4 rounded-lg hover:bg-[#E8500A]/90 transition-colors"
          >
            Schedule a Conversation
          </Link>
        </div>
      </section>

    </main>
  );
}

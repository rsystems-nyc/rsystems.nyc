import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Support — RSystems",
  description:
    "Current RSystems clients: open a ticket at the support portal (support.rsystems.nyc) or email the support team.",
  alternates: { canonical: "https://rsystems.nyc/support" },
};

const methods = [
  {
    eyebrow: "Support Portal",
    title: "Open a ticket",
    body: "The fastest way to reach us. Submit a request and it goes straight to the team.",
    detail: "support.rsystems.nyc",
    href: "https://support.rsystems.nyc",
    external: true,
  },
  {
    eyebrow: "Email",
    title: "Send a note",
    body: "Prefer email? Write to us directly and we'll take it from there.",
    detail: "support@rsystems.nyc",
    href: "mailto:support@rsystems.nyc",
    external: false,
  },
];

export default function SupportPage() {
  return (
    <main className="flex-1">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#0F1117] text-white">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <p className="text-[11px] font-semibold uppercase tracking-widest text-[#FE6305] mb-3">
            Client Support
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight max-w-3xl">
            Need a hand?
          </h1>
          <p className="mt-3 text-lg text-white/50 max-w-2xl leading-relaxed">
            Already working with us? Here&apos;s how to reach the team. Open a ticket for anything
            non-urgent, and we&apos;ll get right back to you.
          </p>
        </div>
      </section>

      {/* Ways to reach us */}
      <section className="bg-[#F4F2EF]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {methods.map((m) => (
              <a
                key={m.href}
                href={m.href}
                {...(m.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="group flex flex-col rounded-xl border border-[#1A1A1A]/[0.07] bg-white p-7 hover:bg-[#F4F2EF] hover:border-[#FE6305]/40 transition-colors"
              >
                <p className="text-[11px] font-semibold uppercase tracking-widest text-[#FE6305] mb-2.5">
                  {m.eyebrow}
                </p>
                <h2 className="text-xl font-bold text-[#1A1A1A] tracking-tight mb-2 group-hover:text-[#FE6305] transition-colors">
                  {m.title}
                </h2>
                <p className="text-sm text-[#1A1A1A]/60 leading-relaxed flex-1 mb-5">{m.body}</p>
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#1A1A1A] group-hover:text-[#FE6305] transition-colors">
                  {m.detail}
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
                </span>
              </a>
            ))}
          </div>

          <p className="mt-10 text-sm text-[#1A1A1A]/50">
            Not a client yet?{" "}
            <Link href="/contact" className="font-semibold text-[#FE6305] hover:text-[#FE6305]/75 transition-colors">
              Get in touch
            </Link>{" "}
            and we&apos;ll take it from there.
          </p>
        </div>
      </section>
    </main>
  );
}

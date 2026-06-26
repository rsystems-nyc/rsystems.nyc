import Link from "next/link";
import type { Metadata } from "next";
import { mapPoints, worldPoints, listGroups } from "@/app/lib/clients";
import ClientMaps from "@/app/components/maps/ClientMaps";
import ClientList from "@/app/components/clients/ClientList";

export const metadata: Metadata = {
  title: "Clients | RSystems NYC",
  alternates: { canonical: "https://rsystems.nyc/our-work/clients" },
  description:
    "A selection of the organizations Reilly has worked with over 15+ years — through RSystems and through prior engagements — across industries and at every scale.",
};

export default function ClientsPage() {
  return (
    <main className="flex-1">

      {/* Hero */}
      <section className="bg-[#0F1117] text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <Link
            href="/our-work"
            className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-widest text-[#E8500A] mb-6 hover:text-[#E8500A]/75 transition-colors"
          >
            <span aria-hidden="true">←</span> Our Work
          </Link>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight max-w-3xl">
            Clients
          </h1>
          <p className="mt-5 text-lg text-white/50 max-w-2xl leading-relaxed">
            Over 15 years, Reilly has worked with hundreds of organizations
            across industries — through RSystems and through prior engagements —
            from early-stage startups to multinational companies. A selection
            is listed below.
          </p>
        </div>
      </section>

      {/* Client locations */}
      <section className="bg-gradient-to-b from-white from-[80%] to-[#F4F2EF]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 lg:pt-24 pb-10 lg:pb-12">
          <p className="text-[11px] font-semibold uppercase tracking-widest text-[#E8500A] mb-3">
            Our Reach
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1A1A1A] max-w-2xl">
            Where our work takes us
          </h2>
          <p className="mt-4 text-base text-[#1A1A1A]/60 max-w-2xl leading-relaxed">
            A look at the headquarters, offices, and field sites we&apos;ve supported —
            across New York, the United States, and around the world.
          </p>

          <div className="mt-12">
            <ClientMaps nycPoints={mapPoints} worldPoints={worldPoints} />
          </div>
        </div>
      </section>

      {/* Client directory — narrower, centered block so the three columns sit
          mid-page (column 2 lands at the horizontal center) rather than
          stretching edge-to-edge. */}
      <section className="relative overflow-hidden bg-[#F4F2EF]">
        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 pt-10 lg:pt-12 pb-20 lg:pb-24">
          <ClientList groups={listGroups} />
          <p className="mt-16 text-sm text-[#1A1A1A]/40">
            Organizations we&apos;ve worked with across 15+ years — current,
            inactive, and former engagements. Not a complete list.
          </p>
        </div>
      </section>

    </main>
  );
}

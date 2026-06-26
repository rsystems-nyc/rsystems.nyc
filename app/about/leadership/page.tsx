import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Leadership — RSystems",
  alternates: { canonical: "https://rsystems.nyc/about/leadership" },
  description:
    "RSystems is led by Reilly Scull, founder and CTO with 20+ years of experience at the intersection of enterprise infrastructure and organizational strategy.",
};

export default function LeadershipPage() {
  return (
    <main className="flex-1">

      {/* Hero */}
      <section className="bg-[#0F1117] text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <Link
            href="/about"
            className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-widest text-[#FE6305] mb-6 hover:text-[#FE6305]/75 transition-colors"
          >
            <span aria-hidden="true">←</span> About
          </Link>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight max-w-3xl">
            Leadership
          </h1>
          <p className="mt-5 text-lg text-white/50 max-w-xl leading-relaxed">
            When you engage RSystems, you work directly with the founder — not a project manager.
          </p>
        </div>
      </section>

      {/* Leadership */}
      <section className="bg-[#F4F2EF]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <div className="lg:col-span-4">
              <div className="aspect-square rounded-xl overflow-hidden max-w-xs">
                <Image
                  src="/assets/reilly-scull.jpg"
                  alt="Reilly Scull"
                  width={576}
                  height={576}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>
            <div className="lg:col-span-7 lg:pt-2 space-y-5">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A1A] tracking-tight">
                  Reilly Scull
                </h2>
                <p className="mt-1.5 text-base text-[#FE6305] font-medium">
                  Founder &amp; CTO
                </p>
              </div>
              <p className="text-base text-[#1A1A1A]/60 leading-relaxed">
                Reilly Scull has spent more than 20 years at the intersection of enterprise
                infrastructure and organizational strategy. Trained as a mechanical engineer,
                he brings a systems-level discipline to technology work — focused on how
                components interact under load, where failure points emerge, and what it
                takes to build infrastructure that performs consistently at scale.
              </p>
              <p className="text-base text-[#1A1A1A]/60 leading-relaxed">
                Based in New York City, Reilly founded RSystems in 2011 to focus exclusively
                on the work he does best: engaging at the executive level to define
                infrastructure strategy, design complex environments, and help organizations
                translate technology investments into operational advantage. He has led
                engagements across Microsoft 365, Azure, VMware, JumpCloud, and on-premises
                datacenter environments for clients across finance, media, professional
                services, and healthcare.
              </p>
              <p className="text-base text-[#1A1A1A]/60 leading-relaxed">
                He doesn&apos;t run a team of junior consultants. When you engage RSystems,
                you work directly with Reilly — which means the expertise you evaluated
                is the expertise you get.
              </p>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}

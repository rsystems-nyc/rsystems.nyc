import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Synology NAS Consulting & Deployment | RSystems" },
  description: "RSystems deploys Synology NAS solutions for organizations where performance and economics beat cloud storage — creative workflows, VMware storage, and disaster recovery.",
  alternates: { canonical: "https://rsystems.nyc/services/technology-consulting/synology-storage-consulting/" },
  openGraph: {
    title: "Synology NAS Consulting & Deployment | RSystems",
    description: "RSystems deploys Synology NAS solutions for organizations where performance and economics beat cloud storage — creative workflows, VMware storage, and disaster recovery.",
    url: "https://rsystems.nyc/services/technology-consulting/synology-storage-consulting/",
  },
  twitter: {
    title: "Synology NAS Consulting & Deployment | RSystems",
    description: "RSystems deploys Synology NAS solutions for organizations where performance and economics beat cloud storage — creative workflows, VMware storage, and disaster recovery.",
  },
};

const useCases = [
  {
    title: "Creative Workflows & High-Speed Storage",
    body: "RAID 10 configurations and SSD caching to support 4K video editing, CAD file access, and other throughput-intensive workflows — for architecture firms, video studios, and production environments.",
  },
  {
    title: "Virtualization Storage",
    body: "Synology as a storage backend for VMware and Hyper-V environments — enterprise-grade performance at a fraction of the cost of dedicated SAN hardware.",
  },
  {
    title: "Disaster Recovery & Replication",
    body: "Units deployed at secondary locations for replicated backups — one of the more cost-effective business continuity options available for organizations with on-premises infrastructure.",
  },
  {
    title: "Surveillance & Physical Security",
    body: "Synology Surveillance Station turns a NAS into a capable network video recorder compatible with cameras from virtually any manufacturer.",
  },
];

const approach = [
  { step: "01", title: "Assessment", body: "Evaluate your current storage environment, workflows, data volumes, and growth trajectory." },
  { step: "02", title: "Strategic Planning", body: "Hardware selection, RAID configuration, and network design recommendations matched to your specific requirements." },
  { step: "03", title: "Pre-Configuration", body: "Units configured and tested before delivery — minimizing on-site time and deployment risk." },
  { step: "04", title: "Implementation", body: "Installation, network integration, and data migration." },
  { step: "05", title: "Documentation", body: "Complete records of all configuration decisions for your team." },
  { step: "06", title: "Ongoing Support", body: "Monitoring, capacity planning, and lifecycle guidance as your storage needs evolve." },
];

export default function SynologyStorageConsultingPage() {
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
          <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-widest text-white/30 mb-10 flex-wrap">
            <Link href="/services" className="hover:text-white/60 transition-colors">Services</Link>
            <span>/</span>
            <Link href="/services/technology-consulting" className="hover:text-white/60 transition-colors">Technology Consulting</Link>
            <span>/</span>
            <Link href="/services/technology-consulting/compute-storage" className="hover:text-white/60 transition-colors">Compute & Storage</Link>
            <span>/</span>
            <span className="text-white/50">Synology Storage Consulting</span>
          </div>
          <p className="text-[11px] font-semibold uppercase tracking-widest text-[#E8500A] mb-5">
            Technology Consulting
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight max-w-3xl">
            Synology Storage Consulting
          </h1>
          <p className="mt-6 text-lg text-white/50 max-w-2xl leading-relaxed">
            High-performance NAS solutions for organizations where cloud storage
            doesn&apos;t deliver the performance or economics the work actually requires.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="bg-[#F4F2EF]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-3">
              <p className="text-[11px] font-semibold uppercase tracking-widest text-[#E8500A] pt-1">
                Overview
              </p>
            </div>
            <div className="lg:col-span-7 space-y-5">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A1A] tracking-tight leading-snug">
                Cloud storage is right for many organizations. Not all of them.
              </h2>
              <p className="text-base text-[#1A1A1A]/60 leading-relaxed">
                Cloud storage is the right choice for many organizations, but it is not
                the right answer for all of them. RSystems deploys Synology network-attached
                storage for clients needing performance and economics that cloud solutions
                cannot match. Synology delivers serious performance without the overhead of
                traditional enterprise vendors, and the platform supports multiple simultaneous
                functions: file server, virtualization backend, replication target, and security
                camera recorder.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
          <p className="text-[11px] font-semibold uppercase tracking-widest text-[#E8500A] mb-4">
            Use Cases
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A1A] tracking-tight mb-12 max-w-xl">
            Where Synology makes sense.
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {useCases.map((item) => (
              <div key={item.title} className="w-full sm:w-[calc(50%-0.5rem)] border border-[#1A1A1A]/[0.07] rounded-xl bg-white p-7 hover:bg-[#F4F2EF] transition-colors">
                <h3 className="text-[15px] font-semibold text-[#1A1A1A] mb-3 leading-snug">{item.title}</h3>
                <p className="text-sm text-[#1A1A1A]/50 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="bg-[#F4F2EF]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
          <p className="text-[11px] font-semibold uppercase tracking-widest text-[#E8500A] mb-4">
            Our Approach
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A1A] tracking-tight mb-12 max-w-xl">
            How RSystems approaches Synology engagements.
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {approach.map((item) => (
              <div key={item.step} className="w-full sm:w-[calc(50%-0.5rem)] border border-[#1A1A1A]/[0.07] rounded-xl bg-[#F4F2EF] p-7 hover:bg-white transition-colors">
                <p className="text-[11px] font-semibold text-[#E8500A] mb-3">{item.step}</p>
                <h3 className="text-[15px] font-semibold text-[#1A1A1A] mb-2 leading-snug">{item.title}</h3>
                <p className="text-sm text-[#1A1A1A]/50 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Callout */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 lg:py-12">
          <div className="border-t border-b border-[#1A1A1A]/[0.08] py-8 flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-12">
            <div className="flex-1 min-w-0">
              <p className="text-[11px] font-semibold uppercase tracking-widest text-[#E8500A] mb-2">Case Study</p>
              <h3 className="text-[15px] font-semibold text-[#1A1A1A] mb-2 leading-snug">See This In Practice</h3>
              <p className="text-sm text-[#1A1A1A]/60 leading-relaxed">This work is documented in our Redundancy by Design case study — a zero-compromise infrastructure covering networking, wireless, compute, and storage, with redundancy as a first-order constraint.</p>
            </div>
            <a href="https://rsystems.nyc/case-studies/redundancy-by-design" className="flex-shrink-0 text-sm font-semibold text-[#E8500A] hover:text-[#E8500A]/75 transition-colors whitespace-nowrap">
              Read the Case Study →
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

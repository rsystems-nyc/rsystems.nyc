import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "On-Premises Server & Storage Infrastructure | RSystems" },
  description: "Dell PowerEdge, Synology, and VMware — on-premises server and storage infrastructure designed for high availability, virtualization, and demanding enterprise workloads.",
  alternates: { canonical: "https://rsystems.nyc/services/technology-consulting/compute-storage/" },
  openGraph: {
    title: "On-Premises Server & Storage Infrastructure | RSystems",
    description: "Dell PowerEdge, Synology, and VMware — on-premises server and storage infrastructure designed for high availability, virtualization, and demanding enterprise workloads.",
    url: "https://rsystems.nyc/services/technology-consulting/compute-storage/",
  },
  twitter: {
    title: "On-Premises Server & Storage Infrastructure | RSystems",
    description: "Dell PowerEdge, Synology, and VMware — on-premises server and storage infrastructure designed for high availability, virtualization, and demanding enterprise workloads.",
  },
};

const services = [
  {
    name: "Dell PowerEdge Server Solutions",
    href: "/services/technology-consulting/dell-poweredge-server-solutions",
    tagline: "Physical server design and deployment for high-performance computing, large-scale data, and virtualization.",
  },
  {
    name: "Synology Storage Consulting",
    href: "/services/technology-consulting/synology-storage-consulting",
    tagline: "High-performance NAS solutions for creative workflows, virtualization, and disaster recovery.",
  },
  {
    name: "VMware Administration & Infrastructure Design",
    href: "/services/technology-consulting/vmware-administration-infrastructure-design",
    tagline: "VMware optimization, licensing guidance, and infrastructure design in the post-Broadcom landscape.",
  },
];

const appropriateFor = [
  "Organizations whose cloud storage costs are prohibitive relative to their data volumes",
  "Teams running VMware that need help with design, optimization, or post-Broadcom licensing decisions",
  "Organizations working with large files — 4K video, CAD, medical imaging — that require high-throughput local storage",
  "Teams building or expanding a datacenter or server room",
  "Organizations whose existing physical infrastructure is aging and needs a lifecycle assessment",
];

const relatedCategories = [
  {
    href: "/services/technology-consulting/cloud",
    name: "Cloud",
    description: "Azure architecture, cloud migration, and hybrid infrastructure design.",
  },
  {
    href: "/services/technology-consulting/networking",
    name: "Networking",
    description: "Switching, firewall, and WiFi infrastructure design and deployment.",
  },
  {
    href: "/services/technology-consulting/strategy",
    name: "Strategy & Advisory",
    description: "Initial assessments, Virtual CTO, and disaster recovery planning.",
  },
];

export default function ComputeStoragePage() {
  return (
    <main className="flex-1">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#0F1117] text-white">
        <div className="hidden sm:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/4 pointer-events-none select-none">
          <Image src="/assets/RS_Pulsar_Only_Black.svg" alt="" width={700} height={700} className="w-[560px] h-auto opacity-[0.04]" aria-hidden="true" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-widest text-white/30 mb-10 flex-wrap">
            <Link href="/services" className="hover:text-white/60 transition-colors">Services</Link>
            <span>/</span>
            <Link href="/services/technology-consulting" className="hover:text-white/60 transition-colors">Technology Consulting</Link>
            <span>/</span>
            <span className="text-white/50">Compute & Storage</span>
          </div>
          <p className="text-[11px] font-semibold uppercase tracking-widest text-[#E8500A] mb-5">Technology Consulting</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight max-w-3xl">Compute & Storage</h1>
          <p className="mt-6 text-lg text-white/50 max-w-2xl leading-relaxed">
            Dell PowerEdge, Synology, and VMware — on-premises server and storage infrastructure designed for high availability, virtualization, and demanding workloads.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="bg-[#F4F2EF]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-3">
              <p className="text-[11px] font-semibold uppercase tracking-widest text-[#E8500A] pt-1">Overview</p>
            </div>
            <div className="lg:col-span-7 space-y-5">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A1A] tracking-tight leading-snug">
                Cloud is the right answer for many workloads. Not all of them.
              </h2>
              <p className="text-base text-[#1A1A1A]/60 leading-relaxed">
                For organizations managing large datasets, creative workflows, virtualization environments, or latency-sensitive applications, on-premises compute and storage infrastructure delivers performance and economics that cloud cannot match at scale. A high-resolution video pipeline, a multi-terabyte CAD archive, or a VMware cluster supporting many virtual machines all have workload characteristics that favor physical infrastructure — once total cost of ownership is analyzed honestly rather than assumed.
              </p>
              <p className="text-base text-[#1A1A1A]/60 leading-relaxed">
                RSystems designs and deploys physical infrastructure using Dell PowerEdge servers, Synology NAS appliances, and VMware vSphere — a proven stack that forms the backbone of a private datacenter. We approach every engagement with a clear TCO analysis comparing on-premises to cloud alternatives, and we recommend physical infrastructure only when the performance requirements and economics justify it.
              </p>
              <p className="text-base text-[#1A1A1A]/60 leading-relaxed">
                Broadcom&apos;s 2023 acquisition of VMware has fundamentally altered the cost structure for organizations running vSphere. Some have seen tenfold cost increases on what were previously perpetual licenses. Understanding what you actually need — and what you&apos;re actually paying for — requires someone with current hands-on experience in the licensing environment. RSystems operates VMware internally and advises on both optimization and migration alternatives where costs have changed significantly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Appropriate For */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-3">
              <p className="text-[11px] font-semibold uppercase tracking-widest text-[#E8500A] pt-1">Appropriate For</p>
            </div>
            <div className="lg:col-span-7">
              <ul className="space-y-5">
                {appropriateFor.map((item) => (
                  <li key={item} className="flex items-start gap-4 text-base text-[#1A1A1A]/70 leading-relaxed">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#E8500A] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach + Services */}
      <section className="bg-[#F4F2EF]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-24">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 mb-20">
            <div className="lg:col-span-3">
              <p className="text-[11px] font-semibold uppercase tracking-widest text-[#E8500A] pt-1">Our Approach</p>
            </div>
            <div className="lg:col-span-7">
              <div className="border-l-2 border-[#E8500A] pl-6 space-y-4">
                <p className="text-base text-[#1A1A1A]/70 leading-relaxed">
                  RSystems obsesses over hardware specification — CPU selection, memory sizing, storage endurance characteristics, and network interface configuration all have long-term implications that a generic procurement decision will miss. We pre-configure and test all hardware before delivery, and document every configuration decision so your team can understand and manage the environment without depending on us for answers to routine questions.
                </p>
                <p className="text-base text-[#1A1A1A]/70 leading-relaxed">
                  Every engagement includes a TCO analysis comparing on-premises to cloud alternatives. We recommend physical infrastructure when the economics and performance requirements justify it — and we&apos;re direct about the cases where cloud is the more appropriate choice. Our guidance comes from operational experience: RSystems runs Dell PowerEdge, Synology, and VMware infrastructure internally, across multiple client industries, and has done so for over a decade.
                </p>
              </div>
            </div>
          </div>

          <p className="text-[11px] font-semibold uppercase tracking-widest text-[#E8500A] mb-8">Services</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#1A1A1A]/[0.07] border border-[#1A1A1A]/[0.07] rounded-xl overflow-hidden">
            {services.map((service) => (
              <Link key={service.href} href={service.href} className="group relative bg-[#F4F2EF] p-7 flex flex-col hover:bg-white transition-colors">
                <span className="absolute top-7 right-7 text-[#1A1A1A]/20 group-hover:text-[#E8500A] transition-colors">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 13L13 3M13 3H6M13 3V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </span>
                <h3 className="text-[15px] font-semibold text-[#1A1A1A] leading-snug pr-6 mb-3 group-hover:text-[#E8500A] transition-colors">{service.name}</h3>
                <p className="text-sm text-[#1A1A1A]/50 leading-relaxed">{service.tagline}</p>
              </Link>
            ))}
          </div>

        </div>
      </section>

      {/* Related Categories */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
          <p className="text-[11px] font-semibold uppercase tracking-widest text-[#E8500A] mb-8">Related Practice Areas</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-[#1A1A1A]/[0.07] border border-[#1A1A1A]/[0.07] rounded-xl overflow-hidden">
            {relatedCategories.map((cat) => (
              <Link key={cat.href} href={cat.href} className="group relative bg-white p-6 flex flex-col hover:bg-[#F4F2EF] transition-colors">
                <span className="absolute top-6 right-6 text-[#1A1A1A]/20 group-hover:text-[#E8500A] transition-colors">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 13L13 3M13 3H6M13 3V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </span>
                <h3 className="text-[14px] font-semibold text-[#1A1A1A] pr-6 mb-2 group-hover:text-[#E8500A] transition-colors">{cat.name}</h3>
                <p className="text-sm text-[#1A1A1A]/45 leading-relaxed">{cat.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0F1117] text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">Let&apos;s talk about your project.</h2>
              <p className="mt-3 text-white/50 text-base">Schedule a conversation with the RSystems team.</p>
            </div>
            <Link href="/contact" className="flex-shrink-0 inline-block text-sm font-medium bg-[#E8500A] text-white px-6 py-3 rounded hover:bg-[#E8500A]/85 transition-colors">Schedule a Conversation</Link>
          </div>
        </div>
      </section>
    </main>
  );
}

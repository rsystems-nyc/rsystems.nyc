import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Cloud Strategy & Architecture Consulting | RSystems NYC" },
  description: "Azure architecture, cloud storage strategy, and hybrid infrastructure design — connecting your cloud environment to your business goals with minimal disruption.",
  alternates: { canonical: "https://rsystems.nyc/services/technology-consulting/cloud/" },
  openGraph: {
    title: "Cloud Strategy & Architecture Consulting | RSystems NYC",
    description: "Azure architecture, cloud storage strategy, and hybrid infrastructure design — connecting your cloud environment to your business goals with minimal disruption.",
    url: "https://rsystems.nyc/services/technology-consulting/cloud/",
  },
  twitter: {
    title: "Cloud Strategy & Architecture Consulting | RSystems NYC",
    description: "Azure architecture, cloud storage strategy, and hybrid infrastructure design — connecting your cloud environment to your business goals with minimal disruption.",
  },
};

const services = [
  {
    name: "Azure Consulting & Development",
    href: "/services/technology-consulting/azure-consulting-and-development",
    tagline: "Azure architecture from single virtual servers to multi-region, enterprise-scale deployments.",
  },
  {
    name: "Cloud Storage & Computing Solutions",
    href: "/services/technology-consulting/cloud-storage-and-computing-solutions",
    tagline: "Cloud migration, hybrid storage design, and virtual infrastructure for distributed organizations.",
  },
];

const appropriateFor = [
  "Organizations migrating from on-premises infrastructure to cloud or hybrid environments",
  "Teams whose cloud costs are growing faster than the value the organization is extracting",
  "Organizations that need geographic redundancy or disaster recovery capabilities",
  "Teams running cloud infrastructure without formal architecture or documentation",
  "Organizations evaluating whether cloud or on-premises is the right choice for a specific workload",
];

const relatedCategories = [
  {
    href: "/services/technology-consulting/strategy",
    name: "Strategy & Advisory",
    description: "Initial assessments, Virtual CTO, and disaster recovery planning.",
  },
  {
    href: "/services/technology-consulting/compute-storage",
    name: "Compute & Storage",
    description: "Dell PowerEdge, Synology NAS, and VMware for on-premises workloads.",
  },
  {
    href: "/services/technology-consulting/networking",
    name: "Networking",
    description: "Switching, firewall, and WiFi infrastructure design and deployment.",
  },
];

export default function CloudPage() {
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
            <span className="text-white/50">Cloud</span>
          </div>
          <p className="text-[11px] font-semibold uppercase tracking-widest text-[#E8500A] mb-5">Technology Consulting</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight max-w-3xl">Cloud</h1>
          <p className="mt-6 text-lg text-white/50 max-w-2xl leading-relaxed">
            Azure architecture, cloud storage strategy, and hybrid infrastructure design — connecting your cloud environment to your business goals with minimal disruption.
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
                Cloud infrastructure decisions have long tails.
              </h2>
              <p className="text-base text-[#1A1A1A]/60 leading-relaxed">
                The architectural decisions made during a cloud migration — region selection, network topology, identity integration, backup strategy — shape an organization&apos;s operational reality for years. Made without a clear understanding of the tradeoffs, they create technical debt that compounds over time: unpredictable cost, poor performance, and environments that are difficult to manage or extend without the original vendor.
              </p>
              <p className="text-base text-[#1A1A1A]/60 leading-relaxed">
                RSystems works primarily with Microsoft Azure, with deep experience in hybrid environments that connect cloud infrastructure to on-premises networks and physical datacenters. We approach cloud engagements with a clear-eyed view of when cloud is the right answer and when it isn&apos;t — for organizations managing large datasets or performance-sensitive workloads, on-premises infrastructure often delivers better economics and more predictable performance.
              </p>
              <p className="text-base text-[#1A1A1A]/60 leading-relaxed">
                Every cloud engagement includes cost modeling before commitment, architecture documentation throughout, and knowledge transfer at the end. Your team should be able to manage the environment long-term without operational dependency on RSystems for routine work.
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
                  RSystems evaluates cloud vs. on-premises economics honestly — we model total cost of ownership before recommending any configuration, and we&apos;re willing to tell clients when cloud isn&apos;t the right answer for a specific workload. Our primary cloud platform is Microsoft Azure, with deep hands-on experience across virtual machines, Azure Virtual Desktop, hub-and-spoke WAN, Site Recovery, and hybrid identity configurations.
                </p>
                <p className="text-base text-[#1A1A1A]/70 leading-relaxed">
                  Every cloud engagement includes documentation and knowledge transfer so your team can manage the environment long-term without operational dependency on RSystems. Configuration decisions that aren&apos;t documented don&apos;t survive staff transitions — we build environments that your team can understand, extend, and troubleshoot independently.
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

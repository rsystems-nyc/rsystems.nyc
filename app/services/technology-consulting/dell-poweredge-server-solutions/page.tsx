import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import PageEndCTA from "@/app/components/PageEndCTA";

export const metadata: Metadata = {
  title: { absolute: "Dell PowerEdge Server Consulting & Deployment | RSystems" },
  description: "RSystems designs and deploys Dell PowerEdge servers for high-performance computing, large-scale data retention, and VMware virtualization — with TCO analysis and full documentation.",
  alternates: { canonical: "https://rsystems.nyc/services/technology-consulting/dell-poweredge-server-solutions/" },
  openGraph: {
    title: "Dell PowerEdge Server Consulting & Deployment | RSystems",
    description: "RSystems designs and deploys Dell PowerEdge servers for high-performance computing, large-scale data retention, and VMware virtualization — with TCO analysis and full documentation.",
    url: "https://rsystems.nyc/services/technology-consulting/dell-poweredge-server-solutions/",
  },
  twitter: {
    title: "Dell PowerEdge Server Consulting & Deployment | RSystems",
    description: "RSystems designs and deploys Dell PowerEdge servers for high-performance computing, large-scale data retention, and VMware virtualization — with TCO analysis and full documentation.",
  },
};

const services = [
  "Total Cost of Ownership analysis comparing on-premises to cloud alternatives",
  "Precision component specification — CPU, RAM, and storage matched to workload",
  "SSD endurance planning (read-intensive vs. write-intensive workloads)",
  "Hypervisor configuration — VMware and Windows Server",
  "Network optimization — 10GbE, iSCSI, and Jumbo Frames",
  "Remote management and health monitoring via iDRAC",
];

const approach = [
  { step: "01", title: "Assessment & Analysis", body: "Understand your workloads, performance requirements, and the total cost of on-premises vs. cloud alternatives." },
  { step: "02", title: "Specification", body: "Precision component selection — CPU, RAM, and storage matched to your specific requirements, not a pre-configured SKU." },
  { step: "03", title: "Procurement & Logistics", body: "Hardware acquisition, shipping coordination, and delivery management." },
  { step: "04", title: "Optimization", body: "Hypervisor configuration, network optimization, and performance validation before production use." },
  { step: "05", title: "Documentation", body: "Complete records of hardware configuration, network settings, and management access." },
  { step: "06", title: "Lifecycle Management", body: "Ongoing guidance on firmware updates, capacity planning, and hardware refresh timing." },
];

export default function DellPowerEdgePage() {
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
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-widest text-white/30 mb-10 flex-wrap">
            <Link href="/services" className="hover:text-white/60 transition-colors">Services</Link>
            <span>/</span>
            <Link href="/services/technology-consulting" className="hover:text-white/60 transition-colors">Technology Consulting</Link>
            <span>/</span>
            <Link href="/services/technology-consulting/compute-storage" className="hover:text-white/60 transition-colors">Compute & Storage</Link>
            <span>/</span>
            <span className="text-white/50">Dell PowerEdge Server Solutions</span>
          </div>
          <p className="text-[11px] font-semibold uppercase tracking-widest text-[#FE6305] mb-5">
            Technology Consulting
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight max-w-3xl">
            Dell PowerEdge Server Solutions
          </h1>
          <p className="mt-6 text-lg text-white/50 max-w-2xl leading-relaxed">
            Physical server design and deployment for organizations where on-premises
            infrastructure outperforms cloud — for large datasets, creative workflows,
            and virtualization environments.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="bg-[#F4F2EF]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-3">
              <p className="text-[11px] font-semibold uppercase tracking-widest text-[#FE6305] pt-1">
                Overview
              </p>
            </div>
            <div className="lg:col-span-7 space-y-5">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A1A] tracking-tight leading-snug">
                Cloud isn&apos;t always the right answer.
              </h2>
              <p className="text-base text-[#1A1A1A]/60 leading-relaxed">
                Physical on-premises infrastructure outperforms cloud solutions for
                organizations managing large datasets, creative workflows, or virtualization
                environments where latency and long-term costs become limiting factors.
                RSystems specializes in Dell PowerEdge for its reliability, management
                capabilities via iDRAC, and enterprise support infrastructure.
              </p>
              <p className="text-base text-[#1A1A1A]/60 leading-relaxed">
                Our recommendations are based on your performance requirements — not
                on what&apos;s easiest to configure or what carries the highest margin.
                We run Dell PowerEdge hardware internally, so our guidance comes from
                direct operational experience with the platform.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-3">
              <p className="text-[11px] font-semibold uppercase tracking-widest text-[#FE6305] pt-1">
                What We Do
              </p>
            </div>
            <div className="lg:col-span-7">
              <ul className="space-y-4">
                {services.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-base text-[#1A1A1A]/70">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#FE6305] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="bg-[#F4F2EF]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
          <p className="text-[11px] font-semibold uppercase tracking-widest text-[#FE6305] mb-4">
            Our Approach
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A1A] tracking-tight mb-12 max-w-xl">
            How RSystems approaches Dell PowerEdge engagements.
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {approach.map((item) => (
              <div key={item.step} className="w-full sm:w-[calc(50%-0.5rem)] border border-[#1A1A1A]/[0.07] rounded-xl bg-[#F4F2EF] p-7 hover:bg-white transition-colors">
                <p className="text-[11px] font-semibold text-[#FE6305] mb-3">{item.step}</p>
                <h3 className="text-[15px] font-semibold text-[#1A1A1A] mb-2 leading-snug">{item.title}</h3>
                <p className="text-sm text-[#1A1A1A]/50 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

          <PageEndCTA pageKey="/services/technology-consulting/dell-poweredge-server-solutions" precedingBg="bg-white" />
</main>
  );
}

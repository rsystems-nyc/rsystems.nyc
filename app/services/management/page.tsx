import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Managed Services | RSystems NYC" },
  description:
    "RSystems provides senior-level managed services for organizations that need ongoing platform administration and back-end infrastructure management — identity platforms, cloud infrastructure, endpoint management, and security tooling, without the help desk overhead.",
  alternates: { canonical: "https://rsystems.nyc/services/management/" },
  openGraph: {
    title: "Managed Services | RSystems NYC",
    description:
      "RSystems provides senior-level managed services for organizations that need ongoing platform administration and back-end infrastructure management — identity platforms, cloud infrastructure, endpoint management, and security tooling, without the help desk overhead.",
    url: "https://rsystems.nyc/services/management/",
  },
  twitter: {
    title: "Managed Services | RSystems NYC",
    description:
      "RSystems provides senior-level managed services for organizations that need ongoing platform administration and back-end infrastructure management — identity platforms, cloud infrastructure, endpoint management, and security tooling, without the help desk overhead.",
  },
};

const managedAreas = [
  {
    label: "Identity and directory platforms",
    description: "Entra ID, JumpCloud, Okta, Google Workspace, Microsoft 365",
  },
  {
    label: "Cloud infrastructure",
    description:
      "AWS, Azure, GCP — ongoing administration, cost optimization, and security posture management",
  },
  {
    label: "Server and storage infrastructure",
    description:
      "On-premises and hybrid environments, VMware, Hyper-V, SAN and NAS storage",
  },
  {
    label: "Endpoint management",
    description:
      "Intune, Autopilot, JumpCloud MDM, device policy, and fleet health",
  },
  {
    label: "Security tooling",
    description:
      "Defender, firewall administration, patch management, backup and recovery oversight",
  },
  {
    label: "Network infrastructure",
    description:
      "Switches, firewalls, wireless — SonicWall, Fortinet, Cisco, Ruckus, Mist",
  },
];

export default function ManagementIndexPage() {
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
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-widest text-white/30 hover:text-white/60 transition-colors mb-10"
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
              <path d="M8 1L3 6L8 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Services
          </Link>
          <p className="text-[11px] font-semibold uppercase tracking-widest text-[#E8500A] mb-5">
            Managed Services
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight max-w-3xl">
            Senior-level managed services for complex infrastructure environments.
          </h1>
          <p className="mt-6 text-lg text-white/50 max-w-2xl leading-relaxed">
            RSystems provides ongoing managed services for organizations that need
            senior-level platform administration and back-end infrastructure management
            on a retainer basis. We handle the work that requires genuine expertise —
            identity platforms, cloud infrastructure, server and storage administration,
            security tooling, and the day-to-day oversight of complex environments —
            so your leadership team isn&apos;t carrying that operational burden alone.
          </p>
        </div>
      </section>

      {/* What We Manage */}
      <section className="bg-[#F4F2EF]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-3">
              <p className="text-[11px] font-semibold uppercase tracking-widest text-[#E8500A] pt-1">
                What We Manage
              </p>
            </div>
            <div className="lg:col-span-7 space-y-5">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A1A] tracking-tight leading-snug">
                Identity, cloud, servers, endpoints, security, and network.
              </h2>
              <ul className="space-y-4 pt-1">
                {managedAreas.map((area) => (
                  <li key={area.label} className="flex items-start gap-3">
                    <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-[#E8500A] flex-shrink-0" />
                    <p className="text-base text-[#1A1A1A]/60 leading-relaxed">
                      <span className="font-semibold text-[#1A1A1A]">{area.label}</span>
                      {" — "}
                      {area.description}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work Best */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-3">
              <p className="text-[11px] font-semibold uppercase tracking-widest text-[#E8500A] pt-1">
                How We Work Best
              </p>
            </div>
            <div className="lg:col-span-7 space-y-5">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A1A] tracking-tight leading-snug">
                Senior technical oversight and back-end platform management.
              </h2>
              <p className="text-base text-[#1A1A1A]/60 leading-relaxed">
                We&apos;re the right partner for organizations that need senior technical
                oversight and back-end platform management. When we do provide end-user
                support, it&apos;s usually for executives and technically complex situations
                that warrant a senior practitioner — not the basic ticket queue.
              </p>
              <p className="text-base text-[#1A1A1A]/60 leading-relaxed">
                For routine help desk and day-to-day end-user support, our honest advice
                is to hire for it internally. A less experienced, less expensive hire
                dedicated to that layer will serve your team better than an outside firm
                billing senior rates to reset passwords. We&apos;d rather help you hire and
                onboard that person well than take work that isn&apos;t the best use of
                either of our time.
              </p>
              <p className="text-base text-[#1A1A1A]/60 leading-relaxed">
                That said, it&apos;s not a hard rule. If you need help across the board while
                you&apos;re getting the right person in place — or if your situation genuinely
                calls for it — we&apos;ll be there. We just prefer not to structure engagements
                that way long-term, and we&apos;ll always tell you when we think there&apos;s a
                better answer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0F1117] text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Let&apos;s talk about your infrastructure.
              </h2>
              <p className="mt-3 text-white/50 text-base">
                Schedule a conversation with the RSystems team.
              </p>
            </div>
            <Link
              href="/contact"
              className="flex-shrink-0 inline-block text-sm font-medium bg-[#E8500A] text-white px-6 py-3 rounded hover:bg-[#E8500A]/85 transition-colors"
            >
              Schedule a Conversation
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}

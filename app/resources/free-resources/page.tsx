import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Resources — RSystems NYC",
  description: "No-cost tools and programs every organization should know about.",
  alternates: { canonical: "https://rsystems.nyc/resources/free-resources" },
};

type Block =
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] }

interface Resource {
  id: string
  title: string
  blocks: Block[]
  comingSoon?: boolean
}

const resources: Resource[] = [
  {
    id: "coming-soon",
    title: "Coming Soon",
    comingSoon: true,
    blocks: [
      { type: "p", text: "Additional resource coming shortly." },
    ],
  },
  {
    id: "google-cloud-identity-free",
    title: "Google Cloud Identity Free",
    blocks: [
      {
        type: "p",
        text: "Google Cloud Identity is Google's identity and access management platform — and its free tier is one of the most underutilized tools in the SMB technology stack.",
      },
      { type: "p", text: "The free tier (Cloud Identity Free) gives you:" },
      {
        type: "ul",
        items: [
          "Up to 50 managed user accounts",
          "Google as your identity provider (SAML SSO to connected applications)",
          "Basic device management for Android and Chrome OS",
          "Security reporting and audit logs",
        ],
      },
      {
        type: "p",
        text: "What this means in practice: you can use Google as your identity provider at no cost. If your organization already uses Google Workspace for email and productivity, you likely have this capability and aren't using it. If you're a small team that needs a directory and basic SSO but can't justify a JumpCloud or Okta subscription, Cloud Identity Free may be enough.",
      },
      {
        type: "p",
        text: "The limits: no Gmail, no Google Drive, no the rest of Workspace. This is strictly identity management. The free tier also caps at 50 accounts — above that, you're looking at Cloud Identity Premium or Google Workspace.",
      },
      {
        type: "p",
        text: "Where it fits: organizations with tight budgets that need a starting point for identity management, or teams supplementing another directory with Google's IdP capabilities for specific applications.",
      },
      {
        type: "p",
        text: "How to access it: Google Admin console → create a Cloud Identity Free account at admin.google.com.",
      },
    ],
  },
  {
    id: "microsoft-entra-id-free",
    title: "Microsoft Entra ID Free",
    blocks: [
      {
        type: "p",
        text: "Every Microsoft 365 tenant includes Entra ID Free. Most organizations using Microsoft 365 are sitting on this capability without realizing the full scope of what's available.",
      },
      { type: "p", text: "The free tier includes:" },
      {
        type: "ul",
        items: [
          "Unlimited users and groups",
          "SSO with up to 10 apps per user",
          "Microsoft Authenticator-based MFA",
          "Self-service password reset for cloud-only accounts",
          "Basic identity protection reports",
          "B2B collaboration (guest access)",
        ],
      },
      {
        type: "p",
        text: "What requires paid licensing (P1/P2): Conditional Access policies, advanced identity protection, Privileged Identity Management, and custom sign-in branding. Conditional Access in particular is where the real security value lives.",
      },
      {
        type: "p",
        text: "The practical implication: before purchasing additional identity tools or security products, map what your Microsoft licensing actually includes. Microsoft 365 Business Premium includes Entra ID P1. E3 and E5 include increasingly deep security capabilities. Many organizations are paying for third-party tools that duplicate features they already own.",
      },
      {
        type: "p",
        text: "Pro tip: Microsoft licensing is genuinely confusing. If you're not sure what you have, pull your license inventory from the Microsoft 365 admin center. You might be surprised.",
      },
    ],
  },
  {
    id: "aws-route-53",
    title: "AWS Route 53 for DNS",
    blocks: [
      {
        type: "p",
        text: "Route 53 is Amazon's DNS service. It costs approximately $0.50/month per hosted zone. It runs on the same global infrastructure that powers a significant portion of the internet. For most organizations, this is a straightforward upgrade from your domain registrar's free DNS.",
      },
      { type: "p", text: "Why it matters:" },
      {
        type: "p",
        text: "Your domain registrar's DNS (GoDaddy, Namecheap, Squarespace, wherever you registered your domain) is fine until it isn't. DNS outages do happen. Registrar DNS infrastructure is typically less redundant than Route 53's global anycast network, which has a 100% uptime SLA.",
      },
      { type: "p", text: "Beyond reliability, Route 53 gives you:" },
      {
        type: "ul",
        items: [
          "Sub-second propagation in most cases (registrar DNS often takes hours)",
          "Programmatic management via API, CLI, or Terraform — critical for organizations managing infrastructure as code",
          "Health checks and DNS failover — Route 53 can automatically route traffic away from an unhealthy endpoint",
          "Latency-based and geolocation routing for global deployments",
        ],
      },
      {
        type: "p",
        text: "Migration takes about 30 minutes: export your existing records, create a hosted zone in Route 53, add your records, update the NS records at your registrar. Done. Your registrar still owns the domain registration — Route 53 just handles resolution.",
      },
      {
        type: "p",
        text: "At $0.50/month for a critical piece of your infrastructure, this is one of the easiest recommendations to make.",
      },
    ],
  },
  {
    id: "nonprofit-discounts",
    title: "Technology Discounts for Nonprofits",
    blocks: [
      {
        type: "p",
        text: "If your organization is a registered 501(c)(3) and you're not taking advantage of the following programs, you're paying for things you shouldn't be.",
      },
      {
        type: "p",
        text: "TechSoup — The central clearinghouse for nonprofit technology discounts. Register at techsoup.org and access steeply discounted software from Microsoft, Adobe, Cisco, Symantec, and many others. Verification takes a few weeks but unlocks access to dozens of vendor programs simultaneously. Start here.",
      },
      {
        type: "p",
        text: "Google for Nonprofits — Eligible nonprofits get Google Workspace for Nonprofits free (Business Starter equivalent, including Gmail, Drive, Meet, and more). Also includes YouTube Nonprofit Program and Google Ad Grants ($10,000/month in free Google Search advertising). Apply at google.com/nonprofits. Verification happens through TechSoup.",
      },
      {
        type: "p",
        text: "Microsoft for Nonprofits — Eligible nonprofits get Microsoft 365 Business Premium free for up to 10 users, then significantly reduced pricing beyond that. Also includes $3,500/year in Azure credits and discounted Dynamics 365. Apply through Microsoft's nonprofit portal (microsoft.com/nonprofits).",
      },
      {
        type: "p",
        text: "1Password — Significantly reduced pricing for nonprofits. If your organization manages shared credentials without a password manager, 1Password's nonprofit pricing removes the cost objection entirely.",
      },
      {
        type: "p",
        text: "AWS and Azure credits — Both offer nonprofit programs beyond what's bundled in the productivity suites. Worth checking separately, particularly if you have any cloud infrastructure.",
      },
      {
        type: "p",
        text: "Most US-registered 501(c)(3)s qualify for these programs. The TechSoup verification process is the most involved step, but it's a one-time requirement that unlocks most of the others. Budget several weeks for verification before counting on access.",
      },
    ],
  },
]

function ResourceCard({ resource }: { resource: Resource }) {
  return (
    <div className="bg-white rounded-xl border border-[#1A1A1A]/[0.07] p-8 lg:p-10">
      {resource.comingSoon ? (
        <p className="text-[10px] font-semibold uppercase tracking-widest text-[#1A1A1A]/30 mb-3">
          Coming Soon
        </p>
      ) : (
        <p className="text-[10px] font-semibold uppercase tracking-widest text-[#E8500A] mb-3">
          Resource
        </p>
      )}
      <h2
        className={`text-xl font-bold tracking-tight leading-snug mb-6 ${
          resource.comingSoon ? "text-[#1A1A1A]/40" : "text-[#1A1A1A]"
        }`}
      >
        {resource.title}
      </h2>
      <div className="space-y-4">
        {resource.blocks.map((block, i) => {
          if (block.type === "ul") {
            return (
              <ul key={i} className="space-y-2 pl-1">
                {block.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-3 text-sm text-[#1A1A1A]/60 leading-relaxed">
                    <span className="mt-[7px] flex-shrink-0 w-1 h-1 rounded-full bg-[#E8500A]" />
                    {item}
                  </li>
                ))}
              </ul>
            );
          }
          return (
            <p
              key={i}
              className={`text-sm leading-relaxed ${
                resource.comingSoon ? "text-[#1A1A1A]/35" : "text-[#1A1A1A]/60"
              }`}
            >
              {block.text}
            </p>
          );
        })}
      </div>
    </div>
  );
}

export default function FreeResourcesPage() {
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
            Free Resources
          </h1>
          <p className="mt-6 text-lg text-white/50 max-w-2xl leading-relaxed">
            No-cost tools and programs that every organization should know about — and most don&apos;t.
          </p>
        </div>
      </section>

      {/* Resource cards */}
      <section className="bg-[#F4F2EF]">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
          <div className="space-y-6">
            {resources.map((resource) => (
              <ResourceCard key={resource.id} resource={resource} />
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}

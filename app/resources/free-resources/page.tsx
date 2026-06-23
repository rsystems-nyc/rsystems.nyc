import Image from "next/image";
import type { Metadata } from "next";
import { renderInline } from "@/app/lib/renderMarkdown";

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
  label?: string
  blocks: Block[]
  downloadUrl?: string
  comingSoon?: boolean
}

export const resources: Resource[] = [
  {
    id: "cybersecurity-self-assessment",
    title: "Cybersecurity Self-Assessment",
    label: "Free Download",
    downloadUrl: "/assets/cybersecurity-assessment-rsystems.pdf",
    blocks: [
      {
        type: "p",
        text: "A structured self-assessment for evaluating your organization's current cybersecurity posture. Use it before a board conversation about security investment, before engaging a consultant, or as part of an annual review.",
      },
      { type: "p", text: "Covers the baseline security domains most organizations need to address:" },
      {
        type: "ul",
        items: [
          "Identity and access management",
          "[Endpoint](/resources/glossary/endpoint) protection",
          "Network security",
          "Data handling and classification",
          "Incident response readiness",
          "Vendor and third-party risk",
        ],
      },
      {
        type: "p",
        text: "The goal isn't a score. It's a starting point for a productive conversation about where your organization actually stands — and what needs attention before the next incident or audit.",
      },
    ],
  },
  {
    id: "sig-lite",
    title: "SIG Lite — Vendor Security Questionnaire",
    label: "Free Download",
    downloadUrl: "/assets/sig-lite-rsystems.pdf",
    blocks: [
      {
        type: "p",
        text: "The Standardized Information Gathering (SIG) questionnaire is the industry standard for vendor security assessments. The SIG Lite is a streamlined version designed for lower-risk vendor relationships — comprehensive enough to be meaningful, lean enough to actually get completed.",
      },
      {
        type: "p",
        text: "Use it when you're building a vendor risk management program, when your customers are asking about your security posture, or when you need to evaluate a new vendor relationship without the overhead of the full SIG.",
      },
      { type: "p", text: "Core domains covered:" },
      {
        type: "ul",
        items: [
          "Data protection and classification",
          "Access control and identity management",
          "Incident detection and response",
          "Business continuity and [disaster recovery](/resources/glossary/disaster-recovery)",
          "Physical and environmental security",
        ],
      },
      {
        type: "p",
        text: "This is the right starting point for most organizations. The full SIG is available when the engagement or regulatory requirements warrant it.",
      },
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
          "Google as your identity provider ([SAML](/resources/glossary/saml) [SSO](/resources/glossary/sso) to connected applications)",
          "Basic device management for Android and Chrome OS",
          "Security reporting and audit logs",
        ],
      },
      {
        type: "p",
        text: "What this means in practice: you can use Google as your identity provider at no cost. If your organization already uses Google Workspace for email and productivity, you likely have this capability and aren't using it. If you're a small team that needs a directory and basic [SSO](/resources/glossary/sso) but can't justify a [JumpCloud](/resources/glossary/jumpcloud) or [Okta](/resources/glossary/okta) subscription, Cloud Identity Free may be enough.",
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
          "[SSO](/resources/glossary/sso) with up to 10 apps per user",
          "Microsoft Authenticator-based [MFA](/resources/glossary/mfa)",
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
    id: "apple-business",
    title: "Apple Business",
    blocks: [
      {
        type: "p",
        text: "Apple Business is a free platform from Apple that gives organizations centralized control over Apple devices, managed identities, app distribution, and — as of its current iteration — a full built-in MDM solution. Everything you need to manage a fleet of Apple hardware is included at no cost.",
      },
      { type: "p", text: "What's included at no cost:" },
      {
        type: "ul",
        items: [
          "Full [MDM](/resources/glossary/mdm) — device policy enforcement, app management, configuration profiles, and compliance reporting built directly into the platform, no third-party MDM required",
          "Up to 500 [Managed Apple IDs](/resources/glossary/managed-apple-id) with your organization's domain — functioning corporate Apple accounts with iCloud Mail, separate from any personal Apple IDs your staff may have",
          "Automated Device Enrollment — new iPhones, iPads, and Macs enroll into management the moment they're powered on, without IT touching the device",
          "[Volume Purchase Program](/resources/glossary/vpp) — centrally purchase and distribute apps across your organization, with licenses that return to the pool when a user leaves",
          "Integration with third-party MDMs — Jamf, Intune, Mosyle, Kandji, and others remain supported for organizations that need their extended capabilities",
        ],
      },
      {
        type: "p",
        text: "On Managed Apple IDs: each one comes with an @yourdomain.com iCloud Mail address. For organizations that need Apple accounts for device management but don't want employees using personal Apple IDs on corporate hardware, this is the right answer. The 500-account limit covers most mid-market organizations without any cost.",
      },
      {
        type: "p",
        text: "If your organization has Apple devices and isn't using Apple Business, you're managing those devices manually. Setup requires a [D-U-N-S number](/resources/glossary/duns) for verification, which most organizations already have. Apple's verification process typically takes a few business days.",
      },
    ],
  },
  {
    id: "aws-route-53",
    title: "AWS Route 53 for DNS",
    blocks: [
      {
        type: "p",
        text: "Route 53 is Amazon's [DNS](/resources/glossary/dns) service. It costs approximately $0.50/month per hosted zone. It runs on the same global infrastructure that powers a significant portion of the internet. For most organizations, this is a straightforward upgrade from your domain registrar's free DNS.",
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
          "Programmatic management via API, [CLI](/resources/glossary/cli), or Terraform — critical for organizations managing infrastructure as code",
          "Health checks and [DNS](/resources/glossary/dns) failover — Route 53 can automatically route traffic away from an unhealthy endpoint",
          "[Latency](/resources/glossary/latency)-based and geolocation routing for global deployments",
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
        text: "[AWS](/resources/glossary/aws) and [Azure](/resources/glossary/azure) credits — Both offer nonprofit programs beyond what's bundled in the productivity suites. Worth checking separately, particularly if you have any cloud infrastructure.",
      },
      {
        type: "p",
        text: "Most US-registered 501(c)(3)s qualify for these programs. The TechSoup verification process is the most involved step, but it's a one-time requirement that unlocks most of the others. Budget several weeks for verification before counting on access.",
      },
    ],
  },
  {
    id: "github",
    title: "GitHub — Free Tier and Nonprofit Access",
    blocks: [
      {
        type: "p",
        text: "GitHub's free tier is more capable than most organizations realize, and eligible nonprofits can access GitHub Team at no cost. If you're running version control on anything — code, configuration, infrastructure-as-code, documentation — GitHub Free covers a significant portion of what most teams actually need.",
      },
      { type: "p", text: "GitHub Free for organizations includes:" },
      {
        type: "ul",
        items: [
          "Unlimited public and private repositories with unlimited collaborators",
          "2,000 GitHub Actions minutes per month — sufficient for most small-team CI/CD pipelines",
          "500 MB of Packages storage",
          "GitHub Issues and Projects for lightweight project tracking",
          "Dependabot alerts for known vulnerabilities in your dependencies",
        ],
      },
      {
        type: "p",
        text: "GitHub Copilot Free — As of late 2024, GitHub offers a free tier of Copilot with 2,000 code completions and 50 chat messages per month, no credit card required. For organizations evaluating AI-assisted development before committing to a paid seat, this is a low-friction starting point. GitHub Copilot Business ($19/user/month) adds organization-wide policy controls and audit logs.",
      },
      {
        type: "p",
        text: "GitHub for Nonprofits — Registered 501(c)(3) organizations can apply for GitHub Team at no cost through GitHub's nonprofit program. GitHub Team (normally $4/user/month) adds protected branches, required reviewers, code owners, and 3,000 Actions minutes per month — meaningful upgrades for teams with any kind of review or deployment workflow. Apply through GitHub's nonprofit portal; verification typically takes a few business days.",
      },
      {
        type: "p",
        text: "Where it fits: if your organization manages any infrastructure as code — Terraform, Ansible, Bicep, or similar — GitHub is the natural home for it. Version control on infrastructure configuration is one of the highest-leverage practices an IT team can adopt, and the free tier removes the cost barrier entirely.",
      },
    ],
  },
]

function ResourceCard({ resource, seen }: { resource: Resource; seen: Set<string> }) {
  return (
    <div className="bg-white rounded-xl border border-[#1A1A1A]/[0.07] p-8 lg:p-10">
      {resource.comingSoon ? (
        <p className="text-[10px] font-semibold uppercase tracking-widest text-[#1A1A1A]/30 mb-3">
          Coming Soon
        </p>
      ) : (
        <p className="text-[10px] font-semibold uppercase tracking-widest text-[#E8500A] mb-3">
          {resource.label ?? "Resource"}
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
                    <span dangerouslySetInnerHTML={{ __html: renderInline(item, seen) }} />
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
              dangerouslySetInnerHTML={{ __html: renderInline(block.text, seen) }}
            />
          );
        })}
      </div>
      {resource.downloadUrl && (
        <div className="mt-8 pt-6 border-t border-[#1A1A1A]/[0.07]">
          <a
            href={resource.downloadUrl}
            download
            className="inline-flex items-center gap-2.5 bg-[#E8500A] text-white text-sm font-semibold px-5 py-3 rounded-lg hover:bg-[#D04508] transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Download PDF
          </a>
        </div>
      )}
    </div>
  );
}

export default function FreeResourcesPage() {
  const seen = new Set<string>()
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
              <ResourceCard key={resource.id} resource={resource} seen={seen} />
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}

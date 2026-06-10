export interface FAQItem {
  question: string
  answer: string // paragraph-separated plain text — blank lines (\n\n) become separate <p> tags
}

export interface FAQCategory {
  category: string
  items: FAQItem[]
}

export const FAQData: FAQCategory[] = [
  {
    category: "Microsoft",
    items: [
      {
        question: "What is Autopilot?",
        answer: `Windows Autopilot is Microsoft's zero-touch device deployment system. When a new Windows PC powers on for the first time, Autopilot handles everything automatically — joining it to your directory, installing required apps, applying security policies, and getting it ready for the employee — without IT ever touching the machine.

The practical impact: a new hire can receive a laptop in the mail, power it on, sign in with their corporate credentials, and have a fully configured work machine in under 30 minutes. No imaging, no manual setup, no shipping to IT first.

Autopilot works in tandem with Intune for device management and Entra ID for identity. For organizations already in the Microsoft ecosystem, it's one of the highest-leverage tools available. The ROI comes from the first hire onboarding that doesn't require an IT staff member to babysit a laptop.

The catch: it requires proper upfront configuration — Intune enrollment policies, app deployment packages, and device registration with your hardware vendor. Done right, it works beautifully. This is one of those things worth doing correctly once rather than cobbling together over time.`,
      },
      {
        question: "What is Intune?",
        answer: `Microsoft Intune is a cloud-based device and application management platform. It's the system that enforces your IT policies across every device in your organization — Windows laptops, Macs, iPhones, Android — regardless of where they are.

What Intune does day-to-day: it pushes software to devices, enforces security policies (screen lock, disk encryption, VPN configurations), manages certificates, wipes lost or stolen devices remotely, and reports on device compliance.

For Microsoft-first organizations, Intune is the device management backbone. It integrates directly with Entra ID, which means you can define policy like "require a compliant, enrolled device to access company email" — and Intune enforces it automatically.

The distinction that matters: Intune manages the device. Entra ID manages the identity. Together they form Microsoft's modern device management stack, replacing the older model of on-premises domain joins and Group Policy.`,
      },
      {
        question: "What is Entra ID?",
        answer: `Microsoft Entra ID — formerly called Azure Active Directory — is Microsoft's cloud-based identity and access management service. It's the system that verifies who someone is and controls what they can access.

When an employee signs into Microsoft 365, SharePoint, or any application connected via Single Sign-On, Entra ID is doing the authentication in the background. It's also where you manage user accounts, groups, licenses, and access policies.

Entra ID is not the same as on-premises Active Directory, though Microsoft has worked hard to bridge the two. On-premises AD is the traditional Windows domain system designed for users inside a physical network. Entra ID is cloud-native and designed for the reality that users access resources from anywhere.

The features that matter most: conditional access (require MFA from unmanaged devices), device compliance integration with Intune, and the ability to serve as your central identity provider for hundreds of third-party applications via SAML and OIDC. If you have Microsoft 365, you already have Entra ID — the question is how well you're using it.`,
      },
    ],
  },
  {
    category: "DNS",
    items: [
      {
        question: "What is DMARC?",
        answer: `DMARC — Domain-based Message Authentication, Reporting, and Conformance — tells receiving mail servers what to do with messages that fail email authentication checks. It's the enforcement layer that sits on top of SPF and DKIM.

Here's the context: email was designed without authentication. Anyone can send an email claiming to be from any address. SPF and DKIM address this, but they're detection mechanisms — DMARC is what tells the world to act on what they detect.

A DMARC policy says: "If email claiming to be from my domain doesn't pass SPF or DKIM checks, [do nothing / send to spam / reject it] — and report to me what you saw."

Without DMARC, anyone can send phishing emails that appear to come from your domain. With a properly configured DMARC policy at p=reject, those emails never reach your customers or partners.

The hierarchy: SPF specifies which mail servers can send on your behalf. DKIM cryptographically signs each message so recipients can verify it wasn't tampered with. DMARC tells the world what to do when either check fails, and sends you reporting data on who's sending mail that claims to be from you.

Getting to p=reject requires care — you need to confirm all legitimate email sources are properly authenticated first. Moving too fast blocks your own mail. It's worth the effort.`,
      },
    ],
  },
  {
    category: "Security",
    items: [
      {
        question: "What is a SIEM?",
        answer: `A SIEM — Security Information and Event Management — collects log data from across your entire environment (servers, firewalls, endpoints, cloud services) and correlates it to detect threats and anomalies.

The value is in aggregation. A single failed login attempt isn't interesting. A thousand failed login attempts against one account at 3 AM from an IP in a country where you have no employees — that's a pattern worth acting on. A SIEM catches it.

Modern SIEMs combine rule-based alerting (triggers you configure) with machine learning (baseline normal behavior, alert on deviations). The ongoing tuning is what makes them useful — raw SIEM data produces enormous noise, and turning it into actionable signal requires both expertise and time.

For most organizations under 500 employees, a standalone SIEM is probably overkill. The more practical entry point is a managed MDR service that includes SIEM capabilities as part of an end-to-end offering.`,
      },
      {
        question: "What is MDR vs. EDR?",
        answer: `EDR — Endpoint Detection and Response — is software on your devices that monitors for malicious behavior and provides tools to detect, investigate, and respond to threats. CrowdStrike, SentinelOne, and Carbon Black are examples. It's the evolution of antivirus: instead of matching known signatures, it watches what processes are doing and stops behavior that looks like an attack.

MDR — Managed Detection and Response — wraps EDR with a team of security analysts who monitor your environment 24/7. The MDR provider watches the alerts from your EDR, triages them, escalates real threats, and often has the authority to take action on your behalf.

The practical distinction: EDR is a tool. MDR is a tool plus a team.

EDR alone requires someone internal to monitor and respond to alerts — something most IT teams don't have the bandwidth or specialization for. MDR solves that by outsourcing the watch function to specialists. For organizations that want serious security coverage without building an internal SOC, MDR is typically the right answer.`,
      },
    ],
  },
  {
    category: "AI",
    items: [
      {
        question: "What is Claude Code?",
        answer: `Claude Code is Anthropic's agentic coding tool — a version of Claude that runs in your terminal and can read files, write code, execute commands, and interact with your development environment directly. Unlike using Claude in a chat window, Claude Code can actually execute work: it reads your codebase, writes and modifies files, runs tests, and iterates until something works.

For developers, it functions as a pair programmer with full context of the entire project, capable of making coordinated changes across many files simultaneously. For non-developers managing technical projects, it enables a different mode of working — you describe what you want built, Claude Code determines how to do it, and then does it.

The RSystems website was built using Claude Code running on a dedicated Linux VM. Every case study, every service page, the navigation structure, the SEO improvements — all of it was written and deployed by Claude Code working from natural-language instructions.

The key distinction from chat-based AI: Claude Code doesn't suggest code, it runs it. That changes what's possible.`,
      },
      {
        question: "What is an MCP (vs. an API)?",
        answer: `An API — Application Programming Interface — is a defined way for one piece of software to communicate with another. When your application retrieves data from Salesforce, or your website shows live inventory, it's using an API. APIs are designed for machines: they require developers to write code that properly formats requests and handles responses.

An MCP — Model Context Protocol — is a newer standard developed by Anthropic that allows AI models to connect to external tools and services in a standardized way. Think of it as a universal adapter that lets an AI assistant interact with your calendar, your email, your CRM, your network monitoring platform — anything that has published an MCP server.

The practical difference: APIs require custom integration code. MCPs let AI models consume capabilities directly. If Slack publishes an MCP server, any MCP-compatible AI assistant can read messages, post updates, and search history — without a developer writing a custom integration.

For organizations thinking about AI integration, MCPs dramatically lower the friction of connecting AI to existing systems. The ecosystem is still early, but the direction of travel is clear.`,
      },
    ],
  },
  {
    category: "SSO",
    items: [
      {
        question: "What is JumpCloud?",
        answer: `JumpCloud is a cloud-based directory-as-a-service platform that manages user identity, device management, and application access from a single place. If you're familiar with Active Directory — Microsoft's on-premises directory — JumpCloud is roughly the cloud-native equivalent, designed to work across Windows, Mac, and Linux without requiring an on-premises server.

What JumpCloud does in practice: it's your central system for managing employee accounts, controlling what those accounts can access (via LDAP, RADIUS, or SAML), managing device policies, and connecting your organization to cloud applications via Single Sign-On.

For organizations with a mix of Macs and Windows machines, or that have moved fully to the cloud, JumpCloud is frequently the right directory choice. It handles the full employee lifecycle: provision the new hire, configure their device, grant access to the applications they need, and revoke everything when they leave.

RSystems manages JumpCloud for several clients — it's our most common recommendation for organizations that don't have a structural reason to be Microsoft-first.`,
      },
      {
        question: "What is SAML?",
        answer: `SAML — Security Assertion Markup Language — is the protocol that makes Single Sign-On work for enterprise applications. It allows users to log into one system (the identity provider, like JumpCloud or Entra ID) and automatically gain access to connected applications (service providers, like Salesforce, Slack, or Workday) without entering separate credentials.

How it works: your employee clicks "Log in with [your company]" in Salesforce. Salesforce redirects them to your identity provider. Your identity provider confirms their identity and sends back a signed assertion. Salesforce accepts it and logs them in. The employee has no Salesforce password — their identity provider is the credential that matters.

SAML has been the dominant enterprise SSO standard since 2001. If you're configuring SSO for a business application today, it almost certainly supports it. Understanding SAML matters when SSO breaks — tracing a failed authentication usually comes down to a misconfigured assertion or a mismatched entity ID.`,
      },
      {
        question: "What is SCIM?",
        answer: `SCIM — System for Cross-domain Identity Management — is the standard for automating user account provisioning. Where SAML handles "who is this person?", SCIM handles "create this account" and "disable this account."

Without SCIM: when someone joins, your IT team manually creates accounts in every application they need. When someone leaves, you manually go through each one to disable or delete their access. The gap between someone's last day and when their accounts are actually disabled is a real security window.

With SCIM: your identity provider (JumpCloud, Entra ID, Okta) pushes changes to connected applications automatically. Add someone to the Engineering group in your directory, and SCIM provisions their GitHub access. Remove them when they leave, and every connected application gets the deprovisioning event simultaneously.

SCIM is one of those features that looks administrative but has direct security implications. It's worth prioritizing in any SSO implementation.`,
      },
      {
        question: "What is OIDC?",
        answer: `OIDC — OpenID Connect — is a modern authentication standard built on top of OAuth 2.0. Like SAML, it enables Single Sign-On. Unlike SAML, it uses JSON rather than XML and is designed for both web applications and mobile apps.

If SAML is the enterprise SSO standard, OIDC is the modern web standard. Consumer apps (Sign in with Google, Sign in with Apple) use OIDC. Many newer enterprise applications prefer it as well.

The practical distinction: SAML and OIDC accomplish the same goal — SSO — but OIDC is lighter weight, easier to implement, and better suited to modern applications and mobile. Most identity providers support both.

When setting up SSO for a new application, you'll be asked which protocol it supports. SAML is the safe default for legacy enterprise apps; OIDC is increasingly common in newer products. Understanding which one you're working with matters for troubleshooting — a failed SAML assertion and a failed OIDC token exchange fail differently and require different investigation.`,
      },
    ],
  },
]

export interface GlossaryEntry {
  term: string
  body: string // blank lines (\n\n) become separate <p> tags
}

export interface GlossarySection {
  section: string
  entries: GlossaryEntry[]
}

export const GlossaryData: GlossarySection[] = [
  {
    section: "Microsoft",
    entries: [
      {
        term: "Autopilot",
        body: `Windows Autopilot is Microsoft's zero-touch device deployment system. When a new Windows PC powers on for the first time, Autopilot handles everything automatically — joining it to your directory, installing required apps, applying security policies, and getting it ready for the employee — without IT ever touching the machine.

The practical impact: a new hire can receive a laptop in the mail, power it on, sign in with their corporate credentials, and have a fully configured work machine in under 30 minutes. No imaging, no manual setup, no shipping to IT first.

Autopilot works in tandem with Intune for device management and Entra ID for identity. For organizations already in the Microsoft ecosystem, it's one of the highest-leverage tools available. The ROI comes from the first hire onboarding that doesn't require an IT staff member to babysit a laptop.

The catch: it requires proper upfront configuration — Intune enrollment policies, app deployment packages, and device registration with your hardware vendor. Done right, it works beautifully. This is one of those things worth doing correctly once rather than cobbling together over time.`,
      },
      {
        term: "Intune",
        body: `Microsoft Intune is a cloud-based device and application management platform. It's the system that enforces your IT policies across every device in your organization — Windows laptops, Macs, iPhones, Android — regardless of where they are.

What Intune does day-to-day: it pushes software to devices, enforces security policies (screen lock, disk encryption, VPN configurations), manages certificates, wipes lost or stolen devices remotely, and reports on device compliance.

For Microsoft-first organizations, Intune is the device management backbone. It integrates directly with Entra ID, which means you can define policy like "require a compliant, enrolled device to access company email" — and Intune enforces it automatically.

The distinction that matters: Intune manages the device. Entra ID manages the identity. Together they form Microsoft's modern device management stack, replacing the older model of on-premises domain joins and Group Policy.`,
      },
      {
        term: "Entra ID",
        body: `Microsoft Entra ID — formerly called Azure Active Directory — is Microsoft's cloud-based identity and access management service. It's the system that verifies who someone is and controls what they can access.

When an employee signs into Microsoft 365, SharePoint, or any application connected via Single Sign-On, Entra ID is doing the authentication in the background. It's also where you manage user accounts, groups, licenses, and access policies.

Entra ID is not the same as on-premises Active Directory, though Microsoft has worked hard to bridge the two. On-premises AD is the traditional Windows domain system designed for users inside a physical network. Entra ID is cloud-native and designed for the reality that users access resources from anywhere.

The features that matter most: conditional access (require MFA from unmanaged devices), device compliance integration with Intune, and the ability to serve as your central identity provider for hundreds of third-party applications via SAML and OIDC. If you have Microsoft 365, you already have Entra ID — the question is how well you're using it.`,
      },
    ],
  },
  {
    section: "DNS",
    entries: [
      {
        term: "SPF",
        body: `SPF — Sender Policy Framework — is a DNS record that specifies which mail servers are authorized to send email on behalf of your domain. When a receiving mail server gets a message claiming to be from you, it checks your SPF record to verify the sending server is on your approved list.

SPF prevents a basic form of email spoofing: unauthorized servers impersonating your domain. Publishing an SPF record is a prerequisite for DMARC enforcement and a baseline expectation for email deliverability.

The operational issue: every service that sends email on your behalf — your CRM, your marketing platform, your ticketing system, your HR software — needs to be listed in your SPF record. Organizations that add SaaS tools over time frequently forget to update their SPF record, which causes legitimate email to fail authentication and land in spam.

SPF validates the sending server, not the message itself. It also doesn't protect the "From" address the recipient sees in their email client. Those gaps are filled by DKIM and DMARC respectively.`,
      },
      {
        term: "DKIM",
        body: `DKIM — DomainKeys Identified Mail — adds a cryptographic signature to outgoing email. The signature is generated using a private key you control; the corresponding public key is published in your DNS. When a receiving server gets your email, it retrieves your public key and uses it to verify the signature, confirming the message came from you and wasn't modified in transit.

Where SPF validates the sending server, DKIM validates the message itself. A DKIM signature survives forwarding in a way that SPF checks don't — this makes it more reliable in complex routing scenarios and a stronger authentication signal.

Setup: your email provider generates a key pair, you add the public key to your DNS as a TXT record, and outgoing email is signed automatically. Most modern platforms (Google Workspace, Microsoft 365) handle this with minimal configuration. The failure mode is forgetting to configure DKIM for secondary sending services.

Both SPF and DKIM feed into DMARC, which is the enforcement layer that tells receiving servers what to do when either check fails.`,
      },
      {
        term: "DMARC",
        body: `DMARC — Domain-based Message Authentication, Reporting, and Conformance — tells receiving mail servers what to do with messages that fail email authentication checks. It's the enforcement layer that sits on top of SPF and DKIM.

Here's the context: email was designed without authentication. Anyone can send an email claiming to be from any address. SPF and DKIM address this, but they're detection mechanisms — DMARC is what tells the world to act on what they detect.

A DMARC policy says: "If email claiming to be from my domain doesn't pass SPF or DKIM checks, [do nothing / send to spam / reject it] — and report to me what you saw."

Without DMARC, anyone can send phishing emails that appear to come from your domain. With a properly configured DMARC policy at p=reject, those emails never reach your customers or partners.

The hierarchy: SPF specifies which mail servers can send on your behalf. DKIM cryptographically signs each message so recipients can verify it wasn't tampered with. DMARC tells the world what to do when either check fails, and sends you reporting data on who's sending mail that claims to be from you.

Getting to p=reject requires care — you need to confirm all legitimate email sources are properly authenticated first. Moving too fast blocks your own mail. It's worth the effort.`,
      },
      {
        term: "BIMI",
        body: `BIMI — Brand Indicators for Message Identification — is an email standard that displays your organization's logo directly in the email client, next to the sender name in Gmail, Apple Mail, and other supporting clients, when a message passes full email authentication.

The prerequisite: your domain must have an enforced DMARC policy (p=quarantine or p=reject) before BIMI will function. Most implementations also require a Verified Mark Certificate (VMC) from a qualified certificate authority — a paid credential that verifies your ownership of the trademarked logo.

The value goes beyond the visual. BIMI functions as a signal that your email authentication stack is properly configured end-to-end. Getting to a point where BIMI works means SPF, DKIM, and DMARC are all correctly in place. The logo display is the visible result; the underlying authentication posture is what actually matters for deliverability and spoofing prevention.

For organizations with active phishing concerns or brand trust considerations, BIMI is worth pursuing — but in order, after SPF, DKIM, and DMARC are solid.`,
      },
    ],
  },
  {
    section: "Security",
    entries: [
      {
        term: "SIEM",
        body: `A SIEM — Security Information and Event Management — collects log data from across your entire environment (servers, firewalls, endpoints, cloud services) and correlates it to detect threats and anomalies.

The value is in aggregation. A single failed login attempt isn't interesting. A thousand failed login attempts against one account at 3 AM from an IP in a country where you have no employees — that's a pattern worth acting on. A SIEM catches it.

Modern SIEMs combine rule-based alerting (triggers you configure) with machine learning (baseline normal behavior, alert on deviations). The ongoing tuning is what makes them useful — raw SIEM data produces enormous noise, and turning it into actionable signal requires both expertise and time.

For most organizations under 500 employees, a standalone SIEM is probably overkill. The more practical entry point is a managed MDR service that includes SIEM capabilities as part of an end-to-end offering.`,
      },
      {
        term: "MDR vs. EDR",
        body: `EDR — Endpoint Detection and Response — is software on your devices that monitors for malicious behavior and provides tools to detect, investigate, and respond to threats. CrowdStrike, SentinelOne, and Carbon Black are examples. It's the evolution of antivirus: instead of matching known signatures, it watches what processes are doing and stops behavior that looks like an attack.

MDR — Managed Detection and Response — wraps EDR with a team of security analysts who monitor your environment 24/7. The MDR provider watches the alerts from your EDR, triages them, escalates real threats, and often has the authority to take action on your behalf.

The practical distinction: EDR is a tool. MDR is a tool plus a team.

EDR alone requires someone internal to monitor and respond to alerts — something most IT teams don't have the bandwidth or specialization for. MDR solves that by outsourcing the watch function to specialists. For organizations that want serious security coverage without building an internal SOC, MDR is typically the right answer.`,
      },
      {
        term: "Certificate",
        body: `A digital certificate is a cryptographically signed credential that proves the identity of a server, organization, or individual. When you visit a website over HTTPS, the site presents a certificate issued by a trusted Certificate Authority — your browser verifies it before establishing an encrypted connection.

Types that come up most often in enterprise environments:

TLS/SSL certificates secure HTTPS connections for websites, APIs, and internal services. They're issued per domain and expire on a fixed schedule — typically every one to two years, though many organizations now use 90-day certificates with automated renewal.

Code signing certificates verify that software was published by a known entity and hasn't been modified. Required for Windows software distribution and increasingly common for scripts and deployment packages.

S/MIME certificates sign and encrypt email messages at the content level, separate from transport-layer TLS.

Client certificates authenticate users or devices to services as an alternative to passwords — common in zero-trust architectures and VPN configurations.

The operational risk: certificates expire, and an expired certificate causes hard failures — browsers display security warnings, services refuse connections. Certificate lifecycle management is one of those operational details that seems minor until it causes an outage. Organizations with many certificates should track expiration dates centrally, not rely on individual teams to remember.`,
      },
    ],
  },
  {
    section: "AI",
    entries: [
      {
        term: "Claude Code",
        body: `Claude Code is Anthropic's agentic coding tool — a version of Claude that runs in your terminal and can read files, write code, execute commands, and interact with your development environment directly. Unlike using Claude in a chat window, Claude Code can actually execute work: it reads your codebase, writes and modifies files, runs tests, and iterates until something works.

For developers, it functions as a pair programmer with full context of the entire project, capable of making coordinated changes across many files simultaneously. For non-developers managing technical projects, it enables a different mode of working — you describe what you want built, Claude Code determines how to do it, and then does it.

The RSystems website was built using Claude Code running on a dedicated Linux VM. Every case study, every service page, the navigation structure, the SEO improvements — all of it was written and deployed by Claude Code working from natural-language instructions.

The key distinction from chat-based AI: Claude Code doesn't suggest code, it runs it. That changes what's possible.`,
      },
      {
        term: "MCP vs. API",
        body: `An API — Application Programming Interface — is a defined way for one piece of software to communicate with another. When your application retrieves data from Salesforce, or your website shows live inventory, it's using an API. APIs are designed for machines: they require developers to write code that properly formats requests and handles responses.

An MCP — Model Context Protocol — is a newer standard developed by Anthropic that allows AI models to connect to external tools and services in a standardized way. Think of it as a universal adapter that lets an AI assistant interact with your calendar, your email, your CRM, your network monitoring platform — anything that has published an MCP server.

The practical difference: APIs require custom integration code. MCPs let AI models consume capabilities directly. If Slack publishes an MCP server, any MCP-compatible AI assistant can read messages, post updates, and search history — without a developer writing a custom integration.

For organizations thinking about AI integration, MCPs dramatically lower the friction of connecting AI to existing systems. The ecosystem is still early, but the direction of travel is clear.`,
      },
    ],
  },
  {
    section: "SSO",
    entries: [
      {
        term: "JumpCloud",
        body: `JumpCloud is a cloud-based directory-as-a-service platform that manages user identity, device management, and application access from a single place. If you're familiar with Active Directory — Microsoft's on-premises directory — JumpCloud is roughly the cloud-native equivalent, designed to work across Windows, Mac, and Linux without requiring an on-premises server.

What JumpCloud does in practice: it's your central system for managing employee accounts, controlling what those accounts can access (via LDAP, RADIUS, or SAML), managing device policies, and connecting your organization to cloud applications via Single Sign-On.

For organizations with a mix of Macs and Windows machines, or that have moved fully to the cloud, JumpCloud is frequently the right directory choice. It handles the full employee lifecycle: provision the new hire, configure their device, grant access to the applications they need, and revoke everything when they leave.

RSystems manages JumpCloud for several clients — it's our most common recommendation for organizations that don't have a structural reason to be Microsoft-first.`,
      },
      {
        term: "Okta",
        body: `Okta is a cloud-based identity and access management platform purpose-built for enterprise SSO, MFA, lifecycle management, and application integration. It's one of the dominant enterprise identity platforms, particularly common in organizations that run a mix of cloud applications and need a neutral identity layer that isn't tied to Microsoft or Google.

Where Okta fits: organizations with complex multi-cloud environments, a large number of application integrations (Okta's Integration Network has thousands of pre-built connectors), or requirements that go beyond what's bundled in their existing licensing.

The comparison that comes up most often: Okta vs. Entra ID. Entra ID is the natural choice if you're Microsoft-first — it's already included in your Microsoft 365 licensing. Okta makes more sense when you're running across multiple cloud environments, or when you need capabilities Entra ID doesn't provide. Okta is not cheap, and the licensing cost is a real factor in the decision.

Okta also competes with JumpCloud at the lower end of the market. JumpCloud is the more cost-effective option for mid-market organizations that need a solid directory and SSO without the full Okta feature set.`,
      },
      {
        term: "SAML",
        body: `SAML — Security Assertion Markup Language — is the protocol that makes Single Sign-On work for enterprise applications. It allows users to log into one system (the identity provider, like JumpCloud or Entra ID) and automatically gain access to connected applications (service providers, like Salesforce, Slack, or Workday) without entering separate credentials.

How it works: your employee clicks "Log in with [your company]" in Salesforce. Salesforce redirects them to your identity provider. Your identity provider confirms their identity and sends back a signed assertion. Salesforce accepts it and logs them in. The employee has no Salesforce password — their identity provider is the credential that matters.

SAML has been the dominant enterprise SSO standard since 2001. If you're configuring SSO for a business application today, it almost certainly supports it. Understanding SAML matters when SSO breaks — tracing a failed authentication usually comes down to a misconfigured assertion or a mismatched entity ID.`,
      },
      {
        term: "SCIM",
        body: `SCIM — System for Cross-domain Identity Management — is the standard for automating user account provisioning. Where SAML handles "who is this person?", SCIM handles "create this account" and "disable this account."

Without SCIM: when someone joins, your IT team manually creates accounts in every application they need. When someone leaves, you manually go through each one to disable or delete their access. The gap between someone's last day and when their accounts are actually disabled is a real security window.

With SCIM: your identity provider (JumpCloud, Entra ID, Okta) pushes changes to connected applications automatically. Add someone to the Engineering group in your directory, and SCIM provisions their GitHub access. Remove them when they leave, and every connected application gets the deprovisioning event simultaneously.

SCIM is one of those features that looks administrative but has direct security implications. It's worth prioritizing in any SSO implementation.`,
      },
      {
        term: "OIDC",
        body: `OIDC — OpenID Connect — is a modern authentication standard built on top of OAuth 2.0. Like SAML, it enables Single Sign-On. Unlike SAML, it uses JSON rather than XML and is designed for both web applications and mobile apps.

If SAML is the enterprise SSO standard, OIDC is the modern web standard. Consumer apps (Sign in with Google, Sign in with Apple) use OIDC. Many newer enterprise applications prefer it as well.

The practical distinction: SAML and OIDC accomplish the same goal — SSO — but OIDC is lighter weight, easier to implement, and better suited to modern applications and mobile. Most identity providers support both.

When setting up SSO for a new application, you'll be asked which protocol it supports. SAML is the safe default for legacy enterprise apps; OIDC is increasingly common in newer products. Understanding which one you're working with matters for troubleshooting — a failed SAML assertion and a failed OIDC token exchange fail differently and require different investigation.`,
      },
    ],
  },
  {
    section: "MDM",
    entries: [
      {
        term: "Autopilot",
        body: `Windows Autopilot is Microsoft's zero-touch device deployment system. When a new Windows PC powers on for the first time, Autopilot handles everything automatically — joining it to your directory, installing required apps, applying security policies, and getting it ready for the employee — without IT ever touching the machine.

The practical impact: a new hire can receive a laptop in the mail, power it on, sign in with their corporate credentials, and have a fully configured work machine in under 30 minutes. No imaging, no manual setup, no shipping to IT first.

Autopilot works in tandem with Intune for device management and Entra ID for identity. For organizations already in the Microsoft ecosystem, it's one of the highest-leverage tools available.

The catch: it requires proper upfront configuration — Intune enrollment policies, app deployment packages, and device registration with your hardware vendor. Done right, it works beautifully. This is one of those things worth doing correctly once rather than cobbling together over time.`,
      },
      {
        term: "Apple Business",
        body: `Apple Business is Apple's free platform for managing Apple devices across an organization. It includes a built-in MDM solution at no cost — iPhones, iPads, and Macs can be enrolled, configured, and managed centrally without purchasing a third-party MDM platform.

Key MDM capabilities included at no cost:

Automated Device Enrollment (ADE) — new Apple devices configure and enroll themselves on first power-on. No IT staff member needs to touch the hardware before it ships to the employee.

Configuration profiles — push WiFi settings, VPN configurations, email accounts, restrictions, and security policies to enrolled devices over the air.

App deployment — distribute apps from the App Store across your fleet centrally, with Volume Purchase Program licenses that return to the pool when a user leaves.

Remote lock and wipe — protect data on lost or stolen devices immediately.

Up to 500 Managed Apple IDs with your company domain, each with an @yourdomain.com iCloud Mail address — corporate Apple accounts that are separate from any personal Apple IDs your staff may have.

Organizations with more complex requirements can layer a third-party MDM (Jamf, Intune, Mosyle, Kandji) on top of Apple Business. Those platforms connect directly to Apple Business and extend it with more sophisticated policy management, reporting, and cross-platform management. Apple Business's built-in MDM is the right starting point for organizations with primarily Apple environments and straightforward management needs.`,
      },
    ],
  },
  {
    section: "Virtualization",
    entries: [
      {
        term: "VMware",
        body: `VMware is the dominant enterprise virtualization platform, now owned by Broadcom. VMware vSphere is the core product — it lets you run multiple virtual machines on a single physical server, each isolated from the others. Instead of one server running one workload, you run dozens of VMs on one host, dramatically improving hardware utilization and operational flexibility.

The enterprise stack: vSphere (the hypervisor platform), vCenter (centralized management of all hosts), vSAN (software-defined storage), and NSX (software-defined networking). Most serious VMware deployments are built on some combination of these.

The current landscape: Broadcom acquired VMware in 2023 and moved to a subscription licensing model, ending perpetual licenses and eliminating many lower-tier products. This has significantly increased costs for most organizations and triggered a wave of migration planning — to Hyper-V, Proxmox, Nutanix, or cloud-native alternatives.

For organizations still on VMware: understanding your current licensing exposure and mapping a forward path is increasingly urgent. The integration depth and operational maturity of the platform are real, but so is the cost trajectory under Broadcom's ownership.`,
      },
      {
        term: "ESXi",
        body: `ESXi is VMware's bare-metal hypervisor — the software that runs directly on server hardware and makes virtualization possible. It's the foundation layer of every VMware vSphere deployment: each physical host runs ESXi, which then hosts the virtual machines on top of it.

A hypervisor sits between the physical hardware and the VMs. ESXi exposes CPU, memory, storage, and network resources to virtual machines, giving each VM the appearance of dedicated hardware while actually sharing the physical resources efficiently across many workloads.

In a managed VMware environment, ESXi hosts are controlled through vCenter — you don't typically interact with each host directly. ESXi becomes relevant operationally when you're dealing with host-level issues: hardware failures, firmware updates, network configuration, or storage connectivity problems.

Notable change: the free ESXi license was discontinued by Broadcom in 2024. Organizations running free ESXi — common in smaller environments and branch offices — need to evaluate licensed alternatives or migrate to another platform.`,
      },
      {
        term: "Hyper-V",
        body: `Hyper-V is Microsoft's hypervisor. It ships as a role in Windows Server and provides the same core virtualization capabilities as VMware vSphere — running multiple virtual machines on a single physical host, with live migration, failover clustering, and replication.

For organizations in the Microsoft ecosystem, Hyper-V is the natural on-premises virtualization platform. Licensing is included in Windows Server Datacenter edition, management integrates with familiar Microsoft tooling, and failover clustering provides high availability without additional licensing cost.

Capabilities that matter: live migration (move running VMs between hosts without downtime), Windows Server Failover Clustering for HA, and Hyper-V Replica for basic VM replication to a secondary site or Azure.

Where it fits vs. VMware: Hyper-V is the rational choice for Microsoft-first organizations that don't need VMware's advanced capabilities — vSAN, NSX, distributed resource scheduling. For environments running primarily Windows workloads with standard HA requirements, Hyper-V provides comparable core functionality at significantly lower licensing cost.

With the Broadcom/VMware pricing changes, Hyper-V has become an increasingly compelling migration target for organizations looking to exit the VMware cost model.`,
      },
    ],
  },
  {
    section: "Cloud",
    entries: [
      {
        term: "Azure",
        body: `Microsoft Azure is Microsoft's cloud platform — the infrastructure, platform, and software services that let organizations run workloads in Microsoft's global data centers rather than on-premises hardware.

For Microsoft-first organizations, Azure is the natural cloud extension. It integrates directly with Entra ID, Active Directory, Microsoft 365, and Intune. Running Windows Server workloads, SQL Server, or .NET applications in Azure benefits from native licensing integrations — Azure Hybrid Benefit, for example, lets you apply existing Windows Server and SQL Server licenses to reduce cloud costs.

The services that come up most often in enterprise infrastructure work: Azure Virtual Machines (IaaS compute), Azure Virtual Network (private networking), Azure Storage, Azure SQL Managed Instance, and Azure Backup. For identity, Entra ID is Azure's identity layer and is already included in every Microsoft 365 subscription.

Migration path: organizations moving on-premises workloads to Azure typically start with lift-and-shift — replicate the workload as-is, validate it runs, then optimize. Over time, purpose-built PaaS services reduce infrastructure management overhead compared to maintaining VMs.`,
      },
      {
        term: "AWS",
        body: `Amazon Web Services is the market-leading cloud platform by revenue, breadth of services, and enterprise adoption. For organizations without a strong Microsoft or Google dependency, AWS is often the default enterprise cloud choice.

Where AWS leads: compute (EC2), object storage (S3), managed databases (RDS, Aurora, DynamoDB), and the overall maturity and operational depth of its infrastructure services. AWS regions and availability zones give organizations fine-grained control over where data and compute physically run.

The services most relevant to enterprise infrastructure work: EC2 (virtual machines), S3 (object storage), VPC (network isolation), IAM (access control within AWS), RDS (managed relational databases), and Route 53 (DNS). AWS IAM is notably granular — and notably complex. Getting IAM right is one of the most consequential and most frequently mishandled aspects of an AWS deployment.

The multi-cloud reality: most mid-market organizations aren't running AWS and Azure and GCP simultaneously by design — they're running one primary cloud and a second because a SaaS vendor or acquisition required it. Rationalizing cloud sprawl is often worth the effort.`,
      },
      {
        term: "GCP",
        body: `Google Cloud Platform is Google's cloud offering. GCP has historically been strongest in data analytics, machine learning infrastructure, and containerized workloads — BigQuery and Google Kubernetes Engine (GKE) are leading products in their respective categories.

For general enterprise infrastructure work, GCP is the least common of the three major clouds in mid-market environments. Where it tends to appear: organizations with heavy data engineering or ML workloads, companies deeply integrated with Google Workspace that want a native cloud extension, or teams that standardized on Kubernetes early.

One architectural difference worth knowing: GCP uses a global VPC model by default, where a single VPC spans all regions. AWS and Azure use regional VPCs. This can be a meaningful advantage for distributed workloads — or a surprise for teams coming from the other platforms.

The practical guidance: if you don't have a specific reason to be on GCP, you're likely better served by Azure (if Microsoft-first) or AWS (if cloud-native or vendor-neutral). GCP's pricing is competitive and its Kubernetes offering is the strongest of the three, but those advantages only matter if your workloads require them.`,
      },
    ],
  },
]

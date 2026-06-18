export interface GlossaryEntry {
  term: string
  body: string
  id?: string
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
        id: "intune",
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
        term: "DNS",
        id: "dns",
        body: `DNS — the Domain Name System — is the internet's address book. It translates human-friendly names like yourcompany.com into the numerical addresses computers use, and it directs different kinds of traffic to the right places: your website to one server, your email to another.

It's useful to think of your DNS as a public ledger. It's a record only you control, published openly for the entire internet to read, where you declare how things connected to your domain should behave — which servers handle your mail, which services are authorized to send on your behalf, and how recipients should treat messages that fail those checks.

Because so much depends on it — your website, your email delivery, your email authentication — DNS is foundational infrastructure. Getting it right and keeping it well-managed underpins much of what follows in any IT setup.`,
      },
      {
        term: "SPF",
        id: "spf",
        body: `SPF — Sender Policy Framework — is a DNS record that specifies which mail servers are authorized to send email on behalf of your domain. When a receiving mail server gets a message claiming to be from you, it checks your SPF record to verify the sending server is on your approved list.

SPF prevents a basic form of email spoofing: unauthorized servers impersonating your domain. Publishing an SPF record is a prerequisite for DMARC enforcement and a baseline expectation for email deliverability.

The operational issue: every service that sends email on your behalf — your CRM, your marketing platform, your ticketing system, your HR software — needs to be listed in your SPF record. Organizations that add SaaS tools over time frequently forget to update their SPF record, which causes legitimate email to fail authentication and land in spam.

SPF validates the sending server, not the message itself. It also doesn't protect the "From" address the recipient sees in their email client. Those gaps are filled by DKIM and DMARC respectively.`,
      },
      {
        term: "DKIM",
        id: "dkim",
        body: `DKIM — DomainKeys Identified Mail — adds a cryptographic signature to outgoing email. The signature is generated using a private key you control; the corresponding public key is published in your DNS. When a receiving server gets your email, it retrieves your public key and uses it to verify the signature, confirming the message came from you and wasn't modified in transit.

Where SPF validates the sending server, DKIM validates the message itself. A DKIM signature survives forwarding in a way that SPF checks don't — this makes it more reliable in complex routing scenarios and a stronger authentication signal.

Setup: your email provider generates a key pair, you add the public key to your DNS as a TXT record, and outgoing email is signed automatically. Most modern platforms (Google Workspace, Microsoft 365) handle this with minimal configuration. The failure mode is forgetting to configure DKIM for secondary sending services.

Both SPF and DKIM feed into DMARC, which is the enforcement layer that tells receiving servers what to do when either check fails.`,
      },
      {
        term: "DMARC",
        id: "dmarc",
        body: `DMARC — Domain-based Message Authentication, Reporting, and Conformance — tells receiving mail servers what to do with messages that fail email authentication checks. It's the enforcement layer that sits on top of SPF and DKIM.

Here's the context: email was designed without authentication. Anyone can send an email claiming to be from any address. SPF and DKIM address this, but they're detection mechanisms — DMARC is what tells the world to act on what they detect.

A DMARC policy says: "If email claiming to be from my domain doesn't pass SPF or DKIM checks, [do nothing / send to spam / reject it] — and report to me what you saw."

Without DMARC, anyone can send phishing emails that appear to come from your domain. With a properly configured DMARC policy at p=reject, those emails never reach your customers or partners.

The hierarchy: SPF specifies which mail servers can send on your behalf. DKIM cryptographically signs each message so recipients can verify it wasn't tampered with. DMARC tells the world what to do when either check fails, and sends you reporting data on who's sending mail that claims to be from you.

Getting to p=reject requires care — you need to confirm all legitimate email sources are properly authenticated first. Moving too fast blocks your own mail. It's worth the effort.`,
      },
      {
        term: "BIMI",
        id: "bimi",
        body: `BIMI — Brand Indicators for Message Identification — is an email standard that displays your organization's logo directly in the email client, next to the sender name in Gmail, Apple Mail, and other supporting clients, when a message passes full email authentication.

The prerequisite: your domain must have an enforced DMARC policy (p=quarantine or p=reject) before BIMI will function. Most implementations also require a Verified Mark Certificate (VMC) from a qualified certificate authority — a paid credential that verifies your ownership of the trademarked logo.

The value goes beyond the visual. BIMI functions as a signal that your email authentication stack is properly configured end-to-end. Getting to a point where BIMI works means SPF, DKIM, and DMARC are all correctly in place. The logo display is the visible result; the underlying authentication posture is what actually matters for deliverability and spoofing prevention.

For organizations with active phishing concerns or brand trust considerations, BIMI is worth pursuing — but in order, after SPF, DKIM, and DMARC are solid.`,
      },
      {
        term: "DNSSEC",
        id: "dnssec",
        body: `DNSSEC — DNS Security Extensions — adds a layer of cryptographic verification to DNS. Ordinary DNS has no built-in way to prove that the answer you received actually came from the legitimate owner of a domain, which leaves room for certain attacks that forge DNS responses and redirect traffic. DNSSEC signs DNS records so that resolvers can confirm they're authentic and unaltered.

In practice, DNSSEC is something you enable at your DNS provider and your domain registrar, which coordinate to publish and validate the signatures. When it's on, recipients of your DNS information can trust it hasn't been tampered with in transit.

It's not the first thing most small organizations turn on, but it's a reasonable hardening step for the DNS that underpins your domain — particularly as your domain becomes more critical to your operations.`,
      },
      {
        term: "SMTP",
        id: "smtp",
        body: `SMTP — Simple Mail Transfer Protocol — is the standard that mail servers use to send email across the internet. When people refer to your "primary SMTP address," they mean the main, authoritative email address of record for an account — as distinct from any aliases that also route to the same mailbox.

The distinction matters for naming conventions. The recommendation is to make your primary SMTP address follow a clean, programmatic format — first.last@domain — even if you also keep friendlier aliases. The primary address is the one the system treats as canonical, so it's the one worth getting right from the start.

SMTP is also the layer that email authentication protects: SPF, DKIM, and DMARC all exist to add trust and verification on top of SMTP, which was originally designed without any built-in way to confirm who a message really came from.`,
      },
    ],
  },
  {
    section: "Security",
    entries: [
      {
        term: "MFA",
        id: "mfa",
        body: `MFA — multi-factor authentication — requires more than just a password to sign in. The factors are usually described as something you know (a password), something you have (a phone, a hardware key), and something you are (a fingerprint or face). Requiring at least two means a stolen password alone isn't enough to get in.

MFA is the single highest-impact security control most organizations can turn on, and the baseline expectation for any account that matters. The vast majority of account compromises involve credentials that had no second factor.

Not all MFA is equal. Codes sent by SMS are better than nothing but can be intercepted or phished. App-based codes (TOTP) and push approvals are stronger. Phishing-resistant methods like passkeys and FIDO2 hardware keys are stronger still, because they can't be handed to a fake login page. The direction of travel across the industry is toward phishing-resistant authentication as the requirement rather than the upgrade.`,
      },
      {
        term: "TOTP",
        id: "totp",
        body: `TOTP — time-based one-time password — is the six-digit code that rotates every thirty seconds in an authenticator app like 1Password, Authy, or Google Authenticator. It's one of the most common second factors for multi-factor authentication.

It works without any network connection. Your device and the service share a secret when you first set it up, and both independently compute the same code from that secret plus the current time. Because the codes are generated locally rather than sent over a network, TOTP is meaningfully more secure than codes delivered by SMS, which can be intercepted or redirected.

The practical advice: store your TOTP secrets in your password manager alongside the credentials they protect. That keeps your second factors organized, backed up, and recoverable when a device is lost — rather than stranded on a single phone.`,
      },
      {
        term: "Vault",
        id: "vault",
        body: `A vault is a folder within a password manager — the unit you use to organize and share credentials. In 1Password, for example, vaults are how you separate, say, finance credentials from operations credentials, and how you control who can see what.

The right way to think about vaults is by access group, not by individual. The question for every vault is "who should be able to see this?" — and membership follows the answer. This keeps credentials organized around roles rather than people, which means access survives turnover: someone joins a team and gains the right vaults, someone leaves and loses them, without anyone hand-editing individual entries.

Designing vaults well follows the same restraint as designing permission groups: create the fewest, simplest vaults that capture real distinctions, and add structure where you genuinely expect access to diverge over time.`,
      },
      {
        term: "Service Account",
        id: "service-account",
        body: `A service account is an account that isn't tied to a specific human being. Instead of ownership and top-level control living on the CEO's or CFO's personal login, it lives on a dedicated account — commonly something like itadmin@yourdomain.com — whose credential is stored in the organization's password manager and retrieved only when needed.

The security benefit is significant. Executives are the most heavily targeted people in any organization. If the credential with ultimate authority over your environment is an executive's everyday account, a single successful phishing attack is catastrophic. If that authority sits on a service account that's rarely touched and locked in a password manager, the people most likely to be attacked are no longer holding the keys to everything.

As a convention, the service account should be the owner of record of your major platforms — Microsoft, Google, accounting, and so on — with a principal listed as owner only in the few places that genuinely call for it.`,
      },
      {
        term: "Super Admin",
        id: "super-admin",
        body: `A super admin (or global admin) is an account with the highest level of control over a platform — able to manage every user, change any setting, and grant or revoke anyone else's access. In Google Workspace it's the Super Admin role; in Microsoft 365 it's the Global Administrator.

Because these accounts can do anything, they're the most valuable target in your environment and deserve the most protection. Best practice is to keep the number of super admins small, secure them with phishing-resistant multi-factor authentication, and — wherever possible — assign top-level ownership to a dedicated service account rather than an individual's day-to-day login.

Super admin credentials are exactly the kind of thing that belongs in a password manager, retrieved deliberately when needed rather than used for routine work.`,
      },
      {
        term: "Least Privilege",
        id: "least-privilege",
        body: `The principle of least privilege says every person, account, and system should have exactly the access required to do its job — and nothing more. The bookkeeper reaches accounting but not the servers; the marketing contractor edits the campaign folder but never sees HR records.

The payoff is twofold. It limits the blast radius of any compromise — a breached account can only reach what it was narrowly granted — and it keeps the whole environment legible, because access organized around roles can actually be reasoned about and reviewed.

In practice, least privilege means assigning permissions to groups rather than individuals, defaulting to shared-team ownership of data rather than personal ownership, and starting people with minimal access and adding what they need rather than granting broadly and clawing back later. Built in from the start it costs almost nothing; retrofitted later it's one of the more disruptive things an organization can take on.`,
      },
      {
        term: "Asymmetric Cryptography",
        id: "asymmetric-cryptography",
        body: `Asymmetric cryptography is the model behind most modern security, including the DKIM signatures that authenticate your email. It uses a pair of mathematically linked keys: one that locks (or signs) and one that unlocks (or verifies). Crucially, the two are different — what one key does, only the other can undo.

This is what makes it possible to prove authenticity in public. You keep the private (locking) key secret and publish the public (unlocking) key for the whole world to see. When you sign something with your private key, anyone can use your published public key to confirm it really came from you and wasn't altered — without ever having access to the secret key itself.

In email, your outgoing server signs each message with a private key only you hold, and you publish the matching public key in DNS. A receiving server uses that public key to verify the signature. If it checks out, the message is authentic; if it doesn't, the recipient knows not to trust it.`,
      },
      {
        term: "DUNS",
        id: "duns",
        body: `A DUNS number (Data Universal Numbering System) is a unique nine-digit identifier for a business, issued by Dun & Bradstreet. It's a widely used way for organizations and vendors to verify that a company is a real, registered entity.

In an IT context, the place it most often comes up is enrolling in Apple Business, which requires a DUNS number to verify your organization before issuing managed Apple IDs and enabling device management. Most established organizations already have one; if you don't, it's free to request, though it can take a little time to be issued.

It's worth checking whether you have a DUNS number early, since it can be a prerequisite step — and a potential source of delay — when setting up business platforms that need to confirm you're a legitimate organization.`,
      },
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
        term: "SSO",
        id: "sso",
        body: `SSO — single sign-on — lets people use one identity to access many applications, instead of maintaining a separate username and password for each. Sign in once, and that verified identity carries across the connected services.

There's a spectrum. At the simplest end, "sign in with Google," "sign in with Microsoft," and "sign in with Apple" buttons are a lightweight form of SSO — convenient and identity-based rather than password-based. At the more robust end is true federated single sign-on using protocols like SAML and OIDC, often through a dedicated identity provider, which gives you central control over access and offboarding.

The strategic value is the shift from thinking about your company as a scattering of independent passwords to thinking about it in terms of identities. One important caveat: SSO is tied to your domain name, so it's best turned on once your brand identity is settled, not while you're still workshopping it.`,
      },
      {
        term: "Federation",
        id: "federation",
        body: `Federation is the arrangement that lets one identity system trust another, so a single identity can be used across organizational or platform boundaries. It's the machinery underneath single sign-on: rather than each application holding its own copy of your credentials, applications federate to a central identity provider that vouches for who you are.

A common practical example: an organization on Microsoft 365 that also runs a Google tenant can federate the two, so people authenticate through one without maintaining separate logins for the other. Both Microsoft and Google support this, and there are step-by-step guides for setting it up — you don't necessarily need a full third-party SSO platform to benefit.

Federation, built on standards like SAML and OIDC, is what makes an identity-first model possible: authentication based on a trusted identity rather than a pile of independent username-and-password pairs.`,
      },
      {
        term: "JumpCloud",
        id: "jumpcloud",
        body: `JumpCloud is a cloud-based directory-as-a-service platform that manages user identity, device management, and application access from a single place. If you're familiar with Active Directory — Microsoft's on-premises directory — JumpCloud is roughly the cloud-native equivalent, designed to work across Windows, Mac, and Linux without requiring an on-premises server.

What JumpCloud does in practice: it's your central system for managing employee accounts, controlling what those accounts can access (via LDAP, RADIUS, or SAML), managing device policies, and connecting your organization to cloud applications via Single Sign-On.

For organizations with a mix of Macs and Windows machines, or that have moved fully to the cloud, JumpCloud is frequently the right directory choice. It handles the full employee lifecycle: provision the new hire, configure their device, grant access to the applications they need, and revoke everything when they leave.

RSystems manages JumpCloud for several clients — it's our most common recommendation for organizations that don't have a structural reason to be Microsoft-first.`,
      },
      {
        term: "Okta",
        id: "okta",
        body: `Okta is a cloud-based identity and access management platform purpose-built for enterprise SSO, MFA, lifecycle management, and application integration. It's one of the dominant enterprise identity platforms, particularly common in organizations that run a mix of cloud applications and need a neutral identity layer that isn't tied to Microsoft or Google.

Where Okta fits: organizations with complex multi-cloud environments, a large number of application integrations (Okta's Integration Network has thousands of pre-built connectors), or requirements that go beyond what's bundled in their existing licensing.

The comparison that comes up most often: Okta vs. Entra ID. Entra ID is the natural choice if you're Microsoft-first — it's already included in your Microsoft 365 licensing. Okta makes more sense when you're running across multiple cloud environments, or when you need capabilities Entra ID doesn't provide. Okta is not cheap, and the licensing cost is a real factor in the decision.

Okta also competes with JumpCloud at the lower end of the market. JumpCloud is the more cost-effective option for mid-market organizations that need a solid directory and SSO without the full Okta feature set.`,
      },
      {
        term: "SAML",
        id: "saml",
        body: `SAML — Security Assertion Markup Language — is the protocol that makes Single Sign-On work for enterprise applications. It allows users to log into one system (the identity provider, like JumpCloud or Entra ID) and automatically gain access to connected applications (service providers, like Salesforce, Slack, or Workday) without entering separate credentials.

How it works: your employee clicks "Log in with [your company]" in Salesforce. Salesforce redirects them to your identity provider. Your identity provider confirms their identity and sends back a signed assertion. Salesforce accepts it and logs them in. The employee has no Salesforce password — their identity provider is the credential that matters.

SAML has been the dominant enterprise SSO standard since 2001. If you're configuring SSO for a business application today, it almost certainly supports it. Understanding SAML matters when SSO breaks — tracing a failed authentication usually comes down to a misconfigured assertion or a mismatched entity ID.`,
      },
      {
        term: "SCIM",
        id: "scim",
        body: `SCIM — System for Cross-domain Identity Management — is the standard for automating user account provisioning. Where SAML handles "who is this person?", SCIM handles "create this account" and "disable this account."

Without SCIM: when someone joins, your IT team manually creates accounts in every application they need. When someone leaves, you manually go through each one to disable or delete their access. The gap between someone's last day and when their accounts are actually disabled is a real security window.

With SCIM: your identity provider (JumpCloud, Entra ID, Okta) pushes changes to connected applications automatically. Add someone to the Engineering group in your directory, and SCIM provisions their GitHub access. Remove them when they leave, and every connected application gets the deprovisioning event simultaneously.

SCIM is one of those features that looks administrative but has direct security implications. It's worth prioritizing in any SSO implementation.`,
      },
      {
        term: "OIDC",
        id: "oidc",
        body: `OIDC — OpenID Connect — is a modern authentication standard built on top of OAuth 2.0. Like SAML, it enables Single Sign-On. Unlike SAML, it uses JSON rather than XML and is designed for both web applications and mobile apps.

If SAML is the enterprise SSO standard, OIDC is the modern web standard. Consumer apps (Sign in with Google, Sign in with Apple) use OIDC. Many newer enterprise applications prefer it as well.

The practical distinction: SAML and OIDC accomplish the same goal — SSO — but OIDC is lighter weight, easier to implement, and better suited to modern applications and mobile. Most identity providers support both.

When setting up SSO for a new application, you'll be asked which protocol it supports. SAML is the safe default for legacy enterprise apps; OIDC is increasingly common in newer products. Understanding which one you're working with matters for troubleshooting — a failed SAML assertion and a failed OIDC token exchange fail differently and require different investigation.`,
      },
      {
        term: "Distribution Group",
        id: "distribution-group",
        body: `A distribution group is an email address that forwards to a list of people — send one message to team@yourdomain.com and everyone in the group receives it. It's the standard way to reach a team, department, or role without maintaining the membership by hand in every message.

Distribution groups are closely related to permission groups, and both benefit from the same discipline: consistent, intuitive naming, and membership organized around roles rather than improvised case by case. Well-named groups are ones people actually keep up to date.

Thinking in groups — for email distribution and for permissions alike — is part of shifting from managing individuals to managing roles, which is what keeps an organization manageable as it grows and as people come and go.`,
      },
    ],
  },
  {
    section: "MDM",
    entries: [
      {
        term: "MDM",
        id: "mdm",
        body: `MDM — mobile device management — is the system that lets an organization configure, secure, and manage its devices centrally: laptops, phones, and tablets, wherever they physically are. It pushes software, enforces security policies like disk encryption and screen locks, manages certificates, and can remotely lock or wipe a lost or stolen device.

What once seemed like an enterprise luxury is now a baseline. If you're running company devices without MDM, you're managing them by hand and carrying real risk. The major caveat is that changing MDM providers later is consistently painful — particularly on Apple, where a push-notification certificate tied to a specific email address can be very awkward to change after the fact — so it's worth setting up thoughtfully from the start.

Providers include JumpCloud, Microsoft Intune, Jamf, Mosyle, Kandji, and others. Any of them beats nothing. The bigger decision is committing to device management early, before you have a sprawling fleet to retrofit.`,
      },
      {
        term: "Zero-Touch Provisioning",
        id: "zero-touch",
        body: `Zero-touch provisioning is the experience of a brand-new device configuring itself automatically. An employee peels the plastic off a laptop, powers it on, signs in with their corporate credentials, and the machine enrolls in management, pulls down the apps and policies it needs, and is ready to work — without IT ever physically touching it.

For this to work, the device manufacturer or reseller has to register the hardware to your organization at the point of sale. On the Microsoft side this is Windows Autopilot; on the Apple side it's automated enrollment through Apple Business. In both cases the key is arranging it before or at purchase, which is the main reason to buy company hardware through business channels rather than consumer retail.

The payoff is the first onboarding that doesn't require a staff member to babysit a laptop — and it scales with every hire after that. It's one of the higher-leverage things to set up early, because it's far easier to establish at the start than to retrofit across an existing fleet.`,
      },
      {
        term: "Autopilot",
        id: "autopilot",
        body: `Windows Autopilot is Microsoft's zero-touch device deployment system. When a new Windows PC powers on for the first time, Autopilot handles everything automatically — joining it to your directory, installing required apps, applying security policies, and getting it ready for the employee — without IT ever touching the machine.

The practical impact: a new hire can receive a laptop in the mail, power it on, sign in with their corporate credentials, and have a fully configured work machine in under 30 minutes. No imaging, no manual setup, no shipping to IT first.

Autopilot works in tandem with Intune for device management and Entra ID for identity. For organizations already in the Microsoft ecosystem, it's one of the highest-leverage tools available.

The catch: it requires proper upfront configuration — Intune enrollment policies, app deployment packages, and device registration with your hardware vendor. Done right, it works beautifully. This is one of those things worth doing correctly once rather than cobbling together over time.`,
      },
      {
        term: "Apple Business",
        id: "apple-business",
        body: `Apple Business (formerly Apple Business Manager) is Apple's free platform for organizations to manage Apple devices, identities, and apps at scale. It provides managed Apple IDs on your own domain, automated device enrollment, volume app purchasing, and — in its current form — a built-in MDM, while also integrating with third-party MDMs like JumpCloud, Jamf, Intune, and others.

Setting it up takes only minutes of hands-on time, though verification can take days to a few weeks, and it requires a DUNS number, which most organizations already have. If you use Apple devices at work, this is the foundation you build management on — and verifying your domain through it prevents people from creating Apple IDs on your domain that you can't control.

The strong recommendation is to set it up from the very beginning. Doing so doesn't obligate you to use every feature; it simply prevents the small, convenient, wrong decisions — like an app tied to someone's personal Apple ID — that become painful and costly to unwind later.`,
      },
      {
        term: "Managed Apple ID",
        id: "managed-apple-id",
        body: `A managed Apple ID is an Apple account that your organization creates and controls through Apple Business, on your own domain — as opposed to a personal Apple ID an employee sets up themselves. Because the organization owns it, you can reset it, reassign it, and revoke it when someone leaves.

The contrast is the whole point. When work apps, devices, or data are tied to a personal Apple ID, you have no control: when that person changes roles or leaves, updates break, password prompts appear that nobody can answer, and licenses are stranded. Managed Apple IDs keep all of that under organizational control.

They're also a prerequisite for more advanced capabilities like device trust on personal iPhones, where a managed Apple ID is what links the device to your organization securely. Managing your Apple IDs from the start avoids a painful cleanup later, when people will otherwise have accumulated personal Apple IDs on your domain through the wrong channels.`,
      },
      {
        term: "BYOD",
        id: "byod",
        body: `BYOD — bring your own device — covers the reality that employees use personal phones and computers for work, most commonly to check email on a personal iPhone or Android. It's convenient and almost universal, but it raises a real question: what happens to company data on a device you don't own when that person leaves, especially under contentious terms?

The thoughtful answer isn't to ban it but to manage it. A BYOD MDM enrollment loads a certificate — a cryptographic watermark — onto the personal device that confirms it's known and trusted, and that can be revoked if the device is lost or the person is terminated. This enables device trust: the ability to say company systems are only reachable from devices you recognize, including personal ones, without taking full control of the employee's phone.

On Apple, this works through a managed Apple ID, which is one more reason to manage Apple identities from the start.`,
      },
      {
        term: "Device Trust",
        id: "device-trust",
        body: `Device trust is the policy that sensitive systems — HR data, financial systems — can only be accessed from devices the organization knows about and trusts. Rather than relying on a correct password alone, the system also checks that the request is coming from a recognized, compliant device.

For company-owned laptops this is straightforward. The harder and more interesting case is personal devices: you want to let people check email on their own phones without taking over those phones. The answer is a lightweight enrollment that places a revocable certificate — a cryptographic watermark — on the personal device, confirming it's trusted and allowing access to be cut off instantly if the device is lost or the person leaves.

Device trust has good support on both iOS and Android for personally owned devices. On Apple it depends on signing in with a managed Apple ID, which ties the personal device to your organization — yet another reason to manage Apple identities properly from the beginning.`,
      },
      {
        term: "VPP",
        id: "vpp",
        body: `VPP — Volume Purchase Program — is the part of Apple Business that lets an organization buy apps centrally and assign them to devices and users, with the licenses owned by the company rather than an individual. When someone leaves, their assigned licenses return to the pool and can be reassigned to the next person.

The reason this matters is what happens without it. If a paid app is bought on an employee's personal Apple ID, that license is locked to that personal account. You can't transfer it to corporate ownership later — when you move to managed Apple IDs, the license is simply lost. Bought correctly through VPP, the same app is a company asset you control and reassign freely.

It's a clear example of why buying and managing within the proper business channels from the start avoids a category of cost and frustration that's effectively impossible to recover later.`,
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
        id: "azure",
        body: `Microsoft Azure is Microsoft's cloud platform — the infrastructure, platform, and software services that let organizations run workloads in Microsoft's global data centers rather than on-premises hardware.

For Microsoft-first organizations, Azure is the natural cloud extension. It integrates directly with Entra ID, Active Directory, Microsoft 365, and Intune. Running Windows Server workloads, SQL Server, or .NET applications in Azure benefits from native licensing integrations — Azure Hybrid Benefit, for example, lets you apply existing Windows Server and SQL Server licenses to reduce cloud costs.

The services that come up most often in enterprise infrastructure work: Azure Virtual Machines (IaaS compute), Azure Virtual Network (private networking), Azure Storage, Azure SQL Managed Instance, and Azure Backup. For identity, Entra ID is Azure's identity layer and is already included in every Microsoft 365 subscription.

Migration path: organizations moving on-premises workloads to Azure typically start with lift-and-shift — replicate the workload as-is, validate it runs, then optimize. Over time, purpose-built PaaS services reduce infrastructure management overhead compared to maintaining VMs.`,
      },
      {
        term: "AWS",
        id: "aws",
        body: `Amazon Web Services is the market-leading cloud platform by revenue, breadth of services, and enterprise adoption. For organizations without a strong Microsoft or Google dependency, AWS is often the default enterprise cloud choice.

Where AWS leads: compute (EC2), object storage (S3), managed databases (RDS, Aurora, DynamoDB), and the overall maturity and operational depth of its infrastructure services. AWS regions and availability zones give organizations fine-grained control over where data and compute physically run.

The services most relevant to enterprise infrastructure work: EC2 (virtual machines), S3 (object storage), VPC (network isolation), IAM (access control within AWS), RDS (managed relational databases), and Route 53 (DNS). AWS IAM is notably granular — and notably complex. Getting IAM right is one of the most consequential and most frequently mishandled aspects of an AWS deployment.

The multi-cloud reality: most mid-market organizations aren't running AWS and Azure and GCP simultaneously by design — they're running one primary cloud and a second because a SaaS vendor or acquisition required it. Rationalizing cloud sprawl is often worth the effort.`,
      },
      {
        term: "GCP",
        id: "gcp",
        body: `Google Cloud Platform is Google's cloud offering. GCP has historically been strongest in data analytics, machine learning infrastructure, and containerized workloads — BigQuery and Google Kubernetes Engine (GKE) are leading products in their respective categories.

For general enterprise infrastructure work, GCP is the least common of the three major clouds in mid-market environments. Where it tends to appear: organizations with heavy data engineering or ML workloads, companies deeply integrated with Google Workspace that want a native cloud extension, or teams that standardized on Kubernetes early.

One architectural difference worth knowing: GCP uses a global VPC model by default, where a single VPC spans all regions. AWS and Azure use regional VPCs. This can be a meaningful advantage for distributed workloads — or a surprise for teams coming from the other platforms.

The practical guidance: if you don't have a specific reason to be on GCP, you're likely better served by Azure (if Microsoft-first) or AWS (if cloud-native or vendor-neutral). GCP's pricing is competitive and its Kubernetes offering is the strongest of the three, but those advantages only matter if your workloads require them.`,
      },
      {
        term: "Cloud Identity (Google)",
        id: "cloud-identity",
        body: `Cloud Identity is Google's standalone identity and access management product — Google's identity layer without the rest of Google Workspace. Its free tier, Cloud Identity Free, lets an organization stand up a Google tenant at no cost, with managed user accounts, Google as an identity provider for single sign-on, basic device management, and security reporting.

What it enables in practice: you can use Google as your identity provider for free, and you can sign in to view documents that have been shared specifically with you — even if your organization runs email on Microsoft rather than Google. Creating and verifying the tenant also prevents anyone else from impersonating your domain on Google's side.

The free tier has limits — it's identity only, with no Gmail or Drive, and caps at a modest number of accounts — but for establishing a footprint and preventing impersonation, it's one of the more underused free tools available. There's a fuller write-up in our Free Resources.`,
      },
      {
        term: "Tenant",
        id: "tenant",
        body: `A tenant is your organization's own dedicated space within a cloud provider's platform — your isolated instance of Microsoft 365, Google Workspace, or similar, containing your users, settings, data, and domain. When people talk about "our Microsoft tenant" or "our Google tenant," they mean this container.

A key and frequently misunderstood point: having a tenant is not the same as paying for one. You can create both a Microsoft 365 / Azure tenant and a Google Workspace tenant at no cost — what costs money is the licenses you attach to users within them. Both providers offer free licensing tiers, and nonprofits in particular can access a great deal at no charge.

Creating a tenant and verifying your domain within it does two valuable things even if you never attach a paid license: it reserves your space so no one else can claim it, and it prevents others from impersonating your domain on that platform. There's a strong case for every organization to have both a Google and a Microsoft tenant.`,
      },
      {
        term: "OneDrive vs. SharePoint",
        id: "onedrive-sharepoint",
        body: `OneDrive and SharePoint are both Microsoft 365 storage, but they answer different ownership questions. OneDrive is an individual's personal work storage; SharePoint is shared, team- or organization-owned storage. (The Google equivalents are My Drive for the individual and Shared Drives for the team.)

The distinction that matters: is a given file owned by a person or by the organization? Even personal work storage sits under the corporate umbrella, but a file in someone's OneDrive is structured around that individual — which becomes a problem when they leave and they were the only one who could manage it.

The guidance is to keep as much as possible in the shared context — SharePoint or Shared Drives — because turnover is inevitable and you don't want critical data trapped behind a departed employee's personal ownership. Put team data where the team, not an individual, owns it.`,
      },
      {
        term: "Shared Drive vs. My Drive",
        id: "shared-drive",
        body: `In Google Workspace, My Drive is your personal work storage — files you own and manage individually. Shared Drives are organization-owned storage where a team or department owns the content, not any individual. (The Microsoft equivalents are OneDrive for personal and SharePoint for team storage.)

The distinction matters most when people leave. Files in someone's My Drive are tied to that person — when they depart, access management gets complicated and the organization can find itself locked out of its own content. Files in a Shared Drive belong to the organization; membership changes don't affect ownership.

Default to Shared Drives for anything that belongs to the team — project files, client work, shared documents. Reserve My Drive for genuinely personal working files.`,
      },
      {
        term: "Team Folder",
        id: "team-folder",
        body: `A team folder is shared storage owned by a group rather than an individual. The term is most explicit in Dropbox (team folders versus personal folders), but the concept maps directly to Google's Shared Drives and Microsoft's SharePoint.

The reason team folders matter is ownership continuity. When data lives in an individual's personal folder, the permissions and control are tied to that person — so when they leave, you can find yourself unable to manage your own files. When data lives in a team folder, the team or organization owns it, and access is governed by group membership that survives turnover.

The rule of thumb is simple: don't put team data in a personal folder. Default to the shared, team-owned context, and reserve personal storage for genuinely personal working files.`,
      },
    ],
  },
]

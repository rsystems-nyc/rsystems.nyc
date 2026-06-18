export interface GlossaryTerm {
  slug: string
  term: string
  aka?: string[]
  shortDef: string
  categories: string[]
  content: string
  related?: string[]
}

export const glossaryTerms: GlossaryTerm[] = [
  // ── Microsoft ──────────────────────────────────────────────────────────────
  {
    slug: "autopilot",
    term: "Autopilot",
    aka: ["Windows Autopilot"],
    shortDef: "Microsoft's zero-touch Windows deployment system. New PCs configure themselves on first boot — no IT hands-on required.",
    categories: ["Microsoft", "MDM"],
    related: ["intune", "entra-id", "zero-touch"],
    content: `Windows Autopilot is Microsoft's zero-touch device deployment system. When a new Windows PC powers on for the first time, Autopilot handles everything automatically — joining it to your directory, installing required apps, applying security policies, and getting it ready for the employee — without IT ever touching the machine.

The practical impact: a new hire can receive a laptop in the mail, power it on, sign in with their corporate credentials, and have a fully configured work machine in under 30 minutes. No imaging, no manual setup, no shipping to IT first.

Autopilot works in tandem with Intune for device management and Entra ID for identity. For organizations already in the Microsoft ecosystem, it's one of the highest-leverage tools available. The ROI comes from the first hire onboarding that doesn't require an IT staff member to babysit a laptop.

The catch: it requires proper upfront configuration — Intune enrollment policies, app deployment packages, and device registration with your hardware vendor. Done right, it works beautifully. This is one of those things worth doing correctly once rather than cobbling together over time.`,
  },
  {
    slug: "intune",
    term: "Intune",
    aka: ["Microsoft Intune"],
    shortDef: "Microsoft's cloud platform for managing and securing every device in your organization — enforcing policies regardless of where they are.",
    categories: ["Microsoft", "MDM"],
    related: ["autopilot", "entra-id", "mdm"],
    content: `Microsoft Intune is a cloud-based device and application management platform. It's the system that enforces your IT policies across every device in your organization — Windows laptops, Macs, iPhones, Android — regardless of where they are.

What Intune does day-to-day: it pushes software to devices, enforces security policies (screen lock, disk encryption, VPN configurations), manages certificates, wipes lost or stolen devices remotely, and reports on device compliance.

For Microsoft-first organizations, Intune is the device management backbone. It integrates directly with Entra ID, which means you can define policy like "require a compliant, enrolled device to access company email" — and Intune enforces it automatically.

The distinction that matters: Intune manages the device. Entra ID manages the identity. Together they form Microsoft's modern device management stack, replacing the older model of on-premises domain joins and Group Policy.`,
  },
  {
    slug: "entra-id",
    term: "Entra ID",
    aka: ["Azure Active Directory", "Azure AD", "AAD"],
    shortDef: "Microsoft's cloud identity service — verifies who someone is and controls what they can access. Formerly called Azure Active Directory.",
    categories: ["Microsoft", "Identity"],
    related: ["intune", "autopilot", "saml", "oidc"],
    content: `Microsoft Entra ID — formerly called Azure Active Directory — is Microsoft's cloud-based identity and access management service. It's the system that verifies who someone is and controls what they can access.

When an employee signs into Microsoft 365, SharePoint, or any application connected via Single Sign-On, Entra ID is doing the authentication in the background. It's also where you manage user accounts, groups, licenses, and access policies.

Entra ID is not the same as on-premises Active Directory, though Microsoft has worked hard to bridge the two. On-premises AD is the traditional Windows domain system designed for users inside a physical network. Entra ID is cloud-native and designed for the reality that users access resources from anywhere.

The features that matter most: conditional access (require MFA from unmanaged devices), device compliance integration with Intune, and the ability to serve as your central identity provider for hundreds of third-party applications via SAML and OIDC. If you have Microsoft 365, you already have Entra ID — the question is how well you're using it.`,
  },

  // ── DNS ────────────────────────────────────────────────────────────────────
  {
    slug: "dns",
    term: "DNS",
    aka: ["Domain Name System"],
    shortDef: "The internet's address book. Translates domain names to IP addresses and routes web and email traffic to the right servers.",
    categories: ["Networking"],
    related: ["spf", "dkim", "dmarc"],
    content: `DNS — the Domain Name System — is the internet's address book. It translates human-friendly names like yourcompany.com into the numerical addresses computers use, and it directs different kinds of traffic to the right places: your website to one server, your email to another.

It's useful to think of your DNS as a public ledger. It's a record only you control, published openly for the entire internet to read, where you declare how things connected to your domain should behave — which servers handle your mail, which services are authorized to send on your behalf, and how recipients should treat messages that fail those checks.

Because so much depends on it — your website, your email delivery, your email authentication — DNS is foundational infrastructure. Getting it right and keeping it well-managed underpins much of what follows in any IT setup.`,
  },
  {
    slug: "spf",
    term: "SPF",
    aka: ["Sender Policy Framework"],
    shortDef: "A DNS record listing which servers are authorized to send email for your domain — receiving servers check it to block impersonation.",
    categories: ["Networking", "Security"],
    related: ["dkim", "dmarc", "bimi"],
    content: `SPF — Sender Policy Framework — is a DNS record that specifies which mail servers are authorized to send email on behalf of your domain. When a receiving mail server gets a message claiming to be from you, it checks your SPF record to verify the sending server is on your approved list.

SPF prevents a basic form of email spoofing: unauthorized servers impersonating your domain. Publishing an SPF record is a prerequisite for DMARC enforcement and a baseline expectation for email deliverability.

The operational issue: every service that sends email on your behalf — your CRM, your marketing platform, your ticketing system, your HR software — needs to be listed in your SPF record. Organizations that add SaaS tools over time frequently forget to update their SPF record, which causes legitimate email to fail authentication and land in spam.

SPF validates the sending server, not the message itself. It also doesn't protect the "From" address the recipient sees in their email client. Those gaps are filled by DKIM and DMARC respectively.`,
  },
  {
    slug: "dkim",
    term: "DKIM",
    aka: ["DomainKeys Identified Mail"],
    shortDef: "Adds a cryptographic signature to outgoing email, verified by receiving servers using your public key published in DNS.",
    categories: ["Networking", "Security"],
    related: ["spf", "dmarc", "asymmetric-cryptography"],
    content: `DKIM — DomainKeys Identified Mail — adds a cryptographic signature to outgoing email. The signature is generated using a private key you control; the corresponding public key is published in your DNS. When a receiving server gets your email, it retrieves your public key and uses it to verify the signature, confirming the message came from you and wasn't modified in transit.

Where SPF validates the sending server, DKIM validates the message itself. A DKIM signature survives forwarding in a way that SPF checks don't — this makes it more reliable in complex routing scenarios and a stronger authentication signal.

Setup: your email provider generates a key pair, you add the public key to your DNS as a TXT record, and outgoing email is signed automatically. Most modern platforms (Google Workspace, Microsoft 365) handle this with minimal configuration. The failure mode is forgetting to configure DKIM for secondary sending services.

Both SPF and DKIM feed into DMARC, which is the enforcement layer that tells receiving servers what to do when either check fails.`,
  },
  {
    slug: "dmarc",
    term: "DMARC",
    aka: ["Domain-based Message Authentication, Reporting, and Conformance"],
    shortDef: "Tells receiving servers what to do with email that fails authentication — reject, quarantine, or flag. The enforcement layer on top of SPF and DKIM.",
    categories: ["Networking", "Security"],
    related: ["spf", "dkim", "bimi"],
    content: `DMARC — Domain-based Message Authentication, Reporting, and Conformance — tells receiving mail servers what to do with messages that fail email authentication checks. It's the enforcement layer that sits on top of SPF and DKIM.

Here's the context: email was designed without authentication. Anyone can send an email claiming to be from any address. SPF and DKIM address this, but they're detection mechanisms — DMARC is what tells the world to act on what they detect.

A DMARC policy says: "If email claiming to be from my domain doesn't pass SPF or DKIM checks, [do nothing / send to spam / reject it] — and report to me what you saw."

Without DMARC, anyone can send phishing emails that appear to come from your domain. With a properly configured DMARC policy at p=reject, those emails never reach your customers or partners.

The hierarchy: SPF specifies which mail servers can send on your behalf. DKIM cryptographically signs each message so recipients can verify it wasn't tampered with. DMARC tells the world what to do when either check fails, and sends you reporting data on who's sending mail that claims to be from you.

Getting to p=reject requires care — you need to confirm all legitimate email sources are properly authenticated first. Moving too fast blocks your own mail. It's worth the effort.`,
  },
  {
    slug: "bimi",
    term: "BIMI",
    aka: ["Brand Indicators for Message Identification"],
    shortDef: "Displays your logo next to the sender name in Gmail, Apple Mail, and other supporting clients — requires full email authentication.",
    categories: ["Networking", "Security"],
    related: ["dmarc", "spf", "dkim"],
    content: `BIMI — Brand Indicators for Message Identification — is an email standard that displays your organization's logo directly in the email client, next to the sender name in Gmail, Apple Mail, and other supporting clients, when a message passes full email authentication.

The prerequisite: your domain must have an enforced DMARC policy (p=quarantine or p=reject) before BIMI will function. Most implementations also require a Verified Mark Certificate (VMC) from a qualified certificate authority — a paid credential that verifies your ownership of the trademarked logo.

The value goes beyond the visual. BIMI functions as a signal that your email authentication stack is properly configured end-to-end. Getting to a point where BIMI works means SPF, DKIM, and DMARC are all correctly in place. The logo display is the visible result; the underlying authentication posture is what actually matters for deliverability and spoofing prevention.

For organizations with active phishing concerns or brand trust considerations, BIMI is worth pursuing — but in order, after SPF, DKIM, and DMARC are solid.`,
  },
  {
    slug: "dnssec",
    term: "DNSSEC",
    aka: ["DNS Security Extensions"],
    shortDef: "Adds cryptographic signatures to DNS records so resolvers can verify responses haven't been forged or tampered with.",
    categories: ["Networking", "Security"],
    related: ["dns"],
    content: `DNSSEC — DNS Security Extensions — adds a layer of cryptographic verification to DNS. Ordinary DNS has no built-in way to prove that the answer you received actually came from the legitimate owner of a domain, which leaves room for certain attacks that forge DNS responses and redirect traffic. DNSSEC signs DNS records so that resolvers can confirm they're authentic and unaltered.

In practice, DNSSEC is something you enable at your DNS provider and your domain registrar, which coordinate to publish and validate the signatures. When it's on, recipients of your DNS information can trust it hasn't been tampered with in transit.

It's not the first thing most small organizations turn on, but it's a reasonable hardening step for the DNS that underpins your domain — particularly as your domain becomes more critical to your operations.`,
  },
  {
    slug: "smtp",
    term: "SMTP",
    aka: ["Simple Mail Transfer Protocol"],
    shortDef: "The protocol mail servers use to send email. Your primary SMTP address is the authoritative address of record — distinct from any aliases on the same mailbox.",
    categories: ["Networking"],
    related: ["spf", "dkim", "dmarc"],
    content: `SMTP — Simple Mail Transfer Protocol — is the standard that mail servers use to send email across the internet. When people refer to your "primary SMTP address," they mean the main, authoritative email address of record for an account — as distinct from any aliases that also route to the same mailbox.

The distinction matters for naming conventions. The recommendation is to make your primary SMTP address follow a clean, programmatic format — first.last@domain — even if you also keep friendlier aliases. The primary address is the one the system treats as canonical, so it's the one worth getting right from the start.

SMTP is also the layer that email authentication protects: SPF, DKIM, and DMARC all exist to add trust and verification on top of SMTP, which was originally designed without any built-in way to confirm who a message really came from.`,
  },

  // ── Security ───────────────────────────────────────────────────────────────
  {
    slug: "mfa",
    term: "MFA",
    aka: ["Multi-Factor Authentication", "Two-Factor Authentication", "2FA"],
    shortDef: "Requires more than a password to sign in — typically a password plus a code from your phone. A stolen password alone isn't enough.",
    categories: ["Security", "Identity"],
    related: ["totp", "sso", "least-privilege"],
    content: `MFA — multi-factor authentication — requires more than just a password to sign in. The factors are usually described as something you know (a password), something you have (a phone, a hardware key), and something you are (a fingerprint or face). Requiring at least two means a stolen password alone isn't enough to get in.

MFA is the single highest-impact security control most organizations can turn on, and the baseline expectation for any account that matters. The vast majority of account compromises involve credentials that had no second factor.

Not all MFA is equal. Codes sent by SMS are better than nothing but can be intercepted or phished. App-based codes (TOTP) and push approvals are stronger. Phishing-resistant methods like passkeys and FIDO2 hardware keys are stronger still, because they can't be handed to a fake login page. The direction of travel across the industry is toward phishing-resistant authentication as the requirement rather than the upgrade.`,
  },
  {
    slug: "totp",
    term: "TOTP",
    aka: ["Time-Based One-Time Password"],
    shortDef: "The rotating six-digit code in an authenticator app — the most common second factor for MFA.",
    categories: ["Security"],
    related: ["mfa"],
    content: `TOTP — time-based one-time password — is the six-digit code that rotates every thirty seconds in an authenticator app like 1Password, Authy, or Google Authenticator. It's one of the most common second factors for multi-factor authentication.

It works without any network connection. Your device and the service share a secret when you first set it up, and both independently compute the same code from that secret plus the current time. Because the codes are generated locally rather than sent over a network, TOTP is meaningfully more secure than codes delivered by SMS, which can be intercepted or redirected.

The practical advice: store your TOTP secrets in your password manager alongside the credentials they protect. That keeps your second factors organized, backed up, and recoverable when a device is lost — rather than stranded on a single phone.`,
  },
  {
    slug: "vault",
    term: "Vault",
    shortDef: "A folder within a password manager for organizing and sharing credentials — the unit that controls who can access what.",
    categories: ["Security"],
    related: ["least-privilege", "service-account"],
    content: `A vault is a folder within a password manager — the unit you use to organize and share credentials. In 1Password, for example, vaults are how you separate, say, finance credentials from operations credentials, and how you control who can see what.

The right way to think about vaults is by access group, not by individual. The question for every vault is "who should be able to see this?" — and membership follows the answer. This keeps credentials organized around roles rather than people, which means access survives turnover: someone joins a team and gains the right vaults, someone leaves and loses them, without anyone hand-editing individual entries.

Designing vaults well follows the same restraint as designing permission groups: create the fewest, simplest vaults that capture real distinctions, and add structure where you genuinely expect access to diverge over time.`,
  },
  {
    slug: "service-account",
    term: "Service Account",
    shortDef: "A non-human account used as owner of record for systems and tools — not tied to any individual employee.",
    categories: ["Identity", "Security"],
    related: ["super-admin", "least-privilege", "vault"],
    content: `A service account is an account that isn't tied to a specific human being. Instead of ownership and top-level control living on the CEO's or CFO's personal login, it lives on a dedicated account — commonly something like itadmin@yourdomain.com — whose credential is stored in the organization's password manager and retrieved only when needed.

The security benefit is significant. Executives are the most heavily targeted people in any organization. If the credential with ultimate authority over your environment is an executive's everyday account, a single successful phishing attack is catastrophic. If that authority sits on a service account that's rarely touched and locked in a password manager, the people most likely to be attacked are no longer holding the keys to everything.

As a convention, the service account should be the owner of record of your major platforms — Microsoft, Google, accounting, and so on — with a principal listed as owner only in the few places that genuinely call for it.`,
  },
  {
    slug: "super-admin",
    term: "Super Admin",
    aka: ["Global Administrator", "Global Admin"],
    shortDef: "Highest-privilege account on a platform — manages every user, changes any setting, grants or revokes all access.",
    categories: ["Identity", "Security"],
    related: ["service-account", "least-privilege", "mfa"],
    content: `A super admin (or global admin) is an account with the highest level of control over a platform — able to manage every user, change any setting, and grant or revoke anyone else's access. In Google Workspace it's the Super Admin role; in Microsoft 365 it's the Global Administrator.

Because these accounts can do anything, they're the most valuable target in your environment and deserve the most protection. Best practice is to keep the number of super admins small, secure them with phishing-resistant multi-factor authentication, and — wherever possible — assign top-level ownership to a dedicated service account rather than an individual's day-to-day login.

Super admin credentials are exactly the kind of thing that belongs in a password manager, retrieved deliberately when needed rather than used for routine work.`,
  },
  {
    slug: "least-privilege",
    term: "Least Privilege",
    shortDef: "Every account gets exactly the access its job requires — nothing more. Limits the blast radius of a compromise or insider mistake.",
    categories: ["Security"],
    related: ["service-account", "super-admin", "scim"],
    content: `The principle of least privilege says every person, account, and system should have exactly the access required to do its job — and nothing more. The bookkeeper reaches accounting but not the servers; the marketing contractor edits the campaign folder but never sees HR records.

The payoff is twofold. It limits the blast radius of any compromise — a breached account can only reach what it was narrowly granted — and it keeps the whole environment legible, because access organized around roles can actually be reasoned about and reviewed.

In practice, least privilege means assigning permissions to groups rather than individuals, defaulting to shared-team ownership of data rather than personal ownership, and starting people with minimal access and adding what they need rather than granting broadly and clawing back later. Built in from the start it costs almost nothing; retrofitted later it's one of the more disruptive things an organization can take on.`,
  },
  {
    slug: "asymmetric-cryptography",
    term: "Asymmetric Cryptography",
    aka: ["Public-Key Cryptography"],
    shortDef: "Uses a pair of linked keys — one to sign or encrypt, another to verify or decrypt. What one key does, only the other can undo.",
    categories: ["Security"],
    related: ["dkim", "certificate"],
    content: `Asymmetric cryptography is the model behind most modern security, including the DKIM signatures that authenticate your email. It uses a pair of mathematically linked keys: one that locks (or signs) and one that unlocks (or verifies). Crucially, the two are different — what one key does, only the other can undo.

This is what makes it possible to prove authenticity in public. You keep the private (locking) key secret and publish the public (unlocking) key for the whole world to see. When you sign something with your private key, anyone can use your published public key to confirm it really came from you and wasn't altered — without ever having access to the secret key itself.

In email, your outgoing server signs each message with a private key only you hold, and you publish the matching public key in DNS. A receiving server uses that public key to verify the signature. If it checks out, the message is authentic; if it doesn't, the recipient knows not to trust it.`,
  },
  {
    slug: "duns",
    term: "DUNS",
    aka: ["DUNS Number", "Data Universal Numbering System"],
    shortDef: "A unique nine-digit business identifier issued by Dun & Bradstreet — required for Apple Business enrollment and some vendor verification processes.",
    categories: ["Identity"],
    related: ["apple-business"],
    content: `A DUNS number (Data Universal Numbering System) is a unique nine-digit identifier for a business, issued by Dun & Bradstreet. It's a widely used way for organizations and vendors to verify that a company is a real, registered entity.

In an IT context, the place it most often comes up is enrolling in Apple Business, which requires a DUNS number to verify your organization before issuing managed Apple IDs and enabling device management. Most established organizations already have one; if you don't, it's free to request, though it can take a little time to be issued.

It's worth checking whether you have a DUNS number early, since it can be a prerequisite step — and a potential source of delay — when setting up business platforms that need to confirm you're a legitimate organization.`,
  },
  {
    slug: "siem",
    term: "SIEM",
    aka: ["Security Information and Event Management"],
    shortDef: "Collects and correlates log data from across your environment — servers, firewalls, endpoints, cloud — to detect threats and anomalies.",
    categories: ["Security"],
    related: ["mdr-edr"],
    content: `A SIEM — Security Information and Event Management — collects log data from across your entire environment (servers, firewalls, endpoints, cloud services) and correlates it to detect threats and anomalies.

The value is in aggregation. A single failed login attempt isn't interesting. A thousand failed login attempts against one account at 3 AM from an IP in a country where you have no employees — that's a pattern worth acting on. A SIEM catches it.

Modern SIEMs combine rule-based alerting (triggers you configure) with machine learning (baseline normal behavior, alert on deviations). The ongoing tuning is what makes them useful — raw SIEM data produces enormous noise, and turning it into actionable signal requires both expertise and time.

For most organizations under 500 employees, a standalone SIEM is probably overkill. The more practical entry point is a managed MDR service that includes SIEM capabilities as part of an end-to-end offering.`,
  },
  {
    slug: "mdr-edr",
    term: "MDR vs. EDR",
    aka: ["Managed Detection and Response", "Endpoint Detection and Response"],
    shortDef: "EDR monitors device behavior for threats and enables active response — the evolution of antivirus. MDR adds a 24/7 analyst team on top.",
    categories: ["Security"],
    related: ["siem"],
    content: `EDR — Endpoint Detection and Response — is software on your devices that monitors for malicious behavior and provides tools to detect, investigate, and respond to threats. CrowdStrike, SentinelOne, and Carbon Black are examples. It's the evolution of antivirus: instead of matching known signatures, it watches what processes are doing and stops behavior that looks like an attack.

MDR — Managed Detection and Response — wraps EDR with a team of security analysts who monitor your environment 24/7. The MDR provider watches the alerts from your EDR, triages them, escalates real threats, and often has the authority to take action on your behalf.

The practical distinction: EDR is a tool. MDR is a tool plus a team.

EDR alone requires someone internal to monitor and respond to alerts — something most IT teams don't have the bandwidth or specialization for. MDR solves that by outsourcing the watch function to specialists. For organizations that want serious security coverage without building an internal SOC, MDR is typically the right answer.`,
  },
  {
    slug: "certificate",
    term: "Certificate",
    aka: ["Digital Certificate", "TLS Certificate", "SSL Certificate"],
    shortDef: "A cryptographically signed credential that proves identity. Browsers verify a website's certificate before establishing an HTTPS connection.",
    categories: ["Security", "Networking"],
    related: ["asymmetric-cryptography"],
    content: `A digital certificate is a cryptographically signed credential that proves the identity of a server, organization, or individual. When you visit a website over HTTPS, the site presents a certificate issued by a trusted Certificate Authority — your browser verifies it before establishing an encrypted connection.

Types that come up most often in enterprise environments:

TLS/SSL certificates secure HTTPS connections for websites, APIs, and internal services. They're issued per domain and expire on a fixed schedule — typically every one to two years, though many organizations now use 90-day certificates with automated renewal.

Code signing certificates verify that software was published by a known entity and hasn't been modified. Required for Windows software distribution and increasingly common for scripts and deployment packages.

S/MIME certificates sign and encrypt email messages at the content level, separate from transport-layer TLS.

Client certificates authenticate users or devices to services as an alternative to passwords — common in zero-trust architectures and VPN configurations.

The operational risk: certificates expire, and an expired certificate causes hard failures — browsers display security warnings, services refuse connections. Certificate lifecycle management is one of those operational details that seems minor until it causes an outage. Organizations with many certificates should track expiration dates centrally, not rely on individual teams to remember.`,
  },

  // ── AI ─────────────────────────────────────────────────────────────────────
  {
    slug: "claude-code",
    term: "Claude Code",
    shortDef: "Anthropic's agentic coding tool. Runs in your terminal, reads files, writes code, and executes commands directly in your development environment.",
    categories: ["Cloud & Infrastructure"],
    related: ["mcp-api"],
    content: `Claude Code is Anthropic's agentic coding tool — a version of Claude that runs in your terminal and can read files, write code, execute commands, and interact with your development environment directly. Unlike using Claude in a chat window, Claude Code can actually execute work: it reads your codebase, writes and modifies files, runs tests, and iterates until something works.

For developers, it functions as a pair programmer with full context of the entire project, capable of making coordinated changes across many files simultaneously. For non-developers managing technical projects, it enables a different mode of working — you describe what you want built, Claude Code determines how to do it, and then does it.

The RSystems website was built using Claude Code running on a dedicated Linux VM. Every case study, every service page, the navigation structure, the SEO improvements — all of it was written and deployed by Claude Code working from natural-language instructions.

The key distinction from chat-based AI: Claude Code doesn't suggest code, it runs it. That changes what's possible.`,
  },
  {
    slug: "mcp-api",
    term: "MCP vs. API",
    aka: ["Model Context Protocol", "Application Programming Interface"],
    shortDef: "APIs define how software communicates with software. MCPs (Model Context Protocol) let AI models connect to tools directly — no custom integration code needed.",
    categories: ["Cloud & Infrastructure"],
    related: ["claude-code"],
    content: `An API — Application Programming Interface — is a defined way for one piece of software to communicate with another. When your application retrieves data from Salesforce, or your website shows live inventory, it's using an API. APIs are designed for machines: they require developers to write code that properly formats requests and handles responses.

An MCP — Model Context Protocol — is a newer standard developed by Anthropic that allows AI models to connect to external tools and services in a standardized way. Think of it as a universal adapter that lets an AI assistant interact with your calendar, your email, your CRM, your network monitoring platform — anything that has published an MCP server.

The practical difference: APIs require custom integration code. MCPs let AI models consume capabilities directly. If Slack publishes an MCP server, any MCP-compatible AI assistant can read messages, post updates, and search history — without a developer writing a custom integration.

For organizations thinking about AI integration, MCPs dramatically lower the friction of connecting AI to existing systems. The ecosystem is still early, but the direction of travel is clear.`,
  },

  // ── SSO ────────────────────────────────────────────────────────────────────
  {
    slug: "sso",
    term: "SSO",
    aka: ["Single Sign-On"],
    shortDef: "Sign in once and access all connected applications — one identity instead of separate credentials for each service.",
    categories: ["Identity"],
    related: ["saml", "oidc", "scim", "federation"],
    content: `SSO — single sign-on — lets people use one identity to access many applications, instead of maintaining a separate username and password for each. Sign in once, and that verified identity carries across the connected services.

There's a spectrum. At the simplest end, "sign in with Google," "sign in with Microsoft," and "sign in with Apple" buttons are a lightweight form of SSO — convenient and identity-based rather than password-based. At the more robust end is true federated single sign-on using protocols like SAML and OIDC, often through a dedicated identity provider, which gives you central control over access and offboarding.

The strategic value is the shift from thinking about your company as a scattering of independent passwords to thinking about it in terms of identities. One important caveat: SSO is tied to your domain name, so it's best turned on once your brand identity is settled, not while you're still workshopping it.`,
  },
  {
    slug: "federation",
    term: "Federation",
    shortDef: "Lets one identity system trust another so users authenticate across platforms without separate credentials — the machinery underneath SSO.",
    categories: ["Identity"],
    related: ["sso", "saml", "oidc"],
    content: `Federation is the arrangement that lets one identity system trust another, so a single identity can be used across organizational or platform boundaries. It's the machinery underneath single sign-on: rather than each application holding its own copy of your credentials, applications federate to a central identity provider that vouches for who you are.

A common practical example: an organization on Microsoft 365 that also runs a Google tenant can federate the two, so people authenticate through one without maintaining separate logins for the other. Both Microsoft and Google support this, and there are step-by-step guides for setting it up — you don't necessarily need a full third-party SSO platform to benefit.

Federation, built on standards like SAML and OIDC, is what makes an identity-first model possible: authentication based on a trusted identity rather than a pile of independent username-and-password pairs.`,
  },
  {
    slug: "jumpcloud",
    term: "JumpCloud",
    shortDef: "Cloud-based directory that manages identities, devices, and app access — the cloud-native equivalent of Active Directory.",
    categories: ["Identity", "MDM"],
    related: ["okta", "saml", "scim", "mdm"],
    content: `JumpCloud is a cloud-based directory-as-a-service platform that manages user identity, device management, and application access from a single place. If you're familiar with Active Directory — Microsoft's on-premises directory — JumpCloud is roughly the cloud-native equivalent, designed to work across Windows, Mac, and Linux without requiring an on-premises server.

What JumpCloud does in practice: it's your central system for managing employee accounts, controlling what those accounts can access (via LDAP, RADIUS, or SAML), managing device policies, and connecting your organization to cloud applications via Single Sign-On.

For organizations with a mix of Macs and Windows machines, or that have moved fully to the cloud, JumpCloud is frequently the right directory choice. It handles the full employee lifecycle: provision the new hire, configure their device, grant access to the applications they need, and revoke everything when they leave.

RSystems manages JumpCloud for several clients — it's our most common recommendation for organizations that don't have a structural reason to be Microsoft-first.`,
  },
  {
    slug: "okta",
    term: "Okta",
    shortDef: "Cloud-based identity platform for enterprise SSO, MFA, and app integration — neutral, not tied to Microsoft or Google.",
    categories: ["Identity"],
    related: ["jumpcloud", "saml", "oidc", "entra-id"],
    content: `Okta is a cloud-based identity and access management platform purpose-built for enterprise SSO, MFA, lifecycle management, and application integration. It's one of the dominant enterprise identity platforms, particularly common in organizations that run a mix of cloud applications and need a neutral identity layer that isn't tied to Microsoft or Google.

Where Okta fits: organizations with complex multi-cloud environments, a large number of application integrations (Okta's Integration Network has thousands of pre-built connectors), or requirements that go beyond what's bundled in their existing licensing.

The comparison that comes up most often: Okta vs. Entra ID. Entra ID is the natural choice if you're Microsoft-first — it's already included in your Microsoft 365 licensing. Okta makes more sense when you're running across multiple cloud environments, or when you need capabilities Entra ID doesn't provide. Okta is not cheap, and the licensing cost is a real factor in the decision.

Okta also competes with JumpCloud at the lower end of the market. JumpCloud is the more cost-effective option for mid-market organizations that need a solid directory and SSO without the full Okta feature set.`,
  },
  {
    slug: "saml",
    term: "SAML",
    aka: ["Security Assertion Markup Language"],
    shortDef: "The protocol behind enterprise SSO — log into your identity provider once and gain access to connected apps without separate credentials.",
    categories: ["Identity", "Security"],
    related: ["oidc", "sso", "scim"],
    content: `SAML — Security Assertion Markup Language — is the protocol that makes Single Sign-On work for enterprise applications. It allows users to log into one system (the identity provider, like JumpCloud or Entra ID) and automatically gain access to connected applications (service providers, like Salesforce, Slack, or Workday) without entering separate credentials.

How it works: your employee clicks "Log in with [your company]" in Salesforce. Salesforce redirects them to your identity provider. Your identity provider confirms their identity and sends back a signed assertion. Salesforce accepts it and logs them in. The employee has no Salesforce password — their identity provider is the credential that matters.

SAML has been the dominant enterprise SSO standard since 2001. If you're configuring SSO for a business application today, it almost certainly supports it. Understanding SAML matters when SSO breaks — tracing a failed authentication usually comes down to a misconfigured assertion or a mismatched entity ID.`,
  },
  {
    slug: "scim",
    term: "SCIM",
    aka: ["System for Cross-domain Identity Management"],
    shortDef: "The standard for automating user provisioning. SAML handles authentication; SCIM handles creating and disabling accounts.",
    categories: ["Identity"],
    related: ["saml", "sso", "least-privilege"],
    content: `SCIM — System for Cross-domain Identity Management — is the standard for automating user account provisioning. Where SAML handles "who is this person?", SCIM handles "create this account" and "disable this account."

Without SCIM: when someone joins, your IT team manually creates accounts in every application they need. When someone leaves, you manually go through each one to disable or delete their access. The gap between someone's last day and when their accounts are actually disabled is a real security window.

With SCIM: your identity provider (JumpCloud, Entra ID, Okta) pushes changes to connected applications automatically. Add someone to the Engineering group in your directory, and SCIM provisions their GitHub access. Remove them when they leave, and every connected application gets the deprovisioning event simultaneously.

SCIM is one of those features that looks administrative but has direct security implications. It's worth prioritizing in any SSO implementation.`,
  },
  {
    slug: "oidc",
    term: "OIDC",
    aka: ["OpenID Connect"],
    shortDef: "A modern SSO standard built on OAuth 2.0 — like SAML but uses JSON instead of XML, designed for both web and mobile apps.",
    categories: ["Identity", "Security"],
    related: ["saml", "sso", "entra-id"],
    content: `OIDC — OpenID Connect — is a modern authentication standard built on top of OAuth 2.0. Like SAML, it enables Single Sign-On. Unlike SAML, it uses JSON rather than XML and is designed for both web applications and mobile apps.

If SAML is the enterprise SSO standard, OIDC is the modern web standard. Consumer apps (Sign in with Google, Sign in with Apple) use OIDC. Many newer enterprise applications prefer it as well.

The practical distinction: SAML and OIDC accomplish the same goal — SSO — but OIDC is lighter weight, easier to implement, and better suited to modern applications and mobile. Most identity providers support both.

When setting up SSO for a new application, you'll be asked which protocol it supports. SAML is the safe default for legacy enterprise apps; OIDC is increasingly common in newer products. Understanding which one you're working with matters for troubleshooting — a failed SAML assertion and a failed OIDC token exchange fail differently and require different investigation.`,
  },
  {
    slug: "distribution-group",
    term: "Distribution Group",
    shortDef: "An email address that delivers to a list of recipients — send to team@company.com and everyone in the group receives it.",
    categories: ["Identity"],
    related: ["scim", "least-privilege"],
    content: `A distribution group is an email address that forwards to a list of people — send one message to team@yourdomain.com and everyone in the group receives it. It's the standard way to reach a team, department, or role without maintaining the membership by hand in every message.

Distribution groups are closely related to permission groups, and both benefit from the same discipline: consistent, intuitive naming, and membership organized around roles rather than improvised case by case. Well-named groups are ones people actually keep up to date.

Thinking in groups — for email distribution and for permissions alike — is part of shifting from managing individuals to managing roles, which is what keeps an organization manageable as it grows and as people come and go.`,
  },

  // ── MDM ────────────────────────────────────────────────────────────────────
  {
    slug: "mdm",
    term: "MDM",
    aka: ["Mobile Device Management"],
    shortDef: "Centrally manages and secures your device fleet — laptops, phones, tablets — enforcing policies and enabling remote wipe regardless of location.",
    categories: ["MDM"],
    related: ["intune", "jumpcloud", "zero-touch", "device-trust"],
    content: `MDM — mobile device management — is the system that lets an organization configure, secure, and manage its devices centrally: laptops, phones, and tablets, wherever they physically are. It pushes software, enforces security policies like disk encryption and screen locks, manages certificates, and can remotely lock or wipe a lost or stolen device.

What once seemed like an enterprise luxury is now a baseline. If you're running company devices without MDM, you're managing them by hand and carrying real risk. The major caveat is that changing MDM providers later is consistently painful — particularly on Apple, where a push-notification certificate tied to a specific email address can be very awkward to change after the fact — so it's worth setting up thoughtfully from the start.

Providers include JumpCloud, Microsoft Intune, Jamf, Mosyle, Kandji, and others. Any of them beats nothing. The bigger decision is committing to device management early, before you have a sprawling fleet to retrofit.`,
  },
  {
    slug: "zero-touch",
    term: "Zero-Touch Provisioning",
    shortDef: "Devices that configure themselves on first boot — enroll in management, pull down policies and apps, and are ready without IT ever touching them.",
    categories: ["MDM"],
    related: ["autopilot", "apple-business", "mdm"],
    content: `Zero-touch provisioning is the experience of a brand-new device configuring itself automatically. An employee peels the plastic off a laptop, powers it on, signs in with their corporate credentials, and the machine enrolls in management, pulls down the apps and policies it needs, and is ready to work — without IT ever physically touching it.

For this to work, the device manufacturer or reseller has to register the hardware to your organization at the point of sale. On the Microsoft side this is Windows Autopilot; on the Apple side it's automated enrollment through Apple Business. In both cases the key is arranging it before or at purchase, which is the main reason to buy company hardware through business channels rather than consumer retail.

The payoff is the first onboarding that doesn't require a staff member to babysit a laptop — and it scales with every hire after that. It's one of the higher-leverage things to set up early, because it's far easier to establish at the start than to retrofit across an existing fleet.`,
  },
  {
    slug: "apple-business",
    term: "Apple Business",
    aka: ["Apple Business Manager", "ABM"],
    shortDef: "Apple's free platform for managed Apple IDs, zero-touch device enrollment, and corporate app purchasing on your own domain.",
    categories: ["MDM", "Apple"],
    related: ["managed-apple-id", "vpp", "duns", "zero-touch"],
    content: `Apple Business (formerly Apple Business Manager) is Apple's free platform for organizations to manage Apple devices, identities, and apps at scale. It provides managed Apple IDs on your own domain, automated device enrollment, volume app purchasing, and — in its current form — a built-in MDM, while also integrating with third-party MDMs like JumpCloud, Jamf, Intune, and others.

Setting it up takes only minutes of hands-on time, though verification can take days to a few weeks, and it requires a DUNS number, which most organizations already have. If you use Apple devices at work, this is the foundation you build management on — and verifying your domain through it prevents people from creating Apple IDs on your domain that you can't control.

The strong recommendation is to set it up from the very beginning. Doing so doesn't obligate you to use every feature; it simply prevents the small, convenient, wrong decisions — like an app tied to someone's personal Apple ID — that become painful and costly to unwind later.`,
  },
  {
    slug: "managed-apple-id",
    term: "Managed Apple ID",
    shortDef: "An Apple account your organization creates and controls through Apple Business on your domain — you can reset, reassign, or revoke it.",
    categories: ["MDM", "Apple"],
    related: ["apple-business", "byod", "device-trust"],
    content: `A managed Apple ID is an Apple account that your organization creates and controls through Apple Business, on your own domain — as opposed to a personal Apple ID an employee sets up themselves. Because the organization owns it, you can reset it, reassign it, and revoke it when someone leaves.

The contrast is the whole point. When work apps, devices, or data are tied to a personal Apple ID, you have no control: when that person changes roles or leaves, updates break, password prompts appear that nobody can answer, and licenses are stranded. Managed Apple IDs keep all of that under organizational control.

They're also a prerequisite for more advanced capabilities like device trust on personal iPhones, where a managed Apple ID is what links the device to your organization securely. Managing your Apple IDs from the start avoids a painful cleanup later, when people will otherwise have accumulated personal Apple IDs on your domain through the wrong channels.`,
  },
  {
    slug: "byod",
    term: "BYOD",
    aka: ["Bring Your Own Device"],
    shortDef: "Bring your own device — the policy and security questions around employees using personal phones and computers for work.",
    categories: ["MDM"],
    related: ["device-trust", "managed-apple-id", "mdm"],
    content: `BYOD — bring your own device — covers the reality that employees use personal phones and computers for work, most commonly to check email on a personal iPhone or Android. It's convenient and almost universal, but it raises a real question: what happens to company data on a device you don't own when that person leaves, especially under contentious terms?

The thoughtful answer isn't to ban it but to manage it. A BYOD MDM enrollment loads a certificate — a cryptographic watermark — onto the personal device that confirms it's known and trusted, and that can be revoked if the device is lost or the person is terminated. This enables device trust: the ability to say company systems are only reachable from devices you recognize, including personal ones, without taking full control of the employee's phone.

On Apple, this works through a managed Apple ID, which is one more reason to manage Apple identities from the start.`,
  },
  {
    slug: "device-trust",
    term: "Device Trust",
    shortDef: "The policy that sensitive systems can only be accessed from recognized, managed devices — not just a correct password.",
    categories: ["MDM", "Security"],
    related: ["byod", "managed-apple-id", "mdm", "certificate"],
    content: `Device trust is the policy that sensitive systems — HR data, financial systems — can only be accessed from devices the organization knows about and trusts. Rather than relying on a correct password alone, the system also checks that the request is coming from a recognized, compliant device.

For company-owned laptops this is straightforward. The harder and more interesting case is personal devices: you want to let people check email on their own phones without taking over those phones. The answer is a lightweight enrollment that places a revocable certificate — a cryptographic watermark — on the personal device, confirming it's trusted and allowing access to be cut off instantly if the device is lost or the person leaves.

Device trust has good support on both iOS and Android for personally owned devices. On Apple it depends on signing in with a managed Apple ID, which ties the personal device to your organization — yet another reason to manage Apple identities properly from the beginning.`,
  },
  {
    slug: "vpp",
    term: "VPP",
    aka: ["Volume Purchase Program"],
    shortDef: "Apple's Volume Purchase Program — buy apps centrally with licenses owned by the company, not individuals. Licenses return to the pool when someone leaves.",
    categories: ["MDM", "Apple"],
    related: ["apple-business", "managed-apple-id"],
    content: `VPP — Volume Purchase Program — is the part of Apple Business that lets an organization buy apps centrally and assign them to devices and users, with the licenses owned by the company rather than an individual. When someone leaves, their assigned licenses return to the pool and can be reassigned to the next person.

The reason this matters is what happens without it. If a paid app is bought on an employee's personal Apple ID, that license is locked to that personal account. You can't transfer it to corporate ownership later — when you move to managed Apple IDs, the license is simply lost. Bought correctly through VPP, the same app is a company asset you control and reassign freely.

It's a clear example of why buying and managing within the proper business channels from the start avoids a category of cost and frustration that's effectively impossible to recover later.`,
  },

  // ── Virtualization ─────────────────────────────────────────────────────────
  {
    slug: "vmware",
    term: "VMware",
    shortDef: "The dominant enterprise virtualization platform. VMware vSphere runs multiple isolated VMs on a single physical server — maximizing hardware utilization.",
    categories: ["Virtualization"],
    related: ["esxi", "hyper-v"],
    content: `VMware is the dominant enterprise virtualization platform, now owned by Broadcom. VMware vSphere is the core product — it lets you run multiple virtual machines on a single physical server, each isolated from the others. Instead of one server running one workload, you run dozens of VMs on one host, dramatically improving hardware utilization and operational flexibility.

The enterprise stack: vSphere (the hypervisor platform), vCenter (centralized management of all hosts), vSAN (software-defined storage), and NSX (software-defined networking). Most serious VMware deployments are built on some combination of these.

The current landscape: Broadcom acquired VMware in 2023 and moved to a subscription licensing model, ending perpetual licenses and eliminating many lower-tier products. This has significantly increased costs for most organizations and triggered a wave of migration planning — to Hyper-V, Proxmox, Nutanix, or cloud-native alternatives.

For organizations still on VMware: understanding your current licensing exposure and mapping a forward path is increasingly urgent. The integration depth and operational maturity of the platform are real, but so is the cost trajectory under Broadcom's ownership.`,
  },
  {
    slug: "esxi",
    term: "ESXi",
    aka: ["VMware ESXi"],
    shortDef: "VMware's bare-metal hypervisor — runs directly on server hardware and hosts virtual machines on top. The foundation of every vSphere deployment.",
    categories: ["Virtualization"],
    related: ["vmware", "hyper-v"],
    content: `ESXi is VMware's bare-metal hypervisor — the software that runs directly on server hardware and makes virtualization possible. It's the foundation layer of every VMware vSphere deployment: each physical host runs ESXi, which then hosts the virtual machines on top of it.

A hypervisor sits between the physical hardware and the VMs. ESXi exposes CPU, memory, storage, and network resources to virtual machines, giving each VM the appearance of dedicated hardware while actually sharing the physical resources efficiently across many workloads.

In a managed VMware environment, ESXi hosts are controlled through vCenter — you don't typically interact with each host directly. ESXi becomes relevant operationally when you're dealing with host-level issues: hardware failures, firmware updates, network configuration, or storage connectivity problems.

Notable change: the free ESXi license was discontinued by Broadcom in 2024. Organizations running free ESXi — common in smaller environments and branch offices — need to evaluate licensed alternatives or migrate to another platform.`,
  },
  // ── Cloud ──────────────────────────────────────────────────────────────────
  {
    slug: "azure",
    term: "Azure",
    aka: ["Microsoft Azure"],
    shortDef: "Microsoft's cloud platform — infrastructure, platform, and software services in Microsoft's global data centers.",
    categories: ["Cloud & Infrastructure", "Microsoft"],
    related: ["hyper-v", "entra-id", "aws"],
    content: `Microsoft Azure is Microsoft's cloud platform — the infrastructure, platform, and software services that let organizations run workloads in Microsoft's global data centers rather than on-premises hardware.

For Microsoft-first organizations, Azure is the natural cloud extension. It integrates directly with Entra ID, Active Directory, Microsoft 365, and Intune. Running Windows Server workloads, SQL Server, or .NET applications in Azure benefits from native licensing integrations — Azure Hybrid Benefit, for example, lets you apply existing Windows Server and SQL Server licenses to reduce cloud costs.

The services that come up most often in enterprise infrastructure work: Azure Virtual Machines (IaaS compute), Azure Virtual Network (private networking), Azure Storage, Azure SQL Managed Instance, and Azure Backup. For identity, Entra ID is Azure's identity layer and is already included in every Microsoft 365 subscription.

Migration path: organizations moving on-premises workloads to Azure typically start with lift-and-shift — replicate the workload as-is, validate it runs, then optimize. Over time, purpose-built PaaS services reduce infrastructure management overhead compared to maintaining VMs.`,
  },
  {
    slug: "aws",
    term: "AWS",
    aka: ["Amazon Web Services"],
    shortDef: "The market-leading cloud platform by revenue and breadth — the default enterprise cloud for organizations not anchored to Microsoft or Google.",
    categories: ["Cloud & Infrastructure"],
    related: ["azure", "gcp"],
    content: `Amazon Web Services is the market-leading cloud platform by revenue, breadth of services, and enterprise adoption. For organizations without a strong Microsoft or Google dependency, AWS is often the default enterprise cloud choice.

Where AWS leads: compute (EC2), object storage (S3), managed databases (RDS, Aurora, DynamoDB), and the overall maturity and operational depth of its infrastructure services. AWS regions and availability zones give organizations fine-grained control over where data and compute physically run.

The services most relevant to enterprise infrastructure work: EC2 (virtual machines), S3 (object storage), VPC (network isolation), IAM (access control within AWS), RDS (managed relational databases), and Route 53 (DNS). AWS IAM is notably granular — and notably complex. Getting IAM right is one of the most consequential and most frequently mishandled aspects of an AWS deployment.

The multi-cloud reality: most mid-market organizations aren't running AWS and Azure and GCP simultaneously by design — they're running one primary cloud and a second because a SaaS vendor or acquisition required it. Rationalizing cloud sprawl is often worth the effort.`,
  },
  {
    slug: "gcp",
    term: "GCP",
    aka: ["Google Cloud Platform", "Google Cloud"],
    shortDef: "Google's cloud platform — strongest in data analytics, ML infrastructure, and containerized workloads. BigQuery and GKE are leading products.",
    categories: ["Cloud & Infrastructure", "Google"],
    related: ["aws", "azure", "cloud-identity"],
    content: `Google Cloud Platform is Google's cloud offering. GCP has historically been strongest in data analytics, machine learning infrastructure, and containerized workloads — BigQuery and Google Kubernetes Engine (GKE) are leading products in their respective categories.

For general enterprise infrastructure work, GCP is the least common of the three major clouds in mid-market environments. Where it tends to appear: organizations with heavy data engineering or ML workloads, companies deeply integrated with Google Workspace that want a native cloud extension, or teams that standardized on Kubernetes early.

One architectural difference worth knowing: GCP uses a global VPC model by default, where a single VPC spans all regions. AWS and Azure use regional VPCs. This can be a meaningful advantage for distributed workloads — or a surprise for teams coming from the other platforms.

The practical guidance: if you don't have a specific reason to be on GCP, you're likely better served by Azure (if Microsoft-first) or AWS (if cloud-native or vendor-neutral). GCP's pricing is competitive and its Kubernetes offering is the strongest of the three, but those advantages only matter if your workloads require them.`,
  },
  {
    slug: "cloud-identity",
    term: "Cloud Identity",
    aka: ["Cloud Identity Free", "Google Cloud Identity"],
    shortDef: "Google's standalone identity product — managed accounts and SSO without full Workspace. Free tier available for most organizations.",
    categories: ["Cloud & Infrastructure", "Google", "Identity"],
    related: ["tenant", "gcp", "sso"],
    content: `Cloud Identity is Google's standalone identity and access management product — Google's identity layer without the rest of Google Workspace. Its free tier, Cloud Identity Free, lets an organization stand up a Google tenant at no cost, with managed user accounts, Google as an identity provider for single sign-on, basic device management, and security reporting.

What it enables in practice: you can use Google as your identity provider for free, and you can sign in to view documents that have been shared specifically with you — even if your organization runs email on Microsoft rather than Google. Creating and verifying the tenant also prevents anyone else from impersonating your domain on Google's side.

The free tier has limits — it's identity only, with no Gmail or Drive, and caps at a modest number of accounts — but for establishing a footprint and preventing impersonation, it's one of the more underused free tools available. There's a fuller write-up in our Free Resources.`,
  },
  {
    slug: "tenant",
    term: "Tenant",
    shortDef: "Your organization's isolated container within a cloud platform — your users, settings, and data in Microsoft 365, Google Workspace, or similar.",
    categories: ["Cloud & Infrastructure"],
    related: ["entra-id", "cloud-identity"],
    content: `A tenant is your organization's own dedicated space within a cloud provider's platform — your isolated instance of Microsoft 365, Google Workspace, or similar, containing your users, settings, data, and domain. When people talk about "our Microsoft tenant" or "our Google tenant," they mean this container.

A key and frequently misunderstood point: having a tenant is not the same as paying for one. You can create both a Microsoft 365 / Azure tenant and a Google Workspace tenant at no cost — what costs money is the licenses you attach to users within them. Both providers offer free licensing tiers, and nonprofits in particular can access a great deal at no charge.

Creating a tenant and verifying your domain within it does two valuable things even if you never attach a paid license: it reserves your space so no one else can claim it, and it prevents others from impersonating your domain on that platform. There's a strong case for every organization to have both a Google and a Microsoft tenant.`,
  },
  {
    slug: "onedrive-sharepoint",
    term: "OneDrive vs. SharePoint",
    aka: ["OneDrive", "SharePoint"],
    shortDef: "Microsoft 365 storage split by ownership — OneDrive is personal, SharePoint is team-owned. (Google equivalents: My Drive and Shared Drives.)",
    categories: ["Cloud & Infrastructure", "Microsoft"],
    related: ["shared-drive", "team-folder", "tenant"],
    content: `OneDrive and SharePoint are both Microsoft 365 storage, but they answer different ownership questions. OneDrive is an individual's personal work storage; SharePoint is shared, team- or organization-owned storage. (The Google equivalents are My Drive for the individual and Shared Drives for the team.)

The distinction that matters: is a given file owned by a person or by the organization? Even personal work storage sits under the corporate umbrella, but a file in someone's OneDrive is structured around that individual — which becomes a problem when they leave and they were the only one who could manage it.

The guidance is to keep as much as possible in the shared context — SharePoint or Shared Drives — because turnover is inevitable and you don't want critical data trapped behind a departed employee's personal ownership. Put team data where the team, not an individual, owns it.`,
  },
  {
    slug: "shared-drive",
    term: "Shared Drive vs. My Drive",
    aka: ["Shared Drive", "My Drive", "Google Shared Drive"],
    shortDef: "Google Workspace storage split by ownership — My Drive is personal, Shared Drives are team-owned. (Microsoft equivalents: OneDrive and SharePoint.)",
    categories: ["Cloud & Infrastructure", "Google"],
    related: ["onedrive-sharepoint", "team-folder"],
    content: `In Google Workspace, My Drive is your personal work storage — files you own and manage individually. Shared Drives are organization-owned storage where a team or department owns the content, not any individual. (The Microsoft equivalents are OneDrive for personal and SharePoint for team storage.)

The distinction matters most when people leave. Files in someone's My Drive are tied to that person — when they depart, access management gets complicated and the organization can find itself locked out of its own content. Files in a Shared Drive belong to the organization; membership changes don't affect ownership.

Default to Shared Drives for anything that belongs to the team — project files, client work, shared documents. Reserve My Drive for genuinely personal working files.`,
  },
  {
    slug: "team-folder",
    term: "Team Folder",
    shortDef: "Team-owned storage — content belongs to the organization, not an individual, and persists when people leave.",
    categories: ["Cloud & Infrastructure"],
    related: ["shared-drive", "onedrive-sharepoint"],
    content: `A team folder is shared storage owned by a group rather than an individual. The term is most explicit in Dropbox (team folders versus personal folders), but the concept maps directly to Google's Shared Drives and Microsoft's SharePoint.

The reason team folders matter is ownership continuity. When data lives in an individual's personal folder, the permissions and control are tied to that person — so when they leave, you can find yourself unable to manage your own files. When data lives in a team folder, the team or organization owns it, and access is governed by group membership that survives turnover.

The rule of thumb is simple: don't put team data in a personal folder. Default to the shared, team-owned context, and reserve personal storage for genuinely personal working files.`,
  },

  // ── Networking ─────────────────────────────────────────────────────────────
  {
    slug: "vlan",
    term: "VLAN",
    aka: ["Virtual Local Area Network"],
    shortDef: "A logical segment on a physical switch that isolates traffic between device groups — separate networks without extra hardware.",
    categories: ["Networking"],
    related: ["vlan-tagging", "vlan-trunking-vtp", "voice-vlan", "svi", "qos"],
    content: `A VLAN (Virtual Local Area Network) is a logical network segment created on a physical switch that isolates traffic between groups of devices. VLANs let you separate networks — say, employee workstations from security cameras — without buying separate switches.

## What a VLAN does

A switch, by default, forwards traffic to every port. Put 100 devices on one switch and a broadcast from any one of them reaches all 99 others. VLANs fix this by dividing the switch into isolated segments. Traffic in VLAN 10 never reaches VLAN 20 unless it passes through a router or Layer 3 switch — which is exactly where you want to enforce security policy.

The practical result: you can run your workstations, servers, VoIP phones, guest Wi-Fi, and security cameras on the same physical infrastructure while keeping each group's traffic completely separate. A guest on your guest VLAN can't reach your file server. A compromised IoT device can't talk to your workstations. The segmentation is real and enforced at the switch level.

![Diagram showing how VLANs isolate traffic between device groups across two switches](/images/glossary/vlan-types.jpg)

## VLAN types

**Data VLAN** — standard user and device traffic. Most of what runs on your network.

**Voice VLAN** — dedicated to VoIP traffic. Phones are tagged into a separate VLAN so QoS policies can prioritize voice packets and prevent call quality issues when the data network is under load.

**Management VLAN** — isolates access to network device management interfaces (switch web UIs, SSH, SNMP). Should be restricted to IT staff only. Not giving users any path to management interfaces is one of the cheapest security wins available.

**Native VLAN** — the VLAN assigned to untagged traffic on a trunk port. The default is usually VLAN 1 on most switches; changing it is a standard security hardening step.

## Routing between VLANs

VLANs by design don't communicate with each other. To let VLAN 10 reach VLAN 20 — say, to let workstations access a server in the server VLAN — you need inter-VLAN routing, either via a dedicated router or a Layer 3 switch with SVIs configured.`,
  },
  {
    slug: "vlan-tagging",
    term: "VLAN Tagging",
    aka: ["802.1Q", "Dot1Q"],
    shortDef: "The mechanism for labeling Ethernet frames with a VLAN ID so switches know where traffic belongs. Defined by the IEEE 802.1Q standard.",
    categories: ["Networking"],
    related: ["vlan", "vlan-trunking-vtp", "svi"],
    content: `VLAN tagging is the mechanism by which a switch marks an Ethernet frame with a VLAN ID so that other switches know which VLAN the traffic belongs to. The IEEE 802.1Q standard defines how this tag is inserted into the frame header.

When traffic crosses a trunk port — a link carrying multiple VLANs between switches, or between a switch and a router — each frame needs to carry a label identifying which VLAN it belongs to. That label is the 802.1Q tag: a 4-byte field inserted into the Ethernet frame header containing the VLAN ID (1-4094) and a priority value used for QoS.

Access ports (the ports your endpoints plug into) don't use tags. A PC doesn't know or care about VLANs — the switch adds the tag when the frame enters and strips it when the frame leaves toward the endpoint. Tagging is a switch-to-switch and switch-to-router concern.

The native VLAN is the exception: traffic on the native VLAN travels untagged across a trunk. By default this is VLAN 1 on most switches, which is a security risk — VLAN hopping attacks exploit the native VLAN. Standard practice is to set the native VLAN to an unused ID that carries no production traffic.

Understanding 802.1Q is important if you're configuring switches manually, troubleshooting mismatched VLANs, or setting up hypervisor networking where the host needs to pass tagged traffic through to VMs.`,
  },
  {
    slug: "vlan-trunking-vtp",
    term: "VLAN Trunking & VTP",
    aka: ["VTP", "VLAN Trunking Protocol", "Trunk Port"],
    shortDef: "Trunk ports carry multiple VLANs on a single link between switches. VTP (Cisco) propagates VLAN definitions across switches automatically.",
    categories: ["Networking"],
    related: ["vlan", "vlan-tagging", "lacp"],
    content: `A trunk port carries traffic for multiple VLANs across a single link — typically between switches or from a switch to a router. VTP (VLAN Trunking Protocol) is a Cisco-proprietary protocol that propagates VLAN definitions across switches automatically.

## Trunk ports

A trunk port is a switch port configured to carry tagged traffic for multiple VLANs simultaneously, using 802.1Q. It's what connects switches to other switches, and switches to routers. An access port carries one VLAN untagged; a trunk carries many VLANs tagged.

When you add a new VLAN to a trunk, you're extending it across the link — traffic for that VLAN can now flow between the connected devices. You control which VLANs are allowed on each trunk, which is another layer of segmentation.

## VTP

VTP is a Cisco protocol that synchronizes VLAN databases across switches in the same VTP domain. Add a VLAN on the VTP server and it propagates to all client switches automatically. Useful for large environments where managing VLAN configs manually across dozens of switches would be error-prone.

The risk: VTP can propagate deletions too. A misconfigured switch added to a domain in server mode can wipe the VLAN database across all switches in the domain — a production-down event. For this reason, many shops run VTP in transparent mode (the switch ignores VTP updates but passes them along) and manage VLANs manually, or use VTP version 3 which added safeguards. VTP is Cisco-specific; other vendors have no equivalent.`,
  },
  {
    slug: "voice-vlan",
    term: "Voice VLAN",
    shortDef: "A dedicated VLAN for VoIP traffic, separate from data — ensures calls get priority and aren't degraded by data network congestion.",
    categories: ["Networking"],
    related: ["vlan", "qos", "lldp"],
    content: `A Voice VLAN is a dedicated VLAN configured on a switch port to carry VoIP traffic separately from data traffic. It ensures phone calls get priority and aren't affected by congestion on the data network.

VoIP phones are sensitive to latency and jitter in ways that regular data traffic is not. A file transfer tolerates a 200ms delay; a phone call doesn't. Putting voice and data on the same VLAN with the same priority means a file download can degrade call quality.

The solution is to isolate voice traffic into its own VLAN with QoS prioritization. Most managed switches support a voice VLAN configuration where a single port carries both: the phone connects to the switch port, which sends tagged voice traffic into the voice VLAN and untagged data traffic into the data VLAN. The PC plugs into the phone's passthrough port and gets data VLAN access.

The switch uses LLDP-MED or CDP to automatically tell the phone which VLAN to use — the phone picks it up on boot without manual configuration. This is why LLDP (or CDP on Cisco gear) matters in VoIP deployments.

If you're running a VoIP system — whether on-premise or hosted — a properly configured voice VLAN is non-negotiable for reliable call quality.`,
  },
  {
    slug: "svi",
    term: "SVI",
    aka: ["Switched Virtual Interface", "VLAN Interface"],
    shortDef: "A virtual interface on a Layer 3 switch that serves as the default gateway for a VLAN — enables inter-VLAN routing without a separate router.",
    categories: ["Networking"],
    related: ["vlan", "vlan-tagging", "ipv4"],
    content: `An SVI (Switched Virtual Interface) is a virtual Layer 3 interface on a Layer 3 switch that acts as the default gateway for a VLAN. SVIs enable inter-VLAN routing without a separate physical router.

A Layer 3 switch can route traffic between VLANs internally using SVIs — one virtual interface per VLAN, each assigned an IP address that serves as the gateway for devices in that VLAN.

Without an SVI (or an external router), VLANs are completely isolated. VLAN 10 (192.168.10.0/24) and VLAN 20 (192.168.20.0/24) can't communicate at all. Add SVIs for both VLANs on a Layer 3 switch and it can route between them at wire speed, without traffic having to leave the switch.

This is the standard architecture for segmented enterprise networks: a Layer 3 core switch with SVIs for each VLAN handles inter-VLAN routing internally, while a separate firewall handles traffic leaving the network. You get the performance of local routing with the control of firewall policies at the perimeter.

SVIs also provide a management address for the switch itself — the interface you SSH or HTTPS to for switch management, typically on a dedicated management VLAN.`,
  },
  {
    slug: "dhcp",
    term: "DHCP",
    aka: ["Dynamic Host Configuration Protocol"],
    shortDef: "Automatically assigns IP addresses and network configuration to devices when they connect — without it, every device needs a manual IP.",
    categories: ["Networking"],
    related: ["dns", "ipv4", "nat", "vlan"],
    content: `DHCP (Dynamic Host Configuration Protocol) automatically assigns IP addresses and network configuration to devices when they connect to a network. Without it, every device would need a manually configured IP address — which doesn't scale past a handful of devices.

When a device joins a network, it needs four things to communicate: an IP address, a subnet mask, a default gateway, and a DNS server. DHCP provides all of these automatically from a central server — your router, firewall, or a dedicated server — so devices can connect without any manual network configuration.

## DORA: how the handshake works

DHCP uses a four-step process called DORA:

**Discover** — the new device broadcasts a message on the local network (destination 255.255.255.255, source 0.0.0.0) saying "I need an IP address." The client uses UDP port 68; the server listens on UDP port 67.

**Offer** — the DHCP server responds with an available IP address and lease terms.

**Request** — the client broadcasts that it's accepting the offered address (this broadcast notifies other DHCP servers their offer wasn't chosen).

**Acknowledge** — the server confirms, the client configures itself, and it's on the network.

The whole exchange typically completes in under a second.

## Static vs dynamic allocation

DHCP doesn't mean every device gets a random address every time. Most DHCP servers support static assignments — binding a specific IP to a device's MAC address so it always gets the same address. This is the right approach for servers, printers, and network devices that need predictable addresses, while still benefiting from centralized IP management rather than manual configuration on each device.`,
  },
  {
    slug: "mac-address",
    term: "MAC Address",
    aka: ["Media Access Control Address", "Hardware Address", "Physical Address"],
    shortDef: "A permanent hardware identifier assigned to a network interface at the factory — identifies the device itself, not its location.",
    categories: ["Networking"],
    related: ["vlan", "dhcp", "lacp"],
    content: `A MAC address is a unique hardware identifier assigned to a network interface at the factory. Where an IP address tells the network where a device is, a MAC address identifies what the device is — permanently, at the hardware level.

Every network interface — wired NIC, Wi-Fi adapter, virtual adapter — has a MAC address: 48 bits written as six pairs of hexadecimal characters (e.g. \`00:1A:2B:3C:4D:5E\`). The first three pairs identify the manufacturer (the OUI, or Organizationally Unique Identifier); the last three are unique to that specific device.

MAC addresses operate at Layer 2 (the Data Link layer). When traffic moves within your local network, switches use MAC address tables to decide which port to send a frame out of. IP addresses route traffic between networks; MAC addresses deliver it within one.

A few practical implications:

**DHCP reservations** use MAC addresses to assign a device the same IP address every time. You bind the MAC to the desired IP in your DHCP server.

**MAC filtering** on Wi-Fi networks restricts which devices can connect. It's a weak security control — MAC addresses are trivial to spoof — but it's still used for basic network access control in low-security environments.

**Port security** on managed switches can lock a port to specific MAC addresses, preventing unauthorized devices from plugging in.

Note that modern operating systems increasingly use MAC address randomization for Wi-Fi scanning and connections to prevent location tracking. If you're relying on MAC addresses for device identification in a BYOD environment, be aware that the MAC you see may not be the hardware MAC.`,
  },
  {
    slug: "lan",
    term: "LAN",
    aka: ["Local Area Network"],
    shortDef: "A network connecting devices within a defined physical area — a single office, building, or campus.",
    categories: ["Networking"],
    related: ["wan", "vlan", "dhcp"],
    content: `A LAN (Local Area Network) is a network connecting devices within a defined physical area — a single office, building, or campus. It's the "inside" of your network, as opposed to the internet-facing WAN.

Your LAN is everything inside your network perimeter: workstations, servers, printers, phones, cameras, and the switches and access points connecting them. Traffic within the LAN typically moves at 1Gbps to 10Gbps on wired connections and doesn't touch your internet circuit.

Modern LANs are built on Ethernet (IEEE 802.3) for wired connections and Wi-Fi (IEEE 802.11) for wireless. They're almost universally segmented into VLANs — logical subdivisions that isolate different types of traffic on the same physical infrastructure.

The LAN is where you have full control: you define the IP addressing, set security policies, control routing, and choose what can reach what. This is distinct from the WAN, where traffic is handled by your ISP and the public internet.

For small organizations, the "LAN" often means a single flat network behind a firewall/router. For larger or more security-conscious environments, the LAN is segmented: a separate VLAN for workstations, servers, management, IoT, and guests — each with appropriate firewall rules between them.`,
  },
  {
    slug: "wan",
    term: "WAN",
    aka: ["Wide Area Network"],
    shortDef: "A network spanning multiple locations — branch offices to headquarters, or your office to the internet. Your internet circuit is a WAN link.",
    categories: ["Networking"],
    related: ["lan", "sd-wan"],
    content: `A WAN (Wide Area Network) is a network that spans multiple locations — typically connecting branch offices to headquarters, or an office to the internet. Your internet connection is a WAN link.

Where a LAN connects devices within one location, a WAN connects locations to each other or to the internet. For most organizations, the WAN is the internet circuit delivered by an ISP — fiber, cable, or dedicated circuits like MPLS.

Multi-site organizations use WAN links to connect branch offices. Traditionally this meant leased lines or MPLS circuits from a carrier — private, reliable, but expensive and inflexible. Modern alternatives:

**SD-WAN** — software-defined WAN management that can bond multiple cheaper internet connections (fiber + 4G/5G backup) and intelligently route traffic across them, often replacing expensive MPLS at a fraction of the cost.

**VPN over internet** — an encrypted tunnel over standard internet circuits. Lower cost than dedicated circuits; latency and reliability depend on the underlying internet paths.

WAN links are typically the performance and reliability bottleneck for multi-site organizations. Bandwidth is shared (or you pay more for dedicated), latency is higher than LAN, and failures depend on your ISP rather than your own infrastructure.`,
  },
  {
    slug: "nat",
    term: "NAT",
    aka: ["Network Address Translation"],
    shortDef: "Lets multiple devices share a single public IP — how your entire office accesses the internet through one IP assigned by your ISP.",
    categories: ["Networking"],
    related: ["ipv4", "ipv6", "dhcp"],
    content: `NAT (Network Address Translation) allows multiple devices on a private network to share a single public IP address when communicating with the internet. It's how your entire office accesses the internet through one IP assigned by your ISP.

IPv4 has roughly 4.3 billion addresses — not enough for every device on the internet. NAT solves this by letting an entire private network share one (or a few) public IPs. Your firewall or router performs NAT: outgoing traffic gets the public IP as its source address; incoming responses are translated back to the correct internal device.

The internal address ranges used behind NAT are private IP ranges defined by RFC 1918 — 192.168.x.x, 10.x.x.x, 172.16.x.x to 172.31.x.x. These addresses aren't routable on the public internet, which is part of what makes NAT work: the same 192.168.1.x range can exist behind every NAT device in the world without conflict.

**Port Address Translation (PAT)** — sometimes called NAT overload — is the specific technique that lets thousands of devices share a single public IP by tracking connections via port numbers. This is what almost every home and office network uses.

NAT is also a minor security benefit: devices behind NAT aren't directly reachable from the internet, because inbound connections have nowhere to go without an explicit port forwarding rule. This isn't a substitute for a firewall, but it does reduce the exposed attack surface.

IPv6 was designed to eliminate the need for NAT by providing enough addresses for every device to have a public IP. Adoption has been slow; most networks remain dual-stack or IPv4-only with NAT for the foreseeable future.`,
  },
  {
    slug: "cidr",
    term: "CIDR",
    aka: ["Classless Inter-Domain Routing", "Slash Notation", "Subnet Notation"],
    shortDef: "The notation for IP address ranges — 192.168.1.0/24 means the first 24 bits are the network, leaving 256 host addresses in that block.",
    categories: ["Networking"],
    related: ["ipv4", "ipv6", "nat", "dhcp"],
    content: `CIDR (Classless Inter-Domain Routing) is the notation used to describe IP address ranges and subnet sizes. A CIDR notation like 192.168.1.0/24 means the first 24 bits are the network address, leaving 8 bits for host addresses — 256 addresses in that subnet.

Before CIDR, IP networks were divided into fixed classes (A, B, C) with fixed sizes — wasteful and inflexible. CIDR replaced this with variable-length subnet masks, letting you carve up IP space precisely.

The slash number (prefix length) tells you how many bits are fixed for the network portion:

- /24 — 256 addresses (254 usable). The most common subnet for a single office VLAN.
- /16 — 65,536 addresses. Typical for larger enterprise networks using the 10.0.0.0/8 range.
- /30 — 4 addresses (2 usable). Often used for point-to-point links between routers.
- /32 — a single host address. Used in routing policy and firewall rules to reference a specific device.

You'll encounter CIDR notation constantly when configuring firewalls, defining DHCP scopes, writing ACLs, and reading routing tables. "Allow traffic from 10.10.0.0/16" means allow any source address in the 10.10.0.0 to 10.10.255.255 range.

One quick mental model: each bit you add to the prefix length halves the subnet. A /24 has 256 addresses. A /25 has 128. A /26 has 64.`,
  },
  {
    slug: "ipv4",
    term: "IPv4",
    shortDef: "The standard internet addressing scheme. IPv4 addresses are 32-bit numbers written as four octets — like 192.168.1.1.",
    categories: ["Networking"],
    related: ["ipv6", "dhcp", "nat", "cidr"],
    content: `IPv4 is the fourth version of the Internet Protocol and the addressing scheme that underlies most networks today. An IPv4 address is a 32-bit number written as four decimal octets separated by dots — like 192.168.1.1.

IPv4 has been the foundation of internet networking since 1983. It defines how devices on a network are addressed and how packets are routed from source to destination.

A 32-bit address space allows for about 4.3 billion unique addresses — which sounded like more than enough in 1983, and turned out not to be. The combination of NAT (which lets millions of devices share one public IP) and private address ranges (10.x.x.x, 172.16-31.x.x, 192.168.x.x) has extended IPv4's life well beyond when the address exhaustion problem would otherwise have ended it.

IPv4 headers carry source and destination addresses, a TTL (time to live) counter that decrements at each hop to prevent packets from looping forever, protocol identifiers, and checksum data. The protocol is connectionless — it routes packets independently and doesn't guarantee delivery or order (that's TCP's job).

Despite IPv6 being over 25 years old, the vast majority of enterprise networks remain on IPv4 for internal addressing. The transition complexity, the maturity of NAT, and the cost of dual-stack infrastructure have made IPv4 remarkably durable. Most networks will run some form of IPv4 for the foreseeable future.`,
  },
  {
    slug: "ipv6",
    term: "IPv6",
    shortDef: "IPv4's successor — 128-bit addresses providing enough unique IPs for every device on earth. Written as eight groups of hex digits separated by colons.",
    categories: ["Networking"],
    related: ["ipv4", "nat", "cidr"],
    content: `IPv6 is the successor to IPv4, using 128-bit addresses to provide a vastly larger address space — enough for every device on earth to have a unique public IP. IPv6 addresses are written as eight groups of four hexadecimal digits separated by colons.

IPv4's 4.3 billion address limit was always going to run out. IPv6 replaces the 32-bit address with 128 bits, producing 340 undecillion addresses — a number large enough that address exhaustion is no longer a practical concern.

An IPv6 address looks like \`2001:0db8:85a3:0000:0000:8a2e:0370:7334\`, often shortened by omitting leading zeros and replacing consecutive groups of zeros with \`::\`.

Key differences from IPv4:

**No NAT required** — every device can have a globally routable public address. The privacy implications are handled by temporary addresses and privacy extensions.

**Stateless Address Autoconfiguration (SLAAC)** — devices can configure their own IPv6 addresses from the network prefix without a DHCP server, though DHCPv6 also exists.

**Built-in IPsec** — IPv6 was designed with security in mind, though in practice this is less significant than the marketing suggested.

**No broadcast** — IPv6 uses multicast and anycast instead, reducing unnecessary traffic.

Despite being standardized in 1998, IPv6 adoption in enterprise networks has been slow. Most SMB and mid-market organizations still run IPv4-only internally, relying on ISPs and CDNs to handle IPv6 externally. Modern operating systems, cloud providers, and ISPs are all dual-stack, meaning the transition is ongoing rather than complete. If you're designing a new network today, supporting dual-stack is worth planning for even if IPv6 isn't a day-one priority.`,
  },
  {
    slug: "acl",
    term: "ACL",
    aka: ["Access Control List"],
    shortDef: "Rules on a network device that permit or deny traffic by source, destination, port, and protocol — how you enforce network segmentation policy.",
    categories: ["Networking", "Security"],
    related: ["vlan", "qos", "svi"],
    content: `An ACL (Access Control List) is a set of rules on a network device — switch, router, or firewall — that permits or denies traffic based on source, destination, port, and protocol. ACLs are how you enforce "VLAN 10 can't reach VLAN 20 except on port 443."

ACLs are the fundamental traffic control mechanism in networking. Every packet that hits an interface with an ACL applied gets evaluated against the rules in order. The first match wins. If no rule matches, the implicit default is usually "deny all."

A typical ACL rule: permit TCP from 10.10.10.0/24 to 10.20.0.0/24 port 443. This allows HTTPS traffic from the workstation subnet to the server subnet, nothing else.

ACLs operate at two levels:

**Switch ACLs (Layer 2/3)** — applied on VLAN interfaces or routed ports on a Layer 3 switch. Used to control inter-VLAN traffic at the distribution layer before it hits the firewall.

**Router/Firewall ACLs (Layer 3/4)** — applied on interfaces or security zones. The primary mechanism for defining what traffic is allowed between network segments.

Standard vs extended: standard ACLs filter on source IP only. Extended ACLs filter on source IP, destination IP, protocol, and port. Extended is almost always what you want.

Apply ACLs as close to the source as practical — this prevents unwanted traffic from traversing your network at all rather than just blocking it at the destination. On Cisco gear, the common guidance is inbound on the source interface.`,
  },
  {
    slug: "qos",
    term: "QoS",
    aka: ["Quality of Service"],
    shortDef: "Techniques that prioritize latency-sensitive traffic — VoIP, video — so it isn't degraded when the network is under load.",
    categories: ["Networking"],
    related: ["voice-vlan", "lacp", "vlan"],
    content: `QoS (Quality of Service) is the set of techniques used to prioritize network traffic so that latency-sensitive traffic — VoIP calls, video conferencing — isn't degraded when the network is congested.

Networks don't inherently know the difference between a VoIP packet and a file download. Under load, both get treated equally — which means a large file transfer can cause call quality to deteriorate. QoS fixes this by marking traffic and giving higher-priority traffic preferential treatment in queues.

The most common framework is DSCP (Differentiated Services Code Point) — a 6-bit field in the IP header that marks each packet with a priority class. Voice traffic gets Expedited Forwarding (EF). Video gets Assured Forwarding (AF). Bulk transfers get Best Effort (BE). Switches and routers inspect these markings and serve higher-priority queues first.

QoS matters most at constrained points: the uplink port between your access switch and core, WAN links where available bandwidth is genuinely limited, and Wi-Fi, which has its own QoS mechanisms (WMM — Wi-Fi Multimedia).

A few realities:

QoS doesn't create bandwidth; it manages scarcity. If your WAN link is consistently saturated, QoS helps but more bandwidth ultimately solves the problem.

End-to-end QoS only works if every device in the path honors the markings. If your ISP doesn't preserve DSCP markings — many don't — QoS is only effective within your LAN.

For VoIP deployments, proper QoS configuration on your switches and at the WAN edge is essential. Without it, any sustained traffic spike will produce audible call quality issues.`,
  },
  {
    slug: "lacp",
    term: "LACP",
    aka: ["Link Aggregation Control Protocol", "LAG", "Link Aggregation Group", "Port Channel", "NIC Teaming", "Bonding"],
    shortDef: "Combines multiple physical links into a single logical link — adding bandwidth and surviving a single cable failure. Two 10Gbps links become one 20Gbps.",
    categories: ["Networking"],
    related: ["vlan", "jumbo-frames", "spanning-tree-protocol"],
    content: `LACP (Link Aggregation Control Protocol) combines multiple physical network links between two devices into a single logical link, adding bandwidth and providing redundancy. Two 10Gbps links become one 20Gbps logical connection that survives a single cable failure.

When one uplink between two switches isn't enough — either for bandwidth or redundancy — LACP lets you bond multiple physical ports into a single logical port channel. Both sides negotiate the aggregation automatically using the LACP protocol; the result is a link that appears as a single higher-bandwidth connection.

Common uses: uplinks between access and distribution switches, server connections to a switch (often called NIC teaming or bonding on the server side), and storage connections where both throughput and availability matter.

![Diagram showing two 10Gbps physical links between Switch A and Switch B combining into a single 20Gbps logical link via LACP](/images/glossary/lacp-bonding-1.png)

![Diagram showing the LACP negotiation process — switches compare system priority to elect an Actor, which then determines the active links in the port channel](/images/glossary/lacp-port-channel.png)

Traffic distribution across member links is handled by a hashing algorithm based on source/destination MAC addresses, IP addresses, or port numbers. This means a single flow (one TCP connection) still travels on one link — you won't see a single download speed double. The aggregate bandwidth benefits concurrent flows from multiple sources, not a single stream.

Key requirements: all member ports must be the same speed and duplex. A 1Gbps and a 10Gbps port cannot be in the same LAG. The same is true on both ends — both switches must have identical port speeds for the bundled interfaces.

LACP is defined in IEEE 802.3ad (now 802.1AX). Cisco's older proprietary equivalent is PAgP. Most modern equipment supports LACP natively; prefer it over vendor-specific protocols for interoperability.`,
  },
  {
    slug: "lldp",
    term: "LLDP",
    aka: ["Link Layer Discovery Protocol"],
    shortDef: "Protocol where devices advertise their identity to neighbors — how switches track ports and VoIP phones learn their VLAN.",
    categories: ["Networking"],
    related: ["voice-vlan", "vlan", "qos"],
    content: `LLDP (Link Layer Discovery Protocol) is a vendor-neutral protocol that lets network devices advertise their identity and capabilities to directly connected neighbors. It's how a switch knows what's plugged into each port — and how a VoIP phone learns which VLAN to use.

LLDP operates at Layer 2, sending periodic advertisements out each port containing information about the device: its hostname, port identifier, management IP address, capabilities (switch, router, phone), and for VoIP, the voice VLAN number.

The most practical use: LLDP-MED (Media Endpoint Discovery) is an extension of LLDP specifically for VoIP deployment. A phone boots up, hears an LLDP-MED advertisement from the switch, and learns which VLAN to use for voice traffic — no manual configuration on the phone required. This is the standard mechanism for VoIP VLAN assignment in modern deployments.

LLDP is also used by network management tools to build topology maps — automatically discovering which device is connected to which port on which switch, creating a picture of the physical network.

Cisco gear historically used CDP (Cisco Discovery Protocol) for this purpose; LLDP is the standards-based equivalent. Most Cisco devices now support both. For environments with mixed vendors, enable LLDP globally across all switches.`,
  },
  {
    slug: "spanning-tree-protocol",
    term: "Spanning Tree Protocol",
    aka: ["STP", "RSTP", "Rapid Spanning Tree", "802.1D"],
    shortDef: "Prevents Layer 2 switching loops by blocking redundant paths — without it, a loop causes a broadcast storm that takes down the network.",
    categories: ["Networking"],
    related: ["lacp", "loopback-detection", "vlan"],
    content: `Spanning Tree Protocol (STP) prevents Layer 2 switching loops by automatically blocking redundant paths between switches. Without it, a loop in your switch infrastructure would cause a broadcast storm that brings down the network almost instantly.

Ethernet frames have no TTL like IP packets do — a frame caught in a loop will circulate forever, multiplying with each pass until it consumes all available bandwidth. STP prevents this by designating one path between any two switches as active and blocking others.

The protocol elects a root bridge (the switch that becomes the logical center of the spanning tree), then calculates the shortest path from every other switch to the root. Redundant paths are placed in a blocking state — they carry no traffic but are ready to activate if the active path fails. When a link goes down, STP recalculates and unblocks the redundant path.

**RSTP (802.1w)** — Rapid Spanning Tree Protocol — reduced failover time from 30-50 seconds (original STP) to under a second. Almost all modern deployments use RSTP or its VLAN-aware variant, MSTP.

The practical implications:

STP is why your "redundant" switch links aren't actually providing double the bandwidth — they're in blocking state, ready for failover, not active. LACP/LAG is how you actually aggregate bandwidth across multiple links while maintaining STP compatibility.

Misconfigured STP (wrong root bridge election, incorrect port configurations) can cause unexpected topology changes that briefly disrupt traffic. Understanding which switch should be the root bridge — typically your core/distribution switch — and configuring it explicitly with the lowest bridge priority is a basic hardening step.`,
  },
  {
    slug: "loopback-detection",
    term: "Loopback Detection",
    aka: ["Loop Guard", "Loop Protection"],
    shortDef: "A switch feature that detects and blocks Layer 2 loops on access ports — where STP isn't running or a user accidentally connected two ports.",
    categories: ["Networking"],
    related: ["spanning-tree-protocol", "vlan"],
    content: `Loopback detection is a switch feature that identifies and responds to Layer 2 loops — specifically on access ports where STP may not be running or where a user has accidentally connected two ports together.

STP handles loops between switches. Loopback detection handles a different problem: a user accidentally plugging both ends of a cable into ports on the same switch, or a cheap unmanaged switch connected downstream that creates a loop STP can't see.

When loopback detection fires, the switch can shut down the offending port, send an SNMP alert, or both. The loop is broken before it becomes a broadcast storm.

This matters most on access-layer ports — the ports that end users and devices plug into. Most access switches let you enable loopback detection on all access ports as a default policy, providing a safety net for the most common causes of unintentional loops.

It's a simple feature to enable and cheap insurance against a class of incidents that can bring down an entire network segment in seconds.`,
  },
  {
    slug: "jumbo-frames",
    term: "Jumbo Frames",
    shortDef: "Ethernet frames larger than the standard 1500-byte MTU — reduces per-packet overhead for high-throughput workloads like storage transfers.",
    categories: ["Networking"],
    related: ["lacp", "vlan"],
    content: `Jumbo frames are Ethernet frames larger than the standard 1500-byte MTU (Maximum Transmission Unit), typically set to 9000 bytes. They reduce per-packet overhead for high-throughput workloads like storage and large file transfers.

Standard Ethernet frames carry up to 1500 bytes of payload (the MTU). For storage traffic — iSCSI, NFS, SMB — this means every large transfer requires thousands of individually-processed frames, each with its own header and checksum overhead. Jumbo frames raise the MTU to 9000 bytes (sometimes 9216), reducing the number of frames needed and the associated processing overhead on both the sender and the network equipment.

The performance benefit is meaningful for bulk data movement: backup jobs, storage replication, large file server access. For general office traffic — web browsing, email, collaboration tools — the difference is negligible.

**The critical requirement:** jumbo frames must be enabled consistently across every device in the path. This means every switch, every NIC, every virtual switch on every hypervisor, every storage controller — all configured to the same MTU. If any device in the path uses the standard 1500-byte MTU and can't fragment (which is the case for most modern implementations), jumbo frames will cause fragmentation or dropped packets that are difficult to diagnose.

This end-to-end consistency requirement is the main reason jumbo frames should be planned at network design time, not enabled later. Retrofitting jumbo frames on a running infrastructure requires coordinated changes across every device simultaneously.

Most enterprise switches and server NICs support 9000-byte MTU. Confirm support before enabling, and enable it everywhere at once.`,
  },
  {
    slug: "multicast",
    term: "Multicast",
    shortDef: "Delivers traffic to multiple subscribed recipients using a single stream — between broadcast (everyone) and unicast (one recipient).",
    categories: ["Networking"],
    related: ["vlan", "qos", "vlan-tagging"],
    content: `Multicast is a network addressing method that delivers traffic to multiple specific recipients simultaneously using a single stream. Unlike broadcast (everyone gets it) or unicast (one recipient), multicast sends to a group of subscribed receivers.

Standard unicast sends a separate copy of traffic to each recipient. If 50 devices want the same video stream, that's 50 individual streams from the source. Multicast sends one stream; the network replicates it only at points where the path diverges toward different receivers.

![Diagram comparing unicast and multicast transmission paths through network switches — unicast duplicates traffic to every receiver, multicast replicates only where paths diverge](/images/glossary/multicast-vs-unicast.png)

The addresses used for multicast are in the 224.0.0.0 to 239.255.255.255 range in IPv4. Devices subscribe to a multicast group using IGMP (Internet Group Management Protocol), telling the nearest router/switch they want to receive traffic for that group.

Where multicast shows up in practice:

**AV over IP** — video distribution systems often use multicast to send the same video feed to multiple displays without multiplying WAN or backbone bandwidth.

**IP camera systems** — some VMS (Video Management System) platforms use multicast for live feeds to multiple viewing stations.

**OSPF and other routing protocols** — use multicast addresses to communicate between routers without flooding the entire network.

**IPTV and digital signage** — delivering the same content stream to many endpoints.

For multicast to work across VLANs and switches, IGMP snooping should be enabled on your switches — it prevents multicast traffic from being flooded to all ports and instead delivers it only to ports with subscribed receivers.`,
  },
  {
    slug: "8021x",
    term: "802.1X",
    aka: ["IEEE 802.1X", "Port-Based Network Access Control", "PNAC", "Network Access Control", "NAC"],
    shortDef: "Requires devices to authenticate before network access is granted — the port stays locked until authentication succeeds.",
    categories: ["Networking", "Security", "Identity"],
    related: ["radius", "vlan", "mfa"],
    content: `802.1X is a network access control standard that requires devices to authenticate before they can use a switch port or connect to a Wi-Fi network. Until a device authenticates successfully, the port is locked — no IP address, no traffic.

802.1X implements the principle of "identity before access" at the network layer. Plug in an unauthenticated device and nothing works — the switch port stays blocked regardless of what IP address the device has. Only after a successful authentication handshake does the switch grant network access.

The architecture involves three components:

**Supplicant** — the client device requesting access (a laptop, phone, or other endpoint with 802.1X support).

**Authenticator** — the switch or Wi-Fi access point enforcing access control. It doesn't authenticate the device itself; it forwards authentication requests to the RADIUS server.

**Authentication server** — typically a RADIUS server, which validates credentials and tells the switch whether to allow or deny access.

802.1X supports multiple authentication methods (called EAP methods): username/password, certificates, smart cards. For unattended devices like printers or cameras that can't prompt for credentials, certificate-based authentication is typical.

A powerful extension: dynamic VLAN assignment. The RADIUS server can tell the switch not just "allow this device" but "put this device in VLAN 30." This enables network segmentation based on identity — domain laptops go to the corporate VLAN, guest devices to the guest VLAN, and IoT devices to the IoT VLAN, all automatically at connection time.

802.1X is the right answer for any environment where you can't trust what's physically plugging into your network — which is most environments.`,
  },
  {
    slug: "radius",
    term: "RADIUS",
    aka: ["Remote Authentication Dial-In User Service"],
    shortDef: "Centrally validates credentials for network access — VPNs, Wi-Fi, and 802.1X port authentication. The backend that decides who gets in.",
    categories: ["Networking", "Security", "Identity"],
    related: ["8021x", "sso"],
    content: `RADIUS is an authentication and authorization protocol that centrally validates credentials for network access — VPN connections, Wi-Fi authentication, switch port access via 802.1X. It's the backend that decides who gets in.

When a device tries to connect to a network via 802.1X, or a user authenticates to a VPN or Wi-Fi, something has to validate their credentials and authorize access. RADIUS is that something.

The protocol operates on a client-server model: network devices (switches, VPN gateways, Wi-Fi controllers) act as RADIUS clients, forwarding authentication requests to a central RADIUS server. The server validates credentials against a user directory (Active Directory, LDAP, JumpCloud), then returns an Accept or Reject. For 802.1X, it can also return VLAN assignment, bandwidth policy, and other attributes.

RADIUS communicates over UDP — port 1812 for authentication, 1813 for accounting. The shared secret between the RADIUS client and server protects the exchange.

Authentication methods supported by RADIUS include PAP (plaintext — avoid this), CHAP, and various EAP methods (EAP-TLS, PEAP, EAP-TTLS). For Wi-Fi and 802.1X deployments, PEAP/MSCHAPv2 or EAP-TLS are standard.

RADIUS accounting (port 1813) logs connection events — who connected when, from where, for how long. This is valuable for security auditing and incident response.

In small to mid-market environments, RADIUS is often provided by your directory service: JumpCloud has a built-in RADIUS server, Microsoft NPS (Network Policy Server) provides RADIUS for Active Directory environments. Dedicated RADIUS appliances are also available for larger or more complex deployments.`,
  },
  {
    slug: "ipsec",
    term: "IPsec",
    aka: ["Internet Protocol Security"],
    shortDef: "Encrypts and authenticates IP traffic at the network layer — the foundation of site-to-site VPN tunnels.",
    categories: ["Networking", "Security"],
    related: ["ssl-vpn"],
    content: `IPsec is a suite of protocols that encrypts and authenticates IP traffic at the network layer. It's the foundation of most site-to-site VPN tunnels, providing confidentiality, integrity, and authentication for traffic between networks.

IPsec operates at Layer 3, encrypting the IP payload (and optionally the header) before it's sent across an untrusted network. Unlike TLS/SSL which secures individual application connections, IPsec secures all traffic between two endpoints at the IP level — regardless of application.

![Flowchart showing the IPsec process between sender and receiver — encryption algorithm, HMAC authentication, symmetric key exchange via Diffie-Hellman, and ICV integrity verification](/images/glossary/ipsec-process.jpg)

IPsec operates in two modes:

**Tunnel mode** — the entire original IP packet is encrypted and encapsulated in a new IP packet. This is how site-to-site VPNs work: traffic between two networks is wrapped in an encrypted tunnel, and the tunnel endpoints are the VPN gateways.

**Transport mode** — only the payload is encrypted; the original IP header remains. Used for host-to-host encryption, less common in practice.

IPsec uses two core protocols:

**AH (Authentication Header)** — provides integrity and authentication but no encryption. Rarely used alone.

**ESP (Encapsulating Security Payload)** — provides encryption, integrity, and authentication. This is what you actually use.

Key negotiation is handled by **IKE (Internet Key Exchange)** — IKEv1 or IKEv2. IKEv2 is faster, more resilient to network changes (important for mobile VPN clients), and more efficient. Prefer it where supported.

IPsec is the standard for site-to-site VPN between firewalls — SonicWall to SonicWall, Cisco to Fortinet, or any combination. For remote access VPN (individual users), SSL VPN has largely displaced IPsec due to its simpler client deployment and firewall-friendliness.`,
  },
  {
    slug: "ssl-vpn",
    term: "SSL VPN",
    shortDef: "Remote network access over HTTPS using TLS — works through any firewall since it runs on port 443.",
    categories: ["Networking", "Security"],
    related: ["ipsec", "radius"],
    content: `An SSL VPN provides remote access to a network over HTTPS, using TLS encryption. Unlike traditional IPsec VPNs, SSL VPNs work through standard web traffic ports and don't require special client-side network configuration.

The defining advantage of SSL VPN over IPsec for remote access is accessibility. IPsec requires UDP ports that are often blocked by corporate firewalls, hotels, and restrictive networks. SSL VPN runs over TCP port 443 — the same port as HTTPS — which is almost never blocked. A remote user connecting from a hotel or airport can reliably establish an SSL VPN connection even when IPsec would fail.

![Diagram showing a remote user connecting via an SSL VPN tunnel over the internet to an SSL VPN server, which provides access to internal web servers and mail servers](/images/glossary/ssl-vpn-diagram.jpg)

SSL VPN comes in two forms:

**Clientless** — the VPN is accessed through a web browser with no installed software. The browser authenticates the user and provides access to specific internal web applications. Useful for contractors or managed devices where you can't install software.

**Full tunnel (client-based)** — a lightweight client is installed on the device. Once connected, all network traffic routes through the encrypted tunnel. This is the typical mode for remote employees who need full network access. Most modern remote access VPN clients use SSL/TLS under the hood — Cisco AnyConnect, SonicWall NetExtender, and Palo Alto GlobalProtect all operate this way.

RADIUS is typically used for authentication, enabling MFA integration: the user authenticates with username, password, and a TOTP code, with RADIUS validating all three.

IPsec remains the standard for site-to-site VPN (gateway to gateway). SSL VPN is the standard for remote user access.`,
  },
  {
    slug: "sd-wan",
    term: "SD-WAN",
    aka: ["Software-Defined Wide Area Network"],
    shortDef: "Intelligently routes traffic across multiple internet circuits instead of relying on one expensive leased line.",
    categories: ["Networking", "Cloud & Infrastructure"],
    related: ["wan"],
    content: `SD-WAN (Software-Defined WAN) is an approach to managing wide area network connections that uses software to intelligently route traffic across multiple internet circuits — fiber, cable, LTE — rather than relying on a single expensive leased line.

Traditional multi-site connectivity meant MPLS circuits — private, reliable, carrier-managed, and expensive. SD-WAN was born from the observation that multiple commodity internet links, intelligently managed, can provide equivalent or better performance at a fraction of the cost.

An SD-WAN appliance at each site monitors the performance of all available WAN links in real time — measuring latency, jitter, and packet loss. It routes traffic dynamically based on these metrics: voice calls go over the lowest-latency path, backup traffic goes over whatever's cheapest, and if a link degrades below a threshold, traffic automatically fails over to the next best option.

![Architecture diagram showing SD-WAN management, control, and network layers — branch offices connecting via MPLS and internet circuits to headquarters, public cloud, and legacy networks](/images/glossary/sd-wan-architecture.jpg)

Key capabilities most SD-WAN platforms offer:

**Application-aware routing** — recognize specific application traffic (Zoom, Microsoft 365, Salesforce) and route it to the optimal path regardless of IP address.

**Link bonding** — combine multiple circuits for higher aggregate bandwidth.

**Zero-touch provisioning** — new sites can be brought online by shipping a pre-configured appliance, with the device calling home for its configuration on first boot.

**Centralized management** — all sites managed from a single dashboard with visibility into performance across the entire WAN.

For organizations with multiple offices that are overpaying for MPLS, or that have reliability problems with a single internet circuit, SD-WAN is often the right answer. For single-site organizations, standard dual-WAN failover on a firewall may be sufficient without the added complexity.`,
  },

  // ── Security ───────────────────────────────────────────────────────────────
  {
    slug: "vpn",
    term: "VPN",
    aka: ["Virtual Private Network"],
    shortDef: "Creates an encrypted tunnel between two endpoints over the public internet — used for remote access to corporate resources and connecting offices without leased lines.",
    categories: ["Networking", "Security"],
    related: ["ssl-vpn", "ipsec", "sd-wan", "radius"],
    content: `A VPN lets you treat an untrusted network — the public internet — as if it were a private connection. Traffic between the two endpoints is encrypted in transit, so anyone intercepting it sees only ciphertext.

## Two distinct use cases

**Remote access VPN** connects individual users to the corporate network. An employee at home or a hotel opens a VPN client, authenticates, and their device gets a corporate IP address with access to internal resources as if they were physically in the office. This is the most common VPN use case for SMB environments.

**Site-to-site VPN** connects two networks — typically two office locations — through a persistent encrypted tunnel between the firewall/router at each site. Traffic between the sites flows through the tunnel automatically, with no client software on end devices.

![Diagram showing a VPN encrypted tunnel connecting a remote user and a branch office to headquarters over the public internet](/images/glossary/vpn-tunnel.png)

## IPsec vs SSL

The two dominant tunneling protocols:

**IPsec** is the standard for site-to-site VPNs — persistent tunnels between gateways. Mature, widely supported, efficient for point-to-point network interconnection.

**SSL/TLS (SSL VPN)** is the standard for remote access. Runs over port 443, which is almost never blocked — making it more reliable for users connecting from hotels, airports, or restrictive networks. Most modern remote-access VPN clients (Cisco AnyConnect, SonicWall NetExtender, Palo Alto GlobalProtect) use SSL/TLS under the hood.

## What a VPN is not

A VPN doesn't replace a firewall. It provides an encrypted transport layer, but access control — what authenticated users can reach once connected — still requires proper firewall rules and segmentation. Don't mistake "on VPN" for "trusted."`,
  },
  {
    slug: "tls",
    term: "TLS",
    aka: ["Transport Layer Security", "SSL", "SSL/TLS"],
    shortDef: "The cryptographic protocol that encrypts data in transit between two parties. It's the \"S\" in HTTPS — and the protocol behind VPNs, secure email, and most encrypted network traffic.",
    categories: ["Security", "Networking"],
    related: ["https", "certificate", "asymmetric-cryptography", "ssl-vpn"],
    content: `TLS is the foundation of secure communication on the internet. When you see a padlock in your browser's address bar, TLS is what's protecting the connection — encrypting the data so that anyone intercepting the traffic can't read it, and verifying that you're actually talking to the server you think you are.

The protocol works in two phases. First, a handshake: the server presents its certificate, the client verifies it, and they negotiate the encryption parameters and exchange keys. Then the session: all subsequent data is encrypted using those keys.

TLS uses asymmetric cryptography (public/private key pairs) for the handshake and key exchange, then switches to symmetric encryption for the session data — symmetric is far faster for bulk data.

## TLS versions matter

TLS 1.0 and 1.1 are deprecated and considered insecure. TLS 1.2 is the current baseline. TLS 1.3 (released 2018) simplified the handshake, removed weak cipher suites, and reduced connection latency — prefer it where supported.

Enabling only TLS 1.2+ and disabling older protocols is a standard hardening step on any public-facing server. Most compliance frameworks (PCI-DSS, HIPAA) require it.

## SSL vs TLS

SSL (Secure Sockets Layer) was the predecessor to TLS, deprecated in the late 1990s. The terms are used interchangeably in practice — "SSL certificate" is a common shorthand even though the protocol has been TLS for decades. When someone says "SSL," they mean TLS.`,
  },
  {
    slug: "https",
    term: "HTTPS",
    aka: ["Hypertext Transfer Protocol Secure", "HTTP over TLS"],
    shortDef: "HTTP secured with TLS encryption. Protects web traffic from interception and verifies the server's identity via a certificate. Every public-facing site should be HTTPS-only.",
    categories: ["Security", "Networking"],
    related: ["tls", "certificate", "dns"],
    content: `HTTP transmits data in plaintext — anyone on the same network can read it. HTTPS wraps HTTP in a TLS session, encrypting all traffic between client and server and authenticating the server with a certificate.

Every public-facing website should be HTTPS-only in 2025. Browsers actively warn users about HTTP sites, search engines penalize them in rankings, and most browsers block mixed content (HTTP resources loaded on HTTPS pages). There's no legitimate reason to run a public site over plain HTTP.

HTTPS operates on port 443. HTTP operates on port 80. Redirecting all HTTP traffic to HTTPS is standard practice — your web server or CDN handles this automatically in most configurations.

For internal applications and corporate intranets, the calculus is more nuanced. HTTPS is still recommended — it prevents credential interception on the local network — but internal certificate management adds operational overhead that some organizations defer.

HSTS (HTTP Strict Transport Security) is a header that tells browsers to only connect to a site over HTTPS — even if a user types http:// directly. Combined with preloading, it prevents downgrade attacks that try to force the connection to unencrypted HTTP.`,
  },
  {
    slug: "ssh",
    term: "SSH",
    aka: ["Secure Shell"],
    shortDef: "The standard protocol for encrypted remote command-line access to servers and network devices. Replaced Telnet and rlogin, which transmitted credentials in plaintext.",
    categories: ["Security", "Networking"],
    related: ["tls", "vpn", "certificate"],
    content: `SSH creates an encrypted channel between your terminal and a remote device, letting you run commands, transfer files, and manage configuration as if you were physically at the console — but over any network, securely.

## Authentication methods

**Password authentication** — a username and password, transmitted over the encrypted channel. Fine for convenience, weak for security — susceptible to brute-force attacks.

**Key-based authentication** — the more secure and preferred method. You generate a key pair: the private key stays on your machine, the public key is placed on the server. Authentication proves possession of the private key without ever transmitting it. Key-based auth is immune to password brute-forcing and is the right approach for any server exposed to the internet.

## Key hardening steps

- **Disable root login** over SSH. Log in as a regular user and use sudo if needed.
- **Disable password authentication** once key-based auth is working.
- **Change the default port** from 22 if desired — reduces automated scan noise, though it's not a real security control.
- **Restrict access by IP** where possible — whitelist the IPs that should have SSH access.

SSH tunneling is also worth knowing: SSH can forward arbitrary TCP ports through an encrypted tunnel, providing a lightweight VPN-like capability for specific services without a full VPN setup.`,
  },
  {
    slug: "zero-trust",
    term: "Zero Trust",
    aka: ["Zero Trust Architecture", "ZTA", "Never Trust Always Verify"],
    shortDef: "A security model that assumes no user, device, or connection should be trusted by default — every access request is verified based on identity, device health, and context.",
    categories: ["Security"],
    related: ["mfa", "device-trust", "vpn", "8021x"],
    content: `Traditional security drew a hard perimeter: inside the network, you were trusted; outside, you weren't. Zero Trust discards this model. With employees working remotely, applications in the cloud, and attackers regularly breaching perimeters, "inside the network" no longer means safe.

Zero Trust replaces perimeter trust with continuous verification: every request — regardless of where it comes from — is authenticated, the device is checked for compliance, and access is granted only to the specific resource requested, not the entire network.

In practice this means: MFA on every authentication, device health checks before granting access, least-privilege access policies, and network segmentation that limits lateral movement if something is compromised.

## The five pillars

CISA (the US Cybersecurity and Infrastructure Security Agency) defines Zero Trust around five areas:

- **Identity** — strong authentication, least-privilege access, ongoing verification
- **Devices** — only managed, compliant devices can access sensitive resources
- **Networks** — segmentation and access controls aligned to specific applications and workloads
- **Applications** — access controls built into the application layer, not just the network
- **Data** — classifying and protecting data based on sensitivity, not just location

![Diagram showing the five pillars of Zero Trust architecture: Identity, Devices, Networks, Applications, and Data](/images/glossary/zero-trust-pillars.jpg)

## Zero Trust is a journey, not a product

No single product makes you Zero Trust. It's a framework applied across your identity, device management, network, and application layers over time. JumpCloud, Entra ID, and Okta handle the identity pillar. MDM and device trust handle the devices pillar. Firewalls with application-aware policies and 802.1X handle the network pillar.

For most SMB organizations, a practical starting point is: enforce MFA everywhere, implement device trust for sensitive applications, and segment your network so a compromised endpoint can't reach everything.`,
  },
  {
    slug: "ngfw",
    term: "NGFW",
    aka: ["Next-Generation Firewall"],
    shortDef: "Goes beyond port and protocol filtering to inspect application-layer traffic, enforce user-based policies, detect intrusions, and block threats in real time.",
    categories: ["Security", "Networking"],
    related: ["vpn", "acl", "zero-trust", "sd-wan"],
    content: `A traditional firewall decides what to allow or block based on source IP, destination IP, port, and protocol. An NGFW understands what the traffic actually is and does deeper inspection and policy enforcement.

## What NGFWs add beyond basic firewall

**Application identification** — recognizes specific applications regardless of port. Zoom might use port 443, as does HTTPS traffic — an NGFW can tell the difference and apply separate policies.

**Intrusion Prevention System (IPS)** — inspects traffic for known attack signatures and anomalous patterns, blocking threats at the network edge before they reach endpoints.

**SSL/TLS inspection** — decrypts, inspects, and re-encrypts HTTPS traffic to detect threats hiding inside encrypted sessions. Requires certificate trust configuration on client devices.

**User-based policy** — ties firewall rules to authenticated users (integrated with Active Directory, Entra ID, or JumpCloud) rather than just IP addresses. "Marketing team can access the internet but not the server VLAN" enforced by identity, not by IP.

**URL filtering and content categories** — blocks access to categories of websites (malware, phishing, P2P) across all users.

**Threat intelligence** — cloud-connected feeds that update blocking rules as new threats emerge.

NGFWs are more resource-intensive and expensive than traditional firewalls, but for any organization with sensitive data, remote users, or cloud services, the added inspection capabilities are essential. Basic port/protocol firewalls are insufficient against modern threats.`,
  },
  {
    slug: "phishing",
    term: "Phishing",
    shortDef: "A social engineering attack that tricks people into revealing credentials or downloading malware — typically via email. The most common initial access vector in enterprise breaches.",
    categories: ["Security"],
    related: ["mfa", "zero-trust", "ransomware", "botnet"],
    content: `Phishing works by impersonation. The attacker crafts a message that appears to come from a trusted source — your bank, Microsoft, a colleague, your CEO — and prompts the target to take an action that compromises security: click a link, enter credentials, open an attachment, authorize a wire transfer.

## Common variants

**Spear phishing** targets specific individuals with personalized messages. Rather than a generic "your account has been locked," a spear phish might reference your actual employer, a recent project, or a colleague's name. Far more convincing and more dangerous.

**Whaling** targets executives specifically. The CFO receives an urgent message appearing to be from the CEO asking for an emergency wire transfer. Common enough to have its own name.

**Smishing** — phishing via SMS. "Your package couldn't be delivered, click here to reschedule."

**Vishing** — voice phishing. A caller claims to be IT support and asks for your password or MFA code.

## Why phishing is still so effective

Even security-aware people fall for good phishes. The combination of urgency, authority, and a plausible scenario bypasses rational evaluation. One successful phish on a privileged account can give an attacker everything.

The defense has three layers: technical controls (email filtering, MFA so a stolen password alone isn't enough, DNS filtering to block malicious domains), process controls (verify unusual requests out of band, never enter credentials via a link in an email), and training (regular phishing simulations that build habit, not just annual checkbox compliance).

Phishing-resistant MFA — passkeys and FIDO2 hardware keys — is the strongest technical defense, because a phishing page can't capture and replay a FIDO2 authentication.`,
  },
  {
    slug: "ransomware",
    term: "Ransomware",
    shortDef: "Malware that encrypts a victim's files and demands payment for the decryption key. Modern attacks also exfiltrate data first — threatening to publish it if the ransom isn't paid.",
    categories: ["Security"],
    related: ["phishing", "edr", "dlp", "zero-trust", "botnet"],
    content: `Ransomware typically arrives via phishing, exploitation of unpatched vulnerabilities, or compromised credentials — often through remote access tools like RDP or VPNs. Once inside, it moves laterally across the network, escalating privileges and spreading to maximize the damage before triggering the encryption.

The encryption itself is usually fast. By the time an alert fires, the damage may already be done. Recovery depends entirely on whether backups exist, are current, and weren't also encrypted (a problem if backups were network-accessible).

## The modern ransomware model

Today's ransomware is almost always double-extortion: attackers exfiltrate sensitive data first, then encrypt. The threat isn't just losing access to your files — it's your customer data, financial records, or confidential communications being published publicly or sold.

Most ransomware operations are now Ransomware-as-a-Service (RaaS): criminal groups develop and lease the tools to affiliates who run the actual attacks, splitting the ransom proceeds. This has lowered the technical barrier to entry significantly.

## Defense priorities

**Immutable, offline backups** — the most critical control. Backups that the ransomware can't reach or modify. 3-2-1: three copies, two media types, one offsite.

**Endpoint detection and response (EDR)** — behavioral detection that identifies ransomware activity (mass file encryption) before it completes.

**Least privilege and segmentation** — limits lateral movement. A compromised endpoint that can only reach its local VLAN causes far less damage than one with access to everything.

**Patching** — many ransomware attacks exploit known vulnerabilities with available patches. Timely patching closes the most common entry points.`,
  },
  {
    slug: "ddos-attack",
    term: "DDoS Attack",
    aka: ["Distributed Denial of Service", "DDoS"],
    shortDef: "Floods a target with traffic from thousands of compromised machines simultaneously, overwhelming it until it becomes unavailable to legitimate users.",
    categories: ["Security"],
    related: ["botnet", "ngfw"],
    content: `A denial of service (DoS) attack sends so much traffic to a target that it can't handle legitimate requests. A distributed version (DDoS) amplifies this enormously by coordinating attacks from thousands or millions of compromised machines — a botnet — making it nearly impossible to simply block the attacking IP.

## Attack types

**Volumetric attacks** — flood the target with raw bandwidth. Measured in Gbps. A 100Gbps DDoS against a server with a 1Gbps uplink wins trivially. Mitigation requires upstream scrubbing (traffic is routed through a service that filters the attack traffic before it reaches your network).

**Protocol attacks** — exploit weaknesses in network protocol handling. SYN floods exhaust a server's connection table by sending thousands of incomplete TCP handshake requests. Mitigated by firewalls and modern TCP stacks.

**Application-layer attacks** — target the web application itself. An HTTP flood sends millions of valid-looking HTTP requests, exhausting server processing capacity rather than bandwidth. Harder to distinguish from legitimate traffic; mitigated by WAFs and rate limiting.

## Defense

For organizations running public-facing infrastructure, DDoS mitigation means CDN or DDoS scrubbing services (Cloudflare, AWS Shield, Akamai). Your own hardware can't absorb a large volumetric attack — the defense happens upstream.

For organizations running only cloud services without direct infrastructure exposure, your cloud provider's infrastructure provides substantial inherent protection.`,
  },
  {
    slug: "botnet",
    term: "Botnet",
    shortDef: "A network of malware-infected computers controlled remotely by an attacker — used to launch DDoS attacks, send spam, or spread malware without the owners' knowledge.",
    categories: ["Security"],
    related: ["ddos-attack", "ransomware", "phishing"],
    content: `Botnet infections spread through phishing emails, malicious downloads, exploitation of unpatched vulnerabilities, and drive-by downloads from compromised websites. Once a device is infected, it phones home to a command-and-control (C2) server that issues instructions — run a DDoS attack, send spam, scan for other vulnerable hosts.

The infected device typically shows no obvious symptoms. The malware is designed to be quiet — a loud bot gets detected and remediated. The value to attackers is the aggregate scale: a botnet of 100,000 infected machines provides enormous DDoS capacity, spam-sending volume, or credential-stuffing capability.

From a defender's standpoint, a device on your network joining a botnet is a significant incident — it means malware is running with enough access to establish outbound C2 connections. EDR solutions detect botnet-related behavior (unusual outbound connections, process injection, persistence mechanisms). DNS filtering catches C2 communications by blocking known malicious domains.`,
  },
  {
    slug: "mitm",
    term: "Man-in-the-Middle Attack",
    aka: ["MITM", "On-Path Attack", "Adversary-in-the-Middle"],
    shortDef: "Intercepts communication between two parties who believe they're talking directly. TLS encryption and certificate validation are the primary defenses.",
    categories: ["Security"],
    related: ["tls", "https", "ipsec", "phishing"],
    content: `In a MITM attack, the attacker positions themselves between two communicating parties — intercepting, reading, and potentially modifying traffic before forwarding it. Neither party realizes the communication is being intercepted.

## Common attack scenarios

**ARP spoofing** — on a local network, the attacker sends falsified ARP packets associating their MAC address with a legitimate IP address (typically the default gateway). Traffic intended for the gateway flows through the attacker's machine instead.

**DNS spoofing** — the attacker corrupts DNS responses to direct traffic to a malicious server instead of the intended destination. Combined with a fake certificate, this can intercept HTTPS traffic.

**Rogue Wi-Fi access points** — the attacker creates a fake Wi-Fi network with a name similar to a legitimate one. Devices that connect have all their traffic routed through the attacker's infrastructure.

**SSL stripping** — the attacker intercepts an HTTPS request and proxies it as HTTP between themselves and the server, while maintaining HTTPS between themselves and the client. HSTS and certificate pinning prevent this.

## Defense

TLS with valid certificates is the primary defense — it ensures you're actually talking to the server you intend to, and encrypts the traffic even if it's intercepted. HSTS prevents SSL stripping. Certificate pinning in applications prevents fraudulent certificates. For network-level attacks, 802.1X prevents rogue devices from joining your network, and VPN encryption protects traffic even on untrusted networks.`,
  },
  {
    slug: "cve",
    term: "CVE",
    aka: ["Common Vulnerabilities and Exposures"],
    shortDef: "The standardized system for identifying security vulnerabilities. A CVE ID like CVE-2024-1234 uniquely identifies a specific flaw across vendors, tools, and patch notes.",
    categories: ["Security"],
    related: ["zero-day-attack", "vulnerability-scanning", "edr", "ngfw"],
    content: `When a security vulnerability is discovered and disclosed, it gets a CVE identifier: a unique number in the format CVE-[year]-[number]. This standardized ID is how vendors, security tools, news coverage, and patch notes all refer to the same vulnerability — allowing organizations to determine whether they're affected and prioritize remediation.

Each CVE entry includes a description of the vulnerability, affected software versions, and a CVSS (Common Vulnerability Scoring System) severity score from 0 to 10. Critical-rated CVEs (CVSS 9.0+) typically represent remote code execution or similar high-impact vulnerabilities.

The CVE system is maintained by MITRE Corporation and funded by CISA. The NVD (National Vulnerability Database) maintained by NIST provides enriched data including CVSS scores and affected vendor data.

For IT operations, CVE awareness matters for:

**Patching prioritization** — not all patches are equal. A patch addressing a CVSS 9.8 CVE being actively exploited is more urgent than one addressing a 4.0 CVE requiring local access.

**Vulnerability scanning** — scanners like Tenable Nessus and Qualys map discovered vulnerabilities to CVE IDs, giving you a structured list of what needs fixing.

**Vendor advisories** — when vendors release security patches, they reference CVE IDs so you can assess impact against your specific configuration.`,
  },
  {
    slug: "zero-day-attack",
    term: "Zero-Day Attack",
    aka: ["Zero-Day", "0-day"],
    shortDef: "Exploits a vulnerability unknown to the vendor — or known but not yet patched. Since no fix exists, traditional patch-based defenses are ineffective.",
    categories: ["Security"],
    related: ["cve", "vulnerability-scanning", "edr", "ngfw"],
    content: `Most cyberattacks exploit known vulnerabilities — ones with published CVEs and available patches. Zero-days are different: they exploit flaws the vendor doesn't yet know about, giving defenders no opportunity to patch before they're weaponized.

Zero-days are valuable commodities in the offensive security ecosystem. A remote code execution zero-day in a widely deployed product can sell for millions of dollars in both government and criminal markets. As a result, the most dangerous zero-days are typically used in targeted, sophisticated attacks — nation-state espionage, targeted ransomware on high-value organizations — rather than mass exploitation.

When a zero-day is publicly disclosed (either by the discoverer or after evidence of exploitation), it becomes a "one-day" — now a known vulnerability with a race between vendors releasing patches and attackers exploiting organizations that haven't patched yet.

## Defense when patching isn't an option

Since you can't patch what doesn't have a patch, zero-day defense relies on layered controls:

**Behavioral detection (EDR)** — catches malicious behavior even from unknown exploits by recognizing anomalous process activity.

**Network segmentation** — limits what an attacker can reach even if they get initial access.

**Least privilege** — reduces the blast radius of any exploit.

**NGFW with IPS** — can block exploit patterns even without signature-specific knowledge, through protocol anomaly detection.`,
  },
  {
    slug: "edr",
    term: "EDR",
    aka: ["Endpoint Detection and Response", "MDR"],
    shortDef: "Monitors endpoints for malicious behavior, provides forensic visibility into what happened on a device, and enables remote response. It replaced traditional antivirus.",
    categories: ["Security"],
    related: ["siem", "ngfw", "ransomware", "zero-trust"],
    content: `Traditional antivirus works by signature matching — comparing files against a database of known malware. EDR goes further by monitoring behavior: what processes are running, what network connections are being made, what files are being modified, and whether any of that looks like an attack in progress.

Where AV asks "is this file known bad?", EDR asks "is this behavior consistent with an attack?" A process encrypting thousands of files in rapid succession looks like ransomware even if the malware binary has never been seen before. EDR catches this; AV doesn't.

## What EDR provides

**Real-time detection** — alerts when behavior matches attack patterns, including living-off-the-land techniques that use legitimate system tools for malicious purposes.

**Investigation capability** — a timeline of what happened on an endpoint: every process launched, file touched, network connection made. Essential for understanding the scope of a compromise.

**Response actions** — isolate a compromised endpoint from the network, kill processes, quarantine files, roll back changes — all remotely, without touching the device.

**Threat hunting** — proactively search for indicators of compromise across all endpoints.

Common EDR platforms: CrowdStrike Falcon, SentinelOne, Microsoft Defender for Endpoint, Carbon Black. MDR (Managed Detection and Response) adds a human operations team that monitors alerts and responds on your behalf — the right answer for organizations that don't have dedicated security staff.`,
  },
  {
    slug: "dlp",
    term: "DLP",
    aka: ["Data Loss Prevention", "Data Leakage Prevention"],
    shortDef: "Tools and policies that prevent sensitive data from leaving your organization through unauthorized channels like email, USB drives, or cloud uploads.",
    categories: ["Security"],
    related: ["edr", "ngfw", "zero-trust"],
    content: `DLP operates on a simple principle: identify what data is sensitive, then monitor and control where it goes. In practice this is technically difficult — data flows through dozens of channels, and DLP systems need to inspect that flow without breaking legitimate workflows.

## DLP approaches

**Network DLP** — inspects traffic leaving the network. Can detect credit card numbers, SSNs, or specific document patterns in email attachments or web uploads. Usually deployed at the proxy or NGFW.

**Endpoint DLP** — agent on the device monitors file operations. Can block copying sensitive files to USB drives, personal cloud storage (Dropbox, personal Google Drive), or unapproved applications.

**Cloud DLP** — monitors data in cloud storage and SaaS applications. Google Workspace and Microsoft 365 both include native DLP capabilities.

## Where DLP works and where it doesn't

DLP works well for clearly-structured sensitive data: credit card numbers (Luhn algorithm), SSNs, health record patterns. It works less well for unstructured sensitive content — a confidential business strategy document isn't structurally different from a publicly shareable one.

DLP is also a detective and deterrent control, not a perfect prevention control. A determined insider can photograph their screen, dictate the contents, or use techniques that bypass monitoring. The value is catching accidental leakage and deterring casual exfiltration, not stopping a sophisticated insider threat.`,
  },
  {
    slug: "vulnerability-scanning",
    term: "Vulnerability Scanning",
    shortDef: "Automatically probes systems for known security weaknesses — unpatched software, misconfigurations, default credentials — and reports them prioritized for remediation.",
    categories: ["Security"],
    related: ["cve", "edr", "ngfw", "zero-day-attack"],
    content: `A vulnerability scanner connects to your network (or runs as an agent on devices), probes each system it discovers, and compares findings against a database of known vulnerabilities (CVEs) and common misconfigurations. The output is a prioritized list of what needs to be fixed.

## Internal vs external scanning

**Internal scanning** — from inside the network, authenticated. Sees everything: unpatched OS and applications, missing security configurations, weak credentials, open internal services. This is the most comprehensive view of your attack surface.

**External scanning** — from outside the network, unauthenticated. Sees exactly what an attacker on the internet would see: open ports, exposed services, certificates, web application vulnerabilities. Essential for any organization with internet-facing infrastructure.

## Scanning frequency

Vulnerabilities are disclosed continuously. A quarterly scan tells you your posture once a quarter. Continuous scanning (or at minimum monthly) gives you a much more current picture. Most compliance frameworks require regular scanning — PCI-DSS mandates quarterly external scans and scanning after significant infrastructure changes.

Common tools: Tenable Nessus/Tenable.io, Qualys, Rapid7 InsightVM. Most have agent-based options for continuous monitoring.

Scanning finds what exists. Fixing it is a separate — and often harder — process. A vulnerability management program that includes prioritization, remediation tracking, and exception handling is the difference between scanning as a checkbox and scanning as an actual security control.`,
  },
  {
    slug: "wpa3",
    term: "WPA3",
    aka: ["Wi-Fi Protected Access 3", "WPA3-Personal", "WPA3-Enterprise"],
    shortDef: "The current Wi-Fi security standard, replacing WPA2. Closes key WPA2 vulnerabilities including offline dictionary attacks against captured handshakes, and adds forward secrecy.",
    categories: ["WiFi", "Security"],
    related: ["8021x", "radius"],
    content: `WPA2 (introduced 2004) has well-known vulnerabilities: KRACK (Key Reinstallation Attack) allows attackers in range to decrypt traffic, and offline dictionary attacks against captured handshakes can crack weak passwords. WPA3 addresses both.

## WPA3-Personal

Uses SAE (Simultaneous Authentication of Equals), replacing WPA2's PSK (Pre-Shared Key) handshake. SAE provides forward secrecy: each session uses a unique key, so recording encrypted traffic today and learning the password tomorrow doesn't allow decryption of past sessions. It also resists offline dictionary attacks — attempts to crack the password must happen in real time, against a live network.

## WPA3-Enterprise

The enterprise mode (used with 802.1X authentication) adds an optional 192-bit security mode for high-security environments. This isn't relevant for most organizations — standard WPA3-Enterprise with 802.1X and RADIUS is already strong.

## Transition and compatibility

WPA3 requires hardware support. Devices manufactured before 2019 generally lack it. Most current enterprise access points and client devices support WPA3, but mixed environments are common.

Transitional mode (WPA2/WPA3 mixed) allows both WPA2 and WPA3 clients to connect to the same network — WPA3-capable devices negotiate WPA3 automatically. This is the practical approach during the transition period.

If your network supports WPA3, enable it. The security improvements are meaningful and the transition is transparent to end users.`,
  },
  {
    slug: "tpm",
    term: "TPM",
    aka: ["Trusted Platform Module"],
    shortDef: "A hardware security chip that stores cryptographic keys, verifies boot integrity, and enables BitLocker encryption and device attestation. Required for Windows 11.",
    categories: ["Security", "Hardware"],
    related: ["zero-trust", "certificate", "device-trust"],
    content: `A TPM is a dedicated microcontroller that performs cryptographic operations in hardware — isolated from the main CPU and OS. Because the keys it stores never leave the chip, they can't be extracted by malware running on the system, even with administrator access.

## What TPMs enable

**Full-disk encryption** — BitLocker on Windows uses the TPM to seal the encryption key to the specific hardware configuration. If the drive is removed and put in another machine, it won't unlock without the recovery key. This is why BitLocker on TPM-backed devices is meaningfully more secure than software-only encryption.

**Secure boot** — the TPM participates in verifying that the bootloader and OS haven't been tampered with, protecting against bootkit malware that persists below the OS.

**Device attestation** — allows the device to cryptographically prove to a management system (like Intune or JumpCloud) that it's a known, managed device running unmodified software. This is the hardware foundation for device trust in Zero Trust architectures.

**Certificate storage** — private keys for device certificates used in 802.1X, VPN, and code signing can be stored in the TPM, where they're protected from extraction.

TPM 2.0 is required for Windows 11. Any modern business laptop or server purchased in the last several years will have it. For organizations doing 802.1X certificate-based authentication or planning device attestation, verify TPM 2.0 is present and enabled in BIOS.`,
  },

  // ── Hardware ───────────────────────────────────────────────────────────────
  {
    slug: "cpu",
    term: "CPU",
    aka: ["Central Processing Unit", "Processor"],
    shortDef: "The primary processor in a computer — executes the OS, runs applications, and handles general-purpose computation. Core count determines how many tasks run simultaneously.",
    categories: ["Hardware"],
    related: ["gpu", "virtual-machine"],
    content: `The CPU executes instructions. It's the general-purpose brain of the system — fetching instructions from memory, decoding them, executing them, writing results. Everything from running the OS to processing database queries to executing application logic runs through the CPU.

## Cores and threads

Modern CPUs have multiple cores — independent processing units on a single chip. A server CPU might have 8, 16, 32, or 64 cores. Hyper-threading (Intel) or SMT (AMD) allows each physical core to run two threads simultaneously, roughly doubling the apparent core count for multithreaded workloads.

For virtualization, core count directly determines how many vCPUs you can allocate across VMs. A dual-socket server with two 32-core CPUs can support workloads requiring up to 128 vCPUs (with 2:1 overcommit).

## CPU generations and architectures

CPU generations matter for server purchasing. Intel Xeon and AMD EPYC are the dominant server CPU lines. Performance, power efficiency, memory bandwidth, and PCIe lane count vary significantly between generations. For most infrastructure purchases, comparing specific benchmark workloads (compute-intensive vs memory bandwidth vs I/O-heavy) is more useful than comparing core counts alone.

## CPU vs GPU

CPUs are designed for sequential processing — a small number of powerful cores handling complex, varied instructions. GPUs have thousands of simpler cores optimized for parallel processing of the same instruction across large datasets. AI workloads have made the distinction relevant for a much broader audience. See [GPU](/resources/glossary/gpu) for detail on where each applies.`,
  },
  {
    slug: "gpu",
    term: "GPU",
    aka: ["Graphics Processing Unit", "Graphics Card", "Video Card"],
    shortDef: "A processor with thousands of small cores optimized for parallel computation. Originally designed for graphics, GPUs now drive AI inference and training, and any workload requiring massive parallel processing.",
    categories: ["Hardware"],
    related: ["cpu", "virtual-machine"],
    content: `GPUs were designed to render video frames — transforming millions of pixels using the same geometric operations simultaneously. That parallel architecture turned out to be exactly what AI needs: performing the same mathematical operation (matrix multiplication) across billions of numbers at once.

![Diagram showing GPU architecture with thousands of parallel processing cores compared to CPU architecture](/images/glossary/gpu-architecture.jpg)

The result is that NVIDIA became the defining hardware company of the AI era. Training a frontier model requires thousands of high-end GPUs running for weeks. Running a model for inference (generating responses) is less intensive but still GPU-heavy at scale.

## GPU vs CPU

![Side-by-side comparison of CPU and GPU architecture showing a few powerful cores vs many smaller parallel cores](/images/glossary/gpu-vs-cpu.jpg)

A CPU has a small number of powerful cores (typically 4-64) optimized for complex, sequential tasks — running an OS, executing varied application logic, handling I/O. A GPU has thousands of simpler cores optimized for doing one thing across massive data in parallel. They're complementary: CPUs handle general workloads; GPUs accelerate specific parallel workloads.

## For AI specifically

For local AI inference — running models on your own hardware rather than through a cloud API — GPU memory (VRAM) is the primary constraint. A 7B-parameter model requires ~14GB of VRAM in fp16 format. A 70B model needs ~140GB. Consumer GPUs with 16-24GB can run capable open-source models. Workstation GPUs with 48GB (like the NVIDIA RTX 6000 Ada) handle larger models.

For organizations evaluating on-premise AI deployment, the practical question is: what model size do you need, and does the VRAM requirement fit a financially reasonable GPU? See the [Understanding AI](/resources/university/understanding-ai) article for a deeper treatment of local inference hardware.

## Integrated vs discrete

Integrated GPUs are built into the CPU — adequate for office work and basic display output, inadequate for AI inference or serious graphics workloads. Discrete GPUs are separate add-in cards with their own dedicated VRAM and are required for any meaningful GPU-accelerated workload.`,
  },
  {
    slug: "hdd",
    term: "HDD",
    aka: ["Hard Disk Drive", "Hard Drive", "Spinning Drive", "Mechanical Drive"],
    shortDef: "Stores data on spinning magnetic platters read by a mechanical arm. Highest capacity per dollar of any storage medium, but significantly slower than SSDs and susceptible to physical shock.",
    categories: ["Hardware"],
    related: ["ssd", "nvme"],
    content: `HDDs read and write data by moving a physical read/write head over spinning magnetic platters. This mechanical nature is both their limitation and their value: the physics of spinning media constrains random I/O performance, but the same physics allows high areal density and large capacities at competitive cost per terabyte.

## Where HDDs still make sense

**High-capacity storage at low cost per TB** — for backup targets, archival storage, and large media storage where access speed isn't critical, HDDs offer 4-20TB+ drives at a fraction of the SSD cost per TB.

**NAS arrays for bulk storage** — Synology and QNAP NAS units running RAID arrays for file sharing and backup are a classic HDD use case. Sequential read performance is adequate; the bottleneck is usually the network, not the drives.

**Secondary tiers in tiered storage** — an HDD tier holds infrequently accessed data behind an SSD cache or tier that handles hot data.

## Where HDDs don't belong

**OS and application drives** — the random I/O latency of HDDs (typically 5-15ms per operation vs <0.1ms for NVMe SSDs) makes for a noticeably worse experience. Anything running an operating system or database should be on SSD.

**High-IOPS workloads** — database transaction logs, virtual machine storage, anything that generates significant random I/O will be severely bottlenecked by HDD performance.

## Failure characteristics

HDDs have moving parts and fail mechanically. Enterprise HDDs are rated for MTBF (Mean Time Between Failures) of 1-2 million hours, but drives in dense arrays fail regularly in practice. RAID provides redundancy; regular backups are still non-negotiable. SSDs fail differently (and usually more gracefully) but also fail.`,
  },
  {
    slug: "ssd",
    term: "SSD",
    aka: ["Solid-State Drive", "Flash Drive", "Flash Storage"],
    shortDef: "Stores data in flash memory chips with no moving parts. Dramatically faster than HDDs for random I/O, more reliable under physical stress, and more expensive per terabyte.",
    categories: ["Hardware"],
    related: ["nvme", "hdd"],
    content: `SSDs store data in NAND flash memory — the same technology in USB drives and memory cards, but engineered for reliability and endurance. The absence of moving parts means access times of microseconds rather than milliseconds, and no mechanical failure modes.

## SSD interfaces

**SATA SSD** — uses the same interface as HDDs. A drop-in replacement for a spinning drive, with SSD random I/O performance. Maxes out at ~550MB/s sequential read due to the SATA interface ceiling. Adequate for general computing; limited for high-performance storage.

**NVMe SSD** — connects via PCIe directly to the CPU, with no SATA bottleneck. 3-7GB/s sequential read on consumer drives, higher on enterprise models. The right choice for OS drives, VM storage, and any application with significant I/O demands.

## SSD endurance

Flash cells wear out — each write cycle degrades them slightly. Enterprise SSDs have higher endurance ratings (measured in TBW — terabytes written) and may use more durable SLC or MLC NAND rather than the TLC or QLC found in consumer drives. For NAS arrays with write-intensive workloads (caching, frequent backups), specifying the right endurance tier matters.

## Caching in storage systems

Synology and similar NAS platforms can use SSDs as a read/write cache in front of an HDD array — the SSDs absorb the random I/O workload while the HDDs handle bulk sequential storage. This can dramatically improve performance for file server and small database use cases at lower cost than all-SSD storage.`,
  },
  {
    slug: "nvme",
    term: "NVMe",
    aka: ["Non-Volatile Memory Express", "NVMe SSD", "M.2 NVMe"],
    shortDef: "Connects SSDs directly to the CPU via PCIe, delivering far higher throughput and lower latency than SATA. The standard interface for high-performance storage in modern workstations and servers.",
    categories: ["Hardware"],
    related: ["ssd", "hdd", "cpu"],
    content: `SATA was designed for spinning hard drives — its speed limits reflect HDD performance expectations from the 1980s. As SSDs became capable of speeds far beyond what SATA could carry, NVMe was developed as a purpose-built interface for flash storage.

NVMe connects via PCIe lanes directly to the CPU, with a command queue designed for the parallelism of modern flash — 65,535 queues of 65,535 commands each, versus SATA's single queue of 32. The result: consumer NVMe drives reach 3-7GB/s sequential read; enterprise NVMe drives exceed 12GB/s. Random I/O latency drops below 100 microseconds.

## Form factors

**M.2** — a compact slot on the motherboard, used in laptops, workstations, and consumer hardware. Most new laptops use M.2 NVMe.

**U.2 / U.3** — enterprise server form factor, physically similar to a 2.5" SATA drive but with PCIe signaling. Hot-swappable in enterprise server drive bays.

**PCIe add-in card** — full-length card in a PCIe slot. Used for maximum performance or when M.2/U.2 slots aren't available.

## NVMe over Fabrics (NVMe-oF)

NVMe-oF extends NVMe over a network, allowing remote storage to be accessed with near-local latency. Used in high-performance storage networks as an alternative to iSCSI, with significantly lower latency. Increasingly relevant for AI infrastructure and high-performance computing.`,
  },
  {
    slug: "virtual-machine",
    term: "Virtual Machine",
    aka: ["VM", "Guest", "Guest OS"],
    shortDef: "A software-based emulation of a physical computer. Multiple VMs run simultaneously on one physical host, each with its own OS, sharing CPU, RAM, and storage through a hypervisor.",
    categories: ["Virtualization", "Cloud & Infrastructure"],
    related: ["cpu", "hdd", "ssd", "hyper-v", "vmware"],
    content: `A hypervisor (VMware ESXi, Microsoft Hyper-V, KVM) sits between the physical hardware and the VMs running on it. It allocates CPU cores, RAM, storage, and network interfaces to each VM as virtual resources, while managing sharing and isolation between them.

From inside a VM, everything looks like a physical machine: a CPU, memory, disk, network card. The VM's OS doesn't know — and doesn't need to know — that it's virtualized. It installs and runs exactly like it would on physical hardware.

## Why virtualization matters

**Resource efficiency** — a physical server with 512GB of RAM and 32 cores can run dozens of VMs that collectively utilize that capacity. Running one workload per physical server wastes most of the hardware.

**Isolation** — VMs are isolated from each other. A crash or compromise in one VM doesn't directly affect others on the same host.

**Snapshots and cloning** — take a point-in-time snapshot before a risky change; revert instantly if something goes wrong. Clone a VM to create identical environments.

**Live migration** — running VMs can be moved between physical hosts without downtime, enabling maintenance and load balancing.

## VM performance considerations

VMs add a thin layer of overhead, but on modern hypervisors running modern hardware, this overhead is negligible for most workloads — typically 1-5% CPU overhead. For storage-intensive workloads, the I/O path (how storage is presented to VMs) matters more: NVMe pass-through or iSCSI from a fast NAS performs very differently from a shared VMFS datastore on slow HDDs.

Over-committing memory — allocating more RAM to VMs than physically exists — causes swapping and is one of the most common sources of VM performance problems in production environments.`,
  },

  // ── Cabling ────────────────────────────────────────────────────────────────
  {
    slug: "rj45",
    term: "RJ45",
    aka: ["Ethernet Jack", "8P8C"],
    shortDef: "The standard 8-pin connector used for Ethernet — the rectangular plastic plug on every Ethernet cable and the matching jack on switches, routers, and computers.",
    categories: ["Cabling", "Networking"],
    related: ["rj11", "keystone-jack", "lan", "lacp"],
    content: `RJ45 is technically an 8P8C (8-position, 8-contact) modular connector, but everyone calls it an RJ45. It's been the standard physical interface for Ethernet since the early 1990s, supporting everything from legacy 10Mbps to modern 10Gbps connections over twisted-pair copper cable.

The eight pins carry four twisted pairs. In modern Ethernet (1Gbps and above), all four pairs carry data simultaneously. At lower speeds, only two pairs are used for data.

## Wiring standards: T568A vs T568B

Two wiring schemes define how the eight wires map to the eight pins. Both work; what matters is consistency — both ends of a cable must use the same standard, and a network should stick to one throughout.

T568B is the more common choice in North America. T568A is common in government and some international installations. Mixing the two on opposite ends of a cable produces a crossover cable — used for direct device-to-device connections without a switch, though modern equipment generally handles this automatically via Auto-MDIX.

![Diagram showing T568A and T568B wiring color codes for RJ45 connectors — pin assignments and wire color order for each standard](/images/glossary/rj45-t568-wiring.jpg)

## Cable categories

The RJ45 connector is compatible with all twisted-pair Ethernet cable categories. The cable spec — Cat5e, Cat6, Cat6a — determines maximum speed and distance, not the connector itself.`,
  },
  {
    slug: "rj11",
    term: "RJ11",
    aka: ["Phone Jack", "Telephone Jack", "6P2C"],
    shortDef: "The small 6-pin connector used for telephone lines — narrower than an RJ45 Ethernet jack and wired for voice rather than data.",
    categories: ["Cabling"],
    related: ["rj45", "low-voltage-wiring"],
    content: `RJ11 connectors use a 6P2C configuration (6 positions, 2 contacts in standard use) and are the universal connector for analog phone lines in North America. They're visually similar to RJ45 but noticeably narrower — you can insert an RJ11 into an RJ45 jack in a pinch (it'll fit the center pins) but it's not a proper connection.

In a modern office context, you'll encounter RJ11 primarily at analog phone handsets, DSL modems, and legacy fax machines. With VoIP adoption, dedicated analog phone wiring is increasingly rare in new installations — most modern phone systems run over Ethernet to IP handsets.

The RJ12 variant uses the same physical form factor as RJ11 but wires all six contacts, commonly used for multi-line phones and PBX systems.`,
  },
  {
    slug: "keystone-jack",
    term: "Keystone Jack",
    shortDef: "The termination module behind a wall plate or patch panel port — the component an RJ45 plug connects into, with the cable punched down on the back side.",
    categories: ["Cabling"],
    related: ["rj45", "cable-management", "backbone-cabling"],
    content: `When you plug an Ethernet cable into a wall outlet, the RJ45 jack you're plugging into is a keystone jack mounted in a wall plate. On the back, individual wires are punched down onto the connector's IDC (insulation displacement contacts) — a termination method that pierces the wire insulation to make contact without stripping.

Keystone jacks snap into standard cutouts in wall plates and patch panels. This modular system means you can swap out a single port without replacing the whole panel — useful when a jack gets damaged or when upgrading from Cat6 to Cat6a.

Key considerations when selecting keystone jacks:

**Category matching** — the jack must match or exceed the cable category. A Cat5e jack on Cat6a cable is a Cat5e installation, regardless of the cable spec.

**Tool vs toolless** — traditional punch-down requires a punch-down tool. Toolless keystone jacks (common in newer installations) terminate via a lever or cap that seats the wires without special tooling, speeding up large patch panel builds.

**Shielding** — for shielded cable runs, shielded keystone jacks maintain the shielding continuity through the termination point. Mixing shielded cable with unshielded jacks breaks the shield and introduces noise.`,
  },
  {
    slug: "awg",
    term: "AWG",
    aka: ["American Wire Gauge"],
    shortDef: "The standard for measuring wire conductor diameter. Counterintuitively, lower AWG numbers mean thicker wire — 12 AWG is thicker than 18 AWG.",
    categories: ["Cabling", "Power"],
    related: ["low-voltage-wiring", "poe"],
    content: `AWG is the North American standard for specifying wire size. The scale runs inversely: as the AWG number increases, the wire gets thinner. 10 AWG is thick, heavy cable suitable for high-current circuits; 24 AWG is the fine wire inside an Ethernet cable.

The gauge determines two things: how much current the wire can safely carry, and its resistance per unit length. Thicker wire (lower AWG) carries more current and has less resistance — both important for longer runs and higher-power applications.

Common AWG values you'll encounter in IT infrastructure:

- **24 AWG** — standard conductor in Cat5e/Cat6 Ethernet cable. Fine wire, low current capacity, fine for data.
- **23 AWG** — thicker conductor in Cat6/Cat6a. Better performance at higher frequencies, stiffer cable.
- **22–18 AWG** — typical for low-voltage wiring: alarm systems, access control, intercom.
- **14–12 AWG** — standard for 15A and 20A branch circuits. Romex in walls, PDU power cords.
- **10 AWG** — 30A circuits, large PDUs, generator feeds.

For PoE installations, wire gauge affects how much power loss occurs over the run. Cat6 23 AWG cable has lower resistance than Cat5e 24 AWG, which means slightly more usable power at the device end on long runs — relevant for high-wattage PoE devices at the edge of the 100-meter spec.`,
  },
  {
    slug: "mtp-mpo-connector",
    term: "MTP/MPO Connector",
    aka: ["MTP", "MPO", "Multi-Fiber Push On"],
    shortDef: "High-density fiber optic connectors that terminate 12, 24, or more fibers in a single plug — used for high-speed backbone connections and data center trunk cabling.",
    categories: ["Cabling"],
    related: ["backbone-cabling", "dark-fiber", "attenuation"],
    content: `Where a standard LC or SC fiber connector terminates one fiber, an MTP/MPO connector terminates a ribbon of 8, 12, or 24 fibers simultaneously. This makes them the standard choice for high-density backbone cabling, where running individual fiber pairs would fill conduit and take far longer to install.

MPO is the international standard (IEC 61754-7); MTP is US Conec's trademarked high-performance version with improved mechanical characteristics and lower loss. In practice the terms are used interchangeably.

## Polarity matters

With multiple fibers in a single connector, polarity — which fiber maps to which — must be maintained correctly end to end. A transmit fiber on one end must reach a receive port on the other. Three polarity methods (Method A, B, and C defined in TIA-568) handle this differently, and the method must be consistent throughout a run. Mixing polarity methods is a common source of link failures during installation that can be hard to diagnose without fiber test equipment.

## Male vs female

MTP/MPO connectors come in two key versions: **female** (no pins, the socket side) and **male** (with alignment pins). Connections require one male and one female end. Female-to-female connections use a key-up/key-down convention that also affects polarity.

Pre-terminated MTP/MPO trunk cables are the typical approach for data center backbone cabling — a bundle of fibers factory-terminated at both ends, pulled through conduit, and connected to MTP cassettes or breakout panels that convert to LC or SC individual fiber connections at the rack.`,
  },
  {
    slug: "bend-radius",
    term: "Bend Radius",
    shortDef: "The minimum radius a cable can be bent to without degrading signal quality or risking physical damage. Exceeding it permanently impairs the cable.",
    categories: ["Cabling"],
    related: ["backbone-cabling", "attenuation", "low-voltage-wiring"],
    content: `Every cable type has a minimum bend radius specification — the tightest curve it can safely make. Bend tighter than the spec and you risk crushing the conductor, cracking the insulation, or in the case of fiber optic cable, microbending the glass core in ways that scatter light and increase attenuation.

Typical minimum bend radii:

- **Cat6 Ethernet cable** — 4x the cable diameter (roughly 1 inch). Common violations: sharp 90° bends around conduit corners, cables pulled tight over a rack edge.
- **Cat6a (shielded)** — larger minimum radius due to thicker construction, typically 8x cable diameter.
- **Single-mode fiber** — 30mm (about 1.2 inches) at installation; some bend-insensitive variants rated down to 7.5mm.
- **Multi-mode fiber** — similar to single-mode for most types.

The practical implication: when routing cables through tight spaces, cable managers with proper radius guides, or J-hooks with the correct size, aren't just organizational — they protect signal integrity. A cable that looks fine but has been bent too sharply may perform fine at first and degrade over time as the insulation fatigues.`,
  },
  {
    slug: "cable-management",
    term: "Cable Management",
    shortDef: "The physical organization of cables in a rack, server room, or structured cabling installation — keeping cables routed, labeled, and accessible without restricting airflow or violating bend radius.",
    categories: ["Cabling"],
    related: ["backbone-cabling", "rack-unit", "idf"],
    content: `Poor cable management is one of the most common and most avoidable sources of operational problems in server rooms and network closets. Cables stuffed into a bundle that nobody can trace, unlabeled patch panel ports, and cables routed across hot equipment aren't just aesthetically bad — they slow troubleshooting, trap heat, and make changes risky.

Cable management hardware includes:

**Horizontal cable managers** — 1U panels with rings, channels, or fingers that route patch cables horizontally between ports and keep slack organized.

**Vertical cable managers** — run the full height of the rack, routing cables from patch panels to switches without crossing open air.

**J-hooks and cable trays** — for runs between racks or overhead, providing support without violating bend radius.

**Velcro straps** — the correct way to bundle cables that need to move. Zip ties are appropriate for permanent runs but slice insulation when pulled tight and can't be removed without cutters.

The practical standard: every port should be labeled at both ends. Patch cables should be the right length — not six-foot cables spanning one-foot distances. Hot and cold aisle separation should be maintained and cable runs shouldn't cross it unnecessarily. A well-managed rack takes longer to build and is worth every minute of it.`,
  },
  {
    slug: "backbone-cabling",
    term: "Backbone Cabling",
    aka: ["Vertical Cabling", "Riser Cabling"],
    shortDef: "Connects network equipment rooms, floors, and buildings to each other — the high-capacity trunk infrastructure that horizontal cabling plugs into.",
    categories: ["Cabling"],
    related: ["idf", "cable-management", "mtp-mpo-connector", "dark-fiber"],
    content: `Structured cabling follows a hierarchy. At the top is the main distribution frame (MDF) — typically in the data center or main IDF. Backbone cabling runs from the MDF to intermediate distribution frames (IDFs) on each floor or in each building. From the IDFs, horizontal cabling fans out to individual workstations, APs, and devices.

Backbone runs carry aggregated traffic — multiple floors' or buildings' worth of connections — so the bandwidth requirements are higher and the appropriate media is different:

**Within a building (vertical)** — multimode or single-mode fiber is standard for modern installations. Fiber handles longer runs, higher bandwidth, and is immune to EMI. 10G or 25G per fiber pair is common; 40G/100G in higher-density environments.

**Between buildings (campus)** — single-mode fiber, which maintains signal quality over hundreds of meters to kilometers. Outdoor-rated, often direct-buried or in conduit.

**Short inter-rack runs** — DAC (Direct Attach Copper) cables or short-reach fiber are common for sub-10-meter connections between adjacent racks.

Backbone cabling is expensive to run and disruptive to change after the fact — running it once correctly, with adequate spare fibers or conduit for future growth, is a much better investment than a minimal installation you'll need to supplement in two years.`,
  },
  {
    slug: "low-voltage-wiring",
    term: "Low-Voltage Wiring",
    shortDef: "Structured cabling infrastructure for data, voice, security, and AV systems — anything running at 50 volts or less, distinct from line-voltage electrical work.",
    categories: ["Cabling"],
    related: ["backbone-cabling", "cable-management", "poe", "awg"],
    content: `Low-voltage systems include Ethernet, fiber, telephone, coax, access control, security cameras, intercoms, speakers, and AV distribution. The work lives at the boundary between IT and electrical — requires no electrician's license in most US jurisdictions (though requirements vary by state and municipality), but should still follow code requirements and best practices.

The relevant standards are the BICSI standards and TIA-568/570 for structured cabling, which define installation practices, cable routing, bend radius requirements, and connector performance.

Low-voltage cabling requires its own conduit or pathways — it should not share conduit with line voltage (120/240V) wiring, both for performance reasons (line voltage induces noise on data cables) and code reasons. The minimum separation between low-voltage and line-voltage runs without a grounded metal barrier is typically defined by NEC Article 800.

In commercial environments, low-voltage work is typically scoped separately from electrical contracts. Knowing the distinction matters when coordinating with contractors — a general electrician is not typically a structured cabling installer.`,
  },
  {
    slug: "attenuation",
    term: "Attenuation",
    shortDef: "The loss of signal strength as it travels through a cable or fiber. Too much attenuation and the signal is too weak to be reliably decoded at the far end.",
    categories: ["Cabling", "Networking"],
    related: ["backbone-cabling", "bend-radius", "dark-fiber"],
    content: `All transmission media attenuate signals — copper cable through resistance and capacitance, fiber through light scattering and absorption in the glass. The question is whether the attenuation over a given distance falls within the budget for that link.

Attenuation is measured in decibels (dB). A 3dB loss cuts the signal power in half; 10dB cuts it to one-tenth. Fiber links have a loss budget — the maximum total attenuation the transceiver pair can accommodate — and every connector, splice, and meter of cable consumes part of that budget.

For copper Ethernet, attenuation limits are built into the category specification. The 100-meter max run for Cat6 is partly an attenuation limit — beyond that, signal loss is too high for reliable 1Gbps operation. PoE is even more constraining, since power also degrades over resistance.

For fiber, attenuation varies by:

- **Fiber type** — single-mode glass has lower attenuation per kilometer than multimode, which is why single-mode is used for long-distance runs.
- **Wavelength** — 1310nm and 1550nm windows in single-mode fiber are where glass is most transparent.
- **Connectors and splices** — each connection point adds insertion loss. A clean, well-polished connector adds ~0.3dB; a dirty or damaged one can add several dB.
- **Bends** — tight bends cause microbending loss in fiber, which is why bend radius specifications exist.`,
  },
  {
    slug: "dark-fiber",
    term: "Dark Fiber",
    shortDef: "Installed fiber optic cable that carries no active traffic — either spare capacity in a cable bundle or leased raw fiber that an organization equips with its own transceivers.",
    categories: ["Cabling", "Networking"],
    related: ["backbone-cabling", "attenuation"],
    content: `The term "dark" means no light is being transmitted — the fiber is physically present but not in service. It comes in two contexts:

**Internal dark fiber** — spare fibers in a cable run that were installed for future capacity. When running backbone cabling through conduit, installing a larger cable bundle than currently needed is standard practice — the labor cost is in the run, not the additional fibers.

**Leased dark fiber** — carriers own extensive underground fiber networks, much of which isn't being actively used. Organizations with high bandwidth requirements — ISPs, universities, healthcare systems, large enterprises — can lease raw fiber strands between two locations and equip them with their own DWDM or active equipment, effectively owning the capacity of that link rather than paying per-bit for a managed circuit.

Leasing dark fiber gives an organization full control of the link's capacity and technology. You bring your own transceivers, choose your own wavelengths, and can upgrade the bandwidth by changing the optics without renegotiating the fiber contract. The trade-off: you're responsible for the active equipment at each end, and fiber cuts or physical infrastructure issues are still the carrier's problem to repair.`,
  },
  {
    slug: "rack-unit",
    term: "Rack Unit",
    aka: ["U", "RU", "1U", "2U"],
    shortDef: "The standard measurement for server rack height — 1U equals 1.75 inches. A 42U rack is the most common server rack size.",
    categories: ["Cabling", "Hardware"],
    related: ["idf", "cable-management"],
    content: `Equipment designed for rack mounting is measured and specified in rack units. 1U is 1.75 inches (44.45mm). A standard 1U server is 1.75 inches tall; a 2U server is 3.5 inches; a 4U chassis is 7 inches.

Most server racks are 42U tall, which provides approximately 6 feet of usable equipment space. Full-depth server racks (typically 600–800mm wide, 1000–1200mm deep) are the data center standard. Shallower wall-mount enclosures or half-racks are common in telecom closets and IDF spaces.

Rack unit count governs how much equipment fits. Common allocations for a 42U rack:

- Top-of-rack switch: 1U
- 1U servers: up to ~40 with cable management
- Patch panel (24 ports): 1U
- Horizontal cable manager: 1U
- PDU (power distribution unit): 1–2U (or zero-U, mounted vertically in the side channels)

Why it matters: when specifying a server room or ordering equipment, rack unit density drives the physical footprint and power density planning. A rack of dense 1U servers has very different power and cooling requirements than a half-full rack of 4U systems.`,
  },
  {
    slug: "idf",
    term: "IDF",
    aka: ["Intermediate Distribution Frame", "Telecom Room", "Telecom Closet", "TR"],
    shortDef: "A secondary network equipment room that aggregates horizontal cabling from a floor or zone and connects it back to the main distribution frame via backbone cabling.",
    categories: ["Cabling", "Networking"],
    related: ["backbone-cabling", "rack-unit", "cable-management"],
    content: `In a multi-floor building, running individual Ethernet cables from every desk all the way to a central data room isn't practical. Instead, each floor or zone has an IDF — a network closet containing the floor's patch panels, access switches, and backbone connections.

The typical IDF contains:

- **Patch panels** — where horizontal cable runs from desks and APs terminate
- **Access layer switches** — connecting devices to the network and uplink to the core
- **Backbone connections** — fiber or high-speed copper to the MDF (main distribution frame) in the data room
- **Small UPS** — provides battery backup for the network gear, keeping the floor online during a brief power event

IDF design follows TIA-569 standards, which define requirements for space, clearance, power, cooling, and fire rating. An IDF in a commercial space needs dedicated, lockable space with adequate cooling — a rack of switches in an active closet generates significant heat, and intake air temperatures above 35°C (ASHRAE A2) will start triggering high-temperature warnings.

The term MDF (Main Distribution Frame) is used for the primary network room — usually in the basement or data center — where the IDFs connect back to, and where the internet circuit terminates.`,
  },
  {
    slug: "duplex-simplex",
    term: "Duplex / Simplex",
    shortDef: "Simplex transmits in one direction only. Half-duplex can go both ways but not simultaneously. Full-duplex transmits and receives at the same time — the standard for modern Ethernet.",
    categories: ["Cabling", "Networking"],
    related: ["rj45", "backbone-cabling", "lacp"],
    content: `These terms describe the directionality of a communication channel:

**Simplex** — one direction only. A broadcast antenna is simplex. In fiber cabling, a single-strand fiber is sometimes called simplex (one fiber, one direction) vs duplex (two fibers, bidirectional).

**Half-duplex** — both directions, but not simultaneously. Early Ethernet hubs operated in half-duplex: only one device on a segment could transmit at a time, and all others had to wait. Walkie-talkies are half-duplex.

**Full-duplex** — simultaneous bidirectional transmission. All modern switched Ethernet is full-duplex: the switch creates a dedicated collision domain for each port, so devices can transmit and receive at the same time without collisions. A 1Gbps full-duplex link is 1Gbps in each direction simultaneously.

In fiber, duplex connectors pair two fibers (transmit and receive) in a single connector body — an LC duplex or SC duplex connector handles both directions in one plug, as opposed to two separate simplex fibers.

The distinction matters when configuring network equipment: if both ends of a link aren't set to the same duplex mode, you'll see a duplex mismatch — excessive errors, poor performance, and link instability that can be hard to diagnose.`,
  },

  // ── Power ──────────────────────────────────────────────────────────────────
  {
    slug: "poe",
    term: "PoE",
    aka: ["Power over Ethernet", "PoE+", "PoE++", "802.3af", "802.3at", "802.3bt"],
    shortDef: "Delivers DC power over an Ethernet cable alongside data, eliminating the need for a separate power outlet at devices like IP phones, access points, and security cameras.",
    categories: ["Power", "Networking"],
    related: ["rj45", "awg", "access-switch", "voip"],
    content: `PoE lets a PoE-capable switch (the PSE — Power Sourcing Equipment) supply power to a connected device (the PD — Powered Device) over the same Cat5e/Cat6 cable carrying data. No power outlet near the ceiling for your access point, no power brick at every IP phone.

![Diagram showing PoE power delivery from a PoE switch (PSE) to powered devices (PD) — IP phone, access point, and camera — over standard Ethernet cable](/images/glossary/poe-pse-pd.jpg)

## PoE standards and wattage

Three IEEE standards define PoE power levels at the device:

| Standard | Name | Max power at PD |
|---|---|---|
| 802.3af | PoE | 12.95W |
| 802.3at | PoE+ | 25.5W |
| 802.3bt | PoE++ / 4PPoE | 71.3W (Type 3) / 90W (Type 4) |

Most IP phones and basic APs run fine on 802.3af. Modern dual-radio APs, PTZ cameras, and video conferencing endpoints often need 802.3at (PoE+). High-wattage devices like multi-radio APs, digital signs, and thin clients may need 802.3bt.

## Switch power budget

A PoE switch has a total power budget — the maximum total wattage it can deliver across all PoE ports simultaneously. A 24-port PoE+ switch with a 370W budget can support ~14 ports at full 25.5W each, or more ports at lower wattage. When specifying a PoE switch, size the power budget for realistic worst-case load, not just port count.

## Injectors

A PoE injector adds PoE capability to a non-PoE switch port — the injector sits between the switch and the device, taking power from a wall outlet and combining it with the Ethernet signal. Useful for adding PoE to a few ports without replacing a switch, but inelegant at scale.`,
  },
  {
    slug: "nema-connector",
    term: "NEMA Connector",
    aka: ["NEMA Plug", "Power Connector"],
    shortDef: "Standardized power plugs and receptacles used in North America. The NEMA numbering system encodes voltage, amperage, and locking vs straight-blade type.",
    categories: ["Power"],
    related: ["poe", "power-redundancy", "single-phase-power", "three-phase-power"],
    content: `Every power cord in North America terminates in a NEMA connector. The NEMA (National Electrical Manufacturers Association) numbering system makes it possible to identify a connector's electrical characteristics from the designation alone.

## How NEMA numbering works

The designation has two parts separated by a hyphen:

**Prefix** — the configuration number, which encodes voltage and grounding:
- **5** = 125V, 2-pole, 3-wire grounded (standard North American single-phase)
- **6** = 250V, 2-pole, 3-wire grounded (higher-voltage single-phase)
- **L5** = 125V, locking, 2-pole, 3-wire (the L means locking)
- **L6** = 250V, locking, 2-pole, 3-wire

**Suffix** = current rating in amps: 15, 20, 30, 50, 60

So a NEMA 5-20 is a 125V, 20A, straight-blade connector. A NEMA L6-30 is a 250V, 30A, locking connector.

## Common types in IT environments

**NEMA 5-15** (125V / 15A) — the standard North American household outlet. Every office workstation and consumer device plugs into this.

**NEMA 5-20** (125V / 20A) — one blade is T-shaped to prevent plugging a 20A device into a 15A circuit. Used on 20A branch circuits common in server rooms.

**NEMA L5-20** (125V / 20A, locking) — L-series connectors twist and lock in place, preventing accidental disconnection. Standard for UPS output connections and PDU inputs in IT environments.

**NEMA L5-30** (125V / 30A, locking) — higher current locking connector for larger UPS units and PDUs.

**NEMA L6-20** (250V / 20A, locking) — for 240V circuits, common on dual-corded servers where you want 240V efficiency (same watts, half the current, less heat in the wiring).

**NEMA L6-30** (250V / 30A, locking) — large PDUs, transfer switches, generator connections.

The locking connector (L-series) is the right choice for any connection where accidental disconnection would cause an outage. In a data center or server room, all PDU connections should use locking connectors.`,
  },
  {
    slug: "single-phase-power",
    term: "Single-Phase Power",
    shortDef: "The standard electrical supply for most residential and small commercial environments — 120V or 240V delivered on a single alternating current waveform.",
    categories: ["Power"],
    related: ["three-phase-power", "poe", "nema-connector", "power-redundancy"],
    content: `In North America, the standard utility supply is single-phase at 120/240V split-phase: two hot conductors 180° out of phase with each other and a neutral. Devices that need 120V connect between one hot and neutral. Devices that need 240V (dryers, HVAC, some PDUs) connect between the two hots.

For small IT environments — a handful of servers in a closet, a small NAS and switch — single-phase power is typically sufficient. Most standard UPS units, PDUs, and server power supplies accept single-phase input.

The limitation shows up as power density grows. On a 20A circuit at 120V, the maximum load is 2,400W (derated to ~1,920W at 80% for continuous loads). A rack of 1U servers with 750W power supplies can exceed a single circuit quickly, requiring multiple circuits per rack.

Single-phase power also creates an unbalanced load problem at scale — large single-phase draws create uneven loading across the three phases of the upstream supply, which utility companies and building engineers care about.`,
  },
  {
    slug: "three-phase-power",
    term: "Three-Phase Power",
    shortDef: "Delivers three alternating current waveforms 120° apart on three conductors — more efficient power delivery for high-density equipment, and the standard for data center electrical distribution.",
    categories: ["Power"],
    related: ["single-phase-power", "poe", "nema-connector", "power-redundancy"],
    content: `Where single-phase power uses one AC waveform, three-phase uses three waveforms spaced 120° apart. The combined effect is more consistent power delivery (the waveforms overlap, so total power never drops to zero as it does in single-phase) and more efficient use of copper conductors.

For data centers and server rooms, three-phase power offers two primary advantages:

**Higher power density** — a 30A three-phase circuit at 208V (three-phase 208/120V is the North American data center standard) delivers ~10.8kW, compared to ~2.4kW for a 20A single-phase circuit. This allows far more equipment per circuit and per rack.

**Balanced loading** — PDUs designed for three-phase input distribute load across all three phases, keeping the electrical system balanced. This matters to the facility and utility.

In a three-phase 208/120V system:
- Line-to-neutral = 120V (standard outlets from branch circuits)
- Line-to-line = 208V (dual-corded servers, three-phase PDUs)

Most enterprise servers and storage equipment support wide-range input from 100–240V, so they'll run on either 120V or 208V feeds. At 208V, a server drawing 1,000W only pulls ~4.8A rather than ~8.3A at 120V — lower current means less heat in wiring and longer-lasting connections.`,
  },
  {
    slug: "power-redundancy",
    term: "Power Redundancy",
    shortDef: "Using multiple independent power paths to ensure equipment keeps running when a single power source, circuit, or UPS fails.",
    categories: ["Power"],
    related: ["nema-connector", "three-phase-power", "single-phase-power"],
    content: `Power is the foundation everything else depends on. Power redundancy means no single failure takes systems offline. It's implemented at multiple levels:

**Dual power supplies** — enterprise servers, switches, and storage systems typically have two power supply units (PSUs). Each PSU connects to a different circuit or PDU. If one supply or its circuit fails, the other carries the full load. This is the most important single level of redundancy for any critical device.

**Dual PDUs** — power distribution units in a rack are typically deployed in pairs (PDU A and PDU B), fed from separate circuits or separate UPS units. PSU A of each server connects to PDU A; PSU B connects to PDU B.

**UPS (Uninterruptible Power Supply)** — provides battery backup to bridge the gap during a power event, and in some cases provides power conditioning. A UPS protects against brief outages and allows for controlled shutdown if the outage extends. UPS runtime is typically minutes to tens of minutes — enough to ride through a brief utility event or execute a clean shutdown, not hours of operation.

**Generator** — for extended outages, a generator provides sustained power after the UPS battery is exhausted. Typical transfer time from utility to generator is 10–30 seconds, which the UPS bridges. Generator fuel capacity and testing frequency are critical operational concerns.

**Diverse utility feeds** — for the highest-availability facilities, two physically separate utility feeds from different substations enter the building on different paths. Expensive and uncommon outside of colocation facilities and critical infrastructure.

For most organizations, dual PSUs on critical servers, dual PDUs per rack, and a properly sized UPS covering the network closet and server room is the practical target.`,
  },

  // ── WiFi ───────────────────────────────────────────────────────────────────
  {
    slug: "wifi-6",
    term: "Wi-Fi 6",
    aka: ["802.11ax", "WiFi 6"],
    shortDef: "The current mainstream Wi-Fi standard — introduces OFDMA and improved MU-MIMO for better performance in high-density environments with many simultaneous connected devices.",
    categories: ["WiFi", "Networking"],
    related: ["wifi-6e", "wifi-7", "beamforming", "mu-mimo", "wpa3", "wlan"],
    content: `Wi-Fi 5 (802.11ac) was fast for individual devices. Wi-Fi 6 (802.11ax) is designed for environments where many devices are connected simultaneously — the office with 80 laptops, phones, and IoT devices all hitting the network at once. The headline speed improvement is real but secondary to the efficiency gains.

## Key technologies

**OFDMA (Orthogonal Frequency Division Multiple Access)** — where Wi-Fi 5 gave each transmission the full channel, OFDMA divides the channel into smaller resource units that can be allocated to different devices simultaneously. The access point can serve multiple devices with small payloads in the same time slot, rather than making each wait its turn.

**8x8 MU-MIMO** — Wi-Fi 6 extends multi-user MIMO to 8 simultaneous users and adds uplink MU-MIMO, meaning the AP can receive from multiple devices simultaneously, not just transmit to them.

**BSS Coloring** — reduces interference between neighboring access points by letting each device identify whether a signal is from its own BSS or a neighbor's. Overlapping signals from a neighbor are treated as less disruptive, reducing unnecessary backoff.

**Target Wake Time (TWT)** — devices negotiate a schedule for when to wake and communicate, allowing IoT devices and phones to sleep longer and conserve battery.

**WPA3 required** — Wi-Fi 6 certification requires WPA3 security.

## Real-world relevance

For a small office with 20 devices, the difference between Wi-Fi 5 and Wi-Fi 6 is barely noticeable. For a dense environment — an open-plan office, a conference center, a school — the efficiency gains are meaningful. If you're replacing APs today, buy Wi-Fi 6 (or 6E). The hardware cost difference is small, and you're not going backwards.`,
  },
  {
    slug: "wifi-6e",
    term: "Wi-Fi 6E",
    aka: ["802.11ax 6GHz", "WiFi 6E"],
    shortDef: "Extends Wi-Fi 6 into the 6GHz frequency band, adding up to 7 new 160MHz channels completely free of the congestion that plagues 2.4GHz and 5GHz in dense environments.",
    categories: ["WiFi", "Networking"],
    related: ["wifi-6", "wifi-7", "wlan", "beamforming"],
    content: `Wi-Fi 6E is Wi-Fi 6 with access to the newly opened 6GHz spectrum (5.925–7.125 GHz in the US, granted by the FCC in 2020). The technology is identical to Wi-Fi 6 — the difference is the frequency band it adds.

Why 6GHz matters: the 2.4GHz and 5GHz bands are full of competing networks. In a Manhattan office building, a site survey might show 70+ networks visible at 2.4GHz and dozens more at 5GHz. The 6GHz band is new — only Wi-Fi 6E and Wi-Fi 7 devices can use it, so it's clean, uncongested spectrum.

The 6GHz band also supports wider channels. In 5GHz, using 160MHz channels is often impractical because there are only one or two non-overlapping 160MHz channels available. In 6GHz, there are seven 160MHz channels, enabling high-throughput connections without channel conflicts.

The trade-off: 6GHz has shorter range than 2.4GHz or 5GHz. Higher frequencies attenuate more quickly through walls and obstructions. 6GHz is a within-room band in practice — useful for high-density coverage where APs are close to clients, less useful for long-range coverage through multiple walls.

In practice, Wi-Fi 6E APs are tri-band (2.4GHz + 5GHz + 6GHz) and steer capable clients to 6GHz while maintaining backward compatibility on the other bands.`,
  },
  {
    slug: "wifi-7",
    term: "Wi-Fi 7",
    aka: ["802.11be", "WiFi 7", "Extremely High Throughput"],
    shortDef: "The newest Wi-Fi standard — delivers up to 46Gbps theoretical throughput via 320MHz channels, multi-link operation across bands, and 4K-QAM.",
    categories: ["WiFi", "Networking"],
    related: ["wifi-6e", "wifi-6", "wlan"],
    content: `Wi-Fi 7 raises the ceiling substantially over Wi-Fi 6E, primarily through three mechanisms:

**320MHz channels** — double the channel width of Wi-Fi 6E's 160MHz maximum. Available only in 6GHz (the 5GHz band isn't wide enough). Wider channels = more data per transmission.

**Multi-Link Operation (MLO)** — Wi-Fi 7 clients and APs can simultaneously transmit and receive across multiple frequency bands (2.4GHz + 5GHz + 6GHz) as a single bonded connection. This both increases throughput and improves reliability — if one band is congested or experiences interference, traffic can shift to another without disruption.

**4096-QAM (4K-QAM)** — encodes more bits per symbol than Wi-Fi 6's 1024-QAM, increasing theoretical throughput by ~20% under ideal signal conditions.

For most organizations buying APs today: Wi-Fi 6E is the practical choice. Wi-Fi 7 hardware is available but early-cycle, clients are not yet widespread, and the real-world gains over 6E are modest except in specific high-density or AV-intensive environments. If you're building for a 5-year horizon in a demanding environment, Wi-Fi 7 is reasonable. For typical office refreshes, Wi-Fi 6E is the right call.`,
  },
  {
    slug: "beamforming",
    term: "Beamforming",
    shortDef: "Directs a Wi-Fi signal toward a specific client device rather than broadcasting equally in all directions, improving signal strength and reliability for that device.",
    categories: ["WiFi", "Networking"],
    related: ["mimo", "mu-mimo", "wifi-6", "wlan"],
    content: `A standard antenna radiates in all directions — omnidirectional. Beamforming uses multiple antennas and signal processing to focus the RF energy toward a specific client, concentrating the signal where it's needed rather than wasting it in directions with no devices.

The AP probes the client to learn its location relative to the antenna array, then adjusts the phase and amplitude of each antenna's signal so they constructively interfere in the direction of the client and destructively interfere elsewhere.

The result: stronger signal at the client, less interference for neighboring devices, and better performance at the edges of coverage — where a client would otherwise be at the limit of usable signal.

Beamforming works in combination with MU-MIMO: the AP can simultaneously form separate beams toward multiple clients, each receiving a focused signal rather than competing for omnidirectional broadcast capacity.

Beamforming is a standard feature in all Wi-Fi 5, 6, and 7 access points, often branded by vendors under proprietary names (Cisco's Beamflex, Ruckus's ChannelFly, etc.). Explicit beamforming (where the client provides feedback) is more accurate than implicit beamforming (where the AP estimates direction); both are in common use.`,
  },
  {
    slug: "mimo",
    term: "MIMO",
    aka: ["Multiple Input Multiple Output"],
    shortDef: "Uses multiple antennas on both transmitter and receiver to send multiple data streams simultaneously over the same frequency, multiplying throughput without additional spectrum.",
    categories: ["WiFi", "Networking"],
    related: ["mu-mimo", "beamforming", "wifi-6", "wlan"],
    content: `MIMO exploits a phenomenon called multipath propagation. In a real RF environment, signals bounce off walls, furniture, and people, arriving at the receiver via multiple paths with different delays. In traditional single-antenna systems, this causes interference. MIMO's multiple antennas distinguish these paths and use them to carry separate data streams simultaneously.

A 4x4 MIMO link has 4 transmit and 4 receive antennas, capable of 4 simultaneous spatial streams. Each stream operates independently — a 4x4:4 MIMO AP running at 600Mbps per stream delivers 2.4Gbps aggregate to a single client with a matching 4-stream NIC.

MIMO notation: the first number is transmit antennas, the second is receive antennas, and the third (if shown) is the maximum spatial streams. A 4x4:3 radio has 4 transmit and 4 receive antennas but a maximum of 3 spatial streams.

In practice, most client devices have 2 or fewer spatial streams (laptops with 2x2 MIMO, phones often with 1x1 or 2x2). The AP can have 4 or 8 transmit/receive chains, but the client is often the bottleneck on spatial stream count.

MIMO is the foundation for MU-MIMO: once an AP can handle multiple spatial streams, it can direct different streams to different clients simultaneously.`,
  },
  {
    slug: "mu-mimo",
    term: "MU-MIMO",
    aka: ["Multi-User MIMO", "Multi-User Multiple Input Multiple Output"],
    shortDef: "Extends MIMO to serve multiple client devices simultaneously rather than one at a time, effectively multiplying the useful throughput of a single access point.",
    categories: ["WiFi", "Networking"],
    related: ["mimo", "beamforming", "wifi-6", "wlan"],
    content: `Standard MIMO (SU-MIMO, single-user) sends multiple streams but all to one device at a time. The AP rotates through clients sequentially. MU-MIMO allows the AP to transmit to multiple clients simultaneously using separate spatial streams directed by beamforming.

Wi-Fi 5 introduced downlink MU-MIMO with up to 4 simultaneous users. Wi-Fi 6 extended this to 8 simultaneous users and added uplink MU-MIMO — meaning clients can also transmit to the AP simultaneously, not just receive.

The practical benefit is clearest in high-density environments. In a conference room with 20 devices, an AP without MU-MIMO serves each device in sequence — the effective time each device gets is 1/20th of the total. MU-MIMO can serve 4 or 8 devices simultaneously, substantially reducing wait time and improving the aggregate user experience.

The gains aren't unlimited. MU-MIMO requires clients to support it (all modern devices do), requires clear spatial separation between clients (beamforming handles this), and the channel must be clean enough for accurate beam formation. In ideal conditions the gains are substantial; in very dense or heavily interfered environments the benefit decreases.`,
  },
  {
    slug: "wap",
    term: "WAP",
    aka: ["Wireless Access Point", "Access Point", "AP"],
    shortDef: "The device that creates a Wi-Fi network — bridges wireless clients to the wired Ethernet infrastructure and is managed individually or via a controller.",
    categories: ["WiFi", "Networking"],
    related: ["wlan", "wifi-6", "beamforming", "poe", "vlan"],
    content: `An access point does one job: it translates between wireless (Wi-Fi) and wired (Ethernet) communication. Wireless clients associate with the AP, and the AP forwards their traffic over its Ethernet uplink to the network.

## Standalone vs controller-managed

**Standalone APs** — configured individually via web interface or CLI. Fine for very small deployments (1–3 APs in a small office) but don't scale. No central visibility, no coordinated channel management.

**Controller-managed APs** — a central controller (physical or cloud) manages all APs as a fleet. Channel selection, power, client roaming, RF optimization, and firmware updates are all managed centrally. The right choice for any deployment with more than a handful of APs. UniFi, Cisco Meraki, Aruba, and Ruckus all follow this model.

## Powering APs

APs are almost universally powered via PoE — a PoE switch port or injector powers the AP over the Ethernet cable, eliminating the need for a power outlet at the ceiling. This is one of the primary use cases driving PoE+ adoption; modern dual-radio 6E APs may need 25W or more.

## AP placement and density

AP coverage is a balance between coverage area (fewer APs, more power, wider range) and capacity (more APs, lower power, each AP serves fewer clients more efficiently). In a high-density environment, the goal is usually capacity rather than coverage — more APs operating at lower transmit power, each serving a smaller area with better per-client performance.`,
  },
  {
    slug: "wifi-roaming",
    term: "Wi-Fi Roaming",
    shortDef: "The process by which a wireless device transitions from one access point to another as it moves through a space, ideally without dropping connections or interrupting ongoing sessions.",
    categories: ["WiFi", "Networking"],
    related: ["wap", "wlan", "wifi-6"],
    content: `In a multi-AP environment, a device doesn't stay connected to one AP forever — as it moves, signal quality to the current AP degrades and a nearer AP becomes the better choice. Roaming is the handoff process.

## Sticky client problem

The roaming decision is made by the client, not the AP. Some clients are "sticky" — they hold onto a weak signal from a distant AP rather than roaming to a closer one, even when the closer AP would give them much better performance. This is a common cause of poor Wi-Fi experience in larger spaces.

Modern APs combat this through 802.11v (BSS Transition Management), which allows the AP to suggest to a client that it roam to a better AP, and 802.11k (Neighbor Reports), which lets the client discover nearby APs without scanning. Controllers automate this.

## 802.11r — Fast BSS Transition

Standard roaming requires the client to fully re-authenticate with the new AP, which can take several hundred milliseconds and breaks VoIP calls and time-sensitive applications. 802.11r (Fast BSS Transition) pre-caches authentication information so the handoff takes milliseconds rather than hundreds of milliseconds. Essential for voice and video in roaming environments.

## SSID consistency

For seamless roaming, all APs serving the same wireless network must broadcast the same SSID with the same security settings. Clients roam between APs transparently because from their perspective it's all the same network.`,
  },
  {
    slug: "wlan",
    term: "WLAN",
    aka: ["Wireless LAN", "Wireless Local Area Network"],
    shortDef: "The wireless portion of a local area network — the collection of access points, SSIDs, and RF infrastructure that provides wireless connectivity within a physical space.",
    categories: ["WiFi", "Networking"],
    related: ["wap", "lan", "wifi-6", "vlan"],
    content: `WLAN and Wi-Fi are often used interchangeably, but WLAN is the broader term. A WLAN is the wireless network layer as a whole: the access points, their configuration, the SSIDs they broadcast, and how they connect back to the wired network.

In a properly designed network, the WLAN is a functional extension of the wired LAN rather than a separate thing. Wireless clients connect to an AP and end up on the same VLAN they'd be on if they plugged in with a cable. The wireless network should be transparent — applications shouldn't know or care whether traffic is coming from wired or wireless clients.

The WLAN is typically segmented: a corporate SSID for managed devices (on the corporate VLAN), a guest SSID for visitors (on an isolated VLAN with internet access only), and possibly a separate SSID for IoT devices. Each SSID maps to a VLAN; the AP tags traffic appropriately before it hits the switch.`,
  },

  // ── Deferred Networking ────────────────────────────────────────────────────
  {
    slug: "voip",
    term: "VoIP",
    aka: ["Voice over IP", "IP Telephony"],
    shortDef: "Transmits telephone calls as digital data packets over an IP network rather than dedicated telephone circuits — the technology behind virtually all modern business phone systems.",
    categories: ["Networking"],
    related: ["voice-vlan", "qos", "poe", "lldp"],
    content: `Traditional phone systems use circuit-switched networks — a dedicated physical path for the duration of each call. VoIP converts voice to IP packets and routes them like any other network traffic, sharing infrastructure with data.

The business case is straightforward: once you have an IP network, adding voice costs primarily the phones and a software platform, not a separate telephone infrastructure. Calls between offices over your WAN or internet connection are effectively free. International calls are dramatically cheaper.

VoIP quality depends on the network. Voice is latency and jitter sensitive — packets that arrive too late or out of sequence cause audible degradation. The requirements that make this work:

**QoS** — voice traffic must be prioritized over bulk data. A large file transfer sharing bandwidth with a VoIP call will degrade call quality without QoS enforcement.

**Voice VLAN** — IP phones belong in a dedicated VLAN, both for QoS policy application and for security isolation.

**LLDP-MED** — phones learn their VLAN assignment from the switch via LLDP-MED advertisement, enabling plug-and-play deployment.

**PoE** — IP phones are almost universally PoE-powered.

Common VoIP platforms: Microsoft Teams Phone, RingCentral, Zoom Phone, Cisco Unified Communications, 3CX. All follow the same underlying model — SIP (Session Initiation Protocol) for call setup and RTP (Real-time Transport Protocol) for audio delivery.`,
  },
  {
    slug: "stacking",
    term: "Stacking",
    aka: ["Switch Stacking", "Stack"],
    shortDef: "Connects multiple physical switches so they operate as a single logical switch with one management interface, one configuration, and shared MAC and IP address tables.",
    categories: ["Networking", "Hardware"],
    related: ["lacp", "access-switch", "vlan"],
    content: `A switch stack takes 2–8 (or more, depending on platform) physical switches and presents them to the network as one. A single IP address manages all of them. VLANs, port configurations, and firmware are managed in one place. If you add a port to VLAN 10, you do it once and it applies wherever that port lives in the stack.

The physical connection between stack members uses a dedicated stacking cable or high-speed backplane, separate from the uplink ports. Traffic between stack members transits this connection invisibly.

## Stacking vs chassis

Enterprise alternatives are modular chassis switches — a single physical chassis with removable line cards. Stacking achieves similar management simplicity at lower cost using standard fixed switches. Chassis provide higher backplane bandwidth and more flexible port density, but at significantly higher cost.

## Resilience

Stacked switches elect a master unit that handles management. If the master fails, another unit takes over with minimal disruption. In high-availability designs, the stack's uplinks can use LACP across multiple stack members — a link aggregation group that physically spans two switches, so a single switch failure doesn't disrupt the uplinks.`,
  },
  {
    slug: "access-switch",
    term: "Access Switch",
    aka: ["Edge Switch", "Access Layer Switch"],
    shortDef: "The switch that end devices — computers, phones, APs, printers — plug into directly. Sits at the edge of the network and connects up to a distribution or core switch.",
    categories: ["Networking", "Hardware"],
    related: ["vlan", "poe", "lacp", "idf"],
    content: `The three-layer network model divides switches into access, distribution, and core layers. Access switches are the bottom layer — the gear in IDFs and telecom closets that devices actually connect to. Distribution and core switches handle higher-speed aggregation and routing.

Access switches are characterized by:

**High port count** — 24 or 48 downlink ports, typically at 1Gbps or 2.5Gbps for endpoint connectivity.

**PoE** — most access switches today are PoE or PoE+ capable, powering phones, APs, and cameras from the switch port.

**Uplinks** — 2–4 higher-speed uplink ports (10G or 25G) for connecting back to the distribution or core switch, often in an LACP bundle for redundancy and bandwidth.

**VLANs and QoS** — access switches enforce port-level VLAN assignment and apply QoS markings to prioritize voice and video.

**802.1X** — access switches can enforce port-based network access control, blocking unauthenticated devices.

In small and mid-size organizations, the three-layer model often collapses to two: access switches connect directly to a core switch or firewall, skipping a dedicated distribution layer. The principles remain the same.`,
  },

  // ── RAID + Power hardware ──────────────────────────────────────────────────
  {
    slug: "raid",
    term: "RAID",
    aka: ["Redundant Array of Independent Disks"],
    shortDef: "Combines multiple drives into a single logical volume for redundancy, performance, or both. The RAID level determines how data is distributed and how many drives can fail before data is lost.",
    categories: ["Hardware", "Virtualization"],
    related: ["hdd", "ssd", "nvme", "virtual-machine"],
    content: `RAID uses multiple physical drives together, presenting them as one volume to the operating system. Depending on the level, RAID can protect against drive failures, increase read/write throughput, or both — at the cost of some usable capacity.

## RAID 0 — Striping, no redundancy

Data is striped across all drives in equal chunks. A read or write accesses multiple drives simultaneously, delivering the highest throughput of any RAID level. Usable capacity equals the sum of all drives.

The catch: zero redundancy. One drive failure loses everything. RAID 0 is appropriate only for scratch space, caches, or workloads where data loss is acceptable and performance is critical.

![Diagram showing RAID 0 striping data blocks across two drives with no redundancy — maximum performance, no fault tolerance](/images/glossary/raid-0.png)

## RAID 1 — Mirroring

Every drive has an exact mirror. Reads can come from either drive; writes go to both. Usable capacity is 50% — two 8TB drives give you 8TB usable. A single drive failure is fully tolerated; the mirror continues serving data.

RAID 1 is simple, reliable, and has excellent read performance. Write speed is limited to the slower of the two drives. Best for OS volumes, critical databases, and situations where simplicity and reliability matter more than capacity efficiency.

![Diagram showing RAID 1 mirroring identical data across two drives — one drive can fail with no data loss](/images/glossary/raid-1.png)

## RAID 5 — Striping with distributed parity

Data and parity information are striped across three or more drives. Parity allows any single drive to be reconstructed if it fails. Usable capacity is n−1 drives — three 8TB drives gives 16TB usable.

RAID 5 balances capacity, performance, and redundancy. Read performance is excellent; write performance is lower due to parity calculation. Rebuild times after a drive failure are long on large drives, and during rebuild a second failure would be catastrophic. For anything mission-critical, RAID 6 is the safer choice.

![Diagram showing RAID 5 distributing data and parity blocks across three drives — any single drive can fail and be rebuilt from parity](/images/glossary/raid-5.png)

## RAID 6 — Striping with double distributed parity

Like RAID 5, but with two independent parity blocks distributed across the drives. Any two drives can fail simultaneously without data loss. Usable capacity is n−2 drives — four 8TB drives gives 16TB usable.

RAID 6 is the right choice for production storage that matters. The write overhead is slightly higher than RAID 5, but the additional protection against dual-drive failure is worth it — especially given that drives in the same array often fail in close succession (the stress of one failure and the subsequent long rebuild creates conditions for a second). For NAS arrays with large drives, RAID 6 is our standard recommendation.

![Diagram showing RAID 6 distributing data and two sets of parity blocks across four drives — any two drives can fail simultaneously without data loss](/images/glossary/raid-6.png)

## RAID 10 — Mirroring + striping

RAID 10 (sometimes written RAID 1+0) combines RAID 1 mirroring with RAID 0 striping. Data is mirrored across pairs of drives, and those mirror pairs are then striped. Minimum four drives; usable capacity is 50% of total.

RAID 10 delivers the highest read performance of any redundant RAID level, fast rebuilds (only the mirrored pair needs rebuilding, not the full array), and can survive multiple drive failures as long as no mirror pair loses both drives. It's the choice for high-performance, high-reliability workloads: busy databases, VM datastores, high-throughput storage. The cost is efficiency — you're paying for half your raw capacity.

![Diagram showing RAID 10 combining two RAID 1 mirror pairs into a RAID 0 stripe — high performance and redundancy at the cost of 50% usable capacity](/images/glossary/raid-10.png)

## Choosing a RAID level

| Level | Min drives | Usable capacity | Drive failures tolerated | Best for |
|---|---|---|---|---|
| RAID 0 | 2 | 100% | 0 | Scratch space, caches |
| RAID 1 | 2 | 50% | 1 | OS volumes, critical small datasets |
| RAID 5 | 3 | n−1 | 1 | General file storage, moderate write loads |
| RAID 6 | 4 | n−2 | 2 | Production NAS, large drives, critical data |
| RAID 10 | 4 | 50% | 1 per mirror pair | Databases, high-performance VM storage |

RAID is not a backup. A RAID array protects against drive failure; it does not protect against accidental deletion, file corruption, ransomware, or catastrophic hardware failure. Maintain separate backups regardless of RAID level.`,
  },
  {
    slug: "ups",
    term: "UPS",
    aka: ["Uninterruptible Power Supply"],
    shortDef: "Provides battery backup that keeps equipment running through a brief power outage and allows for a controlled shutdown if power isn't restored.",
    categories: ["Power", "Hardware"],
    related: ["pdu", "power-redundancy", "nema-connector"],
    content: `A UPS sits between the utility power source and the equipment it protects, storing energy in a battery bank. When utility power fails or fluctuates outside acceptable range, the UPS switches to battery — ideally fast enough that connected equipment never even sees a power interruption.

## UPS types

**Standby (offline)** — the battery charger is the only active component during normal operation; the inverter kicks in on power loss. Transfer time is typically 2–10ms. Least expensive. Adequate for basic equipment protection but not the right choice for servers with strict transfer time requirements.

**Line-interactive** — includes an automatic voltage regulator (AVR) that corrects voltage sags and surges without switching to battery. Transfer time 2–4ms. The right choice for most server room and network closet applications.

**Online double-conversion** — all power runs through the inverter continuously, so there is zero transfer time on power loss — the equipment is already running off the inverted battery output. Most expensive, slightly less efficient, but appropriate for the highest-availability environments and sensitive equipment.

## Sizing

UPS capacity is measured in VA (volt-amperes) and watts. The difference matters: a 1500VA UPS rated at 1200W can support loads up to 1200W continuously. Don't exceed 80% of rated capacity for continuous loads.

Runtime on battery depends on load and battery capacity. A 1500VA UPS at full load might run 5 minutes. At 50% load it might run 15–20 minutes. The goal is usually to bridge brief outages and provide enough time for a clean shutdown, not to run indefinitely.

## Management

Enterprise UPS units include network management cards (NMC) or USB/serial interfaces that allow monitoring battery status, load percentage, and estimated runtime, and can trigger graceful shutdowns of connected servers before the battery is exhausted. This is essential in any unattended server room.

## Placement in the power chain

In a typical data room: utility power → transfer switch → UPS → PDU → equipment. The UPS handles brief outages; a generator provides extended runtime beyond battery capacity.`,
  },
  {
    slug: "pdu",
    term: "PDU",
    aka: ["Power Distribution Unit", "Rack PDU", "Intelligent PDU"],
    shortDef: "Distributes power from a single feed to multiple devices in a rack. The power strip for server infrastructure — built for the density, reliability, and monitoring requirements of production environments.",
    categories: ["Power", "Hardware"],
    related: ["ups", "power-redundancy", "nema-connector", "rack-unit", "three-phase-power"],
    content: `A rack PDU takes one input (from a UPS, breaker, or generator transfer switch) and distributes it across many output receptacles — typically C13 and C19 IEC outlets, the standard connectors on server and networking equipment.

## PDU tiers

**Basic PDU** — passive distribution, no intelligence. Power comes in, power goes out. No monitoring. Appropriate only where cost is the dominant concern.

**Metered PDU** — displays total input current draw on a small display. Lets you see how loaded a circuit is without a clamp meter. Important for avoiding tripped breakers.

**Monitored PDU** — network-connected, reports per-PDU current, voltage, and power consumption to a management system. Lets you track load trends, receive alerts before a circuit trips, and correlate power consumption with equipment.

**Switched (intelligent) PDU** — everything in monitored plus per-outlet remote on/off and reboot. Allows you to remotely power cycle a hung device without physically accessing the rack. Per-outlet current monitoring shows exactly what each device draws. The right choice for production server rooms where remote management matters.

## Input configuration

**Single-phase input** — standard for small deployments. A NEMA L5-20 or L5-30 input (120V) or L6-20/L6-30 (208V) is typical.

**Three-phase input** — for high-density racks. A single three-phase PDU can distribute 10kW or more across balanced phases. A three-phase NEMA L15-30 or L21-30 input connects to the breaker panel or transfer switch.

## Dual PDU / A-B redundancy

Production racks typically have two PDUs — PDU A and PDU B — fed from independent circuits or separate UPS units. Each server with dual power supplies connects one PSU to PDU A, the other to PDU B. If any single PDU, circuit, or UPS fails, every device continues running on its remaining power supply.

This A-B redundancy model is the standard for any environment where uptime matters. Don't share both PSUs of a critical server on the same PDU.

## Zero-U mounting

PDUs are often mounted vertically in the side channels of a rack rather than occupying rack units. This "zero-U" mounting preserves full rack unit capacity for equipment while keeping power distribution organized and accessible.`,
  },

  // ── Virtualization & Storage ───────────────────────────────────────────────
  {
    slug: "hyper-v",
    term: "Hyper-V",
    categories: ["Virtualization", "Microsoft"],
    related: ["virtual-machine", "vmware", "esxi", "iscsi", "raid"],
    shortDef: "Hyper-V is Microsoft's native hypervisor, built into Windows Server and Windows 10/11 Pro, for creating and running virtual machines on a physical host.",
    content: `Hyper-V ships with Windows Server and Windows 10/11 Pro at no additional cost — no separate license required. It creates a thin software layer between the hardware and the operating systems running on it, allowing multiple VMs to share a single physical machine's CPU, RAM, storage, and network.

![Diagram showing Hyper-V architecture with the hypervisor layer between physical hardware and multiple virtual machines](/images/glossary/hyper-v-architecture.png)

## Key capabilities

**Live Migration** — move a running VM from one Hyper-V host to another without any downtime. Essential for maintenance windows and load balancing across a cluster.

**Hyper-V Replica** — asynchronous replication of VMs to a secondary host at a remote site. Provides a recovery point for disaster recovery without third-party software.

**Integration Services** — drivers and utilities installed in guest VMs that improve performance and enable features like time sync, mouse integration, and dynamic memory.

**Checkpoints (snapshots)** — point-in-time captures of VM state that can be reverted instantly. Useful before risky changes.

![Diagram showing Hyper-V Integration Services communication between host OS and guest VMs](/images/glossary/hyper-v-integration.png)

## Hyper-V vs VMware

Hyper-V is the right choice for organizations heavily invested in the Microsoft stack — it integrates natively with Active Directory, SCCM, and Azure. Management is via Hyper-V Manager or Windows Admin Center for small deployments, or System Center VMM for larger ones.

VMware (ESXi) has a more mature ecosystem, better third-party tool support, and vCenter for multi-host management. For mixed environments or large virtualization deployments, VMware is often the stronger platform. For Windows-centric SMBs, Hyper-V is a perfectly capable and cost-effective choice.`,
  },
  {
    slug: "iscsi",
    term: "iSCSI",
    aka: ["Internet Small Computer System Interface"],
    categories: ["Virtualization", "Networking", "Hardware"],
    related: ["virtual-machine", "hyper-v", "vmware", "jumbo-frames", "lacp", "raid"],
    shortDef: "iSCSI is a storage networking protocol that carries SCSI storage commands over standard TCP/IP Ethernet, allowing servers to access block-level storage on a NAS or SAN as if it were a locally attached disk.",
    content: `iSCSI makes networked storage look and behave like a locally connected drive to the operating system. A server running an iSCSI initiator (software built into Windows, Linux, and VMware ESXi) sends SCSI commands over Ethernet to an iSCSI target on a storage device (a Synology NAS, a dedicated SAN, or any iSCSI-capable storage array). The storage array presents a LUN (logical unit number) — effectively a virtual disk — that the server formats and uses like any other volume.

![Diagram showing iSCSI initiator on a server communicating with iSCSI target on a storage device over a TCP/IP Ethernet network](/images/glossary/iscsi-architecture.png)

## Why iSCSI matters for virtualization

iSCSI is the most common protocol for shared storage in SMB and mid-market VMware and Hyper-V environments. Shared storage is what makes live migration and VM clustering possible — multiple hypervisor hosts access the same datastore, so a VM can move between hosts without copying its disk files.

## Performance requirements

For reliable iSCSI performance, especially in production environments:

**Dedicated VLAN** — iSCSI traffic should be isolated from general data traffic on its own VLAN (typically unrouted, L2-only).

**Jumbo frames** — enable 9000-byte MTU end-to-end (every switch port, every NIC in the path). Reduces CPU overhead for large block transfers.

**LACP / multipathing** — iSCSI multipathing (MPIO on Windows, native multipathing in ESXi) uses multiple network paths for both redundancy and throughput.

**10G minimum** — 1Gbps iSCSI is workable for light loads but shows strain under heavy VM I/O. 10G is the practical baseline for production use.`,
  },
  {
    slug: "fibre-channel",
    term: "Fibre Channel",
    aka: ["FC", "SAN", "Fibre Channel SAN"],
    categories: ["Virtualization", "Hardware", "Networking"],
    related: ["iscsi", "raid", "virtual-machine"],
    shortDef: "Fibre Channel is a high-speed networking protocol purpose-built for storage area networks (SANs), offering lower latency and higher throughput than iSCSI but requiring dedicated FC hardware and switches.",
    content: `Fibre Channel predates iSCSI and was the dominant enterprise SAN protocol for decades. It runs on dedicated FC infrastructure — FC host bus adapters (HBAs) in servers, FC switches (not standard Ethernet switches), and FC-attached storage arrays — rather than sharing Ethernet with other network traffic.

The result is deterministic, low-latency block storage access that doesn't compete with other network traffic. In the largest enterprise environments and data centers, FC SANs remain common for the most latency-sensitive workloads.

## FC vs iSCSI

For most organizations today, iSCSI is the practical choice:

- iSCSI runs on existing 10/25G Ethernet infrastructure
- No separate FC switches or HBAs required
- Software initiators are free and built into all major OSes
- Performance gap with FC has narrowed significantly at 10/25G

Fibre Channel makes sense when:
- You're already invested in FC infrastructure
- You have extreme latency or throughput requirements
- Your storage vendor's FC support is better than their iSCSI support

New greenfield deployments rarely choose FC unless there's a compelling workload reason. iSCSI (or NVMe-oF for highest performance) is the current direction for shared block storage.`,
  },
  {
    slug: "ecc-memory",
    term: "ECC Memory",
    aka: ["Error-Correcting Code Memory", "ECC RAM"],
    categories: ["Hardware"],
    related: ["rdimm", "unbuffered-ram", "cpu", "virtual-machine"],
    shortDef: "ECC (Error-Correcting Code) memory detects and corrects single-bit memory errors in real time, preventing data corruption that could crash a server or silently corrupt data. Required in all production servers.",
    content: `Standard RAM (non-ECC) has no mechanism to detect memory errors. A cosmic ray or electrical noise can flip a bit — in a workstation this might cause an occasional crash, but in a server running a database or hypervisor it can cause silent data corruption without any indication something went wrong.

ECC memory adds extra bits per word to store a checksum. The memory controller checks every read, can detect up to two simultaneous bit errors, and can silently correct single-bit errors without the system ever knowing. This is called SECDED — Single Error Correct, Double Error Detect.

ECC is a requirement, not an option, for any production server: database servers, file servers, hypervisor hosts, NAS systems. The cost premium over non-ECC is small and the risk of running production workloads without it is not worth taking.

Consumer processors and motherboards (Intel Core, AMD Ryzen) often don't support ECC even when the memory module supports it — ECC requires explicit support from the CPU and memory controller. Server platforms (Intel Xeon, AMD EPYC) universally support it.`,
  },
  {
    slug: "rdimm",
    term: "RDIMM",
    aka: ["Registered DIMM", "Registered Memory", "Buffered DIMM"],
    categories: ["Hardware"],
    related: ["ecc-memory", "unbuffered-ram", "cpu"],
    shortDef: "An RDIMM (Registered DIMM) is a server memory module with a register chip that buffers the command and address signals between the CPU memory controller and the DRAM chips, allowing higher memory capacity per channel.",
    content: `As memory capacity per channel increases, the electrical load on the CPU's memory controller grows — more chips mean more capacitance and signal degradation. RDIMMs solve this by placing a register (also called a buffer) on the memory module that re-drives the command and address signals, reducing the load on the controller.

The result: servers with RDIMMs can support more DIMMs per channel and higher total memory capacity. A server platform supporting 8 DIMM slots per channel with RDIMMs can populate all 8 slots; the same platform with UDIMMs might be limited to 2 per channel at full speed.

RDIMMs are the standard for enterprise servers — Intel Xeon and AMD EPYC platforms are designed around them. They always include ECC. The register adds one clock cycle of latency over UDIMMs, which is negligible in practice for server workloads.

LRDIMMs (Load-Reduced DIMMs) are a variant that adds a buffer for data signals as well as address/command, enabling even higher capacities per channel. Used in the highest-density memory configurations.`,
  },
  {
    slug: "unbuffered-ram",
    term: "Unbuffered RAM",
    aka: ["UDIMM", "Unbuffered DIMM", "Non-ECC RAM"],
    categories: ["Hardware"],
    related: ["ecc-memory", "rdimm", "cpu"],
    shortDef: "Unbuffered RAM (UDIMM) connects directly to the CPU memory controller without a register chip, offering lower latency but limiting the number of modules per channel — standard in consumer and workstation PCs, not used in production servers.",
    content: `UDIMMs have no intermediate buffer between the DRAM chips and the CPU memory controller. The controller drives the signals directly. This gives UDIMMs one advantage: slightly lower latency than RDIMMs, since there's no register cycle in the path.

The trade-off is capacity and scalability. Without a register to re-drive signals, the electrical load limits how many DIMMs can be populated per channel — typically 1-2 slots at rated speed. This caps total memory capacity well below what RDIMMs allow on the same platform.

UDIMMs are standard in consumer PCs and workstations — platforms that don't need 512GB or 1TB of RAM and where the small latency advantage matters more than scalability. ECC UDIMMs exist (some Xeon platforms and workstation boards support them) but are less common than ECC RDIMMs.

For server and hypervisor workloads, RDIMMs with ECC are the correct choice. UDIMMs should not be used in production servers.`,
  },

  // ── Protocols ──────────────────────────────────────────────────────────────
  {
    slug: "tcp",
    term: "TCP",
    aka: ["Transmission Control Protocol"],
    categories: ["Networking"],
    related: ["udp", "icmp", "tls", "https", "iscsi"],
    shortDef: "TCP (Transmission Control Protocol) is a connection-oriented transport protocol that guarantees reliable, ordered delivery of data between two endpoints. It's the foundation of web, email, and file transfer traffic.",
    content: `TCP sits at the transport layer of the network stack, above IP and below application protocols like HTTP and SMTP. It takes a stream of data from an application and breaks it into segments, each numbered for reassembly, then transmits them over IP — which doesn't guarantee delivery or order.

![Diagram showing the four-layer TCP/IP model: Application, Transport (TCP/UDP), Internet (IP), and Network Access layers](/images/glossary/tcp-layers.png)

## How TCP establishes a connection

Before any data is sent, TCP performs a three-way handshake to establish a connection:

1. **SYN** — the client sends a synchronization request
2. **SYN-ACK** — the server acknowledges and sends its own sync
3. **ACK** — the client acknowledges the server's sync

Only after this handshake does data flow. This setup provides both endpoints with sequence numbers used to detect lost packets and request retransmission.

![Diagram showing the TCP three-way handshake: SYN, SYN-ACK, ACK sequence between client and server](/images/glossary/tcp-handshake.png)

## TCP vs UDP

TCP's reliability has a cost: latency. The handshake, acknowledgments, and retransmission add overhead. For applications that need every byte delivered correctly — HTTP, HTTPS, email, file transfer, SSH, iSCSI — TCP is the right choice. For applications that prioritize speed over guaranteed delivery (DNS, VoIP, video streaming, gaming), UDP avoids the overhead by dropping the guarantees.

TCP also handles flow control (matching transmission speed to receiver capacity) and congestion control (backing off when the network is congested), which makes it resilient to varying network conditions.`,
  },
  {
    slug: "udp",
    term: "UDP",
    aka: ["User Datagram Protocol"],
    categories: ["Networking"],
    related: ["tcp", "icmp", "dns", "voip"],
    shortDef: "UDP (User Datagram Protocol) is a connectionless transport protocol that sends datagrams without establishing a connection or guaranteeing delivery — trading reliability for speed and lower overhead.",
    content: `Where TCP establishes a connection and ensures every byte arrives in order, UDP fires packets and moves on. There's no handshake, no acknowledgment, no retransmission of lost packets. If a packet is lost, it's gone.

This sounds like a flaw, but for many applications it's the correct trade-off. A VoIP call doesn't benefit from TCP retransmission — a retransmitted voice packet arriving 200ms late is worse than just dropping it and moving on. DNS lookups are a single small request and response; adding TCP handshake overhead doubles the latency. Video streaming can tolerate occasional dropped frames without perceptible quality loss.

Applications that use UDP: DNS, DHCP, VoIP (RTP), video streaming, online gaming, SNMP, NTP, RADIUS, TFTP.

UDP's simplicity also makes it the building block for protocols that implement their own reliability selectively. QUIC (the transport under HTTP/3) is built on UDP and adds connection establishment and reliability only where needed, achieving TCP's reliability with lower latency.

UDP has no flow control or congestion control, which is why volumetric DDoS attacks frequently use UDP — it's easy to flood a target with UDP packets from spoofed source addresses.`,
  },
  {
    slug: "icmp",
    term: "ICMP",
    aka: ["Internet Control Message Protocol", "Ping", "Traceroute"],
    categories: ["Networking"],
    related: ["tcp", "udp", "latency", "ipv4"],
    shortDef: "ICMP (Internet Control Message Protocol) is a network-layer protocol used for diagnostics and error reporting — best known as the protocol behind the ping command.",
    content: `ICMP is how network devices communicate about network conditions rather than carrying application data. It reports errors (destination unreachable, time exceeded, fragmentation needed) and supports diagnostic tools.

## Ping

Ping uses ICMP Echo Request and Echo Reply messages to test reachability and measure round-trip time. Type \`ping 8.8.8.8\` and you're sending ICMP Echo Requests to Google's DNS server and measuring how long replies take. It's the most basic and universal network diagnostic tool.

## Traceroute

Traceroute uses ICMP Time Exceeded messages to map the path packets take across the network. It sends packets with increasing TTL values, causing each router in the path to respond when it decrements TTL to zero. The result is a hop-by-hop map of the route with latency at each hop.

## Blocking ICMP

Some security policies block ICMP at the firewall, reasoning that ICMP reveals network topology. This breaks ping and traceroute diagnostics and should be approached carefully — ICMP is too useful for troubleshooting to block entirely. Blocking inbound ICMP to sensitive hosts while allowing outbound and internal ICMP is a more practical policy.`,
  },
  {
    slug: "snmp",
    term: "SNMP",
    aka: ["Simple Network Management Protocol"],
    categories: ["Networking"],
    related: ["syslog", "ntp", "vlan"],
    shortDef: "SNMP (Simple Network Management Protocol) is the standard protocol for monitoring and managing network devices — querying switches, routers, UPSes, and servers for performance data and receiving alerts when something goes wrong.",
    content: `SNMP lets management software poll network devices for status information and receive unsolicited alerts (traps) when something notable happens. A switch reports interface error counts, traffic utilization, and CPU load. A UPS reports battery level and input voltage. A server reports disk health and fan status.

SNMP uses a hierarchical data model called a MIB (Management Information Base) — a structured list of every variable the device exposes. Each variable has an OID (Object Identifier). A monitoring platform knows which OIDs to query for which data.

## SNMP versions

**SNMPv1 and v2c** — community string authentication, effectively a cleartext password. Still widely used; adequate on a managed network but not internet-exposed. v2c adds bulk queries.

**SNMPv3** — adds encryption and proper authentication. Should be used wherever SNMP traffic crosses less-trusted network segments.

## SNMP operations

**GET** — management station requests a specific OID value from a device.

**TRAP / INFORM** — device sends an alert to the management station when a threshold is crossed or an event occurs. (INFORMs require acknowledgment; traps don't.)

**SET** — management station writes a value to the device — used for configuration changes via SNMP.

Most network monitoring tools (PRTG, LibreNMS, Zabbix, Domotz) use SNMP extensively. Configuring SNMP community strings or v3 credentials on your switches and UPSes is a prerequisite for useful network monitoring.`,
  },
  {
    slug: "syslog",
    term: "Syslog",
    categories: ["Networking", "Security"],
    related: ["snmp", "siem", "edr"],
    shortDef: "Syslog is the standard protocol for forwarding log messages from network devices and servers to a central logging system, providing a persistent record of events for troubleshooting and security analysis.",
    content: `Every network device — switches, firewalls, access points, servers — generates log messages: interface state changes, authentication events, configuration changes, error conditions. Syslog is the protocol that forwards these messages from the device to a central log collector or SIEM.

Without centralized logging, event data lives only on the device that generated it, rotates off when storage fills, and is often the first thing overwritten if a device is compromised. Centralized syslog creates an immutable audit trail.

Syslog messages carry a facility (what generated the message: kernel, auth, mail, daemon, etc.) and severity level (Emergency, Alert, Critical, Error, Warning, Notice, Informational, Debug). Collectors can filter and route based on both.

The original syslog protocol (RFC 3164) sends plaintext UDP on port 514 — no encryption, no acknowledgment, no guaranteed delivery. RFC 5424 and syslog over TLS address these shortcomings for security-sensitive environments.

For any organization with managed switches and firewalls, enabling syslog to a central collector (even a simple one like Graylog or a SIEM) is a baseline security practice. When an incident occurs, you need those logs to exist and to not have been on the device that was compromised.`,
  },
  {
    slug: "ntp",
    term: "NTP",
    aka: ["Network Time Protocol"],
    categories: ["Networking"],
    related: ["ptp", "syslog", "snmp", "radius"],
    shortDef: "NTP (Network Time Protocol) synchronizes clocks across networked devices, keeping servers, switches, and workstations within milliseconds of accurate time — essential for log correlation, Kerberos authentication, and certificate validity.",
    content: `Accurate time matters more than most people realize until something breaks. Kerberos authentication (used by Active Directory) fails if clocks are more than 5 minutes apart. Log correlation becomes impossible when events on different systems have inconsistent timestamps. TLS certificates have validity windows that depend on accurate time.

NTP synchronizes device clocks against a hierarchy of reference sources. Stratum 0 sources are GPS receivers and atomic clocks. Stratum 1 servers connect directly to stratum 0. Stratum 2 servers synchronize from stratum 1 — this is the tier most organizations use via public NTP pools (pool.ntp.org, time.google.com, etc.).

For most organizations: configure all servers, switches, and workstations to sync from two or three public NTP servers or your internal Active Directory PDC emulator, which itself syncs from a reliable external source. That's it — NTP doesn't need to be complicated.

UDP port 123. NTP provides millisecond-level accuracy over the internet, which is sufficient for essentially all IT applications. For sub-microsecond accuracy requirements (financial trading, industrial control), see PTP.`,
  },
  {
    slug: "ptp",
    term: "PTP",
    aka: ["Precision Time Protocol", "IEEE 1588"],
    categories: ["Networking"],
    related: ["ntp"],
    shortDef: "PTP (Precision Time Protocol, IEEE 1588) synchronizes clocks with sub-microsecond accuracy — orders of magnitude more precise than NTP — used in financial trading, broadcast media, and industrial control systems.",
    content: `NTP achieves millisecond-level accuracy, which is sufficient for authentication, logging, and certificate management. Some applications need far more precision: a financial exchange recording trade timestamps needs microsecond accuracy. A broadcast television facility distributing live video needs nanosecond-level synchronization.

PTP achieves this through hardware timestamping — the network card and switch hardware stamp packets at the wire level rather than in software, eliminating the timing jitter introduced by OS scheduling. PTP-aware switches (called boundary clocks or transparent clocks) forward PTP packets while correcting for their own forwarding delays.

The result is sub-microsecond to nanosecond-level clock accuracy across a network.

For most IT environments, PTP is not relevant — NTP is more than adequate. PTP appears in specialized domains: trading infrastructure, broadcast facilities, cellular network backhaul, and industrial automation. If your environment requires PTP, every switch in the path needs to support hardware timestamping, which is a significant infrastructure requirement.`,
  },
  {
    slug: "l2tp",
    term: "L2TP",
    aka: ["Layer 2 Tunneling Protocol", "L2TP/IPsec"],
    categories: ["Networking", "Security"],
    related: ["ipsec", "ssl-vpn", "vpn"],
    shortDef: "L2TP (Layer 2 Tunneling Protocol) is a VPN tunneling protocol that provides the tunnel framework but no encryption on its own — it's almost always paired with IPsec (L2TP/IPsec) to add security.",
    content: `L2TP on its own just creates a tunnel — it encapsulates Layer 2 frames in IP packets but provides no confidentiality or authentication. In practice, L2TP is always deployed paired with IPsec, which provides the encryption and authentication (the combination is written L2TP/IPsec).

L2TP/IPsec was the dominant Windows built-in VPN protocol for years — available natively in every version of Windows without additional client software. That's its primary historical relevance.

Today, L2TP/IPsec has largely been superseded for remote access:

- **IKEv2/IPsec** — faster reconnection, better for mobile clients, supported natively in Windows, macOS, iOS, Android.
- **WireGuard** — modern, faster, simpler key management.
- **SSL VPN** — works through restrictive firewalls; preferred for corporate remote access.

L2TP uses UDP port 1701 for the tunnel, with IPsec on ports 500 (IKE) and 4500 (NAT traversal). These ports are often blocked by enterprise firewalls and restrictive hotel/airport networks, which is a practical reliability problem that SSL VPN avoids.

L2TP/IPsec is still supported and functional; it's just not the first choice for new deployments.`,
  },

  // ── Cloud & Infrastructure ─────────────────────────────────────────────────
  {
    slug: "saas",
    term: "SaaS",
    aka: ["Software as a Service"],
    categories: ["Cloud & Infrastructure"],
    related: ["vpc", "cdn", "azure", "aws", "gcp", "tenant"],
    shortDef: "SaaS (Software as a Service) is software delivered over the internet and run by the vendor — you access it via a browser or app rather than installing and maintaining it yourself. Google Workspace, Microsoft 365, and Salesforce are SaaS.",
    content: `SaaS is the dominant model for business software today. The vendor hosts and operates the application, manages infrastructure, handles updates, and is responsible for uptime. You pay a subscription and use the software — you don't manage servers, databases, or deployments.

The SaaS model covers essentially every category of business software: productivity (Google Workspace, Microsoft 365), communication (Slack, Zoom), CRM (Salesforce, HubSpot), HR (Workday, Rippling), security (CrowdStrike, Okta), finance (QuickBooks Online, NetSuite), and on and on.

## SaaS vs IaaS vs PaaS

The cloud delivery model spectrum:

**SaaS** — complete application. You manage users and data. The vendor manages everything else.

**PaaS (Platform as a Service)** — a platform to deploy applications on. You manage the application and its data. The vendor manages the runtime, middleware, and infrastructure.

**IaaS (Infrastructure as a Service)** — raw compute, storage, and networking. You manage the OS up. AWS EC2, Azure VMs, and Google Compute Engine are IaaS.

Most organizations use all three to some degree — SaaS for most business applications, IaaS/PaaS for custom workloads.

## Identity and SaaS security

The proliferation of SaaS creates an identity management challenge. Each application has its own login unless connected to a central identity provider via SAML or OIDC for SSO. Managing SaaS access lifecycle — provisioning new users, deprovisioning departed ones across dozens of apps — is a real operational concern. SCIM automates this provisioning; JumpCloud and Okta are built to manage it at scale.`,
  },
  {
    slug: "vpc",
    term: "VPC",
    aka: ["Virtual Private Cloud"],
    categories: ["Cloud & Infrastructure"],
    related: ["azure", "aws", "gcp", "saas", "vlan"],
    shortDef: "A VPC (Virtual Private Cloud) is a logically isolated network within a public cloud provider where you define your own IP addressing, subnets, routing, and security policies — your private network environment inside AWS, Azure, or GCP.",
    content: `When you deploy resources in AWS, Azure, or GCP, they run inside a VPC — a virtual network that you own and control within the cloud provider's infrastructure. Your VMs, databases, and containers communicate on private IP addresses that you define, behind security groups and network ACLs that you configure, without being accessible to other tenants or the internet unless you explicitly allow it.

A VPC mirrors on-premises network concepts — subnets, route tables, gateways — implemented in software within the cloud. You define CIDR blocks for the VPC and subdivide them into subnets, typically across multiple availability zones for redundancy.

Key components:

**Subnets** — public subnets (with internet gateway routes, for load balancers and bastion hosts) and private subnets (no direct internet access, for databases and application servers).

**Security groups** — stateful firewall rules attached to individual resources. Define what traffic is allowed inbound and outbound per resource.

**Network ACLs** — stateless rules at the subnet level. An additional layer of traffic control on top of security groups.

**VPC peering / Transit gateway** — connect VPCs to each other or to on-premises networks. Enables private connectivity between cloud environments without traffic traversing the public internet.

For organizations using cloud infrastructure, the VPC is the foundational construct. Proper VPC design — subnet segmentation, security group hygiene, private vs public subnet placement — is the cloud equivalent of network segmentation on-premises.`,
  },
  {
    slug: "cdn",
    term: "CDN",
    aka: ["Content Delivery Network"],
    categories: ["Cloud & Infrastructure"],
    related: ["saas", "ddos-attack", "tls", "dns"],
    shortDef: "A CDN (Content Delivery Network) is a globally distributed network of servers that caches and serves content from locations close to end users, reducing latency and offloading traffic from the origin server.",
    content: `Without a CDN, every request for your website's assets — images, CSS, JavaScript, video — travels from the user to your origin server and back. If your server is in New York and the user is in Tokyo, that's a 150ms round-trip minimum, before any application processing.

A CDN places copies of your content on servers at dozens or hundreds of locations worldwide (called edge nodes or PoPs — Points of Presence). A user in Tokyo gets content served from a nearby edge node, not your New York server. Latency drops dramatically.

## Beyond performance

**DDoS mitigation** — CDN providers absorb volumetric attacks at the edge before they reach your origin. Cloudflare, Akamai, and AWS CloudFront have infrastructure capable of absorbing attacks measured in terabits per second.

**TLS termination** — the CDN terminates HTTPS connections at the edge, offloading SSL overhead from your origin server.

**Caching** — static assets cached at the edge don't hit your origin at all, reducing load and cost.

**WAF (Web Application Firewall)** — most CDN providers offer WAF capabilities at the edge, inspecting and filtering HTTP traffic before it reaches your application.

For any public-facing web property, a CDN is effectively mandatory at scale — both for performance and resilience. Cloudflare's free tier is an appropriate starting point for organizations that need DDoS protection and CDN caching without significant cost.`,
  },
  {
    slug: "disaster-recovery",
    term: "Disaster Recovery",
    aka: ["DR", "Business Continuity", "BCP", "BCDR"],
    categories: ["Cloud & Infrastructure", "Security"],
    related: ["raid", "ups", "virtual-machine", "backup"],
    shortDef: "Disaster recovery (DR) is the set of policies, procedures, and technologies that enable an organization to restore IT systems and data after a major failure — a ransomware attack, hardware failure, natural disaster, or facility loss.",
    content: `Disaster recovery planning answers the question: if we lost everything in our primary environment right now, how would we recover, how long would it take, and how much data would we lose?

Two metrics define a DR posture:

**RTO (Recovery Time Objective)** — how long the organization can tolerate being down. An hour? A day? A week? This drives the investment required — a one-hour RTO demands near-real-time failover; a 24-hour RTO allows for more economical backup restore.

**RPO (Recovery Point Objective)** — how much data loss is acceptable. If RPO is 4 hours, you need backups at least every 4 hours. If RPO is near-zero, you need real-time replication.

## DR tiers

**Backup and restore** — lowest cost, longest recovery time. Restore from backup after an incident. Recovery time measured in hours to days.

**Warm standby** — a secondary environment that runs scaled-down infrastructure, continuously updated via replication. Can be brought to full capacity in minutes to hours.

**Hot standby / active-active** — full parallel environment, always running. Failover is nearly instantaneous. Highest cost.

## Backup fundamentals

Regardless of tier, backup hygiene is the foundation:

**3-2-1 rule** — three copies of data, on two different media types, with one copy offsite.

**Immutable backups** — backups that ransomware can't encrypt or delete, typically offsite or air-gapped.

**Test restores** — an untested backup is not a backup. Regular restore tests confirm that backup data is actually recoverable.

DR is not the same as high availability (HA). HA handles component failures within a running system — a server failing in a cluster. DR handles the loss of the entire environment.`,
  },

  // ── Physical & Environmental ───────────────────────────────────────────────
  {
    slug: "latency",
    term: "Latency",
    aka: ["Ping", "Round-Trip Time", "RTT", "Delay"],
    categories: ["Networking"],
    related: ["qos", "voip", "tcp", "wan"],
    shortDef: "Latency is the time it takes for a packet to travel from source to destination. High latency causes delay in real-time applications like VoIP and video conferencing; it doesn't reduce throughput but makes interactive communication feel sluggish.",
    content: `Latency is the delay between sending a packet and it arriving at the destination, measured in milliseconds. Round-trip time (RTT) — what the ping command measures — is the time for the packet to make the full round trip.

Latency is often confused with bandwidth. Bandwidth is how much data can flow per second; latency is how long each piece takes to arrive. A high-latency link can have plenty of bandwidth — a satellite internet connection might have 50Mbps but 600ms latency. For downloading large files, that's fine. For a video call, it's unusable.

Sources of latency:

**Propagation delay** — light travels at roughly 200,000 km/s in fiber. A round trip from New York to London is ~10,000km, so physical speed of light alone contributes ~50ms RTT. There's no engineering around this.

**Switching/routing delay** — each hop through a router adds a small amount of processing time, typically sub-millisecond on modern equipment.

**Queuing delay** — packets waiting in switch or router buffers when a link is congested. This is where QoS has the most impact.

**Serialization delay** — time to put all the bits of a packet onto the wire. Negligible at 1G/10G; relevant on low-speed links.

Acceptable latency varies by application. VoIP becomes noticeably degraded above 150ms one-way. Gaming becomes unplayable above ~100ms. Web browsing is tolerant of 200-300ms. Backup and file transfer are throughput-limited, not latency-limited.`,
  },
  {
    slug: "hertz",
    term: "Hertz",
    aka: ["Hz", "MHz", "GHz", "Frequency"],
    categories: ["Hardware", "Networking"],
    related: ["cpu", "emi", "electric-noise", "wavelength"],
    shortDef: "Hertz (Hz) is the unit of frequency — one cycle per second. In IT, it appears as CPU clock speed (GHz), network cable bandwidth ratings (MHz), and radio frequency bands for Wi-Fi (2.4GHz, 5GHz, 6GHz).",
    content: `Frequency measures how many times something repeats per second. 1 Hz = 1 cycle/second. 1 MHz = 1 million cycles/second. 1 GHz = 1 billion cycles/second.

In IT contexts, Hertz appears across several domains:

**CPU clock speed** — a 3.0GHz processor completes 3 billion clock cycles per second. Clock speed is one factor in CPU performance; instructions per cycle (IPC) and core count matter equally.

**Network cable frequency ratings** — Cat6a is rated to 500MHz, meaning it can faithfully carry signal frequencies up to 500 million cycles per second. Higher frequency capability enables higher data rates — 10Gbps at 500MHz vs 1Gbps at 100MHz for Cat5e.

**Wi-Fi bands** — the 2.4GHz, 5GHz, and 6GHz bands are named for their carrier frequency. Higher frequency = shorter wavelength = more bandwidth available but less penetration through walls.

**AC power** — standard North American power runs at 60Hz (60 cycles per second). European power is 50Hz. This difference matters for equipment that isn't universal voltage rated, and explains why power adapters specify their input frequency range.

**EMI and electrical noise** — electrical equipment generates interference at its operating frequency and harmonics. Understanding frequency helps diagnose interference between electrical systems and RF equipment.`,
  },
  {
    slug: "electric-noise",
    term: "Electrical Noise",
    aka: ["Electrical Interference", "Signal Noise", "Electromagnetic Noise"],
    categories: ["Hardware", "Cabling"],
    related: ["emi", "hertz", "awg", "low-voltage-wiring"],
    shortDef: "Electrical noise is unwanted electrical signal interference that degrades data transmission or power quality — caused by motors, fluorescent lights, power lines, and other electrical equipment running near signal cables.",
    content: `Every electrical conductor carrying alternating current radiates an electromagnetic field, and every conductor in that field picks up an induced voltage. When that induced voltage is high enough relative to the signal being carried, it becomes noise — corrupting data signals, triggering false alarms in control systems, or reducing power quality.

Common noise sources in IT environments:

**Power cables running parallel to data cables** — a power cable carrying 60Hz AC induces that frequency onto adjacent data cables. The NEC requires minimum separation distances for this reason.

**Fluorescent and LED driver ballasts** — switching power supplies in lighting fixtures generate high-frequency noise.

**Motors and HVAC equipment** — variable speed drives, compressors, and elevators generate broadband electrical noise.

**Switching power supplies** — all modern computer power supplies are switching-mode, generating noise at their switching frequency (typically 100kHz-1MHz) and harmonics.

Copper data cables are susceptible to electrical noise. Shielded twisted pair (STP/FTP) cable adds a foil or braid shield that contains noise and reduces susceptibility, but requires proper grounding to be effective. Fiber optic cable is completely immune to electrical noise — one of its primary advantages in electrically noisy environments.`,
  },
  {
    slug: "emi",
    term: "EMI",
    aka: ["Electromagnetic Interference", "RFI", "Radio Frequency Interference"],
    categories: ["Hardware", "Cabling"],
    related: ["electric-noise", "awg", "low-voltage-wiring", "wlan"],
    shortDef: "EMI (Electromagnetic Interference) is interference from electromagnetic radiation that disrupts electronic devices and communications — caused by motors, radios, power lines, and other radiating sources nearby.",
    content: `EMI is the broader category that encompasses electrical noise from conducted interference (noise on cables) and radiated interference (electromagnetic waves through the air). Both can disrupt data communications and electronic equipment.

Sources of EMI in IT environments:

**Radio transmitters** — nearby cellular, radio, or radar equipment can interfere with Wi-Fi and other wireless systems operating at similar frequencies.

**Industrial equipment** — motors, welders, and variable frequency drives emit broadband EMI.

**Power infrastructure** — transformers, UPSes, and generators generate low-frequency EMI from their magnetic fields.

**Fluorescent lighting** — particularly near end-of-life, ballasts generate significant RF noise.

Mitigations:

**Physical separation** — more distance from noise sources is the simplest fix. Cable runs should be kept as far as practical from power infrastructure.

**Shielded cable** — STP or armored cable for copper runs in high-EMI environments.

**Fiber optic** — immune to EMI entirely, since it carries light rather than electrical signals.

**Metal conduit** — provides shielding for cable runs through high-interference zones.

EMI compliance (FCC Part 15 in the US, CE marking in Europe) requires electronic equipment to both limit its own emissions and demonstrate tolerance to typical EMI environments.`,
  },
  {
    slug: "wavelength",
    term: "Wavelength",
    categories: ["Hardware", "Cabling", "Networking"],
    related: ["attenuation", "dark-fiber", "mtp-mpo-connector"],
    shortDef: "Wavelength is the physical distance between two peaks of a wave. In networking, it refers to the wavelength of light used in fiber optic transceivers — different wavelengths travel different distances and enable WDM (multiple channels on one fiber).",
    content: `Wavelength and frequency are inversely related: longer wavelength = lower frequency, shorter wavelength = higher frequency. In fiber optics, wavelength (measured in nanometers) determines how far light travels in glass before attenuating and what transceiver types are compatible.

## Common fiber wavelengths

**850nm (multimode)** — short-range, used with VCSEL lasers in SFP+ and QSFP transceivers for data center connections up to ~300m. The most common wavelength for short inter-rack fiber.

**1310nm (single-mode)** — mid-range, used for campus and metro connections from hundreds of meters to ~10km.

**1550nm (single-mode)** — long-range, lowest attenuation in standard single-mode fiber, used for distances from 10km to 100km+.

## WDM — Wavelength Division Multiplexing

Multiple wavelengths of light can travel simultaneously in a single fiber without interfering, because the wavelengths don't interact. WDM systems combine multiple wavelengths (channels) onto a single fiber pair at the transmit end and separate them at the receive end.

**CWDM (Coarse WDM)** — up to 18 channels spaced 20nm apart. Lower cost, shorter distances. Common for campus and metro.

**DWDM (Dense WDM)** — 40-96 or more channels spaced 0.8nm apart. Used for long-haul backbone and dark fiber capacity maximization — a single fiber pair can carry 400Gbps or more using DWDM.`,
  },

  // ── Miscellaneous ──────────────────────────────────────────────────────────
  {
    slug: "ptz-camera",
    term: "PTZ Camera",
    aka: ["Pan-Tilt-Zoom Camera"],
    categories: ["Hardware", "Networking"],
    related: ["poe", "vlan", "rj45"],
    shortDef: "A PTZ (Pan-Tilt-Zoom) camera is a remotely controllable security or AV camera that can pan (rotate horizontally), tilt (move vertically), and zoom optically — as opposed to a fixed-position camera with a set field of view.",
    content: `PTZ cameras are used in security, conference rooms, broadcast, and event coverage where the field of view needs to be adjusted remotely or automatically. A single PTZ camera covering a large area can replace several fixed cameras, though it can only cover one area at a time.

In IT infrastructure terms, PTZ cameras are network-connected IP cameras — they run on the data network, typically on a dedicated IoT or camera VLAN, and are powered via PoE (usually PoE+ or PoE++ given their higher power draw for the motor and optics).

Control protocols: most PTZ cameras use VISCA (Sony's PTZ control protocol), PELCO-D/P, or IP-based API control. In video management systems (VMS), PTZ control is typically integrated — clicking in the camera view moves the camera.

For conferencing, auto-tracking PTZ cameras use AI to follow speakers around a room, keeping them centered in frame without a dedicated camera operator. These are increasingly common in hybrid meeting room setups.`,
  },
  {
    slug: "autonegotiation",
    term: "Autonegotiation",
    categories: ["Networking", "Hardware"],
    related: ["lacp", "duplex-simplex", "rj45"],
    shortDef: "Autonegotiation is the process by which two connected Ethernet devices automatically agree on the highest speed and duplex mode both support — eliminating the need to manually configure these parameters.",
    content: `When you plug an Ethernet cable between two devices, autonegotiation runs before any data is exchanged. Each device advertises its capabilities — 10Mbps, 100Mbps, 1Gbps, 10Gbps; half or full duplex — and both settle on the best common option.

For modern Gigabit and 10G Ethernet, autonegotiation is mandatory in the spec and always used. The issue arises primarily with legacy 10/100Mbps links where manual speed/duplex configuration is possible.

## Duplex mismatch

The most common autonegotiation failure: one side is set to auto-negotiate, the other is manually configured. The manually configured side doesn't advertise capabilities — the autonegotiating side sees no advertisement, interprets this as a legacy device, and defaults to half-duplex. The result is a duplex mismatch: one side is full-duplex, the other is half-duplex.

Symptoms: the link is up and passes traffic, but performance is poor — typically 10-20% of expected throughput, with errors in interface counters (late collisions on the half-duplex side). This is a notoriously hard-to-diagnose performance problem because the link appears to be working.

The fix: both sides should either both be set to auto, or both be manually set to the same speed and duplex. Never mix auto on one side with manual on the other.`,
  },
  {
    slug: "layer-1",
    term: "Layer 1",
    aka: ["Physical Layer", "OSI Layer 1", "L1"],
    categories: ["Networking", "Cabling"],
    related: ["rj45", "mtp-mpo-connector", "attenuation", "autonegotiation"],
    shortDef: "Layer 1 is the physical layer of the OSI network model — the actual cables, connectors, electrical signals, and light pulses that carry bits between devices. If Layer 1 is broken, nothing above it works.",
    content: `The OSI model describes networking in seven layers, each building on the one below. Layer 1 is the foundation: the physical medium — copper cable, fiber, RF spectrum — and the signaling that encodes bits onto it.

Layer 1 encompasses: cable type and quality, connector termination, fiber cleanliness, signal levels, cable length, bend radius compliance, and the physical interface on the device (the port, transceiver, or antenna).

## Why "check Layer 1 first" is a rule

Most network troubleshooting starts at the physical layer because physical problems are the most common cause of failures and the easiest to overlook. Before assuming a configuration problem:

- Is the cable securely seated at both ends?
- Is the link LED lit on both devices?
- Is the cable the correct category for the required speed?
- For fiber: are the connectors clean? (A dirty fiber end face is the most common cause of fiber link problems.)
- Is the transceiver the right type for the distance and fiber?
- Does the cable exceed the maximum run distance for that speed?

Higher-layer problems (VLAN misconfiguration, routing issues, authentication failures) can only be investigated once Layer 1 is confirmed working. Chasing a VLAN problem on a cable with a marginal connection wastes significant time.`,
  },
  {
    slug: "cli",
    term: "CLI",
    aka: ["Command Line Interface", "Command Prompt", "Terminal", "Shell"],
    categories: ["Hardware", "Networking"],
    related: ["ssh", "virtual-machine"],
    shortDef: "A CLI (Command Line Interface) is a text-based interface for operating a computer or network device by typing commands, as opposed to using a graphical interface. SSH, terminal, and switch console access all use a CLI.",
    content: `A CLI accepts typed commands and returns text output. No mouse, no icons — just a prompt waiting for input. This feels primitive compared to a graphical interface, but CLIs offer precision and efficiency that GUIs rarely match for technical work.

**Why CLIs matter for IT infrastructure:**

**Scripting and automation** — CLI commands can be scripted, piped, and chained. A task that requires clicking through 50 GUI screens can be a single command or script.

**Remote access** — SSH gives you full CLI access to a remote server or switch over an encrypted connection, with no graphical overhead.

**Consistency** — CLI behavior is stable across software versions; GUI layouts change. Documentation, knowledge base articles, and configuration guides for network equipment are almost always written in CLI commands.

**Network devices** — switches, routers, and firewalls are primarily configured via CLI. Even equipment with web interfaces often lacks full feature parity with the CLI; complex configurations require the command line.

Common CLIs: Bash/Zsh (Linux/macOS), PowerShell and cmd.exe (Windows), Cisco IOS, Juniper Junos, Aruba AOS.`,
  },
  {
    slug: "endpoint",
    term: "Endpoint",
    aka: ["End Device", "Client Device"],
    categories: ["Hardware", "Security"],
    related: ["edr", "mdm", "virtual-machine", "8021x"],
    shortDef: "An endpoint is any user-facing device that connects to a network — laptops, desktops, smartphones, tablets, and workstations. In security contexts, endpoints are the primary targets of attacks and the focus of EDR and MDM solutions.",
    content: `"Endpoint" distinguishes user devices from network infrastructure (switches, routers) and servers. The term is particularly prevalent in security, where endpoint protection — antivirus, EDR, MDM policy enforcement — is a distinct discipline from network security.

Every endpoint is a potential entry point for attackers: a phished credential, a malicious download, an unpatched vulnerability. EDR (Endpoint Detection and Response) provides behavioral monitoring and response capabilities on each device. MDM enforces security policies: disk encryption, screen lock, patch status, VPN requirements.

The shift to remote work expanded the endpoint security challenge: devices now operate outside the network perimeter, on untrusted networks, without the protection of on-premises firewalls and filtering. Zero Trust treats each endpoint as potentially compromised regardless of network location — verifying device health at every access request rather than trusting based on network position.

In infrastructure terms, endpoint count drives switch port planning (24-48 per access switch), DHCP scope sizing, 802.1X deployment scope, and PoE power budget calculation.`,
  },
]

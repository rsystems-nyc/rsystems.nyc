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
    shortDef: "Windows Autopilot is Microsoft's zero-touch device deployment system. When a new Windows PC powers on for the first time, Autopilot handles everything automatically — joining it to your directory, installing required apps, applying security policies, and getting it ready for the employee — without IT ever touching the machine.",
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
    shortDef: "Microsoft Intune is a cloud-based device and application management platform. It's the system that enforces your IT policies across every device in your organization — Windows laptops, Macs, iPhones, Android — regardless of where they are.",
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
    shortDef: "Microsoft Entra ID — formerly called Azure Active Directory — is Microsoft's cloud-based identity and access management service. It's the system that verifies who someone is and controls what they can access.",
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
    shortDef: "DNS — the Domain Name System — is the internet's address book. It translates human-friendly names like yourcompany.com into the numerical addresses computers use, and it directs different kinds of traffic to the right places: your website to one server, your email to another.",
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
    shortDef: "SPF — Sender Policy Framework — is a DNS record that specifies which mail servers are authorized to send email on behalf of your domain. When a receiving mail server gets a message claiming to be from you, it checks your SPF record to verify the sending server is on your approved list.",
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
    shortDef: "DKIM — DomainKeys Identified Mail — adds a cryptographic signature to outgoing email. The signature is generated using a private key you control; the corresponding public key is published in your DNS. When a receiving server gets your email, it retrieves your public key and uses it to verify the signature, confirming the message came from you and wasn't modified in transit.",
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
    shortDef: "DMARC — Domain-based Message Authentication, Reporting, and Conformance — tells receiving mail servers what to do with messages that fail email authentication checks. It's the enforcement layer that sits on top of SPF and DKIM.",
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
    shortDef: "BIMI — Brand Indicators for Message Identification — is an email standard that displays your organization's logo directly in the email client, next to the sender name in Gmail, Apple Mail, and other supporting clients, when a message passes full email authentication.",
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
    shortDef: "DNSSEC — DNS Security Extensions — adds a layer of cryptographic verification to DNS. Ordinary DNS has no built-in way to prove that the answer you received actually came from the legitimate owner of a domain, which leaves room for certain attacks that forge DNS responses and redirect traffic. DNSSEC signs DNS records so that resolvers can confirm they're authentic and unaltered.",
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
    shortDef: "SMTP — Simple Mail Transfer Protocol — is the standard that mail servers use to send email across the internet. When people refer to your \"primary SMTP address,\" they mean the main, authoritative email address of record for an account — as distinct from any aliases that also route to the same mailbox.",
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
    shortDef: "MFA — multi-factor authentication — requires more than just a password to sign in. The factors are usually described as something you know (a password), something you have (a phone, a hardware key), and something you are (a fingerprint or face). Requiring at least two means a stolen password alone isn't enough to get in.",
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
    shortDef: "TOTP — time-based one-time password — is the six-digit code that rotates every thirty seconds in an authenticator app like 1Password, Authy, or Google Authenticator. It's one of the most common second factors for multi-factor authentication.",
    categories: ["Security"],
    related: ["mfa"],
    content: `TOTP — time-based one-time password — is the six-digit code that rotates every thirty seconds in an authenticator app like 1Password, Authy, or Google Authenticator. It's one of the most common second factors for multi-factor authentication.

It works without any network connection. Your device and the service share a secret when you first set it up, and both independently compute the same code from that secret plus the current time. Because the codes are generated locally rather than sent over a network, TOTP is meaningfully more secure than codes delivered by SMS, which can be intercepted or redirected.

The practical advice: store your TOTP secrets in your password manager alongside the credentials they protect. That keeps your second factors organized, backed up, and recoverable when a device is lost — rather than stranded on a single phone.`,
  },
  {
    slug: "vault",
    term: "Vault",
    shortDef: "A vault is a folder within a password manager — the unit you use to organize and share credentials. In 1Password, for example, vaults are how you separate, say, finance credentials from operations credentials, and how you control who can see what.",
    categories: ["Security"],
    related: ["least-privilege", "service-account"],
    content: `A vault is a folder within a password manager — the unit you use to organize and share credentials. In 1Password, for example, vaults are how you separate, say, finance credentials from operations credentials, and how you control who can see what.

The right way to think about vaults is by access group, not by individual. The question for every vault is "who should be able to see this?" — and membership follows the answer. This keeps credentials organized around roles rather than people, which means access survives turnover: someone joins a team and gains the right vaults, someone leaves and loses them, without anyone hand-editing individual entries.

Designing vaults well follows the same restraint as designing permission groups: create the fewest, simplest vaults that capture real distinctions, and add structure where you genuinely expect access to diverge over time.`,
  },
  {
    slug: "service-account",
    term: "Service Account",
    shortDef: "A service account is an account that isn't tied to a specific human being. Instead of ownership and top-level control living on the CEO's or CFO's personal login, it lives on a dedicated account — commonly something like itadmin@yourdomain.com — whose credential is stored in the organization's password manager and retrieved only when needed.",
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
    shortDef: "A super admin (or global admin) is an account with the highest level of control over a platform — able to manage every user, change any setting, and grant or revoke anyone else's access. In Google Workspace it's the Super Admin role; in Microsoft 365 it's the Global Administrator.",
    categories: ["Identity", "Security"],
    related: ["service-account", "least-privilege", "mfa"],
    content: `A super admin (or global admin) is an account with the highest level of control over a platform — able to manage every user, change any setting, and grant or revoke anyone else's access. In Google Workspace it's the Super Admin role; in Microsoft 365 it's the Global Administrator.

Because these accounts can do anything, they're the most valuable target in your environment and deserve the most protection. Best practice is to keep the number of super admins small, secure them with phishing-resistant multi-factor authentication, and — wherever possible — assign top-level ownership to a dedicated service account rather than an individual's day-to-day login.

Super admin credentials are exactly the kind of thing that belongs in a password manager, retrieved deliberately when needed rather than used for routine work.`,
  },
  {
    slug: "least-privilege",
    term: "Least Privilege",
    shortDef: "The principle of least privilege says every person, account, and system should have exactly the access required to do its job — and nothing more. The bookkeeper reaches accounting but not the servers; the marketing contractor edits the campaign folder but never sees HR records.",
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
    shortDef: "Asymmetric cryptography is the model behind most modern security, including the DKIM signatures that authenticate your email. It uses a pair of mathematically linked keys: one that locks (or signs) and one that unlocks (or verifies). Crucially, the two are different — what one key does, only the other can undo.",
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
    shortDef: "A DUNS number (Data Universal Numbering System) is a unique nine-digit identifier for a business, issued by Dun & Bradstreet. It's a widely used way for organizations and vendors to verify that a company is a real, registered entity.",
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
    shortDef: "A SIEM — Security Information and Event Management — collects log data from across your entire environment (servers, firewalls, endpoints, cloud services) and correlates it to detect threats and anomalies.",
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
    shortDef: "EDR — Endpoint Detection and Response — is software on your devices that monitors for malicious behavior and provides tools to detect, investigate, and respond to threats. CrowdStrike, SentinelOne, and Carbon Black are examples. It's the evolution of antivirus: instead of matching known signatures, it watches what processes are doing and stops behavior that looks like an attack.",
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
    shortDef: "A digital certificate is a cryptographically signed credential that proves the identity of a server, organization, or individual. When you visit a website over HTTPS, the site presents a certificate issued by a trusted Certificate Authority — your browser verifies it before establishing an encrypted connection.",
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
    shortDef: "Claude Code is Anthropic's agentic coding tool — a version of Claude that runs in your terminal and can read files, write code, execute commands, and interact with your development environment directly. Unlike using Claude in a chat window, Claude Code can actually execute work: it reads your codebase, writes and modifies files, runs tests, and iterates until something works.",
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
    shortDef: "An API — Application Programming Interface — is a defined way for one piece of software to communicate with another. When your application retrieves data from Salesforce, or your website shows live inventory, it's using an API. APIs are designed for machines: they require developers to write code that properly formats requests and handles responses.",
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
    shortDef: "SSO — single sign-on — lets people use one identity to access many applications, instead of maintaining a separate username and password for each. Sign in once, and that verified identity carries across the connected services.",
    categories: ["Identity"],
    related: ["saml", "oidc", "scim", "federation"],
    content: `SSO — single sign-on — lets people use one identity to access many applications, instead of maintaining a separate username and password for each. Sign in once, and that verified identity carries across the connected services.

There's a spectrum. At the simplest end, "sign in with Google," "sign in with Microsoft," and "sign in with Apple" buttons are a lightweight form of SSO — convenient and identity-based rather than password-based. At the more robust end is true federated single sign-on using protocols like SAML and OIDC, often through a dedicated identity provider, which gives you central control over access and offboarding.

The strategic value is the shift from thinking about your company as a scattering of independent passwords to thinking about it in terms of identities. One important caveat: SSO is tied to your domain name, so it's best turned on once your brand identity is settled, not while you're still workshopping it.`,
  },
  {
    slug: "federation",
    term: "Federation",
    shortDef: "Federation is the arrangement that lets one identity system trust another, so a single identity can be used across organizational or platform boundaries. It's the machinery underneath single sign-on: rather than each application holding its own copy of your credentials, applications federate to a central identity provider that vouches for who you are.",
    categories: ["Identity"],
    related: ["sso", "saml", "oidc"],
    content: `Federation is the arrangement that lets one identity system trust another, so a single identity can be used across organizational or platform boundaries. It's the machinery underneath single sign-on: rather than each application holding its own copy of your credentials, applications federate to a central identity provider that vouches for who you are.

A common practical example: an organization on Microsoft 365 that also runs a Google tenant can federate the two, so people authenticate through one without maintaining separate logins for the other. Both Microsoft and Google support this, and there are step-by-step guides for setting it up — you don't necessarily need a full third-party SSO platform to benefit.

Federation, built on standards like SAML and OIDC, is what makes an identity-first model possible: authentication based on a trusted identity rather than a pile of independent username-and-password pairs.`,
  },
  {
    slug: "jumpcloud",
    term: "JumpCloud",
    shortDef: "JumpCloud is a cloud-based directory-as-a-service platform that manages user identity, device management, and application access from a single place. If you're familiar with Active Directory — Microsoft's on-premises directory — JumpCloud is roughly the cloud-native equivalent, designed to work across Windows, Mac, and Linux without requiring an on-premises server.",
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
    shortDef: "Okta is a cloud-based identity and access management platform purpose-built for enterprise SSO, MFA, lifecycle management, and application integration. It's one of the dominant enterprise identity platforms, particularly common in organizations that run a mix of cloud applications and need a neutral identity layer that isn't tied to Microsoft or Google.",
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
    shortDef: "SAML — Security Assertion Markup Language — is the protocol that makes Single Sign-On work for enterprise applications. It allows users to log into one system (the identity provider, like JumpCloud or Entra ID) and automatically gain access to connected applications (service providers, like Salesforce, Slack, or Workday) without entering separate credentials.",
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
    shortDef: "SCIM — System for Cross-domain Identity Management — is the standard for automating user account provisioning. Where SAML handles \"who is this person?\", SCIM handles \"create this account\" and \"disable this account.\"",
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
    shortDef: "OIDC — OpenID Connect — is a modern authentication standard built on top of OAuth 2.0. Like SAML, it enables Single Sign-On. Unlike SAML, it uses JSON rather than XML and is designed for both web applications and mobile apps.",
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
    shortDef: "A distribution group is an email address that forwards to a list of people — send one message to team@yourdomain.com and everyone in the group receives it. It's the standard way to reach a team, department, or role without maintaining the membership by hand in every message.",
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
    shortDef: "MDM — mobile device management — is the system that lets an organization configure, secure, and manage its devices centrally: laptops, phones, and tablets, wherever they physically are. It pushes software, enforces security policies like disk encryption and screen locks, manages certificates, and can remotely lock or wipe a lost or stolen device.",
    categories: ["MDM"],
    related: ["intune", "jumpcloud", "zero-touch", "device-trust"],
    content: `MDM — mobile device management — is the system that lets an organization configure, secure, and manage its devices centrally: laptops, phones, and tablets, wherever they physically are. It pushes software, enforces security policies like disk encryption and screen locks, manages certificates, and can remotely lock or wipe a lost or stolen device.

What once seemed like an enterprise luxury is now a baseline. If you're running company devices without MDM, you're managing them by hand and carrying real risk. The major caveat is that changing MDM providers later is consistently painful — particularly on Apple, where a push-notification certificate tied to a specific email address can be very awkward to change after the fact — so it's worth setting up thoughtfully from the start.

Providers include JumpCloud, Microsoft Intune, Jamf, Mosyle, Kandji, and others. Any of them beats nothing. The bigger decision is committing to device management early, before you have a sprawling fleet to retrofit.`,
  },
  {
    slug: "zero-touch",
    term: "Zero-Touch Provisioning",
    shortDef: "Zero-touch provisioning is the experience of a brand-new device configuring itself automatically. An employee peels the plastic off a laptop, powers it on, signs in with their corporate credentials, and the machine enrolls in management, pulls down the apps and policies it needs, and is ready to work — without IT ever physically touching it.",
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
    shortDef: "Apple Business (formerly Apple Business Manager) is Apple's free platform for organizations to manage Apple devices, identities, and apps at scale. It provides managed Apple IDs on your own domain, automated device enrollment, volume app purchasing, and — in its current form — a built-in MDM, while also integrating with third-party MDMs like JumpCloud, Jamf, Intune, and others.",
    categories: ["MDM", "Apple"],
    related: ["managed-apple-id", "vpp", "duns", "zero-touch"],
    content: `Apple Business (formerly Apple Business Manager) is Apple's free platform for organizations to manage Apple devices, identities, and apps at scale. It provides managed Apple IDs on your own domain, automated device enrollment, volume app purchasing, and — in its current form — a built-in MDM, while also integrating with third-party MDMs like JumpCloud, Jamf, Intune, and others.

Setting it up takes only minutes of hands-on time, though verification can take days to a few weeks, and it requires a DUNS number, which most organizations already have. If you use Apple devices at work, this is the foundation you build management on — and verifying your domain through it prevents people from creating Apple IDs on your domain that you can't control.

The strong recommendation is to set it up from the very beginning. Doing so doesn't obligate you to use every feature; it simply prevents the small, convenient, wrong decisions — like an app tied to someone's personal Apple ID — that become painful and costly to unwind later.`,
  },
  {
    slug: "managed-apple-id",
    term: "Managed Apple ID",
    shortDef: "A managed Apple ID is an Apple account that your organization creates and controls through Apple Business, on your own domain — as opposed to a personal Apple ID an employee sets up themselves. Because the organization owns it, you can reset it, reassign it, and revoke it when someone leaves.",
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
    shortDef: "BYOD — bring your own device — covers the reality that employees use personal phones and computers for work, most commonly to check email on a personal iPhone or Android. It's convenient and almost universal, but it raises a real question: what happens to company data on a device you don't own when that person leaves, especially under contentious terms?",
    categories: ["MDM"],
    related: ["device-trust", "managed-apple-id", "mdm"],
    content: `BYOD — bring your own device — covers the reality that employees use personal phones and computers for work, most commonly to check email on a personal iPhone or Android. It's convenient and almost universal, but it raises a real question: what happens to company data on a device you don't own when that person leaves, especially under contentious terms?

The thoughtful answer isn't to ban it but to manage it. A BYOD MDM enrollment loads a certificate — a cryptographic watermark — onto the personal device that confirms it's known and trusted, and that can be revoked if the device is lost or the person is terminated. This enables device trust: the ability to say company systems are only reachable from devices you recognize, including personal ones, without taking full control of the employee's phone.

On Apple, this works through a managed Apple ID, which is one more reason to manage Apple identities from the start.`,
  },
  {
    slug: "device-trust",
    term: "Device Trust",
    shortDef: "Device trust is the policy that sensitive systems — HR data, financial systems — can only be accessed from devices the organization knows about and trusts. Rather than relying on a correct password alone, the system also checks that the request is coming from a recognized, compliant device.",
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
    shortDef: "VPP — Volume Purchase Program — is the part of Apple Business that lets an organization buy apps centrally and assign them to devices and users, with the licenses owned by the company rather than an individual. When someone leaves, their assigned licenses return to the pool and can be reassigned to the next person.",
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
    shortDef: "VMware is the dominant enterprise virtualization platform, now owned by Broadcom. VMware vSphere is the core product — it lets you run multiple virtual machines on a single physical server, each isolated from the others. Instead of one server running one workload, you run dozens of VMs on one host, dramatically improving hardware utilization and operational flexibility.",
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
    shortDef: "ESXi is VMware's bare-metal hypervisor — the software that runs directly on server hardware and makes virtualization possible. It's the foundation layer of every VMware vSphere deployment: each physical host runs ESXi, which then hosts the virtual machines on top of it.",
    categories: ["Virtualization"],
    related: ["vmware", "hyper-v"],
    content: `ESXi is VMware's bare-metal hypervisor — the software that runs directly on server hardware and makes virtualization possible. It's the foundation layer of every VMware vSphere deployment: each physical host runs ESXi, which then hosts the virtual machines on top of it.

A hypervisor sits between the physical hardware and the VMs. ESXi exposes CPU, memory, storage, and network resources to virtual machines, giving each VM the appearance of dedicated hardware while actually sharing the physical resources efficiently across many workloads.

In a managed VMware environment, ESXi hosts are controlled through vCenter — you don't typically interact with each host directly. ESXi becomes relevant operationally when you're dealing with host-level issues: hardware failures, firmware updates, network configuration, or storage connectivity problems.

Notable change: the free ESXi license was discontinued by Broadcom in 2024. Organizations running free ESXi — common in smaller environments and branch offices — need to evaluate licensed alternatives or migrate to another platform.`,
  },
  {
    slug: "hyper-v",
    term: "Hyper-V",
    shortDef: "Hyper-V is Microsoft's hypervisor. It ships as a role in Windows Server and provides the same core virtualization capabilities as VMware vSphere — running multiple virtual machines on a single physical host, with live migration, failover clustering, and replication.",
    categories: ["Virtualization", "Microsoft"],
    related: ["vmware", "esxi", "azure"],
    content: `Hyper-V is Microsoft's hypervisor. It ships as a role in Windows Server and provides the same core virtualization capabilities as VMware vSphere — running multiple virtual machines on a single physical host, with live migration, failover clustering, and replication.

For organizations in the Microsoft ecosystem, Hyper-V is the natural on-premises virtualization platform. Licensing is included in Windows Server Datacenter edition, management integrates with familiar Microsoft tooling, and failover clustering provides high availability without additional licensing cost.

Capabilities that matter: live migration (move running VMs between hosts without downtime), Windows Server Failover Clustering for HA, and Hyper-V Replica for basic VM replication to a secondary site or Azure.

Where it fits vs. VMware: Hyper-V is the rational choice for Microsoft-first organizations that don't need VMware's advanced capabilities — vSAN, NSX, distributed resource scheduling. For environments running primarily Windows workloads with standard HA requirements, Hyper-V provides comparable core functionality at significantly lower licensing cost.

With the Broadcom/VMware pricing changes, Hyper-V has become an increasingly compelling migration target for organizations looking to exit the VMware cost model.`,
  },

  // ── Cloud ──────────────────────────────────────────────────────────────────
  {
    slug: "azure",
    term: "Azure",
    aka: ["Microsoft Azure"],
    shortDef: "Microsoft Azure is Microsoft's cloud platform — the infrastructure, platform, and software services that let organizations run workloads in Microsoft's global data centers rather than on-premises hardware.",
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
    shortDef: "Amazon Web Services is the market-leading cloud platform by revenue, breadth of services, and enterprise adoption. For organizations without a strong Microsoft or Google dependency, AWS is often the default enterprise cloud choice.",
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
    shortDef: "Google Cloud Platform is Google's cloud offering. GCP has historically been strongest in data analytics, machine learning infrastructure, and containerized workloads — BigQuery and Google Kubernetes Engine (GKE) are leading products in their respective categories.",
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
    shortDef: "Cloud Identity is Google's standalone identity and access management product — Google's identity layer without the rest of Google Workspace. Its free tier, Cloud Identity Free, lets an organization stand up a Google tenant at no cost, with managed user accounts, Google as an identity provider for single sign-on, basic device management, and security reporting.",
    categories: ["Cloud & Infrastructure", "Google", "Identity"],
    related: ["tenant", "gcp", "sso"],
    content: `Cloud Identity is Google's standalone identity and access management product — Google's identity layer without the rest of Google Workspace. Its free tier, Cloud Identity Free, lets an organization stand up a Google tenant at no cost, with managed user accounts, Google as an identity provider for single sign-on, basic device management, and security reporting.

What it enables in practice: you can use Google as your identity provider for free, and you can sign in to view documents that have been shared specifically with you — even if your organization runs email on Microsoft rather than Google. Creating and verifying the tenant also prevents anyone else from impersonating your domain on Google's side.

The free tier has limits — it's identity only, with no Gmail or Drive, and caps at a modest number of accounts — but for establishing a footprint and preventing impersonation, it's one of the more underused free tools available. There's a fuller write-up in our Free Resources.`,
  },
  {
    slug: "tenant",
    term: "Tenant",
    shortDef: "A tenant is your organization's own dedicated space within a cloud provider's platform — your isolated instance of Microsoft 365, Google Workspace, or similar, containing your users, settings, data, and domain. When people talk about \"our Microsoft tenant\" or \"our Google tenant,\" they mean this container.",
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
    shortDef: "OneDrive and SharePoint are both Microsoft 365 storage, but they answer different ownership questions. OneDrive is an individual's personal work storage; SharePoint is shared, team- or organization-owned storage. (The Google equivalents are My Drive for the individual and Shared Drives for the team.)",
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
    shortDef: "In Google Workspace, My Drive is your personal work storage — files you own and manage individually. Shared Drives are organization-owned storage where a team or department owns the content, not any individual. (The Microsoft equivalents are OneDrive for personal and SharePoint for team storage.)",
    categories: ["Cloud & Infrastructure", "Google"],
    related: ["onedrive-sharepoint", "team-folder"],
    content: `In Google Workspace, My Drive is your personal work storage — files you own and manage individually. Shared Drives are organization-owned storage where a team or department owns the content, not any individual. (The Microsoft equivalents are OneDrive for personal and SharePoint for team storage.)

The distinction matters most when people leave. Files in someone's My Drive are tied to that person — when they depart, access management gets complicated and the organization can find itself locked out of its own content. Files in a Shared Drive belong to the organization; membership changes don't affect ownership.

Default to Shared Drives for anything that belongs to the team — project files, client work, shared documents. Reserve My Drive for genuinely personal working files.`,
  },
  {
    slug: "team-folder",
    term: "Team Folder",
    shortDef: "A team folder is shared storage owned by a group rather than an individual. The term is most explicit in Dropbox (team folders versus personal folders), but the concept maps directly to Google's Shared Drives and Microsoft's SharePoint.",
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
    shortDef: "A VLAN (Virtual Local Area Network) is a logical network segment created on a physical switch that isolates traffic between groups of devices. VLANs let you separate networks — say, employee workstations from security cameras — without buying separate switches.",
    categories: ["Networking"],
    related: ["vlan-tagging", "vlan-trunking-vtp", "voice-vlan", "svi", "qos"],
    content: `A VLAN (Virtual Local Area Network) is a logical network segment created on a physical switch that isolates traffic between groups of devices. VLANs let you separate networks — say, employee workstations from security cameras — without buying separate switches.

## What a VLAN does

A switch, by default, forwards traffic to every port. Put 100 devices on one switch and a broadcast from any one of them reaches all 99 others. VLANs fix this by dividing the switch into isolated segments. Traffic in VLAN 10 never reaches VLAN 20 unless it passes through a router or Layer 3 switch — which is exactly where you want to enforce security policy.

The practical result: you can run your workstations, servers, VoIP phones, guest Wi-Fi, and security cameras on the same physical infrastructure while keeping each group's traffic completely separate. A guest on your guest VLAN can't reach your file server. A compromised IoT device can't talk to your workstations. The segmentation is real and enforced at the switch level.

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
    shortDef: "VLAN tagging is the mechanism by which a switch marks an Ethernet frame with a VLAN ID so that other switches know which VLAN the traffic belongs to. The IEEE 802.1Q standard defines how this tag is inserted into the frame header.",
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
    shortDef: "A trunk port carries traffic for multiple VLANs across a single link — typically between switches or from a switch to a router. VTP (VLAN Trunking Protocol) is a Cisco-proprietary protocol that propagates VLAN definitions across switches automatically.",
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
    shortDef: "A Voice VLAN is a dedicated VLAN configured on a switch port to carry VoIP traffic separately from data traffic. It ensures phone calls get priority and aren't affected by congestion on the data network.",
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
    shortDef: "An SVI (Switched Virtual Interface) is a virtual Layer 3 interface on a Layer 3 switch that acts as the default gateway for a VLAN. SVIs enable inter-VLAN routing without a separate physical router.",
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
    shortDef: "DHCP (Dynamic Host Configuration Protocol) automatically assigns IP addresses and network configuration to devices when they connect to a network. Without it, every device would need a manually configured IP address — which doesn't scale past a handful of devices.",
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
    shortDef: "A MAC address is a unique hardware identifier assigned to a network interface at the factory. Where an IP address tells the network where a device is, a MAC address identifies what the device is — permanently, at the hardware level.",
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
    shortDef: "A LAN (Local Area Network) is a network connecting devices within a defined physical area — a single office, building, or campus. It's the \"inside\" of your network, as opposed to the internet-facing WAN.",
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
    shortDef: "A WAN (Wide Area Network) is a network that spans multiple locations — typically connecting branch offices to headquarters, or an office to the internet. Your internet connection is a WAN link.",
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
    shortDef: "NAT (Network Address Translation) allows multiple devices on a private network to share a single public IP address when communicating with the internet. It's how your entire office accesses the internet through one IP assigned by your ISP.",
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
    shortDef: "CIDR (Classless Inter-Domain Routing) is the notation used to describe IP address ranges and subnet sizes. A CIDR notation like 192.168.1.0/24 means the first 24 bits are the network address, leaving 8 bits for host addresses — 256 addresses in that subnet.",
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
    shortDef: "IPv4 is the fourth version of the Internet Protocol and the addressing scheme that underlies most networks today. An IPv4 address is a 32-bit number written as four decimal octets separated by dots — like 192.168.1.1.",
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
    shortDef: "IPv6 is the successor to IPv4, using 128-bit addresses to provide a vastly larger address space — enough for every device on earth to have a unique public IP. IPv6 addresses are written as eight groups of four hexadecimal digits separated by colons.",
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
    shortDef: "An ACL (Access Control List) is a set of rules on a network device — switch, router, or firewall — that permits or denies traffic based on source, destination, port, and protocol. ACLs are how you enforce \"VLAN 10 can't reach VLAN 20 except on port 443.\"",
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
    shortDef: "QoS (Quality of Service) is the set of techniques used to prioritize network traffic so that latency-sensitive traffic — VoIP calls, video conferencing — isn't degraded when the network is congested.",
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
    shortDef: "LACP (Link Aggregation Control Protocol) combines multiple physical network links between two devices into a single logical link, adding bandwidth and providing redundancy. Two 10Gbps links become one 20Gbps logical connection that survives a single cable failure.",
    categories: ["Networking"],
    related: ["vlan", "jumbo-frames", "spanning-tree-protocol"],
    content: `LACP (Link Aggregation Control Protocol) combines multiple physical network links between two devices into a single logical link, adding bandwidth and providing redundancy. Two 10Gbps links become one 20Gbps logical connection that survives a single cable failure.

When one uplink between two switches isn't enough — either for bandwidth or redundancy — LACP lets you bond multiple physical ports into a single logical port channel. Both sides negotiate the aggregation automatically using the LACP protocol; the result is a link that appears as a single higher-bandwidth connection.

Common uses: uplinks between access and distribution switches, server connections to a switch (often called NIC teaming or bonding on the server side), and storage connections where both throughput and availability matter.

Traffic distribution across member links is handled by a hashing algorithm based on source/destination MAC addresses, IP addresses, or port numbers. This means a single flow (one TCP connection) still travels on one link — you won't see a single download speed double. The aggregate bandwidth benefits concurrent flows from multiple sources, not a single stream.

Key requirements: all member ports must be the same speed and duplex. A 1Gbps and a 10Gbps port cannot be in the same LAG. The same is true on both ends — both switches must have identical port speeds for the bundled interfaces.

LACP is defined in IEEE 802.3ad (now 802.1AX). Cisco's older proprietary equivalent is PAgP. Most modern equipment supports LACP natively; prefer it over vendor-specific protocols for interoperability.`,
  },
  {
    slug: "lldp",
    term: "LLDP",
    aka: ["Link Layer Discovery Protocol"],
    shortDef: "LLDP (Link Layer Discovery Protocol) is a vendor-neutral protocol that lets network devices advertise their identity and capabilities to directly connected neighbors. It's how a switch knows what's plugged into each port — and how a VoIP phone learns which VLAN to use.",
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
    shortDef: "Spanning Tree Protocol (STP) prevents Layer 2 switching loops by automatically blocking redundant paths between switches. Without it, a loop in your switch infrastructure would cause a broadcast storm that brings down the network almost instantly.",
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
    shortDef: "Loopback detection is a switch feature that identifies and responds to Layer 2 loops — specifically on access ports where STP may not be running or where a user has accidentally connected two ports together.",
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
    shortDef: "Jumbo frames are Ethernet frames larger than the standard 1500-byte MTU (Maximum Transmission Unit), typically set to 9000 bytes. They reduce per-packet overhead for high-throughput workloads like storage and large file transfers.",
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
    shortDef: "Multicast is a network addressing method that delivers traffic to multiple specific recipients simultaneously using a single stream. Unlike broadcast (everyone gets it) or unicast (one recipient), multicast sends to a group of subscribed receivers.",
    categories: ["Networking"],
    related: ["vlan", "qos", "vlan-tagging"],
    content: `Multicast is a network addressing method that delivers traffic to multiple specific recipients simultaneously using a single stream. Unlike broadcast (everyone gets it) or unicast (one recipient), multicast sends to a group of subscribed receivers.

Standard unicast sends a separate copy of traffic to each recipient. If 50 devices want the same video stream, that's 50 individual streams from the source. Multicast sends one stream; the network replicates it only at points where the path diverges toward different receivers.

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
    shortDef: "802.1X is a network access control standard that requires devices to authenticate before they can use a switch port or connect to a Wi-Fi network. Until a device authenticates successfully, the port is locked — no IP address, no traffic.",
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
    shortDef: "RADIUS is an authentication and authorization protocol that centrally validates credentials for network access — VPN connections, Wi-Fi authentication, switch port access via 802.1X. It's the backend that decides who gets in.",
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
    shortDef: "IPsec is a suite of protocols that encrypts and authenticates IP traffic at the network layer. It's the foundation of most site-to-site VPN tunnels, providing confidentiality, integrity, and authentication for traffic between networks.",
    categories: ["Networking", "Security"],
    related: ["ssl-vpn"],
    content: `IPsec is a suite of protocols that encrypts and authenticates IP traffic at the network layer. It's the foundation of most site-to-site VPN tunnels, providing confidentiality, integrity, and authentication for traffic between networks.

IPsec operates at Layer 3, encrypting the IP payload (and optionally the header) before it's sent across an untrusted network. Unlike TLS/SSL which secures individual application connections, IPsec secures all traffic between two endpoints at the IP level — regardless of application.

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
    shortDef: "An SSL VPN provides remote access to a network over HTTPS, using TLS encryption. Unlike traditional IPsec VPNs, SSL VPNs work through standard web traffic ports and don't require special client-side network configuration.",
    categories: ["Networking", "Security"],
    related: ["ipsec", "radius"],
    content: `An SSL VPN provides remote access to a network over HTTPS, using TLS encryption. Unlike traditional IPsec VPNs, SSL VPNs work through standard web traffic ports and don't require special client-side network configuration.

The defining advantage of SSL VPN over IPsec for remote access is accessibility. IPsec requires UDP ports that are often blocked by corporate firewalls, hotels, and restrictive networks. SSL VPN runs over TCP port 443 — the same port as HTTPS — which is almost never blocked. A remote user connecting from a hotel or airport can reliably establish an SSL VPN connection even when IPsec would fail.

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
    shortDef: "SD-WAN (Software-Defined WAN) is an approach to managing wide area network connections that uses software to intelligently route traffic across multiple internet circuits — fiber, cable, LTE — rather than relying on a single expensive leased line.",
    categories: ["Networking", "Cloud & Infrastructure"],
    related: ["wan"],
    content: `SD-WAN (Software-Defined WAN) is an approach to managing wide area network connections that uses software to intelligently route traffic across multiple internet circuits — fiber, cable, LTE — rather than relying on a single expensive leased line.

Traditional multi-site connectivity meant MPLS circuits — private, reliable, carrier-managed, and expensive. SD-WAN was born from the observation that multiple commodity internet links, intelligently managed, can provide equivalent or better performance at a fraction of the cost.

An SD-WAN appliance at each site monitors the performance of all available WAN links in real time — measuring latency, jitter, and packet loss. It routes traffic dynamically based on these metrics: voice calls go over the lowest-latency path, backup traffic goes over whatever's cheapest, and if a link degrades below a threshold, traffic automatically fails over to the next best option.

Key capabilities most SD-WAN platforms offer:

**Application-aware routing** — recognize specific application traffic (Zoom, Microsoft 365, Salesforce) and route it to the optimal path regardless of IP address.

**Link bonding** — combine multiple circuits for higher aggregate bandwidth.

**Zero-touch provisioning** — new sites can be brought online by shipping a pre-configured appliance, with the device calling home for its configuration on first boot.

**Centralized management** — all sites managed from a single dashboard with visibility into performance across the entire WAN.

For organizations with multiple offices that are overpaying for MPLS, or that have reliability problems with a single internet circuit, SD-WAN is often the right answer. For single-site organizations, standard dual-WAN failover on a firewall may be sufficient without the added complexity.`,
  },
]

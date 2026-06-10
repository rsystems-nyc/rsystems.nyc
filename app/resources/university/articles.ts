export interface Article {
  slug: string
  title: string
  category: string
  description: string
  content: string // markdown string — rendered via renderMarkdown in [slug]/page.tsx
  related?: string[] // optional array of slugs
}

export const articles: Article[] = [
  // ── Article 1 ───────────────────────────────────────────────────────────────
  {
    slug: "directory-services",
    title: "Directory Services",
    category: "Identity",
    description: "The major players, what they actually do, and how to choose between them.",
    content: `## What a Directory Service Does

A directory service is the software that manages user identities in your organization. Every employee has an account. That account controls what they can access, what policies apply to their devices, and how they authenticate to the applications your business depends on.

If you have more than about five people sharing technology, you need a directory. Without one, you're managing individual accounts in each application independently — a practice that scales badly, creates security gaps, and turns offboarding into a multi-hour manual process.

## The Major Players

### Microsoft Active Directory (On-Premises)

The oldest and most widely deployed enterprise directory. Active Directory (AD) runs on Windows Server infrastructure inside your physical network and has been the backbone of enterprise IT since 1999. It uses LDAP for directory queries, Kerberos for authentication, and Group Policy for enforcing device and user policies.

Active Directory is powerful and deeply understood, but it's fundamentally an on-premises technology. It assumes users are in the office, connected to the network directly. The shift to remote work and cloud applications has created friction — connecting AD to cloud applications and remote users requires additional infrastructure (Azure AD Connect, ADFS, VPN) that adds complexity and operational overhead.

Best suited for: larger organizations with significant Windows on-premises infrastructure, legacy application dependencies, and IT teams with deep AD expertise.

### Microsoft Entra ID (Formerly Azure AD)

Microsoft's cloud-native identity platform. It's not a direct replacement for on-premises AD — different protocols, different architecture — but for organizations starting fresh or moving fully to the cloud, Entra ID is Microsoft's answer to "directory in the cloud."

Entra ID handles SSO to thousands of applications, conditional access policies, MFA enforcement, and device management via Intune. If your organization uses Microsoft 365, you're already partially on Entra ID — your M365 accounts live there.

Best suited for: organizations committed to the Microsoft ecosystem, or those supplementing on-premises AD with cloud identity capabilities (hybrid environments).

### JumpCloud

JumpCloud is a cloud-native directory-as-a-service. It manages users, devices, and access — cross-platform, from day one — with no on-premises server required. It speaks LDAP, RADIUS, SAML, and SCIM, and handles Windows, Mac, and Linux natively.

For many small and mid-sized organizations, JumpCloud is the right answer: no infrastructure to maintain, true cross-platform device management, built-in SSO, and per-seat pricing that scales with headcount.

Best suited for: organizations with 10–500 users, mixed Mac/Windows environments, cloud-first infrastructure, or teams without an on-premises footprint that would justify Active Directory.

### Okta

Okta is purpose-built for identity federation and SSO at scale. It excels at being the identity layer across a large, complex application portfolio — connecting hundreds of SaaS tools, enforcing access policies, and managing identity lifecycle events. It's less a device directory and more an identity federation platform.

Best suited for: larger organizations with complex application portfolios and existing device management infrastructure, or where the primary problem is SSO across many applications rather than managing the device fleet.

### Google Workspace (As an IdP)

Google Workspace can function as a lightweight identity provider for Google-first organizations. Google accounts support SAML/OIDC-based SSO, and Cloud Identity provides basic MDM. For a small organization already on Workspace, it may be enough — but it's not a full-featured directory.

Best suited for: small teams fully on Google Workspace that don't need cross-platform device management.

## How to Choose

Three questions drive the decision:

**What devices do your employees use?**
Windows-only shops have a natural path to Active Directory or Entra ID. Cross-platform environments (Mac + Windows + Linux) favor JumpCloud. Cloud-first teams with MacBooks might get by with Google's identity tools.

**Where does your infrastructure live?**
On-premises infrastructure → Active Directory is proven. Cloud-first or hybrid → Entra ID (Microsoft-centric) or JumpCloud (platform-agnostic) are better fits.

**How complex is your application portfolio?**
Five applications: any directory works. Fifty applications with varying SSO requirements: the sophistication of your identity layer starts to matter. Okta or a well-configured Entra ID become more compelling.

## A Note on Migration

Changing your directory is not trivial. Every application tied to SSO, every device policy, every user lifecycle workflow is rooted in it. The time to choose thoughtfully is before you need to migrate.

The most common migration paths we see: on-premises AD → JumpCloud (for cross-platform, cloud-first organizations) and AD → Entra ID (for Microsoft-committed shops). Both are manageable with proper planning, but both require careful handling of application integrations and device management on the receiving end.`,
  },

  // ── Article 2 ───────────────────────────────────────────────────────────────
  {
    slug: "network-fundamentals",
    title: "Network Fundamentals",
    category: "Networking",
    description: "How your network actually works, what each device does, and what you get as you spend more.",
    content: `## The Basics

Your network is a system for moving data between devices. Every device — laptop, server, printer, camera — has an IP address (its logical address on the network) and a MAC address (its hardware identifier). When your laptop needs to reach your file server, the network handles figuring out how to get there.

Think of your IP address using the syntax xxx.xxx.xxx.yyy — where xxx.xxx.xxx defines your subnet (what "room" you're in), and yyy is your specific address within that room. Anyone in the same room — anyone on the same subnet — can talk to anyone else in the room directly.

## The Subnet: Your Room

Imagine you're standing in a room made up of 1×1 tiles. Each tile fits one device, one IP address. The most common rooms are 255 tiles large (a /24 subnet). Your subnet mask defines the room size — 255.255.255.0 means a 255-tile room; 255.255.254.0 means 511 tiles.

The short notation you'll see: 192.168.1.0/24 means the subnet 192.168.1.x with 255 addresses. Until you've memorized the /23, /24, /28 stuff, use a subnet calculator — even people who've been doing this for years do.

## DHCP: The New Guy Gets a Name Tag

DHCP — Dynamic Host Configuration Protocol — is how a device automatically gets an IP address when it joins the network. Think of it as the room manager. When a new device plugs in (Layer 1 physical connection established), the DHCP server sees "Oh, someone new just walked in the room," walks over, and says: "Hey new guy, here's a name tag — your IP is 192.168.1.118."

DHCP assigns more than just your IP: it also tells you the subnet mask, the gateway address (the router — the bouncer at the door who manages traffic to other rooms), and the address of a DNS server.

When your iPhone joins home WiFi, the DHCP server on your router assigns a local IP. When your modem connects to the ISP, their DHCP server assigns your public IP. Two different DHCP servers, two different "rooms."

## DNS: The Phone Book

The Domain Name System translates names into numbers — rsystems.nyc into the IP address your browser actually connects to. It's like a phone book, or more specifically, a network of people each holding a phone book.

When you ask your DNS server "Where is rsystems.nyc?" it looks in its own records. If it doesn't know, it asks another DNS server. If that one doesn't know, it works up the hierarchy until it finds the answer and returns it.

Your local DNS server knows your internal resources (server.yourcompany.com = 192.168.1.10). For everything else, it asks upstream.

## MAC Addresses and ARP

A MAC address is the hardware identifier burned into every network interface at manufacture. Where IP addresses are logical (assignable, changeable), MAC addresses are physical (98:e0:d9:8f:65:b1 — fixed to that hardware).

ARP (Address Resolution Protocol) is how one device on a network finds the device with a given IP. It works like this: a device needs to reach 192.168.1.50, so it broadcasts to the room: "Hey everyone — who is 192.168.1.50?" The device with that IP responds: "That's me — my MAC is 98:e0:d9:8f:65:b1." Everyone else ignores the question. IP addresses can change; MAC addresses don't — ARP bridges between them.

## The Key Devices

### The Switch

The switch is the physical connectivity layer — the device all wired devices plug into. Its job is to move data frames between devices on the same network, using MAC addresses to make forwarding decisions.

What you get as you spend more:
- More ports and higher port speeds (1G → 10G → 25G)
- Larger PoE budgets (for APs, cameras, phones)
- Management features: VLANs, link aggregation, QoS
- Redundant power supplies and fans
- Stacking capability

**Consumer ($50–$500):** No VLANs, limited visibility. Fine for a home or tiny office. **Business ($500–$5,000):** Fully managed, VLAN support, PoE. Cisco Business, Netgear Insight. **Enterprise ($5,000+):** Chassis-based, StackWise, redundant power. Cisco Catalyst 9300/9500 is the benchmark.

### The Firewall

The firewall sits between your network and the internet, enforcing rules about what traffic is allowed. It provides NAT (how your private internal addresses appear as a single public IP), and in modern implementations, inspects traffic for threats.

What you get as you spend more: higher inspection throughput, more sophisticated threat intelligence, SSL inspection, HA redundancy options.

**SMB ($200–$2,000):** SonicWall TZ, Fortinet FortiGate 60F. Proper stateful inspection, VPN, basic IPS. **Enterprise ($2,000+):** SonicWall NSA/NSsp, Palo Alto. Full threat inspection at multi-gigabit speeds.

### The Access Point

Access points bridge wired and wireless. They connect to your switch via ethernet and create the WiFi your devices connect to.

What you get as you spend more: better antenna design, more radio chains (2×2 vs 4×4 MIMO), capacity for more concurrent clients, and controller-managed roaming that prevents devices from clinging to distant APs.

## VLANs

A VLAN creates a logical network segment on the same physical infrastructure. Common deployments:
- **Corporate VLAN:** laptops, servers — full internal access
- **Guest WiFi VLAN:** internet only, isolated from internal resources
- **IoT VLAN:** cameras, access control, building systems — isolated from everything
- **VoIP VLAN:** phone traffic with QoS priority

VLANs require managed switches and a firewall handling inter-VLAN routing. Without them, every device on your network can reach every other device — a real security problem in any environment with sensitive data.

## Ports

When devices on a network communicate, they use ports — think of them like radio channels on a walkie-talkie. Port 80 is web traffic (HTTP). Port 443 is encrypted web (HTTPS). Port 22 is SSH. Port 548 is AFP file sharing. Ports let a single device run multiple services simultaneously, and let firewalls control which services are accessible from where.

Port forwarding is how you expose an internal service to the outside world: tell the firewall to forward all traffic arriving on port 80 to 192.168.1.214 (your internal web server). Without that rule, external traffic hits the firewall and has no idea who to talk to.

## The Progression

Minimum viable network: one managed switch, one firewall, one access point. Proper small business network: managed switch stack, business-grade firewall, controller-managed APs, VLANs. Enterprise network: redundant switch chassis, HA firewall pair, enterprise APs, QoS, full monitoring.

The cost difference is redundancy (no single points of failure), inspection throughput (performance under load), and management granularity (visibility and control over what's actually happening).`,
  },

  // ── Article 3 ───────────────────────────────────────────────────────────────
  {
    slug: "wifi",
    title: "WiFi: How It Works and Why It's Hard",
    category: "Networking",
    description: "Radio physics, the consumer vs. enterprise gap, and what good WiFi design looks like.",
    content: `## Why WiFi Is Harder Than It Looks

WiFi looks simple because it's invisible. That invisibility is precisely what makes it difficult to design, troubleshoot, and operate well.

## The Physics

WiFi is radio — electromagnetic waves at specific frequencies carrying your data through the air. These waves have a dual nature: they sometimes behave like particles (traveling in straight lines like a bullet) and sometimes like waves (spreading outward, penetrating matter, bouncing off surfaces).

That dual nature is critical to developing intuition about wireless in the real world. A 5GHz signal behaves more particle-like — straighter paths, more absorption by walls. A 2.4GHz signal behaves more wave-like — longer range, better wall penetration, more susceptibility to interference from other sources using the same frequencies.

## The Frequency Bands

**2.4 GHz:** Longer range, better penetration through walls and floors. Only 3 non-overlapping channels in the US. Heavily congested — shared with microwaves (water's resonant frequency is 2.45GHz, which is why microwaves work), Bluetooth, baby monitors, and cordless phones. Lower maximum speeds. Legacy band, but many older devices are 2.4GHz only.

**5 GHz:** Shorter range, worse wall penetration. 25 non-overlapping channels (including DFS channels shared with radar). Much higher speeds, much less congestion. The modern primary band.

**6 GHz (WiFi 6E):** Very short range. Completely clean spectrum with no legacy device interference. Highest speeds. Limited to high-end enterprise hardware and modern client devices.

## Why Channels Matter

A channel is a narrow slice of the frequency spectrum. The 2.4GHz band has only 11 channels in the US but only channels 1, 6, and 11 are non-overlapping — the rest cause adjacent-channel interference. In a dense office building with dozens of neighboring WiFi networks, every AP is fighting for one of three usable channels. This is why 2.4GHz feels congested in NYC in a way that 5GHz doesn't.

Channel width trades off throughput vs. spectrum efficiency. 20MHz channels allow more devices to coexist. 40MHz, 80MHz, or 160MHz channels deliver more bandwidth per device but leave less spectrum for neighbors. In a dense environment (stadium, conference, open office), narrower channels serve more devices. In a home or small office, wider channels maximize speed.

## The Client Decision Problem

When a laptop joins a WiFi network, which AP it connects to — and when it roams to a closer one — is the client's decision, not the network's. Clients are notoriously bad at this.

Classic example: you open your laptop at the far end of a long hallway and connect to WiFi. As you walk toward the other end, your laptop should detect the signal from the far AP getting stronger and roam — but it often doesn't. The "sticky client" problem is a client-side behavior that holds degraded connections to distant APs long past when roaming would improve performance.

This is where WiFi controllers matter.

## Controllers

An enterprise WiFi controller monitors all APs and all connected clients simultaneously. When it detects a client that should have roamed but didn't, it sends a command to the current AP to drop that client, forcing it to seek a better connection. From the user's perspective: seamless. From the network's perspective: controlled.

Controllers also coordinate channel assignments across APs, adjusting dynamically based on RF conditions to minimize co-channel interference.

## Consumer vs. Enterprise

**Consumer WiFi (Eero, Orbi, Google Nest WiFi):** Each AP makes independent decisions. No RF coordination between units. No VLAN support. No per-device diagnostics. Adequate for homes and very small offices.

**Enterprise WiFi (Ruckus, Cisco Catalyst, Aruba, Meraki, Ubiquiti UniFi at the prosumer level):** Controller-managed. Directed roaming. Channel coordination. Per-client signal quality metrics. Full VLAN support. Client density planning.

## What Good WiFi Design Looks Like

A proper enterprise deployment starts with understanding the physical environment before installing anything. Coverage (signal everywhere) is not the same as capacity (enough bandwidth for concurrent users at load).

General principles:
- 5GHz preferred; 2.4GHz for devices that need it
- Overlapping cells at 20–30% for roaming, not 80% (which creates interference)
- Client density planning: how many devices per AP at peak?
- Separate SSIDs per VLAN, proper segmentation through the wireless layer
- Survey the RF environment before finalizing AP placement

## When Consumer WiFi Is Adequate

A 5-person team in a single open-plan space with no compliance requirements: consumer mesh WiFi works fine. The inflection point where it stops being adequate is usually around 15–20 simultaneous heavy users, any meaningful segmentation requirement, or environments with challenging RF characteristics (large floor plates, concrete construction, multiple stories).`,
  },

  // ── Article 4 ───────────────────────────────────────────────────────────────
  {
    slug: "dns-email-authentication",
    title: "DNS, SPF, DKIM, and DMARC",
    category: "DNS",
    description: "Your email reputation depends on getting this right. Here's how it all connects.",
    content: `## DNS: The Foundation

DNS — Domain Name System — translates human-readable names (rsystems.nyc) into IP addresses that computers use to communicate. When you type a URL into a browser, your computer asks a DNS resolver for the IP address of that domain. The resolver queries a hierarchy of servers and returns the answer.

### The Hierarchy

DNS is a hierarchy of authority, separated by periods. The root domain is at the top (empty, not interacted with directly). Below it are Top Level Domains (TLDs): .com, .org, .net, .nyc, .io. Below that are Second Level Domains (SLDs) — the domain you register. google.com is an SLD under .com. mail.google.com is a subdomain of google.com.

Your domain's DNS records are stored on authoritative nameservers controlled by your DNS provider. These records are the source of truth for anyone asking questions about your domain.

### Key Record Types

- **A**: Maps a hostname to an IPv4 address
- **AAAA**: Maps a hostname to an IPv6 address
- **CNAME**: An alias pointing one hostname to another
- **MX**: Specifies which mail servers accept email for your domain
- **TXT**: Text data — used for verification, SPF, DKIM, and DMARC
- **NS**: Identifies the authoritative nameservers for your domain

### TTL and Propagation

Every DNS record has a TTL — Time to Live — the number of seconds that resolvers should cache the answer before checking again. A TTL of 3600 means cached for one hour. Lower TTLs mean faster propagation of changes but more load on nameservers. Before a planned DNS migration, lower your TTLs 24–48 hours in advance. Restore them after.

## SPF: The Authorized Senders List

SPF (Sender Policy Framework) is a TXT record that specifies which mail servers are authorized to send email claiming to be from your domain. The goal is to prevent other servers from sending email as you.

A basic SPF record:
\`\`\`
v=spf1 include:_spf.google.com ~all
\`\`\`

This says: email from this domain should come from servers in Google's SPF record. The ~all at the end is a soft fail — email from other sources is suspect. -all is a hard fail (reject).

The challenge: you likely have multiple legitimate email sources. Your mail server, your marketing platform, your CRM, your billing system. Each needs to be in your SPF record. SPF also has a hard limit of 10 DNS lookups in the resolution chain — many organizations unknowingly exceed this, silently breaking their SPF checks.

## DKIM: The Cryptographic Signature

DKIM (DomainKeys Identified Mail) cryptographically signs outgoing email. Your mail server signs each message with a private key. The corresponding public key is published in DNS. Receiving servers verify the signature — confirming the message came from your domain and wasn't altered in transit.

DKIM survives email forwarding. SPF doesn't (forwarded email looks like it came from the forwarding server, not yours). This makes DKIM the more reliable signal.

Each service sending email on your behalf has its own DKIM key pair. You publish each public key in DNS under a selector:
\`\`\`
google._domainkey.yourdomain.com TXT "v=DKIM1; k=rsa; p=[public key]"
\`\`\`

## DMARC: Enforcement and Reporting

DMARC (Domain-based Message Authentication, Reporting, and Conformance) ties SPF and DKIM together. It tells receiving servers what to do when email fails authentication, and sends you reports about what they observed.

A DMARC record:
\`\`\`
v=DMARC1; p=reject; rua=mailto:dmarc@yourdomain.com; pct=100
\`\`\`

Policy levels:
- **p=none**: Monitor only, take no action — the starting point
- **p=quarantine**: Failing email goes to spam
- **p=reject**: Failing email is rejected outright — the goal

## Getting to p=reject

Most organizations should not move directly to p=reject. The correct journey:
1. Set p=none and configure report delivery (rua) — collect aggregate reports for 2–4 weeks
2. Parse reports to identify every source sending as your domain
3. Ensure all legitimate sources have SPF records and DKIM configured
4. Test with p=quarantine; pct=10 (quarantine 10% of failing mail) to catch issues
5. Gradually increase pct, verify no legitimate mail is failing
6. Move to p=reject

The reporting data tells you who's sending email that claims to be from you — which is often surprising. Old marketing platforms, billing systems, third-party ticketing tools, forgotten SaaS products — all show up in DMARC reports.

## Why It Matters

Without proper DMARC configuration:
- Your emails are more likely to land in spam
- Anyone can send phishing emails appearing to come from your domain
- Your email deliverability degrades over time

With p=reject properly implemented:
- Spoofing your domain is blocked at the receiving server
- Deliverability improves across the board
- Your domain qualifies for BIMI`,
  },

  // ── Article 5 ───────────────────────────────────────────────────────────────
  {
    slug: "dns-bimi",
    title: "DNS and BIMI",
    category: "DNS",
    description: "Display your logo in the inbox — what it takes and whether it's worth it.",
    content: `## What BIMI Does

BIMI — Brand Indicators for Message Identification — lets organizations that have implemented DMARC enforcement display their logo directly in the inbox. When a BIMI-enabled email client (Gmail, Yahoo Mail, and others) receives a message from a BIMI-configured domain, your logo appears next to the sender name.

The practical effect: legitimate emails become visually identifiable at a glance, and phishing attempts that can't pass your DMARC checks cannot display your logo.

## Prerequisites

BIMI requires:
1. DMARC policy at p=quarantine or p=reject (p=none is not sufficient)
2. A Verified Mark Certificate (VMC) from an approved certificate authority (DigiCert or Entrust)
3. Your logo in a specific SVG format (SVG Tiny 1.2 profile)
4. A BIMI DNS TXT record

## The Verified Mark Certificate

VMCs require trademark registration. The certificate authority verifies that you own the trademark rights to the logo you're displaying. This is what prevents anyone from claiming to display another company's logo.

VMCs typically cost $1,000–$1,500 per year. The trademark verification process adds a few weeks to setup. This is the primary friction point — if your logo isn't trademarked, you'll need to complete that process first.

## The BIMI DNS Record

\`\`\`
default._bimi.yourdomain.com TXT "v=BIMI1; l=https://yourdomain.com/logo.svg; a=https://yourdomain.com/cert.pem"
\`\`\`

The l= points to your hosted SVG logo. The a= points to your VMC.

## Client Support

Gmail and Yahoo Mail support BIMI. Microsoft Outlook/365 does not currently implement it. Given that Gmail represents a significant share of business email receipt, BIMI is worthwhile for organizations with strong brand identity and solid email authentication already in place.

## Is It Worth It?

For most organizations: only after you have DMARC fully enforced. The DMARC work delivers the real security value — BIMI is the branding benefit that comes after. If you're at p=reject with full email authentication in place and you have a registered trademark on your logo, BIMI is a natural next step. If you haven't completed the DMARC implementation journey, start there.`,
  },

  // ── Article 6 ───────────────────────────────────────────────────────────────
  {
    slug: "virtualization",
    title: "Virtualization and Cloud",
    category: "Cloud & Infrastructure",
    description: "Private vs. public cloud, VMware vs. Azure/AWS/GCP, and where each workload belongs.",
    content: `## The Hypervisor

A hypervisor is the software layer that makes virtualization work. It sits above physical hardware and allocates CPU, RAM, storage, and network resources to virtual machines (VMs). From each VM's perspective, it's running on dedicated hardware — the abstraction is complete.

Two types:

**Type 1 (bare metal):** Runs directly on hardware, no underlying OS. VMware ESXi, Microsoft Hyper-V, Xen. More efficient, better performance, used in production environments.

**Type 2 (hosted):** Runs as an application on top of an existing OS. VMware Fusion, VirtualBox, Parallels. Convenient for development and testing; not used for production infrastructure.

## VMware: On-Premises Virtualization

VMware vSphere (ESXi + vCenter) is the dominant enterprise on-premises virtualization platform. It provides the full stack: hypervisor, management console, live VM migration between hosts (vMotion), high availability, distributed resource scheduling, and storage virtualization.

VMware does best:
- Workloads that must remain on-premises for compliance, latency, or licensing reasons
- Predictable performance with full hardware control
- Environments with significant Dell/HPE/Cisco infrastructure already in place
- Workloads where software licensing prohibits or penalizes cloud deployment

The post-Broadcom reality: VMware's 2023 acquisition changed the economics significantly. Perpetual licensing is gone; subscription costs are considerably higher for many organizations. This is accelerating cloud migration conversations for customers who previously had no financial incentive to move.

## AWS, Azure, and GCP: Public Cloud

The hyperscalers offer virtualization as a service. You rent compute rather than own hardware — no capital expense, no hardware refresh cycles, elastic scale.

**AWS:** Most mature platform, broadest service portfolio. Right for complex application architectures and teams with AWS expertise.

**Azure:** Best integration with Microsoft-centric environments — Active Directory, SQL Server, .NET. Microsoft licensing incentives often favor running Windows workloads in Azure.

**GCP:** Best for data analytics, machine learning, containerized workloads. Kubernetes originated at Google; GKE remains the benchmark managed Kubernetes offering.

## The Real Decision: Workload by Workload

The on-premises vs. cloud debate is often framed as binary. It isn't. The right question is: where does this specific workload run best?

**On-premises is right when:**
- The workload is latency-sensitive (direct-attached storage for CAD/video, high-frequency queries)
- Compliance requires data residency in a specific location
- Workload is stable and predictable — reserved on-premises capacity is often cheaper than cloud for steady-state compute
- Existing capital investment and compatible licensed software

**Public cloud is right when:**
- You need to scale rapidly and unpredictably
- Geographic redundancy and disaster recovery are requirements
- The workload is variable — cloud pay-per-use makes sense
- You want to eliminate hardware refresh cycles and capital expense

Most organizations end up hybrid: on-premises for core infrastructure, latency-sensitive workloads, and predictable capacity — cloud for burst capacity, DR, and applications that benefit from managed services.`,
  },

  // ── Article 7 ───────────────────────────────────────────────────────────────
  {
    slug: "remote-connectivity",
    title: "Remote Connectivity",
    category: "Networking",
    description: "S2S VPN, P2S VPN, SSL VPN, and Zero Trust — the differences that matter.",
    content: `## Site-to-Site VPN (S2S)

Site-to-site VPN connects two networks permanently. It's the technology used when two physical locations — offices, a branch and headquarters, an office and a data center — need to communicate as if on the same local network.

How it works: VPN-capable firewalls at both locations negotiate an encrypted IPsec tunnel. Traffic destined for the remote network is encrypted and sent through the tunnel; the remote firewall decrypts it and delivers it locally. Users at either location don't know the other network exists behind the tunnel.

### IPsec: The Underlying Protocol

IPsec uses a two-phase approach. Phase I establishes a secure management tunnel — the two firewalls negotiate and agree on encryption parameters (hashing algorithm, authentication method, Diffie-Hellman group, tunnel lifetime, encryption cipher) and exchange keys using Internet Key Exchange (IKE). Once Phase I is up, Phase II establishes the data tunnel through which actual traffic flows.

The Diffie-Hellman key exchange is what allows two parties who've never met to agree on a shared secret key without an eavesdropper being able to derive it — even if they observe the entire negotiation. This is fundamental to IPsec's security.

S2S use cases:
- Branch office to headquarters
- Office to on-premises data center
- Office to cloud virtual network (Azure VPN Gateway, AWS VPN Gateway)

S2S is network-to-network. It requires a VPN device at each end and is meant for permanent connectivity between fixed locations.

## Point-to-Site VPN (P2S)

Point-to-site VPN connects an individual device to a remote network. This is the traditional "employee VPN" — a user installs VPN client software, connects to the company's VPN gateway, and their traffic routes through the company network as if physically in the office.

How it works: the gateway accepts incoming connections from authenticated clients. The client authenticates (credentials + MFA, or certificate), a virtual network adapter appears on the client device, and traffic destined for company resources routes through the tunnel.

Use cases:
- Remote employees accessing on-premises file servers, printers, or internal applications
- IT staff managing internal infrastructure remotely
- Any scenario requiring full internal network access from outside the office

## SSL VPN

SSL VPN is a category of P2S VPN that uses SSL/TLS — the same protocol as HTTPS — rather than IPsec. The practical advantage: SSL/TLS on port 443 is permitted through virtually every corporate and hotel firewall, while IPsec is frequently blocked. SSL VPN works everywhere.

Most enterprise VPN products support SSL VPN as one mode: SonicWall NetExtender/Mobile Connect, Cisco AnyConnect, Palo Alto GlobalProtect, Fortinet FortiClient.

## The Modern Alternative: Zero Trust Access

Traditional VPN gives remote users broad network access — which is also what makes it a liability. A compromised device connected via VPN can reach your entire network.

Zero Trust Network Access (ZTNA) replaces broad network access with application-level access. Instead of joining the network, users access specific applications — and access decisions factor in identity, device health, location, and context.

Cloudflare Access, Zscaler Private Access, and Azure App Proxy are mature ZTNA implementations. For organizations replacing aging VPN infrastructure, evaluating ZTNA alongside traditional options is worthwhile.

## Choosing Between S2S and P2S

**S2S:** You have two fixed locations that need permanent connectivity. Resources at each site must be reachable from the other.

**P2S:** Individual users need remote access — employees working from home, IT staff managing servers remotely.

In practice, most organizations need both: S2S for the connection to a data center or cloud network, and P2S for traveling and remote employees.`,
  },

  // ── Article 8 ───────────────────────────────────────────────────────────────
  {
    slug: "fiber-optics",
    title: "Fiber Optics",
    category: "Cabling",
    description: "When to use it, what you're buying, and how single-mode and multi-mode differ.",
    content: `## How Fiber Works

Fiber optic cabling carries data as pulses of light through glass or plastic fiber, rather than electrical signals through copper.

The physics: light enters a fiber strand and travels through it via total internal reflection — a phenomenon where light hitting the boundary between the glass core and the surrounding cladding at a shallow enough angle bounces completely back into the core rather than passing through. The light stays trapped in the glass, bouncing its way along the fiber across long distances.

That light represents binary data in a Morse-code fashion: light on for 1, light off for 0, pulsed at extremely high frequencies. A laser or LED transceiver generates the pulses; a receiving transceiver detects them and converts them back to electrical signals the network equipment can use.

## Single-Mode vs. Multi-Mode

**Single-mode fiber (SMF):**
- Very thin core (9 microns)
- A single light path travels through the fiber
- Extremely low signal attenuation — spans 40km+ without amplification
- Requires precise, laser-based transceivers
- Higher per-transceiver cost
- Standard grades: OS1 (tight-buffered, indoor), OS2 (loose tube, outdoor/longer runs)
- Used for: telecom infrastructure, WAN links, campus backbone between buildings

**Multi-mode fiber (MMF):**
- Larger core (50 microns for modern OM grades)
- Multiple light paths travel simultaneously
- Higher attenuation — practical range is 300m–2km depending on speed
- Works with LED-based or VCSEL transceivers (less expensive)
- Standard grades: OM1 (100Mbps), OM2 (1G), OM3 (10G to 300m), OM4 (10G to 550m, 40G/100G to shorter distances)
- Used for: within-building runs, data center horizontal cabling, server-to-switch connections

For most data center and intra-building applications: OM3 or OM4 multi-mode. For building-to-building or anything over ~500m: single-mode.

## Common Connectors

- **LC**: Small form factor with a latching mechanism. The standard in modern enterprise networking — almost everything uses LC.
- **SC**: Larger square connector. Common in older installations, still widely deployed.
- **MPO/MTP**: Multi-fiber connector terminating 8, 12, or 24 fibers simultaneously. Used in high-density data center applications.

## Transceivers

A transceiver (SFP, SFP+, QSFP28, etc.) sits in a port on a switch or router and does one job: convert electrical data signals into optical pulses (transmit) and optical pulses back into electrical signals (receive). The transceiver is wavelength-specific and must match the fiber type (single-mode or multi-mode) and the distance requirement.

Common form factors:
- **SFP/SFP+**: 1G/10G. The standard for most enterprise switching
- **QSFP28**: 100G. Data center standard for spine/leaf interconnects
- **QSFP-DD**: Up to 400G. At the forefront of data center density

## When to Use Fiber vs. Copper

**Fiber is right when:**
- Run length exceeds ~90m (copper's structured cabling limit)
- The path crosses between buildings (copper has ground potential issues; fiber is electrically isolated)
- EMI is a concern (near industrial equipment, MRI machines)
- Bandwidth requirements at distance exceed what copper supports

**Copper is typically preferred when:**
- Runs are under 90m
- PoE is needed — fiber cannot carry power
- Cost is a constraint and copper meets the speed/distance requirements`,
  },

  // ── Article 9 ───────────────────────────────────────────────────────────────
  {
    slug: "copper-cabling",
    title: "Copper Cabling: Cat5e, Cat6, and Cat6A",
    category: "Cabling",
    description: "What the differences actually mean for new installations and PoE environments.",
    content: `## The Standards

**Cat5e (Enhanced Category 5):**
- Maximum speed: 1 Gbps at 100m
- Frequency: 100 MHz
- Status: Adequate for 1G. Still functional in millions of installations. Not recommended for new work.

**Cat6 (Category 6):**
- Maximum speed: 1 Gbps at 100m; 10 Gbps at up to 55m
- Frequency: 250 MHz
- Status: The current baseline for most new office installations. Supports 10G for shorter runs, better noise rejection than Cat5e.

**Cat6A (Augmented Category 6):**
- Maximum speed: 10 Gbps at 100m (10GBASE-T)
- Frequency: 500 MHz
- Status: The right specification for new installations where 10G to the desktop is a current or foreseeable requirement. Larger diameter, more stringent construction, more expensive, harder to work with.

## What This Means for New Installations

**For new office buildouts: Cat6A.** The incremental material cost over Cat6 is modest relative to total installation cost (materials are typically 30–40% of total; labor is the larger component). Cat6A gives you 10G-ready infrastructure through multiple switch and workstation refresh cycles.

**Cat6** is acceptable for budget-constrained projects where 10G to the desktop is genuinely not anticipated.

**Cat5e should not be specified for new work.** If you're inheriting Cat5e infrastructure, it's adequate for 1G applications until there's a reason to replace it. Don't extend it.

## PoE and Heat

Higher PoE standards (IEEE 802.3bt / PoE++) deliver up to 90W per port. That power runs through the cable as current, generating heat. Dense PoE deployments — a ceiling full of access points, a conference room with multiple powered devices — can raise cable temperatures meaningfully in a bundled conduit.

Cat6A handles PoE thermal load better than Cat6 due to its construction. In any high-density PoE environment (12+ PoE devices per 100-cable bundle), Cat6A is the appropriate specification even if 10G bandwidth isn't the primary driver.

## The Long View

Structured cabling outlasts everything else in your infrastructure. A properly installed Cat6A plant should serve through 3–4 switch generations and 5–6 workstation refresh cycles before the cabling itself becomes the limiting factor.

The labor cost to re-cable an office — pulling cables, coring walls, terminating jacks — is typically 2–5x the material cost. Specify the category you want to live with for 15 years.`,
  },

  // ── Article 10 ──────────────────────────────────────────────────────────────
  {
    slug: "autopilot",
    title: "Windows Autopilot",
    category: "Microsoft",
    description: "Zero-touch device deployment — what it requires, what it delivers, and when it's worth it.",
    content: `## How Autopilot Works

Windows Autopilot is Microsoft's zero-touch device deployment system. When a new Windows PC powers on for the first time and connects to the internet, it queries Microsoft's servers, finds its provisioning profile, and configures itself — joining your directory, enrolling in Intune, installing required apps, and applying security policies — with no IT staff handling the machine.

What happens during provisioning:
1. Device connects to internet (during Windows out-of-box experience)
2. Autopilot profile downloads
3. Device joins Entra ID (and optionally on-premises AD in hybrid scenarios)
4. Intune enrollment occurs
5. Required applications install
6. Security policies apply
7. User signs in to a fully configured, compliant device

## Hardware Registration

Devices need their hardware hash registered in your tenant before Autopilot works.

**Pre-registration through your hardware vendor:** Dell, Lenovo, Microsoft Surface, and most major OEMs can register devices in your tenant at time of purchase. This is the clean path for new deployments — order laptops with your tenant ID, they arrive pre-registered.

**Post-purchase registration:** Run a PowerShell script on the device to extract and upload the hardware hash. Requires physical access and takes a few minutes per machine.

## Enrollment Modes

- **User-driven:** Employee powers on, signs in with work credentials, device provisions itself. Standard mode for most employee deployments.
- **Self-deploying:** Device configures with no user interaction. Used for shared devices, kiosks, conference room hardware.
- **White glove:** IT runs initial provisioning before handing the device to the user. Useful for verifying device health first.
- **Hybrid join:** Device joins both Entra ID and on-premises AD. Required in environments not yet fully migrated to cloud-only identity.

## Requirements

- Microsoft Intune (for policy and app delivery)
- Entra ID (for identity)
- Applications packaged for Intune delivery
- Internet connectivity at first boot
- Hardware pre-registered in your tenant

Autopilot is not an imaging solution. It provisions from a factory-state Windows installation, not a custom image. Applications must be deliverable through Intune — legacy software requiring complex local installation scripts may need packaging work before it's Autopilot-compatible.

## The Economics

For an organization deploying 5 laptops per year, the upfront configuration investment may not pay off. For an organization deploying 50+ devices annually, the time savings are significant: an IT staff member spending 2 hours per device on traditional imaging versus 30 minutes per Autopilot device (mostly unattended) — at scale, that's a material reduction in IT labor cost per device.`,
  },

  // ── Article 11 ──────────────────────────────────────────────────────────────
  {
    slug: "apple-business-manager",
    title: "Apple Business Manager and ADE",
    category: "Apple",
    description: "The foundation of enterprise Apple management — what it enables and how to get started.",
    content: `## What ABM Enables

Apple Business Manager (ABM) is Apple's enterprise portal for organizations deploying Apple devices. Without it, you're managing iPhones, iPads, and Macs like a consumer — manually enrolling each device, buying apps through personal Apple IDs, and losing control when someone factory resets a device.

### Automated Device Enrollment (ADE)

The central capability: when your organization purchases Apple devices through an authorized channel and registers those devices in ABM, they enroll in your MDM platform automatically when first activated. This enrollment is supervised — giving IT access to management controls not available on unsupervised devices — and it's sticky. A factory reset doesn't remove enrollment; the device re-enrolls on next activation.

This is the Apple equivalent of Windows Autopilot. A new iPhone can be shipped directly to an employee; they power it on, sign in, and the device is enrolled, configured, and ready.

### Apps and Books

Organizations can purchase app licenses in bulk and deploy them to managed devices silently — no employee Apple ID required, no personal payment information. Apps deployed via ABM licenses can be reclaimed when an employee leaves, freeing the license for reuse.

### Managed Apple IDs

ABM lets organizations create Apple IDs that belong to the organization rather than the individual. Managed Apple IDs give employees access to iCloud and Apple collaboration features using organizational credentials you control.

## MDM Integration

ABM is a portal and device registration system, not the management system itself. You still need an MDM platform:

- **Jamf Pro:** Enterprise standard for Apple management. Powerful, extensible, expensive. Right for organizations with 100+ Apple devices or complex Mac management requirements.
- **Jamf Now:** Simpler, lower cost, adequate for many smaller deployments.
- **Microsoft Intune:** Adequate for basic Mac management in Microsoft-centric environments. Less feature-complete than Jamf for complex scenarios.
- **JumpCloud:** Good cross-platform MDM for organizations that want a single platform managing both Mac and Windows.

## The Reseller Requirement

Devices must be purchased through an Apple Authorized Reseller or directly from Apple (Business Store) to be automatically registered in ABM. Devices purchased at retail Apple Stores or Amazon are not pre-registered.

You can add these manually via Apple Configurator 2 on a Mac, but it requires physical access to each device. For any significant Apple deployment, establish a purchase relationship with an authorized reseller before buying hardware.`,
  },

  // ── Article 12 ──────────────────────────────────────────────────────────────
  {
    slug: "device-trust-byod",
    title: "Device Trust and Apple BYOD",
    category: "Security",
    description: "Enforcing access policy on personal devices without requiring full MDM enrollment.",
    content: `## What Device Trust Means

Device trust is the policy principle that organizational resources should only be accessible from managed, known devices. A personal device connecting to company email has no IT controls — it could be unpatched, compromised, or shared. Device trust is how you enforce the boundary between managed and unmanaged access.

## The BYOD Challenge

BYOD — Bring Your Own Device — allows employees to use personal devices for work. The security problem: the organization has no visibility into or control over personal devices.

If your access policy requires compliant devices — encrypted disk, current OS, screen lock, no jailbreak — BYOD makes enforcement complicated. Options:
- Require personal device enrollment in MDM: you gain enforcement, but can see personal data. Employees are often uncomfortable with this.
- Limit access for unmanaged devices: reduces productivity, creates friction.
- Accept the risk: what many organizations actually do, often without a conscious decision.

Apple designed a framework specifically for this.

## Apple User Enrollment for BYOD

Apple's User Enrollment is an MDM enrollment mode designed specifically for personal devices. The critical distinction: it creates a cryptographic separation between personal and managed data on the device. MDM can only see and manage organizational data — it cannot:
- View personal apps or photos
- Wipe the entire device (only organizational data can be erased)
- Track personal location or usage

How it works: the employee signs in with a Managed Apple ID (from ABM) on their personal device. User Enrollment creates a separate data volume for organizational apps. Policies apply only to that partition. The employee's personal Apple ID and data remain private and invisible to IT.

This addresses the core employee concern ("I don't want IT on my personal phone") while giving IT control over organizational data and the ability to remotely wipe that data if the device is lost.

## Conditional Access as a Lighter Alternative

For organizations that want device trust without full MDM enrollment, conditional access is the middle path. Instead of managing the device, you verify it meets minimum security requirements before granting access.

Microsoft Entra ID Conditional Access, JumpCloud's conditional access policies, and Okta's device trust features can check for: minimum OS version, disk encryption, screen lock enforcement, absence of jailbreak — and block access from non-compliant devices. No MDM enrollment required.

This is the practical BYOD approach for many organizations: set a minimum bar, enforce it at the access control layer, and block devices that can't meet it — without requiring employees to enroll personal devices in corporate MDM.`,
  },

  // ── Article 13 ──────────────────────────────────────────────────────────────
  {
    slug: "managed-chrome",
    title: "Managed Chrome",
    category: "Google",
    description: "Browser policy management and Chrome OS — what you can control and when it matters.",
    content: `## Two Flavors of Chrome Management

Chrome management comes in two distinct flavors: managing the Chrome browser on any operating system, and managing Chrome OS on Chromebooks. Both are administered through Google Admin Console and require Google Workspace or Cloud Identity licensing.

## Chrome Browser Cloud Management (CBCM)

If your users run Chrome on Windows or Mac, you can manage that browser without touching the OS-level MDM configuration. CBCM lets you:
- Force-install browser extensions organization-wide — and prevent users from removing them
- Block specific websites or categories
- Control sync settings (prevent work browser data from syncing to personal Google accounts)
- Push security policies (Safe Browsing enforcement, password manager settings, certificate management)
- Inventory all managed Chrome browser instances in the Admin Console

This is particularly relevant where Chrome is the primary work browser, or where specific extensions (corporate intranet bookmarks, enterprise password manager extensions, DLP tools) need to be deployed consistently.

## Chrome Profile Management

Chrome profiles let users maintain separate browser environments for different contexts. With managed Chrome, you can require employees to use a specific profile signed in with their organizational Google account for work activities.

The result: clean separation between work and personal browsing — work stays in the work profile, personal browsing stays separate — without requiring a separate device.

## Chrome OS / Chromebook Management

For Chromebook fleets, Google Admin Console provides:
- **Forced enrollment:** Chromebooks registered through reseller can auto-enroll when first activated (similar to Apple ADE or Autopilot)
- **App and extension deployment:** push Chrome apps, Android apps, and extensions
- **User and device policies:** different settings for different organizational units
- **Network configuration:** WiFi profiles, VPN, certificate management
- **Kiosk mode:** lock devices to a single application for shared-use deployments

## When Chrome Management Matters

Clear use cases:
- Compliance requirements around web access (financial services, healthcare)
- Chromebook deployments at any scale
- Specific Chrome extensions that must be present on all devices
- Organizations requiring browser-level visibility for security monitoring

For standard knowledge work environments without specific compliance requirements, browser management adds a layer but isn't the highest-priority configuration. Core security needs — device management, identity, access control — are better addressed at the OS and directory level first. For regulated environments, or anywhere browser behavior needs to be controlled and auditable, Managed Chrome is a meaningful addition.`,
  },

  // ── Article 14 ──────────────────────────────────────────────────────────────
  {
    slug: "1password",
    title: "1Password",
    category: "Security",
    description: "Why every organization should have it, what it actually does, and practical examples.",
    content: `## The Problem It Solves

The average knowledge worker has 70–100 passwords. Without a manager, they do what humans naturally do: reuse the same password across many sites, use passwords they can remember (weak ones), and store them in spreadsheets or Slack messages. Each is a security vulnerability at scale.

1Password generates strong, unique passwords for every account, stores them encrypted, and fills them automatically. You remember one password — the master password to your vault.

## What 1Password Does

Beyond basic storage:
- **Secure notes:** encrypted text for server credentials, license keys, recovery codes, security questions
- **SSH keys:** 1Password stores and provides SSH keys to your terminal — no more key files scattered across machines
- **TOTP:** generates and fills time-based two-factor codes alongside passwords
- **Watchtower:** alerts when any stored credentials appear in known breach databases
- **Travel mode:** remove sensitive vaults from devices when crossing borders; restore with one click on the other side

## Team Features

- **Vaults:** shared credential stores. Marketing shares a vault with social media credentials; Engineering shares a vault with server credentials. One place to manage shared access.
- **Granular permissions:** who can view, edit, share, or manage each vault
- **Audit log:** who accessed what credentials, when
- **Guest access:** give external contractors access to specific credentials without full team membership — revoke when the engagement ends
- **Watchtower:** alerts when stored credentials appear in breach databases

## The Shared Credential Problem It Solves

Before 1Password, shared credentials lived in spreadsheets, Slack messages, email chains. Offboarding meant a scramble to rotate credentials across every system the person had access to.

With 1Password vaults: service accounts — the GitHub organization login, the AWS root account, the domain registrar credentials — live in organizational vaults that belong to the role, not the individual. When someone leaves, you remove their vault access. The credentials don't change. No rotation scramble, no missed accounts, no lingering access.

## Practical Examples

**Developer:** SSH keys in 1Password, available across every machine. Service credentials committed nowhere in code. Git signing keys managed in one place.

**Traveling executive:** Travel mode removes sensitive vaults before entering high-risk border crossings. Emergency recovery codes stored in a secure note, accessible offline.

**Operations team:** Vendor portals, managed service logins, customer-site credentials in shared vaults with appropriate permissions. Contractors get guest access to what they need, nothing more.

**Non-technical employee:** Browser extension fills everything automatically. Watchtower proactively alerts on breached sites. Discounted family plan available — adoption improves when it's useful at home too.

## Nonprofit Pricing

1Password offers significantly reduced pricing for nonprofits. For organizations managing shared credentials on tight budgets, the nonprofit pricing removes the cost objection entirely.`,
  },

  // ── Article 15 ──────────────────────────────────────────────────────────────
  {
    slug: "sig-lite",
    title: "The SIG Lite Questionnaire",
    category: "Security",
    description: "What enterprise customers are asking and how to respond accurately.",
    content: `## What the SIG Lite Is

The Standardized Information Gathering (SIG) questionnaire is a security assessment tool developed by the Shared Assessments Program. The SIG Lite is the abbreviated version — typically 140–200 questions — used by enterprise customers, financial institutions, and regulated organizations to assess the security posture of vendors and service providers.

If you serve enterprise clients, you will receive a SIG Lite.

## The 17 Sections

The questionnaire is organized into content areas labeled A through U (not all letters are used):

**A — Risk Assessment and Treatment**
Risk management program, vendor oversight, subcontractor access, privacy risk assessments, compliance risk management.

**B — Security Policy**
Information security policy existence, management approval, review cadence.

**C — Organizational Security**
Information security function and ownership.

**D — Asset and Information Management**
Asset management policy, data classification, removable media, encryption, data segmentation, retention programs.

**E — Human Resource Security**
HR policy, background screening, employment agreements, security awareness training, termination process.

**F — Physical and Environmental Security**
Physical security program, data center and office controls, visitor management.

**G — Operations Management**
Change management, backup procedures, cloud service models provided, maintenance windows, incident status communication.

**H — Access Control**
Individual user IDs, password policy, remote access, MFA, federated identity (SAML/OIDC), access to client data.

**I — Application Security**
Web application controls, HTTPS enforcement, patch management, log protection, software development lifecycle.

**J — Incident Event and Communications Management**
Incident response program, breach notification procedures, communication methods.

**K — Business Resiliency**
Business continuity and disaster recovery planning, RTO/RPO, testing cadence.

**L — Compliance**
Regulatory compliance frameworks, audit history, certifications (SOC 2, ISO 27001, PCI, HIPAA).

**M — End User Device Security**
Endpoint protection, MDM/device management, encryption on endpoints.

**N — Network Security**
Network segmentation, perimeter controls, wireless security, monitoring.

**P — Privacy**
Privacy program, data subject rights, consent management, cross-border transfer controls.

**T — Threat Management**
Threat intelligence, vulnerability scanning, penetration testing, red team exercises.

**U — Server Security**
OS hardening, patch management on servers, privileged access controls.

## How to Approach It

The SIG Lite is not a test you pass or fail. It's a baseline assessment that helps the requesting organization understand your risk profile. Overstating controls creates liability — if you represent controls you don't have and subsequently experience a breach, that representation becomes part of the incident.

Honest answers, with context where it helps, are better than inflated answers. "No, we don't have a formal written risk management program, but our risk discussions happen at the leadership level quarterly and are documented in board minutes" is a better answer than "Yes" when the honest answer is "No."

## Common Problem Areas

Areas where organizations most often struggle:

**Written security policies:** controls that exist informally but aren't documented.

**Formal risk management:** many SMBs manage risk through experience and judgment rather than structured programs.

**Vendor management:** how do you assess the security posture of your own vendors?

**DR/BCP documentation:** backup procedures that haven't been formally documented or tested.

**Encryption specifics:** what algorithm, what key length, for what data — questions that require knowing the technical details of your own implementations.

## Preparing Before You Receive One

Organizations that respond efficiently have already built their documentation library:
1. Information Security Policy
2. Access Control Policy
3. Data Classification and Handling Policy
4. Incident Response Plan
5. Business Continuity / DR documentation
6. Vendor Management Policy
7. Patch Management Policy

If you don't have these, the SIG Lite is a forcing function to build them — which is actually the right outcome.`,
  },

  // ── Article 16 ──────────────────────────────────────────────────────────────
  {
    slug: "security-questionnaires",
    title: "Security Questionnaires",
    category: "Security",
    description: "What every questionnaire is really asking, and how to build the documentation that makes answering them easy.",
    content: `## Why They Exist

Enterprise customers need to understand the risk their vendors introduce. A data breach at a small service provider can become a breach at the large enterprise they serve — this is how many high-profile incidents have unfolded. Regulatory frameworks (SOC 2, HIPAA, PCI-DSS, NYDFS) increasingly require organizations to assess vendors systematically. Cyber insurance applications have become substantially more detailed for the same reason.

## Common Formats

- **SIG / SIG Lite** — Shared Assessments standard
- **CAIQ** — Cloud Security Alliance; cloud-specific
- **VSA** — Vendor Security Alliance questionnaire
- **Custom questionnaires** — individual enterprise customers, based on their own risk framework
- **Cyber insurance applications** — increasingly thorough, particularly regarding ransomware controls
- **NIST-based assessments** — covering Identify, Protect, Detect, Respond, Recover

## What Every Questionnaire Is Really Asking

Regardless of format, questionnaires consistently assess these domains:

**Identity and Access Management:** Who has access to what? Is access least-privilege? How is access reviewed and revoked? Is MFA enforced? How is privileged access managed?

**Data Security:** What data do you store? How is it classified? Encrypted at rest and in transit? Where is it stored? What are the retention and disposal policies?

**Network Security:** How is the network segmented? What perimeter security exists? How is traffic monitored and logged?

**Endpoint Security:** What controls exist on devices that access company systems? EDR/antivirus? MDM enrollment? Disk encryption? Screen lock?

**Vulnerability Management:** How are vulnerabilities identified? What is the patching timeline? Is there a vulnerability scanning program?

**Incident Response:** Is there a documented plan? What is the breach notification process? Has the plan been tested?

**Business Continuity:** Backup procedures and frequencies? Has recovery been tested? What are RTO and RPO targets?

**Third-Party Risk:** How do you assess the security posture of your own vendors?

## Building Your Documentation Library

Organizations that respond quickly and accurately have already built their documentation:
1. **Information Security Policy** — the parent document that sets intent and governance
2. **Access Control Policy** — how access is requested, granted, reviewed, and revoked
3. **Data Classification Policy** — how different categories of data are handled
4. **Incident Response Plan** — procedures for detecting, containing, and reporting incidents
5. **Business Continuity / DR Plan** — backup procedures, recovery objectives, testing cadence
6. **Vendor Management Policy** — how you assess your own third-party providers
7. **Acceptable Use Policy** — what employees can do with company systems
8. **Patch Management Policy** — how and when systems are updated

This documentation serves two purposes: it demonstrates to customers that security has been thoughtfully considered, and it forces your organization to actually define and implement these controls rather than assuming they exist because someone is informally doing the right thing.

## On Honesty

Inflating your security posture on a questionnaire creates two problems. If you represent controls you don't have and experience a breach, the inaccurate representation becomes part of the incident. And enterprise customers who perform rigorous assessments will find the gaps during due diligence anyway.

Most sophisticated enterprise customers would rather work with a vendor who has clearly identified their gaps and has a roadmap to close them than one who overstated their posture and can't substantiate it under scrutiny.`,
  },
]

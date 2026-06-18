export interface Article {
  slug: string
  title: string
  categories: string[]
  description: string
  content: string // markdown string — rendered via renderMarkdown in [slug]/page.tsx
  related?: string[] // optional array of slugs
  relatedCaseStudies?: string[]
}

export const articles: Article[] = [
  // ── AI: Understanding AI ─────────────────────────────────────────────────────
  {
    slug: "understanding-ai",
    title: "Understanding AI: From Hardware to Agents",
    categories: ["AI"],
    description: "CPUs, GPUs, LLMs, and the tools that connect them — a practical guide to how AI works and how to use it to automate real work.",
    content: `## The hardware that makes AI run

### CPUs vs GPUs

A CPU (Central Processing Unit) is the general-purpose brain of a computer. Modern CPUs have anywhere from 8 to 64 cores, each capable of handling complex, varied tasks in sequence. They're fast, flexible, and designed to do the enormous variety of things a computer needs to do: run the operating system, manage network connections, handle file operations, execute business logic. CPUs are generalists.

AI training and inference require something fundamentally different. Training a language model is, at its core, a problem of matrix multiplication — performing the same relatively simple mathematical operation across billions of numbers, simultaneously, billions of times. CPUs handle this poorly. They were architected for breadth and complexity, not for doing one thing at massive, uniform scale.

A GPU (Graphics Processing Unit) was designed to render video frames — which requires transforming millions of pixels simultaneously using the same geometric operations. The architecture that makes GPUs excellent at graphics makes them extraordinarily well-suited for AI: thousands of simpler cores executing the same instruction in parallel, at scale.

This parallel architecture is why NVIDIA became the defining hardware company of the AI era. Their CUDA software platform gave researchers a practical way to harness GPU parallelism for neural network training years before competitors had comparable stacks. Training a frontier model like GPT-4 or Claude requires thousands of high-end GPUs running continuously for weeks. Running a model to generate responses (inference) is less intensive but still GPU-heavy at scale.

For a genuinely fascinating engineering deep dive into how modern GPUs are designed and why the architecture works the way it does, [this video](https://www.youtube.com/watch?v=MiUHjLxm3V0) is one of the best we've seen.

For organizations considering local AI deployment, the GPU question becomes practical. A consumer GPU with 16GB of VRAM can run capable open-source models locally for private data workflows. A workstation GPU with 48GB handles significantly larger models. The economics of local inference are improving rapidly.

### RAM

RAM is where a model lives during operation. Running a language model requires loading its weights — the billions of parameters encoding its learned patterns — into memory where the GPU can access them quickly. A 7-billion-parameter model in compressed format requires roughly 14GB of RAM. A 70-billion-parameter model needs roughly 140GB. RAM capacity determines which models you can run and how many simultaneous sessions you can serve.

For cloud-based AI — Claude.ai, ChatGPT.com, Gemini — this is entirely invisible. The provider handles it. For local model deployment, it becomes a hardware planning constraint worth understanding.

### Storage

SSDs matter for AI primarily at model load time — moving weights from disk into memory quickly — and for storing model files. For most organizational AI use through cloud APIs, storage is not a meaningful variable. For local deployments serving multiple users, it becomes one.

## What a large language model actually is

An LLM is a mathematical model trained to predict what text should come next, given a sequence of input text. That sounds deceptively simple. The discovery that made modern AI possible was that a model trained with sufficient data, at sufficient scale, to predict text extremely well also develops capabilities that weren't explicitly trained — the ability to follow logical chains, write and debug code, translate languages, answer questions it was never directly shown, and generalize to novel problems.

The training process: feed the model enormous quantities of text, have it predict the next token, compare that prediction to the actual next token, and adjust the model's internal parameters slightly to improve the prediction. Repeat across trillions of tokens. The parameters that emerge encode something that functions like understanding and reasoning — even though the training objective was simply "predict the next word."

**Tokens** are the units LLMs process — roughly three-quarters of a word on average. "Electromagnetic" is one token. Every input you give a model and everything it generates are measured in tokens. Token counts affect cost, processing time, and the model's ability to handle long documents in a single session.

**Context window** is the amount of text a model can hold in working memory at once — your full conversation history, any documents you've shared, and the current exchange. Early models had context windows of a few thousand tokens, roughly a few pages of text. Current Claude models measure context in hundreds of thousands of tokens — large enough for an entire codebase, a lengthy legal document, or hours of conversation history. You can give a model a large, complex document and ask questions about any part of it without summarizing or chunking it first.

**System prompts** are instructions given to a model before a conversation begins, setting its behavior and constraints. When you use Claude.ai, Anthropic provides one. When an organization builds a product on the Claude API, they write their own. The system prompt is what turns a general-purpose model into a purpose-specific tool.

## ChatGPT, Gemini, and Claude

These three represent the current leading conversational AI platforms. They are all genuinely capable. The differences are real and worth understanding.

### ChatGPT (OpenAI)

The model that introduced most people to modern AI. ChatGPT has the broadest public recognition, the most extensive plugin ecosystem, and strong general-purpose capability across writing, analysis, coding, and conversation. GPT-4o handles text, images, audio, and multimodal tasks.

Where it excels: general writing and communication, creative generation, breadth of integrations, and familiarity as an entry point for teams new to AI.

For organizations committed to Microsoft, Copilot for Microsoft 365 is often the more relevant recommendation — it builds GPT-4 directly into Word, Excel, Teams, and Outlook. If your team already lives in those tools, the integration frequently matters more than which underlying model is technically ahead.

### Gemini (Google)

Google's model has a natural home in Google Workspace. Gemini integrated natively into Gmail, Docs, Sheets, and Drive gives the AI access to your organizational data without additional integration work. For a Google Workspace-first organization, that native access often outweighs differences in raw model capability.

Where it excels: Google Workspace integration, multimodal tasks, organizations where data already lives in Google's ecosystem. For Workspace shops, Gemini for tasks involving Drive and Gmail is frequently the pragmatic recommendation.

### Claude (Anthropic)

Claude is the model we use daily — for our own operations, for client work, and for everything on this site. Our preference is earned rather than assumed.

In our experience across all three platforms, Claude is the most capable for complex reasoning, long-document analysis, code generation, and — most importantly — agentic use cases where the model is taking real actions in the world rather than just generating text. MCP, the protocol connecting AI models to external systems, was developed by Anthropic and is most mature in the Claude ecosystem.

Anthropic was founded by former OpenAI researchers with a specific focus on AI safety. That focus is visible in Claude's behavior in ways that matter for production deployments: it's more calibrated about uncertainty, less prone to confident confabulation, and more thoughtful about the downstream consequences of actions when operating autonomously.

Where it excels: complex reasoning, code generation and debugging, long-context tasks, autonomous agent workflows, and safety-conscious production deployments.

**The honest position:** use multiple models for what each does best. ChatGPT or Copilot for Outlook drafting in Microsoft environments. Gemini for Drive and Gmail. Claude for complex reasoning, code, or anything autonomous. These are not in competition for your exclusive loyalty, and treating them as such leaves capability on the table.

## The tools

### Chat interfaces

Claude.ai, ChatGPT.com, and Gemini.google.com are the most accessible entry point — web-based conversational interfaces requiring no setup.

The ceiling: chat interfaces are conversational. The model can tell you what to do but cannot do it for you. It can draft a provisioning script but not run it. For tasks that require taking action in real systems, the interface alone is insufficient.

### Claude for Chrome

Claude for Chrome is a browser extension that gives Claude visibility into what's on your screen and the ability to interact with web pages — filling forms, clicking buttons, navigating between pages, reading content without manual copying.

The significance: web-based tools that expose no API become automatable. Any admin console a human can navigate through a browser, Claude for Chrome can navigate as well. This closes the gap between "systems with proper API integrations" and "everything else that has a web interface."

### Claude Code

Claude Code runs in your terminal with access to your local filesystem, the ability to execute shell commands, and the ability to read, write, and modify code files. It's designed for software development but applies to any task involving files and system operations.

The model can read an entire codebase, understand its structure, implement requested changes across multiple files, run the tests, and iterate on errors — without being walked through the code manually. The RSystems website was built this way.

### IDE integrations

GitHub Copilot, the Claude extension for VS Code, Cursor, and similar tools bring AI directly into the development environment. The model has context of your open file, project structure, and recent edits — providing suggestions inline and answering questions about the code without leaving the editor.

For active development, IDE integration is often more practical than Claude Code for ongoing work — ambient assistance woven into an existing workflow rather than a separate agent session.

## MCP: The bridge between models and systems

MCP (Model Context Protocol) is an open standard, developed by Anthropic, for connecting AI models to external tools and systems. Rather than every AI integration requiring custom code, MCP provides a common interface: the model issues a structured tool call, the MCP server executes it against the real system, and returns the result.

The practical effect: any platform that publishes an MCP server becomes something any compatible model can operate. JumpCloud, Slack, Google Drive, GitHub, HubSpot, and dozens of other platforms have MCP servers. Each one gives the model hands into that system — the ability to read data and take real actions.

The limitation: official MCP servers expose a curated subset of each platform's API. The JumpCloud MCP has roughly a dozen tools. The JumpCloud API has hundreds of endpoints. For production automation, that gap matters — which is why custom MCP development is a meaningful part of making agents genuinely capable rather than merely promising.

**How a tool call works:** when an AI model is working through a task, it can recognize when it needs capabilities outside its training. It issues a structured tool call — essentially, "call this function with these parameters." The MCP server receives it, executes the corresponding API call, and returns the result. The model incorporates that result and continues to the next step.

A single onboarding task might involve twenty sequential tool calls — check if the user exists, create the account, assign group membership, set device policy, send the welcome message, create the shared folder, log the completion. Each one is a roundtrip through an MCP server to a live system.

## Putting it together

The real capability emerges from combining the tools. A chat interface or system prompt defines the task. MCP servers give the model access to the platforms involved. Claude for Chrome handles anything requiring browser interaction. Claude Code handles anything requiring filesystem access or command execution.

### A brief example: new hire onboarding

A new employee completes an onboarding form. The response appears in a Google Sheet an MCP server monitors. Claude reads the new hire's details and works through the onboarding sequence:

Via JumpCloud MCP: creates the user account, assigns directory group membership, applies the device enrollment policy, triggers the invitation email. Via Slack MCP: posts a welcome message and adds them to department channels. Via Google Drive MCP: creates their home folder and shares the onboarding document.

Most of the process is done. But the organization uses Adobe Creative Cloud for Teams — not enterprise — and Adobe's admin console has no MCP server and no accessible API for this workflow. The only path is the web interface at adminconsole.adobe.com.

Claude for Chrome picks up here: navigates to the console, finds the product license screen, adds the new user, and confirms the assignment.

The entire sequence — across JumpCloud, Slack, Drive, and Adobe — completes without an administrator touching a single panel. MCP handles every system with a proper integration. Claude for Chrome handles the rest. Together they cover nearly any web-accessible platform.

## Where to start

The most effective starting point is usually the simplest: one tool, configured properly, deployed to a team that will use it, against one workflow that saves real and measurable time.

For most organizations that means a properly configured Claude Teams or Enterprise account with SSO, followed by identifying the first workflow where AI genuinely changes how the work gets done — not sounds impressive, but actually changes it.

The more sophisticated stack — custom MCP servers, agent identity architecture, audit infrastructure — follows naturally once the foundational tooling is in place and teams understand what these models can actually do.

If you're not sure where to start, that's the most common situation. [Get in touch](/contact) and we'll figure out what makes sense for your organization.`,
  },

  // ── Article 1 ───────────────────────────────────────────────────────────────
  {
    slug: "directory-services",
    title: "Directory Services",
    categories: ["Identity"],
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

JumpCloud is our preferred directory recommendation for most organizations. It's significantly easier to deploy and maintain than Microsoft or Okta, more nimble in product development, and competitive on features for the vast majority of real-world use cases. Teams of any size — from 10-person startups to 1,000+ person organizations — can run JumpCloud effectively, and it handles mixed Mac/Windows/Linux environments natively from day one.

### Okta

Okta is purpose-built for identity federation and SSO at scale. It excels at being the identity layer across a large, complex application portfolio — connecting hundreds of SaaS tools, enforcing access policies, and managing identity lifecycle events. It's less a device directory and more an identity federation platform.

Okta was first to market on cloud-based enterprise SSO and has built the largest ecosystem of third-party integrations in the industry — on par with Entra ID today, and ahead for many years. It's the most powerful choice for organizations that need extremely complex provisioning logic, very large user populations (10,000+), or highly automated identity workflows across hundreds of applications with nuanced security rules.

Best suited for: larger organizations with complex application portfolios and existing device management infrastructure, or where the primary problem is SSO across many applications rather than managing the device fleet.

### Google Workspace (As an IdP)

Google Workspace can function as a lightweight identity provider for Google-first organizations. Google accounts support SAML/OIDC-based SSO, and Cloud Identity provides basic MDM. For a small organization already on Workspace, it may be enough — but it's not a full-featured directory.

Best suited for: tiny startups already fully on Workspace that have no plans to grow beyond ~10 people. Not a real enterprise directory solution — treat it as a starting point, not a destination.

## How to Choose

Three questions drive the decision:

**What devices do your employees use?**
Windows-only shops have a natural path to Active Directory or Entra ID. Cross-platform environments (Mac + Windows + Linux) favor JumpCloud. Cloud-first teams with MacBooks might get by with Google's identity tools.

**Where does your infrastructure live?**
On-premises infrastructure → Active Directory is proven. Cloud-first or hybrid → Entra ID (Microsoft-centric) or JumpCloud (platform-agnostic) are better fits.

**How complex is your application portfolio?**
JumpCloud handles 50 applications well. The threshold isn't app count — it's the nature of your requirements. If you have standard SSO needs, JumpCloud is the right answer. If you have genuinely unusual fringe cases — complex conditional provisioning logic, integration with legacy enterprise systems, very large headcount automation requirements — Okta and Entra ID start to edge out ahead.

**Our recommended order:** JumpCloud for most organizations → Entra ID for Microsoft-committed shops → Okta for large enterprises with complex identity requirements.

## A Note on Migration

Changing your directory is not trivial. Every application tied to SSO, every device policy, every user lifecycle workflow is rooted in it. The time to choose thoughtfully is before you need to migrate.

The most common migration paths we see: on-premises AD → JumpCloud (for cross-platform, cloud-first organizations) and AD → Entra ID (for Microsoft-committed shops). Both are manageable with proper planning, but both require careful handling of application integrations and device management on the receiving end.`,
    relatedCaseStudies: ["directory-modernization"],
  },

  // ── Article 2 ───────────────────────────────────────────────────────────────
  {
    slug: "network-fundamentals",
    title: "Network Fundamentals",
    categories: ["Networking"],
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

## DNS: The Public Ledger

At its simplest, DNS is a phone book — it translates names (rsystems.nyc) into numbers (an IP address). But it's more than that: DNS is a public ledger. Anyone in the world can query your DNS records and read exactly what you've published.

The main record types you'll encounter:
- **A record**: maps a hostname to an IPv4 address (rsystems.nyc → 1.2.3.4)
- **CNAME**: maps a name to another name (www.rsystems.nyc → rsystems.nyc)
- **MX**: specifies where email for your domain should be delivered
- **TXT**: a text string — used for email authentication (SPF, DKIM, DMARC), domain verification, and other purposes

Your local DNS server knows your internal resources (server.yourcompany.com = 192.168.1.10). For everything else, it asks upstream. When none of the servers in the chain know the answer, it works back to the root of the DNS hierarchy until it finds the authoritative source.

We go much deeper on DNS — including email authentication and BIMI — in the [DNS, SPF, DKIM, and DMARC](/resources/university/dns-email-authentication) and [DNS and BIMI](/resources/university/dns-bimi) lessons.

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
- Better build quality, longer expected service life, and vendor support contracts that matter when something fails at 2 AM

**Consumer ($50–$500):** No VLANs, limited visibility. Fine for a home or tiny office. **Business ($500–$5,000):** Fully managed, VLAN support, PoE. Cisco Business. **Enterprise ($5,000+):** Chassis-based, StackWise, redundant power. Cisco Catalyst 9300/9500 is the benchmark.

### The Firewall

The firewall sits between your network and the internet, enforcing rules about what traffic is allowed. It provides Network Address Translation (NAT) — how your private internal addresses appear as a single public IP — and in modern implementations, inspects traffic for threats.

What you get as you spend more: higher inspection throughput, more sophisticated threat intelligence, SSL inspection, high-availability (HA) redundancy options.

**SMB ($1,000–$7,500):** SonicWall TZ, Fortinet FortiGate 60F. Proper stateful inspection, VPN, basic IPS. **Enterprise ($7,500+):** SonicWall NSA/NSsp, Palo Alto. Full threat inspection at multi-gigabit speeds.

### The Access Point

Access points bridge wired and wireless. They connect to your switch via ethernet and create the WiFi your devices connect to.

What you get as you spend more: better antenna design, more radio chains (2×2 vs 4×4 MIMO — where 2×2 means 2 transmit and 2 receive antennas — 4×4 doubles that capacity for both sending and receiving simultaneously), capacity for more concurrent clients, and controller-managed roaming that prevents devices from clinging to distant APs.

For a deep dive on how WiFi actually works, see [WiFi: How It Works and Why It's Hard](/resources/university/wifi).

## VLANs

A Virtual Local Area Network (VLAN) is a logical separator — it creates a logical network segment on the same physical infrastructure. Common deployments:
- **Corporate VLAN:** laptops, servers — full internal access
- **Guest WiFi VLAN:** internet only, isolated from internal resources
- **IoT VLAN:** cameras, access control, building systems — isolated from everything
- **VoIP VLAN:** phone traffic with QoS priority

VLANs require managed switches and a firewall handling inter-VLAN routing. Without them, every device on your network can reach every other device — a real security problem in any environment with sensitive data.

## Ports

When devices on a network communicate, they use ports — think of them like radio channels on a walkie-talkie. Port 80 is web traffic (HTTP). Port 443 is encrypted web (HTTPS). Port 22 is SSH. Port 445 is SMB file sharing (Windows file shares and network drives). Ports let a single device run multiple services simultaneously, and let firewalls control which services are accessible from where.

Port forwarding is how you expose an internal service to the outside world: tell the firewall to forward all traffic arriving on port 80 to 192.168.1.214 (your internal web server). Without that rule, external traffic hits the firewall and has no idea who to talk to.

## The Progression

Minimum viable network: one managed switch, one firewall, one access point. Proper small business network: managed switch stack, business-grade firewall, controller-managed APs, VLANs. Enterprise network: redundant switch chassis, HA firewall pair, enterprise APs, QoS, full monitoring.

The cost difference is redundancy (no single points of failure), inspection throughput (performance under load), and management granularity (visibility and control over what's actually happening).`,
    relatedCaseStudies: ["redundancy-by-design", "little-island", "makerbot-overhaul"],
  },

  // ── Article 3 ───────────────────────────────────────────────────────────────
  {
    slug: "wifi",
    title: "WiFi: How It Works and Why It's Hard",
    categories: ["Networking"],
    description: "Radio physics, the consumer vs. enterprise gap, and what good WiFi design looks like.",
    content: `## Why WiFi Is Harder Than It Looks

WiFi looks simple because it's invisible. That invisibility is precisely what makes it difficult to design, troubleshoot, and operate well.

## The Physics

![Electromagnetic wave animation showing electric and magnetic field oscillation](https://upload.wikimedia.org/wikipedia/commons/9/99/EM-Wave.gif|50%)

WiFi is radio — electromagnetic waves at specific frequencies carrying your data through the air. These waves have a dual nature: they sometimes behave like particles (traveling in straight lines like a bullet) and sometimes like waves (spreading outward, penetrating matter, bouncing off surfaces).

That dual nature is critical to developing intuition about wireless in the real world. A 5GHz signal behaves more particle-like — straighter paths, more absorption by walls. A 2.4GHz signal behaves more wave-like — longer range, better wall penetration, more susceptibility to interference from other sources using the same frequencies.

(If you've encountered the double-slit experiment in physics, this is the same wave-particle duality at work — and it's directly relevant to why WiFi behaves differently in different environments.)

## The Frequency Bands

![Electromagnetic spectrum diagram showing radio wave frequencies including the 2.4GHz, 5GHz, and 6GHz WiFi bands](/assets/em_spectrum_transparent.png)

**2.4 GHz:** Longer range, better wall penetration. Only 3 non-overlapping channels. Heavily congested — shared with Bluetooth, microwave ovens (water resonates at 2.45GHz, which is literally why microwaves cook food), baby monitors, Sonos speakers, and every neighbor's WiFi. In NYC and other dense urban environments, 2.4GHz is like being in an apartment building where every unit is blasting music at full volume with no sound insulation anywhere — you hear all of it. Everyone's signal is everyone else's noise. This is why we almost always prefer 5GHz.

**5 GHz:** Shorter range, worse wall penetration. 25 non-overlapping channels (including DFS channels shared with radar). Much higher speeds, much less congestion. The modern primary band.

**6 GHz (WiFi 6E):** Very short range. Completely clean spectrum with no legacy device interference. Highest speeds. Limited to high-end enterprise hardware and modern client devices.

## Why Channels Matter

![WiFi channel overlap diagram showing 2.4GHz channels 1-11 with only 1, 6, and 11 non-overlapping](https://upload.wikimedia.org/wikipedia/commons/8/8c/2.4_GHz_Wi-Fi_channels_%28802.11b%2Cg_WLAN%29.svg)

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

A 5-person team in a single open-plan space: consumer mesh WiFi works fine. The inflection point where it stops being adequate is usually around 15–20 simultaneous heavy users, any meaningful segmentation requirement, or environments with challenging RF characteristics (large floor plates, concrete construction, multiple stories).`,
    relatedCaseStudies: ["audubon-wireless-tuning", "audubon-corkscrew", "charity-water-gala", "fost-fest"],
  },

  // ── Article 4 ───────────────────────────────────────────────────────────────
  {
    slug: "dns-email-authentication",
    title: "DNS, SPF, DKIM, and DMARC",
    categories: ["DNS"],
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

In Route 53, you can set TTL as low as 60 seconds — which means DNS changes propagate nearly instantly. There's no reason to leave TTL at 3600 or higher except during periods of stability. Set it low and leave it low.

## SPF: The Authorized Senders List

SPF (Sender Policy Framework) is a TXT record that specifies which mail servers are authorized to send email claiming to be from your domain. The goal is to prevent other servers from sending email as you.

A basic SPF record:
\`\`\`
v=spf1 include:_spf.google.com ~all
\`\`\`

This says: email from this domain should come from servers in Google's SPF record. The ~all at the end is a soft fail — email from other sources is suspect. -all is a hard fail (reject).

The challenge: you likely have multiple legitimate email sources. Your mail server, your marketing platform, your CRM, your billing system. Each needs to be in your SPF record. SPF also has a hard limit of 10 DNS lookups in the resolution chain — many organizations unknowingly exceed this, silently breaking their SPF checks.

## DKIM: The Cryptographic Signature

DKIM (DomainKeys Identified Mail) works like a wax seal on a letter — but one where the stamp that created the seal is publicly posted in your DNS. When your mail server sends a message, it applies a cryptographic signature using a private key only it holds. The recipient checks the signature against your public key, published as a TXT record in DNS. If the signature verifies, the message genuinely came from your server and wasn't tampered with in transit. If someone forges the message, the seal breaks — and the forgery is detectable.

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
- Your domain qualifies for BIMI. (Covered in the next lesson — [DNS and BIMI](/resources/university/dns-bimi).)`,
  },

  // ── Article 5 ───────────────────────────────────────────────────────────────
  {
    slug: "dns-bimi",
    title: "DNS and BIMI",
    categories: ["DNS"],
    description: "Display your logo in the inbox — what it takes and whether it's worth it.",
    content: `## What BIMI Does

BIMI — Brand Indicators for Message Identification — lets organizations that have implemented DMARC enforcement display their logo directly in the inbox. When a BIMI-enabled email client (Gmail, Yahoo Mail, and others) receives a message from a BIMI-configured domain, your logo appears next to the sender name.

The practical effect: legitimate emails become visually identifiable at a glance, and phishing attempts that can't pass your DMARC checks cannot display your logo.

![BIMI logo displayed in Gmail inbox next to sender name — Chase Bank example](https://macktez.com/wp-content/uploads/2025/02/Chase-BIMI.png)

*BIMI verification as it appears in Gmail.*

![Email client inbox showing multiple BIMI-verified brand logos alongside sender names](https://macktez.com/wp-content/uploads/2025/02/BIMI-example.webp)

*An inbox with multiple BIMI-verified senders (credit: Mailhardener).*

## Prerequisites

BIMI requires:
1. DMARC policy at p=quarantine or p=reject (p=none is not sufficient)
2. A Verified Mark Certificate (VMC) from an approved certificate authority (DigiCert or Entrust)
3. Your logo in a specific SVG format (SVG Tiny 1.2 profile)
4. A BIMI DNS TXT record

## VMC vs. CMC: Two Certificate Options

There are now two certificate types available for BIMI:

**VMC (Verified Mark Certificate)** — requires a registered trademark on your logo. Issued by DigiCert or Entrust. Typically $1,000–$1,500/year. The trademark verification process takes several weeks.

**CMC (Common Mark Certificate)** — does not require a registered trademark. Requires only that your logo is "distinctive" (i.e., meaningfully associated with your brand). Also issued by DigiCert or Entrust, similar pricing. This is the path for organizations that haven't trademarked their logo — and for most SMBs, it's the right starting point.

The practical implication: trademark registration is no longer a prerequisite for BIMI. If you have a distinctive logo and your DMARC is at p=reject, you can pursue BIMI with a CMC today.

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
    categories: ["Cloud & Infrastructure"],
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

Many organizations end up hybrid: on-premises for core infrastructure, latency-sensitive workloads, and predictable capacity — cloud for burst capacity, DR, and applications that benefit from managed services.

**Azure Site Recovery** is worth mentioning specifically: it replicates on-premises VMs to Azure, providing geographically redundant disaster recovery for roughly $25/VM/month plus storage costs. For organizations with existing on-premises VMware that want to reduce their footprint, this provides bi-directional DR infrastructure, geo-redundancy, and a credible exit ramp from on-premises — at a cost that's difficult to replicate with dedicated hardware.

## GPU VMs, Local AI, and Agentic Workloads

One of the most interesting emerging use cases for on-premises and cloud VMs is AI inference. GPU-equipped VMs — available from all three major cloud providers, and deployable on-premises with NVIDIA hardware — can run large language models locally, without sending data to external APIs. For organizations with data privacy requirements, or that want to run automated AI workflows at scale, local inference changes the economics.

Separately: tools like Claude Code make VM capacity significantly more useful for development and automation. Spinning up a sandboxed VM, having an agent build and test something inside it, then discarding the VM is a workflow that requires available compute capacity — and rewards organizations that have it.

For real-world examples of infrastructure decisions, see our [case studies](/case-studies).`,
    related: ["remote-connectivity"],
    relatedCaseStudies: ["makerbot-overhaul", "windows-tools-for-a-mac-design-firm", "duality-group"],
  },

  // ── Article 7 ───────────────────────────────────────────────────────────────
  {
    slug: "remote-connectivity",
    title: "Remote Connectivity",
    categories: ["Networking"],
    description: "S2S VPN, P2S VPN, SSL VPN, and Zero Trust — the differences that matter.",
    content: `Your internal network is private by design. File servers, databases, network cameras, AWS VPCs, Azure VNets — these are resources you want accessible to the right people, but not exposed to the open internet. VPN is the traditional answer: create an encrypted tunnel that extends private network access to remote users or remote locations, without punching holes in your perimeter.

There are several types of VPN with meaningfully different characteristics. Understanding which to use — and when to move beyond VPN entirely — is the goal of this article.

## Site-to-Site VPN (S2S)

Site-to-site VPN connects two networks permanently. It's the technology used when two physical locations — offices, a branch and headquarters, an office and a data center — need to communicate as if on the same local network.

How it works: VPN-capable firewalls at both locations negotiate an encrypted IPsec tunnel. Traffic destined for the remote network is encrypted and sent through the tunnel; the remote firewall decrypts it and delivers it locally. Users at either location don't know the other network exists behind the tunnel.

### IPsec: The Underlying Protocol

IPsec uses a two-phase approach. Phase I establishes a secure management tunnel — the two firewalls negotiate and agree on encryption parameters (hashing algorithm, authentication method, Diffie-Hellman group, tunnel lifetime, encryption cipher) and exchange keys using Internet Key Exchange (IKE). Once Phase I is up, Phase II establishes the data tunnel through which actual traffic flows.

The Diffie-Hellman key exchange is what allows two parties who've never met to agree on a shared secret key without an eavesdropper being able to derive it — even if they observe the entire negotiation. This is fundamental to IPsec's security.

If you find the Diffie-Hellman key exchange genuinely fascinating — and we think you should — [this video](https://www.youtube.com/watch?v=3QnD2c4Xovk) is the best explanation we've found. Once you understand it, you'll immediately see why increasing the DH group number (Group 2 → Group 14 → Group 20) and lowering the Phase I lifetime dramatically improves the security of an IPsec tunnel — each renegotiation generates a fresh key, and higher DH groups use larger prime numbers that are computationally harder to crack.

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
    categories: ["Cabling"],
    description: "When to use it, what you're buying, and how single-mode and multi-mode differ.",
    content: `## How Fiber Works

Fiber optic cabling carries data as pulses of light through glass or plastic fiber, rather than electrical signals through copper.

The physics: light enters a fiber strand and travels through it via total internal reflection — a phenomenon where light hitting the boundary between the glass core and the surrounding cladding at a shallow enough angle bounces completely back into the core rather than passing through. The light stays trapped in the glass, bouncing its way along the fiber across long distances.

![Diagram showing total internal reflection — light ray bouncing inside fiber optic core at angles below the critical angle](/assets/fiber-optic-tir.jpg|70%)

That light represents binary data in a Morse-code fashion: light on for 1, light off for 0, pulsed at extremely high frequencies. A laser or LED transceiver generates the pulses; a receiving transceiver detects them and converts them back to electrical signals the network equipment can use.

## Single-Mode vs. Multi-Mode

**Single-mode fiber (SMF):**
- Very thin core (9 microns — for scale: a human hair is roughly 70 microns in diameter — single-mode fiber's core is about 8× thinner)
- A single light path travels through the fiber
- Extremely low signal attenuation — spans 40km+ without amplification

Single-mode fiber is also the medium that connects the world at scale. Every transatlantic internet cable is single-mode fiber. Every cell tower connects back to the telecom network via fiber. The phone call you make, the video you stream, the email you send — all of it rides fiber at some point in its journey. At the extreme end, research labs have demonstrated transmission speeds of roughly 80× faster than today's commercial deployments over a single strand.

- Requires precise, laser-based transceivers
- Higher per-transceiver cost
- Standard grades: OS1 (tight-buffered, indoor), OS2 (loose tube, outdoor/longer runs)
- Used for: telecom infrastructure, WAN links, campus backbone between buildings

**Multi-mode fiber (MMF):**
- Larger core (50 microns for modern OM grades — still thinner than a human hair, but 5–6× larger than single-mode)
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
- EMI is a concern (near industrial motors, generators, or high-voltage electrical equipment)
- Bandwidth requirements at distance exceed what copper supports

**Copper is typically preferred when:**
- Runs are under 90m
- PoE is needed — fiber cannot carry power
- Cost is a constraint and copper meets the speed/distance requirements

## Watch

[How fiber optics work — video explainer](https://www.youtube.com/watch?v=N4fbAEp55lA)`,
  },

  // ── Article 9 ───────────────────────────────────────────────────────────────
  {
    slug: "copper-cabling",
    title: "Copper Cabling: Cat5e, Cat6, and Cat6A",
    categories: ["Cabling"],
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
    categories: ["Microsoft", "MDM"],
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
    relatedCaseStudies: ["easterseals-nj-intune"],
  },

  // ── Article 11 ──────────────────────────────────────────────────────────────
  {
    slug: "apple-business-manager",
    title: "Apple Business (formerly Apple Business Manager)",
    categories: ["Apple", "MDM"],
    description: "The foundation of enterprise Apple management — what it enables and how to get started.",
    content: `## What Apple Business Enables

Apple Business (formerly Apple Business Manager / ABM) is Apple's enterprise portal for organizations deploying Apple devices. Apple rebranded to simply "Apple Business" in 2024. Without it, you're managing iPhones, iPads, and Macs like a consumer — manually enrolling each device, buying apps through personal Apple IDs, and losing control when someone factory resets a device.

### Automated Device Enrollment (ADE)

The central capability: when your organization purchases Apple devices through an authorized channel and registers those devices in ABM, they enroll in your MDM platform automatically when first activated. This enrollment is supervised — giving IT access to management controls not available on unsupervised devices — and it's sticky. A factory reset doesn't remove enrollment; the device re-enrolls on next activation.

This is the Apple equivalent of Windows Autopilot. A new iPhone can be shipped directly to an employee; they power it on, sign in, and the device is enrolled, configured, and ready.

### Apps and Books

Organizations can purchase app licenses in bulk and deploy them to managed devices silently — no employee Apple ID required, no personal payment information. Apps deployed via ABM licenses can be reclaimed when an employee leaves, freeing the license for reuse.

### Managed Apple IDs

Apple Business lets organizations create Apple IDs that belong to the organization, not the individual. Managed Apple IDs give employees access to iCloud, FaceTime, and Apple collaboration features using organizational credentials you control — and can revoke.

A key limitation: Managed Apple IDs cannot be used with the consumer App Store. Apps must be deployed through the Apps and Books program. This is intentional — it keeps personal and organizational identities cleanly separated.

If your organization uses JumpCloud or Entra ID as your identity provider, you can federate those identities into Apple Business directly. When a new employee is provisioned in your directory, a Managed Apple ID can be created automatically. When they leave, removing them from your IdP revokes access to Apple Business as well — no separate offboarding step.

This federation also enables personal device BYOD in a meaningful way: an employee can sign into their personal iPhone with their Managed Apple ID alongside their personal Apple ID, enabling User Enrollment (see the [Device Trust & BYOD](/resources/university/device-trust-byod) article) without any organizational visibility into personal data.

## MDM Integration

Apple Business ships with a basic built-in MDM capability. It works — but it's only appropriate for the smallest, simplest deployments. Any organization with more than a handful of devices, or with policies beyond the basics, should use a dedicated third-party MDM platform.

Apple Business is a portal and device registration system, not the management system itself. You still need an MDM platform:

- **Jamf Pro:** Enterprise standard for Apple management. Powerful, extensible, expensive. Right for organizations with 100+ Apple devices or complex Mac management requirements.
- **Jamf Now:** Simpler, lower cost, adequate for many smaller deployments.
- **Microsoft Intune:** Adequate for basic Mac management in Microsoft-centric environments. Less feature-complete than Jamf for complex scenarios.
- **JumpCloud:** Good cross-platform MDM for organizations that want a single platform managing both Mac and Windows.

## The Reseller Requirement

Devices must be purchased through an Apple Authorized Reseller or directly from Apple (Business Store) to be automatically registered in ABM. Devices purchased at retail Apple Stores or Amazon are not pre-registered.

You can add these manually via Apple Configurator 2 on a Mac, but it requires physical access to each device. For any significant Apple deployment, establish a purchase relationship with an authorized reseller before buying hardware.

## The Zero-Touch Custom Store

When Apple Business is fully configured with IdP federation and an authorized reseller relationship, you can unlock one of the most compelling end-to-end experiences in device management: a custom-branded Apple Business Store.

The workflow:
1. Your IT team logs into Apple Business and sets up a custom storefront
2. Any staff member can visit the store, sign in with their Managed Apple ID (backed by your IdP), and place an order for approved hardware
3. The order ships directly to the employee from Apple
4. When the device powers on, it automatically enrolls in your MDM, pulls its configuration, installs required apps, and is ready for work

No IT staff touching the machine. No imaging station. No shipping to the office first. The employee orders, receives, powers on, signs in, and works. This is the Apple-first vision of device deployment done properly.`,
  },

  // ── Article 12 ──────────────────────────────────────────────────────────────
  {
    slug: "device-trust-byod",
    title: "Device Trust and Apple BYOD",
    categories: ["Security", "Apple", "Google", "MDM"],
    description: "Enforcing access policy on personal devices without requiring full MDM enrollment.",
    content: `## What Device Trust Means

Device trust is the policy principle that organizational resources should only be accessible from managed, known devices. The challenge is that organizational data lives on personal devices constantly — employees check email on personal iPhones, read Slack on personal iPads, and access documents on home laptops. This is the reality of modern work.

The risk is real and multidimensional. Malicious actors can compromise a personal device and pivot to corporate resources. Employees can accidentally leak data through personal apps, backups, or cloud sync. And when someone leaves the organization — voluntarily or otherwise — how do you ensure that corporate data leaves with them? How do you remotely destroy confidential documents on a device you never managed and don't control?

Employees, reasonably, don't want the answer to be "give IT full control of my personal phone." Nobody wants their employer to see their text messages, photos, or personal browsing history. Apple designed a framework specifically to resolve this tension.

## The BYOD Challenge

BYOD — Bring Your Own Device — allows employees to use personal devices for work. The security problem: the organization has no visibility into or control over personal devices.

If your access policy requires compliant devices — encrypted disk, current OS, screen lock, no jailbreak — BYOD makes enforcement complicated. Options:
- Require personal device enrollment in MDM: you gain enforcement, but can see personal data. Employees are often uncomfortable with this.
- Limit access for unmanaged devices: reduces productivity, creates friction.
- Accept the risk: what many organizations actually do, often without a conscious decision.

Apple designed a framework specifically for this.

## Apple User Enrollment for BYOD

Apple's User Enrollment is an MDM enrollment mode designed specifically for personal devices. The critical distinction: it creates a cryptographic separation between personal and managed data on the device.

Think of it as a bubble inside the phone. Everything the organization puts in — apps, data, email accounts, certificates, configurations — lives in the bubble. Anything the org put in, the org can take back out. Anything outside the bubble — personal apps, photos, messages, personal Apple ID — the org cannot see or touch. When an employee leaves, IT pops the bubble. Everything organizational disappears. Everything personal remains untouched.

MDM can only see and manage organizational data — it cannot:
- View personal apps or photos
- Wipe the entire device (only organizational data can be erased)
- Track personal location or usage

How it works: the employee signs in with a Managed Apple ID (from ABM) on their personal device. User Enrollment creates a separate data volume for organizational apps. Policies apply only to that partition. The employee's personal Apple ID and data remain private and invisible to IT.

This addresses the core employee concern ("I don't want IT on my personal phone") while giving IT control over organizational data and the ability to remotely wipe that data if the device is lost.

## Conditional Access as a Lighter Alternative

For organizations that want device trust without full MDM enrollment, conditional access is the middle path. Instead of managing the device, you verify it meets minimum security requirements before granting access.

Microsoft Entra ID Conditional Access, JumpCloud's conditional access policies, and Okta's device trust features can check for: minimum OS version, disk encryption, screen lock enforcement, absence of jailbreak — and block access from non-compliant devices. No MDM enrollment required.

This is the practical BYOD approach for many organizations: set a minimum bar, enforce it at the access control layer, and block devices that can't meet it — without requiring employees to enroll personal devices in corporate MDM.

## The Full Solution: IdP + Apple Business + User Enrollment

If your organization has a full JumpCloud or Entra ID tenant with Apple Business configured and Managed Apple IDs provisioned, User Enrollment on personal iPhones becomes nearly seamless: the employee signs into their personal device with their Managed Apple ID, enrollment happens automatically, and the bubble is created. When they leave, IdP offboarding destroys the bubble.

This is a genuine solution to one of the hardest problems IT has faced for years. It's not perfect, but it's the best available answer to "how do we support BYOD without compromising privacy or security."

**Contractors** remain a harder problem. Contractors often resist any form of MDM enrollment, and because they're not permanent employees, the organizational investment in their device management is harder to justify. Conditional access — verifying minimum device health without enrollment — is often the practical answer for contractors.

**Platform note:** BYOD via User Enrollment works well on iOS today. macOS doesn't yet have an equivalent — Apple hasn't shipped a macOS User Enrollment mode that provides the same clean personal/organizational separation. We expect this to change, but until it does, Mac BYOD remains either full MDM enrollment or no enrollment. Chrome Device Trust (covered in the [next article](/resources/university/managed-chrome)) is a useful BYOD solution for Mac, Windows, and Linux.`,
    related: ["autopilot", "managed-chrome"],
    relatedCaseStudies: ["easterseals-nj-intune"],
  },

  // ── Article 13 ──────────────────────────────────────────────────────────────
  {
    slug: "managed-chrome",
    title: "Managed Chrome",
    categories: ["Google", "MDM"],
    description: "Browser policy management and Chrome OS — what you can control and when it matters.",
    content: `## Managed Browser vs. Profile vs. Chrome OS

Most of the time when we're talking about Managed Chrome, we're talking about one of two things: a managed Chrome browser (Chrome running on any OS, with IT-enforced policies applied to the browser itself) or a managed Chrome profile (a user-level identity that, when signed in, applies organizational policies to that browser session).

Chrome OS management is a separate topic — important for schools and organizations with dedicated Chrome OS hardware or digital signage deployments, but less common in typical business environments. We cover it briefly at the end of this article.

## Chrome Browser Cloud Management (CBCM)

If your users run Chrome on Windows or Mac, you can manage that browser without touching the OS-level MDM configuration. CBCM lets you:
- Force-install browser extensions organization-wide — and prevent users from removing them
- Block specific websites or categories
- Control sync settings (prevent work browser data from syncing to personal Google accounts)
- Push security policies (Safe Browsing enforcement, password manager settings, certificate management)
- Inventory all managed Chrome browser instances in the Admin Console

This is particularly relevant where Chrome is the primary work browser, or where specific extensions (corporate intranet bookmarks, enterprise password manager extensions, DLP tools) need to be deployed consistently.

A practical example: using CBCM, you can force-install the JumpCloud Go extension on every managed Chrome browser in your organization. JumpCloud Go enables passwordless authentication and device-level trust verification — when a user opens Chrome and the extension is present, JumpCloud can verify both the identity and the device before granting access to connected applications.

## Chrome Profile Management

Chrome profiles let users maintain separate browser environments for different contexts. With managed Chrome, you can require employees to use a specific profile signed in with their organizational Google account for work activities.

The result: clean separation between work and personal browsing — work stays in the work profile, personal browsing stays separate — without requiring a separate device.

## Chrome OS / Chromebook Management

For Chromebook fleets, Google Admin Console provides forced enrollment (Chromebooks registered through a reseller can auto-enroll when first activated, similar to Apple ADE or Autopilot), app and extension deployment, and kiosk mode to lock devices to a single application for shared-use or digital signage deployments.

## When Chrome Management Matters

Clear use cases:
- Compliance requirements around web access (financial services, healthcare)
- Chromebook deployments at any scale
- Specific Chrome extensions that must be present on all devices
- Organizations requiring browser-level visibility for security monitoring

For standard knowledge work environments without specific compliance requirements, browser management adds a layer but isn't the highest-priority configuration. Core security needs — device management, identity, access control — are better addressed at the OS and directory level first. For regulated environments, or anywhere browser behavior needs to be controlled and auditable, Managed Chrome is a meaningful addition.

## Chrome Device Trust and Desktop BYOD

Here's where Managed Chrome becomes a meaningful BYOD solution for Mac, Windows, and Linux.

JumpCloud (and similar platforms) can enforce a policy that says: you cannot access our applications unless you're signed into Chrome with your managed profile. And separately: you cannot add or set up a new managed Chrome profile without IT lifting a restriction first.

The practical flow:
1. Employee gets a new personal or org-owned device (Mac, Windows PC, or Linux)
2. They install Chrome and try to sign in with their work account
3. The policy blocks new profile creation until IT approves
4. IT approves, employee signs in, device is now registered
5. IT re-applies the restriction

The result: even if someone's username, password, and MFA codes were all stolen, an attacker couldn't use them without also having physical access to a pre-approved device with a registered Chrome profile. This is device trust without full MDM enrollment — a practical BYOD solution that works across every major desktop OS.`,
  },

  // ── Article 14 ──────────────────────────────────────────────────────────────
  {
    slug: "1password",
    title: "1Password",
    categories: ["Security", "Identity"],
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

## Passkeys and the Passwordless Future

1Password is increasingly the platform for managing passkeys — the credential standard designed to replace passwords entirely. Passkeys use cryptographic key pairs: your device holds a private key, the service holds a public key, and authentication happens without transmitting a password that could be stolen or phished.

1Password stores and syncs passkeys across your devices, making it the single place for both traditional passwords (for sites that haven't upgraded yet) and passkeys (for those that have). For many users today, 1Password enables a primarily passwordless workflow — you still have 1Password, but the credentials inside it are increasingly passkeys rather than passwords.

## IdP Integration

1Password integrates with JumpCloud, Microsoft Entra ID, Okta, and other identity providers via SCIM. When a new employee is added to your directory, 1Password can automatically provision their account and grant access to the correct vaults. When they leave and their IdP account is disabled, their 1Password access is cut programmatically — no manual offboarding step, no window where a departed employee retains access to organizational credentials.

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
    categories: ["Security"],
    description: "What enterprise customers are asking and how to respond accurately.",
    content: `## What the SIG Lite Is

The Standardized Information Gathering (SIG) questionnaire is a security assessment tool developed by the Shared Assessments Program. The SIG Lite is the abbreviated version — typically 140–200 questions — used by enterprise customers, financial institutions, and regulated organizations to assess the security posture of vendors and service providers.

If you serve enterprise clients, you will receive a SIG Lite.

**A note before you start:** If an enterprise customer is asking about your security posture, the best credential you can provide is a SOC 2 Type II report — an independent third-party audit of your controls. Most enterprise clients will accept a clean SOC 2 in lieu of a filled-out SIG Lite. But not all organizations have undergone a SOC 2 audit, and the SIG Lite remains a practical, widely-accepted alternative.

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

If you don't have these, the SIG Lite is a forcing function to build them — which is actually the right outcome.

## Download a Blank Copy

We've prepared a clean, fillable version of the SIG Lite — with all example answers removed — that you can use to respond to vendor assessment requests.

[Download SIG Lite (PDF)](/downloads/sig-lite-rsystems.pdf)

Free to use. No signup required.`,
  },

  // ── Article 16 ──────────────────────────────────────────────────────────────
  {
    slug: "cybersecurity-self-assessment",
    title: "Cybersecurity Self-Assessment",
    categories: ["Security"],
    description: "Understand your own security posture — a structured NIST CSF-based assessment for small and mid-sized organizations.",
    content: `## Why a Cybersecurity Self-Assessment

Every organization should understand its own security posture — not just when a customer asks, but as a standing practice. A structured self-assessment gives you a baseline, identifies gaps, and provides a roadmap for improvement.

The drivers vary: your cyber insurance underwriter is asking harder questions at renewal. A new enterprise customer requires evidence of your security program. Your board wants a briefing. Or you simply want to hold yourself accountable. All are valid. The assessment is worth doing regardless of who's asking.

We recommend completing this assessment once per year — and updating your answers whenever significant changes occur to your technology environment.

## SOC 2 and ISO 27001: Excellent, But Not For Most

SOC 2 Type II and ISO 27001 are the gold standards of security assurance. SOC 2 involves an independent auditor examining your controls over a period of time (typically 6–12 months) and issuing a report that enterprise customers will accept in lieu of questionnaires. ISO 27001 is an international certification of your information security management system.

Both are genuinely excellent — and neither is appropriate for most organizations. The investment in time, process, and audit fees is significant. For companies at the scale where these credentials are required (typically enterprise B2B SaaS, healthcare, financial services), they're worth pursuing. For most SMBs, NIST CSF is a more practical starting point.

## NIST Cybersecurity Framework

The National Institute of Standards and Technology's Cybersecurity Framework (NIST CSF) organizes security into five functions:

**Identify** — What assets, data, and systems exist? Who is responsible for security? What risks have been identified?

**Protect** — How are systems and data protected? MFA, encryption, access controls, patching, backups, training.

**Detect** — What monitoring is in place? How would you know if something went wrong?

**Respond** — What happens when an incident occurs? Is there a plan? Has it been tested?

**Recover** — How do you restore operations after an incident? What are your RTO and RPO targets?

These five functions cover the full lifecycle of security — prevention, detection, and response.

## Our Free Assessment

We developed a structured self-assessment based on NIST CSF, adapted for the practical reality of small and mid-sized organizations. It covers all five NIST functions with 51 questions designed to be answerable by anyone familiar with your organization's technology environment.

It's free. No signup required. Take it at your own pace.

[Download Cybersecurity Assessment (PDF)](/downloads/cybersecurity-assessment-rsystems.pdf)

We recommend completing it as honestly as you can — "I don't know" is a valid and useful answer. Then update your answers 1–2 times per year. Over time, you'll see your posture improve, and you'll have documentation of that progress.

If you need help interpreting the results, understanding what changes to prioritize, or turning the gaps into a remediation plan — that's exactly what RSystems does. [Let's talk](/contact).`,
  },

  // ── Article 17 ──────────────────────────────────────────────────────────────
  {
    slug: "mfa-and-phishing-resistance",
    title: "MFA Types, FIDO2, and Phishing-Resistant Authentication",
    categories: ["Security", "Identity"],
    description: "SMS, TOTP, push notifications, passkeys, and FIDO2 — what each one actually is, how it can fail, and why phishing-resistant authentication is becoming the requirement.",
    related: ["sig-lite", "cybersecurity-self-assessment", "directory-services"],
    relatedCaseStudies: ["easterseals-nj-intune", "directory-modernization"],
    content: `## Why MFA exists

Passwords alone are a failed security model. Not because they're a bad idea in principle, but because of how people actually use them: reused across dozens of services, discovered in data breaches, guessed through credential stuffing, phished through convincing fake login pages. The credential breach pipeline is industrial in scale. Billions of username/password combinations are actively traded, and automated tools test them against every major service continuously.

Multi-factor authentication adds a second requirement beyond the password — something that changes, something physically in your possession, or something tied to your biometrics. The idea is that a stolen password alone is no longer sufficient. The attacker also needs the second factor.

That idea is sound. But not all implementations of it provide equal protection. The differences between MFA types matter significantly more than most people realize.

## The three authentication factors

Authentication factors fall into three categories:

**Something you know** — a password, a PIN, a security question answer. Anything memorized.

**Something you have** — a physical device, a cryptographic key, a phone receiving a code. Anything in your possession.

**Something you are** — biometrics. A fingerprint, a face scan, a retinal pattern.

MFA means combining at least two of these. Most implementations combine something you know (a password) with something you have (a phone or hardware key). The second factor is the variable — and that is where the real security differences live.

## SMS codes

How it works: when you log in, the service generates a random six-digit code and texts it to your registered phone number. You enter the code to complete authentication. The assumption is that only you have access to your phone number.

The problem is that assumption is fragile in several distinct ways.

**SIM swapping** is the most common attack. An attacker calls your mobile carrier, impersonates you using personal information gathered from data breaches or social media, and convinces the carrier to transfer your phone number to a SIM card they control. Your phone loses service. Their phone starts receiving your calls and texts — including your authentication codes.

This is not theoretical. Twitter's CEO Jack Dorsey had his account compromised via SIM swap in 2019. Thousands of Coinbase customers lost funds when attackers bypassed SMS 2FA through the same method. Cryptocurrency exchanges have been targeted repeatedly because the financial reward justifies the social engineering effort.

**SS7 vulnerabilities** affect the 40-year-old Signaling System No. 7 protocol that telecom networks use to coordinate call and message routing. Attackers with access to the SS7 network — nation-state actors and sophisticated criminal groups — can redirect SMS messages without touching the carrier. The subscriber never knows.

**Real-time phishing** is the third failure mode, and it applies to SMS and several other MFA types. An attacker builds a convincing fake login page. The victim enters their credentials. The attacker's server immediately replays those credentials to the real site. The real site sends an SMS code to the victim's phone. The fake site asks the victim to enter the code. The victim enters it. The attacker relays it within seconds. Authentication succeeds.

SMS MFA stops attackers who have your password but not your phone. It does not stop SIM swappers, SS7 attackers, or anyone running a real-time phishing relay. NIST deprecated SMS-based OTP as a primary authentication mechanism in their SP 800-63B guidelines. Use it only as a last-resort fallback when better options are unavailable.

## TOTP: time-based one-time passwords

TOTP (defined in RFC 6238) is the MFA type behind Google Authenticator, Authy, 1Password codes, and most authenticator apps.

**How it works:** when you enable TOTP on a service, you scan a QR code that encodes a shared secret known to both the service and your authenticator app. From that point, both your app and the service's server independently compute the same six-digit code using a formula that combines the shared secret with the current timestamp divided into 30-second windows. Because they both know the secret and both know the time, they arrive at the same code independently without any communication. The code changes every 30 seconds, and most services allow a 90-second grace window for clock drift.

**What TOTP fixes:** SIM swapping does not work because your codes are not flowing through the telecom network. SS7 attacks do not work for the same reason. The shared secret lives in your authenticator app. This is a meaningful upgrade from SMS.

**What TOTP does not fix:** real-time phishing. The same relay attack that works against SMS codes works against TOTP codes. Your 30-second window is more than enough time for an automated relay to pass the code from the fake site to the real site. The technical term is AiTM — Adversary-in-the-Middle. Phishing toolkits specifically designed to defeat TOTP in real time (Evilginx2, Modlishka, and others) are openly documented and widely used. TOTP is substantially better than SMS. It is not phishing-resistant.

## The authenticator apps

### Google Authenticator

The most widely recognized TOTP app. It works correctly and requires no account. The original limitation was significant: secrets were stored only on the device with no backup. Lose your phone, lose every TOTP code you had set up, with no recovery path except calling each service individually.

Google added optional cloud sync in 2023. The implementation drew criticism from security researchers: secrets were initially transmitted without end-to-end encryption, meaning they were readable to Google's infrastructure. Google has since added E2E encrypted sync as an option, but the default remains unencrypted unless you opt in. For personal use, Google Authenticator is adequate. For enterprise contexts or high-value accounts, there are better options.

### 1Password

1Password handles TOTP as one of its stored item types, alongside usernames and passwords. Two things make it meaningfully better than a standalone authenticator app.

First, integration. 1Password fills your TOTP code automatically alongside your password in the same autofill action. You do not switch apps, read a code off your phone screen, and type it manually. The code appears in the browser extension in the same moment as the password. For users, this removes the friction that causes people to disable or bypass MFA.

Second, storage. Your TOTP secrets are end-to-end encrypted, backed up, and synced across all your devices. Lose a phone, lose nothing. Get a new device, instant setup.

The theoretical objection — that storing TOTP in the same vault as your password technically reduces from two factors to one — is valid in principle. In practice, a 1Password user with TOTP enabled is substantially more secure than one who abandons MFA because the friction is too high. 1Password also stores passkeys natively, making it the most practical cross-platform passkey manager currently available.

### Microsoft Authenticator

The natural choice for Microsoft-centric organizations. It handles TOTP for any compatible service, but its primary value is as the push notification and passwordless authentication method for Microsoft Entra ID.

Its key security feature: **number matching**. When a push notification is sent, the login screen displays a two-digit number the user must enter into the Authenticator app before approving. This nearly eliminates push bombing attacks — more on why in the next section. Microsoft Authenticator also supports passkey authentication and passwordless phone sign-in for Entra ID. If your organization runs Microsoft 365, this app is standard issue.

### Okta Verify

The enterprise equivalent of Microsoft Authenticator for Okta-centric organizations. Push notifications with rich context — the service, device, and location of the login attempt — TOTP generation, and Okta FastPass, a passwordless mechanism using a device-bound cryptographic key.

Okta Verify integrates with Okta's device trust signals: the app can attest whether the device is enrolled in MDM, meets minimum OS version requirements, and has disk encryption enabled. Okta's conditional access policies can require these signals before granting authentication. If your identity provider is Okta, Okta Verify is the companion app to deploy.

### JumpCloud Protect

JumpCloud's authenticator app for JumpCloud-managed accounts. Push notification approval, TOTP generation, and integration with JumpCloud's conditional access and device trust infrastructure. Everything surfaces in the same admin console, the same user lifecycle workflows, and the same device trust policies you're already managing. If your directory is JumpCloud, JumpCloud Protect is the natural companion — and the standard configuration RSystems implements for JumpCloud clients.

## Push notifications: better UX, new attack surface

Push-based MFA replaces code-typing entirely. You attempt to log in, the service sends a push notification to the registered app on your phone, you tap Approve or Deny, and authentication completes or fails.

**What push fixes:** no code to type means no code to steal. An AiTM phishing relay can capture your username and password but cannot intercept a push notification sent to your phone. The notification includes contextual information — the service requesting access, your IP location, the device — that helps you detect suspicious requests.

**What push introduces:** MFA fatigue attacks, also called push bombing. The technique is simple. The attacker has your credentials. They attempt to log in repeatedly, generating a continuous stream of push notifications to your phone. Users receiving unexpected authentication requests will often eventually approve one to make it stop — especially late at night, or if they assume it is a technical glitch.

In 2022, Uber was compromised via exactly this method. The attacker had an employee's credentials, sent push notifications repeatedly, then sent a WhatsApp message pretending to be Uber IT, explained the requests were legitimate, and asked the employee to approve. The employee approved. The attacker was in.

**Number matching** is the primary mitigation. The login screen displays a two-digit number the user must enter into the authenticator app before approval is granted. An attacker triggering push notifications cannot know what number appears on the legitimate login screen. A user receiving an unsolicited push with a number field and no corresponding number on their screen knows immediately something is wrong. CISA specifically recommends number matching as a requirement for all push-based MFA deployments.

Push MFA with number matching is meaningfully more secure than TOTP. It is not phishing-resistant in all scenarios, but it raises attack complexity significantly.

## FIDO2, WebAuthn, and hardware keys

FIDO2 is the authentication standard that achieves something the previous methods cannot: cryptographic phishing resistance. Not improved resistance. Structural impossibility.

**How it works:** when you register a FIDO2 credential with a service, your authenticator — a hardware key or your device's secure enclave — generates a public/private key pair specifically for that service's domain. The public key is sent to and stored by the service. The private key never leaves your authenticator. It is generated on the hardware and cannot be exported.

When you authenticate, the service sends a cryptographic challenge. Your authenticator signs it with the private key tied to that specific domain. The service verifies the signature against the stored public key. Authentication succeeds.

**Why phishing cannot work:** the key pair is bound to the specific origin at the cryptographic level. A FIDO2 credential registered for accounts.google.com will not sign a challenge from accounts.go0gle.com. The authenticator checks the exact domain. This is not a UI warning the user might dismiss. It is a cryptographic operation that fails if the domain does not match. There is no user decision, and therefore no user error.

After Google required hardware security keys for all employees in 2017, they had zero successful phishing-based account compromises across their workforce. Not reduced — zero. The architecture does not permit it.

**YubiKey** is the most widely deployed FIDO2 hardware authenticator. A small USB or NFC device, a YubiKey stores credentials on secure hardware. Tap it to a USB port or to an NFC reader on your phone and authentication completes. The private keys generated on a YubiKey cannot be extracted from the hardware — even if someone takes the physical key, the credentials inside are not readable. YubiKeys are the appropriate choice for privileged accounts and high-security requirements.

## Passkeys: FIDO2 for everyone

Passkeys are FIDO2 credentials that live in software rather than dedicated hardware — specifically, in your device's secure enclave (Apple's Secure Enclave, Android's StrongBox, Windows Hello's TPM) or a credential manager like 1Password.

The cryptographic mechanism is identical to a hardware key. The difference is portability and usability.

A passkey stored in iCloud Keychain is available across all your Apple devices. A passkey stored in 1Password is available on every device where you use 1Password — Mac, Windows, iOS, Android — regardless of platform. This matters because native platform passkey implementations are platform-locked: iCloud Keychain passkeys do not work on Windows, and Google Password Manager passkeys do not work on iOS. 1Password passkeys work everywhere 1Password works, making it the most practical path to broad passkey adoption in mixed device environments.

**Device-bound vs. synced passkeys:** a passkey on a hardware key exists only on that physical device. A passkey in iCloud Keychain exists across all your Apple devices. Synced passkeys trade a degree of isolation for significant usability. Whether synced passkeys in E2E encrypted storage meet your organization's requirements is worth evaluating explicitly.

**The user experience:** you never create, remember, or type a password for a passkey-protected service. Authentication is a biometric confirmation — Face ID, Touch ID, Windows Hello — and you are in. Phishing-resistant by design. Simpler than a password. Better security and better UX simultaneously. This is why every major platform and most major services are actively adopting passkeys.

## The security hierarchy

Weakest to strongest, and why:

**SMS codes** — stops naive credential stuffing. Vulnerable to SIM swap, SS7, and real-time phishing. Use only as fallback.

**TOTP authenticator codes** — removes telecom attack surface. Still vulnerable to AiTM phishing. Correct choice when FIDO2 is unavailable.

**Push notifications without number matching** — better UX, same phishing vulnerability plus push bombing risk. Insufficient without number matching.

**Push notifications with number matching** — substantially mitigates push bombing. Still not cryptographically phishing-resistant but raises attack complexity significantly.

**FIDO2 hardware keys** — phishing-resistant by design. Correct for privileged accounts, administrators, and executives. Requires physical device management.

**Passkeys** — same cryptographic guarantee as hardware keys, better usability, platform-synced. The emerging standard for all accounts.

## Why phishing-resistant is becoming the requirement

The most sophisticated attacks today specifically target MFA. Evilginx2, one of the most documented AiTM frameworks, is openly available and designed to relay TOTP codes and session tokens in real time. The baseline attack — credentials plus TOTP code via phishing relay, then session token theft — bypasses SMS and TOTP completely. The session persists even after the code expires.

The US government's response has been explicit. CISA's binding operational directive specifies that SMS and TOTP are no longer considered sufficient for federal systems and that phishing-resistant MFA is the required standard for privileged access. Enterprise cyber insurance applications increasingly ask which MFA types are deployed and whether phishing-resistant authentication is enforced. The industry is moving in this direction not because of principle but because non-phishing-resistant MFA is failing at scale.

The practical roadmap for most organizations:

Ensure MFA is required for all accounts — any MFA is substantially better than none. Move from SMS to TOTP or push-based MFA. Require number matching on all push deployments. Deploy passkeys or hardware keys for privileged access, administrators, and executives. Adopt passkeys as the standard for all users as platform support matures — which it is doing rapidly.

1Password, JumpCloud, Microsoft, Okta, and Google all support passkeys today. The path exists, the tooling exists, and the attacks against weaker methods are only becoming more automated and accessible. The question is when to require phishing-resistant authentication, not whether it is viable.`,
  },
  {
    slug: "least-privilege",
    title: "The Principle of Least Privilege",
    categories: ["Security", "Identity"],
    description: "Give people exactly the access their role requires — nothing more. Why least privilege is the foundation of a secure, manageable environment, and how to actually put it into practice.",
    related: ["directory-services", "1password", "mfa-and-phishing-resistance"],
    content: `## What least privilege actually means

The principle of least privilege is simple to state: every person, account, and system should have exactly the access required to do its job — and nothing more. A bookkeeper can reach the accounting system but not the production servers. A marketing contractor can edit the campaign folder but can't see HR records. A [super admin](/resources/glossary#super-admin) [service account](/resources/glossary#service-account) can do almost anything, but the people who hold its credential retrieve it only when they genuinely need it.

The naming convention for that account doesn't matter; what matters is that it exists and is treated carefully. We've used many over the years and across different environments: \`super.admin\`, etc.. Most of the time, and in the examples throughout this article, we use \`itadmin\` — as in \`itadmin@yourdomain.com\`.

It sounds obvious. The reason it's worth a dedicated article is that almost every organization violates it by default — not through bad intent, but through the path of least resistance. Someone needs access to a folder, so you grant *that person* access to *that folder*. Someone's covering for a colleague, so you copy the colleague's permissions. Multiply that by a few years of hires, departures, projects, and one-off favors, and you arrive at the state most organizations are actually in: nobody can confidently say who can access what, and nobody wants to remove anything for fear of breaking something.

Least privilege is the discipline that prevents that drift. It's less a feature you turn on than a way of thinking about access from the start.

## Why it matters more than it seems

The case for least privilege rests on three things.

**It limits the blast radius.** Every credential is a potential entry point. When an account is compromised — through a phished password, a reused credential, a stolen laptop — the damage is bounded by what that account could reach. If your CFO's account can access everything, a single successful phish is catastrophic. If it can access only what the CFO actually needs day to day, the same phish is contained. This is exactly why ownership of record should sit with a dedicated service account rather than a real person's working account: it keeps the highest-authority credential out of the line of fire.

**It makes the environment legible.** An environment built on roles and groups can be reasoned about. You can answer "who can see the financial models?" by looking at one group. An environment built on thousands of individual grants can't be reasoned about at all — the answer to that question requires an audit, and the audit is out of date the moment it's finished. Legibility isn't a nicety; it's what makes security reviews, compliance attestations, and offboarding possible.

**It survives turnover.** People join, change roles, and leave constantly. If access is tied to individuals, every one of those events is a manual, error-prone cleanup. If access is tied to roles, the events become trivial: add someone to a group, move them between groups, remove them from a group. The permissions take care of themselves.

## Roles, not people

The single most important practical move is to assign permissions to groups, never to individuals.

The instinct is always individual: *Tony needs access to the quarterly reports.* Resist it. Ask instead what Tony's **role** requires. Tony is a manager; managers need the quarterly reports. So you create a \`managers\` group, grant that group access to the reports, and add Tony to the group. Now the access describes a role, not a person.

The payoff shows up immediately. When you hire a second manager, you add them to the group and they inherit exactly the right access — no guessing, no copying someone else's permissions and hoping. When Tony is promoted out of management, you remove him from the group and his manager-level access disappears cleanly. When he leaves the company entirely, removing his account from its groups revokes everything at once. You never find yourself reverse-engineering what a departing employee could touch.

This is the same logic whether you're working in Google Workspace, Microsoft 365, an on-premises file server, or a password manager. The platform changes; the principle doesn't.

## How to put it into practice

A few concrete habits turn the principle into a working system.

**Design your groups around durable roles.** Create groups that reflect real, lasting distinctions — \`managers\`, \`finance\`, \`engineering\`, \`everyone\` — not transient ones. Avoid creating a group for every tiny variation; if eighteen groups all contain the same four people, you've added complexity without value. But do create separate groups where you genuinely expect access to diverge over time, even if it doesn't today. A small company where everyone can see both finance and operations might still keep them as separate groups, because the day will come when a finance hire should see one and not the other.

**Name groups consistently and intuitively.** A new administrator should be able to look at your group names and understand the structure without a translation guide. Follow the same naming discipline you use everywhere else: clear, consistent, no cryptic strings, no risky special characters. Groups you can't decipher are groups people stop maintaining.

**Default to the shared context, not the personal one.** When you store data, put it where a team or department owns it — a Shared Drive, a SharePoint site, a team folder — rather than an individual's personal drive. The same applies to credentials in a password manager: organize vaults by who needs access, not by who happened to create the entry. Personal ownership of shared resources is how you end up locked out of your own data when someone leaves.

**Grant up, don't strip down.** It's far safer to start someone with minimal access and add what they need than to give broad access and try to claw it back later. Walking back permissions is where things break, because nobody's certain what depends on what. Starting narrow keeps you in control.

**Revisit periodically.** Roles change, projects end, contractors finish. A light, regular review — who's in which group, and is that still right? — keeps the model honest. Because access is organized by group, this review is quick; you're checking memberships, not auditing thousands of individual grants.

## The throughline

Least privilege isn't a product you buy or a switch you flip. It's a posture: assume access should be narrow, organize it around roles rather than people, keep the structure simple enough to understand and scalable enough to grow into. Done from the start, it costs almost nothing and quietly prevents an entire category of security and operational pain. Retrofitted years later, it's one of the more expensive and disruptive things an organization can take on — which is exactly why it belongs in the foundation, not the renovation.`,
  },
]

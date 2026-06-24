export type Block =
  | { type: "p"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "quote"; text: string; attribution?: string }
  | { type: "img"; src: string; alt: string; caption?: string; size?: "small" }
  | { type: "img-pair"; images: { src: string; alt: string; caption?: string }[] }
  | { type: "specs"; groups: { title: string; items: [string, string][] }[] }
  | { type: "placeholder"; label: string }
  | { type: "rich"; parts: (string | { text: string; href: string })[] };

export interface CaseStudySection {
  label: string;
  heading?: string;
  blocks: Block[];
  bg?: string;
}

export interface CaseStudy {
  slug: string;
  title: string;
  subtitle: string;
  client: string;
  industry: string;
  tags: string[];
  summary: string;
  featuredImage?: { src: string; alt: string; position?: string };
  featuredImagePair?: {
    before: { src: string; alt: string };
    after: { src: string; alt: string };
  };
  sections: CaseStudySection[];
  results: string[];
  seoTitle?: string;
  seoDescription?: string;
  ogImage?: string;
  canonicalPath?: string;
  jsonLd?: Record<string, unknown>;
  closingImage?: { src: string; alt: string };
  pressCitation?: { label: string; href: string };
  resultsHeading?: string;
  cta?: {
    heading: string;
    body: string;
    primary: { label: string; href: string };
    secondary?: { label: string; href: string };
  };
  glossary?: { term: string; definition: string }[];
}

export const caseStudiesData: CaseStudy[] = [
  {
    slug: "operationalizing-ai",
    title: "Operationalizing AI Across Every Department",
    subtitle:
      "How RSystems deployed Claude at every level of the business — with the identity, governance, and architecture to do it safely",
    client: "RSystems NYC (internal)",
    industry: "AI Operations",
    tags: ["AI & Automation", "Identity & Access", "Governance", "MCP Architecture", "Agentic AI"],
    summary:
      "How RSystems moved beyond AI as a chat assistant to a governed operational layer — AI agents provisioned as managed JumpCloud identities with least-privilege access, custom OAuth-backed MCP servers, and full audit governance through the JumpCloud AI Gateway, automating and augmenting work across every department.",
    seoTitle: "Operationalizing AI Across Every Department | RSystems NYC",
    seoDescription:
      "How RSystems deployed Claude across the business — AI agents provisioned as managed JumpCloud identities with least-privilege access, custom OAuth-backed MCP servers, and full audit governance via the JumpCloud AI Gateway — operationalizing AI at every level and in every department.",
    canonicalPath: "/case-studies/operationalizing-ai",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Operationalizing AI Across Every Department — Governed Agentic AI at RSystems",
      "description":
        "How RSystems deployed Claude as a governed operational layer across the business — AI agents as managed JumpCloud identities with least-privilege RBAC, custom OAuth-backed MCP servers via JumpCloud OIDC, and centralized audit governance through the JumpCloud AI Gateway.",
      "url": "https://rsystems.nyc/case-studies/operationalizing-ai",
      "author": {
        "@type": "Organization",
        "name": "RSystems NYC",
        "url": "https://rsystems.nyc",
      },
      "publisher": {
        "@type": "Organization",
        "name": "RSystems NYC",
        "url": "https://rsystems.nyc",
        "areaServed": { "@type": "City", "name": "New York City" },
      },
      "about": {
        "@type": "Thing",
        "name": "Agentic AI operations with managed identity and governance",
      },
    },
    featuredImage: {
      src: "/assets/Operationalizing_AI.png",
      alt: "A human conductor leading an orchestra of humanoid robots — orchestrating AI agents across the business.",
    },
    sections: [
      {
        label: "At a Glance",
        blocks: [
          {
            type: "specs",
            groups: [
              {
                title: "",
                items: [
                  ["Client", "RSystems NYC (internal)"],
                  [
                    "Problem",
                    "Move beyond using AI as a chat assistant to deploying it as a genuine operational layer across the business — able to act inside real systems, automate real work, and do it all under the same identity and governance controls that protect everything else.",
                  ],
                  [
                    "Approach",
                    "A structured Claude rollout built on managed identity, least-privilege role-based access, custom MCP servers, and full audit governance through the JumpCloud AI Gateway.",
                  ],
                  [
                    "Outcome",
                    "AI agents that operate across the business's systems through natural language — authenticated, permissioned, and audited like any other user — automating work and augmenting the team across every department.",
                  ],
                ],
              },
            ],
          },
        ],
      },
      {
        label: "The Opportunity",
        heading: "Beyond the chat window",
        blocks: [
          {
            type: "p",
            text: "Most organizations' experience with AI stops at the chat window: a person types a question, gets an answer, and copies the result somewhere useful. That's valuable, but it's a fraction of what's possible. The larger opportunity is to let AI act — to read from and write to the actual systems a business runs on, and to automate or assist with the work that today requires a human to log in, click through, and carry data from one place to another.",
          },
          {
            type: "p",
            text: "The obstacle isn't the AI's capability. It's everything around it: identity, permissions, security, and governance. An agent that can act inside your business systems is only safe if it's subject to the same controls as a human employee — authenticated through your identity provider, scoped to only what it should access, and audited so every action is attributable. Without that scaffolding, agentic AI is a liability. With it, it's a genuine operational capability.",
          },
          {
            type: "p",
            text: "We built the scaffolding first, then rolled out the agents. This is how.",
          },
        ],
      },
      {
        label: "Identity",
        heading: "Agents are users too",
        blocks: [
          {
            type: "p",
            text: "The foundation of the entire rollout is a simple principle: an AI agent is treated as a managed identity, exactly like a person.",
          },
          {
            type: "p",
            text: "Each agent is a JumpCloud user. It has its own identity, its own role-based access controls at Google, Microsoft, and the other platforms it touches, and its own scoped permissions — granted and revoked centrally, the same way we manage human staff. Every agent is provisioned according to the principle of least privilege: it gets access to exactly what it needs to do its job and nothing more. An agent responsible for documentation has access to the documentation systems and nothing else. An agent that handles invoicing is permissioned for the accounting platform, not HR records. Because these are real managed identities, every action an agent takes is attributable to that identity, and access can be revoked instantly if anything looks wrong.",
          },
          {
            type: "p",
            text: "This is the difference between \"we gave the AI an API key\" and \"we onboarded the AI like an employee.\" The second is governable. The first is a breach waiting to happen.",
          },
        ],
      },
      {
        label: "Governance",
        heading: "Every action audited",
        blocks: [
          {
            type: "p",
            text: "All of the agents' access to business systems is routed through the JumpCloud AI Gateway, which gives us centralized auditing and governance over what the agents are doing.",
          },
          {
            type: "p",
            text: "Every connection, every tool call, every action flows through a single governed path where it can be logged, reviewed, and controlled. AI activity across the business isn't a black box — it's a reviewable audit trail. For any organization that has to answer questions about who, or what, accessed a system and when, this is the control that makes agentic AI defensible rather than reckless.",
          },
        ],
      },
      {
        label: "Architecture",
        heading: "Custom MCPs as the connective tissue",
        blocks: [
          {
            type: "p",
            text: "What lets the agents actually do things is a set of custom MCP servers — the standardized way modern AI models connect to external tools and systems.",
          },
          {
            type: "p",
            text: "We host these at mcp.rsystems.nyc, with a dedicated endpoint for each tool and system the agents work with. Each MCP server is backed by OAuth, authenticated through JumpCloud OIDC — so when an agent connects to a system, it does so with proper, revocable, identity-bound authorization, not a static credential buried in a config file. The MCP layer translates an agent's natural-language intent into real, authenticated actions inside real systems.",
          },
          {
            type: "p",
            text: "The result is that the entire business becomes addressable in natural language. Instead of a person logging into a monitoring dashboard, an accounting system, or a network controller, an agent can be asked — in plain language — to check, retrieve, analyze, or act, carrying that request through the MCP layer into the live system under its own governed identity.",
          },
        ],
      },
      {
        label: "In Practice",
        heading: "What the agents do, across every department",
        blocks: [
          {
            type: "p",
            text: "With identity, governance, and connectivity in place, the agents take on work across the business. These capabilities are at varying stages — some live in production, others in active development or QA — but all are built on the same governed foundation:",
          },
          {
            type: "ul",
            items: [
              "Time tracking — capturing and recording time against work without manual entry.",
              "Documentation — generating and maintaining technical and operational documentation that historically went stale because no one had time to keep it current.",
              "Network analysis and troubleshooting — querying network monitoring systems in natural language, surfacing issues, and assisting with diagnosis.",
              "Monitoring — watching systems and surfacing what matters to a human operator, augmenting the team rather than replacing the human in the loop.",
              "Sales and marketing — supporting outreach, content, and pipeline work.",
              "Invoicing and accounting — moving financial data through the systems that handle it, reducing manual reconciliation and entry.",
              "HR and compliance — assisting with the recurring administrative and compliance work that consumes staff time.",
            ],
          },
          {
            type: "p",
            text: "In each case the pattern is the same: work that used to require a human to log in and operate a system can now be initiated in natural language and carried out — or accelerated — by an agent operating under its own permissioned, audited identity.",
          },
        ],
      },
      {
        label: "The Throughline",
        heading: "The same foundation built our website",
        blocks: [
          {
            type: "rich",
            parts: [
              "This same approach built our own website. The RSystems site was developed using Claude Code, the agentic coding environment, on infrastructure connected to the same identity backbone — a story we tell in detail in ",
              { text: "its own case study", href: "/case-studies/vibe-coding-done-right" },
              ".",
            ],
          },
          {
            type: "p",
            text: "AI, deployed properly, isn't a single tool. It's a capability that — once you've built the identity, governance, and connective architecture — extends across everything from how you build your website to how you run your back office.",
          },
        ],
      },
    ],
    resultsHeading: "What we built.",
    results: [
      "AI agents provisioned as managed JumpCloud identities, with least-privilege RBAC across Google, Microsoft, and other platforms",
      "Centralized auditing and governance of all agent activity via the JumpCloud AI Gateway",
      "Custom MCP servers hosted at mcp.rsystems.nyc, one per tool/system",
      "OAuth-backed MCP authentication via JumpCloud OIDC — identity-bound, revocable authorization, no static credentials",
      "Natural-language operation across business systems through the MCP layer",
      "Agentic automation and augmentation (live and in active development) across time tracking, documentation, network troubleshooting, monitoring, sales and marketing, invoicing and accounting, and HR/compliance",
      "The RSystems website itself, built with Claude Code on the same identity backbone",
    ],
    cta: {
      heading: "Thinking about AI for your organization?",
      body: "Rolling out AI across a business takes more than a subscription — it takes the identity, governance, and architecture to do it safely. It's exactly the kind of work we do. If you're looking to operationalize AI across your organization, we can help.",
      primary: { label: "Let's Talk", href: "/contact" },
    },
  },

  {
    slug: "vibe-coding-done-right",
    title: "Vibe Coding, Done Right",
    subtitle:
      "How rsystems.nyc was designed, built, and is maintained using AI-assisted development — and what it takes to do it well",
    client: "RSystems NYC (this website)",
    industry: "Technology Consulting",
    tags: ["AI & Development", "Web Development", "Infrastructure", "DevOps", "Identity"],
    summary:
      "How RSystems designed, built, and maintains rsystems.nyc with AI-assisted development — a fully custom Next.js and Tailwind site on Vercel, with GitHub, JumpCloud SSO, and professional infrastructure underneath — and what it actually takes to vibe code a production website well.",
    seoTitle: "Vibe Coding, Done Right | RSystems NYC",
    seoDescription:
      "How RSystems designed, built, and maintains rsystems.nyc using AI-assisted development — a custom Next.js site on Vercel, with GitHub, JumpCloud SSO, and professional infrastructure — and what it actually takes to vibe code a production website well.",
    canonicalPath: "/case-studies/vibe-coding-done-right",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Vibe Coding, Done Right — Building rsystems.nyc with AI-Assisted Development",
      "description":
        "How RSystems designed, built, and maintains its own website with AI-assisted development — a fully custom Next.js and Tailwind site on Vercel, with GitHub, JumpCloud SSO, automated TLS, and professional virtualized infrastructure underneath.",
      "url": "https://rsystems.nyc/case-studies/vibe-coding-done-right",
      "author": {
        "@type": "Organization",
        "name": "RSystems NYC",
        "url": "https://rsystems.nyc",
      },
      "publisher": {
        "@type": "Organization",
        "name": "RSystems NYC",
        "url": "https://rsystems.nyc",
        "areaServed": { "@type": "City", "name": "New York City" },
      },
      "about": {
        "@type": "WebSite",
        "name": "rsystems.nyc",
        "url": "https://rsystems.nyc",
        "description":
          "A fully custom Next.js and Tailwind marketing site built with AI-assisted development and maintained by non-developers through a chat interface.",
      },
    },
    featuredImage: {
      src: "/assets/vibe-coding.png",
      alt: "An AI-assisted development session building rsystems.nyc — code edits alongside a live terminal build running in Claude Code.",
      position: "bottom",
    },
    sections: [
      {
        label: "At a Glance",
        blocks: [
          {
            type: "specs",
            groups: [
              {
                title: "",
                items: [
                  ["Client", "RSystems NYC (this website)"],
                  [
                    "Problem",
                    "Build a custom, production-grade marketing site for a technical consulting firm — distinctive design, structured SEO, a growing case study library, and an ongoing content pipeline — without hiring a web developer.",
                  ],
                  [
                    "Approach",
                    "AI-assisted development using Claude Code, on a purpose-built virtualized dev environment, with professional infrastructure and identity management underneath.",
                  ],
                  [
                    "Outcome",
                    "A fully custom Next.js and Tailwind site, live on Vercel, maintained by non-developers through a chat interface. Estimated cost to build the same site at agency or senior freelance rates: $25,000–$40,000 for the initial build alone.",
                  ],
                ],
              },
            ],
          },
        ],
      },
      {
        label: "The Premise",
        heading: "What \"vibe coding\" actually means",
        blocks: [
          {
            type: "p",
            text: "Vibe coding is a recent term for a style of software development where, instead of writing code by hand, you describe what you want in plain language and an AI model writes the code for you. You review, you refine, you describe the next change — and the work happens in a conversation rather than a text editor.",
          },
          {
            type: "p",
            text: "It's a genuinely new way to build software, and it's powerful. But there's a catch that doesn't get said often enough: doing it well still requires knowing what you're doing. You either need to be a developer, or you need solid technical fundamentals — enough to set up the infrastructure correctly, to recognize when the AI has made a wrong turn, and to make the architectural decisions that the model can execute but shouldn't be left to decide on its own. Vibe coding lowers the labor of writing code. It doesn't remove the need to understand systems.",
          },
          {
            type: "p",
            text: "This site is a case study in that distinction — because the visible part, a website built by describing it, sits on top of a foundation of decisions that required real technical knowledge to get right.",
          },
        ],
      },
      {
        label: "The Foundation",
        heading: "The infrastructure underneath the conversation",
        blocks: [
          {
            type: "p",
            text: "Before a single line of the site was written, there was infrastructure to stand up — and this is where the fundamentals earn their keep.",
          },
          {
            type: "p",
            text: "The development environment is a virtual machine, provisioned on our own VMware infrastructure. Spinning it up meant making decisions about resource allocation, networking, and operating system — the kind of routine virtualization work that's invisible when it's done right and a constant obstacle when it isn't.",
          },
          {
            type: "p",
            text: "Source control runs through GitHub. Setting that up properly meant creating the repository, configuring SSH and deploy keys so the dev environment could authenticate to GitHub securely without passwords living in plaintext, and establishing a git workflow — commits, branches, and a clean history — so that every change is tracked and reversible.",
          },
          {
            type: "p",
            text: "Hosting runs on Vercel, linked directly to the GitHub repository. This is a continuous deployment pipeline: when a change is committed and pushed, Vercel automatically builds and deploys the updated site. There's no manual upload step, no FTP, no \"publishing\" — the act of saving the code is the act of deploying it.",
          },
          {
            type: "p",
            text: "DNS was configured to point the domain at Vercel's infrastructure, and TLS certificates — the encryption that puts the padlock in the browser and serves the site over HTTPS — are handled through Let's Encrypt and Certbot, issuing and automatically renewing certificates so the site is always served securely.",
          },
          {
            type: "p",
            text: "None of this is exotic. All of it is the kind of thing that, done wrong, produces a site that's insecure, can't deploy, or simply doesn't work. The AI can write code beautifully. It can't decide for you how your deployment pipeline should be structured, or notice that your certificate auto-renewal is misconfigured. That's the part that takes fundamentals.",
          },
        ],
      },
      {
        label: "Identity",
        heading: "Built so the whole team can run it",
        blocks: [
          {
            type: "p",
            text: "One decision turned this from a personal project into a team asset: connecting the development platform to JumpCloud for single sign-on.",
          },
          {
            type: "p",
            text: "JumpCloud is our identity provider, and wiring the site's management environment into it means access is governed by the same identity system as everything else we run. Team members log in through SSO — no separate credentials, no shared passwords, access granted and revoked centrally. Practically, this is what allows non-technical team members to manage the site and add content. They don't need to be developers. They don't need to touch the infrastructure. They log in through an interface they already have access to and work through a chat interface to make changes.",
          },
          {
            type: "rich",
            parts: [
              "That same identity backbone reaches well beyond this site — it's how we provision and govern AI agents across the entire business, a rollout we detail in ",
              { text: "Operationalizing AI Across Every Department", href: "/case-studies/operationalizing-ai" },
              ".",
            ],
          },
        ],
      },
      {
        label: "The Payoff",
        heading: "What it actually changes",
        blocks: [
          {
            type: "p",
            text: "The headline result is speed, but the specific kind of speed matters.",
          },
          {
            type: "p",
            text: "Complex edits that would have taken a developer hours — or taken days to schedule, brief, and wait on — now take minutes. A concrete example: as new case studies and content roll out, every related page should cross-link to it. Done by hand, that's tedious, error-prone work that tends to get deferred. Through a conversation, it's a single instruction, executed across the whole site in one pass. Content can be added the moment it's ready instead of waiting for developer availability.",
          },
          {
            type: "p",
            text: "And because the management layer is behind SSO and driven by chat, the people adding content aren't gated on a developer at all. The site is live. The team is using it. New content goes up when it's written, not when someone has time to hand-code it.",
          },
        ],
      },
      {
        label: "The Economics",
        heading: "What this would have cost",
        blocks: [
          {
            type: "p",
            text: "A site like this one — custom design system, a dozen-plus case studies, more than a dozen industry pages, structured data and SEO throughout, multi-level navigation, and continuous iteration — is not a template brochure site. Priced conventionally, current market rates put a custom Next.js build of this scope at $25,000–$40,000 with an agency or senior freelancer for the initial build, with senior developers billing $100–$200 per hour. Ongoing iterative work — the constant stream of edits, new pages, and cross-linking — would add several thousand dollars a year on top, at those same rates.",
          },
          {
            type: "p",
            text: "The point isn't that the site was free to build. Doing it well took real expertise and real time. The point is that the same expertise, paired with AI-assisted development, produced an agency-grade result at a fraction of the cost — and left us with something an agency engagement wouldn't: a site our own team can run, every day, without calling anyone.",
          },
        ],
      },
    ],
    resultsHeading: "What we did.",
    results: [
      "Provisioned a dedicated development VM on our own VMware infrastructure",
      "Created and configured a GitHub repository with SSH and deploy keys for secure authentication",
      "Established a clean git workflow with full version history",
      "Linked GitHub to Vercel for continuous deployment — commit to deploy, automatically",
      "Configured DNS and automated TLS via Let's Encrypt and Certbot",
      "Integrated the management environment with JumpCloud SSO, so non-technical team members can manage the site securely",
      "Used Claude Code to build the entire site through conversation",
      "Built a fully custom Next.js + Tailwind site, live on Vercel, maintained through a chat interface",
    ],
    cta: {
      heading: "Looking to build something?",
      body: "If you're looking for help building a new website or internal software tools, we can help. This is exactly the kind of work we do — combining senior technical expertise with AI-assisted development to deliver custom results faster and more affordably than a traditional build.",
      primary: { label: "Vibe Coding & Custom Development", href: "/services/ai/vibe-coding" },
      secondary: { label: "Let's Talk", href: "/contact" },
    },
    glossary: [
      {
        term: "Vibe coding",
        definition:
          "A style of software development where you describe what you want in plain language and an AI model writes the code, working iteratively through conversation rather than writing code by hand.",
      },
      {
        term: "GitHub",
        definition:
          "A platform for hosting and managing code using Git version control. It stores the project, tracks every change, and serves as the source of truth the hosting platform deploys from.",
      },
      {
        term: "Repo (repository)",
        definition: "The container for a project's code and its complete change history.",
      },
      {
        term: "SSH key",
        definition:
          "A pair of cryptographic keys used to authenticate securely without a password. A deploy key is an SSH key scoped to a single repository.",
      },
      {
        term: "Vercel",
        definition:
          "The hosting platform the site runs on. Built by the makers of Next.js, it automatically builds and deploys the site whenever new code is pushed to the connected GitHub repository.",
      },
      {
        term: "DNS (Domain Name System)",
        definition:
          "The system that translates a human-readable domain name into the server address browsers connect to.",
      },
      {
        term: "CI/CD (Continuous Integration / Continuous Deployment)",
        definition: "An automated pipeline where committing code triggers an automatic build and deployment.",
      },
      {
        term: "Let's Encrypt / Certbot",
        definition:
          "A free certificate authority and the tool that automatically issues and renews the TLS certificates that serve the site securely over HTTPS.",
      },
      {
        term: "SSO (Single Sign-On)",
        definition:
          "An authentication method that lets people log in to multiple systems with one centrally managed identity.",
      },
      {
        term: "VMware",
        definition: "Virtualization software that runs virtual machines on physical server hardware.",
      },
    ],
  },

  {
    slug: "redundancy-by-design",
    title: "Zero Downtime Since Deployment — Enterprise Infrastructure for a Leading NYC Architecture Firm",
    subtitle:
      "A ground-up, zero-compromise infrastructure built with redundancy as a first-order constraint — network, compute, storage, wireless, and access control, with no single point of failure tolerated anywhere in the stack.",
    client: "A leading NYC architecture firm",
    industry: "Architecture & Design",
    tags: ["Networking", "Cloud & Infrastructure", "Security", "Identity"],
    summary:
      "Ground-up redundant infrastructure for a 100-person architecture firm — Cisco switching, Ruckus Wi-Fi 6, VMware cluster, dual-controller SAN, PDK access control, and 10 Gbps WAN. Zero downtime since deployment.",
    featuredImage: {
      src: "/assets/PI_Network_Topology.png",
      alt: "Network topology diagram — Pembrooke & Ives full-stack redundant infrastructure",
    },
    seoTitle:
      "Zero Downtime Since Deployment — Enterprise Infrastructure for a Leading NYC Architecture Firm | RSystems NYC",
    ogImage: "https://rsystems.nyc/assets/PI_Network_Topology.png",
    seoDescription:
      "RSystems designed a ground-up, zero-compromise infrastructure for a 100-person NYC architecture firm — fully redundant networking, enterprise SAN, VMware cluster, Ruckus Wi-Fi 6, PDK access control with Entra provisioning, and a 10 Gbps WAN. Zero infrastructure downtime since deployment.",
    canonicalPath: "/case-studies/redundancy-by-design",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "Article",
      headline:
        "Zero Downtime Since Deployment — Enterprise Infrastructure for a Leading NYC Architecture Firm",
      description:
        "RSystems designed a ground-up, zero-compromise infrastructure for a 100-person NYC architecture firm — fully redundant networking, enterprise SAN, VMware cluster, Ruckus Wi-Fi 6, PDK access control with Entra provisioning, and a 10 Gbps WAN. Zero infrastructure downtime since deployment.",
      author: {
        "@type": "Organization",
        name: "RSystems NYC",
        url: "https://rsystems.nyc",
      },
      publisher: {
        "@type": "Organization",
        name: "RSystems NYC",
        url: "https://rsystems.nyc",
      },
      about: {
        "@type": "Organization",
        name: "A leading NYC architecture firm",
      },
      keywords:
        "architecture firm infrastructure, Cisco Catalyst 9300, Cisco Catalyst 9500, SonicWall NSA 4700, Ruckus Wi-Fi 6, VMware ESXi, Dell PowerEdge, Synology UC3200, PDK access control, Entra ID, disaster recovery, high availability",
    },
    sections: [
      {
        label: "The Challenge",
        heading: "Legacy infrastructure built for a smaller firm",
        blocks: [
          {
            type: "p",
            text: "When a premier New York City architecture firm scaled past 100 employees and relocated to a new headquarters, their legacy bare-metal Windows Server environment could no longer support the high-concurrency, high-throughput demands of their design workflow. Staff worked directly off shared storage rather than copying files locally — a workflow pattern that ruthlessly exposes any latency or bandwidth weakness in the underlying infrastructure. Large-format CAD and BIM assets, real-time multi-user collaboration, and uninterrupted application availability were non-negotiable requirements.",
          },
          {
            type: "p",
            text: "RSystems was engaged to architect a ground-up, zero-compromise infrastructure covering wired networking, wireless, compute, storage, and access control. Redundancy was a first-order design constraint at every layer: redundant power, controllers, chassis, and paths throughout. The goal wasn't incremental improvement — it was an environment that could absorb any single component failure without interruption.",
          },
        ],
      },
      {
        label: "Network Architecture",
        heading: "A fully redundant switching fabric",
        blocks: [
          { type: "h3", text: "Access Layer" },
          {
            type: "p",
            text: "Six Cisco Catalyst 9300 switches form the access layer as a single logical stack, providing nearly 300 ports across the office floor. The top stack member — a multi-gigabit variant — is dedicated exclusively to wireless access point uplinks, supporting 5 Gbps per AP uplink with headroom for future 10 Gbps capacity. The stack was specified with 8-port 10GbE expansion modules to provide significant uplink headroom beyond what the licensing tier requires.",
          },
          {
            type: "p",
            text: "Beyond data-plane stacking (each inter-switch link operates at 480 Gbps, dual cables per switch providing 960 Gbps of intra-stack capacity), Cisco StackPower connects the power supplies of all stacked switches into a single logical power domain. A switch member remains fully operational even if both of its local PSUs fail simultaneously, provided the aggregate pool has sufficient capacity from neighboring members. Every switch carries dual PSUs on independent 30-amp UPS circuits — defense-in-depth at the power layer.",
          },
          { type: "h3", text: "Core Layer" },
          {
            type: "p",
            text: "Dual Cisco Catalyst 9500 switches operate via StackWise Virtual — a unified control plane in which both chassis are simultaneously active and authoritative. Neither chassis can enter a split-brain state. From the perspective of any connected device, the two physical switches are a single logical entity.",
          },
          {
            type: "p",
            text: "This enables true cross-chassis EtherChannel: all 12 access-to-core uplinks function as a single bundle, providing 120 Gbps of aggregate bandwidth between layers with simultaneous throughput and link-level redundancy — and no spanning tree blocking. Both core switches carry redundant PSUs on independent circuits.",
          },
          { type: "h3", text: "Firewall & WAN" },
          {
            type: "p",
            text: "A SonicWall NSA 4700 pair operates in active/passive HA, selected specifically for its ability to sustain full deep-packet inspection at 10 Gbps line rate. The site runs a 10 Gbps primary WAN circuit with a 1 Gbps backup — the 4700 was sized to ensure the firewall is never the throughput ceiling at either circuit speed. Downstream connectivity from each firewall to the core uses four bonded 10GbE links (40 Gbps per firewall). Failover is automatic and stateful, typically converging within 2–3 seconds. Both units carry redundant power on independent circuits.",
          },
          { type: "h3", text: "Thermal Management" },
          {
            type: "p",
            text: "The server room presented a challenge common in built-out office environments: extending dedicated precision cooling would have required tens of thousands of dollars in additional ductwork and chiller capacity — not viable given the space geometry. RSystems specified and installed a dedicated HVAC unit within the server room with a hot-aisle/cold-aisle design: cold supply air directed at rack front faces, hot exhaust captured and ducted into an adjacent room. Stable operating temperatures have been maintained since deployment.",
          },
        ],
      },
      {
        label: "Wireless",
        heading: "Enterprise Wi-Fi 6 in a hostile RF environment",
        blocks: [
          {
            type: "p",
            text: "The firm's open floor plan — glass partitions, reflective surfaces, dense client populations in continuous motion — presents a genuinely hostile RF environment. RSystems over-specified radio capacity relative to theoretical client density so that practical performance remained top-tier even as conditions diverged from lab ideals.",
          },
          {
            type: "p",
            text: "A tiered Ruckus Wi-Fi 6 deployment was specified by per-zone density:",
          },
          {
            type: "ul",
            items: [
              "Ruckus R850 (8×8:8 MU-MIMO) in high-density open-plan design zones and primary desk clusters — the 8-stream radio capacity is critical for managing co-channel interference where many clients are simultaneously active in a small area",
              "Ruckus R650 / R610 in conference rooms and corridor coverage zones",
            ],
          },
          {
            type: "p",
            text: "All APs were cabled with dual Cat6a cables supporting 10GbE, ensuring neither cabling nor hardware becomes a bottleneck on a 5–10 year refresh cycle.",
          },
          {
            type: "p",
            text: "Rather than purchasing physical SmartZone controller appliances (~$10,000 per unit at time of deployment), RSystems virtualized redundant SmartZone instances as VMs on the Dell/VMware cluster — eliminating $20,000 in dedicated controller hardware without sacrificing any management or roaming capability. VM-level HA and vMotion portability are added benefits.",
          },
          {
            type: "p",
            text: "The controller-managed roaming model is central to wireless performance in this environment. Without a controller, roaming decisions are left to client devices — leading to the sticky client problem, where a laptop holds a degraded AP signal rather than handing off to a stronger one. SmartZone continuously monitors per-client RSSI and SNR across the AP fabric and issues directed disassociations, seamlessly transitioning clients to the optimal AP during active video calls or large file transfers. This orchestration is invisible to the user.",
          },
        ],
      },
      {
        label: "Storage",
        heading: "Dual-controller SAN with 80 Gbps aggregate bandwidth",
        blocks: [
          { type: "h3", text: "Primary SAN — Synology UC3200" },
          {
            type: "p",
            text: "Selected specifically for its dual active-active iSCSI controllers. Each controller has its own processor, RAM, and dedicated network interfaces. Path failover on controller failure occurs at the hardware level with nanosecond-range latency — no controller election, no convergence delay, no VM I/O timeout. Both controllers serve I/O continuously.",
          },
          {
            type: "p",
            text: "Disk configuration: 8 × 16TB SAS HDD with 4 × 1.92TB SAS SSD read/write cache tier. The cache tier handles small-block, high-IOPS workloads; spinning disk handles large sequential transfers. The tiering engine dynamically promotes and demotes data based on access patterns.",
          },
          {
            type: "p",
            text: "iSCSI connectivity: 8 discrete 10GbE interfaces, each with a unique IP address, all running Jumbo Frames (MTU 9000) — 80 Gbps of raw iSCSI bandwidth. Each ESXi host uses 3 dedicated 10GbE NICs for iSCSI, providing 9 host-side paths in aggregate, closely matched to the 8 appliance-side paths. The network fabric was deliberately over-provisioned relative to the storage appliance's maximum sustainable I/O throughput — the disk array is the ceiling, not the network. That is by design.",
          },
          {
            type: "p",
            text: "Three precision tuning optimizations were applied: ALUA MPIO for intelligent path selection that avoids unnecessary inter-controller traffic; Round-Robin IOPS threshold reduced from 1,000 to 1 (distributing I/O across all 8 active paths simultaneously rather than allowing a single path to carry disproportionate load); and EtherChannel hashing algorithms coordinated across Cisco switch and VMware vSwitch layers to ensure balanced traffic distribution across all physical links.",
          },
          { type: "h3", text: "Secondary SAN — Synology SA3200D" },
          {
            type: "p",
            text: "Active/passive dual-controller unit serving as backup target and extended services platform. The SA3200D was chosen over a second UC3200 for its support of native cloud replication to AWS S3, DNS services, and additional data management capabilities required by the firm's workflow. The trade-off — a few seconds of failover latency versus nanoseconds on the primary — is acceptable on the backup tier where brief interruptions are tolerable.",
          },
        ],
      },
      {
        label: "Compute",
        heading: "VMware cluster on Dell PowerEdge",
        blocks: [
          {
            type: "p",
            text: "Three Dell PowerEdge R650 servers form the compute cluster, each configured with 128GB RAM (half-filled slots reserved for future expansion) and 6 × 10GbE SFP+ NICs: 3 dedicated to iSCSI storage traffic, 3 bonded via EtherChannel for VM data traffic, vMotion, and management.",
          },
          {
            type: "p",
            text: "The cluster runs VMware ESXi 7 under Essentials Plus licensing — a one-time perpetual purchase of approximately $7,000 covering up to three hosts. This licensing tier includes vMotion and DRS, both central to the cluster's operational model.",
          },
          {
            type: "p",
            text: "vMotion enables live migration of running VMs between hosts with zero downtime — firmware updates, hardware replacements, and maintenance can be performed during business hours by migrating workloads off the target host first.",
          },
          {
            type: "p",
            text: "DRS monitors real-time CPU and RAM utilization and automatically rebalances workloads across hosts. The cluster is sized to sustain full workload capacity with any single host offline.",
          },
          {
            type: "p",
            text: "Anti-affinity rules prevent redundant service pairs from co-locating on the same host. Without them, DRS might place both domain controllers on the same physical chassis — defeating the redundancy entirely. Anti-affinity rules are defined for all critical service pairs, including domain controllers and the SmartZone controller pair.",
          },
          {
            type: "p",
            text: "The cluster supports Active Directory, file sharing, wireless controllers, cloud sync agents, a Network Video Recorder for the office camera system, print servers, and additional line-of-business VMs. All VM storage is centralized on the shared SAN — replicated and backed up, not siloed on individual host disks.",
          },
          {
            type: "p",
            text: "For context: hyperconverged platforms capable of meeting these throughput and redundancy requirements would have carried a price tag exceeding $100,000 per node.",
          },
          {
            type: "img",
            src: "/assets/pi_rack.jpeg",
            alt: "Server rack at Pembrooke & Ives — Dell PowerEdge cluster, Cisco switching, and SAN storage",
          },
        ],
      },
      {
        label: "Access Control",
        heading: "Cloud-managed access control, provisioned through Entra",
        blocks: [
          {
            type: "p",
            text: "RSystems deployed PDK as the firm's physical access control platform, integrated directly with Microsoft Entra ID (Azure AD) as the identity source of truth.",
          },
          {
            type: "p",
            text: "The integration eliminates a manual provisioning step that is easy to miss and costly to overlook. When a new employee is added to Entra, PDK automatically creates their access control profile and sends them an invite to enroll their smartphone as a credential. No fob to issue, no IT ticket to file, no separate admin console to manage.",
          },
          {
            type: "p",
            text: "Staff use their phones at door readers via NFC and Bluetooth Low Energy — a faster and more reliable experience than physical credentials, and one that scales gracefully as the organization grows. Offboarding is equally automatic: removing a user from Entra revokes their building access without any additional action.",
          },
        ],
      },
    ],
    results: [
      "Zero infrastructure downtime since deployment",
      "5–7 Gbps real-world internal file transfer throughput — on par with local NVMe, delivered over shared SAN",
      "10 Gbps primary WAN with 1 Gbps backup — SonicWall NSA 4700 HA pair sustains full DPI at 10 Gbps line rate",
      "All 12 access-to-core uplinks active simultaneously — no spanning tree blocking",
      "80 Gbps aggregate iSCSI bandwidth from primary SAN to VMware cluster",
      "SmartZone virtualization eliminated $20,000 in dedicated controller hardware",
      "Full VMware cluster deployed under $7,000 in licensing costs",
      "PDK access control provisioned automatically through Entra — phones as credentials, zero manual issuance",
    ],
  },

  {
    slug: "collaborative-systems-for-audio",
    title: "Collaborative Systems for Audio",
    subtitle:
      "A decade-long infrastructure partnership with a NYC audio engineering firm",
    client: "A NYC-based audio engineering firm",
    industry: "Media & Entertainment",
    tags: ["Cloud & Infrastructure", "Identity"],
    summary:
      "A ten-year infrastructure partnership with a leading NYC audio engineering firm — spanning hybrid cloud migration, pandemic response, and an ongoing fractional CTO engagement that keeps the firm years ahead of industry practice.",
    featuredImage: {
      src: "https://macktez.com/wp-content/uploads/2024/11/sonic_union_studio.png",
      alt: "NYC audio engineering studio",
    },
    sections: [
      {
        label: "Background",
        heading: "A decade-long technical partnership",
        blocks: [
          {
            type: "p",
            text: "This NYC-based audio engineering firm collaborates with leading creative agencies and global brands. Over more than ten years, RSystems has partnered with the firm's internal technical team across an evolving set of infrastructure challenges — security protocols, network efficiency, infrastructure redundancy, and disaster recovery.",
          },
          {
            type: "p",
            text: "That partnership has expanded the firm's network capabilities, modernized server infrastructure, implemented application virtualization, designed a new studio facility, and built critical data redundancy and internet failover systems.",
          },
        ],
      },
      {
        label: "The Challenge",
        heading: "The pandemic exposed the limits of on-premises storage",
        blocks: [
          {
            type: "p",
            text: "Prior to 2020, the firm relied on physical servers to manage substantial amounts of shared data. RSystems had already deployed Synology NAS technology with redundant data across two studio locations via site-to-site VPN — solid infrastructure for in-office work.",
          },
          {
            type: "p",
            text: "Then the pandemic hit. Remote workers faced severe challenges transferring the large files at the core of audio production. What had been a resilient on-premises architecture became a bottleneck the moment people left the building.",
          },
          {
            type: "quote",
            text: "RSystems helped us understand hybrid cloud solutions — blob storage, deduplication, backup schemes. They had the expertise to implement it too.",
            attribution: "The firm's co-founder",
          },
        ],
      },
      {
        label: "The Solution",
        heading: "Hybrid storage and cloud-based identity",
        blocks: [
          {
            type: "p",
            text: "RSystems architected and deployed a hybrid storage environment combining Windows Server, Synology NAS, and Morro Data synchronization technology. The result: real-time file accessibility from any location, dependable backups, and a scalable foundation for future growth.",
          },
          {
            type: "p",
            text: "For remote workforce support, RSystems implemented JumpCloud — a cloud-based directory platform managing user and device authentication across the firm's entire environment.",
          },
          {
            type: "p",
            text: "Both systems operate under a shared administration model. The firm handles daily operations; RSystems provides oversight, manages integrations, and functions as a fractional CTO — bridging the gap between the firm's internal technical team and the strategic infrastructure decisions that require senior-level guidance.",
          },
        ],
      },
    ],
    results: [
      "Real-time file accessibility for remote workers across all studio locations",
      "Unified cloud-based identity and device management via JumpCloud",
      "Ongoing fractional CTO engagement — infrastructure strategy aligned with business objectives",
      "Strengthened client confidence in security posture and equipment reliability",
      "\"Staying a few years ahead of best practices\" — the firm's co-founder",
    ],
  },

  {
    slug: "little-island",
    title: "Little Island — Built from the Waterline Up",
    subtitle:
      "From a startup office in Chelsea to opening-day infrastructure for 1.7 million visitors",
    client: "Little Island",
    industry: "Parks & Public Space",
    tags: ["Networking", "Cloud & Infrastructure", "Identity"],
    summary:
      "Ground-up IT infrastructure for NYC's most ambitious new public park — network architecture, identity, Dante audio, Genetec, emergency systems, and 1.7M visitors in year one.",
    featuredImage: {
      src: "https://www.macktez.com/wp-content/uploads/2021/09/image3.jpg",
      alt: "Little Island park, Hudson River, New York City",
    },
    seoTitle: "Little Island — Built from the Waterline Up | RSystems NYC",
    seoDescription:
      "RSystems designed and deployed the full IT infrastructure for Little Island — ground-up network architecture, identity, emergency systems, and deep systems integration across a $260M+ public park build, delivered on time for 1.7 million visitors.",
    canonicalPath: "/case-studies/little-island",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Little Island — Built from the Waterline Up",
      "description":
        "RSystems designed and deployed the full IT infrastructure for Little Island, including ground-up network architecture, JumpCloud identity, Genetec access control, Dante audio networking, and emergency systems coordination with FDNY, NYPD, and the Hudson River Park Trust.",
      "author": {
        "@type": "Organization",
        "name": "RSystems NYC",
        "url": "https://rsystems.nyc",
      },
      "publisher": {
        "@type": "Organization",
        "name": "RSystems NYC",
        "url": "https://rsystems.nyc",
      },
      "about": { "@type": "Organization", "name": "Little Island" },
      "keywords":
        "Little Island, network infrastructure, JumpCloud, Genetec, Dante audio, parks technology, NYC, emergency communications",
    },
    sections: [
      {
        label: "How It Started",
        heading: "A modest engagement at the edge of Manhattan",
        blocks: [
          {
            type: "p",
            text: "Little Island was one of New York's most anticipated civic projects — a $260M+ gift from Barry Diller and Diane von Furstenberg to the city, constructed on 132 concrete tulip-shaped piers off the Hudson shore in Chelsea. When the organization behind the park needed basic office support — subscription cleanup, workstation recommendations, occasional help desk — RSystems showed up. What followed was two years of deep technical involvement in one of the most complex ground-up IT builds in the city.",
          },
          {
            type: "p",
            text: "RSystems was engaged to set up a small office for the park's startup team near the construction site. A few questions about connecting that office across West Side Highway to the park led to a request to review the WiFi specification the general contractor had provided. That review surfaced something significant: the underlying network had not been designed.",
          },
        ],
      },
      {
        label: "The Advisory Role",
        heading: "Working inside a $260M design/build",
        blocks: [
          {
            type: "p",
            text: "By 2019, RSystems was embedded as the technical advisor to the full project team — working alongside general contractor Hunter Roberts, Standard Architects, and IAC executive Jason Stewart, who served as Barry Diller's personal representative and project executive throughout the build.",
          },
          {
            type: "p",
            text: "Arup, the engineering firm that had developed the initial IT plans, had since departed the project. Their work included solid WiFi coverage planning but left critical gaps: no network topology, no specified switching equipment, no environmental hardening for an outdoor marine installation, and — critically — no power redundancy. For a public space of this profile, that last omission wasn't a design preference. It was a public safety deficiency.",
          },
          {
            type: "p",
            text: "RSystems reviewed the full architectural and engineering plan set, identified every system with a network dependency, and rebuilt the IT infrastructure design from scratch. That review extended well beyond networking: fire alarm integration, security camera alignment, conduit routing for future cable pulls, and close coordination with MEP contractors on power and environmental controls. When problems were found — a fire alarm system that wasn't connected to the network, security cameras that weren't aligned correctly — RSystems escalated them, even when scope disputes made that uncomfortable.",
          },
          {
            type: "quote",
            text: "He identified the problems and the solutions.",
            attribution: "Jason Stewart, Project Executive, Little Island",
          },
          {
            type: "p",
            text: "Park Operations Manager Kathryn Lewis, who oversaw the park's technical operational readiness for opening, described the dependency simply: \"It turns out the internet is connected to everything.\"",
          },
          {
            type: "img",
            src: "https://www.macktez.com/wp-content/uploads/2021/09/image5.jpg",
            alt: "Network installation in progress at Little Island",
          },
        ],
      },
      {
        label: "What Was Connected",
        heading: "Every operational system ran through the network",
        blocks: [
          {
            type: "p",
            text: "Little Island is not a typical office. It operates 365 days a year with 24/7 staffing, two indoor/outdoor performance venues, public programming, food and beverage operations, and large-scale events. Nearly every operational system on the site had a network dependency — and RSystems was responsible for making sure each one worked.",
          },
          {
            type: "ul",
            items: [
              "Building management and MEP systems — environmental monitoring and controls across the site",
              "Theatrical lighting and production audio — including Dante-based audio networking across both performance venues",
              "Genetec — access control and IP camera infrastructure for the entire park",
              "Digital signage — public-facing displays and wayfinding",
              "Ticketing and point-of-sale — for events, programming, and food and beverage operations",
              "Radios and two-way communications — for operations and emergency coordination",
              "Irrigation controls — for the park's extensive horticultural systems",
              "Financial and HR platforms — integrated through the identity layer",
            ],
          },
          {
            type: "p",
            text: "Every system was tied together through a unified identity infrastructure via JumpCloud, providing centralized access control, auditing, and single sign-on across dozens of SAML and OIDC-integrated applications.",
          },
        ],
      },
      {
        label: "Emergency Systems",
        heading: "Designed for the worst day",
        blocks: [
          {
            type: "p",
            text: "For a public space on the Hudson River with large venue capacity, emergency infrastructure wasn't an afterthought — it was a design constraint baked in from the start. RSystems coordinated directly with FDNY, NYPD, and the Hudson River Park Trust to align Little Island's emergency communications infrastructure with external response procedures.",
          },
          {
            type: "p",
            text: "Working with the park's electrical team, RSystems identified excess conduit already installed in the site and designed a redundant power architecture with substantial battery backup capacity — enough to sustain emergency communications through a complete commercial power failure. Every aspect of the outdoor installation was engineered for the specific demands of a waterfront public space: waterproofing, temperature extremes, humidity, and marine exposure.",
          },
          {
            type: "p",
            text: "Getting connectivity to the site was its own challenge. After a year-long effort to secure Verizon service came up empty, RSystems leveraged a longstanding relationship with Pilot Fiber to arrange dedicated internet service for the park — a custom arrangement that required direct relationship capital and would not have been available through a standard procurement process.",
          },
          {
            type: "img",
            src: "https://www.macktez.com/wp-content/uploads/2021/09/image4.jpg",
            alt: "Equipment installation detail at Little Island",
          },
        ],
      },
      {
        label: "Identity & Access",
        heading: "From 7 employees to 200+ in under a year",
        blocks: [
          {
            type: "p",
            text: "When RSystems first engaged with Little Island, the organization had fewer than ten people. By opening day, the park had grown to more than 200 employees and contractors spanning operations, programming, food and beverage, and technical roles — all of whom needed to be onboarded, credentialed, and managed at scale.",
          },
          {
            type: "p",
            text: "RSystems designed the identity infrastructure to absorb that growth. JumpCloud was deployed as the organizational directory — a single source of truth for every employee, with integrations to every business application and secure onboarding and offboarding for a team growing faster than most organizations can manage. Nearly 100 portable workstations were deployed with remote onboarding capability, so new hires could be brought online without hands-on setup, regardless of where they started.",
          },
        ],
      },
    ],
    results: [
      "10G fully redundant network with 40G backbone — live for opening day, May 21, 2021",
      "Cisco Catalyst 9000 Series switching for wireless systems throughout the venue",
      "Cisco Industrial Ethernet Series for exposed outdoor and marine-environment locations",
      "JumpCloud identity infrastructure — SAML and OIDC integrations across dozens of applications",
      "Genetec access control and IP camera system",
      "Dante audio networking for two performance venues",
      "Emergency power architecture coordinated with FDNY, NYPD, and Hudson River Park Trust",
      "Pilot Fiber dedicated connectivity — negotiated custom arrangement",
      "~100 workstations deployed with secure remote onboarding",
      "Full systems integration: BMS, MEP, theatrical, signage, ticketing, POS, irrigation, radios, financial, and HR",
      "1.7M+ visitors in the park's first year",
    ],
  },

  {
    slug: "makerbot-overhaul",
    title: "Untangling the Spaghetti Monster",
    subtitle:
      "A ground-up infrastructure overhaul for a leader in industrial 3D printing — embedded for months, rebuilt over a single holiday",
    client: "MakerBot",
    industry: "Manufacturing & Technology",
    tags: ["Networking", "Cloud & Infrastructure"],
    summary:
      "Months embedded inside MakerBot learning their infrastructure before overhauling it over a single holiday closure — 40 VMs rebuilt, 400% throughput increase, complete redundancy, and offsite backup replication, all executed without disrupting production operations.",
    seoTitle: "Untangling the Spaghetti Monster — Infrastructure Overhaul | RSystems NYC",
    seoDescription:
      "How RSystems spent months embedded inside MakerBot learning their infrastructure before overhauling it over a single holiday closure — 40 VMs rebuilt, 400% throughput increase, complete redundancy, and offsite backup replication, all executed without disrupting production operations.",
    canonicalPath: "/case-studies/makerbot-overhaul",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline":
        "Untangling the Spaghetti Monster — A Ground-Up Infrastructure Overhaul for MakerBot",
      "description":
        "How RSystems spent months embedded inside MakerBot learning their infrastructure before overhauling it over a single holiday closure — 40 VMs rebuilt, 400% throughput increase, complete redundancy, and offsite backup replication.",
      "url": "https://rsystems.nyc/case-studies/makerbot-overhaul",
      "author": {
        "@type": "Organization",
        "name": "RSystems NYC",
        "url": "https://rsystems.nyc",
      },
      "publisher": {
        "@type": "Organization",
        "name": "RSystems NYC",
        "url": "https://rsystems.nyc",
        "areaServed": { "@type": "City", "name": "New York City" },
      },
    },
    featuredImage: {
      src: "/assets/mkb.jpeg",
      alt: "Server room after infrastructure overhaul",
    },
    featuredImagePair: {
      before: {
        src: "/assets/manufacturing-before.jpg",
        alt: "MakerBot server room before infrastructure overhaul",
      },
      after: {
        src: "/assets/manufacturing-after.jpg",
        alt: "MakerBot server room after infrastructure overhaul",
      },
    },
    sections: [
      {
        label: "At a Glance",
        blocks: [
          {
            type: "specs",
            groups: [
              {
                title: "",
                items: [
                  [
                    "Client",
                    "MakerBot — a leader in industrial 3D printing and additive manufacturing",
                  ],
                  [
                    "Problem",
                    "A production environment running 40 virtual machines across a dozen departments — on undocumented infrastructure that nobody fully understood — that had grown too complex and too critical to fix without first spending months learning exactly how it worked.",
                  ],
                  [
                    "Services",
                    "Infrastructure assessment and full documentation · embedded on-site consulting · VMware and storage architecture · server procurement and build · network remediation · backup strategy with offsite replication · cable management · vendor coordination (VMware, Dell, Cisco, APC)",
                  ],
                  [
                    "Platforms",
                    "VMware ESXi · Cisco Catalyst switching · APC Symmetra UPS · Dell server hardware · shared SAN storage",
                  ],
                  [
                    "Outcome",
                    "400% throughput increase. Complete system redundancy. Offsite backup replication. New servers built from the ground up. A fully documented environment — and a server room no one is ashamed of anymore.",
                  ],
                ],
              },
            ],
          },
        ],
      },
      {
        label: "The Discovery",
        heading: "A spaghetti monster in the server room",
        blocks: [
          {
            type: "p",
            text: "The COO was at a holiday party when the network went down. An IT staff member reached him and suggested he come take a look at the server room. He had never been in it before.",
          },
          {
            type: "p",
            text: "What he found was a wall of tangled cables, unlabeled patch panels, and equipment arranged in no particular order. A spaghetti monster. He had always trusted that the infrastructure was broadly under control. Standing in that room, he understood that it wasn't — and that it hadn't been for some time.",
          },
          {
            type: "p",
            text: "The network issues that had been blamed on the ISP for years were not ISP issues. VLAN assignments were undocumented. Ports in the patch panels weren't connected to anything. 10G interfaces capable of driving the throughput the business needed sat running at a fraction of their capacity. There was no system redundancy. Any hardware failure would take down services across the company with no clear path to recovery.",
          },
          {
            type: "p",
            text: "He called us.",
          },
          {
            type: "quote",
            text: "Ports in the patch panels weren't connected to the network. Troubleshooting required extensive guesswork about network configurations.",
            attribution: "Senior IT Support Engineer",
          },
        ],
      },
      {
        label: "The Scope",
        heading: "Forty virtual machines and no map",
        blocks: [
          {
            type: "p",
            text: "The scale of the environment was significant — and the absence of documentation made it more daunting than it needed to be.",
          },
          {
            type: "p",
            text: "The infrastructure ran multiple VMware ESXi hosts with shared SAN storage, supporting 40 virtual machines that spanned every function in the business: mechanical engineering, electrical engineering, software development, materials science, marketing, sales, customer support, finance, and legal. The network ran on Cisco Catalyst switches. Power was backed by APC Symmetra UPS units — but with no redundancy designed into the system, a UPS failure was a production failure.",
          },
          {
            type: "p",
            text: "Every department depended on this environment. None of them knew how it actually worked. Neither, in a meaningful sense, did anyone else — because it had never been properly documented.",
          },
          {
            type: "p",
            text: "Before we could fix it, we had to learn it.",
          },
        ],
      },
      {
        label: "The Approach",
        heading: "Embedded for months before touching a thing",
        blocks: [
          {
            type: "p",
            text: "We didn't begin by making changes. We began by becoming the people who understood the environment better than anyone else.",
          },
          {
            type: "p",
            text: "For months, we worked embedded within their team — on-site, inside the business, alongside their IT staff. We traced every cable. We documented every virtual machine, every VLAN, every storage volume, every dependency. We talked to the vendors: VMware, Dell, Cisco, APC — working through configurations and capabilities with the people who built the systems, making sure our understanding was correct before we committed it to paper.",
          },
          {
            type: "p",
            text: "By the time we were done with the assessment, we were the authoritative experts on their infrastructure. We knew it better than it had ever been known. And with that foundation, we could plan a complete overhaul — not one that required guesswork, but one that was designed down to the individual cable run.",
          },
        ],
      },
      {
        label: "The Execution",
        heading: "Taking Humpty Dumpty apart over Christmas",
        blocks: [
          {
            type: "p",
            text: "The execution window was the Christmas holiday closure. With the entire company away, we had a clear runway to do the work without disruption to production operations.",
          },
          {
            type: "p",
            text: "We took the environment completely apart and rebuilt it from scratch.",
          },
          {
            type: "p",
            text: "New servers, procured and configured to spec. The virtual machine estate rebuilt on a properly architected VMware foundation with redundancy designed in from the start. Storage arrays reconfigured. A new backup strategy implemented — with offsite replication to a nearby datacenter, so that a failure on-site was no longer also a data loss event. Network remediation throughout: VLAN assignments rationalized, documented, and consistent. Cisco Catalyst switching properly configured to actually use the 10G capacity the hardware had always been capable of.",
          },
          {
            type: "p",
            text: "And the cables — every run organized, dressed with braided sleeves and velcro, labeled, and traced. Not for aesthetics, but because an environment you can read is an environment you can troubleshoot, and an environment you can troubleshoot is one that never has to be a mystery again.",
          },
          {
            type: "img",
            src: "/assets/mkb.jpeg",
            alt: "MakerBot server room after infrastructure overhaul",
          },
        ],
      },
    ],
    results: [
      "400% throughput increase — immediate, on the first morning back after the holiday",
      "Full utilization of 10G switching that had been running at a fraction of its capacity for years",
      "Complete system redundancy — no single points of failure across compute, storage, or power",
      "Offsite backup replication to a nearby datacenter — a site failure is no longer a data loss event",
      "New server hardware, built and configured from the ground up",
      "40 virtual machines rebuilt on a properly architected VMware foundation",
      "Consistent, documented VLAN assignments throughout the environment",
      "Full infrastructure documentation — for the first time in the company's history",
      "A cable plant anyone on the team can read and trace",
      "\"Now set up for the future, and no longer ashamed to show people the server room.\" — COO",
      "\"The immediate thing I noticed was I was a hell of a lot less anxious in there.\" — Senior IT Support Engineer",
    ],
  },

  {
    slug: "directory-modernization",
    title: "Directory Modernization",
    subtitle:
      "Scalable identity infrastructure for a growing multinational",
    client: "A multinational organization",
    industry: "Enterprise",
    tags: ["Identity", "Cloud & Infrastructure"],
    summary:
      "Identity infrastructure modernization for a 150-person multinational expanding toward 250+ staff — JumpCloud deployment unifying Google, cloud applications, and workstations, with ongoing AWS integration support and security audits over four years.",
    featuredImage: {
      src: "https://macktez.com/wp-content/uploads/2024/02/undraw_Software_engineer_re_tnjc-1-576x368.png",
      alt: "Directory modernization illustration",
    },
    sections: [
      {
        label: "The Challenge",
        heading: "Identity sprawl ahead of a major expansion",
        blocks: [
          {
            type: "p",
            text: "A multinational organization with 150 employees had operated without proper directory management or a unified identity solution. During the startup phase, the informality was manageable. With a planned expansion to 250+ staff, it had become untenable.",
          },
          {
            type: "p",
            text: "Fragmented user profiles across Google and multiple platforms created inefficiencies in onboarding, security gaps during offboarding, and complicated procedures for granting or revoking application access. Each new hire and each departure meant manual work across disconnected systems.",
          },
        ],
      },
      {
        label: "The Solution",
        heading: "JumpCloud as the organizational identity layer",
        blocks: [
          {
            type: "p",
            text: "RSystems recommended JumpCloud as the central identity provider — a cloud-based platform capable of unifying the organization's Google environment, cloud applications, and physical workstations under a single directory.",
          },
          {
            type: "ul",
            items: [
              "JumpCloud deployed as identity provider with Google username imports",
              "Multi-factor authentication mandated across all access points",
              "Cloud applications integrated: Slack, Zoom, Jira, Confluence, Trello, Personio, and Microsoft",
              "Workstations bound to JumpCloud with synchronized local credentials",
            ],
          },
          {
            type: "p",
            text: "Implementation required sanitizing existing Google user data and standardizing usernames across platforms. Cloud service federation rolled out in phases with user guidance. Workstation binding received individualized attention to preserve existing home directories and user preferences — a detail that matters when you're asking 150 people to change how they log in.",
          },
        ],
      },
    ],
    results: [
      "Within 18 months, the organization grew from 250 staff to over 1,000 — and the infrastructure scaled without missing a beat",
      "Single directory managing Google, cloud applications, and workstations",
      "MFA enforced across all JumpCloud access points",
      "Ongoing AWS integration support and security audits over four years post-implementation",
      "Onboarding and offboarding reduced from multi-system manual process to single-platform workflow",
    ],
  },

  {
    slug: "charity-water-gala",
    title: "The Night $4.6 Million Moved Over Wi-Fi",
    subtitle:
      "Event network infrastructure for the charity:water Gala at the Metropolitan Museum of Art",
    client: "charity:water",
    industry: "Events & Culture",
    tags: ["Networking"],
    summary:
      "Event network for the charity:water Gala at the Metropolitan Museum of Art — Ruckus high-density wireless, FortiGate firewall, and on-site radio coordination supporting 500 devices across two spaces. $4.59 million raised in a single evening; zero network issues.",
    seoTitle: "The Night $4.6 Million Moved Over Wi-Fi | RSystems NYC",
    seoDescription:
      "How RSystems engineered the event network for the charity:water Gala at the Metropolitan Museum of Art — Ruckus high-density wireless, FortiGate firewall, and on-site radio coordination supporting 500 devices and $4.59 million raised in a single evening.",
    canonicalPath: "/case-studies/charity-water-gala",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline":
        "The Night $4.6 Million Moved Over Wi-Fi — Event Network for the charity:water Gala at the Metropolitan Museum of Art",
      "description":
        "How RSystems engineered the event network for the charity:water Gala at the Metropolitan Museum of Art — Ruckus high-density wireless, FortiGate firewall, and on-site radio coordination supporting 500 devices and $4.59 million raised in a single evening.",
      "url": "https://rsystems.nyc/case-studies/charity-water-gala",
      "author": {
        "@type": "Organization",
        "name": "RSystems NYC",
        "url": "https://rsystems.nyc",
      },
      "publisher": {
        "@type": "Organization",
        "name": "RSystems NYC",
        "url": "https://rsystems.nyc",
        "areaServed": { "@type": "City", "name": "New York City" },
      },
      "about": {
        "@type": "Event",
        "name": "charity:water Gala",
        "organizer": { "@type": "Organization", "name": "charity:water" },
        "location": {
          "@type": "Place",
          "name": "The Metropolitan Museum of Art, Temple of Dendur",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "New York City",
            "addressRegion": "NY",
            "addressCountry": "US",
          },
        },
      },
    },
    featuredImage: {
      src: "/assets/charity_water_ball.jpg",
      alt: "The charity:water Gala at the Metropolitan Museum of Art",
    },
    sections: [
      {
        label: "At a Glance",
        blocks: [
          {
            type: "specs",
            groups: [
              {
                title: "",
                items: [
                  [
                    "Client",
                    "charity:water — a nonprofit bringing clean water to communities in developing countries",
                  ],
                  [
                    "Venue",
                    "The Metropolitan Museum of Art, Temple of Dendur in the Sackler Wing, New York City",
                  ],
                  [
                    "Problem",
                    "Support hundreds of simultaneous high-stakes devices — guest iPads used for donations and real-time projection systems — through a dense urban RF environment, during a single high-pressure evening where wireless failure meant fundraising failure.",
                  ],
                  [
                    "Services",
                    "RF environment assessment · equipment specification and procurement · on-premises wireless controller deployment · firewall and traffic management · event production coordination · on-site network operations",
                  ],
                  [
                    "Platforms",
                    "Ruckus wireless APs and ZoneDirector controller · FortiGate firewall · Metropolitan Museum fiber WAN uplink",
                  ],
                  [
                    "Outcome",
                    "500-device-capacity network, zero issues on the night. 400 guests raised $4.59 million for clean water in Cambodia and Ethiopia — the network was invisible, as intended.",
                  ],
                ],
              },
            ],
          },
        ],
      },
      {
        label: "The Event",
        heading: "A fundraising gala where the network was the mechanism",
        blocks: [
          {
            type: "p",
            text: "Inside the Metropolitan Museum of Art, in the glass-ceilinged Sackler Wing, sits the Temple of Dendur — a 2,000-year-old Egyptian temple surrounded by a reflecting pool, framing the New York night sky above. It is one of the most extraordinary rooms available for an event in the world.",
          },
          {
            type: "p",
            text: "charity:water chose it as the backdrop for their annual black-tie gala: 400 guests, Christie's auctioneers on stage, real-time donation totals projected onto the museum walls, the room ringed with neon-yellow jerry cans — charity:water's signature symbol of the water crisis. An iPad sat at every table, loaded with a personal story about a specific family in Ethiopia, waiting to unlock at the right moment in the program.",
          },
          {
            type: "p",
            text: "At the center of all of it was a wireless network. The iPads guests used to make donations. The live-projection system tracking cumulative giving in real time. The simultaneous unlock that asked every table to give at once. Every one of those systems needed reliable, high-capacity wireless to function — and in a room where an iPad freezing mid-program would have interrupted a fundraising mechanism raising millions in minutes, \"probably fine\" was not an acceptable standard.",
          },
          {
            type: "p",
            text: "The evening raised $4.59 million — enough to bring clean water to 153,000 people.",
          },
          {
            type: "img",
            src: "/assets/charity_water_ball_ipads.jpg",
            alt: "Guests using iPads to donate at the charity:water Gala, Metropolitan Museum of Art",
            caption: "Photo: Adam Mason Photography",
          },
        ],
      },
      {
        label: "The Challenge",
        heading: "Dense city, dense room, no margin for error",
        blocks: [
          {
            type: "p",
            text: "Event wireless in New York City is harder than event wireless almost anywhere else. The RF environment is saturated — neighboring networks, adjacent events, and the interference profile of a dense urban building all compete for the same spectrum. Add several hundred devices associating simultaneously in a single space, with traffic that spikes sharply at specific program moments, and the failure modes become very specific and very predictable. A network sized for average load falls over at peak. Access points that work during setup behave differently when the room fills. Traffic that looks fine during testing looks completely different when five hundred devices are contending at once.",
          },
          {
            type: "p",
            text: "Planning for those moments — not average conditions — was the whole exercise.",
          },
        ],
      },
      {
        label: "The Approach",
        heading: "Spec for the spike, test before the night",
        blocks: [
          {
            type: "p",
            text: "The first step was traffic modeling: estimating the number of concurrent devices, the traffic profile at peak moments in the program, and the density requirements for the two primary spaces — the Temple of Dendur and the Great Hall. With that baseline, we specified equipment sized for the peak, not the average, with a spare access point on standby.",
          },
          {
            type: "p",
            text: "The wireless layer was built on top-of-the-line Ruckus access points, chosen specifically for their performance in high-density environments, managed by an on-premises Ruckus controller. Running a local controller rather than relying on cloud management meant the network had no external dependencies during the event — no cloud path, no external service that could go wrong at the wrong moment. A FortiGate firewall sat at the perimeter, handling traffic shaping and security. The WAN uplink ran over fiber from the Metropolitan Museum's own network infrastructure — a clean, high-capacity connection already in place at the venue.",
          },
          {
            type: "p",
            text: "Two access points covered the Temple of Dendur. Two covered the Great Hall. The fifth was on the shelf, ready to swap in if anything failed. Everything was tested before the guests arrived. By the time doors opened, every failure mode we could anticipate had already been found and resolved.",
          },
        ],
      },
      {
        label: "On the Night",
        heading: "Radios on, ready for anything",
        blocks: [
          {
            type: "p",
            text: "For the duration of the event, one team member was on-site and on radio with the event production team — aware of every moment in the schedule that would drive a traffic spike, coordinating in real time with the people running the program. A second team member was standing by off-site in case of emergency.",
          },
          {
            type: "p",
            text: "Nothing required them. The issues had been found during testing, not during the gala. The network ran the evening without intervention, absorbed the spikes, and stayed invisible — which is exactly what a good event network is supposed to do.",
          },
        ],
      },
      {
        label: "The Partnership",
        heading: "Equipment donated as an in-kind contribution",
        blocks: [
          {
            type: "p",
            text: "RSystems loaned the full equipment stack — FortiGate firewall, Ruckus wireless controller, access points, and switching — to charity:water at no cost, as an in-kind donation valued at over $11,000. The professional fees covered the design, coordination, installation, and on-site operations. The hardware was our contribution to the mission.",
          },
          {
            type: "p",
            text: "The work we do at events like this — making sure a wireless network behaves for a few hours inside a museum — is in direct service of something much larger. The funds raised that evening will bring clean water to communities in Cambodia and Ethiopia for generations. We were glad to play a small part in making that night work.",
          },
        ],
      },
    ],
    results: [
      "500-device-capacity wireless network across two spaces in one of the most RF-dense cities in the world",
      "Enterprise-grade Ruckus access points and on-premises controller — no cloud dependencies during the event",
      "FortiGate firewall with traffic shaping at the perimeter",
      "Fiber WAN uplink via the Metropolitan Museum's own infrastructure",
      "Full traffic modeling and peak-load planning before equipment was specified",
      "On-site network operations and radio coordination with event production throughout the evening",
      "Zero issues on the night — all failure modes resolved during pre-event testing",
      "Full equipment stack donated as an in-kind contribution at no cost to charity:water",
    ],
  },

  {
    slug: "windows-tools-for-a-mac-design-firm",
    title: "A GPU in Azure, a Mac on Every Desk",
    subtitle:
      "GPU-accelerated cloud desktops for Bluebeam and Revit, without a single Windows machine on premises",
    client: "Architecture and design professional corporation, Mac-first, distributed workforce",
    industry: "Architecture & Design",
    tags: ["Cloud & Infrastructure", "Microsoft"],
    summary:
      "GPU-accelerated Azure Virtual Desktop for a Mac-only architecture firm — Bluebeam Revu and Autodesk Revit at full resolution and full speed, with Entra ID-native identity, Terraform IaC, and no Windows hardware on premises.",
    seoTitle: "A GPU in Azure, a Mac on Every Desk | RSystems NYC",
    seoDescription:
      "How RSystems deployed GPU-accelerated Azure Virtual Desktop for a Mac-only architecture firm — enabling Bluebeam and Revit over H.264/AVC hardware-encoded RDP, with Entra ID-native identity and full Terraform IaC, serving 20+ users with no Windows hardware on premises.",
    canonicalPath: "/case-studies/windows-tools-for-a-mac-design-firm",
    featuredImage: {
      src: "/assets/MN_image.png",
      alt: "Mac workstation with Azure Virtual Desktop open in window",
    },
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline":
        "A GPU in Azure, a Mac on Every Desk — GPU-Accelerated Azure Virtual Desktop for Bluebeam and Revit",
      "description":
        "How RSystems deployed GPU-accelerated Azure Virtual Desktop for a Mac-only architecture firm — enabling Bluebeam and Revit over H.264/AVC hardware-encoded RDP, with Entra ID-native identity and full Terraform IaC, serving 20+ users with no Windows hardware on premises.",
      "url": "https://rsystems.nyc/case-studies/windows-tools-for-a-mac-design-firm",
      "author": {
        "@type": "Organization",
        "name": "RSystems NYC",
        "url": "https://rsystems.nyc",
      },
      "publisher": {
        "@type": "Organization",
        "name": "RSystems NYC",
        "url": "https://rsystems.nyc",
        "areaServed": { "@type": "City", "name": "New York City" },
      },
      "about": {
        "@type": "Service",
        "name": "Azure Virtual Desktop Deployment",
        "provider": {
          "@type": "Organization",
          "name": "RSystems NYC",
          "url": "https://rsystems.nyc",
        },
      },
    },
    sections: [
      {
        label: "At a Glance",
        blocks: [
          {
            type: "specs",
            groups: [
              {
                title: "",
                items: [
                  [
                    "Client",
                    "Architecture and design professional corporation, Mac-first, distributed workforce",
                  ],
                  [
                    "Problem",
                    "A design practice running entirely on Macs that depends on Windows-only CAD and BIM tools — Bluebeam Revu and Autodesk Revit — with no Windows hardware and no appetite to buy or manage it.",
                  ],
                  [
                    "Services",
                    "Azure Virtual Desktop design and deployment · GPU VM selection and configuration · RDP codec optimization for hardware-accelerated remote graphics · Entra ID-native identity and RBAC · infrastructure as code (Terraform) · user training and documentation · ongoing platform management",
                  ],
                  [
                    "Platforms",
                    "Azure Virtual Desktop · Azure GPU VMs · Microsoft Entra ID · Terraform · Bluebeam Revu · Autodesk Revit",
                  ],
                  [
                    "Outcome",
                    "A production environment serving 20+ users across a distributed team, with up to five concurrent sessions running Bluebeam and Revit at full resolution and full speed — no Windows hardware, no VPN, no on-premises footprint.",
                  ],
                ],
              },
            ],
          },
        ],
      },
      {
        label: "The Brief",
        heading: "Immersive design tools on a Mac-only team",
        blocks: [
          {
            type: "p",
            text: "MN Design Professional Corporation runs on Macs. That's a deliberate choice — the hardware is excellent, the workflow fits — but it creates a hard wall when the practice's most important software doesn't run on macOS. Bluebeam Revu and Autodesk Revit are Windows-only. The firm needed both, reliably, across a distributed team that had no Windows machines and no plans to acquire any.",
          },
          {
            type: "p",
            text: "The ask was straightforward: give Mac users access to Windows CAD tools. The engineering to make that work well — especially at the resolution and performance these applications demand — was more involved.",
          },
        ],
      },
      {
        label: "The Challenge",
        heading: "The wrong answer is just a VM",
        blocks: [
          {
            type: "p",
            text: "Cloud desktops for CAD workflows aren't a standard compute problem. Bluebeam and Revit are GPU-accelerated applications. They render large drawings, navigate complex 3D models, and push significant pixel counts. A general-purpose cloud VM — the kind optimized for CPU and memory — will run these applications, but slowly and at degraded quality. Users notice immediately when a remote session feels like a remote session, and that experience gap is usually the reason a VDI deployment fails.",
          },
          {
            type: "p",
            text: "The right answer was a GPU-equipped virtual machine, sized specifically for visualization workloads with dedicated GPU memory. But specifying the right hardware is only half the problem. The other half is getting the GPU's output to the user over a Remote Desktop connection at full fidelity.",
          },
        ],
      },
      {
        label: "The Solution",
        heading: "Making the GPU work over RDP",
        blocks: [
          {
            type: "p",
            text: "By default, Remote Desktop Protocol renders the display on the CPU and streams a compressed result. Even on a GPU-equipped VM, standard RDP configuration doesn't use the GPU for session rendering — to actually leverage the hardware, you have to explicitly configure the RDP stack to use it.",
          },
          {
            type: "p",
            text: "This meant enabling hardware-accelerated video encoding in the host pool's RDP properties and configuring the session to use H.264/AVC encoding with the GPU encoder engaged. Once in place, the session host used the GPU not just to run the application but to encode the display stream — producing a sharper, higher-framerate result with significantly less network overhead than a CPU-encoded session. For CAD work, the difference is tangible: panning a Revit model or marking up a large PDF in Bluebeam became smooth rather than stuttered. Users on Mac clients, connecting through the Windows App, were getting a GPU-rendered Windows desktop at full quality.",
          },
          {
            type: "p",
            text: "The host pool was also configured for Entra ID SSO directly in the RDP properties, so users authenticate once and land in the desktop without a second credential prompt.",
          },
        ],
      },
      {
        label: "The Build",
        heading: "Built as code",
        blocks: [
          {
            type: "p",
            text: "The entire environment was deployed from a Terraform codebase, with remote state managed in Terraform Cloud. The hub network, subnets, security groups, session hosts, RBAC assignments, backup configuration, and AVD host pool are all in source control and reproducible from scratch — nothing was clicked together in the Azure portal.",
          },
          {
            type: "p",
            text: "The network is segmented across five subnets including a fully isolated zone with outbound internet access blocked at the security group level. Infrastructure access is whitelisted to known IPs only. Session hosts are placed on the private subnet, configured automatically on first boot, and registered to the host pool without manual intervention. VM backups run on a regular schedule with both daily and weekly retention.",
          },
          {
            type: "p",
            text: "Everything is tagged Managed-By: Terraform. Changes go through the codebase, not the console.",
          },
        ],
      },
      {
        label: "Identity & Access",
        heading: "Entra ID-native, no domain required",
        blocks: [
          {
            type: "p",
            text: "There are no domain controllers in this design. No hybrid join, no on-premises Active Directory dependency. Session hosts are joined directly to Entra ID, and access is managed through two security groups — one for users and one for administrators — with role-based access scoped appropriately to each.",
          },
          {
            type: "p",
            text: "Users connect from the Windows App on their Mac, authenticate via their Microsoft account, and land on a Windows 11 desktop. From the user's side: no domain, no VPN, no Windows hardware — just a fast Windows desktop in a window on their Mac.",
          },
        ],
      },
      {
        label: "In Production",
        heading: "From proof of concept to 20+ users",
        blocks: [
          {
            type: "p",
            text: "The deployment started as a deliberate minimum: a single GPU VM shared by a small group of users, running at pay-as-you-go rates while the firm evaluated whether cloud desktops could actually replace local Windows workstations for this kind of work. The goal was to validate the workflow before committing to it.",
          },
          {
            type: "p",
            text: "It validated. The combination of GPU-accelerated session encoding and a properly sized host pool delivered an experience the team found genuinely workable for daily use. The environment was expanded to support the full distributed team — now 20+ users, with the pool sized for up to five concurrent sessions and depth-first load balancing to keep resource usage efficient. Azure reservation pricing replaced pay-as-you-go rates, reducing VM costs substantially from the evaluation period.",
          },
          {
            type: "p",
            text: "The Terraform codebase made the expansion straightforward: adding session hosts is a variable change and a terraform apply, not a manual provisioning process.",
          },
        ],
      },
    ],
    results: [
      "Production environment for 20+ users across a distributed, Mac-only team",
      "GPU-accelerated Windows 11 cloud desktops running Bluebeam Revu and Revit at full resolution",
      "H.264/AVC hardware-encoded RDP — GPU used for both application rendering and display stream encoding",
      "Entra ID-native identity — no domain controller, no VPN, no Windows hardware on premises",
      "Full Terraform codebase with remote state — the entire environment in source control, reproducible from scratch",
      "Segmented network with isolated security zone and IP-whitelisted infrastructure access",
      "Automated backup and recovery configuration",
      "User and admin documentation; training for all users",
    ],
  },

  {
    slug: "fost-fest",
    title: "A Festival Campus, Fully Connected",
    subtitle: "Festival-grade network engineering for FoST Fest at Snug Harbor",
    client: "Future of Storytelling (FoST)",
    industry: "Events & Culture",
    tags: ["Networking"],
    summary:
      "A complete temporary event network for FoST Fest at Snug Harbor — spanning twelve landmarked buildings and a Great Lawn tent across an 83-acre campus, thousands of concurrent high-bandwidth VR/AR devices, self-healing redundant topology, and zero dead air across the full run.",
    seoTitle: "FoST Fest — Festival-Grade Event Network | RSystems NYC",
    seoDescription:
      "How RSystems engineered a temporary, resilient festival network for FoST Fest at Snug Harbor Cultural Center — FortiGate firewall, Cisco switching, Ruckus wireless, a 600-foot outdoor Ethernet relay to the Great Lawn tent, and a self-healing topology that absorbed live failures invisibly.",
    canonicalPath: "/case-studies/fost-fest",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "A Festival Campus, Fully Connected — Network Engineering for FoST Fest at Snug Harbor",
      "description":
        "A temporary multi-day festival network for FoST Fest at Snug Harbor Cultural Center — spanning a dozen landmarked buildings and open-field tents, thousands of concurrent VR/AR devices, and a self-healing redundant topology that absorbed live failures invisibly.",
      "url": "https://rsystems.nyc/case-studies/fost-fest",
      "author": {
        "@type": "Organization",
        "name": "RSystems NYC",
        "url": "https://rsystems.nyc",
      },
      "publisher": {
        "@type": "Organization",
        "name": "RSystems NYC",
        "url": "https://rsystems.nyc",
        "areaServed": { "@type": "City", "name": "New York City" },
      },
      "about": {
        "@type": "Event",
        "name": "FoST Fest",
        "organizer": { "@type": "Organization", "name": "Future of Storytelling" },
        "location": {
          "@type": "Place",
          "name": "Snug Harbor Cultural Center & Botanical Garden",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Staten Island",
            "addressRegion": "NY",
            "addressCountry": "US",
          },
        },
      },
    },
    featuredImage: {
      src: "/assets/Fost_2018_photo.jpg",
      alt: "FoST Fest 2018 at Snug Harbor Cultural Center",
    },
    sections: [
      {
        label: "At a Glance",
        blocks: [
          {
            type: "specs",
            groups: [
              {
                title: "",
                items: [
                  ["Client", "Future of Storytelling (FoST), an immersive media festival"],
                  ["Venue", "Snug Harbor Cultural Center & Botanical Garden, Staten Island — 83 acres"],
                  [
                    "Problem",
                    "Knit a dozen historic, landmarked buildings and open-field tents, spread across an 83-acre campus, into one resilient network capable of carrying thousands of high-bandwidth VR/AR devices, for a temporary, multi-day public event with zero tolerance for downtime.",
                  ],
                  [
                    "Services",
                    "Temporary event network design · fiber and structured cabling · outdoor wireless · wireless point-to-point backhaul · self-healing redundant topology · on-site NOC and production coordination",
                  ],
                  [
                    "Platforms",
                    "FortiGate firewall · Cisco switching · Ruckus wireless APs and controller · UniFi point-to-point · dedicated fiber WAN with cellular LTE failover",
                  ],
                  [
                    "Outcome",
                    "Thousands of concurrent high-data devices supported across the campus. Live link failures absorbed invisibly by the self-healing design. The festival ran without a hitch.",
                  ],
                ],
              },
            ],
          },
        ],
      },
      {
        label: "The Brief",
        heading: "Immersive storytelling on a campus that was never wired for it",
        bg: "bg-[#F4F2EF]",
        blocks: [
          {
            type: "p",
            text: "FoST Fest is the public face of the Future of Storytelling — a festival built around the newest VR, AR, AI, mixed-reality, haptics, and interactive-film work, with more than 100 exhibits and dozens of world and US premieres. After its New York debut, it moved to Snug Harbor on Staten Island: a sprawling cultural campus of nineteenth-century landmark buildings, gardens, and open lawns.",
          },
          {
            type: "p",
            text: "That setting is the entire problem. Immersive storytelling is bandwidth-hungry — headsets, sensors, live-streamed installations, and packed auditoriums — and it was scattered across a dozen buildings and tents that were never wired to talk to each other. Everything had to be temporary, everything had to come down cleanly afterward, and for the run of the festival it could not go down. A frozen headset or a dead access point in front of a thousand people isn't a support ticket; it's the show breaking.",
          },
          {
            type: "img",
            src: "/assets/fost_map.png",
            alt: "Map of Snug Harbor Cultural Center & Botanical Garden showing the 83-acre campus layout",
          },
          {
            type: "p",
            text: "Every building on that map needed a network drop. Every tent, every outdoor installation, every auditorium filling with people running bandwidth-hungry headsets. The topology below is what we built to cover it.",
          },
          {
            type: "img",
            src: "/assets/FoST_Network_Topology_generic.svg",
            alt: "FoST Fest campus network topology diagram showing all buildings, backhaul links, fiber runs, wireless point-to-point shots, and the Pelican case relay to the Great Lawn tent",
          },
        ],
      },
      {
        label: "The Build",
        heading: "Weeks in the basements and attics",
        blocks: [
          {
            type: "img",
            src: "/assets/FoST_Buildign_G_Cellar.JPG",
            alt: "Basement of Building G at Snug Harbor during the FoST Fest network installation",
            size: "small",
          },
          {
            type: "p",
            text: "The festival ran for days. The network took weeks.",
          },
          {
            type: "p",
            text: "Long before the first attendee arrived, we were in the basements and attics of the Snug Harbor buildings pulling fiber and Ethernet, setting switches and access points, and landing data drops at every installation across the campus. A dedicated fiber gigabit circuit was brought in as the clean uplink — no contention with house systems, no surprises — with a cellular LTE connection standing by as an automatic backup if the primary ever dropped. From a central MDF in the main building, fiber runs reached out to the outlying halls, and each major building was given its own PoE distribution switch and its own cluster of access points sized to what that space actually needed.",
          },
          {
            type: "p",
            text: "None of that placement was guesswork. Every exhibit had different data demands — some just needed Wi-Fi for a handful of headsets, others were pulling live high-bandwidth feeds — so the build was planned drop by drop, in close coordination with each installation and with event production. By show time everyone on the team carried a radio.",
          },
        ],
      },
      {
        label: "Field Engineering",
        heading: "Reaching the tent",
        blocks: [
          {
            type: "p",
            text: "The hardest single drop wasn't a building. It was the middle of a field.",
          },
          {
            type: "p",
            text: "The main stage and a cluster of demos lived under a large tent on the Great Lawn — hundreds of feet from the nearest building, across open grass, with no infrastructure of any kind. We reached it the way you reach anything that far over copper: in stages. A roughly 300-foot outdoor Ethernet run left the nearest building and terminated at a sealed Pelican case tucked into the brush at the edge of the lawn. Inside that case sat a PoE-powered switch acting as a midspan relay. From there, a second 300-foot run carried the link the rest of the way out to the tent.",
          },
          {
            type: "p",
            text: "Two hops, six hundred feet, one waterproof case in the bushes — and a fully live network node in the center of a field.",
          },
          {
            type: "img",
            src: "/assets/Fost_Pelican.JPG",
            alt: "Sealed Pelican case PoE relay deployed at the edge of the Great Lawn at Snug Harbor",
          },
        ],
      },
      {
        label: "The Architecture",
        heading: "Built to fail gracefully",
        blocks: [
          {
            type: "p",
            text: "A temporary outdoor network has a lot of ways to break. A buried run gets nicked, a media converter overheats in the sun, someone trips a cable behind a booth. The design assumed all of it.",
          },
          {
            type: "p",
            text: "The backbone was deliberately built with more than one path between key points. Spanning Tree Protocol ran across the switching fabric with the core pinned as the root bridge, so the topology had a single, predictable brain deciding which links were active and which were standing by. Where a building was reached by fiber, it was also reachable by a wireless point-to-point shot — directional antennas aimed building-to-building as a hot backup. The wired path was always preferred; if it dropped, the network reconverged onto the wireless link and traffic kept moving. The internet uplink had the same logic: fiber first, cellular LTE as the fallback.",
          },
          {
            type: "p",
            text: "That's the whole philosophy: hardwired first, wireless as the safety net, and a loop-aware fabric that's allowed to have multiple paths precisely so it can lose one and keep running. Redundancy that nobody in the audience would ever see working.",
          },
        ],
      },
      {
        label: "Under Load",
        heading: "The stress test",
        blocks: [
          {
            type: "p",
            text: "The moment every event network secretly dreads came in one of the auditoriums.",
          },
          {
            type: "p",
            text: "A speaker, mid-presentation, turned to a thousand people and said some version of \"okay, now everyone take out your phones and connect to the Wi-Fi.\" A thousand devices associating at once is, functionally, a friendly denial-of-service attack on your own wireless. One access point in the room hit its ceiling and seized. The others — same SSID, same controller, overlapping coverage — picked up the load and kept the room online. The talk continued. Nobody in the audience knew anything had happened.",
          },
          {
            type: "p",
            text: "That outcome wasn't luck. It came from over-provisioning the wireless with enterprise-grade access points, designing for overlapping coverage rather than minimum coverage, and running a local controller so the APs behaved as one coordinated system instead of a dozen islands fighting each other.",
          },
        ],
      },
      {
        label: "Equipment",
        heading: "The kit",
        blocks: [
          {
            type: "p",
            text: "Everything was enterprise-grade and everything lived in flight cases, built to be deployed fast, run hard for days, and strike clean:",
          },
          {
            type: "ul",
            items: [
              "Firewall — FortiGate at the perimeter, behind a dedicated fiber gigabit circuit with cellular LTE failover",
              "Switching — Cisco PoE switches at the core and in each building, running Spanning Tree with a pinned root bridge",
              "Wireless — Ruckus access points, indoor and outdoor, managed by a local Ruckus controller",
              "Backhaul — fiber between core buildings, with UniFi point-to-point antennas as wireless failover",
              "Field reach — a sealed Pelican-case PoE relay extending two 300-foot outdoor runs to the Great Lawn tent",
              "Power — protected, conditioned power throughout",
            ],
          },
        ],
      },
      {
        label: "Production",
        heading: "Production as one team",
        blocks: [
          {
            type: "p",
            text: "A festival network isn't really an IT project — it's a production department that happens to run on packets. The build only worked because it was planned alongside the people mounting the exhibits and the people running the show: which booth needed what, where the crowds would be, when the auditoriums would fill, who to raise on the radio when something needed to move.",
          },
          {
            type: "p",
            text: "It came down as cleanly as it went up. Across the run of the festival and thousands of devices, the network did the one thing a live event demands of it: it disappeared. No dead air.",
          },
          {
            type: "img",
            src: "/assets/Fost_Cocktail_Hour.png",
            alt: "FoST Fest cocktail hour at Snug Harbor Cultural Center",
          },
        ],
      },
    ],
    results: [
      "Thousands of concurrent high-data devices supported across an 83-acre campus",
      "Live link failures absorbed invisibly by the self-healing redundant topology",
      "Wireless controller coordination prevented auditorium overload from reaching the audience",
      "600-foot outdoor Ethernet relay reached the Great Lawn tent with a single sealed Pelican case midspan",
      "Network struck cleanly after the festival — no permanent infrastructure, no trace",
      "The festival ran without a hitch",
    ],
  },

  {
    slug: "duality-group",
    title: "Built for Scale",
    subtitle:
      "Redesigning a cloud environment for a quantitative trading firm — from inherited complexity to infrastructure as code",
    client: "Duality Group",
    industry: "Finance & Trading Technology",
    tags: ["Cloud & Infrastructure", "Networking", "Security"],
    summary:
      "A complete rebuild of an overbuilt, incentive-misaligned AWS environment for quantitative trading firm Duality Group — four isolated accounts, every subnet and routing rule defined in Terraform, active/passive FortiGate HA at the network edge, encrypted VPN connectivity to market data and execution partners, and a lower monthly bill than the environment it replaced.",
    seoTitle: "Built for Scale — Cloud Infrastructure for Duality Group | RSystems NYC",
    seoDescription:
      "How RSystems replaced an overbuilt, incentive-misaligned AWS environment for quantitative trading firm Duality Group — rebuilding from first principles in Terraform across four accounts, with FortiGate HA, encrypted market data connectivity, and a lower monthly bill than the environment it replaced.",
    canonicalPath: "/case-studies/duality-group",
    featuredImage: {
      src: "/assets/dual.jpg",
      alt: "AWS cloud infrastructure architecture — Duality Group",
    },
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Built for Scale — Cloud Infrastructure Redesign for Duality Group",
      "description":
        "A complete rebuild of an overbuilt, incentive-misaligned AWS environment for quantitative trading firm Duality Group — four isolated accounts, every resource defined in Terraform, active/passive FortiGate HA, encrypted market data connectivity, and a lower monthly bill than the environment it replaced.",
      "url": "https://rsystems.nyc/case-studies/duality-group",
      "author": {
        "@type": "Organization",
        "name": "RSystems NYC",
        "url": "https://rsystems.nyc",
      },
      "publisher": {
        "@type": "Organization",
        "name": "RSystems NYC",
        "url": "https://rsystems.nyc",
        "areaServed": { "@type": "City", "name": "New York City" },
      },
      "about": {
        "@type": "Organization",
        "name": "Duality Group",
        "description": "A quantitative trading firm with business-critical infrastructure reliability requirements",
        "areaServed": { "@type": "City", "name": "New York City" },
      },
    },
    sections: [
      {
        label: "At a Glance",
        blocks: [
          {
            type: "specs",
            groups: [
              {
                title: "",
                items: [
                  [
                    "Client",
                    "Duality Group — a quantitative trading firm operating in an environment where infrastructure reliability is a business-critical concern, not a quality-of-life one.",
                  ],
                  [
                    "Problem",
                    "An AWS environment inherited from a previous managed service provider whose contract was structured as a percentage of Duality's cloud spend — a billing model that made complexity profitable, and left behind an overbuilt, poorly rationalized, and expensive environment.",
                  ],
                  [
                    "Services",
                    "AWS architecture · multi-account design · Terraform infrastructure as code · network design · FortiGate virtual firewall deployment · encrypted VPN connectivity · security monitoring and observability",
                  ],
                  [
                    "Platforms",
                    "AWS (VPC, Transit Gateway, Fargate, Route 53, VPC Endpoints) · Terraform · Fortinet FortiGate (virtual) · Terraform Cloud",
                  ],
                  [
                    "Outcome",
                    "A fully code-defined, multi-account AWS environment that is reproducible from scratch, costs less than what it replaced, and is significantly more capable.",
                  ],
                ],
              },
            ],
          },
        ],
      },
      {
        label: "The Challenge",
        heading: "An environment built for someone else's incentives",
        blocks: [
          {
            type: "p",
            text: "Duality Group is a quantitative trading firm operating in a space where infrastructure reliability is not a quality-of-life concern — it is a business-critical one. Latency matters. Uptime matters. The integrity of data connections to market data providers and downstream execution partners matters in ways that are immediate and financial.",
          },
          {
            type: "p",
            text: "The environment they inherited had been built by another managed service provider — one whose contract was structured as a percentage of Duality's AWS spend. That billing model created a perverse incentive: complexity wasn't a problem to be solved, it was a revenue mechanism. The result was an overbuilt, poorly rationalized environment that was expensive, fragile, and difficult to reason about.",
          },
          {
            type: "p",
            text: "The goal wasn't to patch it. It was to replace it entirely — with an environment designed from first principles, built entirely in code, and capable of scaling with the demands of a growing trading operation.",
          },
        ],
      },
      {
        label: "Architecture",
        heading: "Multi-account, multi-environment from the ground up",
        blocks: [
          {
            type: "p",
            text: "The new environment is organized across discrete AWS accounts — infrastructure, development, UAT, and production — each isolated, consistently structured, and managed entirely in Terraform. Every subnet, routing rule, firewall policy, and access control is version-controlled and reproducible. Configuration drift is impossible by design.",
          },
          {
            type: "p",
            text: "A Transit Gateway in the infrastructure account serves as the backbone, with all inter-environment routing flowing through a single, centrally managed hub. Shared services — DNS resolution, firewall, identity — live in the infrastructure account and are consumed by all other environments through controlled, auditable paths.",
          },
        ],
      },
      {
        label: "Network Design",
        heading: "Subnets purpose-built for containerized workloads",
        blocks: [
          {
            type: "p",
            text: "Each environment is subdivided into distinct subnet tiers: public-facing, application, data, and a dedicated container tier for Fargate workloads. The container subnets are intentionally oversized — providing thousands of available addresses per availability zone — because Duality's trading workloads need room to scale horizontally without re-addressing infrastructure.",
          },
          {
            type: "p",
            text: "The data tier, where databases live, is kept fully isolated with its own routing and access controls. Nothing reaches it that isn't explicitly permitted. AWS service traffic is routed through private VPC endpoints, keeping it off the public internet entirely.",
          },
        ],
      },
      {
        label: "Firewall",
        heading: "Active/passive FortiGate high availability",
        blocks: [
          {
            type: "p",
            text: "All traffic into and out of AWS flows through a pair of Fortinet FortiGate virtual appliances deployed in the infrastructure account across separate availability zones. They run in active/passive high availability — if the active unit fails, the passive takes over automatically, with no manual intervention and no traffic disruption.",
          },
          {
            type: "p",
            text: "The FortiGates were procured with full security licensing and support contracts — a predictable, fixed annual cost, rather than a variable expense that grows with cloud spend.",
          },
        ],
      },
      {
        label: "External Connectivity",
        heading: "Encrypted tunnels to market data and execution partners",
        blocks: [
          {
            type: "p",
            text: "Duality's trading operation depends on reliable, low-latency connectivity to a major market data provider for trade data, and to downstream partners for trade execution. Both connections are handled as encrypted VPN tunnels terminated at the FortiGate layer — traffic that never traverses the public internet unprotected. The firewall manages all policy enforcement for these connections: what is permitted in, what is permitted out, and how it routes once inside.",
          },
          {
            type: "p",
            text: "Internal DNS resolution is centrally managed in the infrastructure account and shared across all environments, so every account resolves internal hostnames consistently without duplicating infrastructure.",
          },
        ],
      },
      {
        label: "Security & Observability",
        heading: "Defense in depth, managed as code",
        blocks: [
          {
            type: "p",
            text: "Threat detection, API audit logging, resource configuration history, and encryption key management are all enabled across every account from day one — centrally aggregated, consistently configured, and defined in code alongside everything else. Every VPC generates flow logs. Nothing in the environment is undocumented or unobserved.",
          },
        ],
      },
    ],
    results: [
      "A fully code-defined AWS environment across four accounts — reproducible, version-controlled, and auditable",
      "Container subnets built for horizontal scale, with capacity to grow without architectural changes",
      "Active/passive FortiGate high availability with automatic failover and no single point of failure at the network edge",
      "Encrypted connectivity to market data and execution partners, terminated at the firewall and never exposed to the internet",
      "All environments connected through a centralized routing hub, with shared DNS and security services flowing from a single infrastructure account",
      "Security monitoring, audit logging, and configuration tracking running across all environments from day one",
      "A lower monthly AWS bill than the environment it replaced — despite being significantly more capable",
    ],
  },

  {
    slug: "easterseals-nj-intune",
    title: "Automating Device Management with Intune",
    subtitle:
      "Building a zero-touch provisioning pipeline for a 45-location healthcare nonprofit — from fully manual to Autopilot at scale",
    client: "Easterseals New Jersey",
    industry: "Healthcare & Nonprofit",
    tags: ["MDM", "Identity", "Security", "Microsoft"],
    summary:
      "A complete zero-touch provisioning pipeline for new devices and an automated re-enrollment path for existing ones — across 45 locations, 60+ Wi-Fi networks, and dozens of deployed applications — for a HIPAA-regulated nonprofit with 775 endpoints working toward HITRUST certification.",
    featuredImage: {
      src: "/assets/esnj.png",
      alt: "Easterseals New Jersey — device enrollment and IT provisioning",
    },
    seoTitle: "Automating Device Management with Intune — Easterseals NJ | RSystems NYC",
    seoDescription:
      "How RSystems built a zero-touch Windows Autopilot and Intune provisioning pipeline for Easterseals New Jersey — a 45-location healthcare nonprofit with 775 endpoints — deploying security baselines, application packages, and Wi-Fi credentials across the full fleet through iterative development with the internal IT team.",
    canonicalPath: "/case-studies/easterseals-nj-intune",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Automating Device Management with Intune — Zero-Touch Provisioning for Easterseals New Jersey",
      "description":
        "How RSystems built a zero-touch Windows Autopilot and Intune provisioning pipeline for Easterseals New Jersey — a 45-location healthcare nonprofit with 775 endpoints in a HIPAA-regulated environment working toward HITRUST certification.",
      "url": "https://rsystems.nyc/case-studies/easterseals-nj-intune",
      "author": {
        "@type": "Organization",
        "name": "RSystems NYC",
        "url": "https://rsystems.nyc",
      },
      "publisher": {
        "@type": "Organization",
        "name": "RSystems NYC",
        "url": "https://rsystems.nyc",
        "areaServed": { "@type": "State", "name": "New Jersey" },
      },
      "about": {
        "@type": "Organization",
        "name": "Easterseals New Jersey",
        "description": "A large nonprofit providing services to persons with disabilities across 45 locations in New Jersey",
        "address": {
          "@type": "PostalAddress",
          "addressRegion": "NJ",
          "addressCountry": "US",
        },
      },
    },
    sections: [
      {
        label: "At a Glance",
        blocks: [
          {
            type: "specs",
            groups: [
              {
                title: "",
                items: [
                  [
                    "Client",
                    "Easterseals New Jersey — a large nonprofit providing services to persons with disabilities across 45 locations in New Jersey, with 775 endpoints in a HIPAA-regulated environment working toward HITRUST certification.",
                  ],
                  [
                    "Problem",
                    "A growing organization running entirely on on-premises Active Directory with no device management pipeline — where every workstation was provisioned by hand, every user was a local administrator, and the IT team's time was consumed by manual configuration work that should have been automatic.",
                  ],
                  [
                    "Services",
                    "Windows Autopilot and Intune design and deployment · security baseline development · PowerShell scripting and remediation · application deployment pipeline · vendor and reseller coordination (CDW) · Wi-Fi credential deployment · iterative development with internal IT team",
                  ],
                  [
                    "Platforms",
                    "Microsoft Intune · Windows Autopilot · Microsoft Entra ID · Microsoft Defender · LAPS · CDW",
                  ],
                  [
                    "Outcome",
                    "A complete zero-touch provisioning pipeline for new devices and an automated re-enrollment path for existing ones — across 45 locations, 60+ Wi-Fi networks, and dozens of deployed applications — with an IT team that spends significantly less time manually configuring workstations.",
                  ],
                ],
              },
            ],
          },
        ],
      },
      {
        label: "The Organization",
        heading: "A statewide nonprofit with a small IT team and a large footprint",
        bg: "bg-[#F4F2EF]",
        blocks: [
          {
            type: "p",
            text: "Easterseals New Jersey provides a wide range of services to people with disabilities across the state — therapy, employment, early intervention, residential programs, and more. They operate out of 45 locations, support roughly 775 endpoints, and handle protected health information across multiple clinical systems. Their IT team is small relative to the footprint they cover, which makes every hour spent on manual provisioning an hour not spent on something more valuable.",
          },
          {
            type: "p",
            text: "Their environment at the start of the engagement was built on on-premises Active Directory, with no modern device management pipeline. Windows workstations were domain-joined by hand, configured by hand, and deployed by hand. There was no LAPS — every local admin account used the same credentials. Security baselines were applied inconsistently, if at all. Everyone was a local administrator on their own machine.",
          },
          {
            type: "p",
            text: "For a healthcare organization working toward HITRUST certification and handling HIPAA-regulated data, the gap between their current posture and where they needed to be was significant.",
          },
        ],
      },
      {
        label: "The Challenge",
        heading: "Scale, complexity, and a live environment",
        blocks: [
          {
            type: "p",
            text: "This was not a greenfield deployment. Easterseals NJ was operating a full clinical and administrative environment — line-of-business applications serving every department, remote access for dozens of locations, and multiple EHR systems. The work had to happen around the organization’s operations, not instead of them.",
          },
          {
            type: "p",
            text: "The scale added its own complexity. Forty-five locations meant 60-plus distinct Wi-Fi networks, each with their own SSID and credentials, all of which needed to be pushed to endpoints automatically. Application requirements spanned a wide range — from standard productivity tools to specialty clinical software used at the point of care. Each one was a custom package to build, test, deploy, and maintain.",
          },
          {
            type: "p",
            text: "And the device estate itself was split: new machines going forward could be enrolled automatically, but roughly 275 existing domain-joined PCs also needed a path into the new system without requiring someone to physically touch each one.",
          },
        ],
      },
      {
        label: "The Approach",
        heading: "Iterative, in partnership with the internal team",
        bg: "bg-[#F4F2EF]",
        blocks: [
          {
            type: "p",
            text: "The engagement was structured as a series of weekly working sessions with Easterseals NJ’s IT team — not a one-time deployment, but a collaborative development process. Policies were built, tested on a small group of devices, refined, and expanded incrementally. Each week added capability; each cycle caught issues before they reached the broader fleet.",
          },
          {
            type: "p",
            text: "That cadence mattered. A policy conflict in BitLocker configuration, a hostname rename script that ran faster than a remote support tool could sync its device name, a screensaver setting that needed a registry workaround — these are the kinds of issues that only surface in a real environment with real machines. Working iteratively meant they were resolved with a handful of test devices, not with the full fleet.",
          },
          {
            type: "p",
            text: "The internal IT team was a genuine partner throughout. They knew the environment, the applications, the edge cases. The work was built with them, not handed off to them.",
          },
        ],
      },
      {
        label: "The Build",
        heading: "What was built",
        blocks: [
          {
            type: "p",
            text: "The Autopilot pipeline runs in two directions. New Windows devices purchased through CDW are automatically registered in Autopilot at the time of purchase — zero-touch enrollment, out of the box. For existing machines, a PowerShell script ingests the hardware hash and registers the device in Autopilot, so it can be factory reset and re-enrolled through the same automated flow. The IT team can now wipe and redeploy a workstation without manually configuring anything.",
          },
          {
            type: "p",
            text: "A full security baseline was deployed across the fleet: LAPS for automated local admin password rotation, BitLocker encryption with recovery keys escrowed in Intune, strong MFA enforced via Microsoft Authenticator, Microsoft Defender replacing the legacy endpoint protection, URL blocking configured in Defender for restricted domains, and a full transition of local administrator rights away from end users.",
          },
          {
            type: "p",
            text: "An application pipeline delivers dozens of packages to every enrolled device — productivity software, clinical tools, remote support, browsers, and printer configurations — all deployed and maintained through Intune without manual installation.",
          },
          {
            type: "p",
            text: "Configuration policies complete the picture: Wi-Fi credentials pushed to all 60-plus SSID locations using dynamic group targeting, power and sleep settings standardized across the fleet, screensaver and lock screen enforced with Easterseals NJ branding, interactive logon message deployed with policy acknowledgment language, and every device renamed automatically to its serial number on enrollment.",
          },
          {
            type: "p",
            text: "A staged Windows 11 upgrade pipeline was coordinated alongside the Autopilot work — upgrade rings rolled out incrementally, with user communications and IT team training to minimize disruption.",
          },
        ],
      },
    ],
    results: [
      "Full Windows Autopilot enrollment pipeline — zero-touch for new devices, hash-ingestion re-enrollment for roughly 275 existing domain-joined PCs",
      "CDW vendor coordination for automatic Autopilot registration on all new hardware purchases",
      "Intune security baseline: LAPS, BitLocker with escrowed recovery keys, Microsoft Defender, strong MFA, local admin removal",
      "Dozens of application packages deployed and maintained via Intune without manual installation",
      "Wi-Fi credential deployment across 60+ locations using dynamic group targeting",
      "Windows 11 upgrade pipeline with staged rollout rings",
      "Iterative development in weekly partnership with the internal IT team",
    ],
  },

  {
    slug: "audubon-corkscrew",
    title: "Campus-Wide Wireless for a Remote Nature Preserve",
    subtitle:
      "A point-to-multipoint wireless network for the National Audubon Society's Corkscrew Swamp Sanctuary — designed in New York, built in Florida, delivering 200 Mbps where major carriers declined to serve.",
    client: "National Audubon Society",
    industry: "Nonprofits & Conservation",
    tags: ["Networking"],
    summary:
      "Campus-wide wireless connectivity for the National Audubon Society's Corkscrew Swamp Sanctuary — remote deployment, zero carriers willing to serve, 200 Mbps delivered.",
    featuredImage: {
      src: "https://media.audubon.org/2025-03/Corkscrew%20%201732%20%20RJ%20Wiley%20.jpg",
      alt: "Corkscrew Swamp Sanctuary boardwalk, National Audubon Society, Florida",
    },
    seoTitle: "Campus-Wide Wireless for a Remote Nature Preserve — RSystems NYC",
    seoDescription:
      "RSystems designed and deployed a point-to-multipoint wireless campus network for the National Audubon Society's Corkscrew Swamp Sanctuary — a remote Florida nature preserve that major carriers wouldn't serve. Delivered remotely, on time, and at a fraction of the cost of a traditional enterprise build.",
    canonicalPath: "/case-studies/audubon-corkscrew",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "The Network Behind the Boardwalk",
      "description":
        "RSystems designed and deployed campus-wide wireless connectivity for Corkscrew Swamp Sanctuary, a remote National Audubon Society preserve in rural Florida — using a point-to-multipoint architecture, SonicWall, Cisco, and Unifi to deliver 200 Mbps campus-wide where major carriers wouldn't go.",
      "author": {
        "@type": "Organization",
        "name": "RSystems NYC",
        "url": "https://rsystems.nyc",
      },
      "publisher": {
        "@type": "Organization",
        "name": "RSystems NYC",
        "url": "https://rsystems.nyc",
      },
      "about": { "@type": "Organization", "name": "National Audubon Society" },
      "keywords":
        "Corkscrew Swamp Sanctuary, Audubon Society, wireless network, point-to-multipoint, SonicWall, Cisco, Unifi, remote network deployment, nonprofit technology, Florida",
    },
    sections: [
      {
        label: "Background",
        heading: "A sanctuary that couldn't get online",
        blocks: [
          {
            type: "p",
            text: "Corkscrew Swamp Sanctuary is one of the most significant conservation sites in North America — a remote nature preserve in rural Florida operated by the National Audubon Society, home to the largest old-growth bald cypress forest in the country and a premier bird-watching destination. The preserve depends on reliable connectivity for conservation work, education, visitor operations, and staff communications. For years, it had none.",
          },
          {
            type: "p",
            text: "Major carriers declined to serve the site. Earlier efforts to establish connectivity stalled repeatedly: permitting disputes with local authorities, vendor failures, and a project intermediary that went bankrupt mid-build — leaving an ISP that had invested in infrastructure unpaid and forced to withdraw. When a local provider eventually installed a 100-foot monopole on site, the sanctuary's buildings were still not wired. The physical assets were there. A functioning network was not.",
          },
          {
            type: "p",
            text: "RSystems was brought in to finish what others couldn't.",
          },
        ],
      },
      {
        label: "The Challenge",
        heading: "Years of stalled infrastructure, solved in months",
        blocks: [
          {
            type: "p",
            text: "The task was to turn fragmented, abandoned physical assets into a reliable, scalable campus network — distributed across multiple buildings separated by wetlands, dense tree cover, and roughly a kilometer of open preserve.",
          },
          {
            type: "p",
            text: "The technical constraints were significant. The 5 GHz radio spectrum in the area included DFS channels shared with FAA and weather radar systems, which can force radios to vacate channels without warning. One building was partially obstructed by tree canopy. The entire project had to be designed, configured, and managed remotely — from over 1,000 miles away in New York City — while a Florida-based vendor handled crane work, mounting, and physical cabling.",
          },
          {
            type: "p",
            text: "On hardware: RSystems selected Unifi for the RF and access point layer, not because it carries no risk — Unifi's software QA is inconsistent, firmware updates have introduced bugs, and rollback options are limited — but because the price-to-performance ratio was the right call for this application, with that risk explicitly understood and managed. Core routing and switching used SonicWall and Cisco, where reliability is non-negotiable.",
          },
          {
            type: "img",
            src: "/assets/corkscrew_Site_Map.png",
            alt: "Site map of Corkscrew Swamp Sanctuary showing campus buildings and wireless coverage",
          },
        ],
      },
      {
        label: "The Solution",
        heading: "The monopole becomes the hub",
        blocks: [
          {
            type: "p",
            text: "RSystems designed a point-to-multipoint wireless architecture using the existing monopole as the central distribution point for the entire campus.",
          },
          {
            type: "p",
            text: "Comcast fiber was brought to the site and terminated into a SonicWall firewall at the base of the tower. Behind the firewall, a 48-port Cisco PoE switch and UPS served as the distribution core. All of this equipment was installed inside a NEMA-rated outdoor rack with HVAC at the monopole base — weatherproofed and thermally protected for Florida's heat, humidity, and outdoor conditions.",
          },
          {
            type: "p",
            text: "On the monopole itself, four Unifi Bridge Pro 90° antennas were mounted high on the tower. Their overlapping coverage sectors created approximately 270° of usable RF coverage across the preserve — operating in the 5 GHz band at effective ranges well within the antennas' 5 km capacity, giving ample signal margin for every building.",
          },
          {
            type: "p",
            text: "Each building on the property received a matching Unifi point-to-point radio aimed back at the appropriate sector on the monopole. Inside each structure, that radio fed a PoE switch, which powered indoor Unifi access points for local WiFi coverage. Additional PoE capacity was reserved at every site for future systems — cameras, environmental sensors, or additional coverage — without requiring any changes to the core network.",
          },
          {
            type: "img",
            src: "/assets/corkscrew_Antennas.jpg",
            alt: "Unifi Bridge Pro antennas mounted on monopole at Corkscrew Swamp Sanctuary",
          },
        ],
      },
      {
        label: "Remote Execution",
        heading: "Designed in New York, built in Florida",
        blocks: [
          {
            type: "p",
            text: "RSystems pre-configured all Unifi hardware before shipping equipment to the site. The Cloud Controller was used for ongoing management — not a physical Cloud Key, which would have introduced another point of failure in an already remote environment.",
          },
          {
            type: "p",
            text: "For the physical installation, RSystems provided the local Florida vendor with detailed documentation including precise compass bearings and mounting locations for each antenna — designed to be executed with a crane, by a crew that had never seen the network design. The antenna placement worked.",
          },
          {
            type: "p",
            text: "Channel and power optimization came next. RSystems tuned the 5 GHz spectrum carefully, navigating DFS channel constraints and local interference sources, and working through the adoption and reboot cycles typical of Unifi commissioning. The Visitor Center — initially delivering 5–10 Mbps due to signal overlap and interference — reached 200 Mbps after optimization.",
          },
          {
            type: "img",
            src: "/assets/corkscrew_ptp7.jpg",
            alt: "Point-to-point radio installed at the Conservation Office, Corkscrew Swamp Sanctuary",
          },
          {
            type: "img",
            src: "/assets/corkscrew_Topology.drawio.svg",
            alt: "Network topology — Corkscrew Swamp Sanctuary point-to-multipoint wireless architecture",
          },
        ],
      },
    ],
    results: [
      "Point-to-multipoint wireless campus network serving all buildings across the preserve",
      "SonicWall firewall + 48-port Cisco PoE switch in NEMA outdoor rack with HVAC at monopole base",
      "Four Unifi Bridge Pro 90° sectors providing ~270° coverage across the 5 GHz band",
      "Per-building point-to-point backhaul + PoE switch + Unifi WAPs for local coverage",
      "200 Mbps real-world WiFi throughput campus-wide (1 Gbps fiber delivered to monopole)",
      "Visitor Center improved from 5–10 Mbps to 200 Mbps after RF optimization",
      "Unifi Cloud Controller for centralized remote management",
      "Domotz for ongoing monitoring and alerting",
      "Future-ready: extra PoE capacity at every building for cameras and sensors; Starlink failover planned",
      "Full execution managed remotely from NYC with local Florida vendor for crane and cabling work",
    ],
    closingImage: {
      src: "https://media.audubon.org/2025-03/boardwalk%20morning-crop.jpg",
      alt: "Morning on the boardwalk at Corkscrew Swamp Sanctuary",
    },
  },
  {
    slug: "audubon-azure",
    title: "Replacing a 10-Year-Old Data Center — Without Replacing the Hardware",
    subtitle:
      "Multi-region Azure infrastructure, disaster recovery, and infrastructure-as-code for a nationally distributed conservation organization with a global growth roadmap.",
    client: "National Audubon Society",
    industry: "Nonprofits & Conservation",
    tags: ["Cloud & Infrastructure"],
    summary:
      "Multi-region Azure infrastructure, disaster recovery, and Terraform automation for the National Audubon Society — DR requirements met at a fraction of a hardware refresh.",
    featuredImage: {
      src: "https://azure.microsoft.com/en-us/blog/wp-content/uploads/2022/03/acdf7d3b-44b6-4095-bee0-376c1014eccb.webp",
      alt: "Inside a Microsoft Azure datacenter",
    },
    seoTitle:
      "Replacing a 10-Year-Old Data Center Without Replacing the Hardware — RSystems NYC",
    seoDescription:
      "RSystems designed and built a multi-region Azure infrastructure for the National Audubon Society — disaster recovery, Virtual WAN, Azure Site Recovery, and Terraform automation — replacing an aging Cologix VMware stack without a hardware refresh.",
    canonicalPath: "/case-studies/audubon-azure",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "Article",
      headline:
        "Replacing a 10-Year-Old Data Center Without Replacing the Hardware",
      description:
        "RSystems designed and built a multi-region Azure infrastructure for the National Audubon Society — including Azure Virtual WAN, Azure Site Recovery, Terraform infrastructure-as-code, and multi-region disaster recovery — replacing an aging Cologix VMware stack at a fraction of the cost of a hardware refresh.",
      author: {
        "@type": "Organization",
        name: "RSystems NYC",
        url: "https://rsystems.nyc",
      },
      publisher: {
        "@type": "Organization",
        name: "RSystems NYC",
        url: "https://rsystems.nyc",
      },
      about: {
        "@type": "Organization",
        name: "National Audubon Society",
      },
      keywords:
        "National Audubon Society, Azure, Terraform, disaster recovery, Azure Site Recovery, Virtual WAN, infrastructure-as-code, cloud migration, nonprofit technology",
    },
    sections: [
      {
        label: "Background",
        heading: "A colocation stack past its expiration date",
        blocks: [
          {
            type: "p",
            text: "The National Audubon Society's core IT infrastructure had run for over a decade out of the Cologix colocation facility in New Jersey — VMware-based, aging, and overdue for replacement. The organization also had a substantial AWS footprint, a growing remote workforce, and plans for international expansion.",
          },
          {
            type: "p",
            text: "The existing backup solution covered data protection but not disaster recovery. In practical terms, that gap was showing up in insurance premiums. Audubon needed a DR-capable infrastructure that could protect their most critical systems, support an eventual migration away from Cologix, and scale to serve a globally distributed organization — without the cost and ceiling of another hardware refresh.",
          },
        ],
      },
      {
        label: "The Decision",
        heading: "Cloud as infrastructure, not just storage",
        blocks: [
          {
            type: "p",
            text: "A direct hardware replacement at Cologix would have been expensive, extended the life of systems already scheduled for retirement, and still left the DR gap unresolved. Azure offered a different path: build the disaster recovery infrastructure first, establish the migration pathway second, and design the whole thing to scale globally from day one.",
          },
          {
            type: "p",
            text: "RSystems recommended a phased, iterative engagement — a fixed monthly scope with collaborative prioritization rather than a rigid fixed-price contract — given the number of architectural unknowns at the start of the project. Everything would be built and validated in an isolated development subscription before touching production.",
          },
        ],
      },
      {
        label: "The Approach",
        heading: "Infrastructure-as-code from day one",
        blocks: [
          {
            type: "p",
            text: "Rather than configuring Azure through the portal, RSystems built the entire infrastructure in Terraform — the industry-standard platform for infrastructure-as-code. That decision had compounding benefits throughout the engagement.",
          },
          {
            type: "p",
            text: "During development, Terraform let the team tear down the entire build between sessions, eliminating idle compute costs. When architectural decisions changed, a single script edit and a rebuild replaced what would otherwise have been hours of manual reconfiguration. And when it comes time to extend the infrastructure into a new region, the same modules that built the primary environment can be reused with minimal modification.",
          },
        ],
      },
      {
        label: "What Was Built",
        heading: "Phase by phase, over six months",
        blocks: [
          {
            type: "p",
            text: "The project ran across five phases:",
          },
          {
            type: "h3",
            text: "Network Connectivity",
          },
          {
            type: "p",
            text: "Azure Virtual WAN (vWAN) was deployed as the networking foundation. Rather than manually maintaining point-to-point peering rules between Azure regions, Cologix, and AWS, vWAN creates a central hub that handles any-any routing automatically. Traffic between Azure and Cologix, between Azure and AWS, and between Azure regions all routes through vWAN — over Microsoft's private fiber backbone, not the public internet. The architecture was designed to accommodate additional regional hubs without redesigning the core.",
          },
          {
            type: "h3",
            text: "Azure Site Recovery",
          },
          {
            type: "p",
            text: "ASR was configured for three scenarios: VMware-to-Azure failover (protecting the Cologix stack), Azure-to-VMware failback, and Azure-to-Azure replication across regions. This is the \"pilot light\" model — protected VMs replicate continuously, but Azure runs no active compute in the secondary region until a failover is triggered. The cost is storage only — approximately $25 per VM per month — compared to running a full parallel environment. For an organization with dozens of protected systems, the economics are compelling.",
          },
          {
            type: "h3",
            text: "Virtual Machines",
          },
          {
            type: "p",
            text: "A pair of domain controllers and a pair of Okta sync agents were deployed natively in Azure, establishing the identity foundation for cloud-hosted workloads. The Terraform modules built for this phase are reusable for every future VM deployment.",
          },
          {
            type: "h3",
            text: "Production",
          },
          {
            type: "p",
            text: "Protected VMs in Cologix began replicating to Azure, meeting the disaster recovery and insurance requirements that initiated the project. The lift-and-shift pathway — moving workloads fully into Azure — was established and ready for execution.",
          },
        ],
      },
    ],
    results: [
      "Multi-region Azure infrastructure built entirely in Terraform, from scratch",
      "Azure Virtual WAN connecting two Azure regions, Cologix VMware, and AWS in a single routing mesh",
      "Azure Site Recovery configured for VMware-to-Azure, Azure-to-VMware, and Azure-to-Azure disaster recovery",
      "DR and insurance requirements met at ~$25/VM/month",
      "Domain controllers and Okta sync agents deployed natively in Azure",
      "Infrastructure designed for future regional expansion without core redesign",
      "Reusable Terraform modules for all future VM, network, and DR deployments",
      "Phased delivery over six months, on time and on budget",
    ],
  },
  {
    slug: "audubon-wireless-tuning",
    title: "Upgrade, Survey, Tune",
    subtitle:
      "Replacing eight aging access points at Audubon's NYC headquarters — and using heat mapping to confirm the new ones were in the right places.",
    client: "National Audubon Society",
    industry: "Nonprofit · Wireless Infrastructure",
    tags: ["Networking"],
    summary:
      "Replaced eight aging access points, surveyed the result, and tuned placement and channel configuration based on what the data showed.",
    featuredImage: {
      src: "/assets/07-audubon-key-photo.png",
      alt: "NetSpot 5GHz heat map of Audubon's NYC headquarters showing wireless signal coverage",
    },
    seoTitle:
      "Wireless Infrastructure Upgrade & Heat Mapping — National Audubon Society — RSystems NYC",
    seoDescription:
      "We replaced eight aging access points at Audubon's NYC headquarters, surveyed the result with a heat map, and tuned placement and channel configuration based on what the data showed.",
    canonicalPath: "/case-studies/audubon-wireless-tuning",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "Article",
      headline:
        "Upgrade, Survey, Tune — Wireless Infrastructure for the National Audubon Society",
      description:
        "We replaced eight aging access points at Audubon's NYC headquarters, surveyed the result with a heat map, and tuned placement and channel configuration based on what the data showed.",
      author: {
        "@type": "Organization",
        name: "RSystems NYC",
        url: "https://rsystems.nyc",
      },
      publisher: {
        "@type": "Organization",
        name: "RSystems NYC",
        url: "https://rsystems.nyc",
      },
      about: { "@type": "Organization", name: "National Audubon Society" },
      keywords:
        "wireless infrastructure, UniFi, heat mapping, NetSpot, WiFi survey, 6GHz, nonprofit technology, Audubon Society, channel planning, access point placement",
    },
    sections: [
      {
        label: "The Upgrade",
        heading: "The upgrade",
        blocks: [
          {
            type: "p",
            text: "Audubon's New York headquarters runs on a UniFi wireless infrastructure managed by RSystems. The existing fleet of eight access points had reached end of useful life — newer hardware offered meaningfully better performance across 2.4, 5, and 6GHz, with improved multi-gigabit backhaul support and stronger performance in dense RF environments like midtown Manhattan.",
          },
          {
            type: "p",
            text: "We replaced all eight APs with new UniFi hardware, re-cabling where needed to ensure each access point retained its multi-gigabit wired uplink. Once the new hardware was online and enrolled in the controller, we walked the floor with a spectrum analyzer to see what we'd actually built.",
          },
          {
            type: "img",
            src: "/assets/01-audubon-floor-plan.jpg",
            alt: "Annotated floor plan of Audubon's NYC headquarters showing access point locations and patch panel port assignments",
            caption:
              "Annotated floor plan with access point locations and port assignments — the reference document for the survey and all subsequent placement decisions.",
          },
        ],
      },
      {
        label: "The Survey",
        heading: "The survey",
        blocks: [
          {
            type: "p",
            text: "We conducted a full wireless heat map of the floor using NetSpot, walking a calibrated zigzag pattern across the entire space with a 6GHz-capable laptop. The methodology matters here — zigzag movement with overlapping sample areas produces real measured data at every point rather than the interpolated guesswork that straight-line walking creates. We ran the survey during working hours to capture the RF environment as it actually exists, with neighboring networks active and devices connected.",
          },
          {
            type: "p",
            text: "The output was heat maps for each frequency band — raw signal strength (RSSI) and signal-to-noise ratio (SNR) — overlaid on a dimensionally accurate floor plan with each AP labeled and located.",
          },
        ],
      },
      {
        label: "What the Data Showed",
        heading: "What the data showed",
        blocks: [
          {
            type: "p",
            text: "5GHz coverage had a gap in the southwest corner of the floor. The new APs were providing good coverage across most of the space, but weaker signal in that area — a function of how the initial placement distributed coverage. All APs were already broadcasting at high power. The answer was better positioning, not more power.",
          },
          {
            type: "img",
            src: "/assets/02-audubon-5ghz-coverage.png",
            alt: "NetSpot 5GHz heat map with adjusted gradient showing weaker coverage in the southwest corner of the floor",
            caption:
              "5GHz signal coverage with tightened gradient scale — the southwest corner reads cooler than the rest of the floor, identifying the area most in need of repositioning.",
          },
          {
            type: "p",
            text: "2.4GHz signal strength looked reasonable at first glance — adequate coverage across most of the floor. Raw signal alone is an incomplete picture.",
          },
          {
            type: "img",
            src: "/assets/03-audubon-2ghz-signal.png",
            alt: "NetSpot 2.4GHz raw signal strength heat map showing broadly adequate coverage across the floor",
            caption:
              "2.4GHz raw signal strength — coverage looks acceptable across most of the floor.",
          },
          {
            type: "p",
            text: "When we examined signal-to-noise ratio — often the more meaningful metric for real-world performance under load — the picture was poor throughout. The scan found 70+ named WiFi networks visible from this floor, and several hundred more too weak to identify. This is the reality of 2.4GHz in dense Manhattan: a shared, congested medium regardless of how well your own equipment is configured. The finding confirmed that steering staff toward 5GHz and 6GHz wherever possible is the right direction.",
          },
          {
            type: "img",
            src: "/assets/04-audubon-2ghz-snr.png",
            alt: "NetSpot 2.4GHz signal-to-noise ratio heat map showing poor SNR across the entire floor despite adequate raw signal",
            caption:
              "2.4GHz signal-to-noise ratio — poor across the entire floor. Over 70 named networks and hundreds more unnamed ones are visible from this space. Raw signal means little when the noise floor is this high.",
          },
          {
            type: "p",
            text: "The background RF scan of 5GHz revealed a more specific problem: a neighboring tenant's access points on the floor above were broadcasting strong signals across channels we were using. At their loudest they registered at -61 dBm — extremely loud for a neighboring network — running 80MHz channel widths that consumed a meaningful slice of the available 5GHz spectrum. Our APs nearest that interference needed to be on channels as far from theirs as possible.",
          },
          {
            type: "img",
            src: "/assets/05-audubon-5ghz-neighbor-interference.png",
            alt: "UniFi AirView 5GHz spectrum scan showing neighboring access points with strong signal levels on 80MHz wide channels",
            caption:
              "UniFi AirView 5GHz scan — neighboring access points visible at -61 dBm, running 80MHz channels that consume a significant portion of the available 5GHz spectrum. Manual channel assignment was needed to steer our APs into quieter frequencies.",
          },
          {
            type: "p",
            text: "6GHz was clean. Near-zero external interference across the entire band. The Audubon Staff SSID is 6GHz enabled, and staff on 6GHz-capable hardware are operating in clear spectrum with no competition from neighboring networks.",
          },
          {
            type: "img",
            src: "/assets/06-audubon-6ghz-coverage.png",
            alt: "NetSpot 6GHz heat map showing strong, uniform coverage across the entire floor with near-zero external interference",
            caption:
              "6GHz signal coverage — strong and consistent across the entire floor, with near-zero interference from neighboring networks. The cleanest band on this floor by a significant margin.",
          },
        ],
      },
      {
        label: "The Adjustments",
        heading: "The adjustments",
        blocks: [
          {
            type: "p",
            text: "The survey data drove a focused set of changes. Four of the eight new APs were relocated to improve coverage distribution and address the southwest gap. Two additional APs were added at positions the heat map identified as coverage gaps that repositioning alone would not fully resolve — bringing the total to ten. Audubon's IT team handled the physical moves and cabling, with RSystems on a call for coordination and documentation.",
          },
          {
            type: "p",
            text: "With the hardware in its final positions, RSystems configured manual channel assignments across all ten access points — hardcoding 2.4, 5, and 6GHz channels on each AP so that the units nearest the neighboring tenant's interference operate on non-overlapping frequencies. Leaving channel selection to the controller's automatic logic does not account for a specific neighbor's specific interference profile. Manual assignment does.",
          },
          {
            type: "p",
            text: "A follow-up review confirmed improved 5GHz coverage with the southwest gap addressed, and validated excellent 6GHz coverage throughout — the cleanest band on the floor and the most headroom for future growth as 6GHz-capable hardware becomes standard.",
          },
        ],
      },
      {
        label: "The Result",
        heading: "The result",
        blocks: [
          {
            type: "p",
            text: "Ten access points, properly placed, properly channeled, with documented topology and a validated heat map on file. When the next round of hardware questions comes up, or a neighboring tenant changes their configuration, there is a baseline to compare against.",
          },
          {
            type: "p",
            text: "The heat map survey is not an optional step in a wireless deployment — it is how you confirm that what you installed actually does what you intended. Moving hardware is significantly cheaper before cables are run and APs are ceiling-mounted than after.",
          },
        ],
      },
    ],
    results: [
      "Eight aging access points replaced with new UniFi hardware with multi-gigabit wired uplinks",
      "Full wireless heat map conducted across 2.4, 5, and 6GHz bands using calibrated zigzag methodology",
      "Southwest 5GHz coverage gap identified and resolved — four APs repositioned, two added, fleet brought to ten",
      "Manual channel assignments hardcoded on all ten APs to avoid neighboring tenant interference on 5GHz",
      "6GHz confirmed near-zero interference across the entire floor — cleanest band by a significant margin",
      "Documented floor plan with final AP locations and port assignments on file as a baseline for future changes",
    ],
  },
];

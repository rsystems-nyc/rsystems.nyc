export type Deliverable = {
  title: string;
  description: string;
};

export type ServiceData = {
  slug: string;
  name: string;
  heroHeadline: string;
  tagline: string;
  challenge: string[];
  approach: string[];
  deliverables: Deliverable[];
};

export const servicesData: ServiceData[] = [
  {
    slug: "infrastructure",
    name: "Infrastructure Architecture & Design",
    heroHeadline: "Infrastructure that performs when it matters most.",
    tagline:
      "Datacenter, server, VMware, and hybrid cloud architecture — designed for high availability and built to scale.",
    challenge: [
      "Most mid-market organizations have infrastructure that grew organically — servers added as headcount grew, configurations undocumented, single points of failure hidden in plain sight. When something breaks, nobody knows why. When leadership asks what it would take to double in size, nobody has a clear answer.",
      "The gap between what you have and what you need is often larger than it looks. And the longer it goes unaddressed, the more expensive and disruptive it becomes to close.",
    ],
    approach: [
      "We start with a comprehensive infrastructure assessment — mapping what exists, identifying dependencies, and surfacing risks your team may already suspect but hasn't had time to quantify. From there, we design an architecture that reflects where your organization is going, not just where it is today.",
      "Every decision is made with high availability, redundancy, and operational simplicity in mind. We handle the design and the heavy lifting — server procurement, VMware configuration, datacenter layout. Your team handles day-to-day management once it's built right.",
    ],
    deliverables: [
      {
        title: "Infrastructure Assessment & Gap Analysis",
        description:
          "A full audit of your current environment: hardware, dependencies, single points of failure, and the delta between where you are and where you need to be.",
      },
      {
        title: "High-Availability Architecture Design",
        description:
          "A documented architecture designed for redundancy and uptime — built around your workloads, your team, and your growth trajectory.",
      },
      {
        title: "VMware & Virtualization Design",
        description:
          "Multi-host VMware environments with shared high-performance storage, Broadcom licensing guidance, and disaster recovery integration via Azure Site Recovery.",
      },
      {
        title: "Server Procurement & Deployment",
        description:
          "Hardware selection, TCO analysis, and deployment — Dell PowerEdge and enterprise-grade storage configured and validated before it reaches your environment.",
      },
    ],
  },
  {
    slug: "cloud",
    name: "Cloud Strategy & Migration",
    heroHeadline: "Cloud strategy built around your business, not your vendor's roadmap.",
    tagline:
      "Azure architecture, migration planning, and hybrid cloud design — scoped to your workloads and built to reduce long-term complexity.",
    challenge: [
      "Cloud migrations that are rushed or poorly scoped rarely deliver on their promise. Organizations end up with higher monthly costs, fragmented architecture, and a dependency on tools they don't fully understand. The technology is sound — the problem is that most migrations are treated as lift-and-shift projects rather than strategic infrastructure decisions.",
      "The result is a cloud environment that costs more than the servers it replaced and requires more management than anyone expected.",
    ],
    approach: [
      "We approach cloud through the lens of your business requirements — not a migration checklist. That means understanding your workloads, your team's capabilities, and your risk tolerance before recommending a path.",
      "Azure is the platform we know best: Entra, Intune, Virtual Desktop, Site Recovery, and hybrid connectivity. We design the architecture, plan the migration in phases, and model the cost before you commit to anything. The goal is a cloud environment your team can actually manage — not one that requires a specialist for every change.",
    ],
    deliverables: [
      {
        title: "Azure Architecture Design",
        description:
          "Custom Azure solutions designed around your workloads — from single-server migrations to multi-region architectures with geographic redundancy.",
      },
      {
        title: "Migration Planning & Phasing",
        description:
          "A sequenced migration plan that minimizes disruption, accounts for dependencies, and gives your team time to adapt at each stage.",
      },
      {
        title: "Azure Virtual Desktop & Hybrid Connectivity",
        description:
          "Virtual desktop infrastructure for distributed teams, hub-and-spoke WAN design for multi-site organizations, and seamless on-premises connectivity.",
      },
      {
        title: "Cost Modeling & Optimization",
        description:
          "Accurate cost projections before you migrate, with ongoing optimization to prevent cloud spend from drifting past budget.",
      },
    ],
  },
  {
    slug: "cybersecurity",
    name: "Cybersecurity & Compliance",
    heroHeadline: "Know where you're exposed before someone else finds out.",
    tagline:
      "Security assessments, firewall design, disaster recovery planning, and policy — built around how your organization actually operates.",
    challenge: [
      "Most organizations carry more security risk than their leadership realizes. Not because IT isn't paying attention — but because security gaps rarely announce themselves. Misconfigured permissions, outdated policies, and undocumented access accumulate quietly over time.",
      "When an incident happens, the cost in downtime, data loss, and client trust is rarely proportional to what a proper assessment would have cost. The question isn't whether your organization has gaps — it's whether you find them first.",
    ],
    approach: [
      "Our security work is anchored in the NIST Cybersecurity Framework, adapted to your specific environment and risk profile. We conduct a structured assessment that examines your current policies, access controls, network segmentation, and disaster recovery posture.",
      "The output isn't a generic report — it's a prioritized remediation roadmap your team can act on. We also handle the design work: firewall architecture, disaster recovery planning, and security policy that reflects how your organization actually operates rather than how a compliance checklist assumes it does.",
    ],
    deliverables: [
      {
        title: "NIST-Based Cybersecurity Assessment",
        description:
          "A structured assessment of your current security posture against the NIST framework — identifying gaps, prioritizing risk, and producing a clear remediation roadmap.",
      },
      {
        title: "Firewall Design & Network Segmentation",
        description:
          "SonicWall firewall architecture with high availability, multi-site design, advanced segmentation, and traffic policies tuned to your environment.",
      },
      {
        title: "Disaster Recovery Plan Development",
        description:
          "RTO and RPO definitions, step-by-step recovery procedures, backup and redundancy recommendations, and a tested DR plan your team can execute under pressure.",
      },
      {
        title: "Security Policy Creation & Review",
        description:
          "Documented security policies balanced against operational reality — designed to be followed, not filed away.",
      },
    ],
  },
  {
    slug: "identity",
    name: "Identity & Access Management",
    heroHeadline: "Identity is your perimeter. Build it like one.",
    tagline:
      "Entra, Intune, and JumpCloud implementations with Zero Trust policy design and automated onboarding and offboarding workflows.",
    challenge: [
      "The average Microsoft 365 organization runs Entra on near-default settings — conditional access isn't configured, MFA isn't enforced consistently, and device compliance is largely on the honor system. That's a significant exposure for any organization handling sensitive data or subject to regulatory requirements.",
      "At the same time, onboarding a new hire or offboarding a departing employee is often a manual, inconsistent process that creates access gaps and audit exposure. Every exception is a liability.",
    ],
    approach: [
      "We implement identity and device management with a Zero Trust foundation: every user, every device, verified. That means conditional access policies tuned to your actual environment, Autopilot and Apple ADE zero-touch enrollment for new hardware, and platform SSO across Mac and Windows.",
      "For onboarding and offboarding, we build the actual automated workflows — not a policy document that describes what should happen, but a system that ensures it does, every time. We transfer knowledge to your team so they can manage and extend what we build.",
    ],
    deliverables: [
      {
        title: "Entra & Intune Implementation",
        description:
          "Full Microsoft Entra and Intune deployment — identity management, device compliance policies, and conditional access tuned to your environment.",
      },
      {
        title: "Zero Trust Policy Design",
        description:
          "Conditional access policies, MFA enforcement, and security baselines built on Zero Trust principles — with migration paths from on-premises to cloud-native or hybrid.",
      },
      {
        title: "Autopilot, ADE & Device Enrollment",
        description:
          "Zero-touch device enrollment via Autopilot (Windows) and Apple ADE and Business Manager (Mac and iOS), application deployment strategies, and platform SSO for both Mac and Windows environments.",
      },
      {
        title: "Automated Onboarding & Offboarding",
        description:
          "Standardized, automated hire and termination workflows with ticketing integration — so access is provisioned and revoked completely, consistently, every time.",
      },
    ],
  },
  {
    slug: "virtual-cto",
    name: "Virtual CTO / CISO",
    heroHeadline: "Senior technical leadership, engaged at the level your organization needs.",
    tagline:
      "Fractional CTO and CISO engagements for organizations that need executive-level technology leadership without a full-time hire.",
    challenge: [
      "Organizations often sit in a difficult position: the work is complex enough to need senior technical leadership, but the overhead of a $250K+ full-time executive hire doesn't make sense. The result is a gap between business strategy and technology execution that typically shows up as deferred decisions, vendor-driven architecture, and a leadership team that isn't confident in its technology roadmap.",
      "Your IT team is capable. What's missing is someone who can sit across from your CFO, ask the right questions, and translate what's technically possible into what the organization should actually do.",
    ],
    approach: [
      "RSystems engages as your fractional technical executive — attending leadership meetings, participating in board-level discussions, and serving as the senior technical voice your organization needs. We translate business goals into technology decisions, evaluate vendors on your behalf, and build multi-year roadmaps that align IT investment with organizational direction.",
      "The engagement is designed to complement your existing IT team or MSP partner, not replace them. We handle the strategy and architecture decisions that require senior expertise. They handle execution and day-to-day operations.",
    ],
    deliverables: [
      {
        title: "Technology Roadmap Development",
        description:
          "A multi-year technology roadmap aligned to your business goals — prioritized, budgeted, and presented in terms your leadership team can act on.",
      },
      {
        title: "C-Suite & Board Advisory",
        description:
          "Direct participation in leadership and board meetings — translating technical context into business language and representing the technology function at the executive level.",
      },
      {
        title: "Vendor Evaluation & Contract Review",
        description:
          "Independent evaluation of technology vendors, MSP partners, and software platforms — with contract review to ensure terms reflect your interests.",
      },
      {
        title: "IT Budget Planning & Prioritization",
        description:
          "Structured IT budget development with ROI framing — so technology investment decisions are made with the same rigor as any other capital allocation.",
      },
    ],
  },
  {
    slug: "network",
    name: "Network Design & Engineering",
    heroHeadline: "A network designed from first principles, not accumulated over time.",
    tagline:
      "Switching, routing, firewall, and WiFi infrastructure — designed, pre-configured, deployed, and documented for enterprise environments.",
    challenge: [
      "Most office networks weren't designed — they were assembled. Equipment added as headcount grew, configurations never revisited, documentation that doesn't exist or doesn't reflect reality. The result is an environment that's difficult to troubleshoot, impossible to scale cleanly, and harder to secure than it needs to be.",
      "Performance problems get blamed on bandwidth when the real issue is architecture. Outages are resolved by rebooting equipment nobody fully understands. The network becomes a constraint on the organization rather than infrastructure it can depend on.",
    ],
    approach: [
      "We design network infrastructure from the ground up using Cisco hardware — Business series for cost-effective deployments, Catalyst series for mission-critical environments requiring hot-swappable redundancy. Every engagement starts with an assessment of what exists, followed by a clean architecture design: VLAN segmentation, proper uplink sizing, redundant power, and a rack layout that makes operational sense.",
      "Equipment is pre-configured and validated in-house before deployment to minimize on-site risk and disruption. Everything is documented — every connection, every VLAN, every configuration decision — so your team can manage and extend the network with confidence.",
    ],
    deliverables: [
      {
        title: "Network Architecture & VLAN Design",
        description:
          "Clean architecture with proper traffic segmentation — guest, internal, management, and voice networks separated logically and enforced at the switch level.",
      },
      {
        title: "Cisco Hardware Selection & Deployment",
        description:
          "Hardware specification, procurement, pre-configuration, and deployment — Cisco Business or Catalyst series matched to your environment and uptime requirements.",
      },
      {
        title: "Redundancy & Failover Configuration",
        description:
          "Spanning Tree Protocol, link aggregation, redundant power, and failover design — so a single hardware failure doesn't become an outage.",
      },
      {
        title: "WiFi Assessment & Full Documentation",
        description:
          "Access point placement, coverage analysis, and performance validation — plus complete network documentation your team can actually use.",
      },
    ],
  },
  {
    slug: "ai",
    name: "AI Transformation",
    heroHeadline: "AI strategy grounded in what your organization can actually execute.",
    tagline:
      "AI readiness assessments, tooling strategy, workflow automation, and organizational adoption planning for teams ready to operationalize AI.",
    challenge: [
      "Every organization is under pressure to have an AI strategy. Most don't have a clear picture of where AI creates genuine value versus where it adds cost and complexity. The risk isn't moving too slowly — it's committing to tools and workflows before you understand the operational implications.",
      "Poorly adopted AI creates new overhead rather than reducing it. Models hallucinate in high-stakes workflows. Teams adopt consumer tools without governance. The organization ends up with fragmented AI usage and no coherent strategy.",
      "The deeper challenge is structural. As AI moves from assistive to agentic — from answering questions to taking actions — the access model that governs those actions becomes a critical security consideration. An agent with write access to your systems, APIs, or data can operate at machine speed with no built-in instinct for what it shouldn't touch. Most organizations haven't designed permission structures for AI agents. Most haven't thought about what least-privilege means for a system that doesn't have a job title.",
    ],
    approach: [
      "We start with a readiness assessment: your current workflows, your data environment, your team's capacity to adopt new tooling, and your governance posture. From there, we identify the highest-value use cases — the specific processes where AI reduces meaningful friction — and build a phased adoption plan.",
      "We're tool-agnostic, though our deepest hands-on experience is with Anthropic's Claude platform — from API integration to enterprise deployment and agentic workflow design. Our job is to find the right fit for your organization, not to push a platform. Adoption planning is part of every engagement because technology without organizational change rarely sticks.",
      "For agentic deployments, we design the permissions architecture before the system goes live. That means scoping what each agent can access, modeling identity and delegation, building approval checkpoints for high-stakes actions, and establishing audit trails that make agent behavior reviewable. The goal is AI that operates within well-defined guardrails — not because it's told to behave, but because the infrastructure it runs on doesn't give it any other option.",
    ],
    deliverables: [
      {
        title: "AI Readiness Assessment",
        description:
          "An honest evaluation of your organization's current state — workflows, data infrastructure, governance, and team capacity — against what AI adoption actually requires.",
      },
      {
        title: "Use Case Identification & Prioritization",
        description:
          "A prioritized map of AI opportunities specific to your organization, ranked by impact and implementation complexity — so you start where it matters.",
      },
      {
        title: "Tooling Strategy & Vendor Evaluation",
        description:
          "Independent evaluation of AI platforms and tools matched to your identified use cases — with security, compliance, and total cost of ownership factored in.",
      },
      {
        title: "Workflow Automation & Adoption Planning",
        description:
          "Automation design for high-value workflows, plus a structured adoption plan that accounts for change management, training, and governance from day one.",
      },
      {
        title: "Agentic Access & Permissions Design",
        description:
          "A structured permissions model for agentic AI deployments — scoping what each system can access, defining delegation and identity boundaries, designing guardrails for high-stakes actions, and establishing audit frameworks that keep agent behavior reviewable and within operational limits.",
      },
    ],
  },
];

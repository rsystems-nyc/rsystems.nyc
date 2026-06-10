export type IndustrySection = {
  eyebrow: string;
  heading: string;
  paragraphs: string[];
};

export type RelatedWorkItem = {
  href: string;
  label: string;
  placeholder?: boolean;
};

export type Industry = {
  slug: string;
  cardName: string;
  cardDescriptor: string;
  headline: string;
  subtitle: string;
  lead: string;
  sections: IndustrySection[];
  whatWeBring: string[];
  platforms: string[];
  relatedWork?: RelatedWorkItem[];
  seoTitle: string;
  seoDescription: string;
  jsonLdKnowsAbout: string[];
};

export const industriesData: Industry[] = [
  {
    slug: "startups",
    cardName: "Startups & High-Growth",
    cardDescriptor: "Infrastructure that scales from seed through Series C",
    headline: "Startups & High-Growth Companies",
    subtitle: "The right infrastructure for where you are — and where you're going",
    lead: "The tools that get a startup to Series A are rarely the tools that carry it through Series C. We work with founders and operators at every stage, from early prototyping to rapid scale — helping organizations build infrastructure that won't become a liability when growth accelerates or a compliance audit arrives.",
    sections: [
      {
        eyebrow: "The Funding Inflection",
        heading: "Knowing when to shift gears",
        paragraphs: [
          "Startup mode optimizes for speed. Enterprise mode optimizes for security, compliance, and scale. The gap between them — usually triggered by a funding round, a new enterprise customer, or an unexpected compliance requirement — is where infrastructure debt comes due all at once. We've helped organizations navigate that transition: auditing what exists, identifying what needs to change, and building a roadmap for getting from improvised to institutional without disrupting the operation that's funding the change.",
        ],
      },
      {
        eyebrow: "Compliance Readiness",
        heading: "The requirements you didn't plan for",
        paragraphs: [
          "Enterprise customers and investors ask hard questions about security posture. Compliance frameworks — SOC 2 Type II, HIPAA, GDPR — each have specific technical controls that need to be in place and documented before an audit, not assembled during one. We're familiar with the infrastructure controls these frameworks require and how to build toward them practically.",
        ],
      },
      {
        eyebrow: "Budget Forecasting",
        heading: "What infrastructure costs as you grow",
        paragraphs: [
          "Headcount is the largest variable in IT cost, but it's not the only one. Cloud spend, SaaS licensing, device refresh cycles, and security tooling all scale with growth — and they scale differently. We help founders and finance teams build IT cost models that account for rapid growth and high turnover without containing surprises.",
        ],
      },
    ],
    whatWeBring: [
      "Infrastructure assessment and technical debt mapping at any growth stage",
      "Familiarity with AWS, GCP, and Azure startup credit programs and what's available before you start paying full rate",
      "Google Workspace and Microsoft 365 deployment, migration, and right-sizing",
      "Device management pipelines that scale from 10 machines to 10,000",
      "Identity and access management: Entra ID, Okta, JumpCloud",
      "Onboarding and offboarding for high-turnover environments",
      "Budget modeling for IT cost as headcount and compliance requirements evolve",
      "Fractional IT leadership for pre-hire stages",
    ],
    platforms: ["AWS", "GCP", "Azure", "Google Workspace", "Microsoft 365", "Okta", "JumpCloud", "Entra ID", "Terraform", "1Password", "GitHub"],
    seoTitle: "IT for Startups & High-Growth Companies | RSystems NYC",
    seoDescription: "RSystems helps startups build infrastructure that scales — from early prototyping and rapid growth to SOC 2 readiness, compliance frameworks, and the shift from startup tools to enterprise systems at Series A and beyond.",
    jsonLdKnowsAbout: ["Startup Infrastructure", "SOC 2 Compliance", "Cloud Architecture", "Device Management", "Identity Management", "Compliance Readiness"],
  },
  {
    slug: "video-post-production",
    cardName: "Video & Post-Production",
    cardDescriptor: "High-bandwidth workflows, shared storage, and finishing infrastructure",
    headline: "Video & Post-Production",
    subtitle: "Infrastructure for high-bandwidth, deadline-driven creative workflows",
    lead: "Post-production is among the most demanding environments in IT. The datasets are massive, the deadlines are absolute, and the hardware is specialized. We're familiar with the infrastructure that professional post-production runs on — from dailies pipelines and shared editorial storage to finishing rooms and distribution — and how to design around the specific constraints of these workflows.",
    sections: [
      {
        eyebrow: "Storage & Throughput",
        heading: "When the dataset doesn't wait",
        paragraphs: [
          "Raw camera formats produce files measured in terabytes per shooting day. Assistant editors need dailies ingested and available rapidly. Colorists need frame-accurate, low-latency access to the same media. These workflows demand storage architecture — typically Fibre Channel or high-speed NAS — designed for throughput, not just capacity. We understand the shared storage requirements of simultaneous editorial, color, and finishing access, and how to think about digital asset management and archive alongside active project storage.",
        ],
      },
      {
        eyebrow: "Color & Finishing",
        heading: "The infrastructure behind the image",
        paragraphs: [
          "Environments running DaVinci Resolve, Autodesk Flame, and similar applications require more than fast storage. Dedicated GPU resources, precision power conditioning, video routing infrastructure — built on hardware from Blackmagic Design, AJA, or ATTO — and calibrated reference monitoring all factor into a finishing room that performs. We understand these environments and how to design the infrastructure layer around them.",
        ],
      },
      {
        eyebrow: "Distribution",
        heading: "DCP and delivery",
        paragraphs: [
          "Theatrical distribution requires writing content to Digital Cinema Packages at precise specifications. Managing the pipeline from finished timeline to distributed format is a distinct technical discipline we're familiar with, alongside the broader range of broadcast and streaming delivery requirements that professional post-production supports.",
        ],
      },
      {
        eyebrow: "Remote Collaboration",
        heading: "Distributed post-production",
        paragraphs: [
          "Remote post workflows — editors and colorists in different locations, clients reviewing from anywhere — depend on infrastructure that gives everyone access to the same media. We're familiar with the range of distributed file access systems used in professional post environments and the network requirements they place on the infrastructure beneath them.",
        ],
      },
    ],
    whatWeBring: [
      "Familiarity with shared storage architecture: Fibre Channel, 10/25/100G NAS, SAN design",
      "Understanding of digital asset management and archive workflows (including LTO)",
      "Knowledge of video routing hardware: Blackmagic Design, AJA, ATTO",
      "Experience supporting environments running DaVinci Resolve and Autodesk Flame",
      "GPU workstation and server infrastructure for rendering and finishing",
      "Understanding of DCP mastering and distribution workflows",
      "Familiarity with distributed file access for remote post-production",
    ],
    platforms: ["DaVinci Resolve", "Autodesk Flame", "Blackmagic Design", "AJA", "ATTO", "Fibre Channel", "LTO", "Synology", "Apple Silicon"],
    seoTitle: "IT for Video & Post-Production | RSystems NYC",
    seoDescription: "RSystems understands the infrastructure requirements of professional post-production — Fibre Channel and NAS storage, Blackmagic and AJA video routing, DaVinci Resolve and Flame environments, DCP workflows, LTO archive, and distributed file access for remote teams.",
    jsonLdKnowsAbout: ["Post-Production Infrastructure", "Fibre Channel Storage", "DaVinci Resolve", "Autodesk Flame", "Video Routing", "DCP Distribution", "LTO Archive"],
  },
  {
    slug: "financial-services",
    cardName: "Financial Services",
    cardDescriptor: "Regulated infrastructure where latency, security, and audit trails are non-negotiable",
    headline: "Financial Services",
    subtitle: "Regulated infrastructure where latency, security, and audit trails are non-negotiable",
    lead: "Financial services organizations operate under some of the tightest technical constraints in any industry. Regulatory frameworks demand immutable audit trails. Trading operations demand low-latency connectivity. Security controls need to be both rigorous and demonstrable. We have direct experience designing and operating infrastructure for quantitative trading firms and financial services organizations where all three of those requirements hold simultaneously.",
    sections: [
      {
        eyebrow: "Compliance & Auditability",
        heading: "FINRA, SEC, and the records regulators want",
        paragraphs: [
          "Financial regulators expect specific technical controls and specific documentation. AWS CloudTrail, immutable logging, API audit trails, and access control records need to be in place before an examination. We understand how to design environments where auditability is a built-in property, and we're familiar with the compliance frameworks that govern broker-dealers, investment advisors, and trading firms under FINRA and SEC oversight.",
        ],
      },
      {
        eyebrow: "Trading Infrastructure",
        heading: "Latency, reliability, and the cost of a missed tick",
        paragraphs: [
          "For quantitative trading firms, infrastructure reliability is a financial condition. Connectivity to market data providers and execution partners needs to be encrypted, low-latency, and redundant. We've designed the network and security layer for firms where trade flow integrity is the primary concern — including encrypted tunnel connectivity that never traverses the public internet unprotected.",
        ],
      },
      {
        eyebrow: "Security Controls",
        heading: "Defense in depth for regulated environments",
        paragraphs: [
          "Financial services environments require layered security controls — perimeter firewalls, network segmentation, encrypted connectivity, endpoint management, and monitoring across every account. We're familiar with SonicWall and Fortinet FortiGate firewalls in these contexts and with building environments in Terraform so they're auditable and reproducible by design.",
        ],
      },
    ],
    whatWeBring: [
      "Multi-account AWS, Azure, and GCP architecture for trading and financial services environments",
      "Familiarity with CloudTrail, immutable S3 logging, and audit trail design",
      "SonicWall and Fortinet FortiGate firewall experience in high-security environments",
      "Encrypted VPN connectivity to market data providers and execution partners",
      "Network high availability and failover design",
      "Infrastructure as code (Terraform) — auditable, version-controlled environments",
      "Network segmentation and access control",
      "FINRA and SEC technical compliance familiarity",
    ],
    platforms: ["AWS", "Azure", "GCP", "Terraform", "SonicWall", "Fortinet FortiGate", "Cisco", "1Password"],
    relatedWork: [
      { href: "/case-studies/duality-group", label: "Built for Scale — Duality Group" },
    ],
    seoTitle: "IT for Financial Services | RSystems NYC",
    seoDescription: "RSystems has experience with regulated cloud and network infrastructure for financial services firms — FINRA and SEC compliance, AWS audit trails, encrypted connectivity for quantitative trading operations, and SonicWall and FortiGate firewall design.",
    jsonLdKnowsAbout: ["Financial Services Infrastructure", "FINRA Compliance", "SEC Compliance", "Quantitative Trading Infrastructure", "Immutable Audit Logging", "Firewall Design", "Network Security"],
  },
  {
    slug: "architecture-design",
    cardName: "Architecture & Design",
    cardDescriptor: "GPU-intensive workflows, BIM storage, and AutoCAD infrastructure",
    headline: "Architecture & Design",
    subtitle: "High-performance infrastructure for GPU-intensive workflows and large datasets",
    lead: "Architecture and design practices run some of the most demanding desktop software in any industry. AutoCAD, Revit, BIM models, and 3D renderings push hardware to its limits — and the workflows that produce them depend on shared file access, reliable licensing, and enough compute to keep projects moving. We have direct experience building the infrastructure that supports these workflows at professional scale, on any mix of hardware.",
    sections: [
      {
        eyebrow: "GPU & Compute",
        heading: "Hardware the software actually needs",
        paragraphs: [
          "AutoCAD, Revit, and visualization tools like Enscape are GPU-intensive. Running them on underpowered hardware — or over a remote connection that doesn't leverage the GPU — produces an experience that undermines the workflow. We understand how to spec and design the compute layer correctly: local GPU workstations, cloud-hosted GPU VMs with hardware-accelerated remote display, or hybrid approaches that give different team members what they actually need.",
        ],
      },
      {
        eyebrow: "Shared Storage & File Locking",
        heading: "Large files and the complications of concurrent access",
        paragraphs: [
          "BIM models and AutoCAD assemblies are large and frequently accessed by multiple team members simultaneously. File locking, versioning, and concurrent access behavior vary by application and storage platform in ways that cause real problems if the infrastructure isn't designed around them. We're familiar with these constraints and how to think about storage architecture that handles them.",
        ],
      },
      {
        eyebrow: "Licensing",
        heading: "Autodesk and the complexity of design software",
        paragraphs: [
          "Autodesk's subscription and licensing models are among the most complex in enterprise software. Flex tokens, network licenses, cloud entitlements, and the interactions between them require careful management. We're familiar with the landscape and can help practices think through right-sizing their licensing spend.",
        ],
      },
    ],
    whatWeBring: [
      "Understanding of GPU workstation requirements for AutoCAD, Revit, and BIM workflows",
      "Familiarity with Azure Virtual Desktop and hardware-encoded remote display for cloud-hosted design workflows",
      "Experience with shared storage design for large datasets with concurrent access requirements",
      "Familiarity with Autodesk licensing models and Bluebeam Revu deployment",
      "High-performance LAN design for design workflows",
      "Mac-to-Windows bridging for mixed-platform practices",
    ],
    platforms: ["AutoCAD", "Autodesk Revit", "Bluebeam Revu", "Enscape", "Azure Virtual Desktop", "Microsoft 365", "Synology", "Dell Precision", "Apple Silicon"],
    relatedWork: [
      { href: "/case-studies/windows-tools-for-a-mac-design-firm", label: "GPU Workstations for a Mac Architecture Firm" },
      { href: "/case-studies/redundancy-by-design", label: "Zero Downtime Since Deployment — Enterprise Infrastructure for a Leading NYC Architecture Firm" },
    ],
    seoTitle: "IT for Architecture & Design Firms | RSystems NYC",
    seoDescription: "RSystems understands the infrastructure requirements of architecture and design practices — GPU workstations, cloud-hosted AutoCAD and Revit on Azure Virtual Desktop, shared storage for large BIM datasets, and Autodesk license management.",
    jsonLdKnowsAbout: ["Architecture Firm IT", "GPU Workstations", "AutoCAD Infrastructure", "Revit Infrastructure", "BIM Storage", "Azure Virtual Desktop", "Autodesk Licensing"],
  },
  {
    slug: "nonprofits",
    cardName: "Nonprofits & Mission-Driven",
    cardDescriptor: "Enterprise-grade technology on a mission budget",
    headline: "Nonprofits & Mission-Driven Organizations",
    subtitle: "Enterprise-grade technology on a mission budget",
    lead: "Nonprofits face the same technical challenges as any organization their size — but with smaller budgets, board-driven approval processes, and grant cycles that shape every procurement decision. We have extensive experience working with mission-driven organizations, and we're familiar with the funding programs, discount structures, and governance constraints that make nonprofit IT its own discipline.",
    sections: [
      {
        eyebrow: "Budget & Governance",
        heading: "Building a technology roadmap that survives board approval",
        paragraphs: [
          "Nonprofit IT procurement runs through boards, grant requirements, and fiscal year constraints that are different from any commercial environment. We're experienced in helping IT directors and executive teams build multi-year technology roadmaps and budget proposals that align with organizational priorities and can hold up to board scrutiny.",
        ],
      },
      {
        eyebrow: "Discounts & Programs",
        heading: "The tools you may not know you qualify for",
        paragraphs: [
          "TechSoup, Google Workspace for Nonprofits, Microsoft 365 Nonprofit, and a wide range of software and security vendors offer deep discounts or free licensing to qualifying organizations. Navigating eligibility, enrollment, and the ongoing management of these programs takes attention — but the savings are substantial. We make sure our nonprofit clients are getting everything available to them.",
        ],
      },
      {
        eyebrow: "Device & Identity Management",
        heading: "Modern management for distributed teams",
        paragraphs: [
          "Many nonprofits operate across multiple locations with staff who aren't in a central office. Modern device management — Intune, Autopilot, Apple Business Manager, JumpCloud, Entra ID — makes it possible to provision and manage workstations across a distributed organization without manual configuration at every site.",
        ],
      },
    ],
    whatWeBring: [
      "Multi-year IT budget modeling and board-ready cost proposals",
      "TechSoup, Google Workspace for Nonprofits, and Microsoft 365 Nonprofit program guidance",
      "Intune, Autopilot, Apple Business Manager (ADE), and JumpCloud device management for distributed organizations",
      "Identity and access management: Entra ID, JumpCloud, MFA, conditional access",
      "Managed support for multi-location environments",
      "Grant-aligned procurement and documentation",
    ],
    platforms: ["Microsoft 365 Nonprofit", "Google Workspace for Nonprofits", "TechSoup", "Microsoft Intune", "Windows Autopilot", "Apple Business Manager", "JumpCloud", "Entra ID", "1Password", "FreshService"],
    relatedWork: [
      { href: "/case-studies/easterseals-nj-intune", label: "Automating Device Management — Easterseals NJ" },
      { href: "/case-studies/charity-water-gala", label: "Keeping a Gala Online — charity:water" },
      { href: "/case-studies/little-island", label: "Little Island" },
      { href: "/case-studies/audubon-corkscrew", label: "The Network Behind the Boardwalk — Corkscrew Swamp Sanctuary" },
      { href: "/case-studies/audubon-azure", label: "Replacing a 10-Year-Old Data Center — National Audubon Society" },
    ],
    seoTitle: "IT for Nonprofits & Mission-Driven Organizations | RSystems NYC",
    seoDescription: "RSystems provides IT leadership and managed services for nonprofits — TechSoup and Microsoft/Google nonprofit programs, device management, multi-year technology roadmaps, and support for distributed, mission-driven organizations.",
    jsonLdKnowsAbout: ["Nonprofit IT", "TechSoup Programs", "Microsoft Nonprofit", "Google Workspace Nonprofit", "Intune Device Management", "Board-Ready IT Budgets"],
  },
  {
    slug: "event-production",
    cardName: "Event Production",
    cardDescriptor: "Temporary infrastructure that performs under pressure and disappears cleanly",
    headline: "Event Production",
    subtitle: "Temporary infrastructure that performs under pressure — and disappears cleanly when it's over",
    lead: "Events are the most unforgiving environment in IT. The infrastructure is temporary, the timeline is fixed, the load is unpredictable, and there's no recourse after doors open. We have direct experience designing and operating event network infrastructure for large-scale galas, immersive festivals, and multi-building campus events — and we're familiar with the full production environment these events operate in.",
    sections: [
      {
        eyebrow: "Wireless at Scale",
        heading: "Density, interference, and the spike you can't predict",
        paragraphs: [
          "High-density event wireless in urban environments is a different discipline from standard networking. Saturated RF spectrum, hundreds of devices associating simultaneously, and sharp traffic spikes at specific program moments require equipment and configuration sized for the peak, not the average. We've designed, tested, and operated event wireless networks in these conditions.",
        ],
      },
      {
        eyebrow: "Production Integration",
        heading: "Gaff tape, radios, and being part of the production team",
        paragraphs: [
          "A good event network team is part of the production team, not a separate department. We coordinate with event producers, understand the run-of-show, know which moments will drive traffic spikes, and stay on radio throughout. We're familiar with the production environment — the pace, the communication style, the improvisation that live events require.",
        ],
      },
      {
        eyebrow: "Signal & Audio",
        heading: "Dante, DMX, and the networks that run a production",
        paragraphs: [
          "Modern event productions increasingly run on IP-based signal infrastructure. Dante audio networking distributes audio over Ethernet with sample-accurate timing. DMX control for lighting runs alongside data on managed networks. We understand how these systems coexist with high-density Wi-Fi and production data traffic, and the network design requirements that makes that possible.",
        ],
      },
    ],
    whatWeBring: [
      "High-density event wireless design and on-site operation",
      "On-premises wireless controllers for reliability without cloud dependencies during the event",
      "Traffic modeling and peak-load planning",
      "Multi-building and outdoor network extensions: fiber, copper, and wireless",
      "Familiarity with Dante audio networking and DMX lighting control infrastructure",
      "On-site coordination with event production teams (on radio)",
      "Temporary equipment deployment and clean strike",
    ],
    platforms: ["Ruckus", "SonicWall", "Fortinet FortiGate", "Cisco", "Dante", "Ubiquiti", "APC"],
    relatedWork: [
      { href: "/case-studies/charity-water-gala", label: "The Night $4.6M Moved Over Wi-Fi — charity:water" },
      { href: "/case-studies/fost-fest", label: "Keeping a Festival Online — FoST Fest" },
    ],
    seoTitle: "Event Network Infrastructure | RSystems NYC",
    seoDescription: "RSystems designs and operates event network infrastructure — high-density Ruckus wireless, Dante audio networking, DMX coexistence, on-site production coordination and radio, for galas, festivals, and campus events.",
    jsonLdKnowsAbout: ["Event Network Infrastructure", "High-Density Wireless", "Dante Audio Networking", "DMX Lighting", "Ruckus Wireless", "Event Production"],
  },
  {
    slug: "parks-recreation",
    cardName: "Parks & Recreation",
    cardDescriptor: "Outdoor infrastructure, seasonal workforces, and connected park systems",
    headline: "Parks & Recreation",
    subtitle: "Outdoor infrastructure, seasonal workforces, and the systems that run a park",
    lead: "Parks and recreation organizations operate in environments most IT infrastructure wasn't designed for — outdoor access points across trails and pavilions, seasonal workers who need accounts for a few months, building management systems that need to talk to weather stations and irrigation controllers, and public Wi-Fi that gets its hardest use on its most unpredictable days. We have experience designing and managing infrastructure in these environments.",
    sections: [
      {
        eyebrow: "Seasonal Workforce",
        heading: "Provisioning for staff who come and go",
        paragraphs: [
          "High seasonal turnover creates a provisioning and deprovisioning challenge that compounds every year if it isn't automated. Temporary accounts that persist past their season, devices that aren't recovered, access that isn't revoked — all of these are both security risks and administrative overhead. We understand how to build the automation that makes seasonal workforce management reliable.",
        ],
      },
      {
        eyebrow: "Outdoor Networking",
        heading: "Coverage across grounds, trails, and facilities",
        paragraphs: [
          "Outdoor wireless requires different hardware, different placement, and different power considerations than indoor deployments. Point-to-point wireless can extend connectivity to remote buildings without trenching. Public Wi-Fi for visitors requires guest network isolation and appropriate use policies. We're familiar with the hardware and design approaches that work in outdoor environments.",
        ],
      },
      {
        eyebrow: "Connected Systems",
        heading: "BMS, irrigation, weather stations, and the operational layer",
        paragraphs: [
          "Modern park operations depend on systems that generate and consume data continuously — building management systems, HVAC controls, irrigation controllers, weather stations, visitor counting, time clock systems. Getting these onto a properly segmented network, accessible to operations staff without exposure to the broader environment, is an infrastructure challenge we're familiar with.",
        ],
      },
    ],
    whatWeBring: [
      "Familiarity with outdoor and weatherproof wireless infrastructure requirements",
      "Understanding of point-to-point wireless for remote facilities",
      "Public Wi-Fi with guest isolation",
      "Seasonal workforce provisioning and deprovisioning",
      "IoT network segmentation for BMS and operational systems",
      "Time clock and HRIS system integration awareness",
      "Multi-year hardware budgeting for outdoor environments",
    ],
    platforms: ["Ruckus", "Ubiquiti", "Cisco", "Meraki", "JumpCloud", "Microsoft Intune", "Cradlepoint"],
    seoTitle: "IT for Parks & Recreation | RSystems NYC",
    seoDescription: "RSystems has experience with IT and networking for parks and recreation organizations — outdoor wireless, seasonal workforce automation, public Wi-Fi, BMS and IoT network integration, and multi-year hardware planning.",
    jsonLdKnowsAbout: ["Parks IT Infrastructure", "Outdoor Wireless Networking", "Seasonal Workforce Automation", "IoT Network Segmentation", "Building Management Systems"],
  },
  {
    slug: "education",
    cardName: "Education",
    cardDescriptor: "1:1 devices, campus wireless, and E-rate expertise",
    headline: "Education",
    subtitle: "1:1 device programs, campus wireless, and the infrastructure that keeps a school running",
    lead: "Schools have some of the most complex IT environments of any organization their size — large fleets of student devices, high-density campus wireless, PA and camera systems, and a user population that ranges from early learners to faculty. We have experience with educational technology environments and the funding programs that make them affordable.",
    sections: [
      {
        eyebrow: "Device Programs",
        heading: "1:1 Chromebooks, iPads, and the management layer behind them",
        paragraphs: [
          "Large-scale student device programs — whether Chromebook fleets managed through Google Admin, iOS devices enrolled via Apple Device Enrollment, or Windows devices through Intune — each have their own enrollment model and policy requirements. We're familiar with these platforms and how to think about the management layer at scale.",
        ],
      },
      {
        eyebrow: "Campus Infrastructure",
        heading: "Wireless, PA, and the systems students and staff depend on",
        paragraphs: [
          "High-density campus wireless — classrooms full of devices connecting simultaneously — requires careful planning. PA and intercom systems, camera infrastructure, access control, and clock systems often share the same physical network and require proper segmentation to coexist. We understand these requirements and how they interact.",
        ],
      },
      {
        eyebrow: "Funding Programs",
        heading: "E-rate and the free tools available to schools",
        paragraphs: [
          "The FCC's E-rate program provides substantial discounts on broadband and networking for eligible schools and libraries. Google Workspace for Education and Microsoft Education offer free or deeply discounted platforms. We're familiar with what's available and how to help schools access it.",
        ],
      },
    ],
    whatWeBring: [
      "Familiarity with Chromebook management via Google Admin",
      "iOS and iPadOS deployment via Apple School Manager and ADE",
      "Windows Intune and Autopilot, and Apple School Manager and ADE for educational environments",
      "High-density campus wireless design awareness",
      "Understanding of PA, camera, and access control network integration",
      "E-rate program familiarity",
      "Google Workspace for Education and Microsoft 365 Education experience",
    ],
    platforms: ["Google Workspace for Education", "Microsoft 365 Education", "Apple School Manager", "Apple ADE", "Microsoft Intune", "Ruckus", "Ubiquiti", "Cisco"],
    seoTitle: "IT for Schools & Educational Institutions | RSystems NYC",
    seoDescription: "RSystems has experience with educational technology infrastructure — 1:1 Chromebook and iPad programs, campus wireless, PA and camera system integration, E-rate funding, and Google Workspace for Education.",
    jsonLdKnowsAbout: ["Educational Technology", "1:1 Device Programs", "E-rate Program", "Campus Wireless", "Chromebook Management", "Google Workspace for Education"],
  },
  {
    slug: "software-engineering",
    cardName: "Software Engineering",
    cardDescriptor: "Infrastructure that speaks your engineering team's language",
    headline: "Software Engineering",
    subtitle: "Infrastructure that speaks the same language as your engineering team",
    lead: "Software engineering organizations have specific expectations for their infrastructure — version-controlled, reproducible, automated, and as consistent across environments as the code that runs on it. We're comfortable working with engineering teams using the tools they already use, from Terraform and GitHub to containerized workloads and cloud-native architectures across AWS, Azure, and GCP.",
    sections: [
      {
        eyebrow: "Infrastructure as Code",
        heading: "Environments that live in source control",
        paragraphs: [
          "Infrastructure that exists only in the console can't be reproduced, audited, or peer-reviewed. We're experienced with Terraform and CloudFormation — building VPCs, subnets, security groups, IAM policies, and everything else that defines an environment in code, version-controlled and deployable from scratch.",
        ],
      },
      {
        eyebrow: "Developer Tooling",
        heading: "Git, CI/CD, containers, and the platform engineers build on",
        paragraphs: [
          "Developer infrastructure — GitHub and GitLab, CI/CD pipelines, container registries, secrets management, serverless functions — needs to be set up by people who understand how engineering teams actually work. We're familiar with these environments and how to manage them without adding friction to development workflows.",
        ],
      },
      {
        eyebrow: "Data Infrastructure",
        heading: "Databases, data warehouses, and the pipelines between them",
        paragraphs: [
          "Modern data stacks — Snowflake, RDS, DynamoDB, BigQuery — need the right access controls, backup posture, and network design to be both useful and secure. We're familiar with these systems and the infrastructure decisions around them.",
        ],
      },
    ],
    whatWeBring: [
      "Terraform and CloudFormation infrastructure as code experience",
      "Multi-account and multi-environment architecture across AWS, Azure, and GCP",
      "Familiarity with GitHub, GitLab, and CI/CD pipeline infrastructure",
      "Container platform awareness: ECS, EKS, Fargate, Kubernetes",
      "Serverless architecture familiarity",
      "Snowflake and data warehouse infrastructure knowledge",
      "Secrets management and developer access controls",
      "Network security for development environments",
    ],
    platforms: ["AWS", "Azure", "GCP", "Terraform", "CloudFormation", "GitHub", "Kubernetes", "Docker", "Snowflake", "1Password"],
    seoTitle: "IT Infrastructure for Software Engineering | RSystems NYC",
    seoDescription: "RSystems builds and manages infrastructure for software engineering teams — Terraform IaC, multi-account AWS, Azure, and GCP architecture, containers, CI/CD, Snowflake, and developer tooling.",
    jsonLdKnowsAbout: ["Software Engineering Infrastructure", "Infrastructure as Code", "Terraform", "Kubernetes", "CI/CD Pipelines", "Cloud Architecture", "Developer Tooling"],
  },
  {
    slug: "audio-production",
    cardName: "Audio Production",
    cardDescriptor: "Studio infrastructure, Dante networking, and Pro Tools environments",
    headline: "Audio Production",
    subtitle: "Studio infrastructure for professional audio workflows",
    lead: "Professional audio environments place unusual demands on IT. Specialized software with hardware licensing, acoustically sensitive spaces where fan noise matters, IP-based audio distribution requiring sample-accurate timing, and session file management at scale — these are the constraints we're familiar with when working with professional audio facilities and post-production studios.",
    sections: [
      {
        eyebrow: "Pro Tools & License Management",
        heading: "iLok, version management, and the fragility of audio software environments",
        paragraphs: [
          "Pro Tools and the iLok license ecosystem require careful version and file management. Plug-in compatibility, session portability across systems, and the consequences of a license issue mid-session are real operational concerns in professional audio environments. We understand the discipline required to manage these environments reliably.",
        ],
      },
      {
        eyebrow: "Dante & IP Audio",
        heading: "Network audio at sample-accurate timing",
        paragraphs: [
          "Dante has become the dominant standard for IP-based audio distribution in professional environments — routing audio over standard Ethernet with very low latency using PTP (Precision Time Protocol) for synchronization. Dante networks have specific switch configuration requirements that need to be understood and respected. We're familiar with these requirements and the broader landscape of IP audio, including DSP systems and how they interact with the network.",
        ],
      },
      {
        eyebrow: "Studio Environment",
        heading: "Clean power, acoustics, and the infrastructure behind the glass",
        paragraphs: [
          "Studio environments have constraints that most IT infrastructure ignores: acoustic sensitivity to fan noise and equipment placement, the importance of clean and conditioned power for sensitive audio hardware, and the need to isolate studio networks from office traffic. We're familiar with hi-fi audio hardware, amplifier systems, and the physical infrastructure decisions that support professional listening environments. We also understand legacy connectivity like ISDN in the context of remote recording workflows.",
        ],
      },
      {
        eyebrow: "Remote & Distributed",
        heading: "File access for distributed audio workflows",
        paragraphs: [
          "Distributed audio workflows — remote sessions, engineers in different locations accessing the same project files — require infrastructure that provides reliable, low-latency access to large session files. We're familiar with the range of solutions used in professional audio environments for distributed file access.",
        ],
      },
    ],
    whatWeBring: [
      "Familiarity with Pro Tools environments and iLok license management",
      "Understanding of Dante network configuration requirements",
      "PTP and precision timing infrastructure awareness",
      "DSP and IP audio system familiarity",
      "Studio network design knowledge (isolated studio LANs)",
      "Clean power and power conditioning awareness for sensitive audio hardware",
      "NAS and archive for session storage",
    ],
    platforms: ["Avid Pro Tools", "Dante", "Yamaha", "QSC", "McIntosh", "Bowers & Wilkins", "KEF", "Electro-Voice", "Morro Data", "LucidLink", "Suite", "Synology", "APC", "Cisco"],
    seoTitle: "IT for Audio Production & Recording Studios | RSystems NYC",
    seoDescription: "RSystems understands the infrastructure requirements of professional audio facilities — Pro Tools and iLok management, Dante IP audio networking, PTP timing, studio LAN design, clean power, and session file management.",
    jsonLdKnowsAbout: ["Audio Production Infrastructure", "Pro Tools", "Dante Audio Networking", "PTP Timing", "Studio LAN Design", "iLok License Management"],
  },
  {
    slug: "advertising-marketing",
    cardName: "Advertising & Marketing",
    cardDescriptor: "Contractor-heavy agencies, Adobe licensing, and client data management",
    headline: "Advertising & Marketing",
    subtitle: "Infrastructure for creative organizations that run on contractors, campaigns, and client data",
    lead: "Advertising and marketing agencies have a distinct operational profile: a core permanent team, a rotating cast of contractors and freelancers, multiple simultaneous client relationships with strict data separation requirements, and a software stack built around Adobe, Figma, and a constantly evolving set of campaign and analytics tools. We're familiar with the IT environment these organizations operate in.",
    sections: [
      {
        eyebrow: "Contractor Lifecycle",
        heading: "Rapid onboarding and clean offboarding",
        paragraphs: [
          "Contractors are the workforce model for most agencies, which means IT provisioning happens constantly and needs to be fast. A new contractor needs access to the right tools and the right client environments on day one, and none of that access should persist past their last day. We understand how to design for this lifecycle, including BYOD environments where the devices aren't organization-owned.",
        ],
      },
      {
        eyebrow: "Adobe & Creative Licensing",
        heading: "Named licenses, shared device licenses, and managing the complexity",
        paragraphs: [
          "Adobe Creative Cloud licensing for agencies involves named user licenses, shared device licenses, and team and enterprise plan differences — a complexity that can produce both cost overruns and compliance exposure if not managed carefully. We're familiar with the licensing model and how to think about it for creative teams.",
        ],
      },
      {
        eyebrow: "Client Data & Campaigns",
        heading: "Data lifecycle, metadata, and the end of an engagement",
        paragraphs: [
          "Client data — campaign assets, analytics, briefs, strategy documents — needs to be organized, accessible during the engagement, and handled correctly when it ends. Data lifecycle management, metadata discipline, and access control across concurrent client relationships are infrastructure concerns we understand in the agency context.",
        ],
      },
    ],
    whatWeBring: [
      "Contractor and freelancer onboarding and offboarding process design",
      "BYOD policy and mobile device management awareness",
      "Adobe Creative Cloud licensing familiarity",
      "Client data separation and access control",
      "Familiarity with Figma administration",
      "Google Analytics and campaign infrastructure awareness",
      "Data lifecycle policy design",
      "Google Workspace and Microsoft 365 for creative agencies",
    ],
    platforms: ["Adobe Creative Cloud", "Figma", "Google Workspace", "Microsoft 365", "JumpCloud", "Entra ID", "1Password", "Notion", "Slack"],
    seoTitle: "IT for Advertising & Marketing Agencies | RSystems NYC",
    seoDescription: "RSystems understands the IT environment of advertising and marketing agencies — contractor onboarding and offboarding, Adobe Creative Cloud licensing, client data separation, Figma administration, BYOD, and data lifecycle management.",
    jsonLdKnowsAbout: ["Advertising Agency IT", "Adobe Creative Cloud Licensing", "Contractor Lifecycle Management", "BYOD Policies", "Client Data Separation", "Figma Administration"],
  },
  {
    slug: "healthcare",
    cardName: "Healthcare & Medical",
    cardDescriptor: "HIPAA, HITECH, and HITRUST-ready infrastructure for PHI environments",
    headline: "Healthcare & Medical Services",
    subtitle: "Compliant infrastructure for organizations that handle protected health information",
    lead: "Healthcare organizations operate under some of the most demanding compliance requirements of any sector. HIPAA, HITECH, and HITRUST certification each impose specific technical controls that have to be in place, documented, and demonstrable. We have experience working with healthcare and medical services organizations on the infrastructure controls that underpin compliance — and we're familiar with the clinical and operational systems these environments run on.",
    sections: [
      {
        eyebrow: "HIPAA & HITECH",
        heading: "Technical controls for PHI environments",
        paragraphs: [
          "The HIPAA Security Rule requires specific technical safeguards for systems that create, receive, maintain, or transmit electronic protected health information — access controls, audit logging, encryption, automatic logoff, and integrity controls. We're familiar with how these requirements translate into infrastructure decisions and how to design environments that support compliance posture.",
        ],
      },
      {
        eyebrow: "HITRUST",
        heading: "Building toward certification",
        paragraphs: [
          "HITRUST certification requires evidence of controls across a broad range of domains — endpoint protection, access management, incident response, backup, and more. We understand what HITRUST requires at the infrastructure level and how to work incrementally toward the control baseline it demands.",
        ],
      },
      {
        eyebrow: "Clinical & EHR Systems",
        heading: "The infrastructure around the applications clinicians depend on",
        paragraphs: [
          "Healthcare organizations run a complex mix of EHR systems, clinical applications, line-of-business software, and integrations between them. We're familiar with the infrastructure layer that supports these environments — including the network segmentation, remote access, and endpoint management decisions that keep clinical staff connected and PHI protected.",
        ],
      },
      {
        eyebrow: "Device Management",
        heading: "Endpoints in a clinical environment",
        paragraphs: [
          "Clinical workstations, shared devices, and the laptops carried by care coordinators and administrative staff all need to be managed, encrypted, and maintained in a way that satisfies compliance requirements and doesn't add friction for the people using them. We have experience deploying modern device management in healthcare environments.",
        ],
      },
    ],
    whatWeBring: [
      "Familiarity with HIPAA Security Rule technical safeguards",
      "Understanding of HITECH requirements and breach notification implications",
      "Experience working toward HITRUST certification controls",
      "Endpoint management for clinical environments (Intune, Autopilot, Apple ADE)",
      "Audit logging and access control design",
      "Network segmentation for clinical and administrative systems",
      "Encryption at rest and in transit",
      "Incident response infrastructure familiarity",
      "EHR and clinical application infrastructure awareness",
    ],
    platforms: ["Microsoft Intune", "Entra ID", "Microsoft Defender", "1Password", "Azure", "AWS", "Cisco", "SonicWall", "Fortinet FortiGate"],
    seoTitle: "IT for Healthcare & Medical Services | RSystems NYC",
    seoDescription: "RSystems has experience with infrastructure for healthcare organizations — HIPAA and HITECH technical controls, HITRUST certification preparation, PHI-compliant endpoint management, audit logging, and clinical network design.",
    jsonLdKnowsAbout: ["Healthcare IT", "HIPAA Compliance", "HITECH Compliance", "HITRUST Certification", "PHI Infrastructure", "Clinical Network Design", "Healthcare Endpoint Management"],
  },
  {
    slug: "product-design",
    cardName: "Product Design & Manufacturing",
    cardDescriptor: "SolidWorks, PDM, and the IT layer behind additive manufacturing",
    headline: "Product Design & Manufacturing",
    subtitle: "Infrastructure for engineering-driven organizations running complex design software",
    lead: "Product design and manufacturing organizations run some of the most computationally intensive software in any industry. SolidWorks assemblies, simulation and FEA workloads, CAM toolpaths, and additive manufacturing workflows place serious demands on compute, storage, and the network that connects them. We have direct experience supporting organizations in this space, including companies at the forefront of industrial 3D printing and additive manufacturing.",
    sections: [
      {
        eyebrow: "Engineering Workloads",
        heading: "SolidWorks, simulation, and the hardware that supports them",
        paragraphs: [
          "SolidWorks and similar mechanical CAD packages are CPU and GPU-intensive, with large assembly files that need fast local or network storage to perform. FEA and simulation workloads can saturate high-core-count workstations for hours. We're familiar with the hardware and infrastructure requirements of these workflows and how to spec around them.",
        ],
      },
      {
        eyebrow: "Shared Storage & PDM",
        heading: "File management for complex assemblies",
        paragraphs: [
          "Large mechanical assemblies involve hundreds of interdependent part files. Product Data Management (PDM) systems manage versions, check-outs, and access controls across engineering teams. The storage and network layer underneath PDM has to be fast and reliable — slow storage means slow vaults, and slow vaults disrupt engineering workflows. We understand these requirements.",
        ],
      },
      {
        eyebrow: "Prototyping & Fabrication",
        heading: "The IT layer in a design and fabrication environment",
        paragraphs: [
          "Organizations that prototype and fabricate in-house — including companies running industrial 3D printing and additive manufacturing equipment — have IT requirements that extend onto the production floor. Network connectivity for fabrication equipment, file transfer to machines, and the infrastructure that moves a design from software to physical object are all areas we have experience with.",
        ],
      },
    ],
    whatWeBring: [
      "Familiarity with SolidWorks and engineering CAD infrastructure requirements",
      "Understanding of PDM system storage and network dependencies",
      "GPU workstation specification knowledge for simulation and rendering workflows",
      "Experience supporting companies in additive manufacturing and industrial 3D printing",
      "Shared storage design for large engineering datasets",
      "Server and virtualization infrastructure for engineering organizations",
    ],
    platforms: ["SolidWorks", "AutoCAD", "VMware", "Hyper-V", "Synology", "Dell Precision", "Windows Server"],
    relatedWork: [
      { href: "/case-studies/makerbot-overhaul", label: "Untangling the Spaghetti Monster — MakerBot" },
    ],
    seoTitle: "IT for Product Design & Manufacturing | RSystems NYC",
    seoDescription: "RSystems has experience supporting product design and manufacturing organizations — SolidWorks and CAD infrastructure, PDM system storage, GPU workstations, and the IT layer behind additive manufacturing and industrial 3D printing.",
    jsonLdKnowsAbout: ["Product Design IT", "Manufacturing IT", "SolidWorks Infrastructure", "PDM Systems", "Additive Manufacturing", "Engineering Workstations", "Industrial 3D Printing"],
  },
];

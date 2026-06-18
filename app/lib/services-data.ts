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
    slug: "fractional-cto",
    name: "Fractional CTO / CISO",
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
  {
    slug: "structured-cabling",
    name: "Structured Cabling & Low-Voltage",
    heroHeadline: "The layer everything else depends on.",
    tagline: "Cat6/6A copper and fiber backbone, patch panels, and termination — pulled to spec, labeled at both ends, and documented.",
    challenge: [
      "Cabling is the part of the infrastructure nobody thinks about until it fails — and when it fails, it's expensive and disruptive to fix because it's buried in walls, ceilings, and risers. A cable run that wasn't certified, a patch panel nobody labeled, a bundle bent past its radius two years ago that's now causing intermittent errors no one can trace.",
      "The cheapest time to get cabling right is the first time. Retrofitting a building that was wired carelessly means pulling new runs through occupied space, which costs far more than doing it correctly during a build.",
    ],
    approach: [
      "We treat cabling as permanent infrastructure, because it is. Runs are pulled to category spec, kept within bend radius, separated from electrical sources of interference, and certified with test equipment that confirms each run performs to the standard it's rated for — not just that it carries a signal.",
      "Every cable is labeled at both ends and documented, so two years from now anyone can trace a run without a tone generator and a guess. We coordinate with electricians and general contractors during a build so the low-voltage pathways are right before the walls close.",
    ],
    deliverables: [
      {
        title: "Copper & Fiber Cabling",
        description: "Cat6/6A horizontal runs and fiber backbone, installed to category specification and certified with test equipment.",
      },
      {
        title: "Patch Panels & Termination",
        description: "Keystone termination, patch panel buildout, and clean cross-connects — organized for serviceability, not just function.",
      },
      {
        title: "Labeling & Documentation",
        description: "Every run labeled at both ends and documented in a record you can actually use when something needs to change.",
      },
      {
        title: "Build Coordination",
        description: "Coordination with electrical and general contractors during construction so low-voltage pathways are correct before walls close.",
      },
    ],
  },
  {
    slug: "server-room",
    name: "Server Room & Rack Buildout",
    heroHeadline: "A server room built for airflow, redundancy, and the next ten years.",
    tagline: "Racks, PDUs, UPS, cooling, and cable management — assembled and validated before anything goes live.",
    challenge: [
      "Server rooms tend to grow by accretion: a rack here, a switch added there, power strips daisy-chained as equipment arrives. The result is a room that runs hot, trips breakers under load, and turns every change into a careful exercise in not unplugging the wrong thing.",
      "A room built properly from the start — power sized correctly, airflow planned, cabling managed — costs little more than one built carelessly, and saves years of operational friction and risk.",
    ],
    approach: [
      "We design the room around how it will actually be used and grown: rack layout for airflow and serviceability, dual power paths where uptime matters, UPS sized for real load and runtime, and cooling that holds the room within spec under full load.",
      "Cabling inside the rack is managed to the same standard as the structured cabling feeding it — labeled, routed, and serviceable. The room is assembled and validated before production equipment goes in, so the day you go live isn't the day you discover a problem.",
    ],
    deliverables: [
      {
        title: "Rack Layout & Assembly",
        description: "Rack design and buildout planned for airflow, weight, cable paths, and room to grow.",
      },
      {
        title: "Power & UPS",
        description: "Dual PDUs, UPS sized for real load and runtime, and locking connections on anything that can't afford to come loose.",
      },
      {
        title: "Cooling & Environmental",
        description: "Cooling sized to hold the room within spec under full load, with environmental monitoring for temperature and humidity.",
      },
      {
        title: "In-Rack Cable Management",
        description: "Patch cabling routed, labeled, and managed for serviceability — the rack stays as clean as the day it was built.",
      },
    ],
  },
  {
    slug: "wireless-installation",
    name: "Wireless & Network Installation",
    heroHeadline: "Coverage engineered for the space, not guessed at.",
    tagline: "Access point placement driven by site survey, switch installation and configuration, and live network standup.",
    challenge: [
      "Most wireless problems are placement problems. Access points mounted where it was convenient to run a cable rather than where the coverage is needed; too few APs fighting to cover too much space, or too many stepping on each other's channels. The symptoms show up as dead zones, dropped calls, and a help desk full of \"the Wi-Fi is slow\" tickets.",
      "Wireless that works is designed before it's installed — based on the actual building, its materials, and how people move through it.",
    ],
    approach: [
      "We start with a site survey: measuring the space, its construction, and the existing RF environment to determine where access points actually need to go and how many the space requires. Placement is driven by coverage and capacity, not by where it was easy to mount a bracket.",
      "We install and configure the switching that backs the wireless, stand up the live network with proper VLAN segmentation, and validate coverage against the survey before calling it done. The result is wireless that performs across the whole space, including the corners everyone forgets.",
    ],
    deliverables: [
      {
        title: "Site Survey & RF Design",
        description: "Measurement of the space, its construction, and the RF environment to determine access point count and placement.",
      },
      {
        title: "Access Point Installation",
        description: "Professional AP mounting and cabling, placed by survey for coverage and capacity across the entire space.",
      },
      {
        title: "Switch Installation & Configuration",
        description: "The switching that backs the wireless — installed, configured, and segmented into appropriate VLANs.",
      },
      {
        title: "Coverage Validation",
        description: "Post-install validation against the survey, confirming the space performs the way it was designed to.",
      },
    ],
  },
  {
    slug: "security-access",
    name: "Security & Access Control",
    heroHeadline: "Cameras and door access, installed on the network and managed like it.",
    tagline: "IP camera systems, door access control, and alarm integration — segmented properly and managed alongside the rest of your infrastructure.",
    challenge: [
      "Physical security systems are network systems now. Cameras, door controllers, and alarm panels all live on the network — and too often they're installed by a security vendor with no regard for network segmentation, sitting on the same flat network as everything else, creating both a performance drain and a security hole.",
      "When the camera system and the corporate network aren't properly separated, a compromised camera becomes a path into everything else. The install quality determines whether physical security strengthens your posture or quietly undermines it.",
    ],
    approach: [
      "We install camera and access control systems as part of the network architecture, not bolted onto it — devices placed on isolated VLANs, with traffic controlled and the systems integrated into the same monitoring and management as the rest of your infrastructure.",
      "Camera placement is planned for coverage of the spaces that matter; door access is integrated with your identity systems where possible so access rights track with employment. The result is physical security that's genuinely secure, not just present.",
    ],
    deliverables: [
      {
        title: "IP Camera Systems",
        description: "Camera placement, installation, and configuration on a properly segmented network, with recording and retention designed to requirement.",
      },
      {
        title: "Door Access Control",
        description: "Electronic access control installation, integrated with your identity systems where possible so access tracks with employment status.",
      },
      {
        title: "Network Segmentation",
        description: "Security devices isolated on their own VLANs, so a compromised camera is never a path into the corporate network.",
      },
      {
        title: "Alarm & System Integration",
        description: "Integration of alarm and security systems into the same monitoring and management as the rest of your infrastructure.",
      },
    ],
  },
  {
    slug: "conference-rooms",
    name: "Conference Rooms & Presentation Spaces",
    heroHeadline: "Rooms where the technology disappears and the meeting just works.",
    tagline: "Displays, video conferencing, microphones, and control systems for meeting rooms, boardrooms, and all-hands spaces.",
    challenge: [
      "Everyone has sat through the first ten minutes of a meeting lost to technology — the display that won't connect, the conference call nobody can hear, the remote participants frozen out because the room's microphone only picks up whoever sits closest. Conference room technology fails in small, recurring, expensive ways: every failed connection is a room full of people waiting.",
      "The difference between a room that works and one that doesn't is almost always the design and installation, not the equipment brand. Good gear installed thoughtlessly still produces a bad room.",
    ],
    approach: [
      "We design presentation spaces around how the room is actually used — a huddle room, a boardroom, and an all-hands space have completely different requirements for displays, audio pickup, and control. We specify and install displays, video conferencing, microphones, and speakers matched to the room's size and purpose.",
      "Control is the part that makes or breaks the experience: a single, obvious way to start a meeting, share a screen, and join a call, so the room works for whoever walks in without a manual. We tune the audio and video to the space and confirm it works before it's handed over.",
    ],
    deliverables: [
      {
        title: "Displays & Video",
        description: "Display and video conferencing systems sized and placed for the room — from huddle rooms to boardrooms to all-hands spaces.",
      },
      {
        title: "Audio & Microphones",
        description: "Microphone and speaker systems that pick up the whole room and let remote participants hear and be heard clearly.",
      },
      {
        title: "Control Systems",
        description: "A single, obvious way to start a meeting, share a screen, and join a call — so the room works for whoever walks in.",
      },
      {
        title: "Tuning & Handover",
        description: "Audio and video tuned to the specific room, tested, and handed over working — not left for the first meeting to debug.",
      },
    ],
  },
  {
    slug: "audio-systems",
    name: "Audio Systems",
    heroHeadline: "Sound done properly, at any tier.",
    tagline: "Multi-room Sonos for easy, flexible coverage — or a reference-grade system built around McIntosh amplification and audiophile loudspeakers when the room deserves it.",
    challenge: [
      "Audio is where most installations either overreach or underdeliver. A cheap system in a space that deserved better is a daily, low-grade disappointment. An overbuilt system nobody knows how to use, or one tuned badly for the room, wastes real money on equipment that never sounds the way it should.",
      "Great sound is as much about matching the system to the space and the use as it is about the components — and about installation and tuning done with actual care for how the room behaves.",
    ],
    approach: [
      "We work across the full range. For most spaces — offices, common areas, hospitality — a well-designed multi-room Sonos system delivers flexible, reliable, genuinely good sound that anyone can control from their phone. It's the right answer more often than not, and we install it cleanly and configure it to the space.",
      "When a room deserves more — a listening room, a flagship space, a home where the sound matters — we design and build reference-grade systems around McIntosh amplification and audiophile loudspeakers, installed and tuned to the acoustics of the actual room. Either way, the goal is the same: sound matched to the space, installed with care, and tuned so it performs the way the equipment is capable of.",
    ],
    deliverables: [
      {
        title: "Multi-Room Sonos",
        description: "Clean, flexible whole-space audio anyone can control from their phone — the right answer for most offices, common areas, and hospitality spaces.",
      },
      {
        title: "Reference & Hi-Fi Systems",
        description: "Reference-grade systems built around McIntosh amplification and audiophile loudspeakers, for rooms and spaces where the sound genuinely matters.",
      },
      {
        title: "Room Tuning & Acoustics",
        description: "Systems tuned to the acoustics of the actual room, so the equipment performs to the level it's capable of.",
      },
      {
        title: "Clean Installation",
        description: "Speakers, amplification, and wiring installed with the same care as the rest of the buildout — invisible where it should be, accessible where it counts.",
      },
    ],
  },
  {
    slug: "event-network",
    name: "Event Network Design & Deployment",
    heroHeadline: "A network that can't fail on the one night it matters.",
    tagline: "Reliable, secure networks for galas, fundraisers, conferences, and corporate events — including the payment and registration systems that have to work at the moment they're needed most.",
    challenge: [
      "An event network gets one chance. There's no maintenance window, no \"we'll fix it tomorrow\" — when the doors open, it works or it doesn't, in front of everyone. And the stakes are rarely just convenience: registration systems, payment processing, live auctions, and donation platforms all ride on that network, and a failure at the wrong moment has a direct dollar cost.",
      "Event venues are also hostile to good networking — RF-saturated, structurally difficult, often with house infrastructure that's inadequate or off-limits. The network has to be designed for the venue as it actually is, on a timeline that ends the moment the event begins.",
    ],
    approach: [
      "We design the network for the specific venue and the specific event — capacity for the headcount, coverage for the spaces in use, and redundancy on the systems that can't fail. Payment and registration get priority and protection; guest access is segmented away from anything sensitive.",
      "We deploy ahead of the event, test under realistic load, and staff the event on site so there's someone watching and ready the entire time it matters. When it's over, we take it back down cleanly.",
    ],
    deliverables: [
      {
        title: "Venue-Specific Network Design",
        description: "Capacity, coverage, and redundancy designed for the actual venue and the actual event — not a generic kit dropped in place.",
      },
      {
        title: "Payment & Registration Priority",
        description: "The systems that carry real dollars — registration, payment, auction, donation — prioritized, protected, and tested under load.",
      },
      {
        title: "Segmented Guest Access",
        description: "Guest and attendee Wi-Fi segmented away from operational and payment systems, so open access never becomes a liability.",
      },
      {
        title: "On-Site Event Support",
        description: "Staffed on site for the duration, watching the network and ready to respond — then a clean teardown when the event ends.",
      },
    ],
  },
  {
    slug: "festival",
    name: "Festival & Large-Venue Connectivity",
    heroHeadline: "A whole campus, connected across open ground.",
    tagline: "High-density, multi-zone connectivity across large outdoor and indoor venues — point-to-point links, distributed Wi-Fi, and the backbone to tie it all together.",
    challenge: [
      "Festival and large-venue networking is a different discipline from office IT. The distances are measured in acres, the user density spikes into the thousands, the infrastructure has to survive weather and crowds, and there's frequently no usable wired backbone to build on — just open ground between the places that need to be connected.",
      "Vendors, box office, production, food and beverage, security, and guest access all need connectivity, often with very different requirements, across a footprint with no permanent infrastructure and a hard deadline that arrives whether you're ready or not.",
    ],
    approach: [
      "We engineer the backbone first — point-to-point wireless links to bridge distance where running fiber isn't practical, tying together the zones that need connectivity. From there, distributed Wi-Fi and switching deliver coverage and capacity to each operational area, segmented so vendors, production, and guests each get what they need without interfering with each other.",
      "The design accounts for the realities of the environment — weather, power availability, crowd density, and the compressed build-and-strike timeline. We deploy, support it live through the event, and strike it cleanly afterward.",
    ],
    deliverables: [
      {
        title: "Point-to-Point Backbone",
        description: "Wireless bridge links that span distance across a campus where running fiber isn't practical, tying every zone back to the core.",
      },
      {
        title: "Distributed Wi-Fi & Switching",
        description: "High-density coverage engineered for crowds, delivered to each operational zone — vendors, box office, production, and guests.",
      },
      {
        title: "Multi-Zone Segmentation",
        description: "Each operational area on its own segment, so payment, production, and guest traffic never interfere with one another.",
      },
      {
        title: "Build, Support & Strike",
        description: "Deployed on the festival timeline, supported live through the event, and struck cleanly when the last day ends.",
      },
    ],
  },
  {
    slug: "temporary-office",
    name: "Temporary Office Infrastructure",
    heroHeadline: "Full infrastructure for a space with an end date.",
    tagline: "Swing space during a renovation, an interim headquarters, or a project office — stood up fast and removed cleanly when the lease is up.",
    challenge: [
      "Temporary offices fall into a gap. They need real infrastructure — network, Wi-Fi, phones, cloud connectivity, the works — but the usual approach of a permanent structured-cabling build doesn't fit a space you'll vacate in six months. Spend too little and the team can't work; spend like it's permanent and you've over-invested in a space with an expiration date.",
      "Renovations, office moves, rapid growth, and project-based work all create the same need: a fully functional workplace, fast, that comes apart cleanly when its time is up.",
    ],
    approach: [
      "We design temporary office infrastructure to be complete but appropriately provisional — full network and Wi-Fi coverage, connectivity to your cloud and core systems, and the security to match, deployed quickly and scaled to the known lifespan of the space.",
      "Where it makes sense, equipment is chosen so it can be recovered and redeployed rather than written off. When the space is vacated, we remove the infrastructure cleanly and, where applicable, carry it to the next location.",
    ],
    deliverables: [
      {
        title: "Rapid Network & Wi-Fi Standup",
        description: "Full network and wireless coverage deployed fast, scaled to the team and the known lifespan of the space.",
      },
      {
        title: "Cloud & Core Connectivity",
        description: "Secure connectivity back to your cloud, identity, and core systems, so the temporary space works exactly like the permanent one.",
      },
      {
        title: "Appropriate Security",
        description: "Segmentation, firewalling, and access control matched to the space — provisional doesn't mean unprotected.",
      },
      {
        title: "Clean Removal & Redeployment",
        description: "Equipment chosen for recovery where practical, and infrastructure removed cleanly when the lease ends — ready for the next location.",
      },
    ],
  },
  {
    slug: "production",
    name: "Production & Broadcast Support",
    heroHeadline: "Networks built around the realities of a set.",
    tagline: "Secure, high-throughput infrastructure for film, television, and live production — there for the shoot, gone after the wrap.",
    challenge: [
      "Production environments are demanding and unforgiving. Large media files moving constantly, tight security requirements around unreleased content, and zero tolerance for downtime during a shoot day that costs thousands of dollars an hour. And it all has to be stood up on location — a soundstage, a remote set, a control room — and struck when production wraps.",
      "Generic IT doesn't fit a set. The throughput, the security posture, and the operational tempo are all different, and the people relying on the network aren't going to file a ticket and wait.",
    ],
    approach: [
      "We build production networks for throughput and security: the bandwidth to move media without bottlenecks, storage connectivity sized to the workflow, and tight controls around content that can't leak. The design reflects how a production actually runs, with the resilience to keep a shoot day on schedule.",
      "We deploy on location, support it through production at the tempo a set demands, and strike it cleanly at wrap — including secure handling of any storage and the content on it.",
    ],
    deliverables: [
      {
        title: "High-Throughput Media Networks",
        description: "Bandwidth and storage connectivity sized to move large media files constantly, without the bottlenecks that stall a workflow.",
      },
      {
        title: "Content Security",
        description: "Tight controls around unreleased content — segmentation, access control, and secure storage handling that holds up to production security requirements.",
      },
      {
        title: "On-Location Deployment",
        description: "Infrastructure stood up on the soundstage, set, or control room, built for the operational tempo of a shoot day.",
      },
      {
        title: "Secure Strike & Wrap",
        description: "Clean teardown at wrap, including secure handling and wiping of storage and the content it held.",
      },
    ],
  },
  {
    slug: "deploy-teardown",
    name: "Design, Deploy & Teardown",
    heroHeadline: "Built up and struck down with the same discipline.",
    tagline: "The full lifecycle as a single capability: rapid design, fast deployment, on-site support, and a clean, accountable teardown with full asset recovery.",
    challenge: [
      "Temporary infrastructure is judged at both ends. The deployment gets the attention — but the teardown is where money is lost: equipment left behind, gear that walks off, no record of what went where, damage discovered after the fact. A deployment without an equally disciplined teardown is only half a plan.",
      "The organizations that run temporary environments repeatedly — event producers, production companies, businesses between spaces — need a partner who treats the whole lifecycle as one accountable process, not a setup crew and a separate scramble at the end.",
    ],
    approach: [
      "We plan the teardown into the deployment from the start. Every piece of equipment is tracked, the design is documented, and the strike is a deliberate, accounted-for process rather than an afterthought — gear recovered, inventoried, and ready for the next deployment.",
      "This is the discipline underneath all of our ephemeral work: the same rigor going out the door as coming in, so nothing is lost, nothing is left behind, and the next deployment starts from a known, complete inventory.",
    ],
    deliverables: [
      {
        title: "Rapid Design & Deployment",
        description: "Infrastructure designed and deployed on a compressed timeline, scaled precisely to the event, space, or production.",
      },
      {
        title: "On-Site Support",
        description: "Staffed support through the live window, so there's always someone watching and ready while it matters.",
      },
      {
        title: "Accountable Teardown",
        description: "A deliberate strike process — every piece of equipment tracked, recovered, and inventoried, with nothing left behind.",
      },
      {
        title: "Asset Recovery & Inventory",
        description: "Full asset recovery into a known inventory, so each deployment ends clean and the next one starts complete.",
      },
    ],
  },
];

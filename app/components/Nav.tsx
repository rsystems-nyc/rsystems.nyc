"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const managementCategories = [
  {
    label: "Management Bundles",
    href: "/services/management/",
    links: [
      { href: "/services/management/core-suite", label: "Core Suite" },
      { href: "/services/management/essentials", label: "Management Essentials" },
    ],
  },
  {
    label: "Identity & Devices",
    href: "/services/management/identity/",
    links: [
      { href: "/services/management/identity", label: "Identity Management" },
      { href: "/services/management/workstation", label: "Endpoint Management" },
    ],
  },
  {
    label: "Monitoring",
    href: "/services/management/network/",
    links: [
      { href: "/services/management/network", label: "Network Management" },
      { href: "/services/management/server", label: "Server Management" },
      { href: "/services/management/backup", label: "Backup Management" },
      { href: "/services/management/domain", label: "Domain Management" },
    ],
  },
  {
    label: "Security",
    href: "/services/management/awareness/",
    links: [
      { href: "/services/management/awareness", label: "Cybersecurity Awareness" },
    ],
  },
];

const techConsultingCategories = [
  {
    label: "Strategy & Advisory",
    href: "/services/technology-consulting/strategy/",
    links: [
      { href: "/services/technology-consulting/initial-assessment", label: "Initial Assessment" },
      { href: "/services/technology-consulting/fractional-cto", label: "Fractional CTO" },
      { href: "/services/technology-consulting/disaster-recovery-plan-development", label: "Disaster Recovery Planning" },
    ],
  },
  {
    label: "AI & Automation",
    href: "/services/ai",
    links: [
      { href: "/services/ai/ai-enablement", label: "AI Enablement" },
      { href: "/services/ai/mcp-tooling", label: "MCP Tooling" },
      { href: "/services/ai/agent-governance", label: "Agent Governance & PAM" },
      { href: "/services/ai/audit-accountability", label: "Audit & Accountability" },
    ],
  },
  {
    label: "Cloud",
    href: "/services/technology-consulting/cloud/",
    links: [
      { href: "/services/technology-consulting/azure-consulting-and-development", label: "Azure Consulting & Development" },
      { href: "/services/technology-consulting/cloud-storage-and-computing-solutions", label: "Cloud Storage & Computing" },
    ],
  },
  {
    label: "Identity & Security",
    href: "/services/technology-consulting/identity-security/",
    links: [
      { href: "/services/technology-consulting/jumpcloud-consulting", label: "JumpCloud Consulting" },
      { href: "/services/technology-consulting/okta-consulting", label: "Okta Consulting" },
      { href: "/services/technology-consulting/entra-and-intune-consulting", label: "Entra & Intune Consulting" },
      { href: "/services/technology-consulting/password-management", label: "Password Management" },
      { href: "/services/technology-consulting/cybersecurity-assessment", label: "Cybersecurity Assessment" },
    ],
  },
  {
    label: "Networking",
    href: "/services/technology-consulting/networking/",
    links: [
      { href: "/services/technology-consulting/network-engineering", label: "Network Design & Engineering" },
      { href: "/services/technology-consulting/firewall-and-network-security", label: "Firewall & Network Security" },
      { href: "/services/technology-consulting/wifi-assessment", label: "WiFi Assessment" },
    ],
  },
  {
    label: "Compute & Storage",
    href: "/services/technology-consulting/compute-storage/",
    links: [
      { href: "/services/technology-consulting/dell-poweredge-server-solutions", label: "Dell PowerEdge Server Solutions" },
      { href: "/services/technology-consulting/synology-storage-consulting", label: "Synology Storage Consulting" },
      { href: "/services/technology-consulting/vmware-administration-infrastructure-design", label: "VMware Administration" },
    ],
  },
];


const ourWorkLinks = [
  { href: "/industries", label: "Industries" },
  { href: "/case-studies", label: "Case Studies" },
];

const resourcesLinks = [
  { href: "/resources/university", label: "University" },
  { href: "/resources/free-resources", label: "Free Resources" },
  { href: "/resources/glossary", label: "Glossary" },
];

const aboutLinks = [
  { href: "/about/leadership", label: "Leadership" },
  { href: "/about/track-record", label: "Track Record" },
  { href: "/about/our-story", label: "Our Story" },
  { href: "/careers", label: "Careers" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [mgmtOpen, setMgmtOpen] = useState(false);
  const [tcOpen, setTcOpen] = useState(false);
  const [ourWorkOpen, setOurWorkOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const leaveTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  function openServices() {
    if (leaveTimer.current) clearTimeout(leaveTimer.current);
    setServicesOpen(true);
  }

  function closeServices() {
    leaveTimer.current = setTimeout(() => setServicesOpen(false), 150);
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#F4F2EF]/95 backdrop-blur-sm [transform:translateZ(0)]">
      <div className="flex items-center py-1.5 sm:py-[5px] px-4 sm:px-6 border-b border-black/[0.08]">
        <Link href="/" className="flex-shrink-0" onClick={() => setOpen(false)}>
          <Image
            src="/assets/RS_Systems_Pulsar_Logo_cropped.svg"
            alt="RSystems"
            width={320}
            height={80}
            className="h-10 sm:h-[90px] w-auto"
            priority
          />
        </Link>

        <nav className="ml-auto hidden md:flex items-center gap-8">

          <div onMouseEnter={openServices} onMouseLeave={closeServices}>
            <button
              type="button"
              className={`flex items-center gap-1 text-sm transition-colors ${
                servicesOpen ? "text-[#1A1A1A]" : "text-[#1A1A1A]/50 hover:text-[#1A1A1A]"
              }`}
            >
              Services
              <svg
                width="10"
                height="10"
                viewBox="0 0 10 10"
                fill="none"
                aria-hidden="true"
                className="mt-px"
                style={{ transform: servicesOpen ? "rotate(180deg)" : undefined, transition: "transform 0.15s" }}
              >
                <path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>

          <div className="relative group">
            <button
              type="button"
              className="flex items-center gap-1 text-sm text-[#1A1A1A]/50 hover:text-[#1A1A1A] group-hover:text-[#1A1A1A] transition-colors"
            >
              Our Work
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true" className="mt-px">
                <path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <div className="absolute top-full left-0 z-50 pt-2 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity duration-150">
              <div className="bg-[#F4F2EF] border border-black/[0.08] rounded-lg shadow-lg py-1.5 min-w-[148px]">
                {ourWorkLinks.map((link) => (
                  <Link key={link.href} href={link.href} className="block px-4 py-2 text-sm text-[#1A1A1A]/60 hover:text-[#1A1A1A] hover:bg-black/[0.04] transition-colors">
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="relative group">
            <Link
              href="/resources"
              className="flex items-center gap-1 text-sm text-[#1A1A1A]/50 hover:text-[#1A1A1A] group-hover:text-[#1A1A1A] transition-colors"
            >
              Resources
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true" className="mt-px">
                <path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <div className="absolute top-full left-0 z-50 pt-2 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity duration-150">
              <div className="bg-[#F4F2EF] border border-black/[0.08] rounded-lg shadow-lg py-1.5 min-w-[160px]">
                {resourcesLinks.map((link) => (
                  <Link key={link.href} href={link.href} className="block px-4 py-2 text-sm text-[#1A1A1A]/60 hover:text-[#1A1A1A] hover:bg-black/[0.04] transition-colors">
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="relative group">
            <Link
              href="/about"
              className="flex items-center gap-1 text-sm text-[#1A1A1A]/50 hover:text-[#1A1A1A] group-hover:text-[#1A1A1A] transition-colors"
            >
              About
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true" className="mt-px">
                <path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <div className="absolute top-full right-0 z-50 pt-2 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity duration-150">
              <div className="bg-[#F4F2EF] border border-black/[0.08] rounded-lg shadow-lg py-1.5 min-w-[148px]">
                {aboutLinks.map((link) => (
                  <Link key={link.href} href={link.href} className="block px-4 py-2 text-sm text-[#1A1A1A]/60 hover:text-[#1A1A1A] hover:bg-black/[0.04] transition-colors">
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link href="/contact" className="text-sm font-medium bg-[#E8500A] text-white px-4 py-2 rounded hover:bg-[#E8500A]/85 transition-colors">
            Contact
          </Link>
        </nav>

        <button
          type="button"
          className="ml-auto md:hidden p-2 cursor-pointer text-[#1A1A1A]/50 hover:text-[#1A1A1A] transition-colors"
          onClick={() => setOpen((prev) => !prev)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          {open ? (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path d="M4 4L16 16M16 4L4 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path d="M3 6H17M3 10H17M3 14H17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </div>

      {servicesOpen && (
        <div
          className="hidden md:block fixed top-[110px] right-4 sm:right-6 z-50 w-[740px] max-w-[calc(100vw-2rem)]"
          onMouseEnter={openServices}
          onMouseLeave={closeServices}
        >
          <div className="bg-[#F4F2EF] border border-black/[0.08] rounded-xl shadow-xl overflow-x-hidden overflow-y-auto max-h-[calc(100vh-130px)]">
            <div className="grid grid-cols-2 divide-x divide-black/[0.06]">

              {/* Technology Consulting */}
              <div className="p-5">
                <Link
                  href="/services/technology-consulting"
                  className="block text-[10px] font-semibold uppercase tracking-widest text-[#E8500A] mb-3 hover:text-[#E8500A]/70 transition-colors"
                  onClick={() => setServicesOpen(false)}
                >
                  Technology Consulting
                </Link>
                <div>
                  {techConsultingCategories.map((cat, i) => (
                    <div key={cat.label} className={i > 0 ? "mt-4" : ""}>
                      <Link
                        href={cat.href}
                        className="block text-[9px] font-semibold uppercase tracking-widest text-[#E8500A]/70 hover:text-[#E8500A] hover:underline px-2 pb-1 transition-colors"
                        onClick={() => setServicesOpen(false)}
                      >
                        {cat.label}
                      </Link>
                      <div className="space-y-0.5">
                        {cat.links.map((link) => (
                          <Link
                            key={link.href}
                            href={link.href}
                            className="block px-2 py-1.5 text-[13px] text-[#1A1A1A]/60 hover:text-[#1A1A1A] hover:bg-black/[0.04] rounded transition-colors"
                            onClick={() => setServicesOpen(false)}
                          >
                            {link.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Managed Services */}
              <div className="p-5">
                <Link
                  href="/services/management"
                  className="block text-[10px] font-semibold uppercase tracking-widest text-[#E8500A] mb-3 hover:text-[#E8500A]/70 transition-colors"
                  onClick={() => setServicesOpen(false)}
                >
                  Managed Services
                </Link>
                <div>
                  {managementCategories.map((cat, i) => (
                    <div key={cat.label} className={i > 0 ? "mt-4" : ""}>
                      <Link
                        href={cat.href}
                        className="block text-[9px] font-semibold uppercase tracking-widest text-[#E8500A]/70 hover:text-[#E8500A] hover:underline px-2 pb-1 transition-colors"
                        onClick={() => setServicesOpen(false)}
                      >
                        {cat.label}
                      </Link>
                      <div className="space-y-0.5">
                        {cat.links.map((link) => (
                          <Link
                            key={link.href}
                            href={link.href}
                            className="block px-2 py-1.5 text-[13px] text-[#1A1A1A]/60 hover:text-[#1A1A1A] hover:bg-black/[0.04] rounded transition-colors"
                            onClick={() => setServicesOpen(false)}
                          >
                            {link.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>


</div>
          </div>
        </div>
      )}

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className="md:hidden overflow-hidden bg-[#F4F2EF]"
        style={{
          maxHeight: open ? "calc(100vh - 64px)" : "0",
          borderBottom: open ? "1px solid rgba(0,0,0,0.08)" : undefined,
          transition: "max-height 0.25s ease-in-out",
        }}
      >
        <nav
          className="px-4 py-6 flex flex-col gap-1 overflow-y-auto"
          style={{ maxHeight: "calc(100vh - 64px)" }}
        >
          {/* Technology Consulting accordion */}
          <div className="border-b border-black/[0.08]">
            <button
              type="button"
              className="w-full flex items-center justify-between py-3 text-base text-[#1A1A1A]/50 hover:text-[#1A1A1A] transition-colors"
              onClick={() => setTcOpen((prev) => !prev)}
            >
              Technology Consulting
              <svg
                width="14"
                height="14"
                viewBox="0 0 10 10"
                fill="none"
                aria-hidden="true"
                style={{ transform: tcOpen ? "rotate(180deg)" : undefined, transition: "transform 0.2s" }}
              >
                <path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            {tcOpen && (
              <div className="pb-2">
                <Link
                  href="/services/technology-consulting"
                  className="block py-2.5 text-sm text-[#E8500A] font-semibold border-b border-black/[0.05]"
                  onClick={() => setOpen(false)}
                >
                  Overview
                </Link>
                {techConsultingCategories.map((cat) => (
                  <div key={cat.label}>
                    <Link
                      href={cat.href}
                      className="block pt-3 pb-1 text-[9px] font-semibold uppercase tracking-widest text-[#E8500A]/70 hover:text-[#E8500A] hover:underline transition-colors"
                      onClick={() => setOpen(false)}
                    >
                      {cat.label}
                    </Link>
                    {cat.links.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="block py-2.5 text-sm text-[#1A1A1A]/40 pl-4 hover:text-[#1A1A1A] transition-colors border-b border-black/[0.05]"
                        onClick={() => setOpen(false)}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Managed Services accordion */}
          <div className="border-b border-black/[0.08]">
            <button
              type="button"
              className="w-full flex items-center justify-between py-3 text-base text-[#1A1A1A]/50 hover:text-[#1A1A1A] transition-colors"
              onClick={() => setMgmtOpen((prev) => !prev)}
            >
              Managed Services
              <svg
                width="14"
                height="14"
                viewBox="0 0 10 10"
                fill="none"
                aria-hidden="true"
                style={{ transform: mgmtOpen ? "rotate(180deg)" : undefined, transition: "transform 0.2s" }}
              >
                <path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            {mgmtOpen && (
              <div className="pb-2">
                <Link
                  href="/services/management"
                  className="block py-2.5 text-sm text-[#E8500A] font-semibold border-b border-black/[0.05]"
                  onClick={() => setOpen(false)}
                >
                  Overview
                </Link>
                {managementCategories.map((cat) => (
                  <div key={cat.label}>
                    <Link
                      href={cat.href}
                      className="block pt-3 pb-1 text-[9px] font-semibold uppercase tracking-widest text-[#E8500A]/70 hover:text-[#E8500A] hover:underline transition-colors"
                      onClick={() => setOpen(false)}
                    >
                      {cat.label}
                    </Link>
                    {cat.links.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="block py-2.5 text-sm text-[#1A1A1A]/40 pl-4 hover:text-[#1A1A1A] transition-colors border-b border-black/[0.05]"
                        onClick={() => setOpen(false)}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Our Work accordion */}
          <div className="border-b border-black/[0.08]">
            <button
              type="button"
              className="w-full flex items-center justify-between py-3 text-base text-[#1A1A1A]/50 hover:text-[#1A1A1A] transition-colors"
              onClick={() => setOurWorkOpen((prev) => !prev)}
            >
              Our Work
              <svg
                width="14"
                height="14"
                viewBox="0 0 10 10"
                fill="none"
                aria-hidden="true"
                style={{ transform: ourWorkOpen ? "rotate(180deg)" : undefined, transition: "transform 0.2s" }}
              >
                <path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            {ourWorkOpen && (
              <div className="pb-2">
                <Link
                  href="/industries"
                  className="block py-2.5 text-sm text-[#1A1A1A]/40 pl-4 hover:text-[#1A1A1A] transition-colors border-b border-black/[0.05]"
                  onClick={() => setOpen(false)}
                >
                  Industries
                </Link>
                <Link
                  href="/case-studies"
                  className="block py-2.5 text-sm text-[#1A1A1A]/40 pl-4 hover:text-[#1A1A1A] transition-colors border-b border-black/[0.05]"
                  onClick={() => setOpen(false)}
                >
                  Case Studies
                </Link>
              </div>
            )}
          </div>

          {/* Resources accordion */}
          <div className="border-b border-black/[0.08]">
            <button
              type="button"
              className="w-full flex items-center justify-between py-3 text-base text-[#1A1A1A]/50 hover:text-[#1A1A1A] transition-colors"
              onClick={() => setResourcesOpen((prev) => !prev)}
            >
              Resources
              <svg
                width="14"
                height="14"
                viewBox="0 0 10 10"
                fill="none"
                aria-hidden="true"
                style={{ transform: resourcesOpen ? "rotate(180deg)" : undefined, transition: "transform 0.2s" }}
              >
                <path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            {resourcesOpen && (
              <div className="pb-2">
                <Link
                  href="/resources"
                  className="block py-2.5 text-sm text-[#E8500A] font-semibold border-b border-black/[0.05]"
                  onClick={() => setOpen(false)}
                >
                  Overview
                </Link>
                {resourcesLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block py-2.5 text-sm text-[#1A1A1A]/40 pl-4 hover:text-[#1A1A1A] transition-colors border-b border-black/[0.05]"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* About accordion */}
          <div className="border-b border-black/[0.08]">
            <button
              type="button"
              className="w-full flex items-center justify-between py-3 text-base text-[#1A1A1A]/50 hover:text-[#1A1A1A] transition-colors"
              onClick={() => setAboutOpen((prev) => !prev)}
            >
              About
              <svg
                width="14"
                height="14"
                viewBox="0 0 10 10"
                fill="none"
                aria-hidden="true"
                style={{ transform: aboutOpen ? "rotate(180deg)" : undefined, transition: "transform 0.2s" }}
              >
                <path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            {aboutOpen && (
              <div className="pb-2">
                {aboutLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block py-2.5 text-sm text-[#1A1A1A]/40 pl-4 hover:text-[#1A1A1A] transition-colors border-b border-black/[0.05]"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/contact"
            className="mt-4 text-center text-sm font-medium bg-[#E8500A] text-white px-4 py-3 rounded hover:bg-[#E8500A]/85 transition-colors"
            onClick={() => setOpen(false)}
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}

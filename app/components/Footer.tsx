import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#0F1117] border-t border-white/[0.06]">
      <div className="hidden sm:block absolute -left-[60px] bottom-[16px] pointer-events-none select-none [transform:scaleX(-1)]">
        <Image
          src="/assets/RS_Pulsar_Only_White.svg"
          alt=""
          width={800}
          height={800}
          className="w-[320px] h-auto opacity-[0.09]"
          aria-hidden="true"
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-5 lg:py-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">

          {/* Column 1: Brand */}
          <div>
            <Link href="/">
              <Image
                src="/assets/RS_Systems_Logo_Only.svg"
                alt="RSystems"
                width={320}
                height={80}
                className="h-16 w-auto"
              />
            </Link>
            <p className="mt-3 text-sm text-white/40 leading-relaxed max-w-xs">
              Executive IT Leadership &amp; Consulting — bridging the boardroom and the server room.
            </p>
            <p className="mt-2 text-sm text-white/30">New York City</p>
          </div>

          {/* Column 2: Company */}
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-widest text-[#FE6305] mb-4">
              Company
            </p>
            <ul className="space-y-2">
              <li>
                <Link href="/about/" className="text-sm text-white/50 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/about/leadership/" className="text-sm text-white/50 hover:text-white transition-colors">
                  Leadership
                </Link>
              </li>
              <li>
                <Link href="/our-work/clients/" className="text-sm text-white/50 hover:text-white transition-colors">
                  Clients
                </Link>
              </li>
              <li>
                <Link href="/industries/" className="text-sm text-white/50 hover:text-white transition-colors">
                  Industries
                </Link>
              </li>
              <li>
                <Link href="/case-studies/" className="text-sm text-white/50 hover:text-white transition-colors">
                  Case Studies
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-widest text-[#FE6305] mb-4">
              Resources
            </p>
            <ul className="space-y-2">
              <li>
                <Link href="/resources/" className="text-sm text-white/50 hover:text-white transition-colors">
                  Resources
                </Link>
              </li>
              <li>
                <Link href="/resources/university/" className="text-sm text-white/50 hover:text-white transition-colors">
                  University
                </Link>
              </li>
              <li>
                <Link href="/resources/glossary/" className="text-sm text-white/50 hover:text-white transition-colors">
                  Glossary
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Services */}
          <div className="flex flex-col">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-widest text-[#FE6305] mb-4">
                Services
              </p>
              <ul className="space-y-2">
                <li>
                  <Link href="/services/technology-consulting/" className="text-sm text-white/50 hover:text-white transition-colors">
                    Technology Consulting
                  </Link>
                </li>
                <li>
                  <Link href="/services/management/" className="text-sm text-white/50 hover:text-white transition-colors">
                    Managed Services
                  </Link>
                </li>
                <li>
                  <Link href="/services/buildout" className="text-sm text-white/50 hover:text-white transition-colors">
                    Buildout &amp; Installation
                  </Link>
                </li>
                <li>
                  <Link href="/services/ephemeral" className="text-sm text-white/50 hover:text-white transition-colors">
                    Ephemeral Infrastructure
                  </Link>
                </li>
              </ul>
            </div>
            {/* Dev-host only: asset upload for site admins. Hidden in prod
                because PREVIEW_AUTH_ENABLED is never set on Vercel. Floats to
                the column bottom-right via mt-auto. */}
            {process.env.PREVIEW_AUTH_ENABLED === "true" && (
              <div className="mt-auto pt-5 flex justify-start sm:justify-end">
                <Link
                  href="/admin/upload"
                  className="block w-52 text-center text-sm text-white/50 px-5 py-2.5 rounded border border-white/20 hover:bg-white/[0.05] hover:text-white/70 transition-colors"
                >
                  Upload Assets
                </Link>
              </div>
            )}
          </div>

        </div>

        {/* Divider */}
        <div className="mt-5 mx-[100px] border-t border-white/[0.06]" />

        {/* Bottom bar */}
        <div className="pt-5 flex flex-col sm:flex-row sm:items-center gap-4">
          <p className="text-xs text-white/25 sm:flex-1">
            &copy; 2026 rsystems.nyc. All rights reserved.
          </p>
          <p className="text-xs text-white/25 sm:flex-1 sm:text-center hidden sm:block">
            rsystems.nyc
          </p>
          <div className="sm:flex-1 sm:flex sm:justify-end">
            <a
              href="https://support.rsystems.nyc"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="block w-52 text-center text-sm text-white/50 px-5 py-2.5 rounded border border-white/20 hover:bg-white/[0.05] hover:text-white/70 transition-colors"
            >
              Support Portal
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

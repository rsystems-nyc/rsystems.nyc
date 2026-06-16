import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Track Record | RSystems NYC",
  description:
    "A selection of the organizations Reilly has worked with over 15+ years — through RSystems and through prior engagements — across industries and at every scale.",
};

const clients: { industry: string; entries: { name: string; url: string }[] }[] = [
  {
    industry: "Finance",
    entries: [{ name: "Citadel Securities", url: "https://www.citadelsecurities.com" }],
  },
  {
    industry: "AI",
    entries: [{ name: "Mistral AI", url: "https://mistral.ai/" }],
  },
  {
    industry: "Cosmetics",
    entries: [
      { name: "Glossier", url: "https://www.glossier.com" },
      { name: "Sol De Janeiro", url: "https://www.soldejaneiro.com" },
    ],
  },
  {
    industry: "Product Design",
    entries: [
      { name: "MakerBot", url: "https://www.makerbot.com" },
      { name: "BioLite", url: "https://www.bioliteenergy.com" },
      { name: "Juul", url: "https://www.juul.com" },
    ],
  },
  {
    industry: "Parks",
    entries: [
      { name: "The High Line", url: "https://www.thehighline.org" },
      { name: "Little Island", url: "https://www.littleisland.org" },
      { name: "Domino Park", url: "https://www.dominopark.com" },
      { name: "Brooklyn Bridge Park", url: "https://www.brooklynbridgepark.org" },
      { name: "Governor's Island", url: "https://www.govisland.com" },
    ],
  },
  {
    industry: "Arts",
    entries: [
      { name: "Robert Rauschenberg Foundation", url: "https://www.rauschenbergfoundation.org" },
      { name: "The Brant Foundation", url: "https://www.brantfoundation.org" },
    ],
  },
  {
    industry: "Healthcare",
    entries: [
      { name: "Oscar", url: "https://www.hioscar.com" },
      { name: "Easterseals NJ", url: "https://www.eastersealsnj.org" },
    ],
  },
  {
    industry: "Food Services",
    entries: [
      { name: "Blue Apron", url: "https://www.blueapron.com" },
      { name: "Peanut Butter & Co", url: "https://www.ilovepeanutbutter.com" },
    ],
  },
  {
    industry: "Audio",
    entries: [
      { name: "Splice", url: "https://splice.com" },
      { name: "Sonic Union", url: "https://www.sonicunion.com" },
      { name: "Heard City", url: "https://www.heardcity.com" },
    ],
  },
  {
    industry: "Fashion",
    entries: [
      { name: "Monse", url: "https://www.monse.com" },
      { name: "Fair Harbor Clothing", url: "https://www.fairharborclothing.com" },
    ],
  },
  {
    industry: "Non-Profit",
    entries: [
      { name: "National Audubon Society", url: "https://www.audubon.org" },
      { name: "charity:water", url: "https://www.charitywater.org" },
      { name: "Jerome L Greene Foundation", url: "https://www.jlgreene.org" },
    ],
  },
  {
    industry: "Advertising",
    entries: [
      { name: "Hypebeast", url: "https://www.hypebeast.com" },
      { name: "Red Antler", url: "https://www.redantler.com" },
    ],
  },
  {
    industry: "Education",
    entries: [
      { name: "Blue School", url: "https://www.blueschool.org" },
      { name: "Saint David's", url: "https://www.saintdavids.org" },
    ],
  },
  {
    industry: "Video",
    entries: [
      { name: "Goldcrest Films", url: "https://www.goldcrestfilms.com" },
      { name: "Cinereach", url: "https://www.cinereach.org" },
      { name: "M ss n g P eces", url: "https://mssngpeces.com" },
    ],
  },
  {
    industry: "Legal",
    entries: [{ name: "Lowe Law Group", url: "https://www.lowelawgroup.com" }],
  },
  {
    industry: "Architecture",
    entries: [
      { name: "Pembrooke & Ives", url: "https://www.pembrookeandives.com/" },
      { name: "Modellus Novus", url: "https://mndpc.com/" },
    ],
  },
  {
    industry: "Biotech",
    entries: [
      { name: "Ecovative", url: "https://ecovative.com/" },
    ],
  },
  {
    industry: "Media & Entertainment / Broadcasting",
    entries: [
      { name: "Global", url: "https://www.global.com" },
    ],
  },
];

export default function TrackRecordPage() {
  return (
    <main className="flex-1">

      {/* Hero */}
      <section className="bg-[#0F1117] text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <Link
            href="/about"
            className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-widest text-[#E8500A] mb-6 hover:text-[#E8500A]/75 transition-colors"
          >
            <span aria-hidden="true">←</span> About
          </Link>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight max-w-3xl">
            Track Record
          </h1>
          <p className="mt-5 text-lg text-white/50 max-w-2xl leading-relaxed">
            Over 15 years, Reilly has worked with hundreds of organizations
            across industries — through RSystems and through prior engagements —
            from early-stage startups to multinational companies. A selection
            is listed below.
          </p>
        </div>
      </section>

      {/* Client list */}
      <section className="relative overflow-hidden bg-[#F4F2EF]">
        <div className="hidden sm:block absolute right-[-80px] bottom-[-40px] pointer-events-none select-none">
          <Image
            src="/assets/RS_Pulsar_Only_White.svg"
            alt=""
            width={600}
            height={600}
            className="w-[340px] h-auto opacity-[0.07]"
            aria-hidden="true"
          />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-10">
            {clients.map(({ industry, entries }) => (
              <div key={industry}>
                <p className="text-[11px] font-semibold uppercase tracking-widest text-[#E8500A] mb-3">
                  {industry}
                </p>
                <ul className="space-y-1.5">
                  {entries.map(({ name, url }) => (
                    <li key={name}>
                      <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-base text-[#1A1A1A]/70 leading-snug hover:text-[#1A1A1A] transition-colors"
                      >
                        {name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="mt-16 text-sm text-[#1A1A1A]/40">
            A selection of notable engagements. Not a complete list.
          </p>
        </div>
      </section>

    </main>
  );
}

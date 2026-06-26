import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { GoogleAnalytics } from "@next/third-parties/google";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const SITE_URL = "https://rsystems.nyc";
const SITE_NAME = "RSystems";
const DEFAULT_DESCRIPTION =
  "Executive IT Leadership & Consulting — bridging the boardroom and the server room. Strategy, architecture, and implementation. NYC Native.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — Executive IT Leadership & Consulting`,
    template: `%s — ${SITE_NAME}`,
  },
  description: DEFAULT_DESCRIPTION,
  openGraph: {
    siteName: SITE_NAME,
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    title: `${SITE_NAME} — Executive IT Leadership & Consulting`,
    description: DEFAULT_DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} — Executive IT Leadership & Consulting`,
    description: DEFAULT_DESCRIPTION,
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "RSystems",
  url: SITE_URL,
  logo: `${SITE_URL}/assets/RS_Systems_Pulsar_Logo.svg`,
  image: `${SITE_URL}/assets/RS_Systems_Pulsar_Logo.svg`,
  sameAs: ["https://maps.app.goo.gl/URtpuDTNpba7NuR2A"],
  foundingDate: "2011",
  description:
    "Executive IT Leadership & Consulting — bridging the boardroom and the server room. Strategy, architecture, and implementation. NYC Native.",
  areaServed: { "@type": "City", name: "New York City" },
  telephone: "+1-917-765-4968",
  address: {
    "@type": "PostalAddress",
    streetAddress: "395 S End Ave",
    addressLocality: "New York",
    addressRegion: "NY",
    postalCode: "10280",
    addressCountry: "US",
  },
  priceRange: "$$$",
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Monday", opens: "11:00", closes: "19:00" },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Tuesday", "Wednesday", "Thursday"],
      opens: "10:00",
      closes: "19:00",
    },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Friday", opens: "10:00", closes: "16:00" },
  ],
  knowsAbout: [
    "IT Strategy",
    "Infrastructure Architecture",
    "Cloud Migration",
    "Cybersecurity",
    "Identity & Access Management",
    "Network Design",
    "AI Transformation",
    "Fractional CTO",
    "Fractional CISO",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    telephone: "+1-917-765-4968",
    url: `${SITE_URL}/contact`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geist.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[#F4F2EF] text-[#1A1A1A]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <Nav />
        <div className="flex-1 flex flex-col pt-[53px] sm:pt-[101px]">{children}</div>
        <Footer />
        <GoogleAnalytics gaId="G-CZHZZS0L48" />
      </body>
    </html>
  );
}

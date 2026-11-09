import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { SOCIAL_LINKS } from "../lib/socialLinks";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

const BASE_URL = "https://yazzo.io";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  // Same wording as yazzoapp.com (English), so the two sites say the same thing.
  title: {
    default: "Yazzo – last-minute offers and events in Helsinki",
    template: "%s | Yazzo",
  },
  description:
    "Discover what’s happening near you, right now. Yazzo brings " +
    "restaurants, events and last-minute offers together on one map. " +
    "Free app.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    siteName: "Yazzo",
    title: "Yazzo – last-minute offers and events in Helsinki",
    description:
      "Discover what’s happening near you, right now. Yazzo brings " +
      "restaurants, events and last-minute offers together on one map. " +
      "Free app.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Yazzo — City In Your Pocket",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yazzo – last-minute offers and events in Helsinki",
    description:
      "Discover what’s happening near you, right now. Restaurants, events " +
      "and last-minute offers on one map. Free app.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  other: {
    "theme-color": "#7C3AED",
  },
};

// JSON-LD structured data — Organization schema
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Yazzo",
  legalName: "Yazzo.io Oy",
  identifier: {
    "@type": "PropertyValue",
    propertyID: "Business ID (Y-tunnus)",
    value: "3561958-3",
  },
  url: BASE_URL,
  logo: `${BASE_URL}/logo2noBG.png`,
  description:
    "Yazzo is a local discovery app for real-time offers, events, and " +
    "experiences from restaurants, cafes, bars, and local businesses.",
  foundingDate: "2025",
  // City only: the company has no office, so no street address is published
  address: {
    "@type": "PostalAddress",
    addressLocality: "Helsinki",
    addressCountry: "FI",
  },
  contactPoint: {
    "@type": "ContactPoint",
    email: "info@yazzo.io",
    contactType: "customer support",
  },
  // The company's own profiles and its public site
  sameAs: [...SOCIAL_LINKS.map((social) => social.href), "https://yazzoapp.com"],
  // The founders' personal profiles belong to the people, not to the company
  founder: [
    {
      "@type": "Person",
      name: "Timo Saari",
      sameAs: "https://www.linkedin.com/in/timo-saari-373559110/",
    },
    {
      "@type": "Person",
      name: "Matti Paloniemi",
    },
    {
      "@type": "Person",
      name: "Erno Michelsson",
      sameAs: "https://www.linkedin.com/in/erno-michelsson-29283832b/",
    },
    {
      "@type": "Person",
      name: "Venla Ilona Blom",
      sameAs: "https://www.linkedin.com/in/venla-ilona-blom/",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

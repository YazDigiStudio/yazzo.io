import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

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
  title: {
    default: "Yazzo — Discover Events & Dining in the Moment",
    template: "%s | Yazzo",
  },
  description:
    "Discover local events, theatre, dining and music with real-time deals right on your map. Launching in Helsinki 2026.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    siteName: "Yazzo",
    title: "Yazzo — Discover Events & Dining in the Moment",
    description:
      "Discover local events, theatre, dining and music with real-time deals right on your map. Launching in Helsinki 2026.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Yazzo — Own the Moment",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yazzo — Discover Events & Dining in the Moment",
    description:
      "Real-time deals on local events and dining, right on your map. Launching Helsinki 2026.",
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
  url: BASE_URL,
  logo: `${BASE_URL}/logo2noBG.png`,
  description:
    "Yazzo connects people to local events and restaurants through real-time offers on a map. Launching in Helsinki 2026.",
  foundingDate: "2025",
  foundingLocation: {
    "@type": "Place",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Helsinki",
      addressCountry: "FI",
    },
  },
  contactPoint: {
    "@type": "ContactPoint",
    email: "info@yazzo.io",
    contactType: "customer support",
  },
  sameAs: [
    "https://www.linkedin.com/in/timo-saari-373559110/",
    "https://www.linkedin.com/in/venla-ilona-blom/",
    "https://www.linkedin.com/in/erno-michelsson-29283832b/",
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

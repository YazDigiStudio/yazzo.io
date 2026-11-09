import type { Metadata } from "next";
import AboutContent from "../../../components/AboutContent";
import { ABOUT_TEXT } from "../../../content/siteText";

export const metadata: Metadata = {
  // Same as the English page: online for people we send here, not for search.
  robots: { index: false, follow: false },
  title: ABOUT_TEXT.fi.metaTitle,
  description: ABOUT_TEXT.fi.metaDescription,
  alternates: {
    canonical: "https://yazzo.io/fi/about",
    languages: { en: "https://yazzo.io/about", fi: "https://yazzo.io/fi/about" },
  },
  openGraph: {
    url: "https://yazzo.io/fi/about",
    siteName: "Yazzo",
    type: "website",
    locale: "fi_FI",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Yazzo" }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og-image.jpg"],
  },
};

export default function AboutFi() {
  return <AboutContent lang="fi" />;
}

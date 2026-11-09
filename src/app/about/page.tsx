import type { Metadata } from "next";
import AboutContent from "../../components/AboutContent";
import { ABOUT_TEXT } from "../../content/siteText";

export const metadata: Metadata = {
  // Kept online for people we send here directly, but not for search:
  // yazzoapp.com is the public face of Yazzo.
  robots: { index: false, follow: false },
  title: ABOUT_TEXT.en.metaTitle,
  description: ABOUT_TEXT.en.metaDescription,
  alternates: {
    canonical: "https://yazzo.io/about",
    languages: { en: "https://yazzo.io/about", fi: "https://yazzo.io/fi/about" },
  },
  // A page-level openGraph replaces the layout's whole block, so the image
  // and site name have to be repeated here or the share preview loses them.
  openGraph: {
    url: "https://yazzo.io/about",
    siteName: "Yazzo",
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Yazzo" }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og-image.jpg"],
  },
};

export default function About() {
  return <AboutContent lang="en" />;
}

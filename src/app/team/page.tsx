import type { Metadata } from "next";
import TeamContent from "../../components/TeamContent";
import { TEAM_TEXT } from "../../content/siteText";

export const metadata: Metadata = {
  // Kept online for people we send here directly, but not for search:
  // yazzoapp.com is the public face of Yazzo.
  robots: { index: false, follow: false },
  title: TEAM_TEXT.en.metaTitle,
  description: TEAM_TEXT.en.metaDescription,
  alternates: {
    canonical: "https://yazzo.io/team",
    languages: { en: "https://yazzo.io/team", fi: "https://yazzo.io/fi/team" },
  },
  // A page-level openGraph replaces the layout's whole block, so the image
  // and site name have to be repeated here or the share preview loses them.
  openGraph: {
    url: "https://yazzo.io/team",
    siteName: "Yazzo",
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Yazzo" }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og-image.jpg"],
  },
};

export default function Team() {
  return <TeamContent lang="en" />;
}

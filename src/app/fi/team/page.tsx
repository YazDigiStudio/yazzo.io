import type { Metadata } from "next";
import TeamContent from "../../../components/TeamContent";
import { TEAM_TEXT } from "../../../content/siteText";

export const metadata: Metadata = {
  // Same as the English page: online for people we send here, not for search.
  robots: { index: false, follow: false },
  title: TEAM_TEXT.fi.metaTitle,
  description: TEAM_TEXT.fi.metaDescription,
  alternates: {
    canonical: "https://yazzo.io/fi/team",
    languages: { en: "https://yazzo.io/team", fi: "https://yazzo.io/fi/team" },
  },
  openGraph: {
    url: "https://yazzo.io/fi/team",
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

export default function TeamFi() {
  return <TeamContent lang="fi" />;
}

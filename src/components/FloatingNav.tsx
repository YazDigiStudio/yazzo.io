"use client";

// Top navigation bar — white pill with purple CTA. English by default; the
// Finnish pages (/fi/...) pass lang="fi".
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Lang, NAV_TEXT, pagePath } from "../content/siteText";

export default function FloatingNav({ lang = "en" }: { lang?: Lang }) {
  const pathname = usePathname();
  const t = NAV_TEXT[lang];

  const normalizedPath = pathname.replace(/\/$/, "") || "/";

  const linkClass = (href: string) =>
    `transition-colors text-xs md:text-sm font-medium ${
      normalizedPath === href
        ? "text-yazzo-600 font-semibold"
        : "text-gray-700 hover:text-yazzo-600"
    }`;

  // yazzo.io's homepage redirects to yazzoapp.com, so link there directly
  // instead of going through the redirect.
  const appUrl = lang === "fi" ? "https://yazzoapp.com" : "https://yazzoapp.com/en";

  return (
    <nav className="fixed top-4 left-4 right-4 z-50">
      <div className="bg-white/95 backdrop-blur-md border border-gray-200 rounded-full px-4 py-2 md:px-6 md:py-3 flex items-center gap-4 shadow-md max-w-2xl mx-auto">
        {/* Logo */}
        <a href={appUrl} className="flex items-center">
          <Image
            src="/logo2noBG.png"
            alt="Yazzo"
            width={32}
            height={32}
            className="w-6 h-6 md:w-8 md:h-8"
          />
        </a>

        {/* Navigation Links */}
        <div className="flex items-center gap-3 md:gap-4 ml-auto">
          <a href={appUrl} className={linkClass("")}>
            {t.app}
          </a>
          <Link href={pagePath("about", lang)} className={linkClass(pagePath("about", lang))}>
            {t.company}
          </Link>
          <Link href={pagePath("team", lang)} className={linkClass(pagePath("team", lang))}>
            {t.team}
          </Link>
          {/* The investor page is in English only */}
          <Link
            href="/investors"
            className={`px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-semibold transition-colors shadow-yazzo text-white ${
              normalizedPath === "/investors" ? "bg-yazzo-700" : "bg-yazzo-500 hover:bg-yazzo-600"
            }`}
          >
            {t.investors}
          </Link>
        </div>
      </div>
    </nav>
  );
}

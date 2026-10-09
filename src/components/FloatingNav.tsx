"use client";

// Top navigation bar — white pill with purple CTA
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function FloatingNav() {
  const pathname = usePathname();

  const normalizedPath = pathname.replace(/\/$/, "") || "/";

  const linkClass = (href: string) =>
    `transition-colors text-xs md:text-sm font-medium ${
      normalizedPath === href
        ? "text-yazzo-600 font-semibold"
        : "text-gray-700 hover:text-yazzo-600"
    }`;

  return (
    <nav className="fixed top-4 left-4 right-4 z-50">
      <div className="bg-white/95 backdrop-blur-md border border-gray-200 rounded-full px-4 py-2 md:px-6 md:py-3 flex items-center gap-4 shadow-md max-w-2xl mx-auto">
        {/* Logo */}
        {/* yazzo.io's homepage redirects to yazzoapp.com, so link there
            directly instead of going through the redirect. */}
        <a href="https://yazzoapp.com" className="flex items-center">
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
          <a href="https://yazzoapp.com" className={linkClass("")}>
            Yazzo App
          </a>
          <Link href="/about" className={linkClass("/about")}>
            Company
          </Link>
          {/* Team and For Investors links removed 2026-10-09: only /about is
              public for now (see netlify.toml). Restore with the redirects. */}
        </div>
      </div>
    </nav>
  );
}

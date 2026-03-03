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
        <Link href="/" className="flex items-center">
          <Image
            src="/logo2noBG.png"
            alt="Yazzo"
            width={32}
            height={32}
            className="w-6 h-6 md:w-8 md:h-8"
          />
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center gap-3 md:gap-4 ml-auto">
          <Link href="/" className={linkClass("/")}>
            Home
          </Link>
          <Link href="/about" className={linkClass("/about")}>
            Company
          </Link>
          <Link href="/team" className={linkClass("/team")}>
            Team
          </Link>
          <Link
            href="/investors"
            className={`px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-semibold transition-colors shadow-yazzo text-white ${
              normalizedPath === "/investors" ? "bg-yazzo-700" : "bg-yazzo-500 hover:bg-yazzo-600"
            }`}
          >
            For Investors
          </Link>
        </div>
      </div>
    </nav>
  );
}

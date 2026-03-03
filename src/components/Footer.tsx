// Site footer — dark purple to match the app's bottom navigation style
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-yazzo-900">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo and Company Name */}
          <div className="flex items-center gap-3">
            <Image
              src="/logo2noBG.png"
              alt="Yazzo"
              width={32}
              height={32}
              className="w-8 h-8"
            />
            <span className="text-white font-semibold text-lg">Yazzo.io Oy</span>
          </div>

          {/* Nav links */}
          <div className="flex items-center gap-6 text-sm">
            <Link href="/about" className="text-white/60 hover:text-white transition-colors">
              Company
            </Link>
            <Link href="/team" className="text-white/60 hover:text-white transition-colors">
              Team
            </Link>
            <Link href="/investors" className="text-white/60 hover:text-white transition-colors">
              Investors
            </Link>
          </div>

          {/* Contact Email */}
          <div className="flex items-center gap-2 text-white/60">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <Link
              href="mailto:info@yazzo.io"
              className="hover:text-white transition-colors text-sm"
            >
              info(at)yazzo.io
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

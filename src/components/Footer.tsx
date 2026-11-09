// Site footer — dark purple to match the app's bottom navigation style.
// Shows who runs the site: company details, grouped links and social profiles.
import Image from "next/image";
import Link from "next/link";
import { SOCIAL_LINKS } from "../lib/socialLinks";
import { SOCIAL_ICON_PATHS } from "../lib/socialIcons";

const LINK_CLASS = "text-white/60 hover:text-white transition-colors";
const HEADING_CLASS = "text-white font-semibold text-sm mb-3";

export default function Footer() {
  return (
    <footer className="bg-yazzo-900">
      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Who we are */}
        <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-4 mb-8">
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
          <p className="text-white/60 text-sm md:max-w-xl">
            Yazzo is a local discovery app for real-time offers, events and
            experiences from restaurants, cafes, bars and local businesses.
          </p>
        </div>

        {/* Link groups */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-sm">
          <div>
            <h3 className={HEADING_CLASS}>Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className={LINK_CLASS}>
                  About us
                </Link>
              </li>
              <li>
                <Link href="/team" className={LINK_CLASS}>
                  Team
                </Link>
              </li>
              <li>
                <Link href="/investors" className={LINK_CLASS}>
                  Investors
                </Link>
              </li>
              <li>
                <a href="mailto:info@yazzo.io" className={LINK_CLASS}>
                  info@yazzo.io
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className={HEADING_CLASS}>Yazzo</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://yazzoapp.com/en" className={LINK_CLASS}>
                  The Yazzo app
                </a>
              </li>
              <li>
                <a href="https://yazzoapp.com/en/how-it-works" className={LINK_CLASS}>
                  How Yazzo works
                </a>
              </li>
              <li>
                <a href="https://partner.yazzoapp.com" className={LINK_CLASS}>
                  For businesses
                </a>
              </li>
              <li>
                <a href="https://yazzoapp.com/en/support" className={LINK_CLASS}>
                  Support
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className={HEADING_CLASS}>Legal</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://yazzoapp.com/en/terms" className={LINK_CLASS}>
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="https://yazzoapp.com/en/privacy" className={LINK_CLASS}>
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className={HEADING_CLASS}>Follow us</h3>
            <div className="flex items-center gap-5">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${social.name} — Follow us`}
                  title={social.name}
                  className={LINK_CLASS}
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="w-6 h-6"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d={SOCIAL_ICON_PATHS[social.name]} />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Company details and copyright */}
        <div className="mt-10 pt-6 border-t border-white/10 text-center">
          <p className="text-white/60 text-xs">
            Yazzo.io Oy · Business ID 3561958-3 · Helsinki, Finland
          </p>
          <p className="text-white/30 text-xs mt-2">
            © {new Date().getFullYear()} Yazzo.io Oy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

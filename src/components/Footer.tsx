// Site footer — dark purple to match the app's bottom navigation style.
// Shows who runs the site: company details, grouped links and social profiles.
// English by default; the Finnish pages (/fi/...) pass lang="fi".
import Image from "next/image";
import Link from "next/link";
import { SOCIAL_LINKS } from "../lib/socialLinks";
import { SOCIAL_ICON_PATHS } from "../lib/socialIcons";
import { Lang, FOOTER_TEXT, pagePath } from "../content/siteText";

const LINK_CLASS = "text-white/60 hover:text-white transition-colors";
const HEADING_CLASS = "text-white font-semibold text-sm mb-3";

export default function Footer({ lang = "en" }: { lang?: Lang }) {
  const t = FOOTER_TEXT[lang];

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
          <p className="text-white/60 text-sm md:max-w-xl">{t.description}</p>
        </div>

        {/* Link groups */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-sm">
          <div>
            <h3 className={HEADING_CLASS}>{t.company}</h3>
            <ul className="space-y-2">
              <li>
                <Link href={pagePath("about", lang)} className={LINK_CLASS}>
                  {t.about}
                </Link>
              </li>
              <li>
                <Link href={pagePath("team", lang)} className={LINK_CLASS}>
                  {t.team}
                </Link>
              </li>
              <li>
                <Link href="/investors" className={LINK_CLASS}>
                  {t.investors}
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
            <h3 className={HEADING_CLASS}>{t.yazzo}</h3>
            <ul className="space-y-2">
              <li>
                <a href={t.appUrl} className={LINK_CLASS}>
                  {t.app}
                </a>
              </li>
              <li>
                <a href={t.howUrl} className={LINK_CLASS}>
                  {t.howItWorks}
                </a>
              </li>
              <li>
                <a href="https://partner.yazzoapp.com" className={LINK_CLASS}>
                  {t.forBusinesses}
                </a>
              </li>
              <li>
                <a href={t.supportUrl} className={LINK_CLASS}>
                  {t.support}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className={HEADING_CLASS}>{t.legal}</h3>
            <ul className="space-y-2">
              <li>
                <a href={t.termsUrl} className={LINK_CLASS}>
                  {t.terms}
                </a>
              </li>
              <li>
                <a href={t.privacyUrl} className={LINK_CLASS}>
                  {t.privacy}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className={HEADING_CLASS}>{t.follow}</h3>
            <div className="flex items-center gap-5">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${social.name} — ${t.follow}`}
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
          <p className="text-white/60 text-xs">{t.companyLine}</p>
          <p className="text-white/30 text-xs mt-2">
            © {new Date().getFullYear()} Yazzo.io Oy. {t.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}

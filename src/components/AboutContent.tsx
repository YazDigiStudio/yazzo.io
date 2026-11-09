// The Company (About) page, in English or Finnish. It is about the company:
// who we are, why we started, how we grew, what we stand for and the company
// details. The product itself is described on yazzoapp.com.
import Image from "next/image";
import Link from "next/link";
import FloatingNav from "./FloatingNav";
import Footer from "./Footer";
import LangSwitch from "./LangSwitch";
import { Lang, ABOUT_TEXT, pagePath } from "../content/siteText";

const H2_CLASS = "text-2xl md:text-3xl font-bold text-gray-900 mb-6";
const BODY_CLASS = "text-gray-600 text-lg leading-relaxed";

export default function AboutContent({ lang }: { lang: Lang }) {
  const t = ABOUT_TEXT[lang];

  return (
    <div className="min-h-screen bg-white" lang={lang}>
      <FloatingNav lang={lang} />

      {/* ── Hero ── */}
      <section className="bg-gradient-to-br from-yazzo-500 via-yazzo-600 to-yazzo-800 pt-36 pb-20 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="mb-6 text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            {t.heroTitle}
          </h1>
          <p className="text-lg md:text-xl text-white/85">{t.heroSubtitle}</p>
          <LangSwitch page="about" lang={lang} onDark />
        </div>
      </section>

      <div className="pt-16 pb-20 px-6 mx-auto max-w-4xl">
        {/* Who we are */}
        <section className="mb-14">
          <h2 className={H2_CLASS}>{t.whoTitle}</h2>
          <p className={`${BODY_CLASS} mb-4`}>{t.whoBody}</p>
          <Link
            href={pagePath("team", lang)}
            className="inline-flex items-center gap-2 text-yazzo-600 font-semibold hover:text-yazzo-800 transition-colors"
          >
            {t.meetTeam} <span aria-hidden="true">→</span>
          </Link>
        </section>

        {/* Why we started */}
        <section className="mb-14">
          <h2 className={H2_CLASS}>{t.whyTitle}</h2>
          <p className={BODY_CLASS}>{t.whyBody}</p>
        </section>

        {/* How we grew */}
        <section className="mb-14">
          <h2 className={H2_CLASS}>{t.grewTitle}</h2>
          <p className={BODY_CLASS}>{t.grewBody}</p>
        </section>

        {/* What we do */}
        <section className="mb-14 flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1">
            <h2 className={H2_CLASS}>{t.doTitle}</h2>
            <p className={`${BODY_CLASS} mb-4`}>{t.doBody}</p>
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              <a
                href={t.doAppUrl}
                className="text-yazzo-600 font-semibold hover:text-yazzo-800 transition-colors"
              >
                {t.doAppLink}
              </a>
              <a
                href="https://partner.yazzoapp.com"
                className="text-yazzo-600 font-semibold hover:text-yazzo-800 transition-colors"
              >
                {t.doPartnerLink}
              </a>
            </div>
          </div>
          <div
            className="flex-shrink-0"
            style={{
              transform: "perspective(900px) rotateY(-18deg) rotateZ(4deg)",
              filter: "drop-shadow(-10px 18px 28px rgba(0,0,0,0.28))",
            }}
          >
            <Image
              src="/images/IMG_1106.jpg"
              alt={t.imageMapAlt}
              width={220}
              height={475}
              className="rounded-[2.5rem] w-44 md:w-52 border-4 border-white"
            />
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="mb-14">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className={H2_CLASS}>{t.missionTitle}</h2>
              <p className={BODY_CLASS}>{t.missionBody}</p>
            </div>
            <div>
              <h2 className={H2_CLASS}>{t.visionTitle}</h2>
              <p className={BODY_CLASS}>{t.visionBody}</p>
            </div>
          </div>
        </section>

        {/* What we stand for */}
        <section className="mb-14 flex flex-col md:flex-row items-center gap-10">
          <div
            className="flex-shrink-0 order-2 md:order-1"
            style={{
              transform: "perspective(900px) rotateY(18deg) rotateZ(-4deg)",
              filter: "drop-shadow(10px 18px 28px rgba(0,0,0,0.28))",
            }}
          >
            <Image
              src="/images/IMG_1109.jpg"
              alt={t.imageOfferAlt}
              width={220}
              height={475}
              className="rounded-[2.5rem] w-44 md:w-52 border-4 border-white"
            />
          </div>
          <div className="flex-1 order-1 md:order-2">
            <h2 className={H2_CLASS}>{t.standTitle}</h2>
            <div className="space-y-4">
              {t.stand.map((item) => (
                <div key={item.title} className="border-l-4 border-yazzo-500 pl-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Company information */}
        <section>
          <h2 className={H2_CLASS}>{t.infoTitle}</h2>
          <dl className="grid grid-cols-1 sm:grid-cols-[auto_1fr] gap-x-10 gap-y-3 bg-yazzo-50 border border-yazzo-200 rounded-2xl p-6 md:p-8 text-gray-700">
            <dt className="font-semibold text-gray-900">{t.info.name}</dt>
            <dd>Yazzo.io Oy</dd>
            <dt className="font-semibold text-gray-900">{t.info.id}</dt>
            <dd>3561958-3</dd>
            <dt className="font-semibold text-gray-900">{t.info.founded}</dt>
            <dd>2025</dd>
            <dt className="font-semibold text-gray-900">{t.info.location}</dt>
            <dd>{t.info.locationValue}</dd>
            <dt className="font-semibold text-gray-900">{t.info.email}</dt>
            <dd>
              <a href="mailto:info@yazzo.io" className="text-yazzo-600 hover:text-yazzo-800">
                info@yazzo.io
              </a>
            </dd>
            <dt className="font-semibold text-gray-900">{t.info.website}</dt>
            <dd>
              <a href={t.doAppUrl} className="text-yazzo-600 hover:text-yazzo-800">
                yazzoapp.com
              </a>
            </dd>
          </dl>
        </section>
      </div>
      <Footer lang={lang} />
    </div>
  );
}

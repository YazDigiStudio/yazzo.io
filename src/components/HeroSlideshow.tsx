// Homepage content — hero, app screenshots, features, category pills, CTA
import Image from "next/image";
import Link from "next/link";

export default function HeroSlideshow() {
  return (
    <main>
      {/* ── Hero ── purple gradient, app-style header */}
      <section className="bg-gradient-to-br from-yazzo-500 via-yazzo-600 to-yazzo-800 pt-32 pb-24 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          {/* YAZZO badge — exact logo from the app */}
          <div className="flex justify-center mb-6">
            <Image
              src="/images/TextLogo_noBG.png"
              alt="YAZZO"
              width={160}
              height={60}
              className="h-10 w-auto"
            />
          </div>

          {/* Own the Moment! — real asset from the app, inverted white */}
          <div className="flex justify-center mb-8">
            <Image
              src="/images/Own_The_City_noBG.png"
              alt="Own the City"
              width={600}
              height={160}
              className="w-72 sm:w-96 md:w-[480px] h-auto brightness-0 invert drop-shadow-lg"
            />
          </div>

          {/* Tagline */}
          <p className="text-white/85 text-lg md:text-xl mb-10 max-w-xl mx-auto leading-relaxed">
            See everything happening in your city — dining, events, yoga, dance, music and more — live on your map.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#screenshots"
              className="bg-white text-yazzo-700 font-bold px-8 py-3.5 rounded-full hover:bg-yazzo-50 transition-colors shadow-lg text-sm md:text-base"
            >
              See How It Works
            </a>
            <Link
              href="/investors"
              className="border-2 border-white/70 text-white font-semibold px-8 py-3 rounded-full hover:bg-white/10 transition-colors text-sm md:text-base"
            >
              For Investors
            </Link>
          </div>

          {/* Launch note */}
          <p className="mt-10 text-white/60 text-sm">
            Launching in Helsinki 🇫🇮 · 2026
          </p>

          {/* Scroll down arrow */}
          <a href="#screenshots" className="inline-block mt-10 text-white/50 hover:text-white/90 transition-colors animate-bounce">
            <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </div>
      </section>

      {/* ── App in action + Features combined ── */}
      <section id="screenshots" className="bg-gray-50 py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-center text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Own the city, your way
          </h2>
          <p className="text-center text-gray-500 text-lg mb-16 max-w-2xl mx-auto">
            Yazzo gives you real-time visibility into everything happening around you — and lets you book it in seconds.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="drop-shadow-2xl mb-8">
                <Image
                  src="/images/IMG_1105.PNG"
                  alt="Yazzo map view showing Helsinki"
                  width={220}
                  height={475}
                  className="rounded-[2.5rem] w-40 sm:w-48 md:w-52 border-4 border-white"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Discover on the map</h3>
              <p className="text-gray-500 leading-relaxed text-sm">
                See dining, theatre, music and events near you in real‑time. No scrolling feeds — just your city on a live map.
              </p>
            </div>

            <div className="flex flex-col items-center text-center md:-mt-8">
              <div className="drop-shadow-2xl mb-8">
                <Image
                  src="/images/IMG_1109.PNG"
                  alt="Yazzo offer detail — Nordic Tasting Menu"
                  width={220}
                  height={475}
                  className="rounded-[2.5rem] w-40 sm:w-48 md:w-52 border-4 border-white"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">What's on right now</h3>
              <p className="text-gray-500 leading-relaxed text-sm">
                See what's open, what's on, and what's available today — before it fills up.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="drop-shadow-2xl mb-8">
                <Image
                  src="/images/IMG_1112.PNG"
                  alt="Yazzo My Offers screen with QR code"
                  width={220}
                  height={475}
                  className="rounded-[2.5rem] w-40 sm:w-48 md:w-52 border-4 border-white"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Reserve & redeem</h3>
              <p className="text-gray-500 leading-relaxed text-sm">
                Book directly in the app. Show your QR code at the door. Done.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Category pills ── mirrors the app's filter row */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
            What can you find?
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Dining",
              "Events",
              "Music",
              "Sports & Fitness",
              "Yoga & Wellness",
              "Dance",
              "Theatre",
              "Art & Exhibitions",
              "Kids & Family",
              "Nightlife",
            ].map((label) => (
              <span
                key={label}
                className="bg-white border border-gray-200 text-gray-700 font-medium px-5 py-2.5 rounded-full shadow-sm text-sm"
              >
                {label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ── purple gradient, mirrors hero */}
      <section className="bg-gradient-to-br from-yazzo-600 to-yazzo-900 py-20 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <div className="flex justify-center mb-6">
            <Image
              src="/images/TextLogo_noBG.png"
              alt="YAZZO"
              width={160}
              height={60}
              className="h-10 w-auto"
            />
          </div>
          <div className="flex justify-center mb-6">
            <Image
              src="/images/Own_The_City_noBG.png"
              alt="Own the City"
              width={600}
              height={160}
              className="w-64 sm:w-80 md:w-96 h-auto brightness-0 invert"
            />
          </div>
          <p className="text-white/75 text-lg mb-10">
            Launching in Helsinki in 2026. Explore the pitch deck or learn about our mission.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/investors"
              className="bg-white text-yazzo-700 font-bold px-8 py-4 rounded-full hover:bg-yazzo-50 transition-colors shadow-lg text-sm md:text-base"
            >
              View Pitch Deck
            </Link>
            <Link
              href="/about"
              className="border-2 border-white/70 text-white font-semibold px-8 py-3.5 rounded-full hover:bg-white/10 transition-colors text-sm md:text-base"
            >
              Our Mission
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

import type { Metadata } from "next";
import FloatingNav from "../../components/FloatingNav";
import Footer from "../../components/Footer";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Company",
  description:
    "Learn how Yazzo is building the real-time layer of the city — connecting people with everything happening around them, from dining and events to yoga, dance and more. Launching Helsinki 2026.",
  openGraph: {
    url: "https://yazzo.io/about",
  },
};

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <FloatingNav />

      {/* ── Hero ── */}
      <section className="bg-gradient-to-br from-yazzo-500 via-yazzo-600 to-yazzo-800 pt-36 pb-24 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="mb-6 text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            Yazzo is the real-time layer of the city
          </h1>
          <p className="text-lg md:text-xl text-white/85">
            Connecting people with everything happening around them — dining, events, yoga, dance, music and more
          </p>

          {/* Scroll down arrow */}
          <a href="#problem" className="inline-block mt-10 text-white/50 hover:text-white/90 transition-colors animate-bounce">
            <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </div>
      </section>

      <div className="pt-20 pb-20 px-6 mx-auto max-w-4xl">
        {/* The Problem */}
        <section id="problem" className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">The Problem</h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-4">
            Restaurants lose revenue during slow hours. Theatres and concerts play to half-empty halls. Yoga studios and dance schools run classes with open spots. Sports facilities sit underused.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            The current solution — social media ads — is too slow, too broad, and not built for real-time, location-aware discovery. Businesses pay to reach everyone and convert few. There is no layer between "something is happening right now" and the people nearby who would want to know.
          </p>
        </section>

        {/* Our Solution */}
        <section className="mb-16 flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Our Solution</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-4">
              Yazzo is a map-based app that shows everything happening in the city — right now and tomorrow. Dining, events, concerts, yoga classes, dance courses, theatre, sports. If it is happening nearby, it is on the map.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Partners publish in seconds. Users discover, decide, and book — all in one flow. No scrolling feeds. No ads that miss the moment. Just the city, live.
            </p>
          </div>
          <div
            className="flex-shrink-0"
            style={{
              transform: "perspective(900px) rotateY(-18deg) rotateZ(4deg)",
              filter: "drop-shadow(-10px 18px 28px rgba(0,0,0,0.28))",
            }}
          >
            <Image
              src="/images/IMG_1106.PNG"
              alt="Yazzo map with live deals in Helsinki"
              width={220}
              height={475}
              className="rounded-[2.5rem] w-44 md:w-52 border-4 border-white"
            />
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Mission</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Build the real-time layer of the city — connecting people with everything happening around them, and giving every local business a better way to reach nearby customers than social media ads.
              </p>
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Vision</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Become the leading local discovery platform in the Nordics — the first place people open when they want to know what to do today, and the first place businesses publish when they have something to offer right now.
              </p>
            </div>
          </div>
        </section>

        {/* Business Model */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Business Model</h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            Yazzo offers two ways for partners to reach users — one for visibility, one for conversion.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-gray-200 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Visibility listing</h3>
              <p className="text-gray-600 leading-relaxed">
                Partners pay a small flat fee to appear on the map. Suitable for any business that wants to be discoverable — restaurants, studios, venues, event organizers. Low barrier, predictable revenue for Yazzo.
              </p>
            </div>
            <div className="border border-yazzo-500 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Offer listing</h3>
              <p className="text-gray-600 leading-relaxed">
                Partners publish a time-limited offer — a last-minute deal, an available class spot, a discounted ticket. Users book and pay directly in the app. Yazzo takes a commission per transaction. Revenue scales with usage.
              </p>
            </div>
          </div>
        </section>

        {/* Sustainability & Impact */}
        <section className="mb-16 flex flex-col md:flex-row items-center gap-10">
          <div
            className="flex-shrink-0 order-2 md:order-1"
            style={{
              transform: "perspective(900px) rotateY(18deg) rotateZ(-4deg)",
              filter: "drop-shadow(10px 18px 28px rgba(0,0,0,0.28))",
            }}
          >
            <Image
              src="/images/IMG_1109.PNG"
              alt="Yazzo offer detail view"
              width={220}
              height={475}
              className="rounded-[2.5rem] w-44 md:w-52 border-4 border-white"
            />
          </div>
          <div className="flex-1 order-1 md:order-2">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Sustainability & Impact</h2>
            <div className="space-y-4">
              <div className="border-l-4 border-yazzo-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Optimize existing resources</h3>
                <p className="text-gray-600">
                  Instead of letting seats go empty, we help venues and restaurants maximize capacity with what they already have.
                </p>
              </div>
              <div className="border-l-4 border-yazzo-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Increase accessibility</h3>
                <p className="text-gray-600">
                  Make cultural experiences more accessible through affordable, last-minute offers that open doors for everyone.
                </p>
              </div>
              <div className="border-l-4 border-yazzo-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Support small entrepreneurs</h3>
                <p className="text-gray-600">
                  Give small theatres, performers, and restaurants visibility without large marketing budgets.
                </p>
              </div>
              <div className="border-l-4 border-yazzo-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Strengthen local identity</h3>
                <p className="text-gray-600">
                  Guide consumers to local services and boost urban cultural vibrancy through location-based discovery.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
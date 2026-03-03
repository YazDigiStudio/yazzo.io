import type { Metadata } from "next";
import FloatingNav from "../../components/FloatingNav";
import Footer from "../../components/Footer";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Company",
  description:
    "Learn how Yazzo is transforming local event discovery by connecting venues and audiences through real-time, location-based offers. Launching Helsinki 2026.",
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
            Yazzo transforms how people discover local experiences
          </h1>
          <p className="text-lg md:text-xl text-white/85">
            Connecting event organizers and restaurants with audiences through real-time, location-based offers
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
            Events and restaurants lose revenue when seats stay empty. Cultural happenings can't react fast when ticket sales slow. Restaurants face low-traffic hours and food waste.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            Current channels like social media and ads are too slow and not location-aware. They don't allow organizers to respond quickly to changing demand.
          </p>
        </section>

        {/* Our Solution */}
        <section className="mb-16 flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Our Solution</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-4">
              Yazzo connects people to local events and restaurants through real-time offers on a map. Organizers publish instant deals — for example "–50% for tonight's concert".
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Users reserve directly in the app, pay a small commission, and receive a QR code to redeem. Everyone benefits: more visibility, higher occupancy, less waste.
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
                Help event organizers and restaurants fill empty seats through real-time, location-based offers that connect supply with demand at the perfect moment.
              </p>
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Vision</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Become the leading platform for promoting new experiences and local services in the Nordics, transforming how people discover and enjoy their cities.
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
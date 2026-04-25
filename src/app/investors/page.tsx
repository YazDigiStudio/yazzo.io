import type { Metadata } from "next";
import FloatingNav from "../../components/FloatingNav";
import Footer from "../../components/Footer";
import BookingModal from "../../components/BookingModal";
import Link from "next/link";
import Image from "next/image";
import { CalendarDays, Building2, Tag, Map, Sparkles, Target, Ticket, MapPin, Globe } from "lucide-react";

export const metadata: Metadata = {
  title: "Investors",
  description:
    "Yazzo pre-seed investment opportunity. Real-time deals for local events and dining launching in Helsinki 2026. Explore our vision, market, and business model.",
  openGraph: {
    url: "https://yazzo.io/investors",
  },
};

export default function Investors() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hidden form for Netlify to detect at build time */}
      <form name="booking" data-netlify="true" hidden>
        <input type="hidden" name="form-name" value="booking" />
        <input type="text" name="name" />
        <input type="email" name="email" />
        <input type="date" name="preferred-date" />
        <input type="text" name="preferred-time" />
        <textarea name="message" />
      </form>

      <FloatingNav />

      {/* ── Hero ── */}
      <section className="bg-gradient-to-br from-yazzo-500 via-yazzo-600 to-yazzo-800 pt-36 pb-24 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="inline-block bg-white/20 text-white text-xs font-bold tracking-[0.3em] uppercase px-4 py-1.5 rounded-full mb-8">
            Pre-Seed Round · €60–90K
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Real-time capacity<br />for cities.
          </h1>
          <p className="text-white/85 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
            Yazzo is a real-time capacity layer for cities — cultural venues and restaurants publish offers, people nearby reserve instantly, and redemption is verified on-site.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/YAZZO_pitch_deck.pdf"
              download
              className="inline-flex items-center gap-2 bg-white text-yazzo-700 font-bold px-8 py-3.5 rounded-full hover:bg-yazzo-50 transition-colors shadow-lg text-sm md:text-base"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download Deck
            </a>
            <BookingModal
              buttonLabel="Book a Meeting"
              buttonClassName="border-2 border-white/70 text-white font-semibold px-8 py-3 rounded-full hover:bg-white/10 transition-colors text-sm md:text-base"
            />
          </div>

          {/* Scroll down arrow */}
          <a href="#problem" className="inline-block mt-10 text-white/50 hover:text-white/90 transition-colors animate-bounce">
            <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </div>
      </section>

      {/* ── The Problem ── */}
      <section id="problem" className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm font-semibold text-yazzo-600 uppercase tracking-widest mb-6">The Problem</p>
          <div className="space-y-1 mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Empty seats.</h2>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Slow marketing.</h2>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">No real-time tools.</h2>
          </div>
          <p className="text-gray-600 text-lg leading-relaxed mb-4 max-w-2xl">
            Every day, cultural events and restaurants operate below capacity. Seats remain empty, tables go unfilled, and marketing tools are too slow to react when demand stalls.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed max-w-2xl">
            Supply and demand exist at the same moment — but they don't meet fast enough. This is a structural inefficiency in urban economies.
          </p>
        </div>
      </section>

      {/* ── The Solution ── */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm font-semibold text-yazzo-600 uppercase tracking-widest mb-4">The Solution</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
            Yazzo closes the loop.
          </h2>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {[
              { step: "1", title: "Publish", desc: "Venues create real-time offers when they have empty capacity." },
              { step: "2", title: "Discover", desc: "Nearby users see them on a live map and reserve instantly." },
              { step: "3", title: "Redeem", desc: "Reservations are validated on-site via QR code or 6-digit code." },
            ].map((item) => (
              <div key={item.step} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <div className="w-10 h-10 rounded-full bg-yazzo-500 text-white font-bold flex items-center justify-center text-lg mb-5">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-500 leading-relaxed text-sm">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-yazzo-50 border border-yazzo-200 rounded-2xl p-8">
            <h3 className="text-lg font-bold text-gray-900 mb-5">Three-app ecosystem</h3>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { label: "Consumer app", desc: "Real-time discovery and reservations" },
                { label: "Partner app", desc: "Publishing and managing offers and companies" },
                { label: "Staff app", desc: "On-site QR and 6-digit validation" },
              ].map((app) => (
                <div key={app.label} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-yazzo-500 mt-2 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">{app.label}</p>
                    <p className="text-gray-500 text-sm">{app.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-gray-400 text-sm mt-5">All apps run on a shared real-time backend infrastructure.</p>
          </div>
        </div>
      </section>

      {/* ── Business Model ── */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm font-semibold text-yazzo-600 uppercase tracking-widest mb-4">Business Model</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">SaaS + marketplace.</h2>

          {/* For Partners */}
          <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">For Partners</p>
          <div className="mb-3">
            <p className="text-sm font-semibold text-gray-600 mb-3">Advertising — pay for visibility on the map</p>
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              {[
                {
                  icon: <CalendarDays className="w-6 h-6 text-yazzo-500" />,
                  title: "Single Listing",
                  price: "€5",
                  unit: "/day",
                  desc: "Per listing, per day. For small or occasional publishers — one event, one class, one announcement. No commitment.",
                },
                {
                  icon: <Building2 className="w-6 h-6 text-yazzo-500" />,
                  title: "Monthly Subscription",
                  price: "€29.90",
                  unit: "/mo",
                  desc: "Per company. Includes 10 free listings per month. First two months free trial. Predictable recurring B2B revenue.",
                },
              ].map((item) => (
                <div key={item.title} className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm">
                  <div className="mb-4">{item.icon}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-2xl font-bold text-yazzo-600 mb-3">
                    {item.price}<span className="text-base font-normal text-gray-400">{item.unit}</span>
                  </p>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-12">
            <p className="text-sm font-semibold text-gray-600 mb-3">Offers — publish a deal, pay nothing</p>
            <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm max-w-sm">
              <div className="mb-4"><Tag className="w-6 h-6 text-yazzo-500" /></div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Reservation Fee</h3>
              <p className="text-2xl font-bold text-yazzo-600 mb-3">% of deal</p>
              <p className="text-gray-500 text-sm leading-relaxed">
                Free for any partner publishing an offer with a discount. No upfront cost, no monthly commitment. The discount is the entry — Yazzo handles the rest.
              </p>
            </div>
          </div>

          {/* For Users */}
          <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">For Users</p>
          <div className="grid sm:grid-cols-2 gap-6 max-w-2xl">
            <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm">
              <div className="mb-4"><Map className="w-6 h-6 text-yazzo-500" /></div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Free</h3>
              <p className="text-2xl font-bold text-yazzo-600 mb-3">€0</p>
              <p className="text-gray-500 text-sm leading-relaxed">
                Browse and discover everything on the map. Ads are always free to view. Pay a small booking fee when claiming an offer.
              </p>
            </div>
            <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm">
              <div className="mb-4"><Sparkles className="w-6 h-6 text-yazzo-500" /></div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Premium</h3>
              <p className="text-2xl font-bold text-yazzo-600 mb-3">
                €5.99<span className="text-base font-normal text-gray-400">/mo</span>
              </p>
              <p className="text-gray-500 text-sm leading-relaxed">
                10 free offer bookings per month — booking fee waived. Enhanced features and priority access.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Pre-Seed Round ── */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm font-semibold text-yazzo-600 uppercase tracking-widest mb-4">Pre-Seed Round</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Raising €60–90K.</h2>
          <p className="text-gray-600 text-lg mb-12 max-w-2xl">
            A disciplined proof round — not aggressive scaling. The purpose is to validate local liquidity, unit economics, and partner retention in Helsinki.
          </p>

          <div className="max-w-xl">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-6">Milestones within runway</h3>
              <div className="relative">
                <div className="absolute left-[6px] top-2 bottom-2 w-0.5 bg-yazzo-100" />
                <div className="space-y-5">
                  {[
                    { date: "Apr 26", desc: "Product live · first partners onboarding" },
                    { date: "May–Jun", desc: "2,000–5,000 app downloads · partners and consumers in free first month" },
                    { date: "Jul", desc: "First renewals · 80–120 paying partners · est. 2,500 paying consumers" },
                    { date: "Aug–Sep", desc: "Consistent weekly reservations · measurable unit economics" },
                    { date: "Oct–Jan", desc: "Demonstrated local liquidity · next round ready" },
                  ].map((item) => (
                    <div key={item.date} className="flex gap-4 relative">
                      <div className="w-3 h-3 rounded-full bg-yazzo-500 flex-shrink-0 mt-1 z-10" />
                      <div>
                        <span className="text-xs font-bold text-yazzo-600 uppercase tracking-wide">{item.date}</span>
                        <p className="text-gray-600 text-sm leading-relaxed mt-0.5">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <p className="text-gray-400 text-xs mt-6">These milestones unlock the next funding round.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Market Entry ── */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm font-semibold text-yazzo-600 uppercase tracking-widest mb-4">Market Entry</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">Focused entry. Scalable model.</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: <Target className="w-6 h-6 text-yazzo-500 mx-auto" />, label: "Pilot in Helsinki", desc: "One district cluster first — density over breadth" },
              { icon: <Ticket className="w-6 h-6 text-yazzo-500 mx-auto" />, label: "Culture & activities", desc: "Vertical focus before horizontal expansion" },
              { icon: <MapPin className="w-6 h-6 text-yazzo-500 mx-auto" />, label: "Finnish cities", desc: "City-by-city rollout after Helsinki validation" },
              { icon: <Globe className="w-6 h-6 text-yazzo-500 mx-auto" />, label: "Europe growth", desc: "Long-term ambition across Europe" },
            ].map((item) => (
              <div key={item.label} className="bg-gray-50 rounded-2xl p-6 text-center">
                <div className="mb-3">{item.icon}</div>
                <p className="font-bold text-gray-900 text-sm mb-2">{item.label}</p>
                <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Founder ── */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm font-semibold text-yazzo-600 uppercase tracking-widest mb-10">Founder</p>
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8 max-w-xl">
            <Image
              src="/TimoSquare.png"
              alt="Timo Saari"
              width={100}
              height={100}
              className="rounded-2xl flex-shrink-0 w-24 h-24 object-cover"
            />
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-1">Timo Saari</h3>
              <p className="text-yazzo-500 font-semibold mb-4">Founder & CEO</p>
              <p className="text-gray-600 leading-relaxed">
                Software developer with strong AI expertise. Former choreographer in Finland's major theatres and co-founder of two cultural companies. Full-time committed to building and launching the product.
              </p>
              <Link
                href="https://www.linkedin.com/in/timo-saari-373559110/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-gray-500 hover:text-yazzo-600 transition-colors mt-4 text-sm"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="bg-gradient-to-br from-yazzo-600 to-yazzo-900 py-20 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <div className="flex justify-center mb-6">
            <Image
              src="/images/Own_The_City_noBG.png"
              alt="Own the City"
              width={600}
              height={160}
              className="w-56 sm:w-72 h-auto brightness-0 invert"
            />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Interested in investing?
          </h2>
          <p className="text-white/75 text-lg mb-10">
            We're raising €60–90K to validate the model in Helsinki. Get in touch for materials or a meeting.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/YAZZO_pitch_deck.pdf"
              download
              className="inline-flex items-center gap-2 bg-white text-yazzo-700 font-bold px-8 py-4 rounded-full hover:bg-yazzo-50 transition-colors shadow-lg text-sm md:text-base"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download Deck
            </a>
            <BookingModal
              buttonLabel="Book a Meeting"
              buttonClassName="border-2 border-white/70 text-white font-semibold px-8 py-3.5 rounded-full hover:bg-white/10 transition-colors text-sm md:text-base"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

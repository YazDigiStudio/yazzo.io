import type { Metadata } from "next";
import FloatingNav from "../../components/FloatingNav";
import Footer from "../../components/Footer";
import BookingModal from "../../components/BookingModal";

export const metadata: Metadata = {
  title: "Investors",
  description:
    "Yazzo pre-seed investment opportunity. Real-time capacity for cities — launching in Helsinki 2026. Book a meeting to learn more.",
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
            Pre-Seed Round
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Cities are full of unused<br />capacity every day.
          </h1>
          <p className="text-white/70 text-lg md:text-xl mb-4 max-w-2xl mx-auto">
            Yoga classes. Restaurant tables. Dance courses. Concert seats. Theaters.
          </p>
          <p className="text-white/90 text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
            Yazzo is everything happening in your city — discover it, book it, be there.
          </p>
          <p className="text-white/70 text-base md:text-lg mb-10">
            Launching in Helsinki in 2026. We&apos;re raising a pre-seed round to fund it.
          </p>
          <BookingModal
            buttonLabel="Book a Meeting"
            buttonClassName="bg-white text-yazzo-700 font-bold px-8 py-3.5 rounded-full hover:bg-yazzo-50 transition-colors shadow-lg text-sm md:text-base"
          />
        </div>
      </section>

      <Footer />
    </div>
  );
}

import type { Metadata } from "next";
import FloatingNav from "../../components/FloatingNav";
import Footer from "../../components/Footer";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Team",
  description:
    "Meet the people building Yazzo — combining first-hand experience from Finland's cultural sector with modern software development expertise.",
  openGraph: {
    url: "https://yazzo.io/team",
  },
};

export default function Team() {
  return (
    <div className="min-h-screen bg-white">
      <FloatingNav />

      <div className="pt-24 pb-20 px-6 mx-auto max-w-5xl">
        {/* Hero Section */}
        <div className="mb-16 text-center">
          <h1 className="mb-6 text-4xl md:text-5xl font-bold text-gray-900">
            Our Team
          </h1>
          <p className="text-lg md:text-xl text-gray-600">
            Meet the people building Yazzo
          </p>
        </div>

        {/* Team Members */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Timo Saari */}
          <div className="bg-white border border-gray-100 rounded-2xl p-8 text-center shadow-sm">
            <div className="mb-6 flex justify-center">
              <Image
                src="/TimoSquare.png"
                alt="Timo Saari"
                width={200}
                height={200}
                className="rounded-xl"
              />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Timo Saari</h3>
            <p className="text-yazzo-400 font-semibold mb-4">Founder & CEO</p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Timo is a software developer with strong AI expertise. Former choreographer in Finland’s major theatres and co-founder of two cultural companies, combining creative leadership with technical execution. This unique blend of creative and technical expertise drives Yazzo's vision to make culture more accessible and sustainable.            </p>
            <Link
              href="https://www.linkedin.com/in/timo-saari-373559110/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-gray-500 hover:text-yazzo-600 transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              LinkedIn
            </Link>
          </div>

          {/* Venla Ilona Blom */}
          <div className="bg-white border border-gray-100 rounded-2xl p-8 text-center shadow-sm">
            <div className="mb-6 flex justify-center">
              <Image
                src="/venlaSquare.png"
                alt="Venla Ilona Blom"
                width={200}
                height={200}
                className="rounded-xl"
              />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Venla Ilona Blom</h3>
            <p className="text-yazzo-400 font-semibold mb-4">Co-Founder & Creative Lead</p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Venla brings deep expertise in arts and cultural production, having worked extensively in Finland's vibrant cultural sector. Her experience in event management, audience engagement, and creative strategy helps Yazzo understand and serve the needs of event organizers, theatres, and cultural venues.
            </p>
            <Link
              href="https://www.linkedin.com/in/venla-ilona-blom/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-gray-500 hover:text-yazzo-600 transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              LinkedIn
            </Link>
          </div>
          {/* Erno Michelsson */}
          <div className="bg-white border border-gray-100 rounded-2xl p-8 text-center shadow-sm">
            <div className="mb-6 flex justify-center">
              <Image
                src="/ernoSquare.JPG"
                alt="Erno Michelsson"
                width={200}
                height={200}
                className="rounded-xl"
              />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Erno Michelsson</h3>
            <p className="text-yazzo-400 font-semibold mb-4">Co-Founder & Full-Stack Developer</p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Erno brings a decade of hands-on technical experience to Yazzo, combining a background in industrial science with modern software development. Having worked in process data analytics and laboratory systems, he applies engineering precision to building Yazzo&apos;s full-stack infrastructure — from real-time backend architecture to the multi-app ecosystem that powers the platform.
            </p>
            <Link
              href="https://www.linkedin.com/in/erno-michelsson-29283832b/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-gray-500 hover:text-yazzo-600 transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              LinkedIn
            </Link>
          </div>
        </div>

        {/* Our Strength Section */}
        <div className="bg-yazzo-50 border border-yazzo-200 rounded-2xl p-8 md:p-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Our Strength</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            We combine first-hand experience from the cultural sector with modern software development skills. Having faced the challenge of empty seats and last-minute ticket sales ourselves, we understand the pain points of event organizers intimately. This insider perspective, paired with technical capability, positions us uniquely to build a solution that truly serves the needs of both venues and audiences.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

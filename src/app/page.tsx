import type { Metadata } from "next";
import HeroSlideshow from "../components/HeroSlideshow";
import FloatingNav from "../components/FloatingNav";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Yazzo — The Real-Time Layer of Your City",
  description:
    "See everything happening in your city — dining, events, yoga, dance, music and more — live on your map. Launching in Helsinki 2026.",
  openGraph: {
    url: "https://yazzo.io",
  },
};

// JSON-LD structured data — SoftwareApplication schema for the Yazzo app
const appSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Yazzo",
  applicationCategory: "LifestyleApplication",
  operatingSystem: "iOS, Android",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "EUR",
  },
  description:
    "See everything happening in your city — dining, events, yoga, dance, music and more — live on your map. Launching in Helsinki 2026.",
  url: "https://yazzo.io",
};

export default function Home() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(appSchema) }}
      />
      <FloatingNav />
      <HeroSlideshow />
      <Footer />
    </div>
  );
}

import React from "react";
import BackgroundShapes from "./components/BackgroundShapes";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import StatsSection from "./components/StatsSection";
import OffersSection from "./components/OffersSection";
import LinkedInSection from "./components/LinkedInSection";
import FounderSection from "./components/FounderSection";
import Footer from "./components/Footer";
import Preloader from "./components/Preloader";
import { useState, useEffect } from "react";

export default function App() {
  const [showPreloader, setShowPreloader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPreloader(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen w-full bg-[#f8f5f1] relative overflow-hidden">
      {showPreloader && (
        <div
          id="preloader"
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#f8f5f1]"
        >
          <Preloader />
        </div>
      )}

      <div className="pointer-events-none absolute inset-0 -z-10">
        <BackgroundShapes />
      </div>

      <main className="relative z-10 flex min-h-screen w-full flex-col">
        <Header />
        <HeroSection />
        <StatsSection />
        <OffersSection />
        <LinkedInSection />
        <div className="section-spacer" aria-hidden="true" />
        <FounderSection />
        <Footer />
      </main>
    </div>
  );
}
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
    <div className="bg-[#f8f5f1] relative size-full">
      {showPreloader && (
        <div id="preloader">
          <Preloader />
        </div>
      )}
      <BackgroundShapes />
      <Footer />
      <FounderSection />
      <LinkedInSection />
      <OffersSection />
      <StatsSection />
      <HeroSection />
      <Header />
    </div>
  );
}
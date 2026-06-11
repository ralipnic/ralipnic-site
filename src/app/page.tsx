import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import FeaturedTracks from "@/components/home/FeaturedTracks";
import SocialStrip from "@/components/home/SocialStrip";
import { PlayerProvider } from "@/components/player/PlayerContext";

export const metadata: Metadata = {
  title: "RALIPNIC | رالیپ نیک — Persian & Azerbaijani Rap",
  description:
    "Official website of RALIPNIC (رالیپ نیک), independent Persian and Azerbaijani rapper. 18 released tracks.",
};

export default function HomePage() {
  return (
    <PlayerProvider>
      <Navbar />
      <main>
        <HeroSection />
        <SocialStrip />
        <FeaturedTracks />
      </main>
      <Footer />
    </PlayerProvider>
  );
}

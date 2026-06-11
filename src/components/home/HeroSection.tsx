"use client";

import Link from "next/link";
import { Play } from "lucide-react";
import StatBlock from "@/components/ui/StatBlock";
import { tracks } from "@/lib/tracks";
import { usePlayer } from "@/components/player/PlayerContext";

export default function HeroSection() {
  const { toggle } = usePlayer();

  function handleListenNow() {
    // Play first track
    toggle(tracks[0]);
  }

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(200,0,0,0.12) 0%, transparent 65%), #080808",
      }}
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(rgba(232,28,28,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(232,28,28,0.04) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Vertical red accent line */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-blood-600/50 to-transparent" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 sm:px-6 max-w-4xl mx-auto pt-24 pb-16">
        {/* Persian name — decorative eyebrow */}
        <p
          className="fa-text text-blood-500/70 text-sm tracking-[0.4em] mb-6 font-light"
          aria-label="Persian name: Raliph Nik"
        >
          رالیپ نیک
        </p>

        {/* Main title */}
        <h1
          className="glitch text-white font-black uppercase leading-none mb-4 select-none"
          data-text="RALIPNIC"
          style={{
            fontFamily: "Impact, Arial Black, sans-serif",
            fontSize: "clamp(64px, 18vw, 180px)",
            letterSpacing: "-0.02em",
          }}
        >
          RALIPNIC
        </h1>

        {/* Separator */}
        <div className="flex items-center gap-3 mb-6">
          <div className="h-px w-16 bg-blood-700" />
          <span className="text-blood-500 text-xs uppercase tracking-[0.3em]">
            Independent · Persian &amp; Azerbaijani Rap
          </span>
          <div className="h-px w-16 bg-blood-700" />
        </div>

        {/* Tagline */}
        <p className="text-void-400 text-base sm:text-lg max-w-md leading-relaxed mb-10">
          Raw lyricism. Two languages. No label.
          <br />
          <span className="fa-text text-void-500 text-sm">
            ترانه‌سرایی خام، دو زبان، بدون برچسب.
          </span>
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-16">
          <button
            onClick={handleListenNow}
            className="flex items-center gap-3 px-7 py-3.5 bg-blood-600 hover:bg-blood-500 text-white font-semibold uppercase tracking-widest text-sm transition-colors rounded-sm glow-red-box"
          >
            <Play size={16} className="fill-white" />
            Listen Now
          </button>
          <Link
            href="/music"
            className="flex items-center gap-2 px-7 py-3.5 border border-void-700 hover:border-blood-600 text-void-300 hover:text-white font-medium uppercase tracking-widest text-sm transition-all rounded-sm"
          >
            All Tracks
          </Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 sm:gap-16 border-t border-void-800 pt-10">
          <StatBlock
            value="18"
            label="Tracks Released"
            labelFa="آهنگ منتشر شده"
          />
          <StatBlock
            value="2"
            label="Languages"
            labelFa="زبان"
          />
          <StatBlock
            value="100%"
            label="Independent"
            labelFa="مستقل"
          />
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce opacity-30">
        <div className="w-px h-10 bg-blood-500" />
      </div>
    </section>
  );
}

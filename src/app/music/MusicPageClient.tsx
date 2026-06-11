"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import TrackCard from "@/components/ui/TrackCard";
import { PlayerProvider } from "@/components/player/PlayerContext";
import { tracks } from "@/lib/tracks";
import { cn } from "@/lib/utils";

type Filter = "all" | "persian" | "azerbaijani";

export default function MusicPageClient() {
  const [filter, setFilter] = useState<Filter>("all");
  const [view, setView] = useState<"row" | "grid">("row");

  const filtered = tracks.filter((t) => {
    if (filter === "persian") return t.genre.includes("Persian");
    if (filter === "azerbaijani") return t.genre.includes("Azerbaijani");
    return true;
  });

  const filterButtons: { key: Filter; label: string; labelFa: string }[] = [
    { key: "all", label: "All Tracks", labelFa: "همه" },
    { key: "persian", label: "Persian Rap", labelFa: "فارسی" },
    { key: "azerbaijani", label: "Azerbaijani Rap", labelFa: "آذربایجانی" },
  ];

  return (
    <PlayerProvider>
      <Navbar />
      <main className="min-h-screen pt-24 pb-8">
        {/* Page header */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 mb-10">
          <div
            className="relative border-l-2 border-blood-600 pl-6 py-2"
            style={{
              background:
                "linear-gradient(90deg, rgba(232,28,28,0.06) 0%, transparent 60%)",
            }}
          >
            <p className="text-blood-500 text-xs uppercase tracking-[0.3em] mb-1">
              Full Discography
            </p>
            <h1
              className="text-white font-black text-3xl sm:text-5xl uppercase"
              style={{
                fontFamily: "Impact, Arial Black, sans-serif",
                letterSpacing: "0.05em",
              }}
            >
              Music
            </h1>
            <p className="fa-text text-void-500 text-sm mt-1">
              ۱۸ آهنگ — رالیپ نیک
            </p>
          </div>
        </div>

        {/* Controls bar */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 mb-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            {/* Filters */}
            <div className="flex flex-wrap gap-2">
              {filterButtons.map((btn) => (
                <button
                  key={btn.key}
                  onClick={() => setFilter(btn.key)}
                  className={cn(
                    "px-4 py-1.5 text-xs uppercase tracking-widest border rounded-sm transition-all",
                    filter === btn.key
                      ? "bg-blood-600 border-blood-600 text-white"
                      : "border-void-700 text-void-400 hover:border-void-500 hover:text-void-200"
                  )}
                >
                  {btn.label}
                  <span className="fa-text ml-2 normal-case text-[10px] opacity-60">
                    {btn.labelFa}
                  </span>
                </button>
              ))}
            </div>

            {/* View toggle */}
            <div className="flex gap-1 border border-void-800 rounded-sm overflow-hidden">
              <button
                onClick={() => setView("row")}
                className={cn(
                  "px-3 py-1.5 text-xs transition-colors",
                  view === "row"
                    ? "bg-void-700 text-white"
                    : "text-void-500 hover:text-void-300"
                )}
                aria-label="List view"
              >
                ☰
              </button>
              <button
                onClick={() => setView("grid")}
                className={cn(
                  "px-3 py-1.5 text-xs transition-colors",
                  view === "grid"
                    ? "bg-void-700 text-white"
                    : "text-void-500 hover:text-void-300"
                )}
                aria-label="Grid view"
              >
                ⊞
              </button>
            </div>
          </div>

          {/* Track count */}
          <p className="text-void-600 text-xs mt-3 uppercase tracking-widest">
            {filtered.length} track{filtered.length !== 1 ? "s" : ""}
          </p>
        </div>

        {/* Track list */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {view === "row" ? (
            <div className="border border-void-800 rounded-sm overflow-hidden">
              <div className="divide-y divide-void-800/60">
                {filtered.map((track, i) => (
                  <TrackCard
                    key={track.id}
                    track={track}
                    index={i}
                    layout="row"
                  />
                ))}
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
              {filtered.map((track, i) => (
                <TrackCard
                  key={track.id}
                  track={track}
                  index={i}
                  layout="grid"
                />
              ))}
            </div>
          )}
        </div>

        {/* SoundCloud CTA */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 mt-12">
          <div className="border border-blood-800/40 bg-blood-900/10 rounded-sm p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="text-white font-semibold mb-1">
                Listen on SoundCloud
              </p>
              <p className="text-void-500 text-sm">
                Stream all tracks for free.
              </p>
              <p className="fa-text text-void-600 text-xs mt-0.5">
                تمام آهنگ‌ها را رایگان گوش بدید
              </p>
            </div>
            <a
              href="https://soundcloud.com/ali-alipoor-141068609"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 px-6 py-3 bg-blood-600 hover:bg-blood-500 text-white text-sm font-semibold uppercase tracking-widest transition-colors rounded-sm"
            >
              SoundCloud ↗
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </PlayerProvider>
  );
}

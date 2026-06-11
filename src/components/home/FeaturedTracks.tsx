"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import TrackCard from "@/components/ui/TrackCard";
import { tracks } from "@/lib/tracks";

export default function FeaturedTracks() {
  const featured = tracks.slice(0, 6);

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 py-20">
      {/* Section header */}
      <div className="flex items-end justify-between mb-8">
        <div>
          <p className="text-blood-500 text-xs uppercase tracking-[0.3em] mb-2">
            Discography
          </p>
          <h2
            className="text-white font-black text-2xl sm:text-3xl uppercase"
            style={{ fontFamily: "Impact, Arial Black, sans-serif", letterSpacing: "0.05em" }}
          >
            Latest Tracks
          </h2>
        </div>
        <Link
          href="/music"
          className="flex items-center gap-2 text-void-400 hover:text-blood-500 text-sm uppercase tracking-widest transition-colors"
        >
          View All
          <ArrowRight size={14} />
        </Link>
      </div>

      {/* Track list */}
      <div className="border border-void-800 rounded-sm overflow-hidden">
        <div className="divide-y divide-void-800/60">
          {featured.map((track, i) => (
            <TrackCard key={track.id} track={track} index={i} layout="row" />
          ))}
        </div>
      </div>

      {/* View all prompt */}
      <div className="mt-6 text-center">
        <Link
          href="/music"
          className="inline-flex items-center gap-2 text-void-500 hover:text-void-200 text-sm transition-colors"
        >
          +{tracks.length - featured.length} more tracks
          <ArrowRight size={13} />
        </Link>
      </div>
    </section>
  );
}

import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { PlayerProvider } from "@/components/player/PlayerContext";
import { tracks } from "@/lib/tracks";
import StatBlock from "@/components/ui/StatBlock";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About | RALIPNIC",
  description:
    "About RALIPNIC (رالیپ نیک) — Independent Persian and Azerbaijani rapper known for raw lyricism and unfiltered street expression.",
};

const persianTracks = tracks.filter((t) => t.genre.includes("Persian")).length;
const azerbaijaniTracks = tracks.filter((t) =>
  t.genre.includes("Azerbaijani")
).length;

const genreBreakdown = [
  { label: "Persian Rap", labelFa: "رپ فارسی", count: persianTracks, pct: Math.round((persianTracks / tracks.length) * 100) },
  { label: "Azerbaijani Rap", labelFa: "رپ آذربایجانی", count: azerbaijaniTracks, pct: Math.round((azerbaijaniTracks / tracks.length) * 100) },
];

export default function AboutPage() {
  return (
    <PlayerProvider>
      <Navbar />
      <main className="min-h-screen pt-24 pb-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* Header */}
          <div className="mb-16">
            <p className="text-blood-500 text-xs uppercase tracking-[0.3em] mb-3">
              The Artist
            </p>
            <h1
              className="text-white font-black text-4xl sm:text-6xl uppercase mb-2"
              style={{
                fontFamily: "Impact, Arial Black, sans-serif",
                letterSpacing: "0.05em",
              }}
            >
              About
            </h1>
            <p className="fa-text text-void-500 text-lg">درباره رالیپ نیک</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Main bio */}
            <div className="lg:col-span-3 space-y-6">
              <p className="text-void-200 text-lg leading-relaxed font-medium">
                RALIPNIC is an independent Persian and Azerbaijani rapper known
                for raw lyricism and street-level authenticity.
              </p>
              <p className="text-void-400 leading-loose">
                Releasing music under the name RALIPNIC (رالیپ نیک), the artist
                blends Persian and Azerbaijani languages to create a uniquely
                powerful sound that speaks directly to the streets. The
                dual-language approach isn&apos;t a gimmick — it&apos;s identity.
              </p>
              <p className="text-void-400 leading-loose">
                With 18 released tracks spanning Persian Rap and Azerbaijani
                Rap, RALIPNIC has built a dedicated underground following through
                sheer consistency and uncompromising artistic vision. Tracks
                like <span className="text-void-200">Moshkel</span>,{" "}
                <span className="text-void-200">Benal</span>, and{" "}
                <span className="text-void-200">Goosh Bedeh</span> showcase the
                breadth of this catalog — introspective, confrontational, and
                always honest.
              </p>
              <p className="text-void-400 leading-loose">
                Operating entirely independently, every track reflects a
                personal story — crafted without label interference, on his own
                terms. No middlemen. No compromises.
              </p>

              {/* Persian bio */}
              <div className="border-l-2 border-blood-700 pl-5 mt-8">
                <p className="fa-text text-void-400 leading-loose text-sm" dir="rtl">
                  رالیپ نیک یک رپر مستقل فارسی و آذربایجانی است که به خاطر
                  ترانه‌سرایی خام و اصالت خیابانی‌اش شناخته می‌شود. با ترکیب
                  دو زبان، صدایی منحصربه‌فرد می‌سازد که مستقیماً با مردم صحبت
                  می‌کند.
                </p>
              </div>

              {/* CTA buttons */}
              <div className="flex flex-wrap gap-3 pt-4">
                <Link
                  href="/music"
                  className="px-6 py-3 bg-blood-600 hover:bg-blood-500 text-white text-sm font-semibold uppercase tracking-widest transition-colors rounded-sm"
                >
                  Hear the Music
                </Link>
                <Link
                  href="/contact"
                  className="px-6 py-3 border border-void-700 hover:border-blood-600 text-void-300 hover:text-white text-sm font-semibold uppercase tracking-widest transition-all rounded-sm"
                >
                  Connect
                </Link>
              </div>
            </div>

            {/* Sidebar stats & info */}
            <div className="lg:col-span-2 space-y-8">
              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 p-6 bg-void-900 border border-void-800 rounded-sm">
                <StatBlock
                  value="18"
                  label="Tracks"
                  labelFa="آهنگ"
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

              {/* Genre breakdown */}
              <div className="p-6 bg-void-900 border border-void-800 rounded-sm">
                <p className="text-void-300 text-xs uppercase tracking-widest mb-5 font-medium">
                  Genre Breakdown
                </p>
                <div className="space-y-4">
                  {genreBreakdown.map((g) => (
                    <div key={g.label}>
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-void-300 text-xs">{g.label}</span>
                        <span className="fa-text text-void-500 text-xs">{g.labelFa}</span>
                        <span className="text-blood-500 text-xs font-mono">
                          {g.count} tracks
                        </span>
                      </div>
                      <div className="h-1 bg-void-800 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-blood-600 rounded-full transition-all"
                          style={{ width: `${g.pct}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Info table */}
              <div className="p-6 bg-void-900 border border-void-800 rounded-sm space-y-3">
                <p className="text-void-300 text-xs uppercase tracking-widest mb-5 font-medium">
                  Artist Info
                </p>
                {[
                  { label: "Name", value: "RALIPNIC" },
                  { label: "Persian Name", value: "رالیپ نیک", fa: true },
                  { label: "Type", value: "Independent" },
                  { label: "Genres", value: "Persian Rap, Azerbaijani Rap" },
                  { label: "Tracks", value: "18 released" },
                ].map((row) => (
                  <div
                    key={row.label}
                    className="flex justify-between items-baseline border-b border-void-800 pb-2 last:border-none last:pb-0"
                  >
                    <span className="text-void-600 text-xs uppercase tracking-wide">
                      {row.label}
                    </span>
                    <span
                      className={`text-void-200 text-sm ${row.fa ? "fa-text" : ""}`}
                    >
                      {row.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Collaborators */}
              <div className="p-6 bg-void-900 border border-void-800 rounded-sm">
                <p className="text-void-300 text-xs uppercase tracking-widest mb-4 font-medium">
                  Collaborators
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Metti", "Wonder"].map((name) => (
                    <span
                      key={name}
                      className="px-3 py-1 bg-void-800 text-void-300 text-xs uppercase tracking-widest rounded-sm"
                    >
                      {name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </PlayerProvider>
  );
}

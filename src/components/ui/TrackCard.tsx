"use client";

import { Play, Pause, Download, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";
import { Track } from "@/types";
import { usePlayer } from "@/components/player/PlayerContext";
import WaveformIcon from "@/components/player/WaveformIcon";

interface TrackCardProps {
  track: Track;
  index: number;
  layout?: "row" | "grid";
}

export default function TrackCard({
  track,
  index,
  layout = "row",
}: TrackCardProps) {
  const { currentTrack, isPlaying, toggle } = usePlayer();
  const isActive = currentTrack?.id === track.id;
  const isThisPlaying = isActive && isPlaying;

  const displayTitle = track.featuring
    ? `${track.title} (feat. ${track.featuring.join(", ")})`
    : track.title;

  if (layout === "grid") {
    return (
      <div
        className={cn(
          "group relative bg-void-900 border rounded-sm p-4 transition-all duration-200 cursor-pointer",
          isActive
            ? "border-blood-600 bg-void-800"
            : "border-void-800 hover:border-void-600 hover:bg-void-800"
        )}
        onClick={() => toggle(track)}
      >
        {/* Track number */}
        <div className="flex items-start justify-between mb-3">
          <span
            className={cn(
              "text-xs font-mono",
              isActive ? "text-blood-500" : "text-void-600"
            )}
          >
            {String(index + 1).padStart(2, "0")}
          </span>
          {isActive && (
            <WaveformIcon isPlaying={isThisPlaying} size="sm" />
          )}
        </div>

        <p
          className={cn(
            "font-semibold text-sm mb-1 transition-colors",
            isActive ? "text-blood-400" : "text-white group-hover:text-blood-300"
          )}
        >
          {displayTitle}
        </p>

        {track.titleFa && (
          <p className="fa-text text-void-500 text-xs mb-3">{track.titleFa}</p>
        )}

        <div className="flex items-center justify-between mt-auto">
          <span
            className={cn(
              "text-[10px] uppercase tracking-wider px-1.5 py-0.5 rounded-sm",
              track.genre.includes("Azerbaijani")
                ? "bg-void-700 text-void-300"
                : "bg-blood-900/40 text-blood-400"
            )}
          >
            {track.genre.includes("Azerbaijani") ? "AZ" : "FA"}
          </span>

          <button
            className={cn(
              "w-7 h-7 rounded-full flex items-center justify-center transition-colors",
              isThisPlaying
                ? "bg-blood-500"
                : "bg-void-700 group-hover:bg-blood-700"
            )}
            onClick={(e) => {
              e.stopPropagation();
              toggle(track);
            }}
            aria-label={isThisPlaying ? "Pause" : "Play"}
          >
            {isThisPlaying ? (
              <Pause size={10} className="text-white" />
            ) : (
              <Play size={10} className="text-white ml-0.5" />
            )}
          </button>
        </div>
      </div>
    );
  }

  // Row layout (default)
  return (
    <div
      className={cn(
        "track-item group flex items-center gap-4 px-4 py-3 rounded-sm cursor-pointer select-none",
        isActive && "border-l-blood-500 bg-blood-950/20"
      )}
      style={{ borderLeftColor: isActive ? "var(--color-blood)" : undefined }}
      onClick={() => toggle(track)}
    >
      {/* Index / play button */}
      <div className="w-8 flex-shrink-0 flex items-center justify-center">
        {isActive ? (
          <WaveformIcon isPlaying={isThisPlaying} size="sm" />
        ) : (
          <>
            <span className="text-void-600 text-xs font-mono group-hover:hidden">
              {String(index + 1).padStart(2, "0")}
            </span>
            <Play
              size={14}
              className="text-blood-500 hidden group-hover:block"
            />
          </>
        )}
      </div>

      {/* Track info */}
      <div className="flex-1 min-w-0">
        <p
          className={cn(
            "text-sm font-medium truncate transition-colors",
            isActive ? "text-blood-400" : "text-void-100 group-hover:text-white"
          )}
        >
          {displayTitle}
        </p>
        {track.titleFa && (
          <p className="fa-text text-void-600 text-xs">{track.titleFa}</p>
        )}
      </div>

      {/* Genre badge */}
      <span
        className={cn(
          "hidden sm:block text-[10px] uppercase tracking-wider px-1.5 py-0.5 rounded-sm flex-shrink-0",
          track.genre.includes("Azerbaijani")
            ? "bg-void-800 text-void-400"
            : "bg-blood-900/40 text-blood-500"
        )}
      >
        {track.genre.replace(" Rap", "")}
      </span>

      {/* Actions */}
      <div className="flex items-center gap-2 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
        {track.downloadUrl && (
          <a
            href={track.downloadUrl}
            download
            onClick={(e) => e.stopPropagation()}
            className="p-1.5 text-void-500 hover:text-white transition-colors"
            aria-label={`Download ${track.title}`}
            title="Download"
          >
            <Download size={13} />
          </a>
        )}
        {track.soundcloudUrl && (
          <a
            href={track.soundcloudUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="p-1.5 text-void-500 hover:text-blood-500 transition-colors"
            aria-label={`Listen to ${track.title} on SoundCloud`}
            title="SoundCloud"
          >
            <ExternalLink size={13} />
          </a>
        )}
      </div>
    </div>
  );
}

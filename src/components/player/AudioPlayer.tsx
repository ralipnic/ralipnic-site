"use client";

import { useEffect, useRef, useState } from "react";
import { Play, Pause, Volume2, VolumeX, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Track } from "@/types";
import WaveformIcon from "./WaveformIcon";

interface AudioPlayerProps {
  track: Track | null;
  isPlaying: boolean;
  onPlayPause: () => void;
  onClose: () => void;
}

export default function AudioPlayer({
  track,
  isPlaying,
  onPlayPause,
  onClose,
}: AudioPlayerProps) {
  const [muted, setMuted] = useState(false);
  const [volume, setVolume] = useState(0.8);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  // When no actual audio file URL, we simulate the player UI only
  const hasAudio = !!track?.downloadUrl;

  useEffect(() => {
    if (!audioRef.current || !hasAudio) return;
    if (isPlaying) {
      audioRef.current.play().catch(() => {});
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying, hasAudio]);

  useEffect(() => {
    if (!audioRef.current || !hasAudio) return;
    audioRef.current.volume = muted ? 0 : volume;
  }, [volume, muted, hasAudio]);

  function formatTime(s: number) {
    if (!s || isNaN(s)) return "0:00";
    const m = Math.floor(s / 60);
    const sec = Math.floor(s % 60);
    return `${m}:${sec.toString().padStart(2, "0")}`;
  }

  if (!track) return null;

  const displayTitle = track.featuring
    ? `${track.title} (feat. ${track.featuring.join(", ")})`
    : track.title;

  return (
    <div
      className={cn(
        "fixed bottom-0 inset-x-0 z-40 bg-void-950/98 backdrop-blur-md border-t border-void-800",
        "transition-transform duration-300",
        track ? "translate-y-0" : "translate-y-full"
      )}
    >
      {/* Progress bar */}
      <div className="h-[2px] bg-void-800 w-full">
        <div
          className="h-full bg-blood-500 transition-all duration-150"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center gap-4">
        {/* Track info */}
        <div className="flex items-center gap-3 flex-1 min-w-0">
          {/* Waveform visual */}
          <div className="w-8 h-8 flex items-center justify-center flex-shrink-0">
            <WaveformIcon isPlaying={isPlaying} size="sm" />
          </div>

          <div className="min-w-0">
            <p className="text-white text-sm font-medium truncate">{displayTitle}</p>
            <p className="text-void-500 text-xs uppercase tracking-widest">
              RALIPNIC · {track.genre}
            </p>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-4">
          {/* Time */}
          {hasAudio && (
            <span className="text-void-500 text-xs font-mono hidden sm:block">
              {formatTime(currentTime)} / {formatTime(duration)}
            </span>
          )}

          {/* Play/Pause */}
          <button
            onClick={onPlayPause}
            className="w-9 h-9 rounded-full bg-blood-600 hover:bg-blood-500 flex items-center justify-center transition-colors"
            aria-label={isPlaying ? "Pause" : "Play"}
          >
            {isPlaying ? (
              <Pause size={16} className="text-white" />
            ) : (
              <Play size={16} className="text-white ml-0.5" />
            )}
          </button>

          {/* Volume */}
          <button
            onClick={() => setMuted((v) => !v)}
            className="text-void-400 hover:text-white transition-colors hidden sm:block"
            aria-label={muted ? "Unmute" : "Mute"}
          >
            {muted ? <VolumeX size={16} /> : <Volume2 size={16} />}
          </button>

          {/* SoundCloud link */}
          {track.soundcloudUrl && (
            <a
              href={track.soundcloudUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:block text-void-400 hover:text-blood-500 text-xs uppercase tracking-widest transition-colors"
            >
              SC ↗
            </a>
          )}

          {/* Close */}
          <button
            onClick={onClose}
            className="text-void-600 hover:text-void-300 transition-colors"
            aria-label="Close player"
          >
            <X size={16} />
          </button>
        </div>
      </div>

      {hasAudio && track?.downloadUrl && (
        <audio
          ref={audioRef}
          src={track.downloadUrl}
          onTimeUpdate={() => {
            if (audioRef.current) {
              setCurrentTime(audioRef.current.currentTime);
              setProgress(
                (audioRef.current.currentTime / audioRef.current.duration) * 100
              );
            }
          }}
          onLoadedMetadata={() => {
            if (audioRef.current) setDuration(audioRef.current.duration);
          }}
          onEnded={() => {
            setProgress(0);
            setCurrentTime(0);
          }}
        />
      )}
    </div>
  );
}

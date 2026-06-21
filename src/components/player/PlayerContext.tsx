"use client";

import { createContext, useContext, useRef, useState } from "react";
import { Track } from "@/types";

type PlayerContextType = {
  currentTrack: Track | null;
  isPlaying: boolean;
  toggle: (track: Track) => void;
};

const PlayerContext = createContext<PlayerContextType | null>(null);

export function PlayerProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const [currentTrack, setCurrentTrack] = useState<Track | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggle = (track: Track) => {
    console.log("🎧 PLAY:", track);

    if (!audioRef.current) {
      audioRef.current = new Audio();
    }

    if (currentTrack?.id === track.id) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current
          .play()
          .then(() => {
            setIsPlaying(true);
          })
          .catch((err) => {
            console.error("Play failed:", err);
          });
      }
      return;
    }

    if (!track.downloadUrl) return;

    audioRef.current.src = track.downloadUrl;
    audioRef.current.load();

    audioRef.current
      .play()
      .then(() => {
        setCurrentTrack(track);
        setIsPlaying(true);
      })
      .catch((err) => {
        console.error("Play failed:", err);
      });
  };

  return (
    <PlayerContext.Provider value={{ currentTrack, isPlaying, toggle }}>
      {children}
      <audio ref={audioRef} />
    </PlayerContext.Provider>
  );
}

export function usePlayer() {
  const ctx = useContext(PlayerContext);

  if (!ctx) {
    throw new Error("usePlayer must be inside PlayerProvider");
  }

  return ctx;
}
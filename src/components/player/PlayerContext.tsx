"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
  type ReactNode,
} from "react";
import { Track } from "@/types";
import AudioPlayer from "./AudioPlayer";

interface PlayerContextValue {
  currentTrack: Track | null;
  isPlaying: boolean;
  play: (track: Track) => void;
  pause: () => void;
  toggle: (track: Track) => void;
}

const PlayerContext = createContext<PlayerContextValue>({
  currentTrack: null,
  isPlaying: false,
  play: () => {},
  pause: () => {},
  toggle: () => {},
});

export function PlayerProvider({ children }: { children: ReactNode }) {
  const [currentTrack, setCurrentTrack] = useState<Track | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const play = useCallback((track: Track) => {
    setCurrentTrack(track);
    setIsPlaying(true);
  }, []);

  const pause = useCallback(() => {
    setIsPlaying(false);
  }, []);

  const toggle = useCallback(
    (track: Track) => {
      if (currentTrack?.id === track.id) {
        setIsPlaying((v) => !v);
      } else {
        setCurrentTrack(track);
        setIsPlaying(true);
      }
    },
    [currentTrack]
  );

  const handleClose = () => {
    setCurrentTrack(null);
    setIsPlaying(false);
  };

  return (
    <PlayerContext.Provider value={{ currentTrack, isPlaying, play, pause, toggle }}>
      {children}
      <AudioPlayer
        track={currentTrack}
        isPlaying={isPlaying}
        onPlayPause={() => setIsPlaying((v) => !v)}
        onClose={handleClose}
      />
    </PlayerContext.Provider>
  );
}

export function usePlayer() {
  return useContext(PlayerContext);
}

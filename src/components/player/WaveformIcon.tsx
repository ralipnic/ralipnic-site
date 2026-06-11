"use client";

import { cn } from "@/lib/utils";

interface WaveformIconProps {
  isPlaying: boolean;
  className?: string;
  size?: "sm" | "md";
}

export default function WaveformIcon({
  isPlaying,
  className,
  size = "md",
}: WaveformIconProps) {
  const barClass = cn(
    "bg-blood-500 rounded-sm",
    size === "sm" ? "w-[2px]" : "w-[3px]"
  );

  if (!isPlaying) {
    return (
      <div className={cn("flex items-center gap-[2px]", className)}>
        {[12, 18, 8, 22, 14].map((h, i) => (
          <div
            key={i}
            className={cn(barClass, "opacity-40")}
            style={{ height: `${h}px` }}
          />
        ))}
      </div>
    );
  }

  return (
    <div className={cn("flex items-end gap-[2px]", className)}>
      {[1, 2, 3, 4, 5].map((i) => (
        <div
          key={i}
          className={cn(barClass, "wave-bar")}
          style={{ height: "12px" }}
        />
      ))}
    </div>
  );
}

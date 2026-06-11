import { clsx, type ClassValue } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export function getTrackDisplayTitle(
  title: string,
  featuring?: string[]
): string {
  if (!featuring || featuring.length === 0) return title;
  return `${title} (feat. ${featuring.join(", ")})`;
}

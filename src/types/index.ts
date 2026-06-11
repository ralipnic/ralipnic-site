export interface Track {
  id: string;
  title: string;
  titleFa?: string;
  duration?: string;
  featuring?: string[];
  year?: number;
  genre: "Persian Rap" | "Azerbaijani Rap" | "Persian Rap / Azerbaijani Rap";
  soundcloudUrl?: string;
  downloadUrl?: string;
  coverArt?: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  handle: string;
  icon: string;
}

export type Locale = "en" | "fa";

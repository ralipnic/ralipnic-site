import type { Metadata } from "next";
import MusicPageClient from "./MusicPageClient";

export const metadata: Metadata = {
  title: "Music | RALIPNIC",
  description:
    "Full discography of RALIPNIC (رالیپ نیک) — 18 tracks including Head Voor, Moshkel, Benal, and more. Listen on SoundCloud.",
};

export default function MusicPage() {
  return <MusicPageClient />;
}

import { MetadataRoute } from "next";
import { tracks } from "@/lib/tracks";

export default function sitemap(): MetadataRoute.Sitemap {
 const base = "https://ralipnic-web-v1.vercel.app";

  const staticPages = [
    { url: base, priority: 1 },
    { url: `${base}/music`, priority: 0.9 },
    { url: `${base}/about`, priority: 0.7 },
    { url: `${base}/contact`, priority: 0.6 },
  ];

  return staticPages.map((p) => ({
    url: p.url,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: p.priority,
  }));
}
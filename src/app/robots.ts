import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap:
      "https://ralipnic-site-git-main-ralipnics-projects.vercel.app/sitemap.xml",
  };
}
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://ralipnic.com"),

  // 🔵 Google Search Console Verification (اینجا مقدار واقعی رو جایگزین کن)
  verification: {
    google: "YOUR_GOOGLE_VERIFICATION_CODE",
  },

  title: {
    default: "Ralipnic",
    template: "%s | Ralipnic",
  },

  description:
    "Official website of Ralipnic. Listen to music, explore albums, discover new releases and connect with Ralipnic.",

  keywords: [
    "Ralipnic",
    "Music",
    "Artist",
    "Singer",
    "Songs",
    "Albums",
    "Official Website",
  ],

  authors: [
    {
      name: "Ralipnic",
    },
  ],

  creator: "Ralipnic",
  publisher: "Ralipnic",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  openGraph: {
    title: "Ralipnic",
    description:
      "Official website of Ralipnic. Music, albums and latest releases.",
    url: "https://ralipnic.com",
    siteName: "Ralipnic",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Ralipnic",
    description:
      "Official website of Ralipnic. Music, albums and latest releases.",
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
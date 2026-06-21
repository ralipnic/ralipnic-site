import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://ralipnic-web.vercel.app"),

  verification: {
    google: "I-hvdXBL-YnbSqOUo_-pO2hUnKP7XwMs4QSR_3bYNwc",
  },

  title: {
    default: "Ralipnic",
    template: "%s | Ralipnic",
  },

  description:
    "Official website of Ralipnic. Listen to music, explore albums, discover new releases and connect with Ralipnic.",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Ralipnic",
    description: "Official website of Ralipnic",
    url: "https://ralipnic-web.vercel.app",
    siteName: "Ralipnic",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Ralipnic",
    description: "Official website of Ralipnic",
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
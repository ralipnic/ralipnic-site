import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "RALIPNIC | رالیپ نیک — Persian & Azerbaijani Rap",
    template: "%s | RALIPNIC",
  },
  description:
    "RALIPNIC (رالیپ نیک) — Independent Persian and Azerbaijani rapper. 18 tracks of raw, unfiltered expression. Listen on SoundCloud.",
  keywords: [
    "RALIPNIC",
    "رالیپ نیک",
    "Persian Rap",
    "Azerbaijani Rap",
    "رپ فارسی",
    "رپ آذربایجانی",
    "underground rap",
    "independent hip-hop",
  ],
  openGraph: {
    title: "RALIPNIC | رالیپ نیک",
    description: "Independent Persian & Azerbaijani Rapper — 18 Tracks",
    type: "website",
    locale: "fa_IR",
    alternateLocale: "en_US",
    siteName: "RALIPNIC",
  },
  twitter: {
    card: "summary_large_image",
    title: "RALIPNIC | رالیپ نیک",
    description: "Independent Persian & Azerbaijani Rapper — 18 Tracks",
  },
robots: {
  index: true,
  follow: true,
},

verification: {
  google: "I-hvdXBL-YnbSqOUo_-pO2hUnKP7XwMs4QSR_3bYNwc",
},
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Vazirmatn:wght@300;400;500;700;900&display=swap"
          rel="stylesheet"
        />
        <meta name="theme-color" content="#080808" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="scanlines noise-overlay antialiased bg-void-950 text-white min-h-screen">
        {children}
      </body>
    </html>
  );
}

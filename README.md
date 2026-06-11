# RALIPNIC — Official Website

Official website for **RALIPNIC** (رالیپ نیک), independent Persian & Azerbaijani rapper.

## Stack

- **Next.js 15** — App Router
- **TypeScript**
- **Tailwind CSS**
- **React 18**

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home — hero, featured tracks, social strip |
| `/music` | Full discography (18 tracks), filter by genre, list/grid view |
| `/about` | Artist bio, stats, genre breakdown |
| `/contact` | Social links and booking info |

## Features

- 🎵 **Global audio player** — sticky bottom bar with waveform animation
- 🌐 **Bilingual** — English + Persian (RTL) throughout
- 🎨 **Dark theme** with blood-red accent (`#e81c1c`)
- 📱 **Fully responsive** — mobile-first
- ⚡ **SEO optimized** — OpenGraph, sitemap, robots.txt
- 🎭 **Glitch hover effect** on the hero logo
- 🔊 **Waveform icon** animates when playing
- 🔍 **Filter & sort** tracks by genre
- 📋 **List/Grid** view toggle on music page

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Deployment

```bash
npm run build
npm start
```

Or deploy to Vercel — zero config needed.

## Artist Info

- **Name:** RALIPNIC / رالیپ نیک
- **Genre:** Persian Rap, Azerbaijani Rap
- **Tracks:** 18 released
- **Type:** Independent
- **SoundCloud:** https://soundcloud.com/ali-alipoor-141068609
- **Instagram:** https://instagram.com/ralipnic
- **Telegram:** https://t.me/ralipnicofficial

## Adding Audio Files

To enable actual audio playback, add `downloadUrl` to each track in `src/lib/tracks.ts`:

```ts
{
  id: "head-voor",
  title: "Head Voor",
  downloadUrl: "/audio/head-voor.mp3",   // add this
  // ...
}
```

Then place MP3s in `public/audio/`.

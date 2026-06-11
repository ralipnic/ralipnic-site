import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { PlayerProvider } from "@/components/player/PlayerContext";
import SocialButton from "@/components/ui/SocialButton";

export const metadata: Metadata = {
  title: "Contact | RALIPNIC",
  description:
    "Get in touch with RALIPNIC (رالیپ نیک) on SoundCloud, Instagram, and Telegram.",
};

const socials = [
  {
    platform: "SoundCloud",
    url: "https://soundcloud.com/ali-alipoor-141068609",
    handle: "RALIPNIC",
    description: "Stream all 18 tracks — free on SoundCloud",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-orange-400">
        <path d="M1.175 12.225c-.015.15-.02.3-.02.45 0 .15.005.3.02.45.3 2.265 2.175 4.005 4.5 4.005 2.475 0 4.5-2.025 4.5-4.5v-8.4c-.6-.225-1.2-.33-1.8-.33C5.25 3.9 2.1 6.6 1.175 12.225zM24 12.525c0-1.35-1.05-2.4-2.4-2.4-.15 0-.3.015-.45.045C20.775 8.1 18.9 6.6 16.65 6.6c-.75 0-1.425.18-2.025.45v9.45c0 .9.735 1.65 1.65 1.65H21.6c1.335 0 2.4-1.065 2.4-2.4v-3.225z" />
      </svg>
    ),
  },
  {
    platform: "Instagram",
    url: "https://instagram.com/ralipnic",
    handle: "@ralipnic",
    description: "Follow for updates, behind the scenes",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6 text-pink-400">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    platform: "Telegram",
    url: "https://t.me/ralipnicofficial",
    handle: "@ralipnicofficial",
    description: "Official Telegram channel — exclusive content & news",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-sky-400">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248l-2.07 9.757c-.157.673-.567.835-1.148.52l-3.18-2.343-1.534 1.476c-.17.17-.313.313-.64.313l.228-3.23 5.895-5.328c.256-.228-.056-.354-.398-.126L6.69 13.645l-3.117-.975c-.678-.212-.692-.678.14-.998l12.173-4.692c.565-.202 1.06.138.676.268z" />
      </svg>
    ),
  },
];

export default function ContactPage() {
  return (
    <PlayerProvider>
      <Navbar />
      <main className="min-h-screen pt-24 pb-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          {/* Header */}
          <div className="mb-14">
            <p className="text-blood-500 text-xs uppercase tracking-[0.3em] mb-3">
              Reach Out
            </p>
            <h1
              className="text-white font-black text-4xl sm:text-6xl uppercase mb-2"
              style={{
                fontFamily: "Impact, Arial Black, sans-serif",
                letterSpacing: "0.05em",
              }}
            >
              Contact
            </h1>
            <p className="fa-text text-void-500 text-lg">تماس با رالیپ نیک</p>
            <p className="text-void-400 mt-4 max-w-lg leading-relaxed">
              Connect with RALIPNIC through social media. For bookings,
              collabs, or press — reach out via Instagram or Telegram.
            </p>
          </div>

          {/* Social links */}
          <div className="space-y-3 mb-14">
            {socials.map((s) => (
              <SocialButton
                key={s.platform}
                platform={s.platform}
                url={s.url}
                handle={s.handle}
                description={s.description}
                icon={s.icon}
                variant="large"
              />
            ))}
          </div>

          {/* Booking info box */}
          <div
            className="rounded-sm p-7 border border-void-800"
            style={{
              background:
                "linear-gradient(135deg, rgba(232,28,28,0.06) 0%, rgba(8,8,8,0) 50%)",
            }}
          >
            <p className="text-void-300 text-xs uppercase tracking-[0.3em] mb-3">
              Bookings &amp; Collabs
            </p>
            <h2
              className="text-white font-black text-xl uppercase mb-4"
              style={{ fontFamily: "Impact, Arial Black, sans-serif", letterSpacing: "0.05em" }}
            >
              Work Together
            </h2>
            <p className="text-void-400 leading-relaxed mb-4">
              For performance bookings, production collaborations, or press
              inquiries — reach directly through any of the social channels
              above. RALIPNIC handles everything independently.
            </p>
            <p className="fa-text text-void-500 text-sm leading-relaxed" dir="rtl">
              برای بوکینگ، همکاری در تولید، یا استعلام مطبوعاتی — مستقیماً
              از طریق کانال‌های اجتماعی بالا تماس بگیرید.
            </p>
            <div className="flex flex-wrap gap-3 mt-6">
              <a
                href="https://instagram.com/ralipnic"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 bg-blood-600 hover:bg-blood-500 text-white text-sm font-semibold uppercase tracking-widest transition-colors rounded-sm"
              >
                Instagram DM
              </a>
              <a
                href="https://t.me/ralipnicofficial"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 border border-void-700 hover:border-blood-600 text-void-300 hover:text-white text-sm font-semibold uppercase tracking-widest transition-all rounded-sm"
              >
                Telegram
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </PlayerProvider>
  );
}

import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 | RALIPNIC",
};

export default function NotFound() {
  return (
    <main
      className="min-h-screen flex flex-col items-center justify-center bg-void-950 text-center px-4"
      style={{
        background:
          "radial-gradient(ellipse 60% 40% at 50% 50%, rgba(200,0,0,0.08) 0%, #080808 70%)",
      }}
    >
      <p className="text-blood-700 font-black text-9xl mb-4 leading-none"
         style={{ fontFamily: "Impact, Arial Black, sans-serif" }}>
        404
      </p>
      <h1 className="text-white font-black text-2xl uppercase tracking-widest mb-3"
          style={{ fontFamily: "Impact, Arial Black, sans-serif" }}>
        Track Not Found
      </h1>
      <p className="fa-text text-void-500 mb-8">صفحه‌ای که دنبالش هستید وجود ندارد</p>
      <Link
        href="/"
        className="px-6 py-3 bg-blood-600 hover:bg-blood-500 text-white text-sm font-semibold uppercase tracking-widest transition-colors rounded-sm"
      >
        Back to Home
      </Link>
    </main>
  );
}

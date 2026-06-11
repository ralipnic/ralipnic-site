import { socialLinks } from "@/lib/tracks";

export default function SocialStrip() {
  return (
    <section className="border-y border-void-800 bg-void-900/40 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-void-500 text-xs uppercase tracking-[0.3em] mb-1">
              Connect
            </p>
            <p className="text-white font-semibold">Find RALIPNIC online</p>
            <p className="fa-text text-void-500 text-sm">رالیپ نیک را آنلاین پیدا کنید</p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            {socialLinks.map((s) => (
              <a
                key={s.platform}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 border border-void-700 hover:border-blood-600 bg-void-950 hover:bg-void-900 text-void-300 hover:text-white text-sm uppercase tracking-widest transition-all rounded-sm"
              >
                {s.platform}
                <span className="text-void-600 text-xs">↗</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-void-800 bg-void-950 mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <p
              className="text-white font-black tracking-widest text-2xl uppercase mb-1"
              style={{ fontFamily: "Impact, Arial Black, sans-serif" }}
            >
              RALIPNIC
            </p>
            <p className="fa-text text-blood-500 text-sm mb-4">رالیپ نیک</p>
            <p className="text-void-400 text-sm leading-relaxed">
              Independent Persian &amp; Azerbaijani Rapper. 18 tracks of raw
              expression.
            </p>
          </div>

          {/* Links */}
          <div>
            <p className="text-void-300 text-xs uppercase tracking-widest mb-4 font-medium">
              Pages
            </p>
            <ul className="space-y-2">
              {[
                { href: "/", label: "Home" },
                { href: "/music", label: "Music" },
                { href: "/about", label: "About" },
                { href: "/contact", label: "Contact" },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-void-400 hover:text-white text-sm transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <p className="text-void-300 text-xs uppercase tracking-widest mb-4 font-medium">
              Connect
            </p>
            <ul className="space-y-2">
              {[
                {
                  label: "SoundCloud",
                  href: "https://soundcloud.com/ali-alipoor-141068609",
                },
                {
                  label: "Instagram",
                  href: "https://instagram.com/ralipnic",
                },
                {
                  label: "Telegram",
                  href: "https://t.me/ralipnicofficial",
                },
              ].map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-void-400 hover:text-blood-500 text-sm transition-colors"
                  >
                    {s.label} ↗
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-void-800 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-void-500 text-xs">
            © {year} RALIPNIC — All rights reserved.
          </p>
          <p className="fa-text text-void-600 text-xs">
            هنرمند مستقل · رالیپ نیک
          </p>
        </div>
      </div>
    </footer>
  );
}

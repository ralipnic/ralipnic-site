"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home", labelFa: "خانه" },
  { href: "/music", label: "Music", labelFa: "موزیک" },
  { href: "/about", label: "About", labelFa: "درباره" },
  { href: "/contact", label: "Contact", labelFa: "تماس" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-void-950/95 backdrop-blur-sm border-b border-void-800"
          : "bg-transparent"
      )}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <Link
          href="/"
          className="flex flex-col leading-none group select-none"
          aria-label="RALIPNIC Home"
        >
          <span
            className="glitch text-white font-black tracking-widest text-xl uppercase"
            data-text="RALIPNIC"
            style={{ fontFamily: "Impact, Arial Black, sans-serif", letterSpacing: "0.15em" }}
          >
            RALIPNIC
          </span>
          <span className="text-[10px] text-blood-500 tracking-[0.3em] uppercase font-light mt-[-2px] fa-text text-right">
            رالیپ نیک
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "text-sm font-medium tracking-widest uppercase transition-colors duration-150 relative group",
                    isActive
                      ? "text-blood-500"
                      : "text-void-200 hover:text-white"
                  )}
                >
                  {link.label}
                  <span
                    className={cn(
                      "absolute -bottom-1 left-0 h-px bg-blood-500 transition-all duration-200",
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    )}
                  />
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Social quick-links */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="https://soundcloud.com/ali-alipoor-141068609"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-void-400 hover:text-blood-500 uppercase tracking-widest transition-colors"
          >
            SoundCloud
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 text-void-300 hover:text-white transition-colors"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile drawer */}
      <div
        className={cn(
          "md:hidden overflow-hidden transition-all duration-300 bg-void-950/98 border-b border-void-800",
          open ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <ul className="px-6 py-4 flex flex-col gap-1">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "flex items-center justify-between py-3 border-b border-void-800 last:border-none text-sm uppercase tracking-widest font-medium transition-colors",
                    isActive ? "text-blood-500" : "text-void-200"
                  )}
                >
                  <span>{link.label}</span>
                  <span className="fa-text text-void-500 text-xs">{link.labelFa}</span>
                </Link>
              </li>
            );
          })}
          <li className="pt-3">
            <a
              href="https://soundcloud.com/ali-alipoor-141068609"
              target="_blank"
              rel="noopener noreferrer"
              className="block py-2 text-xs text-blood-500 uppercase tracking-widest"
            >
              ▶ Listen on SoundCloud
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}

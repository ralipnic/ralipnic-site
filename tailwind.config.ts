import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        blood: {
          50: "#fff0f0",
          100: "#ffd7d7",
          200: "#ffb3b3",
          300: "#ff8080",
          400: "#ff4d4d",
          500: "#e81c1c",
          600: "#c80000",
          700: "#a00000",
          800: "#7a0000",
          900: "#560000",
        },
        void: {
          50: "#f5f5f5",
          100: "#e0e0e0",
          200: "#aaaaaa",
          300: "#888888",
          400: "#555555",
          500: "#333333",
          600: "#222222",
          700: "#1a1a1a",
          800: "#111111",
          900: "#080808",
          950: "#030303",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Impact", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
        persian: ["Vazirmatn", "Tahoma", "sans-serif"],
      },
      backgroundImage: {
        "noise": "url('/noise.svg')",
        "grid": "linear-gradient(rgba(232,28,28,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(232,28,28,0.03) 1px, transparent 1px)",
      },
      backgroundSize: {
        "grid": "40px 40px",
      },
      animation: {
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "flicker": "flicker 4s linear infinite",
        "scan": "scan 8s linear infinite",
        "waveform": "waveform 1.2s ease-in-out infinite",
      },
      keyframes: {
        flicker: {
          "0%, 95%, 100%": { opacity: "1" },
          "96%": { opacity: "0.8" },
          "97%": { opacity: "1" },
          "98%": { opacity: "0.6" },
          "99%": { opacity: "1" },
        },
        scan: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100vh)" },
        },
        waveform: {
          "0%, 100%": { transform: "scaleY(0.3)" },
          "50%": { transform: "scaleY(1)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;

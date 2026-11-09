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
        accent: {
          DEFAULT: "#2563EB",
          light: "#3B82F6",
          dark: "#1D4ED8",
        },
        brand: {
          navy: "#0F172A",     // Authoritative deep slate navy
          blue: "#2563EB",     // Skol-style vibrant primary action blue
          blueHover: "#1D4ED8",
          sky: "#0284C7",
          emerald: "#059669",  // Growth & verified badge green
          emeraldLight: "#ECFDF5",
          amber: "#D97706",    // Star ratings & warm trust gold
          amberLight: "#FEF3C7",
          surface: "#F8FAFC",  // Soft light background
          card: "#FFFFFF",
          border: "#E2E8F0",
        },
        pine: {
          DEFAULT: "#274a44",
          light: "#345e57",
          dark: "#1c3732",
          deep: "#122522",
        },
        // Core semantic tokens mapped to company colors:
        lime: "#2563EB", // Map lime to vibrant brand blue for high-contrast visibility
        ink: "#0F172A",  // High-legibility deep slate
        coal: "#1E293B", // Rich slate surface
        paper: "#FFFFFF", // Clean crisp white page
        sand: "#F1F5F9",  // Subtle light slate border/divider
      },
      fontFamily: {
        display: ["Archivo", "ui-sans-serif", "system-ui", "sans-serif"],
        body: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      maxWidth: {
        "7xl": "1720px",
        "screen-2xl": "1720px",
      },
      animation: {
        marquee: "marquee 35s linear infinite",
        "fade-in": "fadeIn 0.5s ease-out forwards",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;

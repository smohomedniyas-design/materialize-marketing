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
          DEFAULT: "#fff9b2",
          light: "#fffde6",
          dark: "#f2ea99",
        },
        brand: {
          navy: "#0F172A",
          blue: "#2563EB",
          emerald: "#10B981",
          amber: "#F59E0B",
          lime: "#fff9b2",
          spruce: "#122522",
        },
        pine: {
          DEFAULT: "#274a44",
          light: "#345e57",
          dark: "#1c3732",
          deep: "#122522",
        },
        // Signature Materialize Marketing editorial tokens:
        lime: "#fff9b2", // Iconic electric accent
        ink: "#122522",  // Midnight spruce foundation
        coal: "#17302c", // Rich surface
        paper: "#FAF9F5", // Clean editorial paper
        sand: "#EDEAE0",  // Warm subtle sand border
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

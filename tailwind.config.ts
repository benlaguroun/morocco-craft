import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        gold: "#C49A38",
        emerald: "#12544C",
        burgundy: "#800925",
        indigo: "#2D317A",
        sand: "#E9DCC3",
        stone: "#75736A",
        glassBg: "rgba(255,255,255,0.18)",
        glassDark: "rgba(34,34,34,0.25)",
        // Override primary/secondary using theme colors
        primary: {
          DEFAULT: "#C49A38",
          foreground: "#fff",
        },
        secondary: {
          DEFAULT: "#12544C",
          foreground: "#fff",
        },
      },
      fontFamily: {
        sans: ["Montserrat", "ui-sans-serif", "system-ui"],
        display: ["Playfair Display", "serif"],
      },
      boxShadow: {
        glass: "0 8px 32px 0 rgba(31, 38, 135, 0.24)",
        gold: "0 2px 8px 0px #C49A385a",
      },
      backdropBlur: {
        xs: "2px",
        sm: "4px",
      },
      borderRadius: {
        glass: "18px",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

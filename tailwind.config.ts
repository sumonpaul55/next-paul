import { nextui } from "@nextui-org/react";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/Cpages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        baseGray: "#E9E7E8",
        TextHeading: "#030014",
        primary: "#0040a8",
      },
      fontFamily: {
        sans: ["var(--geist-sans)"],
        mono: ["var(--geist-mono)"],
        roboto_slab: ["var(--Roboto_Slab)"],
        open_sans: ["var(--open_sans)"],
      },
      // keyframes: {
      //   backgroundPulse: {
      //     "0%": { backgroundColor: "#1D4ED8" }, // Starting with primary color
      //     "100%": { backgroundColor: "#3B82F6" }, // Ending with lighter primary color
      //   },
      // },
      // animation: {
      //   "background-pulse": "backgroundPulse 0.5s ease-in-out forwards",
      // },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
export default config;

import { Source_Serif_4 } from "next/font/google";

// Self-hosted at build time (no render-blocking request to Google Fonts).
// Chinese text falls back to the system serif; see --font-serif in styles/globals.css.
export const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  axes: ["opsz"],
  display: "swap",
  variable: "--font-source-serif",
});

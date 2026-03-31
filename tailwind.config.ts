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
        brand: {
          black: "#0A0A0A",
          dark: "#111111",
          card: "#1A1A2E",
          purple: "#B794F6",
          "purple-light": "#D6BCFA",
          "purple-dark": "#9F7AEA",
          navy: "#0F0F1A",
          gray: {
            100: "#F7F7F7",
            200: "#E2E2E2",
            300: "#AAAAAA",
            400: "#888888",
            500: "#666666",
          },
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;

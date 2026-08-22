import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        soft: "0 24px 70px -30px rgba(15, 23, 42, 0.25)",
        pill: "0 10px 40px -15px rgba(15, 23, 42, 0.25)",
      },
    },
  },
  plugins: [],
};

export default config;

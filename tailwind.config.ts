import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        brand_green: '#00C853',
        brand_teal: '#00695C',
        soft_white: '#F5F7FA',
        dark_gray: '#333333',
        warm_gray: '#E0E0E0',
        bright_cyan: '#00BCD4',
        golden_yellow: '#FFD54F',
      },
    },
  },
  plugins: [],
} satisfies Config;

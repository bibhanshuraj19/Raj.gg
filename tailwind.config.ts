import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
        display: ["Inter", "sans-serif"],
        label: ["Inter", "sans-serif"],
        mono: ["'JetBrains Mono'", "Menlo", "monospace"],
      },
      colors: {
        surface: {
          DEFAULT: "#060606",
          container: "#111111",
          "container-low": "#0c0c0c",
          "container-high": "#161616",
          "container-highest": "#1c1c1c",
        },
        "on-surface": { DEFAULT: "#f0f0f0", variant: "#999999" },
        "outline-variant": "#2a2a2a",
        emerald: { DEFAULT: "#34d399", dim: "rgba(52,211,153,0.15)" },
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};
export default config;

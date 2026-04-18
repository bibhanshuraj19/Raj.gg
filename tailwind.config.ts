import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"],
        display: ["Inter", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
        label: ["Inter", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
        mono: ["'SF Mono'", "Menlo", "Monaco", "Consolas", "monospace"],
      },
      maxWidth: {
        content: "680px",
      },
      colors: {
        surface: {
          DEFAULT: "#060606",
          container: "rgba(255,255,255,0.03)",
          "container-low": "rgba(255,255,255,0.02)",
          "container-high": "rgba(255,255,255,0.06)",
          "container-highest": "rgba(255,255,255,0.10)",
        },
        "on-surface": {
          DEFAULT: "#e8e6e3",
          variant: "#9b9b9b",
        },
        "outline-variant": "rgba(255,255,255,0.08)",
        emerald: {
          DEFAULT: "#34d399",
          dim: "rgba(52,211,153,0.12)",
        },
      },
      transitionDuration: {
        "400": "400ms",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      animation: {
        shimmer: "shimmer 3s ease-in-out infinite",
        "pulse-slow": "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "text-gradient-wave": "textGradientWave 3s infinite ease-in-out",
        in: "slideIn 0.2s ease-out",
        out: "slideOut 0.2s ease-in",
      },
      keyframes: {
        shimmer: {
          "0%": { left: "-100%" },
          "50%": { left: "100%" },
          "100%": { left: "100%" },
        },
        textGradientWave: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "200% 50%" },
        },
        slideIn: {
          "0%": { transform: "translateY(100%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideOut: {
          "0%": { transform: "translateY(0)", opacity: "1" },
          "100%": { transform: "translateY(100%)", opacity: "0" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
      },
    },
  },
  plugins: [],
};
export default config;

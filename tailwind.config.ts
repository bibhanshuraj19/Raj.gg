import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Space Grotesk', 'Inter', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        display: ['Space Grotesk', 'sans-serif'],
      },
      colors: {
        bg: {
          DEFAULT: '#050508',
          secondary: '#0c0c12',
          tertiary: '#14141e',
          card: '#0a0a14',
        },
        border: {
          DEFAULT: 'rgba(56, 189, 248, 0.12)',
          subtle: 'rgba(56, 189, 248, 0.06)',
          glow: 'rgba(56, 189, 248, 0.25)',
        },
        text: {
          DEFAULT: '#e8eaed',
          muted: '#8b8fa3',
          dim: '#5a5e73',
        },
        cyan: {
          DEFAULT: '#38bdf8',
          bright: '#7dd3fc',
          neon: 'rgba(56, 189, 248, 0.6)',
          glow: 'rgba(56, 189, 248, 0.08)',
        },
        purple: {
          DEFAULT: '#a78bfa',
          bright: '#c4b5fd',
          neon: 'rgba(167, 139, 250, 0.6)',
          glow: 'rgba(167, 139, 250, 0.08)',
        },
        emerald: {
          DEFAULT: '#34d399',
          dim: 'rgba(52, 211, 153, 0.15)',
        },
        amber: {
          DEFAULT: '#fbbf24',
        },
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-in-left': {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        wave: {
          '0%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(-20deg)' },
          '75%': { transform: 'rotate(20deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s cubic-bezier(0.22, 1, 0.36, 1)',
        'fade-in': 'fade-in 0.4s ease-out',
        'slide-in-left': 'slide-in-left 0.5s cubic-bezier(0.22, 1, 0.36, 1)',
        wave: 'wave 0.8s linear',
      },
    },
  },
  plugins: [],
};
export default config;

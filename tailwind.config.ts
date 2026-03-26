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
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        label: ['Manrope', 'sans-serif'],
      },
      colors: {
        surface: {
          DEFAULT: '#060606',
          dim: '#060606',
          bright: '#1a1a1a',
          container: '#111111',
          'container-low': '#0c0c0c',
          'container-high': '#161616',
          'container-highest': '#1c1c1c',
          'container-lowest': '#000000',
          variant: '#1c1c1c',
        },
        accent: {
          DEFAULT: '#ffffff',
          muted: '#d4d4d4',
          dim: '#888888',
        },
        on: {
          surface: '#f0f0f0',
          'surface-variant': '#999999',
          background: '#f0f0f0',
        },
        outline: {
          DEFAULT: '#555555',
          variant: '#2a2a2a',
        },
        emerald: {
          DEFAULT: '#34d399',
          dim: 'rgba(52, 211, 153, 0.15)',
        },
      },
      borderRadius: {
        'sm': '4px',
        'md': '8px',
        'lg': '12px',
        'xl': '14px',
        '2xl': '18px',
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s cubic-bezier(0.16, 1, 0.3, 1)',
        'fade-in': 'fade-in 0.5s ease-out',
        'gradient-shift': 'gradient-shift 6s ease infinite',
      },
    },
  },
  plugins: [],
};
export default config;

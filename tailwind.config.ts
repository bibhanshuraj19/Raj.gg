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
          DEFAULT: '#0e0e0e',
          dim: '#0e0e0e',
          bright: '#2c2c2c',
          container: '#1a1919',
          'container-low': '#131313',
          'container-high': '#201f1f',
          'container-highest': '#262626',
          'container-lowest': '#000000',
          variant: '#262626',
        },
        primary: {
          DEFAULT: '#a1faff',
          container: '#00f4fe',
          dim: '#00e5ee',
        },
        secondary: {
          DEFAULT: '#00e3fe',
          container: '#006876',
          dim: '#00d4ee',
        },
        tertiary: {
          DEFAULT: '#64b3ff',
          container: '#45a6fa',
          dim: '#41a3f7',
        },
        error: {
          DEFAULT: '#ff716c',
          container: '#9f0519',
          dim: '#d7383b',
        },
        on: {
          surface: '#ffffff',
          'surface-variant': '#adaaaa',
          primary: '#006165',
          'primary-container': '#00575b',
          secondary: '#004d58',
          background: '#ffffff',
        },
        outline: {
          DEFAULT: '#767575',
          variant: '#484847',
        },
        accent: '#00F5FF',
        emerald: {
          DEFAULT: '#34d399',
          dim: 'rgba(52, 211, 153, 0.15)',
        },
      },
      maxWidth: {
        '7xl': '80rem',
      },
      borderRadius: {
        'sm': '4px',
        'md': '8px',
        'lg': '12px',
        'xl': '16px',
        '2xl': '20px',
        '3xl': '24px',
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
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'glow-pulse': {
          '0%, 100%': { boxShadow: '0 0 20px -4px rgba(0, 245, 255, 0.08)' },
          '50%': { boxShadow: '0 0 50px -4px rgba(0, 245, 255, 0.15)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s cubic-bezier(0.22, 1, 0.36, 1)',
        'fade-in': 'fade-in 0.4s ease-out',
        'slide-in-left': 'slide-in-left 0.5s cubic-bezier(0.22, 1, 0.36, 1)',
        'gradient-shift': 'gradient-shift 4s ease infinite',
        'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
export default config;

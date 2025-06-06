import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Sovira brand colors
        'sovira-black': '#111111',
        'sovira-graphite': '#2F2F2F',
        'sovira-paper': '#F4F4F4',
        'sovira-chartreuse': '#C6FF00',
        'sovira-chartreuse-readable': '#6564DB',
        'sovira-neutral': '#9B9B9B',
      },
      fontFamily: {
        'neue-haas': ['Neue Haas Grotesk Display', 'system-ui', 'sans-serif'],
        'spectral': ['Spectral', 'serif'],
        'suisse': ['Suisse Int\'l', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'h1': ['96px', { lineHeight: '1', letterSpacing: '-0.01em' }],
        'h2': ['72px', { lineHeight: '1.1', letterSpacing: '-0.005em' }],
        'h3': ['48px', { lineHeight: '1.2', letterSpacing: '0' }],
        'body': ['16px', { lineHeight: '1.6', letterSpacing: '0.02em' }],
        'caption': ['14px', { lineHeight: '1.5', letterSpacing: '0.04em' }],
      },
      backgroundImage: {
        'sovira-gradient-accent': 'linear-gradient(to bottom, #C6FF00, transparent, #111111)',
        'sovira-gradient-dark': 'linear-gradient(to bottom, rgba(47, 47, 47, 0.8), transparent)',
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        'sovira-cta': '0 4px 20px rgba(198, 255, 0, 0.3)',
      },
      backdropBlur: {
        'glass': '12px',
      },
      animation: {
        'fade-in': 'fadeIn 0.15s ease-out',
        'slide-up': 'slideUp 0.15s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config; 
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        obsidian: {
          950: '#08070b',
          900: '#0c0a10',
          800: '#141218',
          700: '#1b1722',
          600: '#252030',
        },
        terra: {
          light: '#e85842',
          DEFAULT: '#A83220',
          bright: '#E04832',
          dark: '#7A2214',
          glow: 'rgba(168, 50, 32, 0.35)',
        },
        peach: {
          50: '#fff5f3',
          100: '#ffe8e3',
          200: '#FFDAD2',
          300: '#FFB4A2',
          DEFAULT: '#FFDAD2',
        },
        accent: {
          mint: '#00E599',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        display: ['"Syne"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite alternate',
        'pulse-glow': 'pulseGlow 10s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%': { transform: 'translateY(0px)' },
          '100%': { transform: 'translateY(-14px)' },
        },
        pulseGlow: {
          '0%': { opacity: '0.5', transform: 'scale(1)' },
          '100%': { opacity: '0.85', transform: 'scale(1.15)' },
        }
      }
    },
  },
  plugins: [],
}

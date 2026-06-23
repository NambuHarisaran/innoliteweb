/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        orange: {
          DEFAULT: '#F47920',
          light: '#FF9A3C',
          dark: '#D4620A',
        },
        navy: {
          DEFAULT: '#1A2B4A',
          dark: '#0D1A2E',
          mid: '#2A3F6A',
        },
        offwhite: '#F8F8F8',
      },
      fontFamily: {
        display: ['Poppins', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        accent: ['Space Grotesk', 'sans-serif'],
      },
      borderRadius: {
        pill: '9999px',
      },
      spacing: {
        '2xl': '6rem',
        '3xl': '9rem',
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        marquee: 'marquee 30s linear infinite',
        orbit: 'orbit calc(var(--duration) * 1s) linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        slideUp: {
          from: { opacity: 0, transform: 'translateY(40px)' },
          to: { opacity: 1, transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        orbit: {
          '0%': {
            transform:
              'rotate(0deg) translateY(calc(var(--radius) * 1px)) rotate(0deg)',
          },
          '100%': {
            transform:
              'rotate(360deg) translateY(calc(var(--radius) * 1px)) rotate(-360deg)',
          },
        },
      },
    },
  },
  plugins: [],
};

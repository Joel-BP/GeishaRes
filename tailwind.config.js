/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Deep navy / midnight blue palette
        espresso: {
          50: '#f0f4fb',
          100: '#dde6f5',
          200: '#b8c8e8',
          300: '#8da3d0',
          400: '#5a73b5',
          500: '#3d5694',
          600: '#2a3d75',
          700: '#1e2d5c',
          800: '#131f42',
          900: '#0c1530',
          950: '#070d1c',
        },
        // Warm gold accent
        gold: {
          50: '#fbf8f0',
          100: '#f5edd6',
          200: '#ebd9a8',
          300: '#e0c47a',
          400: '#d4af4c',
          500: '#c19a30',
          600: '#9c7a24',
          700: '#765b1a',
          800: '#4f3d11',
          900: '#2a1f09',
        },
        // Deep forest green for the "reserve" feel
        forest: {
          50: '#f0f7f3',
          100: '#d9ece1',
          200: '#b3d9c4',
          300: '#7ebd9b',
          400: '#4a9a76',
          500: '#2e7d58',
          600: '#1f6444',
          700: '#164d35',
          800: '#0f3625',
          900: '#081f15',
        },
        cream: {
          50: '#fdfcfa',
          100: '#faf6ef',
          200: '#f4ecdf',
          300: '#e9dcc6',
          400: '#d4be9c',
          500: '#bda077',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'fade-up': 'fadeUp 0.8s ease-out forwards',
        'slide-in-right': 'slideInRight 0.4s ease-out forwards',
        'scale-in': 'scaleIn 0.5s ease-out forwards',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
      },
    },
  },
  plugins: [],
};

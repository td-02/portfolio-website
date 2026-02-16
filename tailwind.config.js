/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: '#0f172a'
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif']
      },
      boxShadow: {
        academic: '0 14px 45px -30px rgba(15, 23, 42, 0.45)'
      }
    }
  },
  plugins: []
};

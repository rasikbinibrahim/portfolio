/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        light: {
          bg: '#F8FAFC',
          text: '#0F172A',
          primary: '#2563EB',
          card: '#FFFFFF',
          border: '#E2E8F0',
        },
        dark: {
          bg: '#020617',
          text: '#E2E8F0',
          primary: '#3B82F6',
          card: '#0F172A',
          border: '#1E293B',
        },
      },
      fontFamily: {
        sans: ['Inter', 'Outfit', 'sans-serif'],
        tajawal: ['Tajawal', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Colores ajustados para hacer match con la iluminación del video
        'dental-navy': '#0B1120', 
        'dental-navy-light': '#111827',
        'dental-gold': '#FBBF24', 
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'display': ['Calans', 'Georgia', 'serif'], 
      },
    },
  },
  plugins: [],
}
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  // EL FIX: Esto le dice a Vite que busque los archivos dentro de la subcarpeta del repositorio
  base: "/odontologia-premium/", 
  plugins: [
    react(),
    tailwindcss(),
  ],
})
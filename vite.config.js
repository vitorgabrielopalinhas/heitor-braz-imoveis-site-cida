    import { defineConfig } from 'vite'
    import react from '@vitejs/plugin-react'

    // https://vitejs.dev/config/
    export default defineConfig({
      plugins: [react( )],
      base: '/', // Mantenha esta linha como barra simples
      build: {
        outDir: 'dist', // Garante que a saída seja na pasta 'dist'
        rollupOptions: {
          input: {
            main: 'index.html' // Garante que o ponto de entrada seja o index.html
          }
        }
      }
    })

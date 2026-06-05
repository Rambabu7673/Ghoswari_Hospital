import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "@tailwindcss/vite";
import obfuscator from "vite-plugin-javascript-obfuscator";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    obfuscator({
      apply: "build",
    }),
  ],
});

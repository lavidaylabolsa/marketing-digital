import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
export default defineConfig({
  base: '/nexus-digital-landing/', plugins: [react()],
  resolve: { alias: { "@": path.resolve(__dirname, "./src") } },
})

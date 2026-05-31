import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
export default defineConfig({
  base: '/marketing-digital/', plugins: [react()],
  resolve: { alias: { "@": path.resolve(__dirname, "./src") } },
})

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    // Copy this folder to dist/ in digital-globe-website-backend - app.js serves it
    outDir: "digital-globe-build",
  },
});

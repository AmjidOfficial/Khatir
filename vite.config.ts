import { defineConfig } from "vite";
import react from "@vitejs/react-vite"; // or "@vitejs/plugin-react" depending on your exact package
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  // This ensures assets are referenced with the subfolder name prefix
  base: "/Khatir/", 
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});

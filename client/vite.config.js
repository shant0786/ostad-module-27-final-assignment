import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],

  server: {
    proxy: {
      "/api/": {
        target: "https://ostad-module-27-final-assignment.onrender.com", // Your backend server URL
      },
    },
  },
});

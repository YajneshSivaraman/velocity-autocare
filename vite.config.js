
/* Import Vite's configuration helper. */
import { defineConfig } from "vite";

/* Import the React plugin for JSX support. */
import react from "@vitejs/plugin-react";

/* Import Tailwind CSS v4's Vite plugin. */
import tailwindcss from "@tailwindcss/vite";

// Configure Vite with React and Tailwind CSS.
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
});

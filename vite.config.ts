import { defineConfig } from "vite";
import path from "path";

import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.jsx"),
      formats: ["es"],
      fileName: (format) => `index.${format}.js`,
    },
  },
});

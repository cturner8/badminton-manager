import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import electron from "vite-plugin-electron";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    electron({
      main: {
        entry: "electron/main.ts",
      },
      preload: {
        input: {
          // Must be use absolute path, this is the restrict of Rollup
          preload: path.join(__dirname, "electron/preload.ts"),
        },
      },
      // Enables use of Node.js API in the Electron-Renderer
      renderer: {},
    }),
  ],
});

/// <reference types="vitest" />

import path from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  test: {
    environment: "happy-dom",
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, "packages/index.ts"),
      name: "@jackiew/jui",
      fileName: format => `jackiew-ui.${format}.js`,
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue",
        },
      },
    },
  },
});

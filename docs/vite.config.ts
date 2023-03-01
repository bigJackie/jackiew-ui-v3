import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import { AtomCss } from "@jackiew/atomcss/jackiew-css.umd.cjs";

export default defineConfig({
  plugins: [AtomCss()],
  resolve: {
    alias: {
      "@examples": fileURLToPath(new URL("../docs/examples", import.meta.url)),
    },
  },
});

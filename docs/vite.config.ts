import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 8999,
  },
  resolve: {
    alias: {
      "@components": fileURLToPath(
        new URL("../packages/components", import.meta.url)
      ),
      "@directives": fileURLToPath(
        new URL("../packages/directives", import.meta.url)
      ),
      "@examples": fileURLToPath(new URL("../docs/examples", import.meta.url)),
    },
  },
});

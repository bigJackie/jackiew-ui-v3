import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Atomcss from "@jackiew/atomcss";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), Atomcss()],
});

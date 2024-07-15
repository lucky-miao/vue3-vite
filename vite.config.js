import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite"
import eslint from "vite-plugin-eslint";
import ReactivityTransform from "@vue-macros/reactivity-transform/vite";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    ReactivityTransform(),
    AutoImport({
      imports:['vue','vue-router']
    })
    // eslint({ lintOnStart: true, cache: false }), // 项目运行时进行eslint检查
  ],
});

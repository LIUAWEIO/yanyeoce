import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue()],
  base: "/",
  server: {
    open: true,
    port: 3000, // 将端口更改为 3000 或其他未被占用的端口
  },
  build: {
    lib: {
      entry: "src/index.ts",
      name: "YourComponentLibrary",
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: ["vue", "ant-design-vue"],
      output: {
        globals: {
          vue: "Vue",
          "ant-design-vue": "antd",
        },
      },
    },
  },
});

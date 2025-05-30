import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Lazyeat",
  description: "无接触手势控制",

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "/lazyeat.png",
    nav: [
      { text: "首页", link: "/" },
      { text: "下载", link: "/pages/download" },
    ],
    socialLinks: [
      { icon: "github", link: "https://github.com/lanxiuyun/lazyeat" },
      { icon: "gitee", link: "https://gitee.com/lanxiuyun/lazyeat" },
    ],
  },

  // 注册全局组件
  vite: {
    ssr: {
      noExternal: ["DemoShowcase"],
    },
  },
});

import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  dest: './dist', // 设置编译后的输出目录./ROOT代表在工程的根目录下生成一个ROOT文件，里面是编译好的文件，可以拿ROOT直接部署
  base: '/lzwblog/', // 设置站点根路径 // 路径名为 "/<REPO>/"

  lang: "zh-CN",
  title: "还好",
  description: "还好的博客演示",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});


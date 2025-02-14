import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    {
      text: "前端",
      prefix: 'pages/frontend/',
      children: "structure",
    },
    {
      text: "项目",
      prefix: 'pages/project/',
      children: "structure",
    },
    {
      text: '好用的网站与工具',
      link: 'pages/link/README.md',
    },
    {
      text: '其它',
      link: 'pages/other/index.md',
    },
    {
      text: '密码本',
      prefix: 'pages/codeBook/',
      children: "structure",
    },
    // "intro",
  ],
});

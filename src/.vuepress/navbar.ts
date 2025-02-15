import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: '前端',
    children: [
      {
        text: 'CSS',
        prefix: '/pages/frontend/css/',
        children: ['flex.md', 'grid.md']
      },
      {
        text: 'nvm',
        prefix: '/pages/frontend/nvm/',
        children: ['index.md']
      },
      {
        text: '博客',
        link: '/pages/frontend/blog.md',
      },
      {
        text: 'vue3',
        link: '/pages/frontend/vue3.md',
      },
      {
        text: 'TypeScript',
        prefix: '/pages/frontend/TypeScript/',
        children: ['README.md']
      }
    ]
  },
  {
    text: '项目',
    children: [
      {
        text: '英邦科技',
        prefix: '/pages/project/英邦科技/',
        children: ['index.md']
      }
    ]
  },
  {
    text: '密码本',
    prefix: '/pages/codeBook/',
    children: ['work.md']
  },
  {
    text: '好用的网站与工具',
    link: '/pages/link/README.md',
  },
  {
    text: '其它',
    link: '/pages/other/index.md',
  },
]);

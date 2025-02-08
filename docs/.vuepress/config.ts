import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { navbar } from './config/index'
import { slimsearchPlugin } from '@vuepress/plugin-slimsearch'
// import { searchPlugin } from '@vuepress/plugin-search'

export default defineUserConfig({
  dest: './dist', // 设置编译后的输出目录./ROOT代表在工程的根目录下生成一个ROOT文件，里面是编译好的文件，可以拿ROOT直接部署
  base: '/lzwblog/', // 设置站点根路径 // 路径名为 "/<REPO>/"
  // port: 3026, // 端口号
  lang: 'zh-CN',
  title: '还好',
  description: '这是我的备忘录',// 网站标题
  head: [
    // 增加一个自定义的 favicon
    [
      'link',
      {
        rel: 'icon',
        href: '/images/logo.png',
        type: 'image/png',
        sizes: '16x16'
      }
    ],
    [
      // 解决外联图片不显示由于我们vuepress本地服务把当前本站的referrer带给了cdn图片请求，第三方发现不是本站的请求
      'meta',
      {
        name: 'referrer',
        content: 'no-referrer'
      }
    ],
    // 移动端优化
    [
      'meta',
      {
        name: 'viewport',
        content:
          'width=device-width,initial-scale=1,user-scalable=no,maximum-scale=2'
      }
    ]
  ],
  bundler: viteBundler({
    viteOptions: {},
    vuePluginOptions: {},
  }),
  theme: defaultTheme({
    logo: '/images/logo.png',
    // 默认主题配置
    navbar: navbar
  }),
  plugins: [
    // searchPlugin({
    //   // 配置项
    // }),
    slimsearchPlugin({
      // 配置项
    }),
  ],
})
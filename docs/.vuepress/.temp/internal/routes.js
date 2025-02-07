export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/练手项目/lzwblog/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"页面的标题"} }],
  ["/pages/blog/instruction.html", { loader: () => import(/* webpackChunkName: "pages_blog_instruction.html" */"D:/练手项目/lzwblog/docs/.vuepress/.temp/pages/pages/blog/instruction.html.js"), meta: {"title":"指令"} }],
  ["/pages/frontend/css/flex.html", { loader: () => import(/* webpackChunkName: "pages_frontend_css_flex.html" */"D:/练手项目/lzwblog/docs/.vuepress/.temp/pages/pages/frontend/css/flex.html.js"), meta: {"title":"Flex 布局"} }],
  ["/pages/frontend/css/grid.html", { loader: () => import(/* webpackChunkName: "pages_frontend_css_grid.html" */"D:/练手项目/lzwblog/docs/.vuepress/.temp/pages/pages/frontend/css/grid.html.js"), meta: {"title":"Grid 布局"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"D:/练手项目/lzwblog/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);

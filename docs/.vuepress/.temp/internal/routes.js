export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/练手项目/lzwblog/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"页面的标题"} }],
  ["/pages/blog/instruction.html", { loader: () => import(/* webpackChunkName: "pages_blog_instruction.html" */"D:/练手项目/lzwblog/docs/.vuepress/.temp/pages/pages/blog/instruction.html.js"), meta: {"title":"指令"} }],
  ["/pages/other/", { loader: () => import(/* webpackChunkName: "pages_other_index.html" */"D:/练手项目/lzwblog/docs/.vuepress/.temp/pages/pages/other/index.html.js"), meta: {"title":"其他"} }],
  ["/pages/frontend/nvm/", { loader: () => import(/* webpackChunkName: "pages_frontend_nvm_index.html" */"D:/练手项目/lzwblog/docs/.vuepress/.temp/pages/pages/frontend/nvm/index.html.js"), meta: {"title":"nvm指令"} }],
  ["/pages/project/yingbang/", { loader: () => import(/* webpackChunkName: "pages_project_yingbang_index.html" */"D:/练手项目/lzwblog/docs/.vuepress/.temp/pages/pages/project/yingbang/index.html.js"), meta: {"title":"萌豆"} }],
  ["/pages/frontend/css/flex.html", { loader: () => import(/* webpackChunkName: "pages_frontend_css_flex.html" */"D:/练手项目/lzwblog/docs/.vuepress/.temp/pages/pages/frontend/css/flex.html.js"), meta: {"title":"Flex 布局"} }],
  ["/pages/frontend/css/grid.html", { loader: () => import(/* webpackChunkName: "pages_frontend_css_grid.html" */"D:/练手项目/lzwblog/docs/.vuepress/.temp/pages/pages/frontend/css/grid.html.js"), meta: {"title":"Grid 布局"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"D:/练手项目/lzwblog/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}

import comp from "D:/练手项目/lzwblog/docs/.vuepress/.temp/pages/pages/other/index.html.vue"
const data = JSON.parse("{\"path\":\"/pages/other/\",\"title\":\"其他\",\"lang\":\"zh-CN\",\"frontmatter\":{\"lang\":\"zh-CN\",\"title\":\"其他\",\"description\":\"暂时未分类的一些东西\"},\"headers\":[{\"level\":3,\"title\":\"查看远程仓库的路径\",\"slug\":\"查看远程仓库的路径\",\"link\":\"#查看远程仓库的路径\",\"children\":[]},{\"level\":3,\"title\":\"IOS端微信公众号页面获取签名与权限的坑\",\"slug\":\"ios端微信公众号页面获取签名与权限的坑\",\"link\":\"#ios端微信公众号页面获取签名与权限的坑\",\"children\":[]}],\"git\":{\"updatedTime\":1738980177000,\"contributors\":[{\"name\":\"LZW\",\"username\":\"LZW\",\"email\":\"2071708612@qq.com\",\"commits\":1,\"url\":\"https://github.com/LZW\"}]},\"filePathRelative\":\"pages/other/index.md\",\"excerpt\":\"<h3>查看远程仓库的路径</h3>\\n<div class=\\\"language-text line-numbers-mode\\\" data-highlighter=\\\"prismjs\\\" data-ext=\\\"text\\\" data-title=\\\"text\\\"><pre><code><span class=\\\"line\\\">git remote -v</span>\\n<span class=\\\"line\\\"></span></code></pre>\\n<div class=\\\"line-numbers\\\" aria-hidden=\\\"true\\\" style=\\\"counter-reset:line-number 0\\\"><div class=\\\"line-number\\\"></div></div></div>\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}

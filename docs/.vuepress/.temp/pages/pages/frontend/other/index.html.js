import comp from "D:/练手项目/lzwblog/docs/.vuepress/.temp/pages/pages/frontend/other/index.html.vue"
const data = JSON.parse("{\"path\":\"/pages/frontend/other/\",\"title\":\"其他\",\"lang\":\"zh-CN\",\"frontmatter\":{\"lang\":\"zh-CN\",\"title\":\"其他\",\"description\":\"暂时未分类的一些东西\"},\"headers\":[],\"git\":{},\"filePathRelative\":\"pages/frontend/other/index.md\",\"excerpt\":\"<div class=\\\"language-text line-numbers-mode\\\" data-highlighter=\\\"prismjs\\\" data-ext=\\\"text\\\" data-title=\\\"text\\\"><pre><code><span class=\\\"line\\\"> // 1、查看已经安装的node版本</span>\\n<span class=\\\"line\\\">nvm ls</span>\\n<span class=\\\"line\\\"></span></code></pre>\\n<div class=\\\"line-numbers\\\" aria-hidden=\\\"true\\\" style=\\\"counter-reset:line-number 0\\\"><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div></div></div>\"}")
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

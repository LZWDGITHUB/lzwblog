import comp from "D:/练手项目/lzwblog/docs/.vuepress/.temp/pages/pages/blog/instruction.html.vue"
const data = JSON.parse("{\"path\":\"/pages/blog/instruction.html\",\"title\":\"指令\",\"lang\":\"zh-CN\",\"frontmatter\":{\"lang\":\"zh-CN\",\"title\":\"指令\",\"description\":\"博客常用命令\"},\"headers\":[{\"level\":3,\"title\":\"项目node版本\",\"slug\":\"项目node版本\",\"link\":\"#项目node版本\",\"children\":[]},{\"level\":3,\"title\":\"项目启动\",\"slug\":\"项目启动\",\"link\":\"#项目启动\",\"children\":[]},{\"level\":3,\"title\":\"项目更新\",\"slug\":\"项目更新\",\"link\":\"#项目更新\",\"children\":[]}],\"git\":{\"updatedTime\":1738980177000,\"contributors\":[{\"name\":\"LZW\",\"username\":\"LZW\",\"email\":\"2071708612@qq.com\",\"commits\":2,\"url\":\"https://github.com/LZW\"}]},\"filePathRelative\":\"pages/blog/instruction.md\",\"excerpt\":\"<p><a href=\\\"https://v2.vuepress.vuejs.org/zh/\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">VuePress</a></p>\\n<h3>项目node版本</h3>\\n<div class=\\\"language-text line-numbers-mode\\\" data-highlighter=\\\"prismjs\\\" data-ext=\\\"text\\\" data-title=\\\"text\\\"><pre><code><span class=\\\"line\\\">// 当前项目需要最小18.19.0</span>\\n<span class=\\\"line\\\">// 查看已经安装的node版本</span>\\n<span class=\\\"line\\\">nvm ls</span>\\n<span class=\\\"line\\\">// 切换到指定版本</span>\\n<span class=\\\"line\\\">nvm use 版本号</span>\\n<span class=\\\"line\\\"></span></code></pre>\\n<div class=\\\"line-numbers\\\" aria-hidden=\\\"true\\\" style=\\\"counter-reset:line-number 0\\\"><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div></div></div>\"}")
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

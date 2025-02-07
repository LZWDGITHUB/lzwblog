import comp from "D:/练手项目/lzwblog/docs/.vuepress/.temp/pages/pages/blog/index.html.vue"
const data = JSON.parse("{\"path\":\"/pages/blog/\",\"title\":\"博客\",\"lang\":\"zh-CN\",\"frontmatter\":{\"lang\":\"zh-CN\",\"title\":\"博客\",\"description\":\"博客常用命令\"},\"headers\":[],\"git\":{},\"filePathRelative\":\"pages/blog/index.md\"}")
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

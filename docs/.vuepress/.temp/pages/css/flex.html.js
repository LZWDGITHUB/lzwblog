import comp from "D:/练手项目/vuepress-starter/docs/.vuepress/.temp/pages/css/flex.html.vue"
const data = JSON.parse("{\"path\":\"/css/flex.html\",\"title\":\"页面的标题flex\",\"lang\":\"zh-CN\",\"frontmatter\":{\"lang\":\"zh-CN\",\"title\":\"页面的标题flex\",\"description\":\"页面的描述flex\"},\"headers\":[],\"git\":{},\"filePathRelative\":\"css/flex.md\"}")
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

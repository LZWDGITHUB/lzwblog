export const siteData = JSON.parse("{\"base\":\"/lzwblog/\",\"lang\":\"zh-CN\",\"title\":\"还好\",\"description\":\"这是我的备忘录\",\"head\":[[\"link\",{\"rel\":\"icon\",\"href\":\"/images/logo.png\",\"type\":\"image/png\",\"sizes\":\"16x16\"}],[\"meta\",{\"name\":\"referrer\",\"content\":\"no-referrer\"}],[\"meta\",{\"name\":\"viewport\",\"content\":\"width=device-width,initial-scale=1,user-scalable=no,maximum-scale=2\"}]],\"locales\":{}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}

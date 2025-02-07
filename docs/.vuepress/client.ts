import { defineClientConfig } from 'vuepress/client'
import CustomLayout from './components/CustomLayout.vue'

export default defineClientConfig({
  enhance({ app, router, siteData }) {},
  setup() {},
  rootComponents: [],
  layouts: {
    CustomLayout,
  },
})
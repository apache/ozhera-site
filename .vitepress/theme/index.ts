// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import Layout from './Layout.vue'
import './styles/index.css'
import DownloadPage from './components/DownloadPage.vue'
import VersionList from './components/VersionList.vue'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app, router, siteData }) {
    // app.component('VPHome', HomeHero);
    app.component('DownloadPage', DownloadPage)
    app.component('VersionList', VersionList)
  }
}

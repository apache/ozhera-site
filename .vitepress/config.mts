import { defineConfig } from 'vitepress'

import { en, zh } from './configs/index.mjs'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "OzHera",
  srcDir: 'src',
  themeConfig: {
    socialLinks: [
      { icon: 'github', link: 'https://github.com/apache/ozhera' }
    ]
  },
  locales: {
    "en": {
      label: 'English',
      lang: 'en-US',
      description: "an Application Observable Platform",
      themeConfig: {
        nav: en.nav,
        sidebar: en.sidebar
      },
    },
    "zh": {
      label: '中文',
      lang: 'zh-CN',
      description: '一款云原生时代的应用观测平台',
      themeConfig: {
        nav: zh.nav,
        sidebar: zh.sidebar
      },
    }
  }
})

import { defineConfig } from "vitepress";

import { en, zh } from "./configs/index.mjs";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  // title: " ",
  srcDir: "src",
  themeConfig: {
    logo: "/images/logo.png",
    siteTitle: false,
    socialLinks: [{ icon: "github", link: "https://github.com/apache/ozhera" }],
  },
  locales: {
    en: {
      label: "English",
      lang: "en-US",
      description: "an Application Observable Platform",
      themeConfig: {
        nav: en.nav,
        sidebar: en.sidebar,
        footer: {
          message:
            '<div class="footer-incubator"><div><a href="https://incubator.apache.org/" target="_blank"><img src="/images/apache/incubator.svg" alt="Apache Incubator Logo"></a></div></div><div class="footer-message">Apache OzHera (Incubating) is an effort undergoing incubation at The Apache Software Foundation (ASF), sponsored by the Apache Incubator. Incubation is required of all newly accepted projects until a further review indicates that the infrastructure, communications, and decision making process have stabilized in a manner consistent with other successful ASF projects. While incubation status is not necessarily a reflection of the completeness or stability of the code, it does indicate that the project has yet to be fully endorsed by the ASF.</div>',
          copyright:
            '<div class="footer-copyright">Copyright © 2023-2024, The Apache Software Foundation Apache OzHera, OzHera, Apache, Apache Incubator, the Apache feather, the Apache Incubator logo and the Apache OzHera project logo are either registered trademarks or trademarks of the Apache Software Foundation.</div>',
        },
      },
    },
    zh: {
      label: "中文",
      lang: "zh-CN",
      description: "一款云原生时代的应用观测平台",
      themeConfig: {
        nav: zh.nav,
        sidebar: zh.sidebar,
        footer: {
          message:
            '<div class="footer-incubator"><div><a href="https://incubator.apache.org/" target="_blank"><img src="/images/apache/incubator.svg" alt="Apache Incubator Logo"></a></div></div><div class="footer-message">Apache OzHera (Incubating) is an effort undergoing incubation at The Apache Software Foundation (ASF), sponsored by the Apache Incubator. Incubation is required of all newly accepted projects until a further review indicates that the infrastructure, communications, and decision making process have stabilized in a manner consistent with other successful ASF projects. While incubation status is not necessarily a reflection of the completeness or stability of the code, it does indicate that the project has yet to be fully endorsed by the ASF.</div>',
          copyright:
            '<div class="footer-copyright">Copyright © 2023-2024, The Apache Software Foundation Apache OzHera, OzHera, Apache, Apache Incubator, the Apache feather, the Apache Incubator logo and the Apache OzHera project logo are either registered trademarks or trademarks of the Apache Software Foundation.</div>',
        },
      },
    },
  },
});

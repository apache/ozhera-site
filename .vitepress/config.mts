import { defineConfig } from "vitepress";

import { en, zh } from "./configs/index.mjs";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  // title: " ",
  srcDir: "src",
  description: "Apache OzHera(Incubating) is an Application Performance Monitoring (APM) platform designed for the cloud-native era. It revolves around applications and integrates capabilities such as metric monitoring, distributed tracing, logging, and alerting. The platform's mission is to enhance the online stability of applications and enable businesses to detect and locate issues within 1 minute and 5 minutes, respectively, when problems occur.",
  themeConfig: {
    logo: "/images/logo.png",
    siteTitle: false,
    socialLinks: [{ icon: "github", link: "https://github.com/apache/ozhera" }],
    nav: en.nav,
    footer: {
      message:
        '<div class="footer-incubator"><div><a href="https://incubator.apache.org/" target="_blank"><img src="/images/apache/incubator.svg" alt="Apache Incubator Logo"></a></div></div><div class="footer-message">Apache OzHera (Incubating) is an effort undergoing incubation at The Apache Software Foundation (ASF), sponsored by the Apache Incubator. Incubation is required of all newly accepted projects until a further review indicates that the infrastructure, communications, and decision making process have stabilized in a manner consistent with other successful ASF projects. While incubation status is not necessarily a reflection of the completeness or stability of the code, it does indicate that the project has yet to be fully endorsed by the ASF.</div>',
      copyright:
        '<div class="footer-copyright">Copyright © 2023-2025, The Apache Software Foundation Apache OzHera, OzHera, Apache, Apache Incubator, the Apache feather, the Apache Incubator logo and the Apache OzHera project logo are either registered trademarks or trademarks of the Apache Software Foundation.</div>',
    },
  },
  locales: {
    en: {
      label: "English",
      lang: "en-US",
      description: "Apache OzHera(Incubating) is an Application Performance Monitoring (APM) platform designed for the cloud-native era. It revolves around applications and integrates capabilities such as metric monitoring, distributed tracing, logging, and alerting. The platform's mission is to enhance the online stability of applications and enable businesses to detect and locate issues within 1 minute and 5 minutes, respectively, when problems occur.",
      themeConfig: {
        nav: en.nav,
        sidebar: en.sidebar,
        footer: {
          message:
            '<div class="footer-incubator"><div><a href="https://incubator.apache.org/" target="_blank"><img src="/images/apache/incubator.svg" alt="Apache Incubator Logo"></a></div></div><div class="footer-message">Apache OzHera (Incubating) is an effort undergoing incubation at The Apache Software Foundation (ASF), sponsored by the Apache Incubator. Incubation is required of all newly accepted projects until a further review indicates that the infrastructure, communications, and decision making process have stabilized in a manner consistent with other successful ASF projects. While incubation status is not necessarily a reflection of the completeness or stability of the code, it does indicate that the project has yet to be fully endorsed by the ASF.</div>',
          copyright:
            '<div class="footer-copyright">Copyright © 2023-2025, The Apache Software Foundation Apache OzHera, OzHera, Apache, Apache Incubator, the Apache feather, the Apache Incubator logo and the Apache OzHera project logo are either registered trademarks or trademarks of the Apache Software Foundation.</div>',
        },
      },
    },
    zh: {
      label: "中文",
      lang: "zh-CN",
      description: "Apache OzHera(Incubating)是一个云原生时代的应用观测平台(APM)，以应用为核心，集指标监控、链路追踪、日志、报警等能力于一身。平台使命是提升应用线上稳定性，帮助业务在遇到故障时能做到1分钟发现、5分钟定位。",
      themeConfig: {
        nav: zh.nav,
        sidebar: zh.sidebar,
        footer: {
          message:
            '<div class="footer-incubator"><div><a href="https://incubator.apache.org/" target="_blank"><img src="/images/apache/incubator.svg" alt="Apache Incubator Logo"></a></div></div><div class="footer-message">Apache OzHera (Incubating) is an effort undergoing incubation at The Apache Software Foundation (ASF), sponsored by the Apache Incubator. Incubation is required of all newly accepted projects until a further review indicates that the infrastructure, communications, and decision making process have stabilized in a manner consistent with other successful ASF projects. While incubation status is not necessarily a reflection of the completeness or stability of the code, it does indicate that the project has yet to be fully endorsed by the ASF.</div>',
          copyright:
            '<div class="footer-copyright">Copyright © 2023-2025, The Apache Software Foundation Apache OzHera, OzHera, Apache, Apache Incubator, the Apache feather, the Apache Incubator logo and the Apache OzHera project logo are either registered trademarks or trademarks of the Apache Software Foundation.</div>',
        },
      },
    },
  },
});

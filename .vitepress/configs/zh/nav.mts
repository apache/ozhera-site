export default [
  {
    text: '文档',
    activeMatch: `^/(guide)/`,
    items: [
      {
        text: "开始",
        items: [
          { text: '简介', link: '/zh/guide/introduction' },
          { text: '快速开始', link: '/zh/guide/quick-start' }
        ]
      },
      {
        text: "文档",
        items: [
          { text: "k8s部署", link: "/zh/docs/deployment" },
          { text: "应用接入", link: "/zh/docs/application-integration" },
          { text: "用户手册", link: "/zh/docs/manual" },
        ]
      }
    ]
  },
  {
    text: '资源',
    activeMatch: `^/info/`,
    items: [
      {
        text: '视频',
        items: [
          {
            text: 'OzHera',
            link: 'https://www.bilibili.com/video/BV11D4y1h7KM/'
          },
          {
            text: 'k8s部署',
            link: 'https://mp.weixin.qq.com/s?__biz=MzkwMjQzMzMxMg==&mid=2247483720&idx=1&sn=c38fca2d3e82de43ce22acad73a1be21&chksm=c0a4de07f7d35711c5cba634c3833708db19fcc9303a50b77f8c1601831cac8e9520e3f32ff5&token=1000658198&lang=zh_CN#rd'
          },
        ]
      },
      {
        text: '帮助',
        items: [
          {
            text: 'GitHub 论坛',
            link: 'https://github.com/apache/ozhera/discussions'
          },
        ]
      }
    ]
  },
  {
    text: '关于',
    activeMatch: `^/zh/about/`,
    items: [
      { text: '社区', link: '/zh/about/community' },
      { text: '规范指南', link: '/zh/about/spec-guide' },
    ]
  }
]

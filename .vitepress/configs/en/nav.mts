export default [
  {
    text: "Docs",
    activeMatch: "‘^/en/guide/",
    items: [
      {
        text: "Getting Started",
        items: [
          { text: 'Introduction', link: '/en/guide/introduction' },
          { text: 'Quick Start', link: '/en/guide/quick-start' }
        ]
      },
      {
        text: "docs",
        items: [
          { text: "k8s Deployment", link: "/en/docs/deployment" },
          { text: "Application Integration", link: "/en/docs/application-integration" },
          { text: "manual", link: "/en/docs/manual" },
        ]
      }
    ]
  },
  {
    text: 'Resources',
    activeMatch: "^/info/",
    items: [
      {
        text: 'Help',
        items: [
          {
            text: 'GitHub Discussions',
            link: 'https://github.com/apache/ozhera/discussions'
          },
          // { text: 'DEV Community', link: 'https://dev.to/t/OzHera' }
        ]
      }
    ]
  },
  {
    text: 'About',
    activeMatch: "^/en/about/",
    items: [
      { text: 'Community', link: '/en/about/community' },
      { text: 'Specification Guide', link: '/en/about/spec-guide' },
    ]
  }
]

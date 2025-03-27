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
    text: 'Download',
    activeMatch: `^/en/download/`,
    link: '/en/download/'
  },
  {
    text: 'ASF',
    activeMatch: "^/info/",
    items: [
      {
        text: 'Foundation',
        link: 'https://www.apache.org/'
      },
      {
        text: 'License',
        link: 'https://www.apache.org/licenses/'
      },
      {
        text: 'Events',
        link: 'https://www.apache.org/events/current-event'
      },
      {
        text: 'Sponsor',
        link: 'https://www.apache.org/foundation/sponsorship.html'
      },
      {
        text: 'Privacy',
        link: 'https://privacy.apache.org/policies/privacy-policy-public.html'
      },
      {
        text: 'Security',
        link: 'https://www.apache.org/security/'
      },
      {
        text: 'Thanks',
        link: 'https://www.apache.org/foundation/sponsors'
      },
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

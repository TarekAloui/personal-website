import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: 'd4a1144bfbc244eb8ac52329568eebce',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: 'tarekaloui',

  // basic site info (required)
  name: 'DerekWithT',
  domain: 'derekwitht.com',
  author: 'Tarek Aloui',

  // open graph metadata (optional)
  description: "Tarek Aloui's portfolio and blog",

  // social usernames (optional)
  twitter: 'TarekAloui21',
  github: 'TarekAloui',
  linkedin: 'tarek-aloui',
  // mastodon: '#', // optional mastodon profile URL, provides link verification
  // newsletter: '#', // optional newsletter URL
  // youtube: '#', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: 'https://i.postimg.cc/3xb5VSYY/profile.png',
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  pageUrlOverrides: {
    '/about': 'd4a1144bfbc244eb8ac52329568eebce',
    '/projects': '0d7972919e3249d8aa3086359cec77ea',
    '/notes': '11e66bbb35914f98b07f1f88b8d6b70f',
    '/blogs': 'c0eb23dedef64a0a946e32271b2b7258'
    // '/papers': '7c4db8134d634c229a044c69cef8b8c9'
  },
  // pageUrlOverrides: null,

  // whether to use the default notion navigation style or a custom one with links to
  // important pages
  //nimport { author } from './lib/config';
  //navigationStyle: 'default',
  includeNotionIdInUrls: true,
  navigationStyle: 'custom',
  navigationLinks: [
    {
      title: 'About',
      pageId: 'd4a1144bfbc244eb8ac52329568eebce'
    },
    {
      title: 'Projects',
      pageId: '0d7972919e3249d8aa3086359cec77ea'
    },
    {
      title: 'Notes',
      pageId: '11e66bbb35914f98b07f1f88b8d6b70f'
    },
    {
      title: 'Blogs',
      pageId: 'c0eb23dedef64a0a946e32271b2b7258'
    }
    // {
    //   title: 'Papers',
    //   pageId: '7c4db8134d634c229a044c69cef8b8c9'
    // }
  ]
})

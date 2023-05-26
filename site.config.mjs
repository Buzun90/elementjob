export const CONFIG = {
  SITE_URL: 'https://elementjob.com',
  SITE_NAME: 'Elementjob',
  SITE_PRIMARY_COLOR: '#E11D48',
  SITE_DESCRIPTION: 'Elementjob Multidiensten: Uw betrouwbare partner voor professionele schoonmaak- en onderhoudsdiensten. Wij bieden een totaaloplossing voor uw utiliteitsbouw.',
  dateFormatter: new Intl.DateTimeFormat('en', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    timeZone: 'UTC',
  }),
  googleAnalyticsId: false, // or "G-XXXXXXXXXX",
  googleSiteVerificationId: undefined,
  news: {
    disabled: false,
    postsPerPage: 3,

    post: {
      permalink: '/%slug%', // Variables: %slug%, %year%, %month%, %day%, %hour%, %minute%, %second%, %category%
      noindex: false,
      disabled: false,
    },

    list: {
      noindex: false,
      disabled: false,
    },

    category: {
      pathname: 'category', // Category main path /category/some-category
      noindex: true,
      disabled: false,
    },

    tag: {
      pathname: 'tag', // Tag main path /tag/some-tag
      noindex: true,
      disabled: false,
    },
  },
  social: {
    facebook: 'https://www.facebook.com',
    instagram: 'https://www.instagram.com/elementjob',
    twitter: 'https://twitter.com/',
    tiktok: 'https://www.tiktok.com',
  }
}
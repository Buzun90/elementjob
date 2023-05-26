# 〄 Industronix

<img src="https://raw.githubusercontent.com/mcstech/.github/main/resources/industronix/lighthouse-score.png" align="right"
     alt="Industronix Lighthouse Score" width="100" height="358">

**Industronix** is a multi author markdown website template that can be used for engineering, industrial, etc company website, with very limited coding knowledge, without installing any resource consuming Content Management System (CMS). This theme allows you to build a full featured and working website in no time, using markdown files for your news posts. Industronix is based on Tailwind CSS framework and it's easy to use flexbox grid. It features a solid set of reusable components that are designed to fit as many purposes as possible. They are also easy to customize and to combine with others.

## Features

- ✅ Integration with **Tailwind CSS** (@astrojs/tailwind) supporting color scheme.
- ✅ **Production-ready** scores in [Lighthouse](https://web.dev/measure/) and [PageSpeed Insights](https://pagespeed.web.dev/) reports.
- ✅ **Fast and SEO friendly blog** with automatic **RSS feed** ([@astrojs/rss](https://docs.astro.build/en/guides/rss/)), [**MDX** support](https://docs.astro.build/en/guides/integrations-guide/mdx/), **Categories & Tags**, **Social Share**, ...
- ✅ **Image optimization** ([@astrojs/images](https://docs.astro.build/en/guides/integrations-guide/image/)) and **Font optimization**.
- ✅ Generation of **project sitemap** based on your routes ([@astrojs/sitemap](https://docs.astro.build/en/guides/integrations-guide/sitemap/)).
- ✅ **Open Graph tags** for social media sharing.
- ✅ **Analytics** built-in Google Analytics, and Splitbee integration.

NOTE: Please note that photos might not included in the main download files. Included images require proper licensing from you to be able to use them in production.

<br>

<img src="https://raw.githubusercontent.com/mcstech/.github/main/resources/industronix/My%20Theme%20Image.png" alt="Industronix Theme Screenshot">

[![MCSTECH](https://custom-icon-badges.demolab.com/badge/made%20by%20-MCSTECH-990000?style=flat-square&logo=mcstech&logoColor=white&labelColor=000000)](https://mcstech.dev)
[![License](https://img.shields.io/github/license/mcstech/industronics?style=flat-square&color=dddddd&labelColor=000000)](https://github.com/mcstech/industronix/blob/main/LICENSE)
[![Maintained](https://img.shields.io/badge/maintained%3F-yes-brightgreen.svg?style=flat-square)](https://github.com/mcstech)
[![Known Vulnerabilities](https://snyk.io/test/github/mcstech/industronics/badge.svg?style=flat-square)](https://snyk.io/test/github/mcstech/industronics)

<br>

<details open>
<summary>Table of Contents</summary>

- [Demo](#demo)
- [Getting started](#getting-started)
  - [Project structure](#project-structure)
  - [Commands](#commands)
  - [Configuration](#configuration)
  - [Deploy](#deploy)
- [Frequently Asked Questions](#frequently-asked-questions)
- [License](#license)

</details>

<br>

## Demo

📌 [https://industronix.mcstech.dev/](https://industronix.mcstech.dev/)

<br>

## Getting started

**Industronix** tries to give you quick access to create a website using [Astro 2.0](https://astro.build/blog/astro-2/) + [Tailwind CSS](https://tailwindcss.com/). It's a industrial theme focuses on simplicity, good practices and high performance.

Very little vanilla javascript is used only to provide basic functionality so that each developer decides which framework (React, Vue, Svelte, Solid JS...) to use and how to approach their goals..

### Project structure

Inside Industronix template, you'll see the following folders and files:

```
/
├── public/
│   ├── robots.txt
│   ├── favicon.ico
│   └── toggle-theme.js
├── src/
│   ├── assets/
│   │   ├── images/
│   │   └── styles/
│   │       └── base.css
│   ├── components/
│   │   ├── blog/
│   │   ├── common/
│   │   ├── widgets/
│   │   │   ├── Header.astro
│   │   │   └── ...
│   │   ├── CustomStyles.astro
│   │   └── Logo.astro
│   ├── content/
│   │   ├── news/
│   │   │   ├── post-slug-1.md
│   │   │   ├── post-slug-2.md
│   │   │   └── ...
│   │   ├── industries/
│   │   │   ├── industry-1.md
│   │   │   ├── industry-2.md
│   │   │   └── ...
│   │   └-- config.ts
│   ├── layouts/
│   │   ├── main.astro
│   │   └── ...
│   ├── pages/
│   │   ├── news/
│   │   │   ├── [category]/
│   │   │   ├── [tag]/
│   │   │   ├── [page].astro
│   │   │   └── index.astro
│   │   ├── index.astro
│   │   ├── 404.astro
│   │   ├-- rss.xml.ts
│   │   └── ...
│   ├── utils/
│   └── data.js
├── package.json
├── astro.config.mjs
├── site.config.mjs
└── ...
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory if they do not require any transformation or in the `assets/` directory if they are imported directly.

<br>

### Commands

All commands are run from the root of the project, from a terminal:

| Command               | Action                                             |
| :-------------------- | :------------------------------------------------- |
| `npm install`         | Installs dependencies                              |
| `npm run dev`         | Starts local dev server at `localhost:3000`        |
| `npm run build`       | Build your production site to `./dist/`            |
| `npm run preview`     | Preview your build locally, before deploying       |
| `npm run format`      | Format codes with Prettier                         |
| `npm run lint:eslint` | Run Eslint                                         |
| `npm run astro ...`   | Run CLI commands like `astro add`, `astro preview` |

<br>

### Configuration

Basic configuration file: `./site.config.mjs`

```javascript
const CONFIG = {
  SITE_URL: 'https://example.com',
  SITE_NAME: 'Example',
  SITE_DESCRIPTION: 'This is the homepage description of Example',
  dateFormatter: new Intl.DateTimeFormat('en', {
    // Date format
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    timeZone: 'UTC',
  }),

  googleAnalyticsId: false, // Or "G-XXXXXXXXXX",
  googleSiteVerificationId: false, // Or some value,

  news: {
    disabled: false,
    postsPerPage: 4,

    post: {
      permalink: '/%slug%', // variables: %slug%, %year%, %month%, %day%, %hour%, %minute%, %second%, %category%
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
};
```

<br>

### Theming capabilities

With Tailwind, you style elements by applying pre-existing classes directly in your HTML. By using utility classes in this way, you can build custom designs without writing CSS. Without a framework like Tailwind, you have to keep writing CSS as you add new features and components. As a result, your CSS files continue to grow and get heavier. By using utilities like Tailwind’s flexbox and padding utilities, most styles are reusable so you rarely need to write new CSS. You can easily copy existing components and start tweaking them up to reach what you need.

##### Color scheme

You can do this in `src/styles/base.css` file. In Industronix theme, :root and html[data-theme="light"] selectors are used as the primary color scheme. If you want to customize your custom color scheme, you have to specify your light color scheme inside `:root,html[data-theme="light"]`.

Colors are declared in CSS custom property (CSS Variable) notation. Color property values are written in rgb values. (Note: instead of rgb(40, 39, 40), only specify 40, 39, 40).

Here is the detail explanation of color properties.

| Color Property       | Definition & Usage                                         |
| -------------------- | ---------------------------------------------------------- |
| `--color-fill`       | Primary color of the website. |

### Deploy

#### Deploy to production (manual)

You can create an optimized production build with:

```shell
npm run build
```

Now, your website is ready to be deployed. All generated files are located at
`dist` folder, which you can deploy the folder to any hosting service you
prefer.

#### Deploy to Netlify

Clone this repository on own GitHub account and deploy to Netlify:

[![Netlify Deploy button](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/mcstech/industronix)

#### Deploy to Vercel

Clone this repository on own GitHub account and deploy to Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fmcstech%2Findustronix)

<br>

## Frequently Asked Questions

- Why?
-
-

<br>

## License

**Industronix** is licensed under the MIT license — see the [LICENSE](./LICENSE.md) file for details.#   e l e m e n t j o b  
 
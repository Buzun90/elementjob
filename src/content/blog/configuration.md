---
title: Configuration
publishDate: 2023-01-02T00:00:00Z
description: INDUSTRONIX have a lot personalisation options. Here you can go through every single one available and set it properly.
---

## Introduction
INDUSTRONIX is a highly customizable Astro blog theme. With INDUSTRONIX, you can customize everything according to your personal taste. This article will explain how you can make some customizations easily in the config file.

## Configuring SITE
The important configurations lies in `site.config.mjs` file. Within that file, you’ll see the SITE object where you can specify your website’s main configurations.

During development, it’s okay to leave `SITE_URL` empty. But in production mode, you should specify your deployed url in `SITE_URL` option since this will be used for canonical URL, social card URL etc... which are important for SEO.

```js
export const CONFIG = {
  locale: 'ms-MY',
  SITE_URL: 'https://INDUSTRONIX.mcstech.dev',
  SITE_OWNER: 'CHEF MUSADIQ',
  SITE_NAME: 'Nasi Ayam Thai',
  SITE_DESCRIPTION: 'Citarasa yang belum pernah anda nikmati. Tiada setanding dengannya',
  SOCIAL: {
    FACEBOOK: 'example',
    INSTAGRAM: 'example',
    TIKTOK: 'example'
  }
}
```

Here are `CONFIG` configuration options

| Options            | Description                                                                                                                                                  |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `locale`           | Your locale setting for date and time |
| `SITE_URL`         | Your deployed website url |
| `SITE_OWNER`       | name of the owner |
| `SITE_NAME`        | Your site name  |
| `SITE_DESCRIPTION` | Your site description. Useful for SEO and social media sharing. |


## Configuring social links
You can configure your own social links along with its icons.

Currently 3 social icons are supported. You can specify in all sections. To do this, go to `site.config.mjs` and then you’ll find SOCIALS array of string

```js
export const CONFIG = {
  ...
  SOCIAL: {
    FACEBOOK: 'example',
    INSTAGRAM: 'example',
    TWITTER: 'example',
    TIKTOK: 'example'
  }
}
```

## Choose primary color scheme
INDUSTRONIX uses system’s prefers-color-scheme. Thus, to choose primary color scheme instead of prefers-color-scheme, we have to set color scheme in the primaryColorScheme variable inside `public/toggle-theme.js`.

```js
/* file: public/toggle-theme.js */
const primaryColorScheme = ""; // "light" | "dark"

// Get theme data from local storage
const currentTheme = localStorage.getItem("theme");

// other codes etc...
```

<details><summary>Why 'primaryColorScheme' is not inside site.config.mjs?</summary>

> To avoid color flickering on page reload, we have to place the toggle-switch JavaScript codes as early as possible when the page loads. It solves the problem of flickering, but as a trade-off, we cannot use ESM imports anymore.

[Click here](https://docs.astro.build/en/reference/directives-reference/#isinline) to know more about Astro's `is:inline` script.

</details>

In INDUSTRONIX theme, `:root` and `html[data-theme="light"]` selectors are used as the light color scheme and `html[data-theme="dark"]` is used the dark color scheme. If you want to customize your custom color scheme, you have to specify your light color scheme inside `:root`, `html[data-theme="light"]` and dark color scheme inside `html[data-theme="dark"]`.

Colors are declared in CSS custom property (CSS Variable) notation. Color property values are written in rgb values. (Note: instead of `rgb(40, 39, 40)`, only specify `40, 39, 40`)

Here is the detail explanation of color properties.

| Color Property       | Definition & Usage                                         |
| -------------------- | ---------------------------------------------------------- |
| `--color-fill`       | Primary color of the website. Usually the main background. |
| `--color-text-base`  | Secondary color of the website. Usually the text color.    |
| `--color-accent`     | Accent color of the website. Link color, hover color etc.  |
| `--color-card`       | Card, scrollbar and code background color (like `this`).   |
| `--color-card-muted` | Card and scrollbar background color for hover state etc.   |
| `--color-border`     | Border color. Especially used in horizontal row (hr)       |

```css
Here is an example of default color scheme.

```css
@layer base {
  /* chicken color scheme */
  :root,
  html[data-theme="light"] {
    --color-fill: 124, 31, 8;
  }
}
```

### Conclusion
This is the brief specification of how you can customize this theme. You can customize more if you know some coding.
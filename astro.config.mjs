import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';
import image from '@astrojs/image';
import partytown from "@astrojs/partytown";
import sitemap from "@astrojs/sitemap";
import { CONFIG } from './site.config.mjs';
import compress from "astro-compress";
import react from "@astrojs/react";
import storyblok from '@storyblok/astro';
import { loadEnv } from 'vite';

const env = loadEnv("", process.cwd(), 'STORYBLOK');

const whenExternalScripts = (items = []) => CONFIG.googleAnalyticsId ? Array.isArray(items) ? items.map(item => item()) : [items()] : [];

export default defineConfig({
  site: CONFIG.SITE_URL,
  markdown: {
    drafts: true
  },
  integrations: [
    mdx({
      drafts: true
    }),
    tailwind({
      config: {
        applyBaseStyles: false
      }
    }),
    image(),
    ...whenExternalScripts(() => partytown({
      config: {
        forward: ['dataLayer.push']
      }
    })),
    sitemap(),
    compress(),
    react(),
    storyblok({
      accessToken: env.STORYBLOK_TOKEN,
      components: {
        // Add your Storyblok components here
        blogPost: 'storyblok/BlogPost',
      },
      apiOptions: {
        region: 'us', // optional, or 'eu' (default)
      },
    })
  ]
});
// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://maydan.it',
  integrations: [react(), sitemap({
    filter: (page) => page !== 'https://maydan.it/',
  })],
  i18n: {
    defaultLocale: "it",
    locales: ["it", "en"],
    routing: {
      prefixDefaultLocale: true
    }
  }
});
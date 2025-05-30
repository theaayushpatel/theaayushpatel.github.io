// @ts-check
import { defineConfig } from 'astro/config';

import expressiveCode from 'astro-expressive-code';

// https://astro.build/config
export default defineConfig({
  site: 'https://theaayushpatel.github.io',
  base: '/',
  output: 'static',
  integrations: [expressiveCode({
    themes: ['catppuccin-mocha'],
  })],
})
import { defineConfig } from 'astro/config';

// https://astro.build/config
import react from "@astrojs/react";

// https://astro.build/config
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  base: process.env.ROOT_PATH,
  site: process.env.BASE_URL,
  integrations: [/*react(), mdx()*/],
});

import tailwind from '@astrojs/tailwind';
import { defineConfig, sharpImageService } from 'astro/config';

export default defineConfig({
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
  ],
  image: {
    service: sharpImageService(),
  },
});

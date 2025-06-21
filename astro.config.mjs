import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import compress from 'astro-compress';

// https://astro.build/config
export default defineConfig({
  // Removed 'experimental.viewTransitions' as it was causing build errors.
  
  integrations: [
    tailwind({
      applyBaseStyles: false // Crucial for Tailwind to work correctly
    }),
    compress(), // Keeps your existing compress integration
  ],
  
  // Explicitly set output to 'static' for stable deployment
  output: 'static',
  
  // No Vercel adapter or sitemap integration, as requested.
  
  vite: {
    resolve: {
      alias: {
        '@components': '/src/components', // Standard alias for cleaner imports
      },
    },
  },
});

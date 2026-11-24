import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel/static';

// GitHub Pages: SITE_URL / BASE_PATH are injected by the deploy workflow.
// Local dev defaults keep `astro dev` working unchanged.
const repo = process.env.GITHUB_REPOSITORY ?? '';
const owner = process.env.GITHUB_REPOSITORY_OWNER ?? '';
const repoName = repo.split('/')[1] ?? '';
const isUserPage = repoName.endsWith('.github.io');

const site = process.env.SITE_URL ?? 'http://localhost:3000';
const base = process.env.BASE_PATH ?? (repoName && !isUserPage ? `/${repoName}` : '/');

// Use Vercel adapter only when deployed on Vercel.
// On GitHub Pages or local builds, keep Astro's default static output to 'dist/'
const isVercel = Boolean(process.env.VERCEL);

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind({
    applyBaseStyles: false,
  })],
  ...(isVercel ? {
    adapter: vercel({
      webAnalytics: { enabled: true },
    }),
  } : {}),
  site,
  base,
  server: {
    host: '0.0.0.0',
    port: 3000
  }
});

import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import tailwind from '@astrojs/tailwind'
import expressiveCode from 'astro-expressive-code'
import icon from 'astro-icon'
import { defineConfig } from 'astro/config'
import rehypeExternalLinks from 'rehype-external-links'
import remarkUnwrapImages from 'remark-unwrap-images'
import { expressiveCodeOptions } from './src/site.config'

import vercel from '@astrojs/vercel/serverless'

// https://astro.build/config
export default defineConfig({
	site: 'https://example.me',
	integrations: [
		expressiveCode(expressiveCodeOptions),
		tailwind({
			applyBaseStyles: false
		}),
		sitemap(),
		mdx(),
		icon()
	],
	markdown: {},
	prefetch: true,
	output: 'server',
	adapter: vercel({
		webAnalytics: { enabled: true }
	})
})

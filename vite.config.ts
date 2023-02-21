import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import istanbul from 'vite-plugin-istanbul';

export default defineConfig({
	build: {
		sourcemap: "hidden",
	},
	plugins: [
		sveltekit(),
		istanbul({
			include: 'src/*',
			exclude: ['node_modules', 'test/'],
			extension: [ '.js', '.ts', '.vue' ],
			requireEnv: false,
		  }),
	],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});

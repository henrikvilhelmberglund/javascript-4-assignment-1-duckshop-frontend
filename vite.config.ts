import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import UnoCSS from '@unocss/svelte-scoped/vite';

export default defineConfig({
	plugins: [
		UnoCSS({
			injectReset: '@unocss/reset/tailwind.css'
		}),
		sveltekit()
	],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}'],
		environment: 'jsdom',
		globals: true,
		setupFiles: 'src/setupTests.ts',
		// shows the output of all tests even if they passed
		reporters: 'verbose'
	}
});

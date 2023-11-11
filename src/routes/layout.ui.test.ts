import { render } from '@testing-library/svelte';
import Layout from './+layout.svelte';
import Page from './+page.svelte';
import { load } from './+layout';

describe('Layout route (UI test)', async () => {
	const data = await load({ fetch });

	const { container } = render(Layout, {
		// not using this but for reference - needs export let data;
		// props: {
		// 	data,
		// },
	});

	it('has a h1 "DuckShop"', async () => {
		const h1 = container.querySelector('h1');
		expect(h1).not.toBeNull();
		expect(h1!.textContent).toBe('DuckShop'); // Replace 'Expected Text' with the text you want to check for
	});
});

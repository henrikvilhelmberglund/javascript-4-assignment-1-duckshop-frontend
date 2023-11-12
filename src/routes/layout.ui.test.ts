import { render } from '@testing-library/svelte';
import Layout from './+layout.svelte';

describe('Layout route (UI test)', async () => {
	const { container } = render(Layout, {
    // not using props but for reference - needs export let data;
    // (see unit test for actual scary code)
		// props: {
		// 	data,
		// },
	});

	it('has a h1 "DuckShop"', async () => {
		const h1 = container.querySelector('h1');
		expect(h1).not.toBeNull();
		expect(h1!.textContent).toBe('DuckShop');
	});
});

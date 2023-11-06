import { render } from '@testing-library/svelte';
import Index from './+page.svelte';
import { load } from './+page';

describe('Index route (UI test)', async () => {
	const data = await load();

	const { container } = render(Index, {
		props: {
			data
		}
	});

	it('has a h1 "DuckShop"', async () => {
		const h1 = container.querySelector('h1');
		expect(h1).not.toBeNull();
		expect(h1!.textContent).toBe('DuckShop'); // Replace 'Expected Text' with the text you want to check for
	});
});

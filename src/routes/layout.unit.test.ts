// import type { LayoutLoadEvent } from './$types';
import type { LayoutData, LayoutLoad, LayoutLoadEvent } from './$types';
import { render } from '@testing-library/svelte';
import { load } from './+layout';
import type { IProduct } from '$lib/interfaces';

describe('Load function', () => {
	it('returns a product array that has a length of at least 11', async () => {
		// ...
    // We must call `load` ourselves because Vitest does not do it for the moment, due to page.server not being able to be called outside of SvelteKit context (https://github.com/sveltejs/kit/issues/1485#issuecomment-920923252)
    
		// before it was this but typescript complained, works exactly the same
		// const data = await load({ fetch });
    // this is probably wrong but honestly no idea how to do this
    
    const data = (await load({
      fetch,
      data: null,
      url: new URL('http://localhost:3000'),
      setHeaders: function (headers: Record<string, string>): void {
        throw new Error('Function not implemented.');
      },
      parent: function (): Promise<{}> {
        throw new Error('Function not implemented.');
      },
      depends: function (...deps: string[]): void {
        throw new Error('Function not implemented.');
      },
      params: {
        id: undefined,
      },
      route: {
        id: null,
      },
    })) as LayoutData;

		const products: IProduct[] = data.products!;
		expect(products.length).toBeGreaterThanOrEqual(11);
	});

	describe('Product array', async () => {
    const data = (await load({
      fetch,
      data: null,
      url: new URL('http://localhost:3000'),
      setHeaders: function (headers: Record<string, string>): void {
        throw new Error('Function not implemented.');
      },
      parent: function (): Promise<{}> {
        throw new Error('Function not implemented.');
      },
      depends: function (...deps: string[]): void {
        throw new Error('Function not implemented.');
      },
      params: {
        id: undefined,
      },
      route: {
        id: null,
      },
    })) as LayoutData;
    
		const products: IProduct[] = data.products!;

		it.each(products)(`$name has id, name, price, image_link, amount_in_stock and description`, async (product: IProduct) => {
			expect(product.id).toBeDefined();
			expect(product.name).toBeDefined();
			expect(product.price).toBeDefined();
			expect(product.description).toBeDefined();
			expect(product.amount_in_stock).toBeDefined();
			expect(product.image_link).toBeDefined();
		});
	});
});

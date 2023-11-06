import type { Product } from '$lib/interfaces/product';

/** @type {import('./$types').PageLoad} */
export async function load(): Promise<{ products: Product[] }> {
	const response = await fetch('http://localhost:3001/api/v1/products');
	const data = await response.json();
	const products: Product[] = data.mockData;
	return {
		products
	};
}

import type { IProduct } from '$lib/interfaces/product';

/** @type {import('./$types').PageLoad} */
export async function load(): Promise<{ products: IProduct[] }> {
	const response = await fetch('http://localhost:3001/api/v1/products');
	const data = await response.json();
	const products: IProduct[] = data.mockData;
	return {
		products
	};
}

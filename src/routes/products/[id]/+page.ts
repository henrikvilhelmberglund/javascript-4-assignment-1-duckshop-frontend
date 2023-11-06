import type { IProduct } from '$lib/interfaces/product';

/** @type {import('./$types').PageLoad} */
export async function load({ params }): Promise<{ product: IProduct }> {
	const response = await fetch(`http://localhost:3001/api/v1/product/${params.id}`);
	const data = await response.json();
	const product: IProduct = data.mockData;
	return {
		product
	};
}

import { FETCH_URL } from '$lib/constants.js';
import type { IProduct } from '$lib/interfaces/product';

/** @type {import('./$types').PageLoad} */
export async function load({ parent, params, fetch }): Promise<{ product: IProduct }> {
  const parentData = await parent();
  const products: IProduct[] = parentData.products;
  
	// const response = await fetch(`http://${FETCH_URL}:3001/api/v1/product/${params.id}`);
	// const data = await response.json();
	// const product: IProduct = data.mockData;
  const product = products.find((product) => product.id === +params.id);
	return {
		product,
	};
}

import { FETCH_URL } from '$lib/constants.js';
import type { IProduct } from '$lib/interfaces';
import { error } from '@sveltejs/kit';

export async function load({ parent, params, fetch }): Promise<{ product: IProduct }> {
	const parentData = await parent();

	// can use ! because layout will error first
	const products: IProduct[] = parentData.products!;

  // I used this fetch to get one item from the API but found it was unnecessary
  // because I can just fetch all products one and then filter from that
  // it works though! http://127.0.0.1:3001/api/v1/product/3
	// const response = await fetch(`http://${FETCH_URL}:3001/api/v1/product/${params.id}`);
	// const data = await response.json();
	// const product: IProduct = data.mockData;
  
	const product = products.find((product) => product.id === +params.id);
	if (!product) {
		throw error(404, {
			message: 'Not found',
			extraInfo: 'The product you entered was not found.',
		});
	}
	return {
		product,
	};
}

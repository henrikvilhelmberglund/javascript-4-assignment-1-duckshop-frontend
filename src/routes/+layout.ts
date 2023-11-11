// it is possible to disable SSR and prerendering to make sure fetches are done only in the browser
export const ssr = false;
export const prerender = true;

import { browser } from '$app/environment';
import { FETCH_URL } from '$lib/constants';
import type { IProduct } from '$lib/interfaces/product';
import { countProducts } from '$lib/utils';

interface productsResponse {
	statusCode: number;
	message: string;
	mockData: IProduct[];
}

/** @type {import('./$types').PageLoad} */
export async function load({ fetch }) {
	const response = await fetch(`http://${FETCH_URL}:3001/api/v1/products`);

	const data: productsResponse = await response.json();
	const products: IProduct[] = data.mockData;
	countProducts();
	return {
		products,
	};
}

// disable SSR and prerendering to make sure fetches are done only in the browser
export const ssr = false;
export const prerender = false;

import { FETCH_URL } from '$lib/constants';
import type { IProduct } from '$lib/interfaces/product';

/** @type {import('./$types').PageLoad} */
export async function load(): Promise<{ products: IProduct[] }> {
	const response = await fetch(`http://${FETCH_URL}:3001/api/v1/products`);
	const data = await response.json();
	const products: IProduct[] = data.mockData;
	return {
		products,
	};
}

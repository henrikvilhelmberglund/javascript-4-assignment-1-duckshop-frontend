// it is possible to disable SSR and prerendering to make sure fetches are done only in the browser
export const ssr = true;
export const prerender = true;

import { browser } from '$app/environment';
import { FETCH_URL } from '$lib/constants';
import type { IProduct, IProductsResponse, MyError } from '$lib/interfaces';
import { countProducts } from '$lib/utils';
import { error, fail } from '@sveltejs/kit';

export async function load({ fetch }): Promise<{ products: IProduct[] } | { e: MyError }> {
	let products: IProduct[] = [];
	let error = false;
	let myError: MyError = { cause: { code: 'No error' } };
	try {
		const response = await fetch(`http://${FETCH_URL}:3001/api/v1/products`);
		const data: IProductsResponse = await response.json();
		products = data.mockData;
		countProducts();
	} catch (e: any) {
		return {
			e,
		};
	}
	return {
		products,
	};
}

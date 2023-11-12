// it is possible to disable SSR and prerendering to make sure fetches are done only in the browser
export const ssr = true;
export const prerender = true;

import { FETCH_URL } from '$lib/constants';
import type { IProduct, IProductsResponse, MyError } from '$lib/interfaces';
import { countProducts } from '$lib/utils';
import type { LayoutLoad } from './$types';

export const load: LayoutLoad = async ({ fetch }): Promise<{ products: IProduct[] } | { e: MyError }> => {
	let products: IProduct[] = [];
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
};

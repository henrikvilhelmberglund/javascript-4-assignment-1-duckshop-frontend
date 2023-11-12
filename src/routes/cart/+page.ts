import { browser } from '$app/environment';
import type { IProduct } from '$lib/interfaces';
import { calculateSum, countProducts } from '$lib/utils.js';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({
	parent,
}): Promise<{
	cart:
		| {}
		| {
				[key: string]: number;
		  };
	totalSum: number;
}> => {
	const parentData = await parent();
	const products: IProduct[] = parentData.products!;

	let cart = countProducts();
	console.log(cart);
	let totalSum = calculateSum(cart, products);
	console.log(totalSum);

	return { cart, totalSum };
};

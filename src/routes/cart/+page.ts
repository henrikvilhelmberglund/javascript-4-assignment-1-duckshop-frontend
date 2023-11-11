import { browser } from '$app/environment';
import type { IProduct } from '$lib/interfaces';
import { countProducts } from '$lib/utils.js';

export async function load({ parent }) {
	function calculateSum() {
		let sum: number = 0;
		if (browser) {
			Object.entries(cart).forEach((cartProduct) => {
				let price = products.find((product) => product.name === cartProduct[0])?.price;
				let amount = cartProduct[1];
				sum += price * amount;
				console.log(sum);
			});
		}
		return sum;
	}

	const parentData = await parent();
	const products: IProduct[] = parentData.products!;

	let cart = countProducts();
	console.log(cart);
	let totalSum = calculateSum();
	console.log(totalSum);

	return { cart, totalSum };
}

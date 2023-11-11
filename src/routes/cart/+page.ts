import { browser } from '$app/environment';
import type { IProduct } from '$lib/interfaces/product.js';
import { countProducts } from '$lib/utils.js';

/** @type {import('./$types').PageLoad} */
export async function load({ parent }) {
	function calculateSum() {
		let sum: number = 0;
		if (browser) {
			Object.entries(cart).forEach((cartProduct) => {
				// TODO fix?
				let price = products.find((product) => product.name === cartProduct[0])?.price!;
				let amount = cartProduct[1];
				sum += price * amount;
				console.log(sum);
			});
			// sessionStorage.setItem('sum', sum);
			// console.log(cart);
			//  let total = Object.values(cart.map())
		}
		return sum;
	}

	const parentData = await parent();
	const products: IProduct[] = parentData.products;

	let cart = countProducts();
	console.log(cart);
	let totalSum = calculateSum();
	console.log(totalSum);

	return { cart, totalSum };
}

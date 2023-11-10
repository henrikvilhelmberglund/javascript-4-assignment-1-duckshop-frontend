import { countProducts } from '$lib/utils.js';

/** @type {import('./$types').PageLoad} */
export async function load({ parent }) {
	const { products } = await parent();

	async function calculateSum() {
		let sum: number = 0;
		Object.entries(cart).forEach((cartProduct) => {
			// TODO fix?
			let price = products.find((product) => product.name === cartProduct[0])?.price!;
			let amount = cartProduct[1];
			sum += price * amount;
			console.log(sum);
		});
		// sessionStorage.setItem('sum', sum);
		return sum;
		// console.log(cart);
		//  let total = Object.values(cart.map())
	}

	let cart = countProducts();
	console.log(cart);
	let totalSum = await calculateSum();
	console.log(totalSum);

	return { cart, totalSum };
}

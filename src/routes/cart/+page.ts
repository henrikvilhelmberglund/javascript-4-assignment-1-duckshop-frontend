/** @type {import('./$types').PageLoad} */
export async function load({ parent }) {
	const { products } = await parent();
	const productsInCart = sessionStorage.getItem('cart');

	function countProducts(): { [key: string]: number } {
		// this fixes productCount[product] because TS knows it's a key of type string and a value of type number
		let productCount: { [key: string]: number } = {};
		if (productsInCart) {
			const products = productsInCart.split(',');

			// Reset the productCount object

			// Count the occurrences of each product
			products.forEach((product) => {
				// skips last ,
				if (product !== '') {
					productCount[product] = (productCount[product] || 0) + 1;
				}
			});
		}
		return productCount;
	}

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

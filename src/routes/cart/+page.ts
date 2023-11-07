/** @type {import('./$types').PageLoad} */
export async function load() {
	const productsInCart = sessionStorage.getItem('cart');

	function countProducts(): { [key: string]: number } {
		// this fixes productCount[product] because TS knows it's a key of type string and a value of type number
		let productCount: { [key: string]: number } = {};
		if (productsInCart) {
			const products = productsInCart.split(',');

			// Reset the productCount object

			// Count the occurrences of each product
			products.forEach((product) => {
				productCount[product] = (productCount[product] || 0) + 1;
			});
		}
		return productCount;
	}

	let cart = countProducts();

	return { cart };
}

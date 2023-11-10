import { get } from 'svelte/store';
import { totalProducts } from './stores';

export function countProducts(): { [key: string]: number } {
	const productsInCart = sessionStorage.getItem('cart');
	// this fixes productCount[product] because TS knows it's a key of type string and a value of type number
	let productCount: { [key: string]: number } = {};
	if (productsInCart) {
		const products = productsInCart.split(',');
		totalProducts.set(products.length - 1);

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

export function countOccurrences(mainString: string, substring: string): number {
	let count = 0;
	let index = mainString.indexOf(substring);

	while (index !== -1) {
		count++;
		index = mainString.indexOf(substring, index + 1);
	}

	return count;
}

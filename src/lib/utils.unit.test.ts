import type { IProduct } from '$lib/interfaces';
import { vi } from 'vitest';
import { countOccurrences, countProducts } from './utils';

describe('countProducts unit test', () => {
	afterEach(() => {
		sessionStorage.clear();
	});

	vi.mock('$app/environment', () => ({
		browser: true,
		dev: true,
		prerender: false,
	}));

	it('returns an object with a Creepy Dog Statue key with value 2 and a Duck Painting key with value 1', async () => {
		sessionStorage.setItem('cart', 'Creepy Dog Statue, Duck Painting, Creepy Dog Statue');

		let amountOfProducts = countProducts();

		expect(amountOfProducts).toStrictEqual({
			'Creepy Dog Statue': 2,
			'Duck Painting': 1,
		});
	});

	it('returns an object with a Creepy Dog Statue key with value 3 and a Duck Painting key with value 1', async () => {
		sessionStorage.setItem('cart', 'Creepy Dog Statue, Duck Painting, Creepy Dog Statue, Creepy Dog Statue');

		let amountOfProducts = countProducts();

		expect(amountOfProducts).toStrictEqual({
			'Creepy Dog Statue': 3,
			'Duck Painting': 1,
		});
	});

	it('returns an empty object when cart is empty', async () => {
		sessionStorage.setItem('cart', '');

		let amountOfProducts = countProducts();

		expect(amountOfProducts).toStrictEqual({});
	});
});

describe('countOccurrences unit test', () => {
	it('returns 2 when there are two Duck Paintings in the cart and substring is Duck Painting', async () => {
		let occurrences = countOccurrences('Duck Painting, Creepy Dog Statue, Duck Painting', 'Duck Painting');
		expect(occurrences).toBe(2);
	});

	it('returns 0 when the substring is missing from the main string', async () => {
		let occurrences = countOccurrences('Duck Painting, Creepy Dog Statue, Duck Painting', 'Frog');
		expect(occurrences).toBe(0);
	});
});

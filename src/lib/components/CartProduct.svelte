<script lang="ts">
	import type { IProduct } from '$lib/interfaces';
	import { totalProducts } from '$lib/stores';
	import { createEventDispatcher } from 'svelte';

	export let currentProduct: IProduct;
	const { id, name, price, amount_in_stock, image_link } = currentProduct;
	export let amount: number;

	const dispatch = createEventDispatcher();

	function addAmount() {
		const currentCart = sessionStorage.getItem('cart');
		sessionStorage.setItem('cart', `${currentCart}${name},`);
		dispatch('addToSum', { change: price });
		$totalProducts += 1;
		amount += 1;
	}

	function subtractAmount() {
		const currentCart = sessionStorage.getItem('cart');
		if (currentCart) {
			// TODO a bit stupid but I don't have a , after the last product
			if (currentCart.split(',').findIndex((product) => product === name) === currentCart.split(',').length - 1) {
				sessionStorage.setItem('cart', `${currentCart.replace(`,${name}`, '')}`);
			} else {
				sessionStorage.setItem('cart', `${currentCart.replace(`${name},`, '')}`);
			}
			dispatch('subtractFromSum', { change: price });
			$totalProducts -= 1;
			amount -= 1;
		}
	}

	function clearProduct() {
		const currentCart = sessionStorage.getItem('cart');
		if (currentCart) {
			if (currentCart.split(',').findIndex((product) => product === name) === currentCart.split(',').length - 1) {
				sessionStorage.setItem('cart', `${currentCart.replaceAll(`,${name}`, '')}`);
			} else {
				sessionStorage.setItem('cart', `${currentCart.replaceAll(`${name},`, '')}`);
			}
			dispatch('subtractFromSum', { change: price * amount });
			$totalProducts -= amount;
			amount = 0;
		}
	}
</script>

{#if amount !== 0}
	<article class="relative flex h-min items-center justify-between gap-2 p-2 text-center md:w-[600px] md:p-4">
		<div class="flex flex-col md:w-64">
			<h3 class="absolute text-left text-xl md:relative md:text-2xl">{name}</h3>
			<a class="inline-block w-32" href={`/products/${id}`}>
				<img class="mt-8 h-32 w-32 rounded-md object-cover md:mt-0" src={image_link} alt={name} />
			</a>
		</div>
		<div class="min-w-24 rounded bg-blue-200 p-1 md:p-2">
			<p class="">{price} SEK</p>
		</div>
		<button on:click={() => clearProduct()} class="border-1 h-8 w-12 rounded border-black bg-slate-200 md:w-12">Clear</button>
		<div class="flex flex-col gap-2 pl-4 md:flex-row">
			<button
				on:click={() => {
					if (amount < amount_in_stock) {
						addAmount();
					}
				}}
				class:!bg-red-300={amount >= amount_in_stock}
				class="border-1 peer h-8 w-8 rounded border-black bg-slate-200 md:w-6">+</button>
			<div
				class:peer-hover-block={amount >= amount_in_stock}
				class="border-1 absolute mt-10 hidden w-40 -translate-x-32 border-red-500 bg-white text-black text-red-500 md:-translate-x-16">
				<p class="text-center">There are only {amount_in_stock} in stock.</p>
			</div>
			<p id="{name.split(' ').join('-')}-amount" class="font-mono text-2xl">{amount}</p>
			<button on:click={() => subtractAmount()} class="border-1 h-8 w-8 rounded border-black bg-slate-200 md:w-6">-</button>
		</div>
	</article>
	<hr class="border-slate-700" />
{/if}

<style>
</style>

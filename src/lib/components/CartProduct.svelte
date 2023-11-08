<script lang="ts">
	import { goto, invalidate } from '$app/navigation';
	import type { IProduct } from '$lib/interfaces/product';
	import { createEventDispatcher } from 'svelte';

	export let currentProduct: IProduct;
	const { id, name, price, description, amount_in_stock, image_link } = currentProduct;
	export let amount: number;

	const dispatch = createEventDispatcher();

	function addAmount() {
		const currentCart = sessionStorage.getItem('cart');
		sessionStorage.setItem('cart', `${currentCart}${name},`);
		dispatch('addToSum', { change: price });
		amount += 1;
	}

	function subtractAmount() {
		const currentCart = sessionStorage.getItem('cart');
		if (currentCart) {
			// TODO a bit stupid but I don't have a , after the last product
			if (
				currentCart.split(',').findIndex((product) => product === name) ===
				currentCart.split(',').length - 1
			) {
				sessionStorage.setItem('cart', `${currentCart.replace(`,${name}`, '')}`);
			} else {
				sessionStorage.setItem('cart', `${currentCart.replace(`${name},`, '')}`);
			}
			dispatch('subtractFromSum', { change: price });
		}
		amount -= 1;
	}
</script>

{#if amount !== 0}
	<article class="relative flex h-min w-[600px] items-center justify-between p-4 text-center">
		<div class="flex w-64 flex-col">
			<h3 class="text-left text-2xl">{name}</h3>
			<a class="inline-block" href={`/products/${id}`}>
				<img class="h-32 w-32 object-cover" src={image_link} alt={name} />
			</a>
		</div>
		<div class="border-1 rounded border-black bg-slate-200 p-2">
			<p class="">{price} SEK</p>
		</div>
		<div class="flex gap-2">
			<button on:click={() => subtractAmount()} class="h-8 w-6 bg-slate-200">-</button>
			<p class="text-2xl">{amount}</p>
			<button on:click={() => addAmount()} class="h-8 w-6 bg-slate-200">+</button>
		</div>
	</article>
  <hr class="border-slate-700" />
{/if}

<style>
</style>

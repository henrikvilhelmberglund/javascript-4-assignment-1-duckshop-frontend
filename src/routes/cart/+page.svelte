<script lang="ts">
	import { browser } from '$app/environment';
	import CartProduct from '$lib/components/CartProduct.svelte';
	import type { IProduct } from '$lib/interfaces.js';
	import { totalProducts } from '$lib/stores.js';

	export let data;

	// Svelte reactive declaration
	$: cart = data.cart as
		| {}
		| {
				[key: string]: number;
		  };
	$: totalSum = data.totalSum as number;

	const products: IProduct[] = data.products!;
	// TODO add tests for load function
</script>

<svelte:head>
	<title>DuckShop - Cart ({$totalProducts} items)</title>
</svelte:head>

<main class="flex flex-col items-center">
	{#if Object.keys(cart).length && totalSum > 1}
		<div class="flex w-[80vw] justify-between px-4 md:w-[600px]">
			<p class="w-24 md:w-64">Name</p>
			<p>Price</p>
			<p>Amount</p>
		</div>
		<div class="rounded-xl bg-slate-100">
			{#each Object.entries(cart) as [productName, amount]}
				{@const currentProduct = products.find((product) => product.name === productName)}
				{#if currentProduct}
					<CartProduct
						on:addToSum={(e) => {
							totalSum += e.detail.change;
						}}
						on:subtractFromSum={(e) => {
							totalSum -= e.detail.change;
						}}
						{currentProduct}
						{amount} />
				{/if}
			{/each}
			<div class="flex justify-end p-4">
				<p class="font-bold">
					Total: {totalSum.toFixed(2)} SEK
				</p>
			</div>
		</div>
	{:else if !browser}
		<h2 class="text-3xl">Loading your cart...</h2>
	{:else}
		<h2 class="text-3xl">Your cart is empty.</h2>
	{/if}
</main>

<style>
</style>

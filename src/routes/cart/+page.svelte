<script lang="ts">
	import CartProduct from '$lib/components/CartProduct.svelte';

	export let data;

	$: cart = data.cart;

	$: totalSum = data.totalSum;

	// TODO add tests for load function
</script>

<main class="flex flex-col items-center">
	{#if Object.keys(cart).length && totalSum > 1}
		<div class="flex w-[80vw] md:w-[600px] justify-between px-4">
			<p class="w-24 md:w-64">Name</p>
			<p>Price</p>
			<p>Amount</p>
		</div>
		<div class="rounded-xl  bg-slate-100">
			{#each Object.entries(cart) as [productName, amount]}
				{@const currentProduct = data.products.find((product) => product.name === productName)}
				{@const totalProducts = Object.keys(data.cart).length}
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
	{:else}
		<h2 class="text-3xl">Your cart is empty.</h2>
	{/if}
</main>

<style>
</style>

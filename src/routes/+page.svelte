<script lang="ts">
	import Product from '$lib/components/Product.svelte';
	import type { IProduct } from '$lib/interfaces/product.js';

	// this is the load function from +layout.ts
	export let data;
	const products: IProduct[] = data.products;
</script>

<section class="flex justify-center">
	<h2 class="mt-6 p-1 text-lg md:text-3xl">
		Welcome to DuckShop, your goto shop for duck related (and non duck related) products!
	</h2>
</section>

<main class="mt-12 flex flex-col items-center">
	<div class="flex w-[80vw] flex-wrap gap-24">
		{#each products as product}
			<Product {product} />
		{/each}
	</div>
</main>

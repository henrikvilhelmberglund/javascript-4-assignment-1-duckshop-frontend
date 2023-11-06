<script lang="ts">
	import Product from '$lib/components/Product.svelte';
	import type { IProduct } from '$lib/interfaces/product.js';

	export let data;
	const products: IProduct[] = data.products;
</script>

<header class="flex items-center py-4 justify-center bg-slate-800">
	<h1 class="text-5xl pb-1 font-agbalumo text-white">DuckShop</h1>
</header>

<section class="flex justify-center">
	<h2 class="text-3xl">
		Welcome to DuckShop, your goto shop for duck related (and non duck related) products!
	</h2>
</section>

<main class="flex flex-col items-center mt-24">
	<div class="flex w-[80vw] flex-wrap gap-24">
		{#each products as product}
			<Product {product}/>
		{/each}
	</div>
</main>

<footer class="mt-24" />

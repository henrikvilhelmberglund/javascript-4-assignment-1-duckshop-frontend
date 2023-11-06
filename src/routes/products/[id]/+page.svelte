<script lang="ts">
	import Product from '$lib/components/Product.svelte';
	import type { IProduct } from '$lib/interfaces/product.js';

	export let data;
	const product: IProduct = data.product;
</script>

<header class="flex items-center py-4 justify-center bg-slate-800">
	<h1 class="text-5xl pb-1 font-agbalumo text-white">DuckShop</h1>
</header>

<main class="flex flex-col items-center mt-24">
	<Product {product} detailPage={true} />
</main>

<footer class="mt-24" />

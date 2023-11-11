<script lang="ts">
	import Product from '$lib/components/Product.svelte';
	import type { IProduct } from '$lib/interfaces/product.js';

	export let data;
	const product: IProduct = data.product;
</script>

<svelte:head>
	<title>DuckShop - {product.name} details </title>
</svelte:head>

<main class="mt-8 flex flex-col items-center">
	<Product {product} detailPage={true} />
</main>

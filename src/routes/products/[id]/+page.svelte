<script lang="ts">
	import Product from '$lib/components/Product.svelte';
	import type { IProduct } from '$lib/interfaces/product.js';

	export let data;
	const product: IProduct = data.product;
</script>

<main class="flex flex-col items-center mt-24">
	<Product {product} detailPage={true} />
</main>

<footer class="mt-24" />

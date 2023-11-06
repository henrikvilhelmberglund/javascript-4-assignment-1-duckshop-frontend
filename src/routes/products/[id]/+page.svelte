<script lang="ts">
	import Product from '$lib/components/Product.svelte';
	import type { IProduct } from '$lib/interfaces/product.js';

	export let data;
	const product: IProduct = data.product;
</script>

<main class="mt-24 flex flex-col items-center">
	<Product {product} detailPage={true} />
</main>

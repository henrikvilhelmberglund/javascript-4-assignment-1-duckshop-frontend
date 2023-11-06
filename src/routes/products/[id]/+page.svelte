<script lang="ts">
	import Product from '$lib/components/Product.svelte';
	import type { IProduct } from '$lib/interfaces/product.js';

	export let data;
	const product: IProduct = data.product;
</script>

<main class="flex mt-8 flex-col items-center">
	<Product {product} detailPage={true} />
</main>

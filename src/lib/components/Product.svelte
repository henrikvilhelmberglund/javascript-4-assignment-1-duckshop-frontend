<script lang="ts">
	import type { IProduct } from '$lib/interfaces';
	import ProductDetailLeft from './ProductDetailLeft.svelte';
	import ProductDetailRight from './ProductDetailRight.svelte';

	export let product: IProduct;
	export let detailPage = false;
	const { id, name, price, description, amount_in_stock, image_link } = product;
</script>

{#if !detailPage}
	<!-- if not detail page (/product/:id) wrap article with a link -->
	<a class="group" href={`/products/${id}`}>
		<article
			class="group-hover:scale-101 relative flex h-min w-[300px] flex-col rounded-3xl bg-slate-100 text-center shadow-blue-950/20 transition-all group-hover:bg-slate-50 group-hover:shadow-xl">
			<header>
				<img height="512" width="512" class="rounded-3xl rounded-b-none" src={image_link} alt={name} />
			</header>
			<footer class="p-4">
				<h3 class="text-2xl">{name}</h3>
				<div class="border-1 absolute bottom-16 right-0 rounded border-black bg-slate-100 p-2">
					<p class="">{price} SEK</p>
				</div>
			</footer>
		</article>
	</a>
{:else}
	<main class="flex flex-col items-center md:flex-row">
		<ProductDetailLeft {name} {image_link} />
		<ProductDetailRight {name} {description} {price} {amount_in_stock} />
	</main>
{/if}

<style>
</style>

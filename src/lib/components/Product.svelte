<script lang="ts">
	import type { IProduct } from '$lib/interfaces/product';

	export let product: IProduct;
	export let detailPage = false;
	const { id, name, price, description, amount_in_stock, image_link } = product;
</script>

{#if !detailPage}
	<!-- if not detail page (/product/:id) wrap article with a link -->
	<a href={`/products/${id}`}>
		<article class="relative flex h-min w-[300px] flex-col rounded-3xl bg-slate-200 text-center">
			<img class="rounded-3xl rounded-b-none" src={image_link} alt={name} />
			<h3 class="text-2xl">{name}</h3>
			<div class="border-1 absolute bottom-8 right-0 rounded border-black bg-slate-200 p-4">
				<p class="">{price} SEK</p>
			</div>
		</article>
	</a>
{:else}
	<a class="mb-12 rounded-md bg-slate-200 p-4" href="/">Go back to all products</a>
	<main class="flex">
		<article class="relative flex h-min w-[512px] flex-col rounded-3xl bg-slate-200 text-center">
			<img class="rounded-3xl rounded-b-none" src={image_link} alt={name} />
			<h3 class="text-2xl">{name}</h3>
			<div class="border-1 absolute bottom-8 right-0 rounded border-black bg-slate-200 p-4">
				<p class="">{price} SEK</p>
			</div>
		</article>
		<section class="flex w-96 flex-col justify-between pl-6">
			<p class="text-xl italic">
				{description}
			</p>
			<!-- TODO implement cart -->
			<button class="mb-8 self-start rounded-md bg-green-400 p-4">Add to cart</button>
		</section>
	</main>
{/if}

<style>
</style>

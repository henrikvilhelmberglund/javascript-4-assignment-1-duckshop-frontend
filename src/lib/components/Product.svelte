<script lang="ts">
	import type { IProduct } from '$lib/interfaces/product';

	export let product: IProduct;
	export let detailPage = false;
	const { id, name, price, description, amount_in_stock, image_link } = product;
</script>

{#if !detailPage}
	<!-- if not detail page (/product/:id) wrap article with a link -->
	<a href={`/products/${id}`}>
		<article class="flex relative text-center flex-col h-min w-[300px] rounded-3xl bg-slate-200">
			<img class="rounded-3xl rounded-b-none" src={image_link} alt={name} />
			<h3 class="text-2xl">{name}</h3>
			<div class="absolute bg-slate-200 border-black border-1 rounded p-4 bottom-8 right-0">
				<p class="">{price} SEK</p>
			</div>
		</article>
	</a>
{:else}
	<a class="mb-12 bg-slate-200 p-4 rounded-md" href="/">Go back to all products</a>
	<main class="flex">
		<article class="flex relative text-center flex-col h-min w-[512px] rounded-3xl bg-slate-200">
			<img class="rounded-3xl rounded-b-none" src={image_link} alt={name} />
			<h3 class="text-2xl">{name}</h3>
			<div class="absolute bg-slate-200 border-black border-1 rounded p-4 bottom-8 right-0">
				<p class="">{price} SEK</p>
			</div>
		</article>
		<section class="pl-6 w-96 flex-col justify-between flex">
			<p class="italic text-xl">
				{description}
			</p>
			<!-- TODO implement cart -->
			<button class="self-start p-4 bg-green-400 rounded-md mb-8">Add to cart</button>
		</section>
	</main>
{/if}

<style>
</style>

<script lang="ts">
	import type { Product } from '$lib/interfaces/product.js';

	export let data;
	const product: Product = data.product;
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
		{#each product as { id, name, price, description, amount_in_stock, image_link }}
			<a href={`/products/${id}`}>
				<article
					class="flex relative text-center flex-col h-min w-[300px] rounded-3xl bg-slate-200"
				>
					<img class="rounded-3xl rounded-b-none" src={image_link} alt={name} />
					<h3 class="text-2xl">{name}</h3>
					<div class="absolute bg-slate-200 border-black border-1 rounded p-4 bottom-8 right-0">
						<p class="">{price} SEK</p>
					</div>
				</article>
			</a>
		{/each}
	</div>
</main>

<footer class="mt-24" />

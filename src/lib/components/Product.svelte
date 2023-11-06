<script lang="ts">
	import type { Product } from '$lib/interfaces/product';

	export let product: Product;
  export let detailPage = false;
	const { id, name, price, description, amount_in_stock, image_link } = product;
</script>

<article class="flex relative text-center flex-col h-min w-[300px] rounded-3xl bg-slate-200">
	<img class="rounded-3xl rounded-b-none" src={image_link} alt={name} />
	<h3 class="text-2xl">{name}</h3>
	<div class="absolute bg-slate-200 border-black border-1 rounded p-4 bottom-8 right-0">
		<p class="">{price} SEK</p>
	</div>
</article>

<style>
</style>

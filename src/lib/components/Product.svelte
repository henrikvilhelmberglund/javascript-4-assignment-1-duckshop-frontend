<script lang="ts">
	import type { IProduct } from '$lib/interfaces/product';

	export let product: IProduct;
	export let detailPage = false;
	const { id, name, price, description, amount_in_stock, image_link } = product;

	function addToCart(name: string) {
		let existingItems = sessionStorage.getItem('cart');

		if (existingItems) {
			sessionStorage.setItem('cart', `${existingItems},${name}`);
		} else {
			sessionStorage.setItem('cart', `${name}`);
		}
	}
</script>

{#if !detailPage}
	<!-- if not detail page (/product/:id) wrap article with a link -->
	<a class="group" href={`/products/${id}`}>
		<article
			class="group-hover:scale-101 relative flex h-min w-[300px] flex-col rounded-3xl bg-slate-200 text-center shadow-blue-950/20 transition-all group-hover:bg-slate-100 group-hover:shadow-xl">
			<header>
				<img class="rounded-3xl rounded-b-none" src={image_link} alt={name} />
			</header>
			<footer class="p-4">
				<h3 class="text-2xl">{name}</h3>
				<div class="border-1 absolute bottom-16 right-0 rounded border-black bg-slate-200 p-2">
					<p class="">{price} SEK</p>
				</div>
			</footer>
		</article>
	</a>
{:else}
	<main class="flex">
		<article class="relative flex h-min w-[512px] flex-col rounded-3xl bg-slate-200 text-center">
			<header>
				<img class="rounded-3xl rounded-b-none" src={image_link} alt={name} />
			</header>
			<footer class="p-4">
				<h3 class="text-2xl">{name}</h3>
				<div class="border-1 absolute bottom-16 right-0 rounded border-black bg-slate-200 p-2">
					<p class="">{price} SEK</p>
				</div>
			</footer>
		</article>
		<section class="flex w-[28vw] flex-col pl-6">
			<header>
				<p class="text-xl italic">
					{description}
				</p>
			</header>
			<hr class="my-4" />
			<footer class="flex flex-col gap-6">
				<p class="text-lg">{amount_in_stock} left in stock.</p>
				<!-- TODO implement cart -->
				<div class="flex h-12 items-center gap-2 text-center">
					<button
						on:click={() => addToCart(name)}
						class="rounded-md bg-green-400 px-4 py-2 shadow-green-400 transition-all hover:bg-green-300 hover:shadow-lg">
						Add to cart</button>
					<a
						class="rounded-md bg-slate-200 px-4 py-2 shadow-slate-300 transition-all hover:bg-slate-100 hover:shadow-xl"
						href="/cart">
						View cart (TODO)
					</a>
					<a
						class="rounded-md bg-slate-200 px-4 py-2 shadow-slate-300 transition-all hover:bg-slate-100 hover:shadow-xl"
						href="/">
						Go back to all products
					</a>
				</div>
			</footer>
		</section>
	</main>
{/if}

<style>
</style>

<script lang="ts">
	import { browser } from '$app/environment';
	import { invalidate } from '$app/navigation';
	import { message, totalProducts } from '$lib/stores';
	import { countOccurrences } from '$lib/utils';
	import DisplayMessage from './DisplayMessage.svelte';

	export let description: string;
	export let amount_in_stock: number;
	export let name: string;
	export let price: number;

	function handleAddCart() {
		if (amountOfThisProduct < amount_in_stock) {
			addToCart(name);
			// invalidate means we invalidate /cart loader data after clicking the button so it reruns and we get the current data
			invalidate('/cart');
			amountOfThisProduct = getAmountInCart();
		}
	}

	function getAmountInCart(): number {
		if (browser) {
			let existingItems = sessionStorage.getItem('cart');
			if (existingItems) {
				const amountInCart = countOccurrences(existingItems, name);
				console.log(amountInCart);
				return amountInCart;
			}
		}
		return 0;
	}

	async function addToCart(name: string) {
		let existingItems = sessionStorage.getItem('cart');

		if (existingItems) {
			sessionStorage.setItem('cart', `${existingItems}${name},`);
		} else {
			sessionStorage.setItem('cart', `${name},`);
		}
		if ($message) {
			$message = '';
			setTimeout(() => {
				$message = `Added ${name} to cart!`;
			}, 10);
		} else {
			$message = `Added ${name} to cart!`;
		}
		$totalProducts += 1;
	}

	let amountOfThisProduct: number = getAmountInCart();
</script>

<section class="flex flex-col pl-6 md:w-[28vw]">
	<header class="flex flex-col items-center gap-2 md:items-start md:gap-8">
		<h3 class="text-3xl md:text-4xl">{name}</h3>
		<!-- needed to add min-w-24 for the mobile version to not look strange, very weird -->
		<footer class="border-1 min-w-24 rounded bg-slate-100 p-1 text-center md:p-2">
			<p class="">{price} SEK</p>
		</footer>
		<p class="text-xl italic">
			{description}
		</p>
	</header>
	<hr class="my-1 md:my-4" />
	<footer class="flex flex-col gap-6">
		<p class="text-lg">{amount_in_stock} left in stock.</p>
		<div class="relative flex h-12 items-center gap-2 text-center">
			<!-- message is a store (small global state), $message subscribes and gets the value -->
			{#if $message}
				<DisplayMessage />
			{/if}
			<button
				on:click={handleAddCart}
				class:bg-red-400={amountOfThisProduct >= amount_in_stock}
				class:hover-!bg-red-300={amountOfThisProduct >= amount_in_stock}
				class:!shadow-none={amountOfThisProduct >= amount_in_stock}
				class="border-1 rounded-md border-black bg-green-400 px-4 py-2 shadow-green-400 transition-all hover:bg-green-300 hover:shadow-lg">
				Add to cart</button>
			<a class="border-1 rounded-md border-black bg-slate-200 px-4 py-2 shadow-slate-300 transition-all hover:bg-slate-100 hover:shadow-xl" href="/cart">
				View cart
			</a>
			<a class="border-1 rounded-md border-black bg-slate-200 px-4 py-2 shadow-slate-300 transition-all hover:bg-slate-100 hover:shadow-xl" href="/">
				Go back to all products
			</a>
		</div>
	</footer>
</section>

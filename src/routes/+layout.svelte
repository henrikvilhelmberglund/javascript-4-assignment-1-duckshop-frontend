<script lang="ts">
	import { onNavigate } from '$app/navigation';
	import { totalProducts } from '$lib/stores';

	onNavigate((navigation) => {
		if (!document.startViewTransition) return;

		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});

	export let data;
</script>

<header class="relative top-0 h-20 w-screen items-center justify-center bg-slate-800 py-4">
	<a href="/">
		<h1 class="font-agbalumo absolute pb-2 pl-3 text-4xl text-white md:left-[50%] md:-translate-x-[50%] md:pb-1 md:text-5xl">DuckShop</h1>
	</a>
	<div class="flex justify-end gap-12 pr-12 text-xl text-slate-700">
		<a class="rounded bg-slate-50 p-2" href="/cart">View Cart</a>
		{#if $totalProducts > 0}
			<p class="border-1 absolute right-10 top-12 h-6 w-6 rounded-full border-black bg-blue-200 text-center text-sm leading-6">
				{$totalProducts}
			</p>
		{/if}
	</div>
</header>

<slot />

<footer class="mt-14 h-40 w-full dark:bg-black" />

<style></style>

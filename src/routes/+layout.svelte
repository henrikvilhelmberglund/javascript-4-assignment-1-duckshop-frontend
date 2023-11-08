<script lang="ts">
	import { onNavigate } from '$app/navigation';

	onNavigate((navigation) => {
		if (!document.startViewTransition) return;

		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});
</script>

<!-- TODO fix ugly horizontal scrollbar  -->
<header class="relative top-0 h-20 w-screen items-center justify-center bg-slate-800 py-4">
	<a href="/">
		<h1 class="font-agbalumo absolute md:left-[50%] md:-translate-x-[50%] pb-2 md:pb-1 pl-3 text-4xl md:text-5xl text-white">
			DuckShop
		</h1>
	</a>
	<div class="flex justify-end gap-12 pr-12 text-xl text-slate-700">
		<a class="bg-slate-50 p-2 rounded" href="/cart">View Cart</a>
	</div>
</header>

<slot />

<footer class="mt-14" />

<style></style>

<script>
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

<header class="relative top-0 h-20 w-screen items-center justify-center bg-slate-800 py-4">
	<h1 class="font-agbalumo absolute left-[50%] -translate-x-[50%] pb-1 text-5xl text-white">
		DuckShop
	</h1>
</header>

<slot />

<footer class="mt-14" />

<style></style>

<script lang="ts">
	export let image_link: string;
	export let name: string;
	export let price: number;
</script>

<article class="relative flex h-min w-[70vw] flex-col rounded-3xl bg-slate-100 text-center md:w-[512px]">
	<header>
		<img height="512" width="512" class="rounded-3xl" src={image_link} alt={name} />
	</header>
		<footer class="border-1 absolute bottom-16 right-0 rounded border-black bg-slate-100 p-2">
			<p class="">{price} SEK</p>
		</footer>
</article>

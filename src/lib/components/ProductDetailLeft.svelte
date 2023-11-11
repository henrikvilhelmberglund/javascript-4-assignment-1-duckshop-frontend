<script lang="ts">
	export let image_link: string;
	export let name: string;
</script>

<article class="relative flex h-min w-[70vw] flex-col rounded-3xl bg-slate-100 text-center md:w-[512px]">
	<div>
		<img height="512" width="512" class="rounded-3xl" src={image_link} alt={name} />
	</div>
</article>

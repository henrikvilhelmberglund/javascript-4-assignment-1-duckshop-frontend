<script lang="ts">
	import { message } from '$lib/store';
	import { onDestroy, onMount } from 'svelte';

	let timeout: number;

	onMount(() => {
		timeout = window.setTimeout(() => {
			$message = '';
		}, 1000);
	});

	onDestroy(() => {
		window.clearTimeout(timeout);
		$message = '';
	});
</script>

<div
	class="animate-delay-0.5s keyframes-fade-out absolute -left-20 bottom-20 animate-[fade-out_0.6s_ease-out_1] rounded bg-green-400 p-4">
	<p class="text-xl">
		{$message}
	</p>
</div>

<style>
</style>

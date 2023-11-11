<script lang="ts">
	import { page } from '$app/stores';
</script>

<!-- server offline will give 500 on client -->

<h1 class="text-4xl">{$page?.status} ({$page?.error?.message})</h1>
{#if $page?.error?.extraInfo}
	<h2>{$page.error.extraInfo}</h2>
{/if}
<img src={`https://httpducks.com/${$page.status}.jpg`} alt="" />

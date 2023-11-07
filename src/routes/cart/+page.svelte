<script lang="ts">
	export let data;

  // TODO render nice cart thingy for each item with button to add and remove from cart which increases/decreases amount by 1, if amount is 0 remove it completely
  // TODO add tests for load function
</script>

{#if data.cart}
	{#each Object.entries(data.cart) as [product, amount]}
		<li>
			{product}: {amount}
		</li>
	{/each}
{/if}

<style>
</style>

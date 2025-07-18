<script lang="ts">
	import type { Technology } from "$lib/data/technologies";
	import Tooltip from "./Tooltip.svelte";

	type Props = {
		technology: Technology;
		size?: number;
	};

	let { technology, size = 24 }: Props = $props();
</script>

<Tooltip text={technology.label}>
	{#if technology.img}
		<img src={technology.img} width={size} alt={technology.img} />
	{:else}
		<technology.icon {size} />
	{/if}
</Tooltip>

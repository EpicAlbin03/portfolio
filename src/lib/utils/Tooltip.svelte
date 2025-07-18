<script lang="ts">
	import * as Tooltip from "$lib/components/ui/tooltip/index.js";
	import toolTipConfig from "$lib/data/tooltip-config";
	import type { Snippet } from "svelte";

	type Props = {
		children: Snippet;
		text: string;
	};

	let { children, text }: Props = $props();
</script>

<Tooltip.Provider>
	<Tooltip.Root delayDuration={toolTipConfig.delayDuration}>
		<Tooltip.Trigger aria-label={text}>
			{@render children()}
		</Tooltip.Trigger>
		<Tooltip.Content side="bottom">
			<p>{text}</p>
		</Tooltip.Content>
	</Tooltip.Root>
</Tooltip.Provider>

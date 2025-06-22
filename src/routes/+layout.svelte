<script lang="ts">
	import "../app.css";
	import { ModeWatcher } from "mode-watcher";
	let { children } = $props();
</script>

<ModeWatcher />
<div class="bg-secondary">
	<div
		class="bg-background mx-auto flex max-w-4xl flex-col items-center px-4 sm:px-6 lg:px-8 xl:px-16"
	>
		{@render children?.()}
	</div>
</div>

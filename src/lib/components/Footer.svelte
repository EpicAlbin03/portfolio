<script lang="ts">
	import Button from "./ui/button/button.svelte";
	import contactLinks from "$lib/data/contact";
	import Tooltip from "$lib/utils/Tooltip.svelte";

	const year = new Date().getFullYear();
</script>

<section class="w-full pb-8">
	<div class="container">
		<footer>
			<div
				class="text-muted-foreground mt-24 flex items-center justify-between gap-2 border-t pt-6 text-sm font-medium"
			>
				<p>© {year} Albin Carlsson</p>
				<ul class="flex gap-4">
					<li>
						{#each contactLinks as link}
							<Tooltip text={link.label}>
								<Button
									href={link.href}
									variant="ghost"
									size="icon"
									class="hover:text-muted-foreground"
									aria-label={link.label}
								>
									<link.icon />
								</Button>
							</Tooltip>
						{/each}
					</li>
				</ul>
			</div>
		</footer>
	</div>
</section>

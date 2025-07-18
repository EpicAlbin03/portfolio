<script lang="ts">
	import * as Tabs from "$lib/components/ui/tabs/index.js";
	import * as Card from "$lib/components/ui/card/index.js";
	import Tooltip from "$lib/utils/Tooltip.svelte";
	import { Code, Database, Globe, Palette, Star, type Icon as IconType } from "@lucide/svelte";
	import { TECHNOLOGIES, type Technology } from "$lib/data/technologies";

	type Tab = {
		id: string;
		title: string;
		icon: typeof IconType;
		technologies: Technology[];
	};

	const tabs: Tab[] = [
		{
			id: "most-used",
			title: "Most Used",
			icon: Star,
			technologies: [
				TECHNOLOGIES.SvelteSvelteKit,
				TECHNOLOGIES.TypeScript,
				TECHNOLOGIES.Tailwind,
				TECHNOLOGIES.Figma
			]
		},
		{
			id: "languages",
			title: "Languages",
			icon: Code,
			technologies: [
				TECHNOLOGIES.HTML,
				TECHNOLOGIES.CSS,
				TECHNOLOGIES.JavaScript,
				TECHNOLOGIES.TypeScript,
				TECHNOLOGIES.Python,
				TECHNOLOGIES.CSharp
			]
		},
		{
			id: "frameworks",
			title: "Frameworks",
			icon: Globe,
			technologies: [
				TECHNOLOGIES.SvelteSvelteKit,
				TECHNOLOGIES.ReactNextjs,
				TECHNOLOGIES.ReactNative
			]
		},
		{
			id: "databases",
			title: "Databases",
			icon: Database,
			technologies: [TECHNOLOGIES.MySQL, TECHNOLOGIES.Firebase, TECHNOLOGIES.Supabase]
		},
		{
			id: "design",
			title: "Design",
			icon: Palette,
			technologies: [TECHNOLOGIES.Figma, TECHNOLOGIES.Spline]
		}
	];
</script>

<section class="bg-background py-16 sm:py-32" id="technologies">
	<div class="container mx-auto">
		<h1
			class="text-foreground mb-10 text-center text-3xl font-bold tracking-tighter sm:mb-20 sm:text-5xl"
		>
			Technologies
		</h1>
		<div class="mx-auto flex w-full max-w-xl flex-col gap-6">
			<Tabs.Root value={tabs[0].id}>
				<Tabs.List class="h-10 w-full">
					{#each tabs as tab}
						<Tabs.Trigger value={tab.id} class="hidden sm:block">{tab.title}</Tabs.Trigger>
						<Tabs.Trigger value={tab.id} class="flex justify-center sm:hidden">
							<tab.icon />
						</Tabs.Trigger>
					{/each}
				</Tabs.List>
				{#each tabs as tab}
					<Tabs.Content value={tab.id}>
						<Card.Root>
							<Card.Header class="block sm:hidden">
								<Card.Title>{tab.title}</Card.Title>
							</Card.Header>
							<Card.Content class="flex w-xs flex-wrap gap-6 sm:w-auto">
								{#each tab.technologies as technology}
									<Tooltip text={technology.label}>
										{#if technology.img}
											<img src={technology.img} width={24} alt={technology.img} />
										{:else}
											<technology.icon size={24} />
										{/if}
									</Tooltip>
								{/each}
							</Card.Content>
						</Card.Root>
					</Tabs.Content>
				{/each}
			</Tabs.Root>
		</div>
	</div>
</section>

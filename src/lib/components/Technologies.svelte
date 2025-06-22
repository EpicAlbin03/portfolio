<script lang="ts">
	import * as Tabs from "$lib/components/ui/tabs/index.js";
	import * as Card from "$lib/components/ui/card/index.js";
	import Svelte from "$lib/icons/Svelte.svelte";
	import Javascript from "$lib/icons/Javascript.svelte";
	import Typescript from "$lib/icons/Typescript.svelte";
	import Figma from "$lib/icons/Figma.svelte";
	import Tooltip from "$lib/utils/Tooltip.svelte";
	import CSharp from "$lib/icons/CSharp.svelte";
	import Python from "$lib/icons/Python.svelte";
	import Html from "$lib/icons/HTML.svelte";
	import Css from "$lib/icons/CSS.svelte";
	import Tailwind from "$lib/icons/Tailwind.svelte";
	import MySql from "$lib/icons/MySQL.svelte";
	import Supabase from "$lib/icons/Supabase.svelte";
	import Firebase from "$lib/icons/Firebase.svelte";
	import React from "$lib/icons/React.svelte";
	import Nextjs from "$lib/icons/Nextjs.svelte";
	import { Code, Database, Globe, Palette, Star, type Icon as IconType } from "@lucide/svelte";
	import type { Technology } from "$lib/icons";

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
				{ label: "Svelte/Sveltekit", icon: Svelte },
				{ label: "TypeScript", icon: Typescript },
				{ label: "Tailwind CSS", icon: Tailwind },
				{ label: "Figma", icon: Figma }
			]
		},
		{
			id: "languages",
			title: "Languages",
			icon: Code,
			technologies: [
				{ label: "HTML", icon: Html },
				{ label: "CSS", icon: Css },
				{ label: "JavaScript", icon: Javascript },
				{ label: "TypeScript", icon: Typescript },
				{ label: "Python", icon: Python },
				{ label: "C#", icon: CSharp }
			]
		},
		{
			id: "frameworks",
			title: "Frameworks",
			icon: Globe,
			technologies: [
				{ label: "Svelte/Sveltekit", icon: Svelte },
				{ label: "Next.js", icon: Nextjs },
				{ label: "React", icon: React },
				{ label: "React Native", icon: React }
			]
		},
		{
			id: "databases",
			title: "Databases",
			icon: Database,
			technologies: [
				{ label: "MySQL", icon: MySql },
				{ label: "Firebase", icon: Firebase },
				{ label: "Supabase", icon: Supabase }
			]
		},
		{
			id: "design",
			title: "Design",
			icon: Palette,
			technologies: [
				{ label: "Figma", icon: Figma },
				{ label: "Spline", img: "src/lib/icons/spline.png" }
			]
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
							<Card.Content class="flex flex-wrap gap-6">
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

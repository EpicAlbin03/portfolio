<script lang="ts">
	import {
		Home,
		Folders,
		Code,
		Mail,
		Github,
		Moon,
		Sun,
		type Icon as IconType
	} from "@lucide/svelte";
	import Separator from "$lib/components/ui/separator/separator.svelte";
	import { toggleMode, mode } from "mode-watcher";
	import Button from "./ui/button/button.svelte";
	import * as Tooltip from "$lib/components/ui/tooltip/index.js";

	type Section = {
		id: string;
		links: {
			label: string;
			icon: typeof IconType;
			href: string;
			newTab?: boolean;
		}[];
	};

	const sections: Section[] = [
		{
			id: "navbar",
			links: [
				{ label: "Home", icon: Home, href: "#" },
				{ label: "Projects", icon: Folders, href: "#projects" },
				{ label: "Technologies", icon: Code, href: "#technologies" }
			]
		},
		{
			id: "contact",
			links: [
				{ label: "GitHub", icon: Github, href: "https://github.com/EpicAlbin03", newTab: true },
				{ label: "Email", icon: Mail, href: "mailto:career@albincarlsson.com" }
			]
		}
	];
</script>

<div class="fixed z-50 mt-4">
	<ul class="bg-card mx-auto flex w-fit items-center justify-center gap-2 rounded-lg border p-2">
		{#each sections as section, index}
			{#each section.links as link}
				<li>
					<Tooltip.Provider>
						<Tooltip.Root delayDuration={400}>
							<Tooltip.Trigger>
								{#snippet child({ props })}
									<Button
										{...props}
										aria-label={link.label}
										target={link.newTab ? "blank" : undefined}
										href={link.href}
										variant="ghost"
										size="icon"
										class="hover:!bg-accent h-auto rounded-lg p-2"
									>
										<link.icon strokeWidth={1.25} class="size-5" />
									</Button>
								{/snippet}
							</Tooltip.Trigger>
							<Tooltip.Content side="bottom">
								<p>{link.label}</p>
							</Tooltip.Content>
						</Tooltip.Root>
					</Tooltip.Provider>
				</li>
			{/each}
			{#if index < sections.length}
				<li>
					<Separator orientation="vertical" class="!h-8" />
				</li>
			{/if}
		{/each}
		<li>
			<Tooltip.Provider>
				<Tooltip.Root delayDuration={400}>
					<Tooltip.Trigger>
						{#snippet child({ props })}
							<Button
								{...props}
								variant="ghost"
								aria-label="Toggle theme"
								size="icon"
								class="h-auto cursor-pointer rounded-lg p-2"
								onclick={toggleMode}
							>
								{#if mode.current == "light"}
									<Sun strokeWidth={1.25} class="size-5" />
								{:else}
									<Moon strokeWidth={1.25} class="size-5" />
								{/if}
								<span class="sr-only">Toggle theme</span>
							</Button>
						{/snippet}
					</Tooltip.Trigger>
					<Tooltip.Content side="bottom">
						<p>Toggle theme</p>
					</Tooltip.Content>
				</Tooltip.Root>
			</Tooltip.Provider>
		</li>
	</ul>
</div>

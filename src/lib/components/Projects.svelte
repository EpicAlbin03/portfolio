<script lang="ts">
	import { Separator } from "$lib/components/ui/separator";
	import Button from "./ui/button/button.svelte";
	import { Github, Play } from "@lucide/svelte";
	import { Badge } from "./ui/badge";
	import { technologies, type Technology } from "$lib/data/technologies";
	import { ChromeWebStore, Figma } from "$lib/icons";
	import TechnologyIcon from "$lib/utils/TechnologyIcon.svelte";

	type Snippet = () => ReturnType<import("svelte").Snippet>;
	type ProjectButton = {
		type: "github" | "cws" | "figma" | "demo";
		href: string;
	};

	type Project = {
		title: string;
		date: string;
		text?: string[];
		snippet?: Snippet;
		nda?: boolean;
		technologies: Technology[];
		buttons?: ProjectButton[];
	};

	const projects: Project[] = [
		{
			title: "shadcn/studio-svelte",
			date: "Aug 2025 – Sep 2025",
			text: [
				"Converted shadcn/studio from React to Svelte, an open-source collection of copy-and-paste components, blocks, and templates paired with a powerful theme generator, allowing developers to craft, customize, and ship projects faster."
			],
			technologies: [
				technologies.SvelteKit,
				technologies.ReactNextjs,
				technologies.TypeScript,
				technologies.Tailwind
			],
			buttons: [
				{ type: "github", href: "https://github.com/EpicAlbin03/shadcn-studio-svelte" },
				{
					type: "demo",
					href: "https://shadcnstudio-svelte.netlify.app"
				}
			]
		},
		{
			title: "Simple Tab Manager",
			date: "Jul 2024 – Nov 2024",
			text: [
				"Developed a Chrome Extension to streamline tab sorting and management in the browser, enhancing productivity and quality of life for 800+ users."
			],
			technologies: [
				technologies.SvelteKit,
				technologies.TypeScript,
				technologies.Tailwind,
				technologies.ChromeAPI
			],
			buttons: [
				{ type: "github", href: "https://github.com/EpicAlbin03/Simple-Tab-Manager" },
				{
					type: "cws",
					href: "https://chromewebstore.google.com/detail/simple-tab-manager/mdfbfcbfcohpbdicnpdpcdioggfdddlc"
				}
			]
		},
		{
			title: "EBLWin Fire Alarm System",
			date: "Jan 2025 – Jun 2025",
			text: [
				"Acted as UI lead on a team of 12 using Scrum/Agile methodologies to redesign Panasonic's fire alarm system, through the consulting firm Malvacom. The project focused on improving the design of the current system, which I played a leading role in. Another requirement was that it had to be hybrid, meaning it could run on Windows, Android, and the web."
			],
			nda: true,
			technologies: [
				technologies.Figma,
				technologies.CSharp,
				technologies.Dotnet,
				technologies.Blazor,
				technologies.SQLite
			]
		},
		{
			title: "Halstead Complexity",
			date: "Jan 2025 – Jun 2025",
			text: [
				"Co-developed a Python CLI tool for my Bachelor's thesis that analyzes the complexity of Python and JavaScript code, using Halstead metrics based on operators and operands."
			],
			technologies: [technologies.Python],
			buttons: [{ type: "github", href: "https://github.com/robjoh01/HalsteadComplexity" }]
		},
		{
			title: "Xplorify",
			date: "Nov 2024 – Jan 2025",
			text: [
				"Designed and built the frontend for a geocaching-inspired Android app on a team of 5. The app enables users to select, travel to, save, review, share, and create caches."
			],
			technologies: [
				technologies.Figma,
				technologies.ReactNative,
				technologies.Expo,
				technologies.TypeScript,
				technologies.Tailwind,
				technologies.Zod,
				technologies.Firebase
			],
			buttons: [
				{ type: "github", href: "https://github.com/Baa123124/PA1469" },
				{
					type: "figma",
					href: "https://www.figma.com/design/cWPi1tEwrKVX2Ju5iBYHph/Xplorify?m=auto&t=UjW3yjMfXeecxnzw-1"
				}
			]
		},
		{
			title: "Chronos",
			date: "Jan 2024 – May 2024",
			text: [
				"Collaborated as a team of 5 using Scrum/Agile methodologies to design and implement an internal booking tool for the Ericsson Kubernetes test platform. The app enables users to reserve containers for a specific time period, view container status, and real-time metrics such as CPU and memory usage.",
				"Focused on the frontend UI and authentication by implementing user-friendly interfaces and integrating LDAP for secure access. Also contributed to backend functionality with SQL to support reservation features."
			],
			technologies: [
				technologies.Nextjs,
				technologies.JavaScript,
				technologies.MySQL,
				technologies.Ericsson
			]
		}
		// {
		// 	title: "Toronto Cupcakes",
		// 	date: "Jan 2023 – Mar 2023",
		// 	snippet: TorontoCupcakesText,
		// 	technologies: [
		// 		technologies.SvelteKit,
		// 		technologies.TypeScript,
		// 		technologies.Tailwind,
		// 		technologies.Zod
		// 	],
		// 	buttons: [
		// 		{ type: "github", href: "https://github.com/EpicAlbin03/toronto-cupcakes" },
		// 		{ type: "demo", href: "https://toronto-cupcakes-redesign.netlify.app/" }
		// 	]
		// }
	];

	const projectButtonConfig = {
		github: { icon: Github, label: "GitHub", variant: undefined },
		cws: { icon: ChromeWebStore, label: "Chrome Web Store", variant: "outline" },
		figma: { icon: Figma, label: "Figma", variant: "outline" },
		demo: { icon: Play, label: "Live Demo", variant: "outline" }
	} as const;
</script>

<!-- {#snippet TorontoCupcakesText()}
	<p>
		Redesigned the <span>
			<Button variant="link" href="https://www.torontocupcake.com/" target="_blank" class="p-0">
				torontocupcake.com
			</Button>
		</span> website to improve the UI/UX, achieving a more intuitive layout, navigation and color scheme.
	</p>
{/snippet} -->

{#snippet ProjectButton(button: ProjectButton)}
	{@const config = projectButtonConfig[button.type]}
	<Button
		class="no-underline"
		size="sm"
		href={button.href}
		target="_blank"
		variant={config.variant}
	>
		<config.icon />
		{config.label}
	</Button>
{/snippet}

<section class="bg-background py-16 sm:py-32" id="projects">
	<div class="container mx-auto">
		<h1
			class="text-foreground mb-10 text-center text-3xl font-bold tracking-tighter sm:mb-20 sm:text-5xl"
		>
			Projects
		</h1>
		<div class="relative mx-auto w-fit">
			{#each projects as project}
				<div class="relative mb-10 pl-8">
					<Separator orientation="vertical" class="bg-muted absolute top-4 left-3.5" />
					<div class="bg-foreground absolute top-3.5 left-[6.5px] flex size-4 rounded-full"></div>
					<div class="pl-4">
						<h2 class="rounded-xl py-2 text-xl font-bold tracking-tight xl:px-3">
							{project.title}
						</h2>
						<h3 class="text-md text-muted-foreground rounded-xl tracking-tight xl:px-3">
							{project.date}
						</h3>

						<div class="border-none px-0 py-4 shadow-none xl:px-2">
							<div class="prose dark:prose-invert text-foreground">
								{#if project.text}
									{#each project.text as text}
										<p>{text}</p>
									{/each}
								{:else if project.snippet}
									{@render project.snippet()}
								{/if}

								{#if project.nda}
									<Badge>NDA</Badge>
								{/if}
								{#if project.buttons}
									<div class="flex items-center gap-2">
										{#each project.buttons as button}
											{@render ProjectButton(button)}
										{/each}
									</div>
								{/if}
							</div>

							<div class="mt-6 flex gap-4">
								<p class="text-muted-foreground text-sm">Technologies used:</p>
								{#each project.technologies as technology}
									<TechnologyIcon {technology} size={16} />
								{/each}
							</div>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<script lang="ts">
	import { Separator } from "$lib/components/ui/separator";
	import Tooltip from "$lib/utils/Tooltip.svelte";
	import Button from "./ui/button/button.svelte";
	import { Github, Play } from "@lucide/svelte";
	import { Badge } from "./ui/badge";
	import { TECHNOLOGIES, type Technology } from "$lib/data/technologies";
	import { ChromeWebStore, Figma } from "$lib/icons";
	import TechnologyIcon from "$lib/utils/TechnologyIcon.svelte";

	type Project = {
		title: string;
		date: string;
		content: () => ReturnType<import("svelte").Snippet>;
		technologies: Technology[];
		buttons?: {
			snippet: (href: string) => ReturnType<import("svelte").Snippet>;
			href: string;
		}[];
	};

	const projects: Project[] = [
		{
			title: "Simple Tab Manager",
			date: "Jul 2024 – Nov 2024",
			content: SimpleTabManager,
			technologies: [
				TECHNOLOGIES.SvelteKit,
				TECHNOLOGIES.TypeScript,
				TECHNOLOGIES.Tailwind,
				TECHNOLOGIES.ChromeAPI
			],
			buttons: [
				{ snippet: GitHubButton, href: "https://github.com/EpicAlbin03/Simple-Tab-Manager" },
				{
					snippet: CWSButton,
					href: "https://chromewebstore.google.com/detail/simple-tab-manager/mdfbfcbfcohpbdicnpdpcdioggfdddlc"
				}
			]
		},
		{
			title: "EBLWin Fire Alarm System",
			date: "Jan 2025 – Jun 2025",
			content: EBLWin,
			technologies: [
				TECHNOLOGIES.Figma,
				TECHNOLOGIES.CSharp,
				TECHNOLOGIES.Dotnet,
				TECHNOLOGIES.Blazor,
				TECHNOLOGIES.SQLite
			]
		},
		{
			title: "Xplorify",
			date: "Nov 2024 – Jan 2025",
			content: Xplorify,
			technologies: [
				TECHNOLOGIES.Figma,
				TECHNOLOGIES.ReactNative,
				TECHNOLOGIES.Expo,
				TECHNOLOGIES.TypeScript,
				TECHNOLOGIES.Tailwind,
				TECHNOLOGIES.Zod,
				TECHNOLOGIES.Firebase
			],
			buttons: [
				{ snippet: GitHubButton, href: "https://github.com/Baa123124/PA1469" },
				{
					snippet: FigmaButton,
					href: "https://www.figma.com/design/cWPi1tEwrKVX2Ju5iBYHph/Xplorify?m=auto&t=UjW3yjMfXeecxnzw-1"
				}
			]
		},
		{
			title: "Chronos",
			date: "Jan 2024 – May 2024",
			content: Chronos,
			technologies: [
				TECHNOLOGIES.Nextjs,
				TECHNOLOGIES.JavaScript,
				TECHNOLOGIES.MySQL,
				TECHNOLOGIES.Ericsson
			]
		},
		{
			title: "Toronto Cupcakes",
			date: "Jan 2023 – Mar 2023",
			content: TorontoCupcakes,
			technologies: [
				TECHNOLOGIES.SvelteKit,
				TECHNOLOGIES.TypeScript,
				TECHNOLOGIES.Tailwind,
				TECHNOLOGIES.Zod
			],
			buttons: [
				{ snippet: GitHubButton, href: "https://github.com/EpicAlbin03/toronto-cupcakes" },
				{ snippet: LiveDemoButton, href: "https://toronto-cupcakes-redesign.netlify.app/" }
			]
		}
	];
</script>

{#snippet SimpleTabManager()}
	<p>
		Developed a Chrome Extension to streamline tab sorting and management in the browser, enhancing
		productivity and quality of life for 800+ users.
	</p>
{/snippet}

{#snippet EBLWin()}
	<p>
		Acted as UI lead on a team of 12 using Scrum/Agile methodologies to redesign Panasonic's fire
		alarm system, through the consulting firm Malvacom. The project focused on improving the design
		of the current system, which I played a leading role in. Another requirement was that it had to
		be hybrid, meaning it could run on Windows, Android, and web.
	</p>
	<Badge>NDA</Badge>
{/snippet}

{#snippet Chronos()}
	<p>
		Collaborated as a team of 5 using Scrum/Agile methodologies to design and implement an internal
		booking tool for the Ericsson Kubernetes test platform. The app enables users to reserve
		containers for a specific time period, view container status, and real-time metrics such as CPU
		and memory usage.
	</p>
	<p>
		Focused on the frontend UI and authentication by implementing user-friendly interfaces and
		integrating LDAP for secure access. Also contributed to backend functionality with SQL to
		support reservation features.
	</p>
	<Badge>NDA</Badge>
{/snippet}

{#snippet Xplorify()}
	<p>
		Designed and built the frontend for a geocaching-inspired Android app on a team of 5. The app
		enables users to select, travel to, save, review, share, and create caches.
	</p>
{/snippet}

{#snippet TorontoCupcakes()}
	<p>
		Redesigned the <span>
			<Button variant="link" href="https://www.torontocupcake.com/" class="p-0">
				torontocupcake.com
			</Button>
		</span> website to improve the UI/UX, achieving a more intuitive layout, navigation and color scheme.
	</p>
{/snippet}

{#snippet GitHubButton(href: string)}
	<Button class="no-underline" size="sm" {href}>
		<Github />
		GitHub
	</Button>
{/snippet}

{#snippet CWSButton(href: string)}
	<Button class="no-underline" size="sm" variant="outline" {href}>
		<ChromeWebStore />
		Chrome Web Store
	</Button>
{/snippet}

{#snippet FigmaButton(href: string)}
	<Button class="no-underline" size="sm" variant="outline" {href}>
		<Figma />
		Figma
	</Button>
{/snippet}

{#snippet LiveDemoButton(href: string)}
	<Button class="no-underline" size="sm" variant="outline" {href}>
		<Play />
		Live Demo
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
								{@render project.content()}
								{#if project.buttons}
									<div class="flex items-center gap-2">
										{#each project.buttons as button}
											{@render button.snippet(button.href)}
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

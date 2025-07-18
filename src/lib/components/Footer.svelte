<script>
	import { Github, Linkedin, Mail } from "@lucide/svelte";
	import Button from "./ui/button/button.svelte";

	const links = [
		{ label: "GitHub", icon: Github, href: "https://github.com/EpicAlbin03", newTab: true },
		{ label: "Email", icon: Mail, href: "mailto:career@albincarlsson.com" },
		{
			label: "Linkedin",
			icon: Linkedin,
			href: "https://www.linkedin.com/in/albin-carlsson-61623a374/",
			newTab: true
		}
	];

	const year = new Date().getFullYear();
</script>

<section class="w-full pb-8">
	<div class="container">
		<footer>
			<div
				class="text-muted-foreground mt-24 flex items-center justify-between gap-4 border-t pt-6 text-sm font-medium"
			>
				<p>© {year} Albin Carlsson</p>
				<ul class="flex gap-4">
					<li>
						{#each links as link}
							<Button
								href={link.href}
								variant="ghost"
								class="hover:text-muted-foreground"
								aria-label={link.label}
							>
								<link.icon />
							</Button>
						{/each}
					</li>
				</ul>
			</div>
		</footer>
	</div>
</section>

<script lang="ts">
	import { Button } from "$lib/components/ui/button";
	import { Folders, Github } from "@lucide/svelte";

	function preventSpaceScroll(e: KeyboardEvent) {
		if (e.code === "Space" && e.target == document.body) {
			e.preventDefault();
		}
	}
</script>

<svelte:window onkeydown={(e) => preventSpaceScroll(e)} />

<section class="flex items-center py-16 sm:py-32">
	<div class="container mx-auto">
		<div class="grid items-center gap-16">
			<div class="flex flex-col items-center text-center">
				<div>
					<h1 class="my-6 text-4xl font-bold text-pretty sm:text-5xl xl:text-6xl">
						Hello, I'm Albin
					</h1>
					<p class="text-muted-foreground max-w-xl xl:text-xl">
						I am a recent graduate and software developer specializing in frontend development. I
						focus on building clean, efficient, and user-friendly web applications.
					</p>
					<p class="text-muted-foreground my-4 text-sm">
						Get in touch: <span>
							<Button variant="link" href="mailto:career@albincarlsson.com" class="p-0 underline"
								>career@albincarlsson.com</Button
							>
						</span>
					</p>
					<div class="flex w-full flex-col justify-center gap-2 sm:flex-row">
						<Button href="#projects" class="w-full sm:w-auto">
							<Folders />
							My Projects
						</Button>
						<Button
							variant="outline"
							target="_blank"
							href="https://github.com/EpicAlbin03"
							class="w-full sm:w-auto"
						>
							<Github />
							GitHub
						</Button>
					</div>
				</div>
			</div>
			<spline-viewer
				loading-anim-type="none"
				url="scene.splinecode"
				class="mx-auto aspect-[4/3] max-w-2xl rounded-md"
			></spline-viewer>
		</div>
	</div>
</section>

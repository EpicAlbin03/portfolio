<script lang="ts">
	import { Button } from "$lib/components/ui/button";
	import { Folders, Github, Loader2 } from "@lucide/svelte";
	import { Application } from "@splinetool/runtime";
	import { onMount } from "svelte";

	function preventSpaceScroll(e: KeyboardEvent) {
		if (e.code === "Space" && e.target == document.body) {
			e.preventDefault();
		}
	}

	let canvas = $state<HTMLCanvasElement>();
	let isLoading = $state(true);

	onMount(async () => {
		if (canvas) {
			const app = new Application(canvas);
			await app.load("scene.splinecode");
			isLoading = false;
		}
	});
</script>

<svelte:window onkeydown={(e) => preventSpaceScroll(e)} />

<svelte:head>
	<link rel="preload" href="scene.splinecode" as="fetch" crossorigin="anonymous" />
	<script src="https://unpkg.com/es-module-shims@2.6.2/dist/es-module-shims.js"></script>
</svelte:head>

<section class="flex items-center py-16 sm:py-32">
	<div class="container mx-auto">
		<div class="grid items-center gap-16">
			<div class="flex flex-col items-center text-center">
				<div>
					<h1 class="my-6 text-4xl font-bold text-pretty sm:text-5xl xl:text-6xl">
						Hello, I'm Albin
					</h1>
					<p class="text-muted-foreground max-w-xl xl:text-xl">
						I am a recent graduate with a Bachelor's degree in Software Engineering, focused on
						solving technical challenges and building reliable, efficient software. I have a strong
						interest in web development and continue to grow my skills in that area.
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

			<div class="relative mx-auto aspect-[4/3] max-w-2xl rounded-md">
				{#if isLoading}
					<div class="bg-muted/50 absolute inset-0 flex items-center justify-center rounded-md">
						<div class="flex flex-col items-center gap-2">
							<Loader2 class="text-muted-foreground h-8 w-8 animate-spin" />
							<p class="text-muted-foreground text-sm">Loading 3D Scene...</p>
						</div>
					</div>
				{/if}
				<canvas
					id="canvas3d"
					class="h-full w-full rounded-md {isLoading
						? 'opacity-0'
						: 'opacity-100'} transition-opacity duration-300"
					bind:this={canvas}
				></canvas>
			</div>
		</div>
	</div>
</section>

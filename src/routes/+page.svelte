<script>
	import Footer from "$lib/components/Footer.svelte";
	import Hero from "$lib/components/Hero.svelte";
	import Navbar from "$lib/components/Navbar.svelte";
	import Projects from "$lib/components/Projects.svelte";
	import Technologies from "$lib/components/Technologies.svelte";
	import Separator from "$lib/components/ui/separator/separator.svelte";
</script>

<svelte:head>
	<title>Albin's Portfolio</title>
	<meta
		name="description"
		content="Albin is a recent graduate and frontend software developer dedicated to creating clean, efficient, and user-friendly web applications."
	/>
</svelte:head>

<Navbar />
<Hero />
<Separator class="mx-auto !w-full" />
<Projects />
<Separator class="mx-auto !w-full" />
<Technologies />
<Footer />

import adapter from "@sveltejs/adapter-auto";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

const config = {
	preprocess: [vitePreprocess()],
	kit: {
		adapter: adapter({
			edge: false,
			split: false
		})
	},
	extensions: [".svelte"]
};

export default config;

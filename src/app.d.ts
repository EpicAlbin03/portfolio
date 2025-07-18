import { type Icon as IconType } from "@lucide/svelte";

// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	type LucideIcon = typeof IconType;

	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

export {};

import type { Component } from "svelte";
import {
	Blazor,
	Chrome,
	CSharp,
	Dotnet,
	Ericsson,
	Expo,
	Figma,
	Firebase,
	JavaScript,
	Nextjs,
	React,
	SQLite,
	Svelte,
	Tailwind,
	TypeScript,
	Zod,
	MySQL,
	type IconProps,
	HTML,
	Python,
	Supabase,
	CSS
} from "$lib/icons";

type Technology = {
	label: string;
	icon?: Component<IconProps>;
	img?: string;
};

const technologies = {
	Blazor: { label: "Blazor", icon: Blazor },
	ChromeAPI: { label: "Chrome API", icon: Chrome },
	ChromeWebStore: { label: "Chrome Web Store", icon: Chrome },
	CSharp: { label: "C#", icon: CSharp },
	CSS: { label: "CSS", icon: CSS },
	Dotnet: { label: ".NET", icon: Dotnet },
	Ericsson: { label: "Ericsson Design System", icon: Ericsson },
	Expo: { label: "Expo", icon: Expo },
	Figma: { label: "Figma", icon: Figma },
	Firebase: { label: "Firebase", icon: Firebase },
	HTML: { label: "HTML", icon: HTML },
	JavaScript: { label: "JavaScript", icon: JavaScript },
	MySQL: { label: "MySQL", icon: MySQL },
	Nextjs: { label: "Next.js", icon: Nextjs },
	Python: { label: "Python", icon: Python },
	React: { label: "React", icon: React },
	ReactNextjs: { label: "React/Next.js", icon: Nextjs },
	ReactNative: { label: "React Native", icon: React },
	Spline: { label: "Spline", img: "/spline.png" },
	SQLite: { label: "SQLite", icon: SQLite },
	Supabase: { label: "Supabase", icon: Supabase },
	Svelte: { label: "Svelte", icon: Svelte },
	SvelteKit: { label: "SvelteKit", icon: Svelte },
	SvelteSvelteKit: { label: "Svelte/SvelteKit", icon: Svelte },
	Tailwind: { label: "Tailwind CSS", icon: Tailwind },
	TypeScript: { label: "TypeScript", icon: TypeScript },
	Zod: { label: "Zod", icon: Zod }
} as const satisfies Record<string, Technology>;

export type { Technology };
export { technologies };

import type { Component } from "svelte";

type IconProps = {
	size?: number;
};

type Technology = {
	label: string;
	icon?: Component<IconProps>;
	img?: string;
};

export type { IconProps, Technology };

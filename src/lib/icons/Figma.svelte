<script lang="ts">
	import { ICON_SIZE, type IconProps } from ".";

	let { size = ICON_SIZE }: IconProps = $props();
</script>

<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 256 384"
	><path
		fill="#0acf83"
		d="M64 384c35.328 0 64-28.672 64-64v-64H64c-35.328 0-64 28.672-64 64s28.672 64 64 64"
	></path><path
		fill="#a259ff"
		d="M0 192c0-35.328 28.672-64 64-64h64v128H64c-35.328 0-64-28.672-64-64"
	></path><path fill="#f24e1e" d="M0 64C0 28.672 28.672 0 64 0h64v128H64C28.672 128 0 99.328 0 64"
	></path><path fill="#ff7262" d="M128 0h64c35.328 0 64 28.672 64 64s-28.672 64-64 64h-64z"
	></path><path
		fill="#1abcfe"
		d="M256 192c0 35.328-28.672 64-64 64s-64-28.672-64-64s28.672-64 64-64s64 28.672 64 64"
	></path></svg
>

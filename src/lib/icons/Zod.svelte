<script lang="ts">
	import { ICON_SIZE, type IconProps } from ".";

	let { size = ICON_SIZE }: IconProps = $props();
</script>

<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 256 203"
	><defs
		><filter
			id="logosZod0"
			width="105.2%"
			height="106.5%"
			x="-2.2%"
			y="-2.8%"
			filterUnits="objectBoundingBox"
			><feOffset dx={1} dy={1} in="SourceAlpha" result="shadowOffsetOuter1"
			></feOffset><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={2}
			></feGaussianBlur><feColorMatrix
				in="shadowBlurOuter1"
				values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.36 0"
			></feColorMatrix></filter
		><path
			id="logosZod1"
			fill="#000"
			d="M200.42 0H53.63L0 53.355l121.76 146.624l9.714-10.9L252 53.857zm-5.362 12.562l39.84 41.6l-112.8 126.558L17 54.162l41.815-41.6z"
		></path></defs
	><g transform="translate(2 1.51)"
		><path fill="#18253f" d="M58.816 12.522h136.278l39.933 41.691l-112.989 126.553L16.957 54.213z"
		></path><path
			fill="#274d82"
			d="M149.427 150.875H96.013l-24.124-29.534l68.364-.002l.002-4.19h39.078z"
		></path><path
			fill="#274d82"
			d="M223.56 42.323L76.178 127.414l-19.226-24.052l114.099-65.877l-2.096-3.631l30.391-17.546zm-78.964-29.759L33.93 76.457L16.719 54.972l74.095-42.779z"
		></path><use filter="url(#logosZod0)" href="#logosZod1"></use><use
			fill="#3068b7"
			href="#logosZod1"
		></use></g
	></svg
>

<script context="module" lang="ts">
	import { getPage } from '../notion';
	export async function preload({ params }) {
		const slug = params.slug;
		const page = await getPage(slug);
		console.log(page);
		return { slug, page }
	}
</script>

<script lang="ts">
	export let page: any;
</script>

<style>
</style>

<svelte:head>
	<title></title>
</svelte:head>

<h1>{page}</h1>
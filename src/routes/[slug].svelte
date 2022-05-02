<script context="module" lang="ts">
	import { getPage } from '../notion';
	import Block from './components/Block.svelte';
	export async function preload({ params }) {
		const slug = params.slug;
		const page = await getPage(slug);
		return { slug, page }
	}
</script>

<script lang="ts">
	export let page: any;
</script>


<svelte:head>
	<title></title>
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" >
	<link href="https://fonts.googleapis.com/css2?family=Gamja+Flower&family=Stylish&display=swap" rel="stylesheet">
</svelte:head>



{#each page as item}
	<Block pageInfo={item}></Block>
{/each}


<style>
    section>header,
    section>div.row{
        display: flex;
    }
    div.col{
        flex: 1;
    }
</style>
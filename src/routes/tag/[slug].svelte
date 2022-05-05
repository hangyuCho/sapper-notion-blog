<script context="module" lang="ts">
	import { getDatabase } from '../../notion';
	export async function preload({ params }) {
		console.log(params.slug);
		const results: Object = await getDatabase(process.env.NOTION_DATABASE_ID);
		return { results }
	}
</script>
<script lang="ts">
	import TopCover from "../../components/common/TopCover.svelte";
	import Card from '../../components/home/Card.svelte';
	export let results: any;
	export let topCover: string = "/top.webp"
</script>

<svelte:head>
	<title>긍정코딩세상 Blog</title>
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" >
	<link href="https://fonts.googleapis.com/css2?family=Gamja+Flower&family=Cute+Font&family=Do+Hyeon&family=Stylish&display=swap" rel="stylesheet">
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css">
	<link rel="stylesheet" href="https://fonts.sandbox.google.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
</svelte:head>

<TopCover src={topCover} />
<div class="card-list">
	{#each results as item, i}
		{#if item.properties.상세메뉴.select != null || 
			item.properties.설명.rich_text.length > 0 || 
			item.properties.이름.title.length > 0   
		}
		<Card item={item} />
		{/if}
	{/each}
</div>

<style>
	.card-list {
		display: flex;
		flex-wrap: wrap;
		color: rgb(150, 150, 150);
	}
</style>
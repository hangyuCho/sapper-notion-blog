
<script context="module" lang="ts">
	import { Client } from '@notionhq/client';
	import { getDatabase } from '../notion';
	export async function preload() {
		const results: Object = await getDatabase(process.env.NOTION_DATABASE_ID);
		return { results, slug: "" }
	}
</script>
<script lang="ts">
	import Menu from './components/common/Menu.svelte';
	import TopCover from "./components/common/TopCover.svelte";
	import Card from './components/home/Card.svelte';
	export let results: Object;
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

<div class="container">
	<div class="left">
		<Menu/>
	</div>
	<div class="right">
		<TopCover src={topCover} />
		<div class="card-list">
			{#each results as item, i}
				<Card item={item} />
			{/each}
		</div>
	</div>
</div>

<style>
	.container {
		display: flex;
		position: relative;
		color: rgb(150, 150, 150);
	}
	.left {
		position: fixed;
		background-color: #FFFFFF;
		height: -webkit-fill-available;
		width: 12em;
	}
	.right{
		width: -webkit-fill-available;
		margin-left: 12em;
	}
	.card-list {
		display: flex;
		flex-wrap: wrap;
	}
</style>
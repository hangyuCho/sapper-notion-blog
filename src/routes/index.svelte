
<script context="module" lang="ts">
	import { getDatabase } from '../notion';
	export async function preload() {
		const results: Object = await getDatabase(process.env.NOTION_DATABASE_ID);
		return { results }
	}
</script>
<script lang="ts">
	import TopCover from "../components/common/TopCover.svelte";
	import CardList from '../components/home/CardList.svelte';
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
<CardList items={results}/>

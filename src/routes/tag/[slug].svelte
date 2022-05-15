<script context="module" lang="ts">
	import { getDatabaseByCondition } from '../../notion';
	export async function preload({ params }) {
		const results: Object = await getDatabaseByCondition(process.env.NOTION_DATABASE_ID, {
				property: '필터키워드',
				rich_text: {
					equals: params.slug,
			}
		});
		return { results }
	}
</script>
<script lang="ts">
	import TopCover from "../../components/common/TopCover.svelte";
	import CardList from '../../components/home/CardList.svelte';
	export let results: any;
	export let topCover: string = "/top.webp"
</script>

<svelte:head>
	<title>긍정코딩세상 Blog</title>
  <!--
	<meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests">
  -->
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" >
	<link href="https://fonts.googleapis.com/css2?family=Gamja+Flower&family=Cute+Font&family=Do+Hyeon&family=Stylish&display=swap" rel="stylesheet">
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css">
	<link rel="stylesheet" href="https://fonts.sandbox.google.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
</svelte:head>

<TopCover src={topCover} />
<CardList items={results}/>

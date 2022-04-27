<script context="module" lang="ts">
	import { Client } from '@notionhq/client';
	import { getDatabase } from '../notion';
	import type { QueryDatabaseResponse, GetDatabaseParameters } from '@notionhq/client/build/src/api-endpoints';
	const objNotion: Client = new Client({ auth: process.env.NOTION_TOKEN });

	//export async function preload() {
		//const strDatabaseId = process.env.NOTION_DATABASE_ID;
		//const option: GetDatabaseParameters =  {
			//database_id: strDatabaseId,
		//};
		//const json: QueryDatabaseResponse = await objNotion.databases.query(option);
		//return { json, slug: "" }
	//}
	export async function preload() {
		const strDatabaseId = process.env.NOTION_DATABASE_ID;
		const results: Object = getDatabase(strDatabaseId);
		return { results, slug: "" }
	}
</script>
<script lang="ts">
import Slug from "./[slug].svelte";

	//export let meta: Object;
	//const arrSlug = Object.values(meta);
	export let results: Object;

</script>

<svelte:head>
	<title>긍정코딩세상 Blog</title>
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" >
	<link href="https://fonts.googleapis.com/css2?family=Gamja+Flower&family=Stylish&display=swap" rel="stylesheet">
</svelte:head>

<div class="container">
	<div class="top">
		<h1>긍정코딩세상 Blog</h1>
		<ul class="post-nav">
			<li>All</li>
			<li>React</li>
			<li>Spring</li>
			<li>Flutter</li>
			<li>Nginx</li>
			<li>Linux</li>
		</ul>
		<hr/>
	</div>
	<div class="center">
		<div class="post-list">
			{#each results as item, i}
			<h2>{`${i + 1}. ${item.properties.이름.title[0].text.content}`}</h2>
			<p>{`${new Date(item.created_time).toLocaleString("ko-KR", {
				year: "numeric",
				month: "2-digit",
				day: "2-digit",
			})}`}</p>
			<!-- svelte-ignore a11y-invalid-attribute -->
			<a href="#">상세보기</a>
			{/each}
		</div>
	</div>
	<div class="bottom"></div>
</div>

<style>
	.container {
		padding: 1.2em 1.2em;
	}
	.top {}
	.post-nav{
		display: flex;
		list-style-type: none;
		padding: 0px;
	}
	.post-nav > li {
		padding: 0.4em 0.8em;
		background-color: lightgoldenrodyellow;
		border: 1px solid lightgray;
		border-radius: 0.4em;
		margin: 0.2em;
	}
	.center {}
	.bottom {}
	.post-list {}
</style>
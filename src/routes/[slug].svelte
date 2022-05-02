<script context="module" lang="ts">
	import { getBlocks, getPage, renderParagraph, renderText } from '../notion';
	export async function preload({ params }) {
		const slug = params.slug;
		const blocks = await getBlocks(slug);
		const page = await getPage(slug);
		return { slug, blocks, page }
	}
</script>

<script lang="ts">
	import { BlockType } from "../enums";
	import Menu from './components/common/Menu.svelte';
	import TopCover from "./components/common/TopCover.svelte";
import { text } from 'svelte/internal';
	export let blocks: any;
	export let page: any;
</script>


<svelte:head>
	<title></title>
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" >
	<link href="https://fonts.googleapis.com/css2?family=Black+Han+Sans&family=Do+Hyeon&family=Gamja+Flower&family=Stylish&family=Dongle:wght@300;400;700&display=swap" rel="stylesheet">
	<link rel="stylesheet" href="https://fonts.sandbox.google.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
</svelte:head>

<div class="container">
	<div class="left">
		<Menu/>
	</div>
	<div class="right">
		<TopCover src={page.cover.external.url} />
	<div class="post">
	{#each blocks as item}
		<!-- svelte-ignore empty-block -->
		{#if item.type == BlockType.Heading_1}
            <h1>
				<div class="block-type heading-1">
					<p>{@html renderText(item.heading_1.rich_text)}</p>
				</div>
			</h1>
		{/if}
		{#if item.type == BlockType.Heading_2}
            <h2>
				<div class="block-type heading-2">
					<div class="text-with-under-line">
						<p class="text">{@html renderText(item.heading_2.rich_text)}</p>
						<div class="under-line"></div>
					</div>
				</div>
			</h2>
		{/if}
		{#if item.type == BlockType.Heading_3}
            <h2>
				<div class="block-type heading-3">
					<p>{@html renderText(item.heading_3.rich_text)}</p>
				</div>
			</h2>
		{/if}
		{#if item.type == BlockType.Paragraph}
			<div class="block-type paragraph">
				<p>{@html renderText(item.paragraph.rich_text)}</p>
			</div>
		{/if}
		{#if 
			item.type == BlockType.Numbered_list_item || 
			item.type == BlockType.Bulleted_list_item 
		}
			<div class="block-type numbered-list-item">
				<p>{@html renderText(item.numbered_list_item.rich_text)}</p>
			</div>
		{/if}
	{/each}

	</div>
	</div>
</div>


<style>
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
	.post {
		display: flex;
		flex-direction: column;
		padding: 3em 5em;
		font-family: Dongle, Stylish, Black Han Sans, Do Hyeon, 'Courier New', Courier, monospace;
		font-size: 1.8em;

	}
	.post p {
		font-weight: 300;
	}
	.block-type { display: flex; }
	.heading-1 {
		padding: 1em 0.2em 0em;
	}
	.heading-1>p {
		font-weight: 700;
		padding: 0em 0.2em;
	}
	.heading-1::before { 
		content:"/* ";
		color: lightgray;
		
	}
	.heading-1::after {
		content:" */";
		color: lightgray;
	}
	.heading-2::before { 
		content:"\e22b";
		font-family: Material Symbols Rounded;
		color: #ff6e6e;
	}
	.heading-2 {
		display: flex;
		align-items: flex-end;
		padding-left: 0.2em;
	}
	.heading-2>.text-with-under-line {
		flex-direction: column;
	}
	.heading-2>.text-with-under-line>.text {
		height: 1.1em;
	}
	.heading-2>.text-with-under-line>p {
		font-size: 1em;
		height: 0.94em;
		font-weight: 400;
	}
	.heading-2>.text-with-under-line>.under-line {
		border-radius: 0.8em;
		background: linear-gradient(90deg, rgba(255,110,110,1) 0%, rgba(89,9,121,1) 50%, rgba(0,20,255,1) 100%);
		margin-top: 0.02em;
		height: 0.14em;
		margin-bottom: 0.12em;
	}
	.paragraph {
		padding-left: 0.8em;
		white-space: pre-wrap;
	}

</style>
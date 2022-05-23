<script context="module" lang="ts">
	import { 
		getBlocks, 
		getPage, 
		appendBlocksWithChild
	} from '../notion';
	import { BlockType } from '../enums';
	export async function preload({ params }) {
		const blocks = await getBlocks(params.slug);
		const page = await getPage(params.slug);
		const slug = params.slug;
		let blocksWithChild = [...blocks];
		let contentArray: [] = [];
		//console.time("appendBlocksWithChild")
		await appendBlocksWithChild(blocksWithChild, contentArray);
		//console.timeEnd("appendBlocksWithChild")
		return { blocksWithChild, page, slug, contentArray}
	}
</script>

<script lang="ts">
	import TopCover from "../components/common/TopCover.svelte";
	import monokaiSublime from "svelte-highlight/styles/monokai-sublime";
	import NotionElement from '../components/common/NotionElement.svelte';
	import { onMount } from 'svelte';
	export let theme: string = "github-light";
	export let page: any;
	export let Utterances: any;
	export let contentArray: any;
	export let slug: string;
	export let id;
	export const activeTOC = () => {
		//window.addEventListener('DOMContentLoaded', () => {
			const observer = new IntersectionObserver((entries) => {
				for(let entry of entries) {
					id = entry.target.getAttribute('id');

					if (entry.intersectionRatio > 0) {
						document.querySelector(`nav li a[href="#${id}"]`)
						  .parentElement
						  .classList
						  .add('action');
					} else {
						document.querySelector(`nav li a[href="#${id}"]`)
						  .parentElement
						  .classList
						  .remove('active');
					}
				}
			});
		//});
		document.querySelectorAll('section[id]').forEach((section) => {
			observer.observe(section);
		});
	}
	onMount(async () => {
		const module = await import('@codewithshin/svelte-utterances');
		Utterances = module.Utterances;
	});
</script>
<svelte:head>
	<title>긍정코딩세상 Blog</title>
  <!--
	<meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests">
  -->
	<link rel="preconnec20remt" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" >
	<link href="https://fonts.googleapis.com/css2?family=Black+Han+Sans&family=Do+Hyeon&family=Gamja+Flower&family=Stylish&family=Dongle:wght@300;400;700&display=swap" rel="stylesheet">
	<link rel="stylesheet" href="https://fonts.sandbox.google.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
  <script type="text/javascript" async src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.1/MathJax.js?config=TeX-MML-AM_CHTML"></script>
	{@html monokaiSublime}
</svelte:head>

{#if page.cover != null}
<TopCover src={page.cover.external.url} {slug}/>
{:else}
<TopCover src="/default_cover.jpeg" />
{/if}
<main>
	<div class="post">
		{#each contentArray as item}
			<NotionElement {item}/>
		{/each}
	</div>
	<nav class="section-nav">
		<ul>
		{#each contentArray as item}
			{#if item.type == BlockType.Heading_1}
				{#each item.heading_1.rich_text as text}
					<li style="padding-left: 0.2rem;"><a href={`/${slug}#${text.plain_text.replace(/\s/g,'-')}`}>{text.plain_text}</a></li>
				{/each}
			{/if}
			{#if item.type == BlockType.Heading_2}
				{#each item.heading_2.rich_text as text}
					<li style="padding-left: 0.4rem;"><a href={`/${slug}#${text.plain_text.replace(/\s/g,'-')}`}>{text.plain_text}</a></li>
				{/each}
			{/if}
			{#if item.type == BlockType.Heading_3}
				{#each item.heading_3.rich_text as text}
					<li style="padding-left: 0.6rem;"><a href={`/${slug}#${text.plain_text.replace(/\s/g,'-')}`}>{text.plain_text}</a></li>
				{/each}
			{/if}
		{/each}
		</ul>
	</nav>
</main>
<svelte:component this={Utterances} reponame="hangyuCho/sapper-notion-blog" { theme } />

<style>
	.post {
		display: flex;
		flex-direction: column;
		padding: 3rem 0rem;
		font-family: SuncheonB, Dongle, Stylish, Black Han Sans, Do Hyeon, 'Courier New', Courier, monospace;
		font-size: 1.2rem;

	}
	ul {
		list-style: none;
		margin: 0;
		padding: 0;
	}
    li {
		margin-left: 1rem;
	}
	main {
		display: flex;
	}
	main > nav {
		position: sticky;
		top: 14rem;
		align-items: start;
	}
	nav {
		flex: 2; 
	}
	.section-nav {
		padding-left: 0;
		border-left: 1px solid #efefef;
		height: 4rem;
	}
	.section-nav a {
		text-decoration: none;
		display: block;
		padding: .125rem 0;
		color: #ccc;
		transition: all 50ms ease-in-out;
	}
	.section-nav ul {
		width: 18rem;
	}
	.section-nav li.active > a {
		color: #333;
		font-weight: 500;
	}
	.section-nav a:hover,
	.section-nav a:focus {
		color: #333;
	}
</style>

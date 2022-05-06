<script context="module" lang="ts">
	import { 
		getBlocks, 
		getPage, 
		getLanguage,
		getBlock,
		renderText, 
		renderCode } from '../notion';
	export async function preload({ params }) {
		const blocks = await getBlocks(params.slug);
		const page = await getPage(params.slug);
		let blocksWithChild = [...blocks];
		for(let parentBlock of blocksWithChild) {
			if (parentBlock.has_children) {
				parentBlock.child = await getBlock(parentBlock.id);
			}
		}
		return { blocksWithChild, page }
	}
</script>

<script lang="ts">
	import { BlockType } from "../enums";
	import TopCover from "../components/common/TopCover.svelte";
	import Highlight from "svelte-highlight";
	import monokaiSublime from "svelte-highlight/styles/monokai-sublime";
	export let blocksWithChild: any;
	export let page: any;
</script>


<svelte:head>
	<title>긍정코딩세상 Blog</title>
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" >
	<link href="https://fonts.googleapis.com/css2?family=Black+Han+Sans&family=Do+Hyeon&family=Gamja+Flower&family=Stylish&family=Dongle:wght@300;400;700&display=swap" rel="stylesheet">
	<link rel="stylesheet" href="https://fonts.sandbox.google.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
	{@html monokaiSublime}
</svelte:head>

{#if page.cover != null}
<TopCover src={page.cover.external.url} />
{:else}
<TopCover src="/default_cover.jpeg" />
{/if}
<div class="post">
{#each blocksWithChild as item}
	<!-- svelte-ignore empty-block -->
	{#if item.type == BlockType.Heading_1}
		<div class="block-type heading-1">
			<h1>
				<p>{@html renderText(item.heading_1.rich_text)}</p>
			</h1>
		</div>
	{/if}
	{#if item.type == BlockType.Heading_2}
		<div class="block-type heading-2">
			<h2>
				<div class="text-with-under-line">
					<p class="text">{@html renderText(item.heading_2.rich_text)}</p>
					<div class="under-line"></div>
				</div>
			</h2>
		</div>
	{/if}
	{#if item.type == BlockType.Heading_3}
		<div class="block-type heading-3">
			<h3>
				<p>{@html renderText(item.heading_3.rich_text)}</p>
			</h3>
		</div>
	{/if}
	{#if item.type == BlockType.To_do}
		<div class="block-type todo">
			{#if item.to_do.checked}
			<div class="todo-icon checked-icon"></div>
			{:else}
			<div class="todo-icon unchecked-icon"></div>
			{/if}
			<span>{@html renderText(item.to_do.rich_text)}</span>
		</div>
	{/if}
	{#if item.type == BlockType.Paragraph}
		<div class="block-type paragraph">
			<p>{@html renderText(item.paragraph.rich_text)}</p>
		</div>
	{/if}
	{#if item.type == BlockType.Table}
		<div class="block-type table">
			{#each item.child as row}
			<div class="row">
				{#each row.table_row.cells as col}
				<div class="col">{col[0].plain_text}</div>
				{/each}
			</div>
			{/each}
			<p>{@html renderText(item.table.rich_text)}</p>
		</div>
	{/if}
	{#if item.type == BlockType.Code}
		<div class="block-type code">
			<div class="code-block-top">
				<div class="code-left">
					<div class="btn-group">
						<div class="btn-circle red"></div>
						<div class="btn-circle yellow"></div>
						<div class="btn-circle green"></div>
					</div>
				</div>
				<div class="code-right"></div>
			</div>
			<Highlight language={getLanguage(item.code.language)} code={renderCode(item.code)} langtag />
		</div>
	{/if}
	{#if item.type == BlockType.Numbered_list_item}
		<div class="block-type numbered-list-item">
			<p>{@html renderText(item.numbered_list_item.rich_text)}</p>
		</div>
	{/if}
	{#if item.type == BlockType.Bulleted_list_item}
		<div class="block-type bulleted-list-item">
			<p>{@html renderText(item.bulleted_list_item.rich_text)}</p>
		</div>
	{/if}
	{#if item.type == BlockType.Toggle}
		<div class="block-type toggle">
			<p>{@html renderText(item.toggle.rich_text)}</p>
		</div>
	{/if}
	{#if item.type == BlockType.Quote }
		<div class="block-type quote">
			<p>{@html renderText(item.quote.rich_text)}</p>
		</div>
	{/if}
	{#if item.type == BlockType.Divider}
		<div class="block-type divider"></div>
	{/if}
	{#if item.type == BlockType.Callout}
		<div class="block-type callout">
			<p>{@html renderText(item.callout.rich_text)}</p>
		</div>
	{/if}
	{#if item.type == BlockType.Image}
		<div class="block-type image">
			{#if item.image.type == BlockType.File}
				<img src={item.image.file.url} alt="" />
			{:else}
				<img src={item.image.external.url} alt="" />
			{/if}
		</div>
	{/if}
	{#if item.type == BlockType.Video}
		<div class="block-type video">
			<div class="wrapper">
				<!-- svelte-ignore a11y-missing-attribute -->
				<iframe 
				class="player" 
				src={`https://www.youtube.com/embed/${item.video.external.url.replace("https://youtu.be/", "")}`} 
				frameborder="0" 
				allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
				</div>
		</div>
	{/if}
{/each}
</div>

<style>
	.post {
		display: flex;
		flex-direction: column;
		padding: 3em 0em;
		font-family: SuncheonB, Dongle, Stylish, Black Han Sans, Do Hyeon, 'Courier New', Courier, monospace;
		font-size: 1.2em;

	}
	.post p {
		font-weight: 300;
	}
	.block-type { 
		display: flex; 
		padding-left: 5em;
		padding-right: 5em;
	}
	.block-type.todo,
	.block-type.bulleted-list-item,
	.block-type.numbered-list-item {
		align-items: center;
	}
	.block-type.code { flex-direction: column; }
	.block-type.heading-1>h1 {
		display: flex;
		padding: 1em 0.2em 0em;
	}
	.block-type.heading-1>h1>p {
		font-weight: 700;
		padding: 0em 0.2em;
	}
	.block-type.heading-1>h1::before { 
		content:"/* ";
		color: lightgray;
		
	}
	.block-type.heading-1>h1::after {
		content:" */";
		color: lightgray;
	}
	.block-type.heading-2>h2 {
		display: flex;
		align-items: flex-end;
		padding: 0.4em 0em 0.2em;
		margin: 1em 0em 0em;
	}
	.block-type.heading-2>h2::before { 
		content:"\e22b";
		font-family: Material Symbols Rounded;
		color: #ff6e6e;
	}
	.block-type.heading-2>h2>.text-with-under-line {
		flex-direction: column;
	}
	.block-type.heading-2>h2>.text-with-under-line>.text {
		height: 1.1em;
	}
	.block-type.heading-2>h2>.text-with-under-line>p {
		font-size: 1em;
		height: 0.94em;
		font-weight: 400;
	}
	.block-type.heading-2>h2>.text-with-under-line>.under-line {
		border-radius: 0.8em;
		background: linear-gradient(90deg, rgba(255,110,110,1) 0%, rgba(89,9,121,1) 50%, rgba(0,20,255,1) 100%);
		margin-top: 0.02em;
		height: 0.14em;
		margin-bottom: 0.12em;
	}
	.block-type.heading-3>h3 {
		display: flex;
		padding: 0.4em 0em 0.2em;
	}
	.block-type.heading-3>h3::before { 
		content:"[";
		color: #ff6e6e;
	}
	.block-type.heading-3>h3::after {
		content:"]";
		color: #ff6e6e;
	}
	.block-type.heading-3>h3>p {
		font-weight: 400;
	}
	.block-type.todo > .checked-icon::before {
		content: "\e834";
		font-family: Material Symbols Rounded;
		color: #ff6e6e;
	}
	.block-type.todo > .unchecked-icon::before {
		content: "\e835";
		font-family: Material Symbols Rounded;
		color: #ff6e6e;
	}
	.block-type.paragraph {
		white-space: pre-wrap;
	} 
	.block-type.code {
		flex-direction: column;
		align-items: flex-start;
		font-size: 1em;
	}
	.code-block-top {
		width: -webkit-fill-available;
		background-color: #23241f;
		border-top-left-radius: 10px;
		border-top-right-radius: 10px;
        box-shadow: rgba(114, 114, 114, 0.2) 0px 3px 1px -2px, rgba(113, 113, 113, 0.14) 0px 2px 2px 0px, rgba(124, 124, 124, 0.12) 0px 1px 5px 0px;
	}
	.btn-circle {
		height: 0.6em;
		width: 0.6em;
		border-radius: 0.3em;
	}
	.btn-group { 
		display: flex; 
		padding-left: 0.4em;
		height: 2em;
		width: 3em;
		align-items: center;
		justify-content: space-around;
	}
	.btn-circle.red { background-color: red; }
	.btn-circle.yellow { background-color: yellow; }
	.btn-circle.green { background-color: green; }
	.block-type.table {
		flex-direction: column;
	}
	.block-type.table>.row {
		display: flex;
	}
	.block-type.table>.row>.col {
		border: 1px solid;
		min-width: 3em;
		box-sizing: border-box;
	}
	.block-type.bulleted-list-item::before {
		content: "\e560";
		font-family: Material Symbols Rounded;
		color: #ff6e6e;
		font-size: 0.7em;
		margin-right: 0.2em;
	}
	.block-type.quote {
		padding: 0.4em;
		border-radius: 0.2em;
        box-shadow: rgb(0 0 0 / 20%) 0px 3px 1px -2px, rgb(0 0 0 / 14%) 0px 2px 2px 0px, rgb(0 0 0 / 12%) 0px 1px 5px 0px;
	}
	.block-type.quote::before {
		content: " ";
		min-height: 0.8em;
		width: 0.1em;
		background-color: #23241f;
	}
	.block-type.quote > p {
		white-space: pre;
		padding-left: 0.4em;
	}
	.block-type.divider { 
		margin: 0.4em 0em;
		border: 0.2em solid #ebebeb;
		background-color: #ebebeb;
        box-shadow: rgb(0 0 0 / 20%) 0px 3px 1px -2px, rgb(0 0 0 / 14%) 0px 2px 2px 0px, rgb(0 0 0 / 12%) 0px 1px 5px 0px;
	}
	.block-type.callout{
		background-color: #e1f5ea;
		border-radius: 0.4em;
		margin: 0.4em 0em;
		padding: 0.6em;
        box-shadow: rgb(0 0 0 / 20%) 0px 3px 1px -2px, rgb(0 0 0 / 14%) 0px 2px 2px 0px, rgb(0 0 0 / 12%) 0px 1px 5px 0px;
	}
	.block-type.callout::before {
		content: "\e0f0";
		font-family: Material Symbols Rounded;
		color: #ff6e6e;
		min-height: 0.8em;
		width: 0.1em;
	}
	.block-type.callout > p {
		white-space: pre;
		padding-left: 1em;
	}
	.block-type.image {
		display: contents;
	 }
	.block-type.image > img {
		max-width: 20em;
		padding: 0.2em 0em;
	}
	.block-type.video .wrapper {
		position: relative;
		width: 100%;
	}
	.block-type.video .player {
		position: absolute;
		width: 100%;
		height: 100%;
		background: #000;
	}
	.block-type.video .wrapper,
	.block-type.video .player {
		max-width: 20em;
		height: 11.2em !important;
	}
</style>
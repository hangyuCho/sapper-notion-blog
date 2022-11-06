
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
<style>

:global( html) {
	scroll-behavior: smooth;
}
:global( body) {
	margin: 0;
	font-family: Gamja Flower, Roboto, -apple-system, BlinkMacSystemFont, Segoe UI, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
	font-size: 1.4rem;
	line-height: 1.5;
	color: #333;
}

:global( h1, h2, h3, h4, h5, h6 ) {
	margin: 0.5em 0 0.5em 0;
	font-weight: 400;
	line-height: 1.2;
}

:global( h1 ) {
	font-size: 2rem;
}

:global( a ) {
	color: inherit;
}

:global( p ) {
	margin-block-start: 0px;
	margin-block-end: 0px;
}

:global( pre ) {
	margin: 0em 0px 1em;
	width: -webkit-fill-available;
}

:global( pre.langtag::after ) {
	top: -2.5rem !important;
	color: wheat !important;
}

:global( code ) {
	font-family: menlo, inconsolata, monospace;
	font-size: calc(1rem - 2px);
	background-color: #f0f0f0;
	padding: 0.2em 0.4em;
	border-bottom-left-radius: 2px;
	border-bottom-right-radius: 2px;
}

:global( div ) {
	box-sizing: border-box;
}

:global( .hide ) {
	display: none;
}


@font-face {
    font-family: 'RIDIBatang';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_twelve@1.0/RIDIBatang.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}  

@font-face {
    font-family: 'SuncheonB';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2202-2@1.0/SuncheonB.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}

@media screen and (max-width: 576px) {
  :global( html ) {
    font-size: 10px !important;
  }
    
  :global( .block-type ) {
    margin-left: 2rem !important;
    margin-right: 2rem !important;
  }
  :global( .card-list-center ) {
		justify-content: center;
	}
  :global( nav.section-nav ) {
		display: none;
	}
}
@media screen and (max-width: 768px) {
  :global( html ) {
		font-size: 12px !important;
	}
}
@media screen and (max-width: 992px) {
  :global( html ) {
		font-size: 12px !important;
	}
  :global( html .left ) {
		display : none; 
	}
}
@media screen and (min-width: 1200px) {
  :global( html ) {
		font-size: 14px !important;
	}
}
</style>

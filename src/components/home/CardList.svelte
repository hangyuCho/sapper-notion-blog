<script lang="ts">
	import Card from './Card.svelte';
	import { 
		isNotEmptyByDetailMenu, 
		isNotEmptyByDesc, 
		isNotEmptyByName, 
		isNotEmptyByFilterKeyword, 
		isInActiveCard, 
	} from '../../booleanUtils';
	export let items: any;
</script>
<div class="card-list">
	{#each items as item, i}
		{#if isNotEmptyByDetailMenu(item) && 
		isNotEmptyByDesc(item) && 
		isNotEmptyByName(item) && 
		isNotEmptyByFilterKeyword(item) && 
		isInActiveCard(item) 
		}
		<Card item={item} />
		{/if}
		<!--
		{#if item.properties.상세메뉴.select != null || item.properties.설명.rich_text.length > 0 || item.properties.이름.title.length > 0 || item.properties.필터키워드.rich_text.length > 0 || item.properties.비활성여부.checkbox = false }
		<Card item={item} />
		{/if}
		-->
	{/each}
</div>
<style>
	.card-list {
		display: flex;
		flex-wrap: wrap;
		color: rgb(150, 150, 150);
	}
</style>
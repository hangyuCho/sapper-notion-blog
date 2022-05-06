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
	{/each}
</div>
<style>
	.card-list {
		display: flex;
		flex-wrap: wrap;
		color: rgb(150, 150, 150);
		justify-content: space-around;
	}
</style>
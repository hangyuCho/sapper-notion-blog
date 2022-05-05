<script context="module" lang="ts">
	import { getDatabase } from '../notion';
	export async function preload() {
		const results: Object = await getDatabase(process.env.NOTION_DATABASE_ID);
		return { results }
	}
</script>
<script lang="ts">
	import Menu from '../components/common/Menu.svelte';
	export let results: any;
  export let segment: string;
  segment;
	let arrJsonMenu = [];
	let jsonMenu = {};
	for (let item of results) {
		let { 카테고리, 메뉴, 상세메뉴, 이모지 } = item.properties;
		if (
			카테고리.select != null ||
			메뉴.select != null ||
			상세메뉴.select != null ||
			이모지.url != null
			) {
		jsonMenu = {}
		jsonMenu.category = 카테고리.select.name;
		jsonMenu.menu = 메뉴.select.name;
		jsonMenu.menuDetail = 상세메뉴.select.name;
		jsonMenu.emoji = 이모지.url;
		arrJsonMenu.push(jsonMenu);
		}
	}
	arrJsonMenu.sort((a, b) => b.category.localeCompare(a.category));
	const merged = arrJsonMenu.reduce((acc, {category, menu, emoji, menuDetail}) => {
			var key = `${category}-${menu}`;
			acc[key] = acc[key] || {category, menu, menuDetailText: [], menuDetailGroup: []};
			if (!acc[key]["menuDetailText"].includes(menuDetail)) {
				acc[key]["menuDetailText"].push(menuDetail);
				acc[key]["menuDetailGroup"].push({emoji, menuDetail});
			}
			return acc;
		}, {});
	export let groupByMenuJson = Object.values(merged);
</script>
<div class="container">
	<div class="left">
		<Menu jsonMenu={groupByMenuJson}/>
	</div>
	<div class="right">
    <slot />
  </div>
</div>

<style>
	.container {
		display: flex;
	}
	.left {
		position: sticky;
		background-color: #FFFFFF;
		min-width: 12em;
	}
	.right{
		width: -webkit-fill-available;
	}
</style>
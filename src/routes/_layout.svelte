<script context="module" lang="ts">
	import { getDatabase } from '../notion';
	export async function preload() {
		const results: Object = await getDatabase(process.env.NOTION_DATABASE_ID);
		return { results }
	}
</script>
<script lang="ts">
	import Menu from '../components/common/Menu.svelte';
	import SubMenu from '../components/common/SubMenu.svelte';
	export let results: any;
	export let segment: string;
	segment;
	let arrJsonMenu = [];
	let jsonMenu = {};
	for (let item of results) {
		let { 카테고리, 메뉴, 상세메뉴, 이모지, 필터키워드 } = item.properties;
		if (
			카테고리.select != null ||
			메뉴.select != null ||
			상세메뉴.select != null ||
			(이모지 || {}).url != null
			) {
		jsonMenu = {};
		jsonMenu.category = 카테고리.select.name;
		jsonMenu.menu = 메뉴.select.name;
		jsonMenu.menuDetail = 상세메뉴.select.name;
		jsonMenu.filterKeyword = 필터키워드.rich_text[0].text.content;
		if (item.icon.type == 'external') {
			jsonMenu.emoji = item.icon.external.url;
		}
		arrJsonMenu.push(jsonMenu);
		}
	}
	arrJsonMenu.sort((a, b) => b.category.localeCompare(a.category));
	const merged = arrJsonMenu.reduce((acc, {category, menu, emoji, menuDetail, filterKeyword}) => {
			var key = `${category}-${menu}`;
			acc[key] = acc[key] || {category, menu, menuDetailText: [], menuDetailGroup: []};
			if (!acc[key]["menuDetailText"].includes(menuDetail)) {
				acc[key]["menuDetailText"].push(menuDetail);
				acc[key]["menuDetailGroup"].push({filterKeyword, emoji, menuDetail});
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
		<SubMenu jsonMenu={groupByMenuJson}/>
    <slot />
  </div>
</div>

<style>
	.container {
		display: flex;
	}
	.left {
		display: none;
		position: absolute;
		background-color: #FFFFFF;
		min-width: 12rem;
	}
	.right{
		width: -webkit-fill-available;
	}
</style>
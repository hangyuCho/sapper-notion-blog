<script lang="ts">
	export let jsonMenu: any;
</script>
<div class="menu-container">
	<div class="left-profile-area">
		<div class="left-cover">
			<div class="left-picture"></div>
		</div>
		<div class="left-profile">
			<div class="title">
				<a rel="external" href="/"><h3>긍정코딩세상 Blog</h3></a>
			</div>
			<div class="name">
				<p>h-9</p>
			</div>
		</div>
	</div>
	<div class="visitors">
		<div class="total">
			<p class="vis-count">999,999</p>
			<p class="vis-category">Visitors</p>
		</div>
		<div class="today">
			<p class="vis-count">999</p>
			<p class="vis-category">Today</p>
		</div>
		<div class="yesterday">
			<p class="vis-count">999</p>
			<p class="vis-category">Yesterday</p>
		</div>
	</div>
	<div class="post-nav-area">
		<div class="nav">
			{#each jsonMenu as nav, i}
			{#if (jsonMenu[i-1] || {}).category != nav.category}
			<div class="nav-menu root">
				<div class="nav-icon root"></div>
				<div class="nav-name">{nav.category}</div>
				<!--
				<div class="nav-count">(99)</div>
				-->
			</div>
			{/if}
			<details class="nav-toggle">
				<summary>
					<div class="nav-menu parent" draggable="false">
						<div class="nav-area">
							<div class="nav-icon parent"></div>
							<div class="nav-name">{nav.menu}</div>
						</div>
					</div>
				</summary>
				{#each nav.menuDetailGroup as childMenu}
				<div class="nav-menu child">
					<a rel="external" href={`/tag/${childMenu.filterKeyword}`}>
						<div class="nav-area">
							<div class="nav-icon child" style="background-image: url({childMenu.emoji});"></div>
							<div class="nav-name">
									{childMenu.menuDetail}
							</div>
						</div>
					</a>
				</div>
				{/each}
			</details>
			{/each}
		</div>
	</div>
</div>
<style>
	a {
		text-decoration: none;
	}
	.menu-container {
		position: sticky;
		top: 0px;
	}
	.left-profile-area {
		display: flex;
		flex-direction: column;
	}
	.left-cover {
		background-color: #64e1b3;
		width: -webkit-fill-available;
		height: 4rem;
	}
	.left-picture {
		background-image: url("/favicon.png");
		position: absolute;
		left: 4.2rem;
		top: 2.4rem;
		height: 3.5rem;
		width: 3.5rem;
		border-radius: 0.6rem;
		background-size: cover;
		background-color: lightgoldenrodyellow;
	}
	.left-profile {
		display: flex;
		margin-top: 2.4rem;
		flex-direction: column;
		align-items: center;
	}
	.left-profile .title {
		color: black;
	}
	.visitors {
		display: flex;
		font-size: 0.8rem;
		justify-content: space-around;
		border-top: 1px solid rgb(240, 240, 240);
		border-bottom: 1px solid rgb(240, 240, 240);
	}
	.visitors .total, 
	.visitors .today, 
	.visitors .yesterday {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.visitors .vis-count{
		font-size: 1.4rem;
		color: black;
	}
	.visitors .vis-category{
		font-size: 1rem;
	}
	.nav{
		display: flex;
		flex-direction: column;
		padding: 1rem 0.2rem;
		height: 70vh;
		overflow-x: auto;
		-ms-overflow-style: none;  /* IE and Edge */
		scrollbar-width: none;  /* Firefox */
	}
	.nav::-webkit-scrollbar {
		display: none;
	}
	.nav-menu{
		display: flex;
		padding: 0.2rem 0rem;
		align-items: center;
	}
	.nav-menu,
	.nav-area{
		display: flex;
		padding: 0.2rem 0rem 0.2rem 0rem;
		align-items: center;
	}
	.nav-menu.parent{
		justify-content: space-between;
	}
	.nav-menu.child{
		align-items: center;
	}
	.nav-menu.child::before{
		content: "▶︎";
		font-size: 0.6rem;
		padding: 0rem 0.2rem 0rem 4rem;
	}
	.nav-icon {
		padding-left: 2rem;
	}
	.nav-icon.root {
		background: url(https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1603679366/noticon/dcvetqndre7gda3ttijy.gif);
		height: 2rem;
		width: 2rem;
		border-radius: 0.2rem;
		padding: 0rem;
		margin: 0rem 0.2rem;
		background-size: cover;
		image-rendering: -webkit-optimize-contrast;
		transform: translateZ(0);
		backface-visibility: hidden;
	}
	.nav-icon.parent {
		background-image: url(https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1603679176/noticon/rfgzeyojg7miwxekxebp.png);
		height: 2rem;
		width: 2rem;
		border-radius: 0.2rem;
		padding: 0rem;
		margin: 0rem 0.2rem;
		background-size: cover;
		image-rendering: -webkit-optimize-contrast;
		transform: translateZ(0);
		backface-visibility: hidden;
	}
	.nav-icon.child {
		background-image: url(https://www.saashub.com/images/app/service_logos/63/5a5d34be5e8e/large.png?1564717217);
		height: 1.8rem;
		width: 1.8rem;
		border-radius: 0.2rem;
		padding: 0rem;
		margin: 0rem 0.2rem;
		background-size: cover;
		image-rendering: -webkit-optimize-contrast;
		transform: translateZ(0);
		backface-visibility: hidden;
	}
	details.nav-toggle > summary {
		cursor: pointer;
		list-style-type: none;
		-webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
     -khtml-user-select: none; /* Konqueror HTML */
       -moz-user-select: none; /* Old versions of Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none; /* Non-prefixed version, currently */
	}
	.details.nav-toggle::after{
		content: "\e5cf";
		font-family: Material Symbols Rounded;
		float: right; 
		color: grey; 
		padding: 0rem 0.4rem;
	}
	.details.nav-toggle[open]::after{
		content: "\e5cf";
		font-family: Material Symbols Rounded;
		float: right; 
		color: red; 
		padding: 0rem 0.4rem;
	}

</style>
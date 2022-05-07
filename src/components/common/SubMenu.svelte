<script lang="ts">
	export let jsonMenu: any;
    export let jsonSubMenu: any;
    function showSubNavModal(category) {
        jsonSubMenu = jsonMenu.filter((obj: any) => obj.category == category)
    }
</script>
<div class="sub-menu">
    <div class="sub-menu-left">
        <div class="sub-menu-logo">
            logo
        </div>
        <div class="sub-nav">
            {#each jsonMenu as nav, i}
            {#if (jsonMenu[i-1] || {}).category != nav.category}
            <!-- svelte-ignore a11y-invalid-attribute -->
            <a rel="external" href="javascript:void(0)" on:click={() => showSubNavModal(nav.category)}>
                <div class="sub-nav-parent">{nav.category}</div>
            </a>
            {/if}
            {/each}
        </div>
    </div>
    <div class="sub-menu-right">
        <div class="search">search</div>
    </div>
</div>
<div class="sub-nav-modal">
    <div class="sub-nav-left">
        <div class="post-nav-area">
            <div class="sub-nav">
                {#if (jsonSubMenu || []).length > 0}
                {#each jsonSubMenu as nav, i}
                <div class="sub-nav-card">
                    <div class="sub-nav-menu parent" draggable="false">
                        <div class="sub-nav-area">
                            <div class="sub-nav-icon parent"></div>
                            <div class="sub-nav-name">{nav.menu}</div>
                        </div>
                    </div>
                    {#each nav.menuDetailGroup as childMenu}
                    <div class="sub-nav-menu child">
                        <a rel="external" href={`/tag/${childMenu.filterKeyword}`}>
                            <div class="sub-nav-area">
                                <div class="sub-nav-icon child" style="background-image: url({childMenu.emoji});"></div>
                                <div class="sub-nav-name">
                                        {childMenu.menuDetail}
                                </div>
                            </div>
                        </a>
                    </div>
                    {/each}
                </div>
                {/each}
                {/if}
            </div>
        </div>
    </div>
    <div class="sn-right"></div>
</div>
<style>
    .sub-menu,
    .sub-menu-left {
        display: flex;
    }
    .sub-menu {
        justify-content: space-between;
    }
	.sub-nav{
		display: flex;
		padding: 1rem 0.2rem;
        flex-wrap: wrap;
	}
	.sub-nav::-webkit-scrollbar {
		display: none;
	}
	.sub-nav-menu{
		display: flex;
		padding: 0.2rem 0rem;
		align-items: center;
	}
	.sub-nav-menu,
	.sub-nav-area{
		display: flex;
		padding: 0.2rem 0rem 0.2rem 0rem;
		align-items: center;
	}
    .sub-nav-card{
        display: flex;
        flex-direction: column;
        width: 16rem;
    }
	.sub-nav-menu.parent{
		justify-content: space-between;
	}
	.sub-nav-menu.child{
		align-items: center;
	}
	.sub-nav-menu.child::before{
		content: " ";
		font-size: 0.6rem;
		padding: 0rem 0.2rem 0rem 1.2rem;
	}
	.sub-nav-icon {
		padding-left: 2rem;
	}
	.sub-nav-icon.root {
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
	.sub-nav-icon.parent {
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
	.sub-nav-icon.child {
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
	details.sub-nav-toggle > summary {
		cursor: pointer;
		list-style-type: none;
		-webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
     -khtml-user-select: none; /* Konqueror HTML */
       -moz-user-select: none; /* Old versions of Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none; /* Non-prefixed version, currently */
	}
</style>
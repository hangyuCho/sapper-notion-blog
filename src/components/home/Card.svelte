<script lang="ts">
	export let item: any;
</script>
<div class="container">
    <div class="card">
        <div class="card-top">
            <!-- svelte-ignore a11y-missing-content -->
            <a rel="external" href="{`/${item.id}`}">
                {#if item.cover != null}
                <img src={item.cover.external.url} alt="cover" class="card-cover"/>
                {:else}
                <img src="/default_cover.jpeg" alt="cover" class="card-cover"/>
                {/if}
            </a>
            <div class="card-share-btn">
                <button type="button">
                    <span class="material-symbols-outlined">share</span>
                </button>
            </div>
        </div>
        <div class="card-post">
            <div class="card-post-top">
                <div class="card-post-badge">{item.properties.상세메뉴.select.name}</div>
                <div class="card-post-title">{item.properties.이름.title[0].text.content}</div>
                <div class="card-post-desc">{`${
                    item.properties.설명.rich_text[0].text.content.length < 60 ?
                    item.properties.설명.rich_text[0].text.content :
                    item.properties.설명.rich_text[0].text.content.substring(0, 60) + '...'
                    }`}</div>
            </div>
            <div class="card-post-bottom">
                <div class="card-post-bottom-left">
                    <div class="card-post-avatar"></div>
                    <div class="card-post-update-info">
                        <div class="card-post-updater">h-9</div>
                        <div class="card-post-update-at">{`${new Date(item.created_time).toLocaleString("ko-kr", {
                                year: "numeric",
                                month: "2-digit",
                                day: "2-digit",
                            })}`}
                        </div>
                    </div>
                </div>
                <div class="card-post-bottom-right">
                    <div class="card-post-bottom-comment-icon">Comment</div>
                    <div class="card-post-bottom-comment-count">(10)</div>
                </div>

            </div>
        </div>
    </div>
</div>
<style>
    .container{
        display: flex;
        padding: 1rem;
        flex: 1;
    }
    .card {
        display: flex;
        flex-direction: column;
        position: relative;
        border-radius: 1.4rem;
        width: 18rem;
        box-shadow: rgb(0 0 0 / 20%) 0px 3px 1px -2px, rgb(0 0 0 / 14%) 0px 2px 2px 0px, rgb(0 0 0 / 12%) 0px 1px 5px 0px;
    }
    .card-top {
        position: relative;
        display: flex;
        flex-direction: column;
    }
    .card-cover {
        width: -webkit-fill-available;
        background-color: #64e1b3;
        height: 10rem;
        border-top-left-radius: 1.4rem;
        border-top-right-radius: 1.4rem;
    }
    .card-share-btn {
        display: flex;
    }
    .card-share-btn button {
        position: absolute;
        height: 3rem;
        width: 3rem;
        border-radius: 1.8rem;
        border: 0px solid;
        background-color: #FFF;
        box-shadow: rgb(0 0 0 / 20%) 0px 3px 1px -2px, rgb(0 0 0 / 14%) 0px 2px 2px 0px, rgb(0 0 0 / 12%) 0px 1px 5px 0px;
        right: 10px;
        bottom: -16px;
    }
    .card-post {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 16rem;
    }
    .card-post-top,
    .card-post-bottom {
        padding: 1rem;
    }
    .card-post-badge {
        display: inline-block;
        border-radius: 0.8rem;
        min-width: 3rem;
        background-color: #ff5151;
        padding: 0rem 1rem;
        box-shadow: rgb(0 0 0 / 20%) 0px 3px 1px -2px, rgb(0 0 0 / 14%) 0px 2px 2px 0px, rgb(0 0 0 / 12%) 0px 1px 5px 0px;
        color: #FFF;
        text-align: center;
        font-size: 1rem;
    }
    .card-post-title {
        color: black;
        padding: 0.6rem 0rem;
    }
    .card-post-desc {
        font-size: 1rem;
    }
    .card-post-bottom {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    .card-post-bottom-left {
        display: flex;
        align-items: center;
    }
    .card-post-bottom-right {
        display: flex;
        align-items: center;
        font-size: 1rem;
    }

	.card-post-avatar {
		background-image: url("/favicon.png");
		height: 2rem;
		width: 2rem;
		border-radius: 1rem;
		background-size: cover;
		background-color: lightgoldenrodyellow;
	}
    .card-post-update-info {
        padding: 0rem 0.4rem;
    }
    .card-post-updater {
        font-size: 1rem;
        color: black;
    }
    .card-post-update-at {
        font-size: 0.7rem;
     }
    .material-symbols-outlined{
		font-family: Material Symbols Rounded;
    }
</style>
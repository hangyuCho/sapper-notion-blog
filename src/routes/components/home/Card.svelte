
<script lang="ts">
	export let item: any;
</script>
<div class="container">
    <div class="card">
        <div class="card-top">
            <!-- svelte-ignore a11y-missing-content -->
            <a rel="external" href="{`/${item.id}`}">
                <div class="card-cover"></div>
            </a>
            <div class="card-share-btn">
                <button type="button">
                    <span class="material-symbols-outlined">share</span>
                </button>
            </div>
        </div>
        <div class="card-post">
            <div class="card-post-top">
                <div class="card-post-badge">badge</div>
                <div class="card-post-title">{item.properties.이름.title[0].text.content}</div>
                <div class="card-post-desc">[aws]버킷생성...[aws]버킷생성...[aws]버킷생성...[aws]버킷생성...[aws]버킷생성...</div>
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
        width: 18em;
        padding: 1em;
    }
    .card {
        display: flex;
        flex-direction: column;
        position: relative;
        border-radius: 1.4em;
        box-shadow: rgb(0 0 0 / 20%) 0px 3px 1px -2px, rgb(0 0 0 / 14%) 0px 2px 2px 0px, rgb(0 0 0 / 12%) 0px 1px 5px 0px;
    }
    .card-top {
        position: relative;
        display: flex;
        flex-direction: column;
    }
    .card-cover {
        background-color: #64e1b3;
        height: 10em;
        border-top-left-radius: 1.4em;
        border-top-right-radius: 1.4em;
    }
    .card-share-btn {
        display: flex;
    }
    .card-share-btn button {
        position: absolute;
        height: 3em;
        width: 3em;
        border-radius: 1.8em;
        border: 0px solid;
        background-color: #FFF;
        box-shadow: rgb(0 0 0 / 20%) 0px 3px 1px -2px, rgb(0 0 0 / 14%) 0px 2px 2px 0px, rgb(0 0 0 / 12%) 0px 1px 5px 0px;
        right: 10px;
        bottom: -16px;
    }
    .card-post {
        display: flex;
        flex-direction: column;
    }
    .card-post-top,
    .card-post-bottom {
        padding: 1em;
    }
    .card-post-badge {
        border-radius: 0.8em;
        width: 3em;
        background-color: #ff5151;
        padding: 0em 0.4em;
        box-shadow: rgb(0 0 0 / 20%) 0px 3px 1px -2px, rgb(0 0 0 / 14%) 0px 2px 2px 0px, rgb(0 0 0 / 12%) 0px 1px 5px 0px;
        color: #FFF;
        text-align: center;
    }
    .card-post-title {
        color: black;
        padding: 0.6em 0em;
    }
    .card-post-desc {
        font-size: 0.8em;
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
    }

	.card-post-avatar {
		background-image: url("/favicon.png");
		height: 2em;
		width: 2em;
		border-radius: 1em;
		background-size: cover;
		background-color: lightgoldenrodyellow;
	}
    .card-post-update-info {
        padding: 0em 0.4em;
    }
    .card-post-updater {
        font-size: 1em;
        color: black;
    }
    .card-post-update-at {
        font-size: 0.7em;
     }
    .card-post-bottom-comment-icon {}
    .card-post-bottom-comment-count {}
</style>
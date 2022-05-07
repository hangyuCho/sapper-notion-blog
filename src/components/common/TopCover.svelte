<script lang="ts">
	export let src: string;
	export let jsonMenu: string;
</script>
<div class="top-cover" style="background-image: url({src});">
    <div class="top-cover-block"></div>
    <div class="p-area">
        <h1>긍정코딩세상 blog</h1>
        <p>사람은 행복하기로 마음먹은 만큼 행복하다.</p>
        <p> - 에이브러험 링컨 - </p>
        <br/>
        <button class="btn-move-to-post" type="button">show posts</button>
    </div>
</div>
<style>
	.sub-menu {
		display: flex;
		justify-content: space-between;
		color: rgb(151, 151, 151);
		padding: 0.8rem 1rem;
	}
	.sub-menu-left {
		display: flex;
	}
	.nav-sub {
		display: flex;
		padding: 0rem 0.6rem;
	}
	.nav-sub-parent {
		padding: 0rem 1rem;
	}
	.p-area {
		padding: 5rem;
	}
	.p-area .btn-move-to-post {
		width: 8rem;
		height: 3rem;
		border-radius: 1.3rem;
		border: 2px solid #579187;
		color: #579187;
		background-color: unset;
	}
	.top-cover {
		height: 100vh;
		background-size: cover;
		display: flex;
		flex-direction: column;
		width: -webkit-fill-available;
		z-index: 10;
		position: relative;
		color: #FFF;
		justify-content: space-between;
	}
	.top-cover-block {
		position: absolute;
		width: -webkit-fill-available;
		height: 100vh;
		background-color: #06110d;
		opacity: 0.7;
		z-index: -1;
	}
</style>
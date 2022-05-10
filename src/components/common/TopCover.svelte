<script lang="ts">
	export let src: string;
</script>
<div class="top-cover" style="background-image: url({src});">
    <div class="top-cover-block"></div>
    <div class="p-area">
        <h1>긍정코딩세상 blog</h1>
        <p>사람은 행복하기로 마음먹은 만큼 행복하다.</p>
        <p> - 에이브러험 링컨 - </p>
        <br/>
        <a class="btn-move-to-post" rel="external" href="#content-start" >show posts</a>
    </div>
</div>
<div id="content-start"/>
<style>
	.p-area {
		padding: 3rem;
	}
	.p-area .btn-move-to-post {
		width: 8rem;
		height: 3rem;
		border-radius: 1.3rem;
		border: 2px solid #579187;
		color: #579187;
		background-color: unset;
		padding: 1rem;
		text-decoration: none;
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
		justify-content: flex-end;
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
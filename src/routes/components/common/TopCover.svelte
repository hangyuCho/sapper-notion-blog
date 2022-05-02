<div class="top-cover">
    <div class="top-cover-block"></div>
    <div class="sub-menu">
        <div class="sub-menu-left">
            <div class="sub-menu-logo">
                logo
            </div>
            <div class="nav-sub">
                <div class="nav-sub-parent">nav1</div>
                <div class="nav-sub-parent">nav2</div>
                <div class="nav-sub-parent">nav3</div>
            </div>
        </div>
        <div class="sub-menu-right">
            <div class="search">search</div>
        </div>
    </div>
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
		padding: 0.8em 1em;
	}
	.sub-menu-left {
		display: flex;
	}
	.nav-sub {
		display: flex;
		padding: 0em 0.6em;
	}
	.nav-sub-parent {
		padding: 0em 1em;
	}
	.p-area {
		padding: 5em;
	}
	.p-area .btn-move-to-post {
		width: 8em;
		height: 3em;
		border-radius: 1.3em;
		border: 2px solid #579187;
		color: #579187;
		background-color: unset;
	}
	.top-cover {
		background-image: url("/top.webp");
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
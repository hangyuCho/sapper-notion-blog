<div class="left-profile-area">
    <div class="left-cover">
		<div class="left-picture"></div>
	</div>
    <div class="left-profile">
        <div class="title">
            <h3>긍정코딩세상 Blog</h3>
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
        <div class="nav-menu root">
            <div class="nav-name">ROOT</div>
            <div class="nav-count">(667)</div>
        </div>
        <div class="nav-menu parent">
			<div class="nav-area">
				<div class="nav-icon">
					<i class="devicon-android-plain"></i>
				</div>
				<div class="nav-name">MARK UP</div>
				<div class="nav-count">(20)</div>
			</div>
        </div>
        <div class="nav-menu child">
			<div class="nav-area">
				<div class="nav-icon">
					<i class="devicon-html5-plain"></i>
				</div>
				<div class="nav-name">HTML</div>
				<div class="nav-count">(17)</div>
			</div>
        </div>
        <div class="nav-menu child">
			<div class="nav-area">
				<div class="nav-icon">
					<i class="devicon-markdown-plain"></i>
				</div>
				<div class="nav-name">MarkDown</div>
				<div class="nav-count">(2)</div>
			</div>
        </div>
        <div class="nav-menu child">
			<div class="nav-area">
				<div class="nav-icon">
					<i class="devicon-devicon-plain"></i>
				</div>
				<div class="nav-name">BBCode</div>
				<div class="nav-count">(1)</div>
			</div>
        </div>
    </div>
</div>
<style>
	.left-profile-area {
		display: flex;
		flex-direction: column;
	}
	.left-cover {
		background-color: #64e1b3;
		width: -webkit-fill-available;
		height: 4em;
	}
	.left-picture {
		background-image: url("/favicon.png");
		position: absolute;
		left: 4.2em;
		top: 2.4em;
		height: 3.5em;
		width: 3.5em;
		border-radius: 0.6em;
		background-size: cover;
		background-color: lightgoldenrodyellow;
	}
	.left-profile {
		display: flex;
		margin-top: 2.4em;
		flex-direction: column;
		align-items: center;
	}
	.left-profile .title {
		color: black;
	}
	.visitors {
		display: flex;
		font-size: 0.8em;
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
		font-size: 1.4em;
		color: black;
	}
	.visitors .vis-category{
		font-size: 1em;
	}
	.nav{
		display: flex;
		flex-direction: column;
		padding: 1em 0.2em;
	}
	.nav-menu{
		display: flex;
		padding: 0.2em 0em;
		align-items: center;
	}
	.nav-menu,
	.nav-area{
		display: flex;
		padding: 0.2em 0em;
		align-items: center;
	}
	.nav-menu.parent{
		justify-content: space-between;
	}
	.nav-menu.child{
		align-items: center;
	}
	.nav-menu.parent::after{
		content: "\e5cf";
		font-family: Material Symbols Rounded;
		float: right; 
		color: grey; 
		padding: 0em 0.4em;
	}
	.nav-menu.child::before{
		content: "▶︎";
		font-size: 0.6em;
		padding: 0em 0.2em 0em 3em;
	}
	.nav-icon {
		padding: 0em 0.4em;
	}
</style>
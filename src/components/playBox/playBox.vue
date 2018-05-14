<template>
	<div class="play-box">
		<a href="#" class="p-l">
			<div class="p-l-l">
				<img src="../../assets/images/head.jpg">
			</div>
			<div class="p-l-c">
				<p class="song-name">哼</p>
				<p class="singer">冯提莫</p>
			</div>
		</a>
		<div class="p-r"></div>
	</div>
</template>

<script>
	
</script>

<style lang="scss">
	.play-box{
		width: 100%;
		height:153px;
		background: rgba(0,0,0,.9);
		position: fixed;
		bottom: 0;
		z-index: 10;
		.p-l{
			width: 65%;
			display: block;
			.p-l-l{
				width: 135px;
				height: 135px;
				margin: 9px 18px 9px 9px;
				img{
					width: 100%;
					height: 100%;
					border-radius: 10px;
				}
			}
			.p-l-c{
				width: 65%;
				.song-name{
					font-size: 30px;
					color: #fff;
					line-height: 1.5;
					text-overflow: ellipsis;
					overflow: hidden;
					white-space: nowrap;
				}
				.singer{
					font-size: 28px;
					color: #888;
					line-height: 1.3;
				}
			}
		}
	}
	.p-l-l,.p-l-c{
		display: inline-block;
		vertical-align: middle;
	}
</style>
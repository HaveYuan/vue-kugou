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
		<div class="p-r">
			<i class="btn-status" :class="status == true?'btn_pause':'btn_play'" @click="changeStatus"></i>
			<i class="btn-status btn_next"></i>
			<i class="btn-status btn_download"></i>
			<!-- <audio src="http://up.mcyt.net/?down/46496.mp3" autoplay="autoplay"></audio> -->
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				status: true
			}
		},
		mounted: function(){

		},
		methods: {
			//改变播放状态
			changeStatus: function() {
				console.log(status);
				if(this.status == true) {
					this.status = false;
				}else {
					this.status = true;
				}
			}
		}
	}
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
		.p-r{
			position: absolute;
			top: 40px;
			right: 35px;
			.btn-status{
				width: 65px;
				height: 65px;
				display: inline-block;
				vertical-align: middle;
				crusor: pointer;
				margin-left: 24px;
			}
			.btn_play{
				background: url(../../assets/images/play_icon.png) no-repeat;
				background-size: 100% 100%;
			}
			.btn_pause{
				background: url(../../assets/images/pause_icon.png) no-repeat;
				background-size: 100% 100%;
			}
			.btn_next{
				background: url(../../assets/images/next_icon.png) no-repeat;
				background-size: 100% 100%;
			}
			.btn_download{
				background: url(../../assets/images/download_icon.png) no-repeat;
				background-size: 100% 100%;
			}
		}
	}
	.p-l-l,.p-l-c{
		display: inline-block;
		vertical-align: middle;
	}
</style>
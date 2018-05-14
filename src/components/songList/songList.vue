<template>
	<div class="song-list-box">
		<div class="song-item" v-for="item in songList" @click="playMusic" :data-id="item.id">
			<span>{{item.songName}}-{{item.singer}}</span>
			<div class="download">
				<span class="down-icon"></span>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'songList',
		props: ['songList'],

		methods: {
			playMusic(e) {
				let id = e.currentTarget.getAttribute('data-id');
				console.log(id);
			}
		}
	}
</script>

<style lang="scss" scoped>
	.song-list-box{
		overflow: hidden;
		padding-left: 26px;
		.song-item{
			height: 80px;
			line-height: 80px;
			padding: 20px 66px 20px 0;
			font-size: 32px;
			border-bottom: 1px solid #e5e5e5;
			position: relative;
			span{
				display: block;
				width: 100%;
				height: 100%;
			}
			.download{
				height: 100%;
				width: 66px;
				position: absolute;
				right: 0;
				bottom: 0;
				text-align: center;
				.down-icon{
					width: 29px;
					height: 30px;
					margin: 43px 0 0 20px;
					background: url(../../assets/images/download_icon_2.png) no-repeat;
					background-size: 100% 100%;
				}
			}
		}
	}
</style>
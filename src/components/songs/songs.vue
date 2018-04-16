<template>
	<div class="songs-box">
		<home></home>
		<song-list :songList="songList"></song-list>
		<div>12	{{id}}</div>
	</div>
</template>

<script>
	import home from '../swiper/home/home';
	import songList from '../songList/songList';

	export default{
		data() {
			return {
				songList: [],
				id: '这是默认参数'
			}
		},

		components: {
			home,
			songList
		},

		mounted: function(){
			this.getData();
			let id = this.$route.params.id2;
			if(id) {
				this.id = id;
			}
		},
		
		methods: {
			getData() {
				this.$ajax.get('https://www.easy-mock.com/mock/5ac9c65cc566697def6c0d41/kougou/songlist')
				.then(res => {
					this.songList = res.data.songList;
				})
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
				font-size: 28px;
				border-bottom: 1px solid #e5e5e5;
				position: relative;
				overflow: hidden;
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

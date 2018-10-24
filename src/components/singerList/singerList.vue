<template>
	<div class="singer-list-box">
		<div class="back-box">
			<span class="go-back" @click="toSinger">
				<i></i>
			</span>
			<span>热门歌手</span>
		</div>
		<div class="singer-list">
			<div class="singer-item" v-for="item in singerList" @click="toListInfo">
				<div class="i-l">
					<img :src="item.singerPicUrl">
				</div>
				<div class="i-r">
					<span>{{item.singerName}}</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>

	export default {
		name: 'singerList',

		data() {
			return {
				singerList: []
			}
		},

		mounted: function() {
			this.$ajax.get('https://www.easy-mock.com/mock/5ac9c65cc566697def6c0d41/kougou/singerList')
			.then(res => {
				console.log(res);
				this.singerList = res.data.singerList;
			})
		},

		methods: {
			//回到歌手列表
			toSinger() {
				this.$router.push({ name: 'singer'});
			},

			//跳转到歌曲列表
			toListInfo() {
				this.$router.push({ name: 'listInfo', query: {pageFlag: 3 } });
			}
		}
	}
</script>

<style lang="scss" scoped>
	.singer-list-box{
		margin-top: 94px;
		overflow: hidden;
	}
	.back-box{
		position: fixed;
		top: 94px;
		background: #fff;
		width: 100%;
		height: 100px;
		line-height: 100px;
		text-align: center;
		font-size: 32px;
		box-shadow: 0 8px 8px 0 #f4f4f4;
		.go-back{
			height: 100px;
			width: 80px;
			display: block;
			float: left;
			position: absolute;
			i{
				display: block;
				width: 24px;
				height: 40px;
				background: url(../../assets/images/goback.png);
				background-size: 100% 100%;
				position: absolute;
				top: 50%;
				left: 50%;
				margin-top: -20px;
				margin-left: -12px;
			}
		}
	}
	.singer-list{
		margin-top: 100px;
		padding-left: 26px;
		background: #fff;
		.singer-item{
			padding: 26px 0;
			border-bottom: 1px solid #e5e5e5;
			overflow: hidden;
			.i-l{
				width: 130px;
				height: 130px;
				float: left;
				margin-right: 26px;
				img{
					width: 100%;
					height: 100%;
				}
			}
			.i-r{
				min-height: 130px;
				line-height: 130px;
				font-size: 32px;
				color: #333;
				text-overflow: ellipsis;
				overflow: hidden;
				white-space: nowrap;
			}
		}
	}
</style>
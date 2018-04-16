<template>
	<div class="sheet-box">
		<div class="sheet-item" v-for="item in songSheet" @click="toListInfo">
			<img class="sheet-img" :src="item.sheetImgUrl">
			<div class="sheet-info">
				<span class="sheet-title">{{item.sheetTitle}}</span>
				<div class="num-box">
					<span class="listen-num"></span>
					<em>{{item.sheetListen}}</em>
				</div>
			</div>
			<span class="arrow-right"></span>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			songSheet: []
		}
	},
	mounted: function() {
		this.getSheet();
	},

	methods:{

		//获取音乐榜信息
		getSheet() {
			this.$ajax.get('https://www.easy-mock.com/mock/5ac9c65cc566697def6c0d41/kougou/songSheet')
			.then(res => {
				console.log(res);
				this.songSheet = res.data.songSheet;
			})
		},

		//跳转到歌单详情页
		toListInfo() {
			this.$router.push({ name: 'listInfo', query: {pageFlag: 2} });
		}
	}
}
</script>

<style lang="scss">
	.sheet-box{
		padding-left: 30px;
		height: 100%;
		overflow: auto;
		margin-top: 162px;
		.sheet-item{
			padding: 28px 58px 28px 226px;
			border-bottom: 1px solid #ccc;
			overflow: hidden;
			position: relative;
			.sheet-img{
				width: 190px;
				height: 190px;
				float: left;
				position: absolute;
				left: 0;
			}
			.arrow-right{
				width: 32px;
				height: 56px;
				position: absolute;
				right: 26px;
				top: 50%;
				margin-top: -28px;
				background: url(../../assets/images/arrow_icon.png) no-repeat;
				background-size: 100% 100%;
			}
		}
	}
	.sheet-info{
		display: flex;
		flex-direction: column;
		justify-content: center;
		height: 100%;
		min-height: 190px;
		margin-right: 15px;
		.sheet-title{
			display: block;
			float: left;
			font-size: 36px;
			color: #333;
			margin-bottom: 6px;
		}
		.num-box{
			font-size: 14px;
			color: #9b9b9b;
			.listen-num{
				width: 20px;
				height: 20px;
				display: inline-block;
				background-image: url(../../assets/images/icon_music.png);
				background-size: 100% 100%;
			}
		}
	}
</style>

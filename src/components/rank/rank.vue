<template>
	<div class="rank-box">
		<!-- <div class="rank-item" v-for="item in rankList">
			<img class="rank-img" :src="item.rankPicUrl">
			<span class="rank-title">{{item.rankName}}</span>
			<span class="arrow-right"></span>
		</div> -->
		<div class="rank-item" v-for="item in rankList" @click="toListInfo" :id="item.id">
			<img class="rank-img" :src="item.rankPicUrl">
			<span class="rank-title">{{item.rankName}}</span>
			<span class="arrow-right"></span>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			rankList: []
		}
	},
	mounted: function() {
		this.getRank();
	},

	methods:{

		//获取音乐榜信息
		getRank() {
			this.$ajax.get('https://www.easy-mock.com/mock/5ac9c65cc566697def6c0d41/kougou/rankList')
			.then(res => {
				console.log(res);
				this.rankList = res.data.rankList;
			})
		},

		//跳转到榜单详情页
		toListInfo(e) {
			let id = e.currentTarget.getAttribute('id');
			console.log(e.currentTarget.getAttribute('id'));
			this.$router.push({ name: 'listInfo', query: {id: id, pageFlag: 1} });
		}
	}
}
</script>

<style lang="scss">
	.rank-box{
		padding-left: 30px;
		height: 100%;
		overflow: auto;
		.rank-item{
			height: 190px;
			padding: 28px 58px 28px 226px;
			border-bottom: 1px solid #ccc;
			overflow: hidden;
			position: relative;
			.rank-img{
				width: 190px;
				height: 190px;
				float: left;
				position: absolute;
				left: 0;
			}
			.rank-title{
				display: flex;
				align-items: center;
				float: left;
				font-size: 40px;
				color: #333;
				height: 100%;
				width: 95%;
				overflow: hidden;
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
</style>

<template>
	<div class="list-info-wrap">
	    <div class="info-top">
	        <div class="back-box">
	            <span class="back" @click="reBack">
	            	<i></i>
	            </span>
	            <span>酷狗飙升榜</span>
	        </div>
	        <img src="../../assets/images/info-img1.png">
	        <div class="data-box">
	        	<span>上次更新时间：2018-04-13</span>
	        </div>
	    </div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				pageFlag: 0,     //返回不同类型页面的标志
				id: null,    //参数id
			}
		},

		mounted: function() {
			let flag = this.$route.query;
			console.log(flag);
			this.pageFlag = flag.pageFlag;
		},

		methods: {
			//返回
			reBack() {
				var flag = this.pageFlag;
				if(flag == 1) {
					this.$router.push( {name: 'rank'} );
				}else if(flag == 2) {
					this.$router.push( {name: 'sheet'} );
				}else if(flag == 3) {
					//this.$router.push( {name: ''} );

				}else {
					this.$router.push( {name: 'songs'} );
				}
			}
		}
	}
</script>

<style lang='scss'>
	.info-top{
		width: 100%;
		height: 450px;
		position: relative;
		overflow: hidden;
		.back-box{
			width: 100%;
			height: 100px;
			line-height: 100px;
			text-align: center;
			background:-webkit-linear-gradient(top,rgba(0,0,0,.6),transparent);
			font-size: 36px;
			color: #fff;
			position: relative;
			.back{
				height: 100px;
				width: 80px;
				display: block;
				float: left;
				position: absolute;
				i{
					display: block;
					width: 24px;
					height: 40px;
					background: url(../../assets/images/goback_1.png);
					background-size: 100% 100%;
					position: absolute;
					top: 50%;
					left: 50%;
					margin-top: -20px;
					margin-left: -12px;
				}
			}
		}
		img{
			margin-top: -248px;
			width: 100%;
		}
		.data-box{
			width: 100%;
			height: 100px;
			background: -webkit-linear-gradient(bottom,rgba(0,0,0,.6),transparent);
			position: absolute;
			bottom: 0;
			left: 0;
			span{
				color: #fafff2;
				position: absolute;
				bottom: 35px;
				left: 40px;
				font-size: 28px;
			}
		}
	}
</style>
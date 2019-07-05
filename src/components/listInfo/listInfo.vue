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
	    <div class="rank-info" v-if="pageFlag == 2 || pageFlag == 3" :class="iconFlag == 0?'':'height-auto'">
	    	<p>愿你三冬暖,愿你春不寒,愿你一路都有良人相伴愿你三冬暖,愿你春不寒,愿你一路都有良人相伴</p>
	    	<div class="intro-icon-box"  @click="openInfo">
	    		<i class="intro-icon"></i>
	    	</div>
	    </div>
	    <div class="rank-list">
	    	<song-list :song-list="songList"></song-list>
	    </div>
	</div>
</template>

<script>
	import songList from '../songList/songList';

	export default {
		data() {
			return {
				pageFlag: 0,    	  //返回不同类型页面的标志
				id: null,    		  //参数id
				songList: [],         //榜单歌曲列表
				iconFlag: 0           //开关控制状态
			}
		},

		components: {
			songList
		},

		mounted: function() {
			let flag = this.$route.query;
			this.pageFlag = flag.pageFlag;

			this.$ajax.get('https://www.easy-mock.com/mock/5ac9c65cc566697def6c0d41/kougou/ListInfo')
			.then(res => {
				this.songList = res.data.songList;
			})
		},

		methods: {
			//返回
			reBack() {
				let flag = this.pageFlag;
				this.$router.go(-1);
				// if(flag == 1) {
				// 	this.$router.push( {name: 'rank'} );
				// }else if(flag == 2) {
				// 	this.$router.push( {name: 'sheet'} );
				// }else if(flag == 3) {
				// 	this.$router.push( {name: 'singerList'} );
				// }else {
				// 	this.$router.push( {name: 'songs'} );
				// }
			},

			//展开信息
			openInfo() {
				if(this.iconFlag == 0) {
					this.iconFlag = 1;
				}else {
					this.iconFlag = 0;
				}
			}
		}
	}
</script>

<style lang='scss'>
	.info-top{
		width: 100%;
		height: 450px;
		margin-top: 94px;
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
			position: fixed;
			top: 94px;
			z-index: 1;
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
			margin-top: -160px;
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
	.rank-info{
		width: 100%;
		height: 80px;
		font-size: 28px;
		padding: 20px 73px 20px 26px;
		box-sizing: border-box;
		line-height: 1.8;
		box-shadow: 0 8px 8px 0 #f4f4f4;
		overflow: hidden;
		position: relative;
		.intro-icon-box{
			width: 67px;
			height: 100%;
			box-sizing: border-box;
			position: absolute;
			top: 0;
			right: 0;
			text-align: center;
		}
		.intro-icon{
			background-image: url(../../assets/images/close_icon.png);
			background-size: 100% 100%;
		}
	}
	.height-auto{
		height: auto;
		.intro-icon{
			background-image: url(../../assets/images/open_icon.png);
			background-size: 100% 100%;
		}
	}
	.intro-icon{
		display: inline-block;
		width: 35px;
		height: 35px;
		vertical-align: text-bottom;
		margin-top: 24px;
	}
</style>
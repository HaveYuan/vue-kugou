<template>

  <div class="bd">
  	<ul class="singer-class-list" v-for="item in singerClass">
  		<li v-for="name in item.name" @click="toSingerList">
  			<a href="#">
  				{{name.name}}
  				<i class="arrow-icon"></i>
  			</a>
  		</li>
  	</ul>
  </div>
</template>

<script>
export default {
	data() {
		return {
			singerClass: []
		}
	},
	
	mounted: function() {
		this.getSingerClass();
	},

	methods: {
		//获取歌手分类
		getSingerClass() {
			this.$ajax.get('https://www.easy-mock.com/mock/5ac9c65cc566697def6c0d41/kougou/singerClass')
			.then(res => {
				console.log(res);
				this.singerClass = res.data.singerClass;
			})
		},

		//跳转到歌手列表
		toSingerList() {
			this.$router.push({ name: 'singerList' });
		}
	}
}
</script>

<style lang="scss">
	.bd{
		height: 100%;
		overflow: auto;
		margin-top: 162px;
	}
	.singer-class-list{
		margin: 28px 20px 25px;
		border: 2px solid #e4e4e4;
		background: #fbfbfb;
		border-radius: 12px;
		li{
			border-top: 1px solid #e4e4e4;
			.arrow-icon{
				width: 26px;
				height: 46px;
				display: block;
				float: right;
				background-image: url(../../assets/images/arrow_icon.png);
				background-size: 100% 100%;
			}
		}
		li:first-child{
			border-top: none;
		}
		a{
		    padding: 28px;
		    display: block;
		    font-size: 32px;
		    color: #333;
		}
	}
</style>

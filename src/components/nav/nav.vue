<template>
	<div class="nav">
		<router-link replace exact :to="{name:'songs',params:{id2:'草尼马'}}">新歌</router-link>
		<router-link replace to="rank">排行</router-link>
		<router-link replace to="sheet">歌单</router-link>
		<router-link replace to="singer">歌手</router-link>
	</div>
	
</template>

<script>
	export default{
		name: 'navLink',
	}
</script>

<style lang="scss">
	.nav{
		width: 100%;
		height: 68px;
		background: #fff;
		box-shadow: 0 12px 12px 0 #f4f4f4;
		padding: 0 14px;
		box-sizing: border-box;
		position: fixed;
		top: 94px;
		z-index: 1;
		a{
			display: block;
			float: left;
			width: 25%;
			height: 100%;
			font-size: 28px;
			color: #333;
			line-height: 68px;
			text-align: center;
			position: relative;
		}
		.router-link-exact-active:after{
			content: '';
			width: 100%;
			height: 4px;
			background: #33a3f5;
			position: absolute;
			bottom: 0;
			left: 0;
			
		}
	}
	.active-class{
		color: #86b0e5;
	}
</style>
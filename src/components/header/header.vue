<template>
  <div class="head">
  	<a href="javascript:void(0)" class="logo"></a>
  	<a href="javascript:void(0)" class="search"></a>
  </div>
</template>

<script>
export default {
	name: 'headLink'
}
</script>

<style lang="scss" scoped>
	.head{
		height: 94px;
		width: 100%;
		line-height: 94px;
		background: #2ca2f9;
		position: fixed;
		top: 0;
		z-index: 1;
		.logo{
			display: inline-block;
			width: 204px;
			height: 47px;
			line-height: 94px;
			margin-left: 24px;
			background: url(../../assets/images/logo.png) no-repeat;
			background-size:100% 100%;
			vertical-align: middle;
		}
		.search{
			display: block;
			width: 48px;
			height: 48px;
			background: url(../../assets/images/search.png) no-repeat;
			background-size:100% 100%;
			position: absolute;
			right: 22px;
			top: 50%;
			margin-top: -24px;
		}
	}
</style>

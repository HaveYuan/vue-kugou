<template>
	<div class="swiper-container">
		<div class="swiper-wrapper">
			<div class="swiper-slide" v-for="item in listImg">
				<a href="javascript:void(0)">
					<img :src="item.url" alt="轮播图">
				</a>
			</div>
		</div>
		<div class="swiper-pagination"></div>
	</div>
</template>

<script>
	import Swiper from 'swiper';
	import 'swiper/dist/css/swiper.min.css';

	export default {
		props: ['listImg'],
		mounted() {
			let swiper = new Swiper('.swiper-container', {
				pagination: {
					el: '.swiper-pagination',
					clickable: true
				},
				speed: 600,
				autoplay: {
					delay: 4000,
					disableOnInteraction: false
				},
			})
		}
	}
</script>

<style lang="scss">
	.swiper-container {
	    width: 100%;
	    height: 300px;
	    margin-top: 12px;
	    .swiper-wrapper {
	        width: 100%;
	        height: 100%;
	    }
	    .swiper-slide {
	        background-position: center;
	        background-size: cover;
	        width: 100%;
	        height: 100%;
	        img {
	            width: 100%;
	            height: 100%;
	        }
	    }
	    .swiper-pagination-bullet {
	        width: 16px;
	        height: 16px;
	        display: inline-block;
	        background: #fff;
	    }
	}
</style>
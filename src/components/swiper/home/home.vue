<template>
	<app-banner :listImg="listImg"></app-banner>
</template>

<script>
	import banner from '../banner/banner.vue';
	import pic1 from '../../../assets/images/1.jpg';
	import pic2 from '../../../assets/images/2.jpg';
	import pic3 from '../../../assets/images/3.jpg';
	import pic4 from '../../../assets/images/4.jpg';
	import pic5 from '../../../assets/images/5.jpg';

	export default {
		name: 'home',

		data() {
			return{
				listImg: [
					{
						url: pic1
					},
					{
						url: pic2
					},
					{
						url: pic3
					},
					{
						url: pic4
					},
					{
						url: pic5
					},
				]
			}
		},

		components: {
			'app-banner': banner
		}
	}
	
</script>

<style lang="scss">
	
</style>
<template>
	<div class="songs-box">
		<home></home>
		<song-list :songList="songList"></song-list>
		<div>12	{{id}}</div>
	</div>
</template>

<script>
	import home from '../swiper/home/home';
	import songList from '../songList/songList';
	

	export default{
		data() {
			return {
				songList: [],
				id: '这是默认参数'
			}
		},

		components: {
			home,
			songList
		},

		mounted: function(){
			this.getData();
			let id = this.$route.params.id2;
			if(id) {
				this.id = id;
			}
		},
		
		methods: {
			getData() {
				this.$ajax.get(
					'https://www.easy-mock.com/mock/5ac9c65cc566697def6c0d41/kougou/songlist'
				)
				.then(res => {
					this.songList = res.data.songList;
				})
			}
		}
	}
</script>

<style lang="scss" scoped>

</style>

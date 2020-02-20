<template>
	<div id="home">
		<h1>{{ title }}</h1>
		<img alt="Vue logo" src="../assets/logo.png" class="m-auto">
	</div>
</template>

<script type="text/javascript">
	import {mapGetters} from 'vuex'
	
	export default {
		data() {
			return {
			
			}
		},
		computed: mapGetters([
			'title'])
	}
</script>
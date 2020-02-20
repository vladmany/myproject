<template>
	<div id="notification">
		<div v-colored:background='color'>
			{{ message || "" }}
			<button class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded" @click='cancel'>X</button>
		</div>
	</div>
</template>

<script type="text/javascript">
	export default {
		name: "Notification",
		props: ["message",'status'],
		data() {
			return {
				colors: {
					'error': 'red',
					'success': 'green',
					'warning': 'yellow',
					'default': 'gray'
				}
			}
		},
		methods: {
			cancel() {
				this.$emit('cancel')
			}
		},
		computed: {
			color() {
				return this.colors[this.status] || this.colors['default']
			}
		}
	}
</script>

<style type="text/css" scoped="">
	
</style>
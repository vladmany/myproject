<template>
	<div id="user-profile">
		<h1>Профиль пользователя[{{ id }}]:</h1>
		<p>Имя: {{this.$store.getters.getNameById(id)}}</p> 
		<p>Фамилия: {{this.$store.getters.getSurnameById(id)}}</p>
		<button @click="back" class="bg-blue-500 hover:bg-blue-400 text-white py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">Back</button>
	</div>
</template>

<script>

	export default {
		// props: ['user'],
		components: {},
		props: {
		},
		name: "Profile",
		data() {
			return {
				id: this.$route.params["id"],
			}
		},
		methods: {
			back() {
				this.$router.push('/users')
			}
		},
		filters: {
		},
		computed: {
			users(){
				return this.$store.state.users
			}
		}
	}
</script>

<style scoped>
	
</style>

<template>
	<div id="user-list">
		<h1>Список пользователей {{ counter }} </h1>

		<ul>
			<li v-for="user of users" :key="user.id">
				<router-link tag="a" :to="`/users/${user.id}`">{{ user.name }} {{ user.surname }}</router-link>
			</li>
			<!-- <router-link v-for="user of users" :key='user' tag=''> {{ user.name }} {{ user.surname }} </router-link> -->
		</ul>
	</div>
</template>

<script type="text/javascript">
	export default {
		data() {
			return {
			
			}
		},
		methods: {
			getUsers() {
				this.$store.dispatch('getUsers')
			}
		},
		computed: {
			counter(){
				return this.$store.state.counter
			},
			users(){
				return this.$store.getters.users
			}
		},
		created() {
			this.getUsers()
		}
	}
</script>
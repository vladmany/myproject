<template>
	<div id="profile-form">
		<div>
			<label for="name">Name </label>
			<input class="appearance-none bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="text" id="name" v-model="name">
		</div>
		<div>
			<label for="surname">Surname </label>
			<input class="appearance-none bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="text" id="surname" v-model="surname">
		</div>
		<div>
			<label for="surname">AboutMe </label>
			<input class="appearance-none bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="textarea" id="aboutMe" v-model="aboutMe">
		</div>
		
		<div>
			<button @click="save" class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">Save</button>
			<button @click="cancel" class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">Cancel</button>
		</div>
	</div>
</template>

<script>
	import {eventBus} from "../../main"

	export default {
		props: {
			user: {
				type: Object,
				required: true
			}
		},
		name: "ProfileForm",
		data(){
			return {
				name: "",
				surname: "",
				aboutMe: ""
			}
		},
		methods: {
			save() {
				let name = this.name
				let surname = this.surname
				let aboutMe = this.aboutMe

				this.$emit('save-user', {name, surname, aboutMe})
				eventBus.$emit('show-notify', {
					message: 'User Saved',
					status: "success"
				})
				this.cancel()
			},
			cancel() {
				this.$emit('cancel')
			}
		},
		created() {
			this.name = this.user.name
			this.surname = this.user.surname
			this.aboutMe = this.aboutMe
		}
	}
</script>

<style scoped>
	
</style>

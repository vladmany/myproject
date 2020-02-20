<template>
  <div id="app" class="text-center">
    <router-link active-class="font-bold" tag='button' exact to="/" class="mr-5 bg-blue-500 hover:bg-blue-400 text-white py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">Home</router-link>
    <router-link active-class="font-bold" tag='button' :to="`/users`" class="bg-blue-500 hover:bg-blue-400 text-white py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">User List</router-link>
    <router-link active-class="font-bold" tag='button' :to="`/employees`" class="ml-5 bg-blue-500 hover:bg-blue-400 text-white py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">Employees List</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {
  },
  data() {
    return {
      
    }
  }
}
</script>

<style src="./assets/css/talewind.css">
</style>

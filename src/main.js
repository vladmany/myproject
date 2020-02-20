import Vue from 'vue'
import App from './App.vue'
import colored from './directives/colored'
import VueRouter from 'vue-router'
import router from "./routes"
import store from './store'


//vue-router
Vue.use(VueRouter)

Vue.config.productionTip = false

Vue.directive('colored', colored)

export const eventBus = new Vue()

Vue.filter('uppercase', str => str.toUpperCase())

new Vue({
  render: h => h(App),
  store, router
}).$mount('#app')

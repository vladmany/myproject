import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		users: [
			// {id: 1, name: 'Роман', surname: 'Сидоров'},
			// {id: 2, name: 'Алексей', surname: 'Карпов'},
			// {id: 3, name: 'Руслан', surname: 'Иванов'},
			// {id: 4, name: 'Богдан', surname: 'Путин'},
			// {id: 5, name: 'Андрей', surname: 'Зеленский'},
			// {id: 6, name: 'Светлана', surname: 'Гончарук'},
			// {id: 7, name: 'Катерина', surname: 'Богдан'},
			// {id: 8, name: 'Георгий', surname: 'Еременко'},
			// {id: 9, name: 'Владимир', surname: 'Тимошенко'}
		],
		title: "Home Page",
		counter: 555
	},
	getters: {
		title(state) {
			return state.title + " First User: " + state.users[0].name
		},
		getNameById: state => id => {
			// return state.users.find(user => user.id === id)[+id].name + " " + state.users.find(user => user.id === id)[+id].surname
			return state.users.find(user => user.id === +id).name;
		},
		getSurnameById: state => id=> {
			return state.users.find(user => user.id === +id).surname;
		},
		users(state){
			return state.users
		}
	},
	mutations: {
        changeName(state, payload) {
			state.users.find(user => user.id === payload.id).name = payload.name  
        },
        fillUsers(state, payload) {
			state.users = payload
        }
    },
    actions: {
		getUsers(context){
			axios.get('https://jsonplaceholder.typicode.com/users')
				.then(res => context.commit('fillUsers', res.data))
		}
    }
})
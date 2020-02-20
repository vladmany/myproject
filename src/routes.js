import VueRouter from 'vue-router'
import Home from './components/Home'
import UsersList from './components/User/List'
import EmployeesList from './components/Employee/List'
import UserProfile from "./components/User/Profile"
import Error404 from "./components/Support/404"

export default new VueRouter({
	routes: [
	{
		path: '', //http://localhost:8000/ 
		component: Home
	},
	{
		path: '/users', 
		component: UsersList
	},
	{
		path: '/employees', 
		component: EmployeesList
	},
	{
		path: '/users/:id',
		component: UserProfile
	}
	,
	{
		path: '*',
		component: Error404
	}
	],
	mode: 'history'
})
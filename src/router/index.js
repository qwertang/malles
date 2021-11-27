import Vue from 'vue'
import VueRouter from 'vue-router'

//懒加载es6语法写
const Home = () => import('../views/home/Homes')
const Categar = () => import('../views/categar/Careart')
const Cart = () => import('../views/cart/Cart')
const Profile = () => import('../views/profile/Profile')
const Detail = () => import('../views/detail/Detail')

//1.安装插件
Vue.use(VueRouter)

//2.创建router
const routes = [
	//创造路由对象
	{
	  path: '/',
	  redirect: '/home'
	},
	{
	  path:'/home',
	  component:Home,

	},
	{
	  path:'/categar',
	  component:Categar
	},
	{
	  path:'/cart',
	  component:Cart
	},
	{
	  path:'/profile',
	  component:Profile
	},
	{
		path:'/detail/:iid',
		component:Detail
	},
]

const router = new VueRouter({
	routes,
	// mode:'history'
})

//3.导出router
export default router
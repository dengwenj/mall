import Vue from "vue";
import VueRouter from "vue-router";

// 安装插件
Vue.use(VueRouter)

// 路由懒加载
const Home = () =>
  import ('views/home/Home')
const Cart = () =>
  import ('views/cart/Cart')
const Category = () =>
  import ('views/category/Category')
const Profile = () =>
  import ('views/profile/Profile')

// 创建路由实例

const routes = [{
  path: '',
  redirect: '/home'
}, {
  path: '/category',
  component: Category
}, {
  path: '/cart',
  component: Cart
}, {
  path: '/home',
  component: Home
}, {
  path: '/profile',
  component: Profile
}, ]

const router = new VueRouter({
  routes,
  mode: 'history'
})

// 导出
export default router
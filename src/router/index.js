import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/Home'
import Product from '@/components/Products/Product'
import ProductList from '@/components/Products/ProductList'
import NewProduct from '@/components/Products/NewProduct'
import Checkout from '@/components/User/Checkout'
import Login from '@/components/Auth/Login'
import Register from '@/components/Auth/Register'
import Guest from '@/components/Guest'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/product/:id',
    name: 'product',
    component: Product
  },
  {
    path: '/list',
    name: 'list',
    component: ProductList
  },
  {
    path: '/new',
    name: 'new',
    component: NewProduct
  },
  {
    path: '/checkout',
    name: 'checkout',
    component: Checkout
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },{
    path: '/guest',
    name: 'guest',
    component: Guest
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

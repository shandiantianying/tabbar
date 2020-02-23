import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/views/home/Home'
import Category from '@/components/views/category/Category'
import Cart from '@/components/views/cart/Cart'
import Profile from '@/components/views/profile/Profile'
Vue.use(Router)

export default new Router({
  routes: [
    {
    path:'',
    redirect:'/home'
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    } , {
      path: '/category',
      name: 'Category',
      component: Category
    },  {
      path: '/cart',
      name: 'Cart',
      component: Cart
    },  {
      path: '/profile',
      name: 'Profile',
      component: Profile
    }

  ],mode:'history'
})

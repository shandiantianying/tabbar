import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/views/home/Home'
import Category from '@/components/views/category/Category'
import Cart from '@/components/views/cart/Cart'
import Profile from '@/components/views/profile/Profile'
import GoodsList from '@/components/views/home/GoodsList'
import Mint from 'mint-ui';
Vue.use(Mint);
Vue.use(Router)

export default new Router({
  routes: [
    {
    path:'',
    redirect:'/goodslist'
    },
    {
      path: '/goodslist',
      name: 'goodsist',
      component: GoodsList
    } ,
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

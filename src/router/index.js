import Vue from 'vue'
import Router from 'vue-router'
import MainView from '@/pages/main-view'
import ShopView from '@/pages/shop-view'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MainView',
      component: MainView
    }, {
      path: '/shop',
      name: 'ShopView ',
      component: ShopView
    }
  ]
})

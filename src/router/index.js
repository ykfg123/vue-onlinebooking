import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/page/index'
import OrderList from '@/page/order/orderList'
import HomePage from '@/page/homePage'
import Login from '@/page/login/login'
import SystemManager from '@/page/system/systemManager'
import StaffManager from '@/page/staff/staffManager'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Index
    }, {
      path: '/login',
      component: Login
    },{
      path: '/home',
      component: HomePage, component: HomePage,
      children: [
        {path: '/', name: 'OrderList', component: OrderList},
        {path: '/orderList', name: 'OrderList', component: OrderList},
        {path: '/systemManager', name: 'SystemManager', component: SystemManager},
        {path: '/staffManager', name: 'StaffManager', component: StaffManager},
      ]
    }
  ]
})
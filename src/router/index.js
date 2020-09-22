import Vue from 'vue'
import VueRouter from 'vue-router'
//import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: ()=>import('../views/App.vue'),
    // children:[
    //   {
    //     path: '/billing',
    //     name: 'billing',
    //     component: () => import('../views/layout/Sidebar/Billing'),
    //     meta: { title: '月記帳本', icon: 'el-icon-notebook-1' }
    //   },
    //   {
    //     path: '/account',
    //     name: 'account',
    //     component: () => import('../views/layout/Sidebar/Account'),
    //     meta: { title: '帳戶管理', icon: 'el-icon-money' }
    //   },
    //   {
    //     path: '/charts',
    //     name: 'charts',
    //     component: () => import('../views/layout/Sidebar/Charts'),
    //     meta: { title: '圖表分析', icon: 'el-icon-pie-chart' }
    //   }
    // ]
  },
  {
    path: '/billing',
    name: 'billing',
    component: () => import('../views/layout/Sidebar/Billing'),
    meta: { title: '月記帳本', icon: 'el-icon-notebook-1' }
  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // },
]

const router = new VueRouter({
  routes
})

export default router

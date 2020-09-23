import Vue from 'vue'
import VueRouter from 'vue-router'
//import Home from '../views/Home.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    //component: ()=>import('../views/App.vue'),
    //component: ()=>import('../views/layout/Sidebar/Charts'),
    component: {template: '<div>Home</div>'},
    //component: {template: '<router-view></router-view>'},
    
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import('../views/layout/Sidebar/Admin'),
    children:[
      {
        path: 'billing',
        name: 'billing',
        component: () => import('../views/layout/Sidebar/Billing'),
        meta: { title: '月記帳本', icon: 'el-icon-notebook-1',path:'/admin/billing' }
      },
      {
        path: 'account',
        name: 'account',
        component: () => import('../views/layout/Sidebar/Account'),
        meta: { title: '帳戶管理', icon: 'el-icon-money',path:'/admin/account' }
      },
      {
        path: 'charts',
        name: 'charts',
        component: () => import('../views/layout/Sidebar/Charts'),
        meta: { title: '圖表分析', icon: 'el-icon-pie-chart',path:'/admin/charts' }
      }
    ]
  }

  
]

const router = new VueRouter({
  routes
})

export default router

import Vue from 'vue'
import VueRouter from 'vue-router'

// import Layout from '@/layout'
import componentsRouter from './modules/components'
import Monitor from '../pages/test/index.vue'
import Home from '../pages/home/index.vue'
Vue.use(VueRouter)

export const routes = [
  // {
  //   path: '',
  //   component: Layout,
  //   redirect: '/home',
  //   children: [
  //     {
  //       path: 'home',
  //       component: () => import('@/pages/home/index'),
  //       name: 'Home',
  //       meta: { title: '监控列表' }
  //     }
  //   ]
  // },
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home,
    meta: { keepAlive: true }
  },
  {
    path: '/monitor',
    component: Monitor
    // component: Layout,
    // children: [
    //   {
    //     path: 'test',
    //     component: () => import('../pages/test/index.vue'),
    //     name: 'Test',
    //     meta: { title: '详情' }
    //   }
    // ]
  },
  componentsRouter
]

const createRouter = () => new VueRouter({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes
})

const router = createRouter()

export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher
}

export default router

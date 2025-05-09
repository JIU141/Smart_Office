import { createRouter, createWebHistory } from 'vue-router'
import Applayout from '@/components/layout/applayout.vue'
import indexView from '@/views/indexView.vue'
import homeview from '@/views/HomeView.vue'
import register from '@/views/Register.vue'
import login from '@/views/Login.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: homeview
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/shouye',
      name: 'shouye',
      component: Applayout, // 保持 Applayout 作为组件
      children: [
        {
          path: '',
          component: indexView, // 默认子路由
        },
        {
          path: '/planner',
          name: 'planner',
          component: () => import('../views/AboutView.vue'),
        },
      ]
    },
  ]
})

export default router

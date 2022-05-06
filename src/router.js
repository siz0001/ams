import { createWebHistory, createRouter } from 'vue-router'
import Login from '@/components/login/index.vue'
import LoginHistory from '@/components/pages/loginHistory.vue'
import Monitoring from '@/components/pages/monitoring.vue'
import Test from '@/components/pages/test.vue'

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/loginHistory',
    name: 'LoginHistory',
    component: LoginHistory
  },
  {
    path: '/monitoring',
    name: 'Monitoring',
    component: Monitoring
  },
  {
    path: '/test',
    name: 'test',
    component: Test
  }
]

export const router = createRouter({
  history: createWebHistory(),
  mode: 'history',
  routes
})

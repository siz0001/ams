import { createWebHistory, createRouter } from 'vue-router'
import Login from '@/components/login/index.vue'
import LoginHistory from '@/components/pages/loginHistory.vue'
import Monitoring from '@/components/pages/monitoring/index.vue'
// 관리-USER 관리
import Institutional from '@/components/pages/management/user/institutional.vue'
import User from '@/components/pages/management/user/user.vue'

// 관리-마스터 관리
import AgencySensor from '@/components/pages/management/master/agency_sensor.vue'
// 관리-설정관리
import Group from '@/components/pages/management/setting/group.vue'
import Sterilizer from '@/components/pages/management/setting/sterilizer.vue'

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
    path: '/management/user/institutional',
    name: 'Institutional',
    component: Institutional
  },
  {
    path: '/management/user/user',
    name: 'User',
    component: User
  },
  {
    path: '/management/master/agencysensor',
    name: 'AgencySensor',
    component: AgencySensor
  },
  {
    path: '/management/setting/sterilizer',
    name: 'Sterilizer',
    component: Sterilizer
  },
  {
    path: '/management/setting/group',
    name: 'Group',
    component: Group
  },
  {
    path: '/monitoring',
    name: 'Monitoring',
    component: Monitoring
  }
]

export const router = createRouter({
  history: createWebHistory(),
  mode: 'history',
  routes
})

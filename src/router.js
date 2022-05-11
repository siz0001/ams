import { createWebHistory, createRouter } from 'vue-router'
import Login from '@/components/pages/login/index.vue'
import Monitoring from '@/components/pages/monitoring/index.vue'
// 관리-USER 관리
import Institutional from '@/components/pages/management/user/institutional.vue'
import User from '@/components/pages/management/user/user.vue'

// 관리-마스터 관리
import LocalServer from '@/components/pages/management/master/local.vue'
import AgencySensor from '@/components/pages/management/master/asensor.vue'
import Msterilizer from '@/components/pages/management/master/sterilizer.vue'
import MasterSensor from '@/components/pages/management/master/msensor.vue'
// 관리-설정관리
import Measuring from '@/components/pages/management/setting/measuring.vue'
import SettingSensor from '@/components/pages/management/setting/sensor.vue'
import Group from '@/components/pages/management/setting/group.vue'
import Sterilizer from '@/components/pages/management/setting/sterilizer.vue'
// 관리-장애관리
import LiveError from '@/components/pages/management/error/live_error.vue'
import Error from '@/components/pages/management/error/error.vue'
import LoginHistory from '@/components/pages/management/error/login_history.vue'

// 현황
import Unregistered from '@/components/pages/current/current/unregistered.vue'
import Sensorperiod from '@/components/pages/current/current/sensorperiod.vue'

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
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
    path: '/management/master/local',
    name: 'LocalServer',
    component: LocalServer
  },
  {
    path: '/management/master/asensor',
    name: 'AgencySensor',
    component: AgencySensor
  },
  {
    path: '/management/master/msensor',
    name: 'MasterSensor',
    component: MasterSensor
  },
  {
    path: '/management/master/sterilizer',
    name: 'Msterilizer',
    component: Msterilizer
  },
  {
    path: '/management/setting/measuring',
    name: 'Measuring',
    component: Measuring
  },
  {
    path: '/management/setting/sensor',
    name: 'SettingSensor',
    component: SettingSensor
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
    path: '/management/error/liveerror',
    name: 'LiveError',
    component: LiveError
  },
  {
    path: '/management/error/error',
    name: 'Error',
    component: Error
  },
  {
    path: '/management/error/history',
    name: 'LoginHistory',
    component: LoginHistory
  },
  {
    path: '/monitoring',
    name: 'Monitoring',
    component: Monitoring
  },
  {
    path: '/current/current/unregistered',
    name: 'Unregistered',
    component: Unregistered
  },
  {
    path: '/current/current/sensorperiod',
    name: 'Sensorperiod',
    component: Sensorperiod
  }
]

export const router = createRouter({
  history: createWebHistory(),
  mode: 'history',
  routes
})

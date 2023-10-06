import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import StreamersEffect from '../views/StreamersEffect.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'streamersEffect',
    component: StreamersEffect
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

/*
 * @Author: zhanfenghai
 * @LastEditTime: 2021-04-23 16:42:18
 * @LastEditors: zhanfenghai
 * @Description:
 * @FilePath: \vite-vue-ts-starter\src\router\index.ts
 */
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

import Home from '@/views/home.vue'
import Others from '@/views/others.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/others',
    name: 'Others',
    component: Others
  },
  {
    path: '/setup',
    name: 'Setup',
    component: () => import('@/views/setup.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

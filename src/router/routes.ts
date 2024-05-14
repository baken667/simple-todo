import AppLayout from '@/layouts/AppLayout.vue'
import type { RouteRecordRaw } from 'vue-router'

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: AppLayout,
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('@/views/HomeView.vue')
      },
      {
        path: 'favorite',
        name: 'favorite',
        component: () => import('@/views/FavoriteView.vue')
      },
      {
        path: ':project',
        children: [
          {
            path: '',
            name: 'project',
            component: () => import('@/views/ProjectView.vue')
          }
        ]
      }
    ]
  }
]

import { createRouter, createWebHistory, RouteRecordRaw, NavigationGuard } from 'vue-router'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/docs',
    name: 'Docs',
    component: () => import('../views/Documentation.vue'),
    children: [
      {
        path: 'breadcrumbs',
        name: 'Breadcrumbs',
        component: () => import('../docs/Breadcrumbs/index.vue')
      },
      {
        path: 'button',
        name: 'Button',
        component: () => import('../docs/Button/index.vue')
      },
      {
        path: 'alert',
        name: 'Alert',
        component: () => import('../docs/Alert/index.vue')
      },
      {
        path: 'progress',
        name: 'Progress',
        component: () => import('../docs/Progress/index.vue')
      },
      {
        path: 'navbar',
        name: 'Navbar',
        component: () => import('../docs/Navbar/index.vue')
      },
      {
        path: 'pagination',
        name: 'Pagination',
        component: () => import('../docs/Pagination/index.vue')
      }
    ],
    beforeEnter: (to, from, next) => {
      if (to.name == 'Components') {
        next('/')
      }
      else {
        next()
      }
    },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
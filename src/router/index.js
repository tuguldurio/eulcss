import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
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
        path: 'button',
        name: 'Button',
        component: () => import('../views/docs/components/Button.vue')
      },
      {
        path: 'alert',
        name: 'Alert',
        component: () => import('../views/docs/components/Alert.vue')
      },
      {
        path: 'progress',
        name: 'Progress',
        component: () => import('../views/docs/components/Progress.vue')
      },
      {
        path: 'navbar',
        name: 'Navbar',
        component: () => import('../views/docs/components/Navbar.vue')
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
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
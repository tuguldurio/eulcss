import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/components',
    name: 'Components',
    component: () => import('../views/Documentation.vue'),
    children: [
      {
        path: 'buttons',
        name: 'Buttons',
        component: () => import('../views/components/Buttons.vue')
      },
      {
        path: 'alerts',
        name: 'Alerts',
        component: () => import('../views/components/Alerts.vue')
      },
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
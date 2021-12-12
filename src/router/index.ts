import { createRouter, createWebHistory, RouteRecordRaw, NavigationGuard, RouterView } from 'vue-router'
import Home from '../views/Home.vue'

import { useDocsNames } from '~/src/hooks/Docs'

function prefixRoutes(prefix: string, routes: Array<RouteRecordRaw>): Array<RouteRecordRaw> {
  return routes.map(route => {
    route.path = prefix + '/' + route.path
    return route
  })
}

function getDocs(): Array<RouteRecordRaw> {
  const docsNames = useDocsNames()

  return docsNames.map(name => <RouteRecordRaw>{
    path: name.toLocaleLowerCase(),
    name: name,
    component: () => import(`../eulercss/docs/${name}/index.vue`)
  })
}

const routes: Array<RouteRecordRaw> = [
  {
    path: '',
    name: 'Home',
    component: Home,
  },
  {
    path: '/',
    name: 'DocsSidebar',
    component: () => import('../views/Documentation.vue'),
    beforeEnter: (to, from, next) => {
      if (to.name == 'Components') {
        next('/')
      }
      else {
        next()
      }
    },
    children: [
      ...prefixRoutes('/tools', [
        {
          path: 'rem_converter',
          name: 'REM Converter',
          component: () => import('../eulercss/tools/RemConverter/index.vue')
        }
      ]),
      ...prefixRoutes('/docs', getDocs()),
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
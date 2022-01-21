import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import BasicLayout from './../layout/BasicLayout.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('./../views/User/Login.vue')
    },
    {
      path: '/',
      component: BasicLayout,
      redirect: '/index',
      children: [
        {
          path: '/index',
          name: 'index',
          hideInMenu: true,
          component: Home
        },
        {
          path: '/a',
          name: 'a',
          redirect: '/a/a1',
          component: { render: (h) => h('router-view') },
          children: [
            {
              path: '/a/a1',
              name: 'a1',
              component: () => import('./../views/A/A1.vue')
            },
            {
              path: '/a/a2',
              name: 'a2',
              component: () => import('./../views/A/A2.vue')
            },
            {
              path: '/a/a3',
              name: 'a3',
              component: () => import('./../views/A/A3.vue')
            }
          ]
        },
        {
          path: '/b',
          name: 'b',
          redirect: '/b/b1',
          component: { render: (h) => h('router-view') },
          children: [
            {
              path: '/b/b1',
              name: 'b1',
              component: () => import('./../views/B/B1.vue')
            },
            {
              path: '/b/b2',
              name: 'b2',
              component: () => import('./../views/B/B2.vue')
            },
            {
              path: '/b/b3',
              name: 'b3',
              component: () => import('./../views/B/B3.vue')
            }
          ]
        },
        {
          path: '/c',
          name: 'c',
          redirect: '/c/c1',
          component: { render: (h) => h('router-view') },
          children: [
            {
              path: '/c/c1',
              name: 'c1',
              component: () => import('./../views/C/C1.vue')
            },
            {
              path: '/c/c2',
              name: 'c2',
              component: () => import('./../views/C/C2.vue')
            },
            {
              path: '/c/c3',
              name: 'c3',
              component: () => import('./../views/C/C3.vue')
            }
          ]
        }
      ]
    }
  ]
})
export default router

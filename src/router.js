import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue')
    },
    {
      path: '/signatures',
      name: 'signature.index',
      component: () => import('./views/signature/Index.vue')
    },
    {
      path: '/signatures/create',
      name: 'signature.create',
      component: () => import('./views/signature/Create.vue')
    }
  ]
})
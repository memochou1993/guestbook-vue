import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./views/Home.vue')
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

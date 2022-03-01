import Vue from 'vue'
import VueRouter from 'vue-router'
import Auth from '../pages/auth/index.vue'
import Dashboard from '../pages/index/index.vue'

import Products from '../pages/index/products/index.vue'
import Catalog from '../pages/index/catalog/index.vue'
import Category from '../pages/index/catalog/_category/index.vue'
import Brands from '../pages/index/brands/index.vue'
// import store from '../store/index'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/products',
  },
  {
    path: '/auth',
    name: 'Auth',
    component: Auth,
    meta: {
      auth: false,
      title: 'Авторизация',
    },
  },
  {
    path: '/',
    component: Dashboard,
    children: [
      {
        path: 'products',
        component: Products,
        name: 'products',
      },
      {
        path: 'catalog',
        component: Catalog,
        name: 'catalog',
      },
      {
        path: `catalog/category`,
        component: Category,
        name: 'category',
      },
      {
        path: `catalog/category/:id`,
        component: Category,
        name: 'category',
        props: true
      },
      {
        path: 'brands',
        component: Brands,
        name: 'brands',
      },
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  routes,
})

// router.beforeEach((to, from, next) => {
//   if ((to.meta.auth || to.meta.auth === undefined) && !store.state.user.data) {
//     store.dispatch('user/init').then(() => {
//       next()
//     }).catch(() => {
//       next({ name: 'login' })
//     })
//   } else {
//     next()
//   }
// })

export default router

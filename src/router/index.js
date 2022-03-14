import Vue from 'vue'
import VueRouter from 'vue-router'
import Auth from '../pages/auth/index.vue'
import Dashboard from '../pages/index/index.vue'

import Products from '../pages/index/products/index.vue'
import Product from '../pages/index/products/_product/index.vue'
import Catalog from '../pages/index/catalog/index.vue'
import Category from '../pages/index/catalog/_category/index.vue'
import Brands from '../pages/index/brands/index.vue'
import Colors from '../pages/index/colors/index.vue'
import Color from '../pages/index/colors/_color/index.vue'
import Sizes from '../pages/index/sizes/index.vue'
import Size from '../pages/index/sizes/_size/index.vue'
import Orders from '../pages/index/orders/index.vue'
import Order from '../pages/index/orders/_order/index.vue'
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
        path: 'products/product/:id',
        component: Product,
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
      {
        path: 'colors',
        component: Colors,
        name: 'colors',
      },
      {
        path: `colors/color`,
        component: Color,
        name: 'color',
      },
      {
        path: `colors/color/:id`,
        component: Color,
        name: 'color',
        props: true
      },
      {
        path: 'sizes',
        component: Sizes,
        name: 'sizes',
      },
      {
        path: `sizes/size`,
        component: Size,
        name: 'size',
      },
      {
        path: `sizes/size/:id`,
        component: Size,
        name: 'sizes',
        props: true
      },
      {
        path: 'orders',
        component: Orders,
        name: 'sizes',
      },
      {
        path: `orders/order`,
        component: Order,
        name: 'size',
      },
      {
        path: `orders/order/:id`,
        component: Order,
        name: 'sizes',
        props: true
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

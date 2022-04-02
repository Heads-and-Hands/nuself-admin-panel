import Vue from 'vue'
import VueRouter from 'vue-router'
import Auth from '../pages/auth/index.vue'
import Dashboard from '../pages/index/index.vue'

import Products from '../pages/index/products/index.vue'
import Product from '../pages/index/products/_product/index.vue'
import Catalog from '../pages/index/catalogs/index.vue'
import Category from '../pages/index/catalogs/_category/index.vue'
import Brands from '../pages/index/brands/index.vue'
import Colors from '../pages/index/colors/index.vue'
import Color from '../pages/index/colors/_color/index.vue'
import Orders from '../pages/index/orders/index.vue'
import Order from '../pages/index/orders/_order/index.vue'
import Clients from '../pages/index/clients/index.vue'
import Client from '../pages/index/clients/_client/index.vue'
import Banners from '../pages/index/banners/index.vue'
import Banner from '../pages/index/banners/_banner/index.vue'
import Compilations from '../pages/index/compilations/index.vue'
import Compilation from '../pages/index/compilations/_compilation/index.vue'
import Rubrics from '../pages/index/rubrics/index.vue'
import Rubric from '../pages/index/rubrics/_rubric/index.vue'
import Contents from '../pages/index/contents/index.vue'
import Content from '../pages/index/contents/_content/index.vue'
import Promocodes from '../pages/index/promocodes/index.vue'
import Promocode from '../pages/index/promocodes/_promocode/index.vue'
import Users from '../pages/index/users/index.vue'
import User from '../pages/index/users/_user/index.vue'
import Sales from '../pages/index/sales/index.vue'
import Sale from '../pages/index/sales/_sale/index.vue'
import Main from '../pages/index/main/index.vue'

// import store from '../store/index'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/products',
  },
  {
    path: '/auth',
    name: 'auth',
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
        name: 'product',
      },
      {
        path: 'catalogs',
        component: Catalog,
        name: 'catalogs',
      },
      {
        path: `catalogs/category/:id`,
        component: Category,
        name: 'catalog',
        props: true
      },
      {
        path: 'brands',
        component: Brands,
        name: 'brand',
      },
      {
        path: 'colors',
        component: Colors,
        name: 'colors',
      },
      {
        path: `colors/color/:id`,
        component: Color,
        name: 'color',
        props: true
      },
      {
        path: 'orders',
        component: Orders,
        name: 'orders',
      },
      {
        path: `orders/order/:id`,
        component: Order,
        name: 'order',
        props: true
      },
      {
        path: 'clients',
        component: Clients,
        name: 'clients',
      },
      {
        path: `clients/client/:id`,
        component: Client,
        name: 'client',
        props: true
      },
      {
        path: 'banners',
        component: Banners,
        name: 'banners',
      },
      {
        path: `banners/banner/:id`,
        component: Banner,
        name: 'banner',
        props: true
      },
      {
        path: 'compilations',
        component: Compilations,
        name: 'compilations',
      },
      {
        path: `compilations/compilation/:id`,
        component: Compilation,
        name: 'compilation',
        props: true
      },
      {
        path: 'rubrics',
        component: Rubrics,
        name: 'rubrics',
      },
      {
        path: `rubrics/rubric/:id`,
        component: Rubric,
        name: 'rubric',
        props: true
      },
      {
        path: 'contents',
        component: Contents,
        name: 'contents',
      },
      {
        path: `contents/content/:id`,
        component: Content,
        name: 'content',
        props: true
      },
      {
        path: 'promocodes',
        component: Promocodes,
        name: 'promocodes',
      },
      {
        path: `promocodes/promocode/:id`,
        component: Promocode,
        name: 'promocode',
        props: true
      },
      {
        path: 'users',
        component: Users,
        name: 'users',
      },
      {
        path: `users/user/:id`,
        component: User,
        name: 'user',
        props: true,
      },
      // {
      //   path: 'sales',
      //   component: Sales,
      //   name: 'sales',
      // },
      // {
      //   path: 'sales/sale/:id',
      //   component: Sale,
      //   name: 'sale',
      //   props: true
      // },
      {
        path: 'main',
        component: Main,
        name: 'main',
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

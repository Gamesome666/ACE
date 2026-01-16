import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import AboutDetail from '../views/AboutDetail.vue'
import ApplicationCasePage from '../views/ApplicationCasePage.vue'

import ProductCategory from '../views/ProductCategory.vue'
import ProductSubcategory from '../views/ProductSubcategory.vue'
import ProductDetail from '../views/ProductDetail.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'AboutDetail',
    component: AboutDetail
  },
  {
    path: '/application-cases',
    name: 'ApplicationCases',
    component: ApplicationCasePage
  },
  {
    path: '/products/:category',
    name: 'ProductCategory',
    component: ProductCategory
  },
  {
    path: '/products/:category/:subcategory',
    name: 'ProductSubcategory',
    component: ProductSubcategory
  },
  {
    path: '/products/:category/:subcategory/detail/:detailIndex',
    name: 'ProductDetail',
    component: ProductDetail
  },
  {
    path: '/culture',
    name: 'CorporateCulture',
    component: () => import('../views/CorporateCulture.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

export default router

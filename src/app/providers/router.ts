import { createWebHistory, createRouter } from 'vue-router'

import Rates from 'Pages/rates-list'
import Calculator from 'Pages/calculator'
import NotFound from 'Pages/404'

const isProd = import.meta.env.PROD
const prefix = isProd ? '/currency-rates' : ''

const routes = [
  { path: `${prefix}/`, name: 'Home', component: Rates },
  { path: `${prefix}/calc`, name: 'Calc', component: Calculator },
  { path: '/:NotFound(.*)', name: 'NotFound', component: NotFound },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
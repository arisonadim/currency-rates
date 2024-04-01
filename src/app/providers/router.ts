import { createWebHistory, createRouter } from 'vue-router'

import Rates from 'Pages/rates-list'
import Calculator from 'Pages/calculator'
import NotFound from 'Pages/404'

const routes = [
  { path: '/', name: 'Home', component: Rates },
  { path: '/calc', name: 'Calc', component: Calculator },
  { path: '/currency-rates', redirect: { name: 'Home' } },
  { path: '/:NotFound(.*)', name: 'NotFound', component: NotFound },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import AnimalCareManagement from '../views/AnimalCareManagement.vue'
import AnimalFeedManagement from '../views/AnimalFeedManagement.vue'
import AnimalInfoManagement from '../views/AnimalInfoManagement.vue'
import AnimalRecipeManagement from '../views/AnimalRecipeManagement.vue'
import AnimalReproductionManagement from '../views/AnimalReproductionManagement.vue'
import ComponentView from '../views/ComponentView.vue'
import Login from '../views/Login.vue'
import WarehouseManagement from '../views/WarehouseManagement.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Login',
    name: 'Login',
    component: Login
  },
  {
    path: '/animalCareManagement',
    name: 'AnimalCareManagement',
    component: AnimalCareManagement
  },
  {
    path: '/animalFeedManagement',
    name: 'AnimalFeedManagement',
    component: AnimalFeedManagement
  },
  {
    path: '/componentView',
    name: 'ComponentView',
    component: ComponentView
  },
  {
    path: '/animalInfoManagement',
    name: 'AnimalInfoManagement',
    component: AnimalInfoManagement
  },
  {
    path: '/animalRecipeManagement',
    name: 'AnimalRecipeManagement',
    component: AnimalRecipeManagement
  },
  {
    path: '/animalReproductionManagement',
    name: 'AnimalReproductionManagement',
    component: AnimalReproductionManagement
  },
  {
    path: '/warehouseManagement',
    name: 'WarehouseManagement',
    component: WarehouseManagement
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

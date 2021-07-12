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
import WarehouseItemManagement from '../views/WarehouseItemManagement.vue'
import ProcurementManagement from '../views/ProcurementManagement.vue'
import WarehouseInfoManagement from '../views/WarehouseInfoManagement.vue'
import WarehouseFlowManagement from '../views/WarehouseFlowManagement.vue'
import FundManagement from '../views/FundManagement.vue'
import EmployeeManagement from '../views/EmployeeManagement.vue'
import EmployeeFlowManagement from '../views/EmployeeFlowManagement.vue'
import EmployeeInfoManagement from '../views/EmployeeInfoManagement.vue'
import EmployeeItemManagement from '../views/EmployeeItemManagement.vue'
import EmployeeCheck from '../views/EmployeeCheck'
import AdmissionTicket from '../views/TicketsAdmmisManagement.vue'
import test from '../views/Test.vue'
import AnimalExhibition from '../views/VenueExhiManagement.vue'
import VenueItemManagement from '../views/VenueItemManagement.vue'
import GuiderManagement from '../views/GuiderItemManagement.vue'
import VenueFuncItemManagement from '../views/VenueFuncItemManagement.vue'
import EmployeeOutManagement from '../views/EmployeeOutManagement.vue'


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
    path: '/warehouseManagement/itemManagement',
    name: 'WarehouseItemManagement',
    component: WarehouseItemManagement
  },
  {
    path: '/warehouseManagement/infoManagement',
    name: 'WarehouseInfoManagement',
    component: WarehouseInfoManagement
  },
  {
    path: '/warehouseManagement/flowManagement',
    name: 'WarehouseFlowManagement',
    component: WarehouseFlowManagement
  },
  {
    path: '/fundManagement',
    name: 'FundManagement',
    component: FundManagement
  },

  {
    path: '/employeeManagement',
    name: 'employeeManagement',
    component: EmployeeManagement
  },

  {
    path: '/employeeManagement/flowManagement',
    name: 'employeeFlowManagement',
    component: EmployeeFlowManagement
  },
  {
    path: '/employeeManagement/infoManagement',
    name: 'employeeInfoManagement',
    component: EmployeeInfoManagement,
  },
  {
    path: '/employeeManagement/itemManagement',
    name: 'EmployeeItemManagement',
    component: EmployeeItemManagement,
  },
  {
    path: '/employeeManagement/check',
    name: 'EmployeeCheck',
    component: EmployeeCheck,
  },

  {
    path: '/venue/AnimalFunctionManagement',
    name: 'VenueFuncItemManagement',
    component: VenueFuncItemManagement,
  },

  {
    path: '/ticketsManagement/Admissiontickets',
    name: 'AdmissionTicket',
    component: AdmissionTicket,
  },
 
  {
    path: '/venue/AnimalExhibitionManagement',
    name: 'AnimalExhibition',
    component: AnimalExhibition
  },

  {
    path: '/venue/itemManagement',
    name: 'VenueItemManagement',
    component: VenueItemManagement,
  },

  {
    path: '/guiderManagement',
    name: 'GuiderManagement',
    component: GuiderManagement,
  },

  


  {
    path: '/procurementManagement',
    name: 'ProcurementManagement',
    component: ProcurementManagement
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

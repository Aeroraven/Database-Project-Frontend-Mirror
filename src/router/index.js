import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import AnimalCareManagement from '../views/AnimalCareManagement.vue'
import FundManagement from '../views/FundManagement.vue'
import ProcurementManagement from '../views/ProcurementManagement.vue'
import WarehouseManagement from '../views/WarehouseManagement.vue'
import WarehouseItemManagement from '../views/WarehouseItemManagement.vue'
import WarehouseInfoManagement from '../views/WarehouseInfoManagement.vue'
import WarehouseFlowManagement from '../views/WarehouseFlowManagement.vue'
import AnimalInfoManagement from '../views/AnimalInfoManagement.vue'
import EmployeeManagement from '../views/EmployeeManagement.vue'
import EmployeeFlowManagement from '../views/EmployeeFlowManagement.vue'
import EmployeeInfoManagement from '../views/EmployeeInfoManagement.vue'
import EmployeeItemManagement from '../views/EmployeeItemManagement.vue'
import EmployeeCheck from '../views/EmployeeCheck.vue'
import ShowInformationManagement from '../views/ShowInformationManagement.vue'
import TrainingManagement from '../views/TrainingManagement.vue'
import ShowTicketManagement from '../views/ShowTicketManagement.vue'
import VehicleManagement from '../views/VehicleManagement.vue'
import GettingAroundZoo from '../views/GettingAroundZoo.vue'
import ConvenienceService from '../views/ConvenienceService.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/animalCareManagement',
    name: 'AnimalCareManagement',
    component: AnimalCareManagement
  },
  {
    path: '/fundManagement',
    name: 'FundManagement',
    component: FundManagement
  },
  {
    path: '/procurementManagement',
    name: 'ProcurementManagement',
    component: ProcurementManagement
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
    path: '/animalInfoManagement',
    name: 'AnimalInfoManagement',
    component: AnimalInfoManagement
  },
  {
    path: '/employeeManagement',
    name: 'Adddssx',
    component: EmployeeManagement
  },

  {
    path: '/employeeManagement/flowManagement',
    name: 'Bddd',
    component: EmployeeFlowManagement
  },
  {
    path: '/employeeManagement/infoManagement',
    name: 'CD',
    component: EmployeeInfoManagement,
  },
  {
    path: '/employeeManagement/itemManagement',
    name: 'dsfsf',
    component: EmployeeItemManagement,
  },
  {
    path: '/employeeManagement/check',
    name: 'sdwfff',
    component: EmployeeCheck,
  },
  {
    path: '/showInformationManagement',
    name: 'ShowInformationManagement',
    component: ShowInformationManagement
  },
  {
    path: '/trainingManagement',
    name: 'TrainingManagement',
    component: TrainingManagement
  },
  {
    path: '/showTicketManagement',
    name: 'ShowTicketManagement',
    component: ShowTicketManagement
  },
  {
    path: '/vehicleManagement',
    name: 'VehicleManagement',
    component: VehicleManagement
  },
  
  {
    path: '/gettingAroundZoo',
    name: 'GettingAroundZoo',
    component: GettingAroundZoo
  },

  {
    path: '/convenienceService',
    name: 'ConvenienceService',
    component:  ConvenienceService
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

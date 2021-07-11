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
import ShowTicketManagement from '../views/ShowTicketManagement.vue'
import ShowInformationManagement from '../views/ShowInformationManagement.vue'
import TrainingManagement from '../views/TrainingManagement.vue'
import EmployeeManagement from '../views/EmployeeManagement.vue'
import EmployeeFlowManagement from '../views/EmployeeFlowManagement.vue'
import EmployeeInfoManagement from '../views/EmployeeInfoManagement.vue'
import EmployeeItemManagement from '../views/EmployeeItemManagement.vue'
import EmployeeCheck from '../views/EmployeeCheck.vue'
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
    path: '/ticketManagement/showTicketManagement',
    name: 'ShowTicketManagement',
    component: ShowTicketManagement
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

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

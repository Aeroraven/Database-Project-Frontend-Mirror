import request from '@/utils/request'

export function getVehicleManagementData(params) {
  return request({
    url: '/api/vehicleManagement/getVehicleManagementData',
    method: 'get',
    params
  })
}

export function createVehicleManagementInfo(params) {
  return request({
    url: '/api/vehicleManagement/createVehicleManagementInfo',
    method: 'get',
    params
  })
}

export function updateVehicleManagementInfo(params) {
  return request({
    url: '/api/vehicleManagement/updateVehicleManagementInfo',
    method: 'get',
    params
  })
}

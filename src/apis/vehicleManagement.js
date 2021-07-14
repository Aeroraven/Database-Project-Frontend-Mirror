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
    method: 'post',
    params
  })
}

export function updateVehicleManagementInfo(params) {
  return request({
    url: '/api/vehicleManagement/updateVehicleManagementInfo',
    method: 'put',
    params
  })
}

export function deleteVehicleManagementInfo(params) {
  return request({
    url: '/api/vehicleManagement/deleteVehicleManagementInfo',
    method: 'delete',
    params
  })
}

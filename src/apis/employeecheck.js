import request from '@/utils/request'

export function getWarehouseInfo(params) {
    return request({
        url: '/api/warehouseRequest/getWarehouseInfo',
        method: 'get',
        params
    })
}

export function updateWarehouseInfo(params) {
    return request({
        url: '/api/warehouseRequest/updateWarehouseInfo',
        method: 'get',
        params
    })
}
export function getwareItemInfo(params) {
    return request({
        url: '/api/employeeCheckRequest/getEmployeeCheckInfo',
        method: 'get',
        params
    })
}

export function createEmployeecheckInfo(params) {
    return request({
      url: '/api/employeeCheckRequest/createEmployeeCheckInfo',
      method: 'get',
      params
    })
  }


export function updatewareItemInfo(params) {
    return request({
        url: '/api/employeeCheckRequest/updateEmployeeCheckInfo',
        method: 'get',
        params
    })
}


import request from '@/utils/request'

export function getEmployeeInfo(params) {
    return request({
        url: '/api/employeeRequest/getEmployeeInfo',
        method: 'get',
        params
    })
}

export function updateEmployeeInfo(params) {
    return request({
        url: '/api/employeeRequest/updateEmployeeInfo',
        method: 'get',
        params
    })
}
export function getEmployeeItemInfo(params) {
    return request({
        url: '/api/employeeRequest/getemployeeItemInfo',
        method: 'get',
        params
    })
}


export function updateEmployeeItemInfo(params) {
    return request({
        url: '/api/employeeRequest/updateemployeeItemInfo',
        method: 'get',
        params
    })
}

export function createEmployeeInfo(params) {
    return request({
      url: '/api/employeeRequest/createemployeeItemInfo',
      method: 'get',
      params
    })
  }


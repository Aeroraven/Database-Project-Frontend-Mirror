import request from '@/utils/request'

// export function getEmployeeInfo(params) {
//     return request({
//         url: '/api/employeeRequest/getEmployeeInfo',
//         method: 'get',
//         params
//     })
// }

export function updateEmployeeInfo(params) {
    return request({
        url: '/api/employeeRequest/updateEmployeeInfo',
        method: 'get',
        params
    })
}







export function getEmployeeItemInfo(params) {
    return request({
        url: '/api/employeeRequest/getEmployeeInfo',
        method: 'get',
        params
    })
}


export function updateEmployeeItemInfo(params) {
    return request({
        url: '/api/employeeRequest/updateEmployeeInfo',
        method: 'put',
        params
    })
}

export function createEmployeeInfo(params) {
    return request({
      url: '/api/employeeRequest/createEmployeeInfo',
      method: 'post',
      params
    })
  }


  export function deleteEmployeeInfo(params) {
    return request({
      url: '/api/employeeRequest/deleteEmployeeInfo',
      method: 'delete',
      params
    })
  }


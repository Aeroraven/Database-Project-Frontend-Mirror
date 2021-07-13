import request from '@/utils/request'

export function getStaffList(params) {
    return request({
        url: '/api/employeeRequest/getEmployeeInfo',
        method: 'get',
        params
    })
}
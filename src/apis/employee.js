import request from '@/utils/request'

export function getWarehouseInfo(params) {
    return request({
        url: '/api/employeeRequest/getWarehouseInfo',
        method: 'get',
        params
    })
}

export function updateWarehouseInfo(params) {
    return request({
        url: '/api/employeeRequest/updateWarehouseInfo',
        method: 'get',
        params
    })
}
export function getwareItemInfo(params) {
    return request({
        url: '/api/employeeRequest/getwareItemInfo',
        method: 'get',
        params
    })
}


export function updatewareItemInfo(params) {
    return request({
        url: '/api/employeeRequest/updatewareItemInfo',
        method: 'get',
        params
    })
}


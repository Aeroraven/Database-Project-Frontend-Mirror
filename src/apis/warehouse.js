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

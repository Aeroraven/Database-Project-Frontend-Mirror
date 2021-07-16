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
        url: '/api/warehouseRequest/getwareItemInfo',
        method: 'get',
        params
    })
}


export function updatewareItemInfo(params) {
    return request({
        url: '/api/warehouseRequest/modifyItem',
        method: 'put',
        params
    })
}


export function createWarehouse(params) {
    return request({
        url: '/api/warehouseRequest/createWarehouse',
        method: 'post',
        params
    })
}


export function modifyItem(params) {
    return request({
        url: '/api/warehouseRequest/modifyItem',
        method: 'put',
        params
    })
}
//
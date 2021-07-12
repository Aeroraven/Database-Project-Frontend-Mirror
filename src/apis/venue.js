import request from '@/utils/request'

export function getvenueInfo(params) {
    return request({
        // url:'/api/employeeRequest/getWarehouseInfo',
        url: '/api/VenueRequest/getVenueInfo',
        method: 'get',
        params
    })
}

export function updatevenueInfo(params) {
    return request({
        url: '/api/VenueRequest/updateVenueInfo',
        // url:'/api/employeeRequest/updateWarehouseInfo',
        method: 'get',
        params
    })
}
export function getvenueItemInfo(params) {
    return request({
        url: '/api/venueRequest/getvenueItemInfo',
        method: 'get',
        params
    })
}
export function updatevenueItemInfo(params) {
    return request({
        url: '/api/venueRequest/updatevenueItemInfo',
        method: 'get',
        params
    })
}


export function updatewareItemInfo(params) {
    return request({
        url: '/api/venueRequest/updatevenueItemInfo',
        method: 'get',
        params
    })
}






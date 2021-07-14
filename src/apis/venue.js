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
        method: 'put',
        params
    })
}


// export function createvenueInfo(params) {
//     return request({
//         url: '/api/venueRequest/creatsvenueItemInfo',
//         // url:'/api/employeeRequest/updateWarehouseInfo',
//         method: 'post',
//         params
//     })
// }






export function getvenueItemInfo(params) {//查
    return request({
        url: '/api/venueRequest/getvenueItemInfo',
        method: 'get',
        params
    })
}
export function updatevenueItemInfo(params) {//改
    return request({
        url: '/api/venueRequest/updatevenueItemInfo',
        method: 'put',
        params
    })
}
export function createvenueItemInfo(params) {//
    return request({
        url: '/api/venueRequest/creatsvenueItemInfo',
        method: 'post',
        params
    })
}

export function deletevenueItemInfo(params) {//
    return request({
        url: '/api/venueRequest/deletevenueItemInfo',
        method: 'delete',
        params
    })
}








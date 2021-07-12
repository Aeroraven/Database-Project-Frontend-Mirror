import request from '@/utils/request'



export function getguideItemInfo(params) {
    return request({
        url: '/api/guideRequest/getGuideInfo',
        method: 'get',
        params
    })
}


export function updateguideItemInfo(params) {
    return request({
        url: '/api/guideRequest/updateGuideInfo',
        method: 'get',
        params
    })
}


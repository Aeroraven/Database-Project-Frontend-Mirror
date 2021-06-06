import request from '@/utils/request'

export function getNotice(params) {
    return request({
        url: '/api/homepageRequests/getNotice',
        method: 'get',
        params
    })
}

export function getUserInfo(params) {
    return request({
        url: '/api/homepageRequests/getUserInfo',
        method: 'get',
        params
    })
  }
  
export function getCurrentTourists(params) {
    return request({
        url: '/api/commonModule/getCurrentTourists',
        method: 'get',
        params
    })
}

export function getRegisteredTouristCnt(params) {
    return request({
        url: '/api/commonModule/getRegisterTouristCnt',
        method: 'get',
        params
    })
}

export function getAnimalCount(params) {
    return request({
        url: '/api/commonModule/getAnimalCount',
        method: 'get',
        params
    })
}

export function getStaffCount(params) {
    return request({
        url: '/api/commonModule/getStaffCount',
        method: 'get',
        params
    })
}
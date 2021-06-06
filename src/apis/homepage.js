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
  
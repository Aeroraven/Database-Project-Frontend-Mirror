import request from '@/utils/request'

export function getConvenienceServiceData(params) {
  return request({
    url: '/api/convenienceService/getConvenienceServiceData',
    method: 'get',
    params
  })
}

export function createConvenienceServiceInfo(params) {
  return request({
    url: '/api/convenienceService/createConvenienceServiceInfo',
    method: 'get',
    params
  })
}

export function updateConvenienceServiceInfo(params) {
  return request({
    url: '/api/convenienceService/updateConvenienceServiceInfo',
    method: 'get',
    params
  })
}
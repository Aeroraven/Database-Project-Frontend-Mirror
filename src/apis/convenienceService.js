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
    method: 'post',
    params
  })
}

export function updateConvenienceServiceInfo(params) {
  return request({
    url: '/api/convenienceService/updateConvenienceServiceInfo',
    method: 'put',
    params
  })
}

export function deleteConvenienceServiceInfo(params) {
  return request({
    url: '/api/convenienceService/deleteConvenienceServiceInfo',
    method: 'delete',
    params
  })
}
import request from '@/utils/request'

export function getinformation(params) {
  return request({
    url: '/api/animalInfo/getinformation',
    method: 'get',
    params
  })
}

export function createinformation(params) {
  return request({
    url: '/api/animalInfo/createinformation',
    method: 'get',
    params
  })
}

export function updateinformation(params) {
  return request({
    url: '/api/animalInfo/updateimformation',
    method: 'get',
    params
  })
}

export function deleteinformation(params) {
  return request({
    url: '/api/animalInfo/deleteimformation',
    method: 'delete',
    params
  })
}

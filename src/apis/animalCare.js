import request from '@/utils/request'

export function getCareData(params) {
  return request({
    url: '/api/animalCare/getCareData',
    method: 'get',
    params
  })
}

export function createCareInfo(params) {
  return request({
    url: '/api/animalCare/createCareInfo',
    method: 'get',
    params
  })
}

export function updateCareInfo(params) {
  return request({
    url: '/api/animalCare/updateCareInfo',
    method: 'get',
    params
  })
}

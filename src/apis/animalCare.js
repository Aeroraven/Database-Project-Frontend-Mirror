import request from '@/utils/request'

export function getCareData(params) {
  return request({
    url: '/api/animalCare/getCareData',
    method: 'get',
    params
  })
}

export function createCareInfo(params,id) {
  return request({
    url: '/api/animalCare/createCareInfo/'+id,
    method: 'post',
    params
  })
}

export function updateCareInfo(data) {
  return request({
    url: '/api/animalCare/modifyCareInfo',
    method: 'put',
    data
  })
}

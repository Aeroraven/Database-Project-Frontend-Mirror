import request from '@/utils/request'

export function getShowData(params) {
  return request({
    url: '/api/animalShow/getShowData',
    method: 'get',
    params
  })
}

export function createShowInfo(params) {
  return request({
    url: '/api/animalShow/createShowInfo',
    method: 'get',
    params
  })
}

export function updateShowInfo(params) {
  return request({
    url: '/api/animalShow/updateShowInfo',
    method: 'get',
    params
  })
}

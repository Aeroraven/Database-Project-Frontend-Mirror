import request from '@/utils/request'

export function getGettingAroundZooData(params) {
  return request({
    url: '/api/gettingAroundZoo/getGettingAroundZooData',
    method: 'get',
    params
  })
}

export function createGettingAroundZooInfo(params) {
  return request({
    url: '/api/gettingAroundZoo/createGettingAroundZooInfo',
    method: 'get',
    params
  })
}

export function updateGettingAroundZooInfo(params) {
  return request({
    url: '/api/gettingAroundZoo/updateGettingAroundZooInfo',
    method: 'get',
    params
  })
}
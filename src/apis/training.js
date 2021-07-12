import request from '@/utils/request'

export function getTrainingData(params) {
  return request({
    url: '/api/Training/getTrainingData',
    method: 'get',
    params
  })
}

export function createTrainingInfo(params) {
  return request({
    url: '/api/Training/createTrainingInfo',
    method: 'get',
    params
  })
}

export function updateTrainingInfo(params) {
  return request({
    url: '/api/Training/updateTrainingInfo',
    method: 'get',
    params
  })
}

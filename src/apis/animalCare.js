import request from '@/utils/request'

export function getCareData(params) {
  return request({
    url: '/api/animalCare/getCareData',
    method: 'get',
    params
  })
}


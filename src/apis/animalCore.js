import request from '@/utils/request'

export function getAnimalList(params) {
    return request({
      url: '/api/animalCore/getAnimalList',
      method: 'get',
      params
    })
  }
  
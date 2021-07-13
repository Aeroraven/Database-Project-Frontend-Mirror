import request from '@/utils/request'

export function getAnimalList(params) {
  return request({
    url: '/api/animalInfo/getinformation',
    method: 'get',
    params
  })
}
  
import request from '@/utils/request'

export function getinformation(params) {
  return request({
    url: '/api/animalInfo/getinformation',
    method: 'get',
    params
  })
}

export function createinformation(data) {
  return request({
    url: '/api/animalBreedInfo/createInfo',
    method: 'post',
    data
  })
}

export function updateinformation(data) {
  return request({
    url: '/api/animalInfo/updateinformation',
    method: 'post',
    data
  })
}

export function deleteinformation(id) {
  return request({
    url: '/api/animalInfo/deleteinformation/'+id,
    method: 'delete',
    //params
  })
}

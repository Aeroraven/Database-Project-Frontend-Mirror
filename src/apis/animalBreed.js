import request from '@/utils/request'

export function getBreedInfo(params) {
  return request({
    url: '/api/animalBreed/getBreedInfo',
    method: 'get',
    params
  })
}

export function createBreedInfo(params) {
  return request({
    url: '/api/animalBreed/createBreedInfo',
    method: 'post',
    params
  })
}

export function updateBreedInfo(params) {
  return request({
    url: '/api/animalBreed/updateBreedInfo',
    method: 'post',
    params
  })
}


export function deleteBreedInfo(params) {
    return request({
      url: '/api/animalBreed/deleteBreedInfo',
      method: 'delete',
      params
    })
}

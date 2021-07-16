import request from '@/utils/request'

export function getpregnent(params) {
  return request({
    url: '/api/animalBreedInfo/getpregnent',
    method: 'get',
    params
  })
}

export function createBreedInfo(params) { //Altered
  return request({
    url: '/api/animalBreedInfo/createBirthInfo',
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

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
    method: 'post',
    params
  })
}

export function updateShowInfo(params) {
  return request({
    url: '/api/animalShow/updateShowInfo',
    method: 'put',
    params
  })
}//查 get  增 post 删 delete 改 put

export function deleteShowInfo(params) {
  return request({
    url: '/api/animalShow/deleteShowInfo',
    method: 'delete',
    params
  })
}
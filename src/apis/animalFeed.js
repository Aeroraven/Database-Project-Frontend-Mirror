import request from '@/utils/request'

export function getFeedRecord(params) {
  return request({
    url: '/api/animalFeed/getFeedRecord',
    method: 'get',
    params
  })
}

export function createFeedRecord(data) {
  return request({
    url: '/api/animalFeed/createFeedRecord',
    method: 'post',
    data
  })
}

export function updateFeedRecord(params) {
    return request({
      url: '/api/animalFeed/updeteFeedRecord',
      method: 'post',
      params
    })
  }
  

export function deleteFeedRecord(params) {
    return request({
      url:  '/api/animalFeed/deleteFeedRecord',
      method: 'delete',
      params
    })
}

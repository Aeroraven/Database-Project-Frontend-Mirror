  import request from '@/utils/request'

  export function getGettingAroundZooFlowInfo(params) {
    return request({
      url: '/api/gettingAroundZoo/getGettingAroundZooFlowInfo',
      method: 'get',
      params
    })
  }

  export function deleteGettingAroundZooFlowInfo(params) {
    return request({
      url: '/api/gettingAroundZoo/deleteGettingAroundZooFlowInfo',
      method: 'delete',
      params
    })
  } 

  export function getGettingAroundZooData(params) {
    return request({
      url: '/api/gettingAroundZoo/getGettingAroundZooData',
      method: 'get',
      params
    })
  }

  export function updateGettingAroundZooInfo(params) {
    return request({
      url: '/api/gettingAroundZoo/updateGettingAroundZooInfo',
      method: 'put',
      params
    })
  }


  export function createGettingAroundZooInfo(params) {
    return request({
      url: '/api/gettingAroundZoo/createGettingAroundZooInfo',
      method: 'post',
      params
    })
  }
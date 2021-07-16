import request from '@/utils/request'

export function getShowTicketData(params) {
  return request({
    url: '/api/showTicketManagement/getShowTicketData',
    method: 'get',
    params
  })
}

export function updateShowTicketInfo(params) {
  return request({
    url: '/api/showTicketManagement/updateShowTicketInfo',
    method: 'put',
    params
  })
}


export function getShowTicketFlowInfo(params) {
  return request({
    url: '/api/showTicketManagement/getShowTicketFlowInfo',
    method: 'get',
    params
  })
}

export function deleteShowTicketFlowInfo(params) {
  return request({
    url: '/api/showTicketManagement/deleteShowTicketFlowInfo',
    method: 'delete',
    params
  })
} 

export function createShowTicketInfo(params) {
  return request({
    url: '/api/showTicketManagement/createShowTicketInfo',
    method: 'post',
    params
  })
} 
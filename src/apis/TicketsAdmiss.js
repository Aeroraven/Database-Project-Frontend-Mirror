import request from '@/utils/request'

export function getAdmissData(params) {
  return request({
    url: '/api/TicketsAdmiss/getAdmissData',
    method: 'get',
    params
  })
}

export function createAdmissInfo(params) {
  return request({
    url: '/api/TicketsAdmiss/createAdmissInfo',
    method: 'get',
    params
  })
}

export function updateAdmissInfo(params) {
  return request({
    url: '/api/TicketsAdmiss/updateAdmissInfo',
    method: 'get',
    params
  })
}

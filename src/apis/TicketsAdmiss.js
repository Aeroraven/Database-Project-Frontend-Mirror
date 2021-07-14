import request from '@/utils/request'

// export function getAdmissData(params) {
//   return request({
//     url: '/api/TicketsAdmiss/getAdmissData',
//     method: 'get',
//     params
//   })
// }


export function getAdmissData(params) {
  return request({
    url: '/api/TicketsAdmiss/getAdmissData',
    method: 'get',
    params
  })
}

// /api/AdmissionTickets/{id}
// export function getAdmissData(params) {
//   return request({
//     url: '/api/AdmissionTickets',
//     method: 'get',
//     params
//   })
// }

export function createAdmissInfo(params) {
  return request({
    url: '/api/admissionT/createAdmissInfo',
    method: 'post',
    params
  })
}

export function updateAdmissInfo(params) {
  return request({
    url: '/api/TicketsAdmiss/updateAdmissInfo',
    method: 'put',
    params
  })
}

export function deleteAdmissInfo(params) {
  return request({
    url: '/api/TicketsAdmiss/deleteAdmissInfo',
    method: 'delete',
    params
  })
}

import request from '@/utils/request'

export function getList(params) {
  return request({
    url: 'http://localhost:11451/index.php',
    method: 'get',
    params
  })
}

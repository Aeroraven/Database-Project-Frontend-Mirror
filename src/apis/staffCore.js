import request from '@/utils/request'

export function getStaffList(params) {
    return request({
        url: '/api/staffManagement/getStaffList',
        method: 'get',
        params
    })
}
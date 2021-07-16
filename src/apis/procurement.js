import request from '@/utils/request'

export function getProcOverview(params) {
    return request({
        url: '/api/procManagement/getProcOverview',
        method: 'get',
        params
    })
}

export function createNewProc(params) {
    return request({
        url: '/api/procManagement/createNewProc',
        method: 'post',
        params
    })
}

export function getPendingRequests(params) {
    return request({
        url: '/api/procManagement/getProcOverview',
        method: 'get',
        params
    })
}


export function changeProcStatus(params) {
    return request({
        url: '/api/procManagement/changeProcStatus',
        method: 'put',
        params
    })
}
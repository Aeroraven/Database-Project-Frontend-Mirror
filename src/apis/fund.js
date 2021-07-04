import request from '@/utils/request'

export function getAccountIncomesOverview(params) {
    return request({
        url: '/api/fundManagement/getAccountIncomesOverview',
        method: 'get',
        params
    })
}
export function getAccountExpenseOverview(params) {
    return request({
        url: '/api/fundManagement/getAccountExpenseOverview',
        method: 'get',
        params
    })
}
export function getOverallBalanceShift(params) {
    return request({
        url: '/api/fundManagement/getOverallBalanceShift',
        method: 'get',
        params
    })
}
export function getAccountBalanceShift(params) {
    return request({
        url: '/api/fundManagement/getAccountBalanceShift',
        method: 'get',
        params
    })
}



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

export function getCategoryIncomesOverview(params) {
    return request({
        url: '/api/fundManagement/getCategoryIncomesOverview',
        method: 'get',
        params
    })
}
export function getCategoryExpenseOverview(params) {
    return request({
        url: '/api/fundManagement/getCategoryExpenseOverview',
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

export function getAccountList(params) {
    return request({
        url: '/api/fundManagement/getAccountList',
        method: 'get',
        params
    })
}


export function deleteFlowEntry(params) {
    return request({
        url: '/api/fundManagement/deleteFlowEntry',
        method: 'get',
        params
    })
}

export function updateFlowEntry(params) {
    return request({
        url: '/api/fundManagement/updateFlowEntry',
        method: 'get',
        params
    })
}

export function getFlowEntries(params) {
    return request({
        url: '/api/fundManagement/getFlowEntries',
        method: 'get',
        params
    })
}

export function addBankAccount(params) {
    return request({
        url: '/api/fundManagement/addBankAccount',
        method: 'get',
        params
    })
}

export function getAuthList(params) {
    return request({
        url: '/api/fundManagement/getAuthList',
        method: 'get',
        params
    })
}


export function revokeBankAccAuth(params) {
    return request({
        url: '/api/fundManagement/revokeBankAccAuth',
        method: 'get',
        params
    })
}

export function grantBankAccAuth(params) {
    return request({
        url: '/api/fundManagement/revokeBankAccAuth',
        method: 'get',
        params
    })
}
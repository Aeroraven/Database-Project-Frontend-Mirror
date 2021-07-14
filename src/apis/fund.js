import request from '@/utils/request'

export function getAccountIncomesOverview(params) {
    return request({
        url: '/api/fundManagement/getAccountIncomesOverview',
        method: 'post',
        params
    })
}
export function getAccountExpenseOverview(params) {
    return request({
        url: '/api/fundManagement/getAccountExpenseOverview',
        method: 'post',
        params
    })
}

export function getCategoryIncomesOverview(params) {
    return request({
        url: '/api/fundManagement/getCategoryIncomesOverview',
        method: 'post',
        params
    })
}
export function getCategoryExpenseOverview(params) {
    return request({
        url: '/api/fundManagement/getCategoryExpenseOverview',
        method: 'post',
        params
    })
}

export function getOverallBalanceShift(params) {
    return request({
        url: '/api/fundManagement/getOverallBalanceShift',
        method: 'post',
        params
    })
}
export function getAccountBalanceShift(params) {
    return request({
        url: '/api/fundManagement/getAccountBalanceShift',
        method: 'post',
        params
    })
}

export function getAccountList(params) {
    return request({
        url: '/api/fundManagement/getAccountList',
        method: 'post',
        params
    })
}


export function deleteFlowEntry(params) {
    return request({
        url: '/api/fundManagement/deleteFlowEntry',
        method: 'post',
        params
    })
}

export function updateFlowEntry(params) {
    return request({
        url: '/api/fundManagement/updateFlowEntry',
        method: 'post',
        params
    })
}

export function getFlowEntries(params) {
    return request({
        url: '/api/fundManagement/getFlowEntries',
        method: 'post',
        params
    })
}

export function addBankAccount(params) {
    return request({
        url: '/api/fundManagement/addBankAccount',
        method: 'post',
        params
    })
}

export function getAuthList(params) {
    return request({
        url: '/api/fundManagement/getAuthList',
        method: 'post',
        params
    })
}


export function revokeBankAccAuth(params) {
    return request({
        url: '/api/fundManagement/revokeBankAccAuth',
        method: 'post',
        params
    })
}

export function grantBankAccAuth(params) {
    return request({
        url: '/api/fundManagement/revokeBankAccAuth',
        method: 'post',
        params
    })
}
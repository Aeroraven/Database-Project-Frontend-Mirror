import request from '@/utils/request'

export function getAccountIncomesOverview(data) {
    return request({
        url: '/api/fundManagement/getAccountIncomesOverview',
        method: 'post',
        data
    })
}
export function getAccountExpenseOverview(data) {
    return request({
        url: '/api/fundManagement/getAccountExpenseOverview',
        method: 'post',
        data
    })
}

export function getCategoryIncomesOverview(data) {
    return request({
        url: '/api/fundManagement/getCategoryIncomesOverview',
        method: 'post',
        data
    })
}
export function getCategoryExpenseOverview(data) {
    return request({
        url: '/api/fundManagement/getCategoryExpenseOverview',
        method: 'post',
        data
    })
}

export function getOverallBalanceShift(data) {
    return request({
        url: '/api/fundManagement/getOverallBalanceShift',
        method: 'post',
        data
    })
}
export function getAccountBalanceShift(data) {
    return request({
        url: '/api/fundManagement/getAccountBalanceShift',
        method: 'post',
        data
    })
}

export function getAccountList(data) {
    return request({
        url: '/api/fundManagement/getAccountList',
        method: 'post',
        data
    })
}


export function deleteFlowEntry(data) {
    return request({
        url: '/api/fundManagement/deleteFlowEntry',
        method: 'post',
        data
    })
}

export function updateFlowEntry(data) {
    return request({
        url: '/api/fundManagement/updateFlowEntry',
        method: 'post',
        data
    })
}

export function getFlowEntries(data) {
    return request({
        url: '/api/fundManagement/getFlowEntries',
        method: 'post',
        data
    })
}

export function addBankAccount(data) {
    return request({
        url: '/api/fundManagement/addBankAccount',
        method: 'post',
        data
    })
}

export function getAuthList(data) {
    return request({
        url: '/api/fundManagement/getAuthList',
        method: 'post',
        data
    })
}


export function revokeBankAccAuth(data) {
    return request({
        url: '/api/fundManagement/revokeBankAccAuth',
        method: 'post',
        data
    })
}

export function grantBankAccAuth(data) {
    return request({
        url: '/api/fundManagement/revokeBankAccAuth',
        method: 'post',
        data
    })
}
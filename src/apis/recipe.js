import request from '@/utils/request'

export function getRecipe(params) {
  return request({
    url: '/api/recipe/getRecipe',
    method: 'get',
    params
  })
}

export function createRecipe(data) {
  return request({
    url: '/api/recipe/createRecipe',
    method: 'post',
    data
  })
}

export function updateRecipe(data,id) {
  console.log(data)
  return request({
    url: '/api/recipe/updteRecipe/',
    method: 'put',
    data
  })
}


export function deleteRecipe(data,id) {
    return request({
      url: '/api/recipe/deleteRecipe/'+id,
      method: 'delete',
      data
    })
}

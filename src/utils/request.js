import axios from 'axios'
import store from '@/store'
import { getToken } from '@/utils/auth'

// create an axios instance
const service = axios.create({
  baseURL: 'http://47.118.78.110:8088/',
  withCredentials: true, 
  timeout: 20000 
})

// request interceptor
service.interceptors.request.use(
  config => {
    let lsToken = localStorage.getItem('zmsToken')
    if (lsToken!=''&&lsToken!=null) {
      config.headers['Authorization'] = lsToken
    }
    return config
  },
  error => {
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  response => {
    console.log ("请求已经响应")
    const res = response.data
    console.log(response.data)

    if(response.status==204){
      return res
    }

    if (res.code != 200) {
      console.log ("服务端成功响应，但业务逻辑不成功。")
      return Promise.reject(new Error(res.message || 'Error'))
    } else {
      console.log("请求正常返回")
      console.log(res)
      return res
    }
  },
  error => {
    if(error.response){
      console.log(error.response)
      if(error.response.status===401){
        localStorage.setItem('zmsToken','')
        window.location.href='/zmsoffice/'
      }
      if(error.response.status===500){
        return Promise.reject(new Error('输入的数据存在非法部分，请重新检查输入后再进行重试。'))
      }
      if(error.response.status===400){
        return Promise.reject(new Error('输入的数据存在非法部分，请重新检查输入后再进行重试。'))
      }
      if(error.response.status===403){
        return Promise.reject(new Error('您暂无权限查看当前页面。'))
      }
      if(error.response.status===404){
        return Promise.reject(new Error('您所访问的服务当前正在维护，或已经迁移。'))
      }
    }
    console.log('错误发生：' + error) // for debug
    return Promise.reject(error)
  }
)

export default service
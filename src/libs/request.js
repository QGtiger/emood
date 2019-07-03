import axios from 'axios'
import {
  Message,
  Loading
} from 'element-ui'
import router from '../router/index.js'  //注意路径与文件名
import config from '@/config'

const { baseUrl } = config

const service = axios.create({
  baseURL: baseUrl.master, // api 的 base_url
  timeout: 5000 // request timeout
})

let loading // 定义loading变量

function startLoading () { // 使用Element loading-start 方法
  loading = Loading.service({
    lock: true,
    text: '加载中...',
    background: 'rgba(0, 0, 0, 0.7)'
  })
}

function endLoading () { // 使用Element loading-close 方法
  loading.close()
}

// 请求拦截  设置统一header
service.interceptors.request.use(
  config => {
    // 加载
    startLoading()
    if (localStorage.token) {
      config.headers.Authorization = localStorage.token
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// 响应拦截  401 token过期处理
service.interceptors.response.use(
  response => {
    endLoading()
    var p = new Promise((resolve, reject)=>{
      if(response.data.code == 200){
        resolve(response)
      }
      else if(response.data.code == 500){
        Message.error(response.data.msg)
        router.push('/login')
      }else{
        Message.error(response.data.msg)
      }
    })
    return p
  },
  error => {
    // 错误提醒
    endLoading()
    Message.error(error)
  }
)

export default service
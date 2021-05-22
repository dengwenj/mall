import axios from "axios";

export function request(config) {
  // 创建对应的axios实例
  const instance = axios.create({
    baseURL: 'http://152.136.185.210:7878/api/m5',
    timeout: 5000
  })

  // axios拦截器 请求拦截
  instance.interceptors.request.use(
    config => {
      return config
    },
    err => {
      console.log(err);
    })

  // axios拦截器 响应拦截
  instance.interceptors.response.use(
    res => {
      // console.log(res)
      return res.data
    },
    err => {
      console.log(err);
    }
  )

  // 返回的是Promise
  return instance(config)
}
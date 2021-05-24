import { request } from "./request";

// 在这里面在对request做了一层封装
export function getHomeMultidata() {
  return request({
    url: '/home/multidata'
  })
}

// 请求商品数据
export function getHomeGoods(type, page) {
  return request({
    url: '/home/data',
    params: {
      type,
      page
    }
  })
}
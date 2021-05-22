import { request } from "./request";

// 在这里面在对request做了一层封装
export function getHomeMultidata() {
  return request({
    url: '/home/multidata'
  })
}
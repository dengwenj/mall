import Vue from "vue";
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'


// 安装插件
Vue.use(Vuex)

// 创建store对象
const state = {
  // 数组里面放的是商品
  cartList: []
}
const store = new Vuex.Store({
  state,
  // mutations里面的每个方法尽可能完成的事件比较单一一点
  mutations,
  actions,
  getters
})

// 导出
export default store
// mutations常量类型
import { ADDCOUNTER, ADDTOCART } from './mutation_types'

export default {
  // mutations里面的每个方法尽可能完成的事件比较单一一点
  [ADDCOUNTER](state, payLoad) {
    payLoad.count++
  },
  [ADDTOCART](state, payLoad) {
    // 添加新的商品
    state.cartList.push(payLoad)
  },
  xiuGaiBorDer1(state, playLoad) {
    state.cartList.forEach(item => {
      item.isBorder = false
    });
  },
  xiuGaiBorDer2(state, playLoad) {
    state.cartList.forEach(item => {
      item.isBorder = true
    });
  }
}
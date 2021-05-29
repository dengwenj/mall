// mutations常量类型
import { ADDCOUNTER, ADDTOCART } from './mutation_types'

export default {
  addCart(context, payLoad) {
    // payLoad新添加的商品
    let oldProduct = null
    context.state.cartList.forEach(item => {
      // 查找之前数组中是否又该商品
      if (item.iid === payLoad.iid) {
        oldProduct = item
      }
    });
    // 判断oldProduct有没有
    if (oldProduct) {
      // oldProduct.count += 1
      context.commit(ADDCOUNTER, oldProduct)
    } else {
      // 先每个都添加一个count属性和isBorder这是是否勾上
      payLoad.count = 1;
      payLoad.isBorder = true
        // state.cartList.push(payLoad)
      context.commit(ADDTOCART, payLoad)
    }
  }
}
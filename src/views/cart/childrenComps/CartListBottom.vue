<template>
  <div class="cart-list-bottom" v-show="cartList.length">
    <div class="button-left">
      <check-button
        class="ch"
        :is-border="isSelectAll"
        @click.native="quanxuanClick"
      ></check-button>
      <span class="quanxuan">全选</span>
    </div>
    <div class="button-center">
      <span>合计:￥{{ heji }}</span>
    </div>
    <div class="button-right">
      <span>去结算({{ jisuan }})</span>
    </div>
  </div>
</template>

<script>
import CheckButton from "./CheckButton";

import { mapGetters } from "vuex";

export default {
  data() {
    return {
      isgg: false,
    };
  },
  components: {
    CheckButton,
  },
  computed: {
    ...mapGetters(["cartList"]),
    heji() {
      if (this.cartList.length !== 0) {
        console.log(this.cartList);
        return this.cartList
          .filter((item) => {
            return item.isBorder; //item.isBorder为true就返回这个item 返回为数组里面
          })
          .reduce((prevalue, item) => {
            return prevalue + item.price * item.count; // 对上面返回的所有数组进行汇总
          }, 0)
          .toFixed(2);
      }
    },
    jisuan() {
      if (this.cartList.length !== 0) {
        return this.cartList.filter((item) => item.isBorder).length; // item.isBorder为true的时候就返回成数组，数组的长度多少就有多少个去结算的
      }
    },
    isSelectAll() {
      // 1 filter
      // return !this.cartList.filter((item) => !item.isBorder).length; // 有长度的话就是false 没长度就是0 0取反就是true
      // 2 some 找到第一次了就是终止循环了
      // return !this.cartList.some((item) => !item.isBorder);
      // 3 find 和some差不多
      return !this.cartList.find((item) => !item.isBorder);
      // 4 普通的遍历
    },
  },
  methods: {
    quanxuanClick() {
      if (this.isSelectAll) {
        // this.isSelectAll = !this.isSelectAll;
        this.$store.commit("xiuGaiBorDer1");
      } else {
        // this.isSelectAll = true;
        this.$store.commit("xiuGaiBorDer2");
      }
    },
  },
};
</script>

<style scoped>
.cart-list-bottom {
  display: flex;
  position: relative;
  height: 40px;
  background-color: #eee;
  line-height: 40px;
  font-size: 14px;
}
.ch {
  display: inline-block;
  margin: 0;
  line-height: 20px;
  vertical-align: middle;
  margin: 0 5px;
}
.button-left {
  width: 70px;
}
.button-center {
  flex: 1;
  margin-left: 20px;
}
.button-right {
  width: 100px;
  text-align: center;
  background-color: rgb(248, 144, 144);
  color: #fff;
}
</style>
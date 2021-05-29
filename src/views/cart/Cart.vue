<template>
  <div class="cart">
    <!-- 导航 -->
    <nav-bar class="nav-bar">
      <div slot="center">购物车({{ length }})</div>
    </nav-bar>
    <!-- 列表 -->
    <cart-list></cart-list>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import CartList from "./childrenComps/CartList";

// vuex
import { mapGetters } from "vuex";

export default {
  components: {
    NavBar,
    CartList,
  },
  computed: {
    // 两种语法
    // ...mapGetters(["cartLength"]), // 数组语法
    // 对象语法 名字可以自己取
    ...mapGetters({
      length: "cartLength",
    }),
  },
};
</script>

<style scoped>
.cart {
  height: 100vh;
}
.nav-bar {
  background: #ff8e96;
  color: #fff;
}
</style>
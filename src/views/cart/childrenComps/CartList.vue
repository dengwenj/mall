<template>
  <div class="cart-list">
    <scroll class="content" ref="scroll">
      <cart-list-item
        v-for="(item, index) in cartList"
        :key="index"
        :product="item"
      ></cart-list-item>
    </scroll>
    <cart-list-bottom></cart-list-bottom>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import Scroll from "components/common/scroll/Scroll";
import CartListItem from "./CartListItem";
import CartListBottom from "./CartListBottom";

export default {
  components: {
    Scroll,
    CartListItem,
    CartListBottom,
  },
  computed: {
    ...mapGetters(["cartList"]),
  },
  activated() {
    // 当有数据进来的时候再来进行刷新 这时候better-scroll才重新定可滚动的位置
    this.$refs.scroll.refresh();
  },
};
</script>

<style scoped>
.cart-list {
  height: calc(100% - 44px - 49px - 40px);
}
.content {
  height: 100%;
  overflow: hidden;
}
</style>
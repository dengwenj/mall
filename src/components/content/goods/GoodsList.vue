<template>
  <div class="goods-list">
    <goods-list-item
      v-for="item in goodsList"
      :key="item.iid"
      :goodsListItem="item"
    ></goods-list-item>
  </div>
</template>

<script>
import GoodsListItem from "./GoodsListItem";
export default {
  props: {
    goodsList: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  // 注册组件
  components: {
    GoodsListItem,
  },
};
</script>

<style>
.goods-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 2;
}
</style>
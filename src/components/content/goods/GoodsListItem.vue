<template>
  <div class="goods-list-item" @click="detailClick">
    <img v-lazy="goodsListItem.show.img" alt="" class="img" @load="itemload" />
    <div class="bottom">
      <p>{{ goodsListItem.title }}</p>
      <div class="xiamian">
        <span class="l">{{ goodsListItem.price }}</span>
        <span class="r">{{ goodsListItem.cfav }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    goodsListItem: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    itemload() {
      this.$bus.$emit("itemImgLoad");
    },
    detailClick() {
      // console.log(this.goodsListItem);
      this.$router.push("/detail/" + this.goodsListItem.iid);
    },
  },
};
</script>

<style>
.goods-list-item {
  position: relative;
  padding-bottom: 40px;
  width: 48%;
}
.goods-list-item .img {
  width: 100%;
  border-radius: 5px;
}
.bottom p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.bottom .xiamian .l {
  color: var(--color-tint);
  font-size: 14px;
  position: absolute;
  left: 30px;
  bottom: 16px;
}
.bottom .xiamian .r {
  display: inline-block;
  font-size: 14px;
  position: absolute;
  left: 90px;
  bottom: 16px;
}
.bottom .xiamian .l::after {
  margin-left: 8px;
  display: inline-block;
  content: "";
  width: 13px;
  height: 13px;
  background: url("~assets/img/common/collect.svg") no-repeat 0 0/13px 13px;
}
</style>
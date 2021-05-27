<template>
  <div class="tj">
    <div
      class="goods-list-item"
      v-for="item in recommend"
      :key="item.tradeItemId"
    >
      <img :src="item.image" alt="" class="img" />
      <div class="bottom">
        <p>{{ item.title }}</p>
        <div class="xiamian">
          <span class="l">{{ item.price }}</span>
          <span class="r">{{ item.cfav }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    recommend: {
      type: Array,
      defalut() {
        return [];
      },
    },
  },
  components: {},
};
</script>

<style scoped>
.tj {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: 3px;
}
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
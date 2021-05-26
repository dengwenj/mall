<template>
  <div class="one" v-if="Object.keys(goods).length !== 0">
    <p class="Detail-base-info-title">{{ goods.title }}</p>
    <div class="san">
      <span class="newPrice">{{ goods.newPrice }}</span>
      <span class="oldPrice">{{ goods.oldPrice }}</span>
      <span class="discount-desc" :style="discountBgColor">{{
        goods.discountDesc
      }}</span>
    </div>
    <div class="columns">
      <span class="xl">{{ goods.columns[0] }}</span>
      <span class="sc">{{ goods.columns[1] }}</span>
      <span class="th">{{
        goods.services[goods.services.length - 1].name
      }}</span>
    </div>
    <div class="services">
      <span v-for="item in goods.services.length - 1" :key="item">
        <img :src="goods.services[item - 1].icon" alt="" class="item_icon" />
        <span class="item_name">{{ goods.services[item - 1].name }}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailBaseInfo",
  props: {
    goods: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  computed: {
    discountBgColor() {
      return this.goods.discountBgColor
        ? { backgroundColor: this.goods.discountBgColor }
        : {};
    },
  },
};
</script>

<style scoped>
.one {
  padding: 10px 5px 0 5px;
}
.Detail-base-info-title {
  color: #434343;
  line-height: 20px;
  margin-bottom: 10px;
}
.san .newPrice {
  color: #f57183;
  font-size: 20px;
}
.san .oldPrice {
  padding-left: 5px;
  font-size: 14px;
  text-decoration: line-through;
  color: #989898;
}
.san .discount-desc {
  display: inline-block;
  margin-left: 5px;
  padding: 0 6px;
  color: #fedbd9;
  height: 20px;
  border-radius: 8px;
  font-size: 13px;
  text-align: center;
  line-height: 20px;
}
.columns {
  display: flex;
  margin-top: 16px;
  padding-bottom: 8px;
  border-bottom: 1px solid #f1f1f1;
}
.columns > span {
  flex: 1;
}
.columns .xl,
.sc,
.th {
  font-size: 13px;
  color: #a5a5a5;
}
.columns .sc {
  text-align: center;
}
.columns .th {
  text-align: right;
}
.services {
  display: flex;
  padding: 20px 0;
  border-bottom: 3px solid #f3f3f3;
}
.services span {
  flex: 1;
  color: #434343;
  font-size: 12px;
  text-align: center;
}
.services .item_icon {
  width: 14px;
  height: 14px;
  color: #d6d6d6;
  vertical-align: middle;
}

.services span:nth-child(1) {
  padding-left: 5px;
  text-align: left;
}
.services span:last-child {
  text-align: right;
}
</style>
<template>
  <div class="detail-shop-info">
    <div class="hw">
      <img class="hw-logo" :src="shop.logo" alt="" />
      <span class="hw-name">{{ shop.name }}</span>
    </div>
    <div class="er">
      <div class="zuo gt">
        <div class="xiaoliang">
          <span class="shangmian">{{ shop.sells }}</span>
          <span class="xiamian">总销量</span>
        </div>
        <div class="xiaoliang">
          <span class="shangmian">{{ shop.goodsCount }}</span>
          <span class="xiamian">全部宝贝</span>
        </div>
      </div>
      <div class="you gt">
        <div class="sange">
          <div class="ms" v-for="item in shop.score" :key="item.name">
            <span class="miaoshu">{{ item.name }}</span>
            <span class="default" :class="{ score: item.isBetter }">{{
              item.score
            }}</span>
            <span class="default bj" :class="{ gaodi: item.isBetter }">{{
              item.isBetter ? "高" : "低"
            }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="jdgg">
      <span class="gg">进店逛逛</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    shop: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style scoped>
.detail-shop-info {
  padding: 20px 0;
  border-bottom: 3px solid #eee;
}
.hw .hw-logo {
  width: 40px;
  height: 40px;
  border: 2px solid #eee;
  border-radius: 50%;
  vertical-align: middle;
  margin: 0 10px;
}
.hw .hw-name {
  color: #797979;
}

.er {
  margin-top: 20px;
  display: flex;
}
.gt {
  flex: 1;
  display: flex;
}
.zuo {
  /* padding-right: 10px; */
  border-right: 2px solid #eee;
}
.zuo .xiaoliang {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 10px;
}
.xiaoliang > span {
  font-size: 13px;
  color: #595959;
}
.xiaoliang .xiamian {
  margin-top: 6px;
}
.you {
  padding-left: 30px;
}
.miaoshu {
  font-size: 13px;
}
.default {
  margin-left: 12px;
  font-size: 13px;
  color: #84ac66;
}

.bj {
  background-color: #84ac66;
  color: #fff;
}

.ms {
  position: relative;
}
.ms .bj {
  position: absolute;
  top: 2px;
  right: -25px;
}
.score {
  color: #f37464;
}
.gaodi {
  color: #f37464;
  background-color: #f37464;
  color: #fff;
}
.jdgg {
  padding: 16px 0;
  text-align: center;
}
.jdgg .gg {
  display: inline-block;
  background-color: #f1f5fb;
  padding: 0 20px;
  height: 25px;
  line-height: 25px;
  border-radius: 8px;
  font-size: 13px;
  color: #b6b8bd;
}
</style>
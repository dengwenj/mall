<template>
  <div class="bottom-bar">
    <div class="liangbian bottom-left">
      <div>
        <i class="bjc-img kf"></i>
        <span class="text">客服</span>
      </div>
      <div>
        <i class="bjc-img dp"></i>
        <span class="text">店铺</span>
      </div>
      <div>
        <i class="bjc-img sc"></i>
        <span class="text">收藏</span>
      </div>
    </div>
    <div class="liangbian bottom-right">
      <span class="gwc">加入购物车</span>
      <span class="gm">购买</span>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.bottom-bar {
  display: flex;
  height: 49px;
  position: relative;
  /* bottom: 49px; */
  background-color: #fff;
}
.liangbian {
  flex: 1;
  display: flex;
}
.liangbian > div {
  flex: 1;
  text-align: center;
}
.liangbian > div i {
  margin: 5px 0 0 15px;
  display: block;
  width: 20px;
  height: 20px;
  background: url("~assets/img/detail/detail_bottom.png") no-repeat 0 0;
  background-size: 20px;
}
.kf {
  background-position: 0 -48px !important;
}
.dp {
  background-position: 0 -89px !important;
}
.text {
  font-size: 13px;
}
.bottom-right > span {
  flex: 1;
  text-align: center;
  line-height: 49px;
  font-size: 14px;
}
.gwc {
  color: #544603;
  background-color: #ffdd17;
}
.gm {
  color: #fff;
  background-color: #ff7797;
}
</style>
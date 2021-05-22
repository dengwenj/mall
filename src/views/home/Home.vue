<template>
  <div id="home">
    <!-- 上面的导航 -->
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <!-- 轮播图 -->
    <home-swiper :banners="banners"></home-swiper>
    <!-- 推荐 -->
    <recommend-view :recommend="recommend"></recommend-view>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import HomeSwiper from "./childCops/HomeSwiper";
import RecommendView from "./childCops/RecommendView";
import { getHomeMultidata } from "network/home";
export default {
  data() {
    return {
      banners: [],
      recommend: [],
    };
  },
  // 注册组件
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
  },
  // 生命周期函数  创建了执行这个函数
  created() {
    // 请求多个数据
    getHomeMultidata().then((res) => {
      // console.log(res);
      this.banners = res.data.banner.list;
      this.recommend = res.data.recommend.list;
    });
  },
};
</script>

<style>
.home-nav {
  background-color: var(--color-tint);
  color: #fff;
}
</style>
<template>
  <div id="home">
    <!-- 上面的导航 -->
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <!-- 吸顶 -->
    <tab-control
      :control="['流行', '新款', '精选']"
      class="tab"
      @item-click="itemClick"
      ref="tabcontrol1"
      v-show="isFixed"
    ></tab-control>
    <!-- 滚动的 -->
    <scroll
      class="content"
      ref="scroll"
      :probe-type="3"
      @backTop="backTop"
      :pull-up-load="true"
      @topLoad="loadMore"
    >
      <!-- 轮播图 -->
      <home-swiper :banners="banners" @imageLoad="imageLoad"></home-swiper>
      <!-- 推荐 -->
      <recommend-view :recommend="recommend"></recommend-view>
      <!-- 本周推荐 -->
      <feature-view></feature-view>
      <!-- TabControl 点击切换数据-->
      <tab-control
        :control="['流行', '新款', '精选']"
        class="tab"
        @item-click="itemClick"
        ref="tabcontrol2"
      ></tab-control>
      <!-- 商品列表 -->
      <goods-list :goodsList="showGoods"></goods-list>
    </scroll>
    <!-- 点击回到顶部 -->
    <back-top @click.native="backTopClick" v-show="isShow"></back-top>
  </div>
</template>

<script>
// home首页的子组件
import HomeSwiper from "./childCops/HomeSwiper";
import RecommendView from "./childCops/RecommendView";
import FeatureView from "./childCops/FeatureView";
// 公共的组件
import NavBar from "components/common/navbar/NavBar";
import TabControl from "components/content/tabcontrol/TabControl";
import GoodsList from "components/content/goods/GoodsList";
import Scroll from "components/common/scroll/Scroll";
// 网络请求数据
import { getHomeMultidata, getHomeGoods } from "network/home";
import { debounce } from "common/utils";

// 混入
import { backTopMixin } from "common/mixin";

export default {
  data() {
    return {
      banners: [],
      recommend: [],
      // 商品数据
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currentType: "pop",
      offsetTop: 0,
      isFixed: false,
      saveY: 0,
    };
  },
  mixins: [backTopMixin],
  // 注册组件
  components: {
    HomeSwiper,
    RecommendView,
    FeatureView,
    NavBar,
    TabControl,
    GoodsList,
    Scroll,
  },
  activated() {
    this.$refs.scroll.scrollTo(0, this.saveY, 0);
    this.$refs.scroll.refresh();
  }, // 让home中的内容保持原来的位置
  deactivated() {
    // console.log(this.$refs.scroll.scroll.y);
    // console.log(this.$refs.scroll);
    this.saveY = this.$refs.scroll.getStartY();
  },
  // 生命周期函数  创建完就会执行这个函数
  created() {
    // 请求多个数据
    this.getHomeMultidata();

    // 请求商品数据
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  mounted() {
    //  防抖 不要让refresh非常频繁  默认的refresh非常的频繁 执行很多次
    const refresh = debounce(this.$refs.scroll.refresh, 50);
    // 监听item图片加载完成
    this.$bus.$on("itemImgLoad", () => {
      refresh();
    });
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    },
  },
  methods: {
    /* 
    事件处理
    */
    //  子传父
    itemClick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
      // 这里是上面的要和下面的点击一直 点的是一样的
      this.$refs.tabcontrol1.contentIndex = index;
      this.$refs.tabcontrol2.contentIndex = index;
    },

    backTop(position) {
      // console.log(position);
      // Math.abs()绝对值
      // 1 显示或隐藏右下角的图标
      // 混入了
      this.isShowChouQu(position);
      // 2 把tabcontrol吸顶到顶部
      this.isFixed = Math.abs(position.y) > this.offsetTop;
    },
    loadMore() {
      this.getHomeGoods(this.currentType);
    },
    imageLoad() {
      this.offsetTop = this.$refs.tabcontrol2.$el.offsetTop;
    },
    /* 
      网络请的数据
    */
    // 请求多个数据
    getHomeMultidata() {
      getHomeMultidata().then((res) => {
        // console.log(res);
        this.banners = res.data.banner.list;
        this.recommend = res.data.recommend.list;
      });
    },

    // 请求商品数据
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then((res) => {
        // (...res.data.list)这个就是把里面的元素一个一个的取出来push到this.goods[type].list里面去
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page = page;

        // 默认上拉加载只能执行一次  调用这个后就能执行很多次
        this.$refs.scroll.finishPullUp();
      });
    },
  },
};
</script>

<style scoped>
#home {
  padding-top: 44px;
  position: relative;
  height: 100vh;
}
.home-nav {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  background-color: var(--color-tint);
  color: #fff;
  z-index: 9999;
}
.tab {
  position: relative;
  z-index: 999;
}
.content {
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
  /* overflow: hidden; */
}
</style>
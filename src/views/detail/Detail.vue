<template>
  <div id="detail">
    <!-- 顶部导航 -->
    <detail-nar-bar
      class="narbar"
      @titleClick="titleClick"
      ref="nav"
    ></detail-nar-bar>
    <!-- 滚动 -->
    <scroll class="contnet" ref="scroll" @backTop="backTop" :probeType="3">
      <!-- 轮播图 -->
      <detial-swiper :top-images="topImages"></detial-swiper>
      <!-- 商品信息 -->
      <detail-base-info :goods="goods"></detail-base-info>
      <!-- 店铺信息 -->
      <detail-shop-info :shop="shop"></detail-shop-info>
      <!-- 详情数据 -->
      <detail-goods-info
        :xiangqing="xiangqing"
        @imgLoad="imgLoad"
      ></detail-goods-info>
      <!-- 参数 -->
      <detail-goods-params
        ref="params"
        :goodsParam="goodsParam"
      ></detail-goods-params>
      <!-- 评论 -->
      <detail-comment-info
        ref="comment"
        :commentInfo="commentInfo"
      ></detail-comment-info>
      <!-- 推荐 -->
      <detail-recommend
        ref="recommend"
        :recommend="recommend"
      ></detail-recommend>
    </scroll>
    <!-- 底部 -->
    <detail-bottom-bar></detail-bottom-bar>
    <!-- 点击回到顶部 -->
    <back-top @click.native="backTopClick" v-show="isShow"></back-top>
  </div>
</template>

<script>
import DetailNarBar from "./childComps/DetailNarBar";
import DetialSwiper from "./childComps/DetialSwiper";
import DetailBaseInfo from "./childComps/DetailBaseInfo";
import DetailShopInfo from "./childComps/DetailShopInfo";
import DetailGoodsInfo from "./childComps/DetailGoodsInfo";
import DetailGoodsParams from "./childComps/DetailGoodsParams";
import DetailCommentInfo from "./childComps/DetailCommentInfo";
import DetailRecommend from "./childComps/DetailRecommend";
import DetailBottomBar from "./childComps/DetailBottomBar";
import Scroll from "components/common/scroll/Scroll";

import { debounce } from "common/utils";

// 混入
import { backTopMixin } from "common/mixin";

// 网络请求
import {
  getDetail,
  Goods,
  Shop,
  Xiangqing,
  GoodsParam,
  recommend,
} from "network/detail";

export default {
  name: "Detail",
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      xiangqing: {},
      goodsParam: {},
      commentInfo: {
        // 因为是异步请求，然而在页面初步渲染的时候是获取不到user的
        user: {},
      },
      recommend: [],
      themeTopYs: [],
      getThemeTopY: null,
    };
  },
  mixins: [backTopMixin],
  components: {
    DetailNarBar,
    DetialSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailGoodsParams,
    DetailCommentInfo,
    DetailRecommend,
    DetailBottomBar,
    Scroll,
  },
  created() {
    // this.$route处于活跃的那个路由  重新执行created重新获取新的iid
    // 原本加了keep-alive的所以就不会重新创建和销毁 有一个属性 exclude="Detail"
    // 加了这个属性就乐意重新创建created了就可以重新获取新的id了 就获取到新的数据了
    this.iid = this.$route.params.iid;

    // 发送请求
    this._getDetail();

    // 推荐
    this._recommend();

    // 防抖
    this.getThemeTopY = debounce(() => {
      // 滚动到对应的主体
      this.themeTopYs = [];
      this.themeTopYs.push(0);
      this.themeTopYs.push(this.$refs.params.$el.offsetTop);
      this.themeTopYs.push(this.$refs.comment.$el.offsetTop);
      this.themeTopYs.push(this.$refs.recommend.$el.offsetTop);
      // console.log(this.themeTopYs);
    }, 100);
  },
  methods: {
    imgLoad() {
      // 刷新
      this.$refs.scroll.refresh();

      //在上面的防抖那里  在图片加载完之后，获取的高度是正确的
      this.getThemeTopY();
    },

    titleClick(index) {
      // 点击导航滚动到对应的位置
      this.$refs.scroll.scrollTo(0, -this.themeTopYs[index], 500);
    },

    backTop(position) {
      // [0, 4365, 5550, 5848]
      // 当在大于等于0小于4365的时候在 商品
      // 挡在大于等于4365小于5550的时候在 参数
      // 挡在大于等于5550小于5848的时候在 评论
      // 当大于等于5848的时候在 推荐
      let positionY = -position.y;
      const length = this.themeTopYs.length;
      for (let i = 0; i < length; i++) {
        if (
          (positionY >= this.themeTopYs[i] &&
            positionY < this.themeTopYs[i + 1]) ||
          (length - 1 == i && positionY >= this.themeTopYs[length - 1])
        ) {
          // 滚动过后上面的导航跟着到相应的位置
          this.$refs.nav.currentIndex = i;
        }
      }
      this.isShowChouQu(position);
    },

    // 发送请求
    _getDetail() {
      getDetail(this.iid)
        .then((result) => {
          const data = result.result;
          // 获取轮播图数据
          this.topImages = data.itemInfo.topImages;
          console.log(result);
          // 获取商品信息
          this.goods = new Goods(
            data.itemInfo,
            data.columns,
            data.shopInfo.services
          );
          // 创建店铺信息的对象
          this.shop = new Shop(data.shopInfo);
          // 保存商品的详情数据
          this.xiangqing = new Xiangqing(data.detailInfo);
          //参数
          this.goodsParam = new GoodsParam(
            data.itemParams.info,
            data.itemParams.rule
          );
          // 评论
          this.commentInfo = data.rate.list[0];
          console.log(this.commentInfo);
        })
        .catch((err) => {});
    },
    _recommend() {
      // 推荐
      recommend().then((result) => {
        this.recommend = result.data.list;
        console.log(result);
      });
    },
  },
};
</script>

<style scoped>
#detail {
  position: relative;
  z-index: 999;
  background-color: #fff;
  height: 100vh;
}
.narbar {
  position: relative;
  background-color: #fff;
  z-index: 9999;
}
.contnet {
  height: calc(100% - 44px - 49px);
}
</style>


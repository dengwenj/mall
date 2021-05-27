<template>
  <div id="detail">
    <!-- 顶部导航 -->
    <detail-nar-bar class="narbar"></detail-nar-bar>
    <scroll class="contnet" ref="scroll">
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
      <detail-goods-params :goodsParam="goodsParam"></detail-goods-params>
      <!-- 评论 -->
      <detail-comment-info :commentInfo="commentInfo"></detail-comment-info>
      <!-- 推荐 -->
      <detail-recommend :recommend="recommend"></detail-recommend>
    </scroll>
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
import Scroll from "components/common/scroll/Scroll";

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
    };
  },
  components: {
    DetailNarBar,
    DetialSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailGoodsParams,
    DetailCommentInfo,
    DetailRecommend,
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
  },
  methods: {
    imgLoad() {
      // 刷新
      this.$refs.scroll.refresh();
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
  height: calc(100% - 44px);
}
</style>


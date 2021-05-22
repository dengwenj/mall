<template>
  <div>
    <tab-bar>
      <tab-bar-item path="/home">
        <img
          slot="tabbaritem-imgActive"
          src="~assets/img/tabbar/home_active.svg"
          alt=""
        />
        <img slot="tabbaritem-img" src="~assets/img/tabbar/home.svg" alt="" />
        <div slot="tabbaritem-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category">
        <img
          slot="tabbaritem-imgActive"
          src="~assets/img/tabbar/category_active.svg"
          alt=""
        />
        <img
          slot="tabbaritem-img"
          src="~assets/img/tabbar/category.svg"
          alt=""
        />
        <div slot="tabbaritem-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/cart">
        <img
          slot="tabbaritem-imgActive"
          src="~assets/img/tabbar/shopcart_active.svg"
          alt=""
        />
        <img
          slot="tabbaritem-img"
          src="~assets/img/tabbar/shopcart.svg"
          alt=""
        />
        <div slot="tabbaritem-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile">
        <img
          slot="tabbaritem-imgActive"
          src="~assets/img/tabbar/profile_active.svg"
          alt=""
        />
        <img
          slot="tabbaritem-img"
          src="~assets/img/tabbar/profile.svg"
          alt=""
        />
        <div slot="tabbaritem-text">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from "components/common/tabbar/TabBar";
import TabBarItem from "components/common/tabbar/TabBarItem";
export default {
  components: {
    TabBar,
    TabBarItem,
  },
};
</script>

<style>
</style>
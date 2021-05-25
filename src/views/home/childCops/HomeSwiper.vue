<template>
  <swiper>
    <swiper-item v-for="item in banners" :key="item.title">
      <a :href="item.link">
        <img :src="item.image" alt="" @load="imageLoad" />
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper";
export default {
  // 父传子
  props: {
    banners: {
      type: Array,
      // default: [],
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      isload: false,
    };
  },
  // 注册组件
  components: {
    Swiper,
    SwiperItem,
  },
  methods: {
    imageLoad() {
      if (!this.isload) {
        this.$emit("imageLoad");
        this.isload = true;
      }
    },
  },
};
</script>

<style>
</style>
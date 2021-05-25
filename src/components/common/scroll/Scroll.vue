<template>
  <div ref="wrapper" class="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  props: {
    probeType: {
      type: Number,
      default: 0,
    },
    pullUpLoad: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      scroll: null,
    };
  },
  mounted() {
    // 1 创建BScroll对象
    // 变量来接收 this.scroll
    this.scroll = new BScroll(this.$refs.wrapper, {
      click: true,
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad,
    });
    // 2 监听滚动的位置
    if (this.probeType === 2 || this.probeType === 3) {
      this.scroll.on("scroll", (position) => {
        // console.log(position);
        // 字传父
        this.$emit("backTop", position);
      });
    }
    // 3 滚动到底部 上拉加载
    if (this.pullUpLoad) {
      this.scroll.on("pullingUp", () => {
        //子传父
        this.$emit("topLoad");
      });
    } // 会到顶部，第三个参数是回到顶部的时间
    // this.scroll.scrollTo(0, 0, 500);
  },
  methods: {
    scrollTo(x, y, time = 500) {
      this.scroll && this.scroll.scrollTo(x, y, time);
    },
    refresh() {
      // this.scroll 看这个是否为null 或undefined 为的话就不执行后面的了
      this.scroll && this.scroll.refresh();
    },
    finishPullUp() {
      this.scroll && this.scroll.finishPullUp();
    },
    getStartY() {
      // this.scroll && this.scroll.y;
      return this.scroll ? this.scroll.y : 0;
    },
  },
};
</script>

<style scoped>
</style>
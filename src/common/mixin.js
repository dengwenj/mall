import BackTop from "components/content/backTop/BackTop";

// 点击回到顶部
export const backTopMixin = {
  data() {
    return {
      isShow: false,
    }
  },
  components: {
    BackTop,
  },
  methods: {
    backTopClick() {
      // console.log(this.$refs.scroll);
      // 这里就拿到了组件对象里面封装的方法
      this.$refs.scroll.scrollTo(0, 0);
    },
    isShowChouQu(position) {
      this.isShow = Math.abs(position.y) > 1000;
    },
  },
}
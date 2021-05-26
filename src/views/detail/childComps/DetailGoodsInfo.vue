<template>
  <div class="xiangqing">
    <div class="desc">{{ xiangqing.desc }}</div>
    <div class="key">{{ xiangqing.key }}</div>
    <div class="imgages">
      <div class="list" v-for="item in xiangqing.list" :key="item">
        <img :src="item" alt="" @load="imgLoad" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    xiangqing: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      content: 0,
      img: 0,
    };
  },
  methods: {
    imgLoad() {
      // 判断所有的图片都加载完了，那么进行一次回调就可以了
      // ++this.content 这样的写的话表达式和变量是一样的
      if (++this.content === this.img) {
        this.$emit("imgLoad");
      }
    },
  },
  // wacth可以监听某一个属性的变化
  watch: {
    xiangqing() {
      this.img = this.xiangqing.list.length;
    },
  },
};
</script>

<style scoped>
.desc {
  padding: 20px 10px 20px 10px;
  font-size: 14px;
}
.key {
  padding: 0 0 10px 10px;
  font-size: 14px;
  color: #4c4c4c;
}
.list img {
  width: 100%;
  height: 100%;
}
</style>
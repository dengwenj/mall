<template>
  <div>
    <nav-bar>
      <div slot="left" @click="leftClick"><span class="span"></span></div>
      <div slot="center" class="title">
        <div
          class="title-item"
          v-for="(item, index) in titleItem"
          :key="item"
          @click="titleItemClick(index)"
          :class="{ active: currentIndex === index }"
        >
          {{ item }}
        </div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
export default {
  name: "DetailNarBar",
  data() {
    return {
      titleItem: ["商品", "参数", "评论", "推荐"],
      currentIndex: 0,
    };
  },
  components: {
    NavBar,
  },
  methods: {
    titleItemClick(index) {
      this.currentIndex = index;
    },
    leftClick() {
      this.$router.back();
    },
  },
};
</script>

<style scoped>
.title {
  display: flex;
  font-size: 14px;
}
.title-item {
  flex: 1;
}
.active {
  color: var(--color-high-text);
}
.span {
  display: inline-block;
  width: 12px;
  height: 12px;
  border-bottom: 2px solid #333;
  border-left: 2px solid #333;
  transform: rotate(45deg);
}
</style>
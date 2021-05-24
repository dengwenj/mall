<template>
  <div class="tab-control">
    <div
      v-for="(item, index) in control"
      :key="item"
      :class="{ active: index === contentIndex }"
      @click="itemClick(index)"
      id="tab-control-item"
    >
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  // 父传子
  props: {
    control: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      contentIndex: 0,
    };
  },
  methods: {
    itemClick(index) {
      this.contentIndex = index;
      this.$emit("item-click", index);
    },
  },
};
</script>

<style>
.tab-control {
  display: flex;
  text-align: center;
  font-size: 15px;
  height: 40px;
  line-height: 40px;
  background-color: #fff;
}
.tab-control #tab-control-item {
  flex: 1;
}
.tab-control .active span {
  padding: 5px;
  border-bottom: 2px solid var(--color-tint);
}
.active {
  color: var(--color-high-text);
}
</style>
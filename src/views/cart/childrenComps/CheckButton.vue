<template>
  <div class="button" :class="{ check: isBorder }">
    <img src="~assets/img/cart/tick.svg" alt="" />
  </div>
</template>

<script>
export default {
  props: {
    // 这个是从对象里面取出来的 isBorder
    isBorder: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped>
.button {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin: 40px 0 0 5px;
  border: 2px solid #aaa;
}
.check {
  border: 2px solid #ff8e96;
  background-color: #ff8e96;
}
</style>
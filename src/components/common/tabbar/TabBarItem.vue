<template>
  <div class="tab-bar-item" @click="tabbaritemClick">
    <div v-if="isActive"><slot name="tabbaritem-imgActive"></slot></div>
    <div v-else><slot name="tabbaritem-img"></slot></div>
    <div :style="color"><slot name="tabbaritem-text"></slot></div>
  </div>
</template>

<script>
export default {
  props: {
    path: String,
    activeColor: {
      type: String,
      default: "red",
    },
  },
  data() {
    return {
      // isActive: true,
    };
  },
  computed: {
    isActive() {
      //只选一个 返回为true
      // console.log(this.$route.path);
      // console.log(this.path); //  /home  //  /category   //  /cart  //  /profile
      return this.$route.path.indexOf(this.path) !== -1;
    },
    color() {
      return this.isActive ? { color: this.activeColor } : {};
    },
  },
  methods: {
    tabbaritemClick() {
      this.$router.push(this.path);
    },
  },
};
</script>

<style>
.tab-bar-item img {
  width: 24px;
  height: 24px;
  vertical-align: middle;
  margin: 3px 0 3px 0;
}
/* .active {
  color: red;
} */
</style>
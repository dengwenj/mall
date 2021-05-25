<template>
  <div>
    <detail-nar-bar></detail-nar-bar>
  </div>
</template>

<script>
import DetailNarBar from "./childComps/DetailNarBar";
export default {
  name: "Detail",
  data() {
    return {
      iid: null,
    };
  },
  components: {
    DetailNarBar,
  },
  created() {
    // this.$route处于活跃的那个路由
    this.iid = this.$route.params.iid;
  },
};
</script>

<style>
</style>
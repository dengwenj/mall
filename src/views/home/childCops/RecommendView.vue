<template>
  <div class="recommend">
    <div v-for="item in recommend" :key="item.sort" class="tuijian">
      <a :href="item.link">
        <img :src="item.image" alt="" />
        <div>{{ item.title }}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    recommend: Array,
    default() {
      return [];
    },
  },
};
</script>

<style>
.recommend {
  display: flex;
  font-size: 12px;
  text-align: center;
  margin-top: 10px;
  padding-bottom: 20px;
  border-bottom: 10px solid #eee;
}
.recommend .tuijian {
  flex: 1;
}
.recommend .tuijian a {
  display: block;
}
.recommend .tuijian a img {
  width: 80%;
  padding-bottom: 8px;
}
</style>
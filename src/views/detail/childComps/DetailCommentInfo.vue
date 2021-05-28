<template>
  <div class="comment" v-if="Object.keys(commentInfo).length !== -1">
    <div class="user">
      <span class="yonghu">用户评价</span>
      <span class="gengduo">更多</span>
    </div>
    <div class="chengzi">
      <div class="tupian">
        <img :src="commentInfo.user.avatar" alt="" />
        <span class="dawn">{{ commentInfo.user.uname }}</span>
      </div>
      <div class="p">
        <p>{{ commentInfo.content }}</p>
      </div>
      <div class="style">
        <span class="date">{{ commentInfo.created | showDate }}</span>
        <span>{{ commentInfo.style }}</span>
      </div>
      <div class="i" v-if="commentInfo.images">
        <div class="ii" v-for="item in commentInfo.images" :key="item">
          <img :src="item" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { formatDate } from "common/utils";
export default {
  props: {
    commentInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  filters: {
    showDate(value) {
      // 将时间戳转成date对象
      const date = new Date(value * 1000);
      // 将date进行格式化，转成对应的字符串
      return formatDate(date, "yyyy-MM-dd hh:mm");
    },
  },
};
</script>

<style scoped>
.comment {
  margin-top: 20px;
}
.user {
  display: flex;
  border-bottom: 2px solid #f4f4f5;
  padding-bottom: 10px;
}
.user > span {
  flex: 1;
  color: #696969;
  font-size: 14px;
}
.yonghu {
  padding-left: 10px;
}
.gengduo {
  text-align: right;
  padding-right: 20px;
}
.tupian {
  padding: 15px 0 0 10px;
}
.tupian img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  vertical-align: middle;
}
.tupian .dawn {
  margin-left: 10px;
  color: #5d5d5d;
  font-size: 14px;
}
.p {
  padding: 10px 0 0 20px;
  font-size: 14px;
  color: #b7b7b7;
}
.style {
  padding: 10px 0 0 20px;
  font-size: 14px;
  color: #c5c5c5;
}
.date {
  margin-right: 5px;
}
.chengzi {
  padding-bottom: 20px;
  border-bottom: 3px solid #f4f4f5;
}
.i {
  margin: 5px 0 0 15px;
}
.ii {
  display: inline-block;
  margin-right: 5px;
}
.ii img {
  width: 70px;
  height: 70px;
}
</style>
<template>
  <div class="cart-list-item">
    <check-button
      :isBorder="product.isBorder"
      @click.native="checkClick"
    ></check-button>
    <div class="img">
      <img :src="product.image" alt="" />
    </div>
    <div class="si">
      <h4>{{ product.title }}</h4>
      <p>{{ product.desc }}</p>
      <div class="jgsl">
        <span class="m">￥{{ product.price }}</span>
        <i class="i">×{{ product.count }}</i>
      </div>
    </div>
  </div>
</template>

<script>
import CheckButton from "./CheckButton";
export default {
  props: {
    product: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  components: {
    CheckButton,
  },
  methods: {
    checkClick() {
      this.product.isBorder = !this.product.isBorder;
    },
  },
};
</script>

<style scoped>
.cart-list-item {
  display: flex;
  /* background: #f3f3f3; */
  height: 100px;
  border-bottom: 1px solid #ccc;
}

.img {
  margin: 5px 0 0 5px;
  width: 20%;
  height: 90%;
}
.img img {
  width: 100%;
  height: 100%;
  border-radius: 5px;
}
.si {
  width: 70%;
  margin-left: 10px;
}
.si h4 {
  margin: 10px 0 10px 0;
  font-weight: 400;
  font-size: 14px;
  color: #404040;
}
.si p {
  font-size: 13px;
  color: #adadad;
  margin-bottom: 22px;
}
.si h4,
p {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.m {
  float: left;
  color: #fe8a63;
}
.i {
  float: right;
  font-style: normal;
  margin-right: 10px;
}
</style>
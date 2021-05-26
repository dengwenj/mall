<template>
  <div v-if="Object.keys(goodsParam).length !== 0">
    <table class="table">
      <tbody>
        <tr v-for="item in goodsParam.tables[0]" :key="item[0]">
          <td>{{ item[0] }}</td>
          <td>{{ item[1] }}</td>
          <td>{{ item[2] }}</td>
          <td>{{ item[3] }}</td>
          <td>{{ item[4] }}</td>
        </tr>
      </tbody>
    </table>
    <ul>
      <li v-for="item in goodsParam.set" :key="item[0]">
        <span class="age">{{ item.key }}</span>
        <span class="y">{{ item.value }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    goodsParam: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style scoped>
.table {
  width: 100%;
  text-align: center;
  border-collapse: collapse;
  font-size: 13px;
}
.table tr {
  height: 50px;
}
.table tr td {
  border-bottom: 1px solid #eee;
}
ul {
  margin-top: 10px;
  border-bottom: 3px solid #f4f4f5;
}
ul li {
  position: relative;
  padding: 10px;
  padding-left: 20px;
  border-bottom: 1px solid #eee;
  font-size: 13px;
  height: 50px;
}
li:last-child {
  border: 0;
}
.y {
  position: absolute;
  top: 10px;
  left: 75px;
  padding-left: 50px;
  color: #ec9aab;
}
</style>
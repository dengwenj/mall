import Toast from "components/common/toast/Toast";

const obj = {}

obj.install = function(Vue) {
  // console.log(Vue);
  // 1 创建组件构造器
  const toastC = Vue.extend(Toast);

  // 2 new组件构造器，创建组件对象
  const toast = new toastC();

  // 3 将组件对象，手动挂载到某一个元素
  toast.$mount(document.createElement('div'))

  // 4 添加在body上
  document.body.appendChild(toast.$el)

  Vue.prototype.$toast = toast;
}

export default obj
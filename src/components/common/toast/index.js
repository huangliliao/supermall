import Toast from './Toast'

const obj = {};
  obj.install = function (Vue) {
  //1.创建组件构造器
  const toastContrustor = Vue.extend(Toast);
  //2.new的方式，创建一个组件对象
  const toast = new toastContrustor();
  //3.将组件对象挂在到某个元素上
  toast.$mount(document.createElement('div'));
  //4.$toast.$el对应的就为这个div
  document.body.appendChild(toast.$el);
  //5.vue的原型上添加 其他的也有这个属性
  Vue.prototype.$toast = Toast;
};


export default obj;
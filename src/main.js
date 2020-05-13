
import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import toast from 'components/common/toast/index'
import FastClick from 'fastclick'
import VueLazyLoad from 'vue-lazyload'
Vue.config.productionTip = false;
//事件总线
Vue.prototype.$bus = new Vue();
//安装插件
//Vue.use(toast);
//解决移动端300s延迟
FastClick.attach(document.body)
//图片懒加载
Vue.use(VueLazyLoad)

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
Vue.config.productionTip = false
Vue.prototype.$axios = axios
axios.defaults.baseURL = '/api'  //关键代码
Vue.config.productionTip = false
Vue.use(Element);

// 如果要跨域的话, 对axios进行一些设置,当前使用的是跨域的
const axiosInstance = axios.create({
  headers: {'Content-Type': 'application/json;charset=utf-8'},// 设置传输内容的类型和编码
  withCredentials: true,// 指定某个请求应该发送凭据。允许客户端携带跨域cookie，也需要此配置
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

import Vue from 'vue';
import App from './App';
import qs from 'qs';
// 引用API文件
import ElementUI from 'element-ui';
import locale from 'element-ui/lib/locale/lang/en'
import 'element-ui/lib/theme-chalk/index.css';
import router from './router';
import VueAxios from 'vue-axios';
import axios from 'axios';


Vue.use(ElementUI, { locale })
Vue.use(VueAxios,axios);
//axios.defaults.baseURL = 'http://121.41.24.184:9183/';
axios.defaults.baseURL = 'http://127.0.0.1:9183/';
Vue.prototype.$qs = qs;
Vue.config.productionTip = false;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
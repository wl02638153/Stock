import Vue from 'vue'
import App from './views/App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
//import './custom.scss'
import 'bootstrap'
import 'admin-lte/dist/css/adminlte.min.css'
import 'admin-lte/dist/js/adminlte.min.js'



import $ from 'jquery';
// 讓瀏覽器的全域環境可以使用到 $
// import jQuery from 'jquery'
// window.$ = window.jQuery = jQuery

//import "./assets/scss/common.scss";

//AdminLTE
// import './assets/lib/AdminLTE-master/plugins/fontawesome-free/css/all.min.css';
// import './assets/lib/AdminLTE-master/plugins/tempusdominus-bootstrap-4/css/tempusdominus-bootstrap-4.min.css';
// import './assets/lib/AdminLTE-master/plugins/icheck-bootstrap/icheck-bootstrap.min.css';
// import './assets/lib/AdminLTE-master/plugins/jqvmap/jqvmap.min.css';
// import './assets/lib/AdminLTE-master/css/adminlte.min.css';
// import './assets/lib/AdminLTE-master/plugins/overlayScrollbars/css/OverlayScrollbars.min.css';
// import './assets/lib/AdminLTE-master/plugins/daterangepicker/daterangepicker.css';
// import './assets/lib/AdminLTE-master/plugins/summernote/summernote-bs4.min.css';




Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
//Vue.use($);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

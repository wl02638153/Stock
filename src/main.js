import Vue from 'vue'
import App from './views/App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
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
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

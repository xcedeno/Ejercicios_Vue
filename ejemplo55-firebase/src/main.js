import Vue from 'vue';
import App from './App.vue';
import router from './router';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import firebase from 'firebase';
import { fireconfig } from "./config/firebaseConfig";
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import './plugins/element.js'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.config.productionTip = false

firebase.initializeApp(fireconfig);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

function name(params) {
 return 
}

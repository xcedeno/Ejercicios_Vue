import Vue from 'vue';
import App from './App.vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import firebase from 'firebase';
import {firebaseConfig} from './config/firebaseConfig';
import Notifications from 'vue-notification';

firebase.initializeApp(firebaseConfig);

console.log(process.env.VUE_APP_EJEMPLO_KEY);

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(Notifications);
Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app')

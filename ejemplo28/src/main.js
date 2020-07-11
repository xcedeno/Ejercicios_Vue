import Vue from 'vue';
import App from './App.vue';
import store from './store.js';
import Firebase from 'firebase';

Vue.config.productionTip = false;

const firebaseConfig = {

};

Firebase.initializeApp(firebaseConfig);

export const db = Firebase.firestore();

new Vue({
  store,
  render: h => h(App),
}).$mount('#app');
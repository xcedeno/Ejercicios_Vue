import Vue from 'vue';
import App from './App.vue';
import store from './store.js';
import Firebase from 'firebase';

Vue.config.productionTip = false;

const firebaseConfig = {
  apiKey: "AIzaSyA0tkMkpfJO8EpdLIXDITp1tvvBIcOV34E",
  authDomain: "listaejmplo.firebaseapp.com",
  databaseURL: "https://listaejmplo.firebaseio.com",
  projectId: "listaejmplo",
  storageBucket: "listaejmplo.appspot.com",
  messagingSenderId: "493373771129",
  appId: "1:493373771129:web:49a4178f6ea73c939b73a8"
};

Firebase.initializeApp(firebaseConfig);

export const db = Firebase.firestore();

new Vue({
  store,
  render: h => h(App),
}).$mount('#app');
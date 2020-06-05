import Vue from 'vue';
import App from './App.vue';
import router from './router/router';
import firebase from 'firebase';
import {firebaseConfig} from './config/firebaseConfig'
import 'bootstrap';

import { library } from "@fortawesome/fontawesome-svg-core";
import {faTrash, faLink, faListUl, faRandom, faUndo, faStar, faEnvelope} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

library.add(faTrash, faLink, faListUl, faRandom, faUndo, faStar, faEnvelope);

Vue.component('font-awesome-icon', FontAwesomeIcon);

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');

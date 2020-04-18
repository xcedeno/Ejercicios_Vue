/* eslint-disable */
import Vue from 'vue';
import App from './theme/App.vue';
import router from './router';
import store from './store';

const app = new Vue({
   router,
   store,
   render: h => h(App)
});

export {app, router, store}
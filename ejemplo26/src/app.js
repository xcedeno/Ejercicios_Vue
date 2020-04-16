/* eslint-disable */
import Vue from 'vue';
import App from './theme/App.vue';
import router from './router';

const app = new Vue({
   router,
   render: h => h(App)
})

export {app, router}
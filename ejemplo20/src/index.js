import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false;

new Vue({
    el: '#vm',
    render: h=>h(App),
});
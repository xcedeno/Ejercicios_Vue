import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false;

Vue.filter('suspensivos', (texto)=>{
  return texto.substring(0,100)+ '...';
});

new Vue({
  render: h => h(App),
}).$mount('#app');

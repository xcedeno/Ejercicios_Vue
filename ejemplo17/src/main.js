import Vue from 'vue';
import App from './App.vue';
import router from './rutas';
import store from './store';
import accounting from 'accounting';

Vue.config.productionTip = false;

Vue.filter('moneda', (valor)=>{
  return accounting.formatMoney(valor,"",2,".", ",");
});

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');

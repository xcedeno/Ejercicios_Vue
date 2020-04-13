import Vue from 'vue';
import App from './App.vue';
import 'bootstrap'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import accounting from 'accounting';

Vue.config.productionTip = false

Vue.filter('moneda', (valor)=>{
  return accounting.formatMoney(valor,"",2,".", ",");
});

new Vue({
  render: h => h(App),
}).$mount('#app')

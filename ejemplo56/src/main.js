import Vue from 'vue';
import App from './App.vue';
import router from './router/router';
import store from './store/store';
import Vuelidate from 'vuelidate';

Vue.use(Vuelidate);
Vue.config.productionTip = false;

Vue.directive('colores',(el,binding)=>{
  el.style.color = binding.value;
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

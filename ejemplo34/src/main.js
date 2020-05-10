import Vue from 'vue';
import App from './App.vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

Vue.config.productionTip = false;

Vue.directive('colorTexto', {
  bind(el,binding){
    el.style.color = 'blue';
    if (binding.modifiers['cursiva']) {
      el.style.fontStyle = 'italic';
    }
  }
})

Vue.directive('tipoTexto', {
  bind(el,binding){
    el.style.fontFamily = binding.value;
    el.style.color = 'red';

    if (binding.modifiers['negrita']) {
      el.style.fontWeight = 'bold';
    } else if (binding.modifiers['capitalize']) {
      el.style.textTransform = 'capitalize';
    }
  }
})


new Vue({
  render: h => h(App),
}).$mount('#app')

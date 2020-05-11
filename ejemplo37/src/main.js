import Vue from 'vue';
import App from './App.vue';
import 'bootstrap'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faCheck);
library.add(faTimes);

Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.config.productionTip = false;

//servico para emitir eventos
export var bus = new Vue({
  methods: {
    contando(numtareas){
      this.$emit("contando",numtareas)
    }
  },
});

new Vue({
  render: h => h(App),
}).$mount('#app');

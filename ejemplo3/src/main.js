import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

//filtrps globales
Vue.filter("mayusculas", (texto)=>{
  console.log(texto);
  let primeraLetra = texto.charAt(0).toUpperCase();
  let restoLetras = texto.slice(1,texto.length);
  console.log(primeraLetra);
  console.log(restoLetras);
  return primeraLetra + restoLetras;
});
Vue.filter("mayusculas2", (texto2)=>{
  console.log(texto2);
  let [primeraLetra,...restoLetras] = texto2
  console.log(primeraLetra);
  console.log(restoLetras);
  return primeraLetra.toUpperCase() + restoLetras.join('');
});

new Vue({
  render: h => h(App),
}).$mount('#app')

<template>
  <div>
    <h2>Convertidor de Divisas</h2>
    <div class="row">
      <div class="col s4 offset-s4">
        <label class="flow-text" for="de">De</label>
        <lista-cambios></lista-cambios>
      </div>
    </div>
    <div class="row">
      <div class="col s4 offset-s4">
        <label class="flow-text" for="a">A</label>
        <lista-cambios></lista-cambios>
      </div>
    </div>
    <div class="row">
      <div class="col s4 offset-s4">
        <label class="flow-text" for="monto">Monto</label>
        <input type="number" min="1">
      </div>
    </div>
    <div class="row">
      <div class="col s12">
        <h5>Valor de Conversón</h5>
      </div>
    </div>
  </div>
</template>

<script>
import ListaCambios from '../components/ListaCambios.vue';
import { monedaOpenEx, conversion } from "../conexiones/api_fixer";

export default {
  name: 'Cambios',
  components: { ListaCambios },
  data() {
    return {
      converResult: '',
      monedas: []
    }
  },
  methods: {
    convertir(){
      this.converResult = conversion(2000,'USD','EUR');
      console.log(this.converResult);
    },
  },
  created() {
    monedaOpenEx('USD')
    .then(datos =>{
      console.log(datos)
      this.monedas = datos;
    })
  }
}
</script>

<style scoped lang="scss">

</style>

<template>
  <div>
    <h2>Convertidor de Divisas</h2>
    <div class="row">
      <div class="col s4 offset-s4">
        <label class="flow-text" for="de">De</label>
        <lista-cambios @rataCambio="cambiosDivisas" :lista="monedas" :tipo="'de'"></lista-cambios>
      </div>
    </div>
    <div class="row">
      <div class="col s4 offset-s4">
        <label class="flow-text" for="a">A</label>
        <lista-cambios @rataCambio="cambiosDivisas" :lista="monedas" :tipo="'a'"></lista-cambios>
      </div>
    </div>
    <div class="row">
      <div class="col s4 offset-s4">
        <label class="flow-text" for="monto">Monto</label>
        <input type="number" min="1" v-model.number="monto">
      </div>
    </div>
    <div class="row">
      <div class="col s12">
        <hr>
        <h5>Valor de Conversón</h5>
        <p>{{convertir}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import ListaCambios from '../components/ListaCambios.vue';
import { monedaOpenEx , conversion } from "../conexiones/api_fixer";

export default {
  name: 'Cambios',
  components: { ListaCambios },
  data() {
    return {
      monedas: [],
      monto: '',
      de: '',
      a: '',
    }
  },
  computed: { 
    convertir(){
      if (this.monto > 0 && this.de && this.a){
        return conversion(this.monto,this.de, this.a);
      }else {
        return 0;
      }
    }
  },
  methods: {
    cambiosDivisas(tipo,valor){
      if (tipo == 'de') {
        this.de = valor;
      } else {
        this.a = valor;
      }
    },
  },
  created() {
    monedaOpenEx('USD')
    .then(datos =>{
      this.monedas = datos;
    })
  }
}
</script>

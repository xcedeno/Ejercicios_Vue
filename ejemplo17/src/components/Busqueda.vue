<template>
  <div>
    <p>Busqueda de Juegos</p>
    <input type="text" v-model="busqueda" />
    <p>
      Número de Juegos Disponibles:
      <span v-text="juegosDisponibles"></span>
    </p>
    <p>
      Cantidad de Juegos Totales:
      <span v-text="juegosTotales"></span>
    </p>
    <ListadoJuegos
      :entrada="busqueda"
      :busquedas="busquedaJuegos" 
      :cantidadJuegos="cantidadDeJuegosTotalesStock">
    </ListadoJuegos>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import ListadoJuegos from './ListadoJuegos';

export default {
  name: "Busqueda",
  data() {
    return {
      busqueda: '',
      totalJuegos: ''
    };
  },
  components: {
    ListadoJuegos
  },
  computed: {
    ...mapGetters([
      'cantidadDeJuegosTotalesStock',
      'juegosDisponibles'
      ]),
    juegosTotales() {
      let total = 0;
      for (const iterator of this.$store.getters.cantidadDeJuegosTotalesStock) {
        total = total + parseInt(iterator.stock);
      }
      return total;
    },
    busquedaJuegos(){
        return this.$store.getters.busquedaJuegos(this.busqueda);
    },
  }
};
</script>

<style>
    .lista {
        width: 500px;
        font-size: 18px;
    }
</style>
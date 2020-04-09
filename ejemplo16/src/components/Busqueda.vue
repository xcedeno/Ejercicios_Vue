<template>
  <div>
    <p>Busqueda de Juegos</p>
    <input type="text" v-model="busqueda" />
    <p>
      Cantidad de Juegos Totoal:
      <span v-text="juegosTotales"></span>
    </p>
    <p>Listado de Juegos</p>
    <ul class="lista" v-show="busqueda == ''">
        <li v-for="(item, index) in cantidadDeJuegos" :key="index" :style="{backgroundColor: item.color}">
            <label>{{item.codigo}} | {{item.nombre}} | {{item.stock}} | {{item.precio}}</label>
        </li>
    </ul>
    <ul class="lista" v-show="busqueda != '' && busquedaJuegos.length > 0">
        <li v-for="(item, index) in busquedaJuegos" :key="index" :style="{backgroundColor: item.color}">
            <label>{{item.codigo}} | {{item.nombre}} | {{item.stock}} | {{item.precio}}</label>
        </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Busqueda",
  data() {
    return {
      busqueda: "",
      totalJuegos: ""
    };
  },
  computed: {
    cantidadDeJuegos() {
      return this.$store.getters.cantidadDeJuegos;
    },
    juegosTotales() {
      let total = 0;
      for (const iterator of this.$store.getters.cantidadDeJuegos) {
        total = total + parseInt(iterator.stock);
      }
      return total;
    },
    busquedaJuegos(){
        return this.$store.getters.busquedaJuegos(this.busqueda);
    }
  }
};
</script>

<style scoped>
    .lista {
        width: 500px;
    }
</style>
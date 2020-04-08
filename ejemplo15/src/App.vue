<template>
  <div id="app">
      <img src="https://lyl-ingenieria.com/blog/wp-content/uploads/2017/08/INTEGRA-WAREHOUSE.jpg" alt="almacen">
      <h1 v-text="titulo"></h1>
      <hr>
      <p v-text="ocupado"></p>
      <p v-text="totalVentas"></p>
      <p v-text="totalDeudas"></p>
      <p v-text="creditos"></p>
      <h3>Productos Disponibles en el almacen:</h3>
      <ul>
        <li v-for="(item, index) in productosConCantidad" :key="index">
          <label v-text="item.name"></label>
        </li>
      </ul>
      <h3>Productos Baratos Disponibles en el almacen:</h3>
      <ul>
        <li v-for="(item, index) in productosConCantidadBaratos" :key="index">
          <label v-text="item.name"></label>
        </li>
      </ul>
      <h3>Busqueda de producto por Identificador: </h3>
      <input type="text" v-model="buscarID">
      <ul v-if="productoPorId.length > 0">
        <li v-for="(item, index) in productoPorId" :key="index">
          <label v-text="item.name"></label>
        </li>
      </ul>
      <p v-else>...</p>
  </div>
</template>

<script>
// En compilaciones completas, los ayudantes se exponen como Vuex.mapState
import {mapState, mapGetters} from 'vuex'

export default {
  name: 'App',
  data() {
    return {
      buscarID: ""
    }
  },
  computed: {
    titulo(){
      return "Almecen Web";
    },
    ...mapGetters([
      'productosConCantidad',
    ]),
    productosConCantidadBaratos(){
      return this.$store.getters.productosConCantidadBaratos;
    },
    productoPorId(){
      return this.$store.getters.productoPorId(this.buscarID);
    },
    ...mapState({
      ocupado(){
        // Al proporcionar la opción de tienda a la instancia raíz, la tienda se inyectará en todos los componentes secundarios de la raíz y estará disponible en ellos como this.$store
        console.log(this.$store.state.ocupado);
        let ocupado = this.$store.state.ocupado ? "Ocupado":"Disponible";
        return `Estado: ${ocupado}`;
      },
      creditos(state){
        return state.creditos ? "Tiene Credito":"No tiene credido";
      },
      totalVentas(){
        console.log(this.$store.state.totalVentas);
        return `Total Ventas: $${this.$store.state.totalVentas}`;
      },
      totalDeudas(state){
        return `Total Deudas: $${state.totalDeudas}`;
      }
    }),
  }
};
</script>

<style>
#app {
  font-size: 20px;
  background-color: azure;
}

#app img {
  width: 300px;
}
</style>

<template>
  <div>
      <h1>Ventas de Juegos</h1>
      <p>La cantidad de juegos con stock es: <span v-text="totalesJuegos"></span></p>
      <h1>Lista de juegos disponibles con stock</h1>
      <table>
        <thead>
          <th>Código</th>
          <th>Nombre</th>
          <th>Stock</th>
          <th>Precio</th>
          <th>Opción</th>
        </thead>
        <tbody>
          <tr v-for="(item, index) in listaJuegosConStock" :key="index">
            <td>{{item.codigo}}</td>
            <td>{{item.nombre}}</td>
            <td>{{item.stock}}</td>
            <td>{{item.precio | moneda}} CLP</td>
            <td><button @click="vendiendo(item)">Vender</button></td>
          </tr>
        </tbody>
      </table>
  </div>
</template>

<script>
export default {
  name: 'Ventas',
  methods: {
    vendiendo(productoVendido){
      this.$store.dispatch('ventaProducto',productoVendido);
    }
  },
  computed: {
    totalesJuegos(){
      let total = 0;
      this.$store.getters.cantidadDeJuegosTotalesStock.forEach((juego)=>{
        if (juego.stock > 0) {
            total++;
          }
      })
      return total;
    },
    listaJuegosConStock(){
      return this.$store.getters.cantidadDeJuegosTotalesStock;
    }
  },
}
</script>

<style>
  table {
    width: 85%;
    text-align: center;
    margin: 0 auto;
    font-size: 18px;
  }
  table, thead, tbody, tr, th, td {
    border: 1px solid black;
  }
  table thead {
    background-color: lightgrey;
  }
  button {
    background-color: lightskyblue;
    font-size: 18px;
    font-weight: 700;
  }
</style>
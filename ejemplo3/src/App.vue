<template>
  <div id="app">
    <p>{{mensaje | mayusculas}}</p>
    <p>{{mensaje | mayusculas2}}</p>
    <hr>
    <table>
      <thead>
        <th>Articulo</th>
        <th>Precio</th>
      </thead>
      <tbody>
        <tr v-for="(item, index) in articulos" :key="index">
          <td>{{item.nombre }}</td>
          <td>{{item.precio | moneda}}</td>
        </tr>
      </tbody>
    </table>
    <hr>
    <p>La versión 1.0 de VueJS fue lanzada el: <span>{{fecha | fechas}}</span></p>
  </div>
</template>

<script>

import accounting from 'accounting';

export default {
  name: 'App',
  data() {
    return {
      mensaje: "saludos desde la data del vuejs",
      articulos: [
        {nombre: "Celular", precio:"350"},
        {nombre: "TV", precio:"150"},
        {nombre: "PC", precio:"670"},
        {nombre: "Tableta", precio:"178"},
      ],
      fecha: "2015-10-27"
    }
  },
  //filtros locales
  filters: {
    moneda:(valor)=>{
      console.log(valor);
      return accounting.formatMoney(valor);
    }
  }
}
</script>


<style>
  body {
    background: #7f7f8025;
  }
</style>

<template>
  <div id="app">
    <p>Sin filtro: {{titulo}}</p>
    <hr>
    <p>Con filtro: {{titulo | mayuscula}}</p>
    <hr>
    <h3>Sin filtro: </h3>
    <p>{{texto1}}</p>
    <hr>
    <h3>Con filtro: </h3>
    <p>{{texto1 | suspensivos | mayuscula}}</p>
    <hr>
    <h3>Sin filtro: </h3>
    <p>{{temperatura}} ºF</p>
    <hr>
    <h3>Con filtro: </h3>
    <p>{{temperatura | convertir}}</p>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      titulo: 'Trabajando con Filtros locales',
      texto1: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem veniam eaque dolore. Ullam officia reprehenderit, sunt odit sed assumenda quod nihil doloribus, earum dolorum unde fugit eius. Earum, officia consequatur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque magni dolorem voluptate harum. Similique ab id assumenda quae nobis ut modi. Alias explicabo nulla quis veniam voluptatem odit ipsa aliquam?',
      temperatura: 120,
    }
  },
  filters: {
    mayuscula(texto){
      return texto.toUpperCase();
    },
    convertir(valor){
      return ((5*(valor-32))/9).toFixed(2) + 'ºC';
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

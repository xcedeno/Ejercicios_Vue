<template>
  <div>
      <div class="hero is-white is-gradient is-bold">
        <div class="hero-body">
          <h1 class="title">
            <span class="has-text-success">R&M</span>
            <span class="subtitle">Personajes</span>
          </h1>
          <button class="button is-success is-rounded" @click="traerDatos">Consultar</button>
        </div>
      </div>
      <div class="container">
        <div class="card">
          <div class="card-header">
            <img src="" alt="">
          </div>
          <div class="card-content">
            <h3 class="title">Nombre del Personaje</h3>
          </div>
        </div>
      </div> 
      <p>Mostrando datos</p>
      <p v-if="datosApi">{{datosApi}}</p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'App',
  data() {
    return {
      datosApi: ''
    }
  },
  methods: {
    async traerDatos(){
      let resultado = await axios.get('https://rickandmortyapi.com/api/character');
      console.log(resultado);
      this.datosApi = resultado.data.results;
    }
  },
}
</script>

<style>

</style>

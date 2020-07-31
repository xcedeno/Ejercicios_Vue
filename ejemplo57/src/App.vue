<template>
  <div>
      <div class="hero is-white is-gradient is-bold">
        <div class="hero-body">
          <h1 class="title">
            <span class="has-text-success">R&M</span>
            <span class="subtitle"> Personajes</span>
          </h1>
          <button class="button is-success is-rounded" @click="traerDatos">Consultar</button>
        </div>
      </div>
      <div class="container">
        <div class="columns is-desktop is-mobile is-tablet is-multiline is-centered">
          <div class="column is-12-mobile is-4-desktop is-4-tablet" v-for="(item, index) in datosApi" :key="index">
            <div class="card">
              <div class="card-header image figure">
                <img :src="item.image" :alt="index">
              </div>
              <div class="card-content">
                <h3 class="title is-size-6">{{item.name}}</h3>
                <button class="button is-success is-rounded is-small">Ver Más</button>
              </div>
            </div>
          </div>
        </div>
      </div> 
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
      console.log(resultado.data.results);
      this.datosApi = resultado.data.results;
    }
  },
}
</script>

<style>

</style>

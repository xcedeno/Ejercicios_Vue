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
            <personajes :personaje="item"></personajes>
          </div>
        </div>
        <nav class="pagination is-centered" role="navegation" aria-label="pagination">
          <a class="pagination-previous" @click="cambiarPagina(pagina-1)">Anterior</a>
          <ul class="pagination-list">
            <li>
              <a class="pagination-link is-current">{{pagina}}</a>
            </li>
          </ul>
          <a class="pagination-next" @click="cambiarPagina(pagina+1)">Siguiente</a>
        </nav>
      </div> 
  </div>
</template>

<script>
import axios from 'axios';
import Personajes from './components/Personajes.vue';

export default {
  name: 'App',
  data() {
    return {
      datosApi: '',
      pagina: 1,
      paginas: 1
    }
  },
  methods: {
    async traerDatos(){
      let params = {
        page: this.pagina
      };
      let resultado = await axios.get('https://rickandmortyapi.com/api/character',{params});
      this.paginas = resultado.data.info.pages;
      this.datosApi = resultado.data.results;
    },
    cambiarPagina(numPag){
      this.pagina = (numPag > 0 && numPag <= this.paginas) ? numPag : this.pagina;
      this.traerDatos();
    }
  },
  created() {
    this.traerDatos();
  },
  components: {
    Personajes
  }
}
</script>

<style>

</style>

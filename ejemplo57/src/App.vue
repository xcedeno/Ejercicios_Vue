<template>
  <div>
      <div class="hero is-white is-gradient is-bold">
        <div class="hero-body">
          <h1 class="title">
            <span class="has-text-success">R&M</span>
            <span class="subtitle"> Personajes</span>
          </h1>
          <div class="field has-addons is-pulled-right">
            <div class="control">
              <input type="text" class="input is-rounded" @keyup.enter="buscarDatos" v-model="busqueda">
            </div>
            <div class="control">
              <button class="button is-success is-rounded" @click="buscarDatos">Buscar</button>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="columns is-desktop is-mobile is-tablet is-multiline is-centered">
          <div class="column is-12-mobile is-4-desktop is-4-tablet" v-for="(item, index) in datosApi" :key="index">
            <personajes :personaje="item" @mostrarModal="mostrarModal"></personajes>
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
      <!-- Modal con bulma-->
      <div class="modal" :class="{'is-active': modal}" v-if="modal">
        <div class="modal-background" @click="modal = false"></div>
        <div class="modal-card">
          <header class="modal-card-head">
            <p class="modal-card-title">{{datoPersonaje.name}}</p>
            <button class="delete" aria-label="close" @click="modal = false"></button>
          </header>
          <section class="modal-card-body">
            <div class="box">
              <article class="media">
                <div class="media-left">
                  <figure class="image is-64x64">
                    <img :src="datoPersonaje.image" :alt="datoPersonaje.id+'-'+datoPersonaje.name">
                  </figure>
                </div>
                <div class="media-content">
                  <div class="content">
                    <p>
                     <small>Cantidad de Episodios: {{datoPersonaje.episode.length}}.</small> <br> <small> Fecha de Creación: {{datoPersonaje.created}}</small>
                      <br>
                        <em>Genero:</em> {{datoPersonaje.gender}}.<br> <em>Estado:</em> {{datoPersonaje.status}}. <br><em>Raza:</em> {{datoPersonaje.species}}.<br> <em>Origen:</em> {{datoPersonaje.origin.name}}
                    </p>
                  </div>
                </div>
              </article>
            </div>
          </section>
          <footer class="modal-card-foot">
            <button class="button" @click="modal = false">Cerrar</button>
          </footer>
        </div>
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
      datosApi: [],
      pagina: 1,
      paginas: 1,
      busqueda: '',
      modal: false,
      datoPersonaje: {}
    }
  },
  methods: {
    async traerDatos(){
      let params = {
        page: this.pagina,
        name: this.busqueda
      };
      let resultado = await axios.get('https://rickandmortyapi.com/api/character',{params});
      this.paginas = resultado.data.info.pages;
      this.datosApi = resultado.data.results;
    },
    cambiarPagina(numPag){
      this.pagina = (numPag > 0 && numPag <= this.paginas) ? numPag : this.pagina;
      this.traerDatos();
    },
    buscarDatos(){
      this.pagina = 1;
      this.traerDatos();
    },
    async mostrarModal(id){
      let resultado = await axios.get(`https://rickandmortyapi.com/api/character/${id}`);
      this.datoPersonaje = resultado.data;
      this.modal = true;
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

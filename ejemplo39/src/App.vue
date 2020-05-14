<template>
  <div class="container-fluid">
    <h1>Componentes en VueJS</h1>
        <button type="button" @click="seleccion='Shows'" class="btn btn-primary">Ver Series</button>
        <button type="button" @click="seleccion='StarWars'" class="btn btn-primary mx-2">Ver StarWars</button>
        <button type="button" @click="seleccion='Post'" class="btn btn-primary mx-2">Hacer Post</button>
    <keep-alive>
      <component :is="seleccion" :series="series"></component>
    </keep-alive>
  </div>
</template>

<script>
import Shows from './components/Shows.vue';
import StarWars from './components/StarWars.vue';
import Post from './components/Post.vue';
import axios from 'axios';

export default {
  name: 'App',
  data() {
    return {
      series:[],
      seleccion: 'Shows'
    }
  },
  components: {
    Shows,
    StarWars,
    Post
  },
  mounted() {
    axios.get('http://api.tvmaze.com/shows')
    .then(response => {
      this.series = response.data;
    })
    .catch(error => console.log(error))
  }
}
</script>

<style>

</style>

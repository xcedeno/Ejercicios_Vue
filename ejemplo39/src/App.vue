<template>
  <div class="container-fluid">
    <h1>Componentes en VueJS</h1>
    <a href="../">Regresar</a>
    <shows :series="series"></shows>
  </div>
</template>

<script>
import Shows from './components/Shows.vue'
import axios from 'axios';

export default {
  name: 'App',
  data() {
    return {
      series:[]
    }
  },
  components: {
    Shows
  },
  mounted() {
    axios.get('http://api.tvmaze.com/shows')
    .then(response => {
      console.log(response);
      this.series = response.data;
    })
    .catch(error => console.log(error))
  }
}
</script>

<style>

</style>

<template>
  <div class="container">
    <Rutas></Rutas>
    <div class="jumbotron">
      <router-view/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Rutas from '@/components/Rutas.vue';

export default {
  name: 'App',
  data() {
    return {
      
    }
  },
  components: {
    Rutas
  }
}
</script>

<style>

</style>

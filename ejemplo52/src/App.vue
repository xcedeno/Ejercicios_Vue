<template>
  <div class="container center">  
    <cambios></cambios>
    <lista-cambios></lista-cambios>
  </div>
</template>

<script>
import Cambios from './components/Cambios.vue';
import ListaCambios from './components/ListaCambios.vue';

export default {
  name: 'App',
  components: {
    Cambios,
    ListaCambios
  }
}
</script>

<style lang="scss">

</style>

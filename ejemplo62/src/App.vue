<template>
  <div id="app">
    <nav-bar v-show="$store.state.activoNavBar"></nav-bar>
    <router-view/>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';

export default {
  name: 'App',
  components: { NavBar },
  mounted() {
    this.$store.dispatch('indicadoresCumplimiento');
    this.$store.dispatch('listadoOrdenes');
  },
}
</script>

<style lang="scss">

</style>

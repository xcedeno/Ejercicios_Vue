<template>
  <div id="app">
    <NavBarPrincipal />
    <router-view />
  </div>
</template>

<script>
import NavBarPrincipal from "./components/NavBarPrincipal.vue";

export default {
  name: "AppPrincipal",
  components: {
    NavBarPrincipal,
  },
  beforeCreate(){
    this.$store.dispatch('getInfoHome');
    this.$store.dispatch('getEquipos');
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>

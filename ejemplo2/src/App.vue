<template>
  <div id="app">
    <input type="text" v-model="inicio" @keyup="cambioContador">
    <button @click="sumar">Sumar 1</button>
    <p v-text="contador"></p>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      contador: 0,
      inicio: 0
    }
  },
  methods: {
    sumar(){
      this.contador++;
    },
    cambioContador(){
      this.contador = this.inicio;
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin: 2em;
}
</style>

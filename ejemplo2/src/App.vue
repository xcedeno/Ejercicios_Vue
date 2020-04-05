<template>
  <div id="app">
    <input type="text" v-model="inicio" @keyup="cambioContador">
    <button @click="sumar(2)">Sumar + 2</button>
    <p v-text="contador"></p>
    <p @mousemove="valoresXY">
      valor de x: {{x}} <br>
      valor de y: {{y}}
    </p>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      contador: 0,
      inicio: 0,
      x: 0,
      y: 0
    }
  },
  methods: {
    sumar(dos){
      this.contador += dos;
    },
    cambioContador(){
      this.contador = this.inicio;
    },
    valoresXY(evento){
      this.x = evento.clientX;
      this.y = evento.clientY;
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

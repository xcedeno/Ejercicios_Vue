<template>
  <div id="app">
    <div class="titulo">
      <h1>Random Git Cat</h1>
    </div>
    <div class="formulario">
      <label for="titulo">
        Titulo: <input type="text" v-model="titulo">
      </label>
      <label for="filtro">Filtro
        <select v-model="filtro">
          <option value="blur">blur</option>
          <option value="mono">mono</option>
          <option value="sepia">sepia</option>
          <option value="negative">negative</option>
          <option value="paint">paint</option>
          <option value="pixel">pixel</option>
        </select>
      </label>
      <label for="color">Color
        <select v-model="color">
          <option value="red">Rojo</option>
          <option value="blue">Azul</option>
          <option value="green">Verde</option>
          <option value="yellow">Amarillo</option>
          <option value="white">Blanco</option>
        </select>
        <span class="circulo" :style="{backgroundColor: color}"></span>
      </label>
      <label for="">
          Tamaño<input type="number" v-model="medida">
      </label>
    </div>
    <div class="muestra">
      <button @click.prevent="buscar">Mostrar Gato</button>
      <componente-imagen :src="buscarURL" v-if="activo"/>
    </div>
  </div>
</template>

<script>
import CompoImg from './components/CompoImg.vue'

export default {
  name: 'App',
  data() {
    return {
      titulo: "Escribe una palabra corta",
      color: "blue",
      medida: "300",
      filtro: "blur",
      resultado: [],
      activo: false
    }
  },
  methods: {
    buscar(){
      fetch(`https://cataas.com/cat/gif/says/${this.titulo}?filter=${this.filtro}&color=${this.color}&size=${this.medida}`)
      .then(respuesta => {
          this.resultado = respuesta;
          this.activo = true
        })
      .catch(error => console.error(error));
    }
  },
  components: {
    "componente-imagen": CompoImg 
  },
  computed: {
    buscarURL(){
      return this.resultado.url;
    }
  },
}
</script>

<style scope>
  .titulo {
    margin-top: -25px;
    font-size: 24px;
    font-weight: 800;
    text-align: center;
    background: rgba(136, 162, 216, 0.795);
    height: 20vh;
  }
  .titulo h1 {
    padding-top: 35px;
  }
  .formulario {
    display: block;
    padding: 5px;
    background: rgba(218, 79, 79, 0.795);
    font-size: 18px;
    text-align: center;
  }
  .formulario label {
    display: block;
    margin: 10px;
    padding: 10px;
  }
  .muestra {
    text-align: center;
    padding: 10px;
    background: rgba(136, 162, 216, 0.795);
    height: auto;
  }
  .circulo {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-left: 10px;
    display: inline-block;
    vertical-align: middle;
  }
</style>

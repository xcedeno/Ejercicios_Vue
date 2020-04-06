<template>
  <div id="app">
      <h1>Lista de Personajes</h1>
      <CompoPersonaje v-for="(item, index) in personajes" :key="index"
        :persona="item.nombre"
        :src="item.src"
        :id="index"
      >
      </CompoPersonaje>
  </div>
</template>

<script>
import CompoPersonaje from './components/componente-personajes.vue'
export default {
    data() {
        return {
            personajes: [
              {nombre: "Rick Sanchez", src:"https://rickandmortyapi.com/api/character/avatar/1.jpeg"},
              {nombre: "Morty Smith", src:"https://rickandmortyapi.com/api/character/avatar/2.jpeg"},
              {nombre: "Summer Smith", src:"https://rickandmortyapi.com/api/character/avatar/3.jpeg"},
              {nombre: "Beth Smith", src:"https://rickandmortyapi.com/api/character/avatar/4.jpeg"},
              {nombre: "Jerry Smith", src:"https://rickandmortyapi.com/api/character/avatar/5.jpeg"},
              {nombre: "Abadango Cluster Princess", src:"https://rickandmortyapi.com/api/character/avatar/6.jpeg"},
              {nombre: "Abradolf Lincler", src:"https://rickandmortyapi.com/api/character/avatar/7.jpeg"},
          ]
        }
    },
    components: {
        CompoPersonaje
    }
}
</script>

<style scope>
  #app {
      background-image: url('https://rickandmortypod.com/wp-content/uploads/2018/11/cropped-RM_page-header_background1-3.png');
      background-repeat: no-repeat;
      background-size: cover;
      color: green;
  }
</style>
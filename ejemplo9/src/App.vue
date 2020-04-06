<template>
  <div id="app">
    <img class="imgPokemon" :src="imgPrincipal" alt="pokemon">
    <h2>PokeGuia</h2>
    <p>Nombre:<input type="text" id="busqueda" @keyup.enter="buscando"><button @click.prevent="buscando">Buscar</button></p>

    <div v-show="activo">
      <PokeGuia :nombre="llevarNombre" :foto="llevarFoto"></PokeGuia>
      <h3>Habilidades</h3>
      <ul>
        <li v-for="(item, index) in pokeHabilidad" :key="index">{{item.ability.name}}</li>
      </ul>
      <h3>Movimientos</h3>
      <ul>
        <li v-for="(item, index) in pokeMove" :key="index">{{item.move.name}}</li>
      </ul>
    </div>
          
  </div>
</template>

<script>
import PokeGuia from './components/PokeGuia.vue'

export default {
  name: 'App',
  data() {
    return {
      imgPrincipal: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1920px-International_Pok%C3%A9mon_logo.svg.png",
      pokemones:[],
      activo: false,
      pokeHabilidad: [],
      pokeMove: [],
    }
  },
  methods: {
    buscando(){
      let nombrePoke = document.getElementById("busqueda").value;
      if (nombrePoke && isNaN(nombrePoke)) {
          fetch(`https://pokeapi.co/api/v2/pokemon/${nombrePoke}`)
          .then(respuesta => respuesta.json())
          .then(datos => {
            this.pokemones = datos;
            this.pokeHabilidad = datos.abilities;
            this.pokeMove = datos.moves;
            this.activo = true;
          })
          .catch(error => {
            console.error(error);
            alert("El nombre no se encuentra en la base de datos");
          })
      }else{
        alert("Debe ingresar un nombre valido en el campo")
      }
    },
    pikachu: async function () {
      let respuesta = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu");
      let datos = await respuesta.json();
          this.pokemones = datos;
          this.pokeHabilidad = datos.abilities;
          this.pokeMove = datos.moves;
          this.activo = true;
      }
  },
  components: {
    PokeGuia
  },
  computed: {
    llevarFoto(){
      return this.pokemones.sprites.front_default;
    },
    llevarNombre(){
      return this.pokemones.name;
    }
  },
  created() {
    this.pikachu();
  },
}
</script>

<style scope>
  #app {
    text-align: center;
  }
 .imgPokemon{
    width: 30%;
 }
</style>

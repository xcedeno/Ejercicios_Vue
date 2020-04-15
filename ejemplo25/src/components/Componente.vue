<template>
  <div class="hello">
    <h1>Componente</h1>
    <p>{{$store.state.mensaje}}</p>
    <p>Llamando desde el getters</p>
    <p>{{$store.getters.llamadoVariables}}</p>
    <hr>
    <h3>{{$store.getters.nombreCompleto}}</h3>
    <h2>Objetos:</h2>
    <input type="text" v-model="objeto">
    <button @click="agregandoObjeto">Agregar</button>
    <ul>
      <li v-for="(item, index) in $store.state.objetos" :key="index">
        {{item}} <button @click="borrar(index)">Eliminar</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Componente',
  data() {
    return {
      objeto: ''
    }
  },
  methods: {
    agregandoObjeto(){
      this.$store.dispatch('agregandoObjeto',this.objeto);
      this.objeto = '';
    },
    borrar(index){
      this.$store.commit('borrarObjeto',index);
    }
  },
}
</script>

<style scoped>

</style>

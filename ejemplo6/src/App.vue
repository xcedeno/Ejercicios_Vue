<template>
  <div id="app">
    <h1>Lista de Tareas pasando Props</h1>
    <h2>Creando una Nueva Tarea</h2>
    <p>Tarea <input type="text" id="agregar" placeholder="Agrega la tarea aquí"><button @click.prevent="agregando">Crear</button></p>
    <div v-show="activo">
      <hr>
      <h2>Tareas:</h2>
      <listaTareas v-for="(item, index) in tareas" :key="index"
          :id="index"
          :tarea="item"
          @borrar="borrando"
      />
    </div>
  </div>
</template>

<script>
import listaTareas from './components/listaTareas.vue'

export default {
  name: 'App',
  data() {
    return {
      id: null,
      activo: false,
      tareas:[]
    }
  },
  methods: {
    agregando(){
      let tareaNueva = document.getElementById("agregar").value;
      this.tareas.push(tareaNueva);
      this.activo = true;
    },
    borrando(id){
      console.log(id);
      this.tareas = this.tareas.filter(valor=>valor != this.tareas[id]);
    }
  },
  components: {
    listaTareas
  }
}
</script>

<style>

</style>

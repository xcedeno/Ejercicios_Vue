<template>
  <div class="container">
    <div class="jumbotron">
      <h1 class="display-4" v-text="titulo"></h1>
      <p>{{numtareas}}</p>
      <tarea-component :tareas="tareas" @agregando="numtareas += $event"></tarea-component>
      <lista-tareas :tareas="tareas" @quitar="numtareas--"></lista-tareas>
    </div>
  </div>
</template>

<script>
import TareaComponent from './components/TareaComponent.vue';
import ListaTareas from './components/ListaTareas.vue';
import { bus, db } from "./main.js";

export default {
  name: 'App',
  data() {
    return {
      titulo: 'Lista de Tareas',
      numtareas: 0,
      tareas: []
    }
  },
  components: {
    TareaComponent,
    ListaTareas
  },
  created() {
    bus.$on('contando',(dato)=>{
      this.numtareas = dato;
    })
    db.collection('tareas').orderBy('creado').onSnapshot((resul)=>{
      this.tareas = [];
      this.numtareas = 0;
      resul.forEach(elementos =>{
        this.numtareas++;
        this.tareas.push({
          id: elementos.id,
          evento: elementos.data().evento,
          terminada: elementos.data().terminada
        })
      })
    })   
  },
}
</script>

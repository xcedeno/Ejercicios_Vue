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
import { bus } from "./main.js";
import { db } from "./main.js";

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
  beforeCreate() {
    db.collection('tareas').orderBy('creado').onSnapshot((resul)=>{
      resul.forEach(elementos =>{
        this.numtareas++;
        console.log(elementos.data());
        this.tareas.push({
          evento: elementos.data().evento,
          terminada: elementos.data().terminada
        })
      })
    }) 
  },
  created() {
    bus.$on('contando',(dato)=>{
      this.numtareas = dato;
    })  
  },
}
</script>

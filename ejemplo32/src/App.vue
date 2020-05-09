<template>
  <div class="container">
    <div class="jumbotron">
      <h1 class="display-4" v-text="titulo"></h1>
      <tarea-component :tareas="tareas"></tarea-component>
      <lista-tareas :tareas="tareas"></lista-tareas>
    </div>
  </div>
</template>

<script>
import TareaComponent from './components/TareaComponent.vue';
import ListaTareas from './components/ListaTareas.vue'

export default {
  name: 'App',
  data() {
    return {
      titulo: 'Lista de Tareas',
      tareas: [
        {evento: "Aprender VueJS", terminada: false},
        {evento: "Aprender ReactJS", terminada: false},
        {evento: "Aprender AngularJS", terminada: false}
      ]
    }
  },
  components: {
    TareaComponent,
    ListaTareas
  }
}
</script>

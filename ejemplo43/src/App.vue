<template>
  <div class="app">
    <h1>Lista de Actividades con Bus de Datos</h1>
    <todo-list :todos = "todos"></todo-list>
    <todo-add></todo-add>
  </div>
</template>

<script>
import TodoAdd from './components/TodoAdd.vue';
import TodoList from './components/TodoList.vue';

export default {
  name: 'App',
  data() {
    return {
        todos: [
          {texto: 'Tarea 1'},
          {texto: 'Tarea 2'},
        ],
    }
  },
  components: {
    TodoAdd,
    TodoList
  }
}
</script>

<style lang="scss">
.app {
  background-color: azure;
  width: 80%;
  height: 70vh;
  margin: 20px;
  font-size: 1.1rem;
  padding: 1rem;
    h1 {
      text-align: center;
    }
}
</style>

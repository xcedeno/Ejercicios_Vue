<template>
  <div id="app" class="ToDo-container">
    <h1 class="ToDo-title">Lista de tareas con Vuex</h1>
    <todo-add></todo-add>
    <todo-list></todo-list>
  </div>
</template>

<script>
import TodoAdd from './components/TodoAdd.vue';
import TodoList from './components/TodoList';

export default {
  name: 'App',
  components: {
    TodoAdd,
    TodoList,
  }
}
</script>

<style>
:root {
  --color-primary: #41B883;
  --color-secondary: #35495E;
}

html {
  font-family: sans-serif;
  font-size: 16px;
  line-height: 1.6;
}

body {
  margin: 0;
  height: 100vh;
  display: flex;
  background: linear-gradient(180deg, var(--color-secondary), var(--color-primary));
  color: #333;
}

a {
  display: block;
  margin: 1rem auto;
  text-align: center;
  color: var(--color-secondary);
  transition: all .3s ease-out;
}

a:hover {
  color: var(--color-primary);
}

.ToDo-container {
  margin: auto;
  padding: 1rem;
  width: 24rem;
  background-color: #FFF;
  border-radius: .5rem;
  box-shadow: 0 0 2rem rgba(0, 0, 0, .25);
}

.ToDo-title {
  text-align: center;
  margin-top: 0;
}

.ToDo-input {
  width: 100%;
  padding: .5rem;
  font-size: 1rem;
  outline: none;
  border-radius: .25rem;
  border: solid 1px #EEE;
  box-sizing: border-box;
}

.ToDo-.tasks {
  padding-left: 1.5rem;
}

.ToDo-task {
  margin-bottom: .5rem;
}

.ToDo-task:hover {
  cursor: pointer;
}

.completed {
  text-decoration: line-through;
  background-color: rgba(148, 41, 41, 0.151);
  color: #555;
}
</style>

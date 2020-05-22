<template>
  <div class="todoAdd">
    <form @submit.prevent="agregarLista">
      <input type="text" placeholder="Agregar una tarea" v-model="texto">
      <button type="submit">Agregar</button>
    </form>
  </div>
</template>

<script>
import { eventBus } from "../main";

export default {
  name: 'TodoAdd',
  data() {
      return {
          texto: '',
      }
  },
  methods: {
      agregarLista(){
        if (this.texto){
            let tareas = {
              texto: this.texto
            };
            console.log(tareas);
            eventBus.$emit('agreTarea', tareas);
            this.texto = '';
        } else {
            alert("Ingrese una tarea por realizar");
        }
      }
  },
}
</script>

<style scoped lang="scss">
 .todoAdd {
    form {
        button {
            margin: 10px;
            padding: 10px;
            font-size: 1.2rem;
            background-color: lavenderblush;
        }
        input {
            font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
            font-size: 1.2rem;
            padding: 10px;
        }
    }
 }
</style>
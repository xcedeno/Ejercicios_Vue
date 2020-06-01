<template>
  <div>
    <form @submit.prevent="addTodo">
      <input class="ToDo-input" type="text" placeholder="Agrega una tarea" v-model="tarea">
      <button @click.prevent.stop="addTodo">Agregar</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'TodoAdd',
  data() {
    return {
      tarea: '',
    }
  },
  methods: { 
    addTodo(){
      if (this.tarea){
        this.$store.dispatch('agregando',this.tarea);
        this.tarea = '';
      } else {
        console.log("Debe agregar una actividad");
      }
    } 
  }
}
</script>

<style scoped>

</style>

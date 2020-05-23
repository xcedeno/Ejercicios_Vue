<template>
  <div>
    <form @submit.prevent="addTodo">
      <input class="ToDo-input" type="text" placeholder="Agrega una tarea" v-model="tarea">
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
        alert("Debe agregar una actividad");
      }
    } 
  }
}
</script>

<style scoped>

</style>

<template>
  <div>
    <ul class="ToDo-tasks">
        <li v-for="(item,index) in tareas" :key="index" @click="cambioTarea(item.id)" @dblclick="borrandoTarea(item.id)" class="ToDo-tasks" :class="{completed: item.completo}">
          {{item.task}}
        </li>
    </ul>
  </div>
</template>

<script>
export default {
    name: 'TodoList',
    computed: {
        tareas(){
            return this.$store.getters.mostrarTodos;
        }
    },
    methods: {
        cambioTarea(id){
            this.$store.dispatch('actualizando',id);
        },
        borrandoTarea(id){
            this.$store.dispatch('eliminando',id);
        }
    },
}
</script>

<style scoped>

</style>
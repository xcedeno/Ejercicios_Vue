<template>
  <div class="hello">
    <ul>
      <li>{{tarea}} <button @click.prevent="eliminar(id)">Eliminar</button></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'listaTareas',
  props: {
    id: {
      type: Number,
      required: true
    },
    tarea: {
      type: String,
      required: true
    }
  },
  methods: {
    eliminar(id){
      this.$emit('borrar', id);
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

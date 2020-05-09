<template>
  <div>
      <ul class="list-group">
        <li v-for="(item, index) in tareas" :key="index" class="list-group-item d-flex justify-content-between align-items-center">
            {{item.evento}}
            <span>
                <button class=" mx-2 d-inline btn btn-success button-small boton1"><font-awesome-icon icon="check" /></button><button class="d-inline btn btn-danger button-small"><font-awesome-icon icon="times" /></button>
            </span>
        </li>
      </ul>
  </div>
</template>

<script>
export default {
    name: 'ListaTareas',
    props: {
        tareas: {
            type: Array,
            required: true
        }
    }
}
</script>

<style scoped>
.boton1 {
    display: block;
}
</style>
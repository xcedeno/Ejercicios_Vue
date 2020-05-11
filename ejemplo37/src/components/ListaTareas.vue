<template>
  <div>
      <ul class="list-group">
        <li v-for="(item, index) in tareas" :key="index" class="list-group-item d-flex justify-content-between align-items-center" :class="{texto: item.terminada}">
            {{item.evento}}
            <span>
                <button class="mx-2 d-inline btn btn-success button-small" @click="item.terminada = !item.terminada"><font-awesome-icon icon="check" /></button><button class="d-inline btn btn-danger button-small" @click="borrar(index)"><font-awesome-icon icon="times" /></button>
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
    },
    methods: {
        borrar(index){
            this.tareas.splice(index,1);
            this.$emit("quitar")
        },
    },
}
</script>

<style scoped>
.texto {
    text-decoration-line: line-through;
    color: rgba(255, 100, 100, 0.8)
}
</style>
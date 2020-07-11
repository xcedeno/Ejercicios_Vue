<template>
  <div>
      <h1 class="text-center text-muted">Buscador de Cursos</h1>
      <busqueda></busqueda>
  </div>
</template>

<script>
import Busqueda from './Busqueda.vue';

export default {
    name: 'CursosApp',
    components: { Busqueda }
}
</script>

<style>

</style>
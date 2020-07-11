<template>
<div class="container mt-5">
  <div class="row">
      <div class="col">
        <div class="form-group mb-2">
          <label for="escribeBusqueda" class="sr-only">Escribe tu Busqueda</label>
          <input class="form-control" type="text" v-model="buscar">
        </div>
        <div class="form-group form-check-inline">
          <input type="radio" class="form-radio-input" v-model="cursoCompleto" :value="true">
          <label class="form-radio-input">Completo</label>
        </div>
        <div class="form-group form-check-inline">
          <input type="radio" class="form-radio-input" v-model="cursoCompleto" :value="false">
          <label class="form-radio-input">Incompleto</label>
        </div>
      </div>
  </div>
  <div class="row">
    <div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4" v-for="(item, index) in buscar" :key="index">
      <div class="card">
        <img :src="item.image" class="card-img-top" :alt="item.id">
        <div class="card-body">
          <h5 class="card-title" v-text="item.name"></h5>
          <p class="card-text" v-text="item.description"></p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Curso completo {{item.completed ? 'Si':'No'}}</li>
        </ul>
        <div class="card-body">
          <a href="#" class="card-link">Completar</a>
          <a href="#" class="card-link">Eliminar</a>
          <a href="#" class="card-link">Editar</a>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Busqueda',
  computed: {
    buscar: {
      get(){
        console.log(this.$store.getters.fitroBusqueda)
        return this.$store.getters.fitroBusqueda;
      },
      set(valor){
        return this.$store.dispatch('cambiarBusqueda',valor);
      }
    },
    cursoCompleto: {
      get(){
        return this.$store.getters.filtroTerminado;
      },
      set(){
        return this.$store.dispatch('cambiarTermino');
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

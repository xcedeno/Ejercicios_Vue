<template>
<div class="container mt-5">
  <div class="row">
      <div class="col">
        <div class="form-group mb-2">
          <label for="escribeBusqueda" class="sr-only">Escribe tu Busqueda</label>
          <input class="form-control" type="text" v-model="buscar">
        </div>
        <div class="form-group form-check">
          <input type="checkbox" class="form-check-input" v-model="cursoCompleto">
          <label class="form-check-label" for="exampleCheck1">Completo</label>
        </div>
      </div>
  </div>
  <div class="row">
    <div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4" v-for="(item, index) in cursosGetters" :key="index">
      <div class="card">
        <img :src="item.image" class="card-img-top" :alt="item.name">
        <div class="card-body">
          <h5 class="card-title" v-text="item.title"></h5>
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
  data() {
    return {
      cursoCompleto: false,
      buscar: ''
    }
  },
  computed: {
    cursosGetters(){
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

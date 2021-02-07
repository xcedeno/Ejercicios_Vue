<template>
  <div class="container">
    <h2 class="text-center mt-5">Administrando la Lista de Opiniones</h2>
    <div class="mt-5" v-if="enviandoOpiniones.length > 0">
      <div class="table-responsive">
        <table class="table table-hover">
          <thead class="table-light">
            <th>#</th>
            <th>Persona</th>
            <th>Juego</th>
            <th>Opinion</th>
            <th></th>
            <th></th>
          </thead>
          <tbody>
            <tr v-for="(item,index) in enviandoOpiniones" :key="index">
              <td>{{index+1}}</td>
              <td v-text="item.nombre"></td>
              <td v-text="item.juego.name"></td>
              <td v-text="item.opinion"></td>
              <td><button type="button" class="btn btn-danger">Eliminar</button></td>
              <td><button type="button" class="btn btn-info">Editar</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="alert alert-danger mt-5" role="alert" v-else>
      No existen opinones por administrar.
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: 'ListaAdministrada',
  computed: {
    ...mapGetters(['enviandoOpiniones']),
  }
}
</script>
<template>
  <div class="container text-center">
    <div class="pantalla mt-5">
      <h2 class="text-white">Pantalla</h2>
    </div>
    <div class="asientos mt-5">
      <div class="row">
        <div class="col text-white font-weight-bold m-3 asiento" v-for="(asiento,index) in asientos" :key="index" v-text="asiento.id" :class="asiento.disponible ? 'disponible' : 'ocupado'" @click="selecionAsiento" :id="asiento.id"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'Sala',
    data() {
      return {
        asientos: [
          {
            id: 'A1',
            disponible: true
          },
          {
            id: 'A2',
            disponible: true
          },
          {
            id: 'A3',
            disponible: true
          },
          {
            id: 'A4',
            disponible: true
          },
          {
            id: 'A5',
            disponible: true
          },
          {
            id: 'A6',
            disponible: true
          },
        ]
      }
    },
    methods: {
      selecionAsiento(event){
        let asientoSeleccionado = this.asientos.find(item => item.id === event.target.id);
        asientoSeleccionado.disponible = !asientoSeleccionado.disponible;
      }
    },
}
</script>

<style>
  .pantalla {
    background-color: #5d87be;
  }

  .asiento{
    cursor: pointer;
  }
  .disponible{
    background-color: rgb(33, 84, 131);
  }

  .ocupado{
    background-color: crimson;
  }
</style>
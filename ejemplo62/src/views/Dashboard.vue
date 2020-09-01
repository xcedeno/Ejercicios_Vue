<template>
  <div>
    <b-breadcrumb :items="items" class="mb-0 breadcrumb__color"></b-breadcrumb>
    <div class="border__jumbotron">
      <b-jumbotron class="text-center font-weight-bold" lead="Vitrina"></b-jumbotron>
      <h3 class="mt-0">Bienvenido</h3>
      <p>Bienvenido al sistema de Ordenes e Inventario de ClassicModels</p>
    </div>
    <div>
      <div class="row mx-2">
        <div class="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 color__borde p-5">
          <div>
            <radial-progress-bar :diameter="150" :completed-steps="completedSteps" :total-steps="totalSteps" :startColor="'green'" :innerStrokeColor="'white'"></radial-progress-bar>
            <a class="text-center" href="http://" target="_blank" rel="noopener noreferrer">Ver detalles</a>
          </div>
        </div>
        <div class="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 color__borde p-5">
          <div>
            <radial-progress-bar :diameter="150" :completed-steps="completedSteps2" :total-steps="totalSteps2" :startColor="'green'" :innerStrokeColor="'white'"></radial-progress-bar>
            <a class="text-center" href="http://" target="_blank" rel="noopener noreferrer">Ver detalles</a>
          </div>
        </div>
      </div>
    </div>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue';
import RadialProgressBar from 'vue-radial-progress';

export default {
  name: 'Home',
  components: {
    HelloWorld,
    RadialProgressBar
  },
  data() {
    return {
      totalSteps: 75,
      completedSteps: 100,
      totalSteps2: 21,
      completedSteps2: 80,
      items: [
          {
            text: 'Home',
            active: true
          }
        ]
    }
  },
  mounted() {
    this.$store.dispatch("paginaActiva",true);
  },
}
</script>

<style lang="css">
  .breadcrumb__color {
    background-color: white;
  }
  .border__jumbotron {
    border: 1px solid black;
    margin: 10px;
    padding: 10px;
    border-radius: 10px;
  }
  .color__borde{
    border: 1px solid black;
    border-radius: 10px;
  }
</style>
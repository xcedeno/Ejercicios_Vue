<template>
  <div>
    <b-breadcrumb :items="items" class="mb-0 breadcrumb__color"></b-breadcrumb>
    <div class="border__jumbotron">
      <b-jumbotron class="text-center font-weight-bold" lead="Vitrina"></b-jumbotron>
      <h3 class="mt-0">Bienvenido</h3>
      <p>Bienvenido al sistema de Ordenes e Inventario de ClassicModels</p>
    </div>
    <b-container fluid class="">
      <b-row>
        <b-col>
          <div class="ordenes__diarias">
            <radial-progress-bar :diameter="150" :completed-steps="completedSteps" :total-steps="totalSteps" :startColor="'green'" :innerStrokeColor="'white'"></radial-progress-bar>
            <a class="text-center" href="http://" target="_blank" rel="noopener noreferrer">Ver detalles</a>
          </div>
        </b-col>
        <b-col>
          <div class="ordenes__diarias">
            <radial-progress-bar :diameter="150" :completed-steps="completedSteps2" :total-steps="totalSteps2" :startColor="'green'" :innerStrokeColor="'white'"></radial-progress-bar>
            <a class="text-center" href="http://" target="_blank" rel="noopener noreferrer">Ver detalles</a>
          </div>
        </b-col>
      </b-row>
    </b-container>

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
  .ordenes__diarias {
    border: 1px solid black;
    margin: 10px;
    padding: 10px;
    border-radius: 10px;
  }
</style>